import { Component, Suspense, useEffect, useMemo, useRef } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import type { AnimationAction, AnimationClip, Group, Object3D } from "three";
import modelUrl from "../../../assets/models/kyoka/Kyoka_share1.glb";

const MODEL_PATH = modelUrl;

type ModelErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type ModelErrorBoundaryState = {
  hasError: boolean;
};

class ModelErrorBoundary extends Component<ModelErrorBoundaryProps, ModelErrorBoundaryState> {
  state: ModelErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ModelErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("3D model load error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const KyokaModel = () => {
  const { scene, animations } = useGLTF(MODEL_PATH) as {
    scene: Group;
    animations: AnimationClip[];
  };
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Log GLB load success for debugging
  useEffect(() => {
    console.log("GLB model loaded successfully:", scene, "animations:", animations);
  }, [scene, animations]);
  
  const animationClips = useMemo(() => {
    return animations || [];
  }, [animations]);
  
  const { actions } = useAnimations(animationClips, scene);

  useEffect(() => {
    scene.traverse((node: Object3D) => {
      if ("castShadow" in node) {
        node.castShadow = true;
      }
      if ("receiveShadow" in node) {
        node.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    const playableActions = Object.values(actions).filter((action): action is AnimationAction => Boolean(action));
    const fadeDuration = 0.35;

    if (playableActions.length === 0) {
      return;
    }

    const playSequentially = (index: number, fromAction?: AnimationAction) => {
      const nextAction = playableActions[index];
      if (!nextAction) {
        return;
      }

      nextAction.enabled = true;
      nextAction.reset().play();

      if (fromAction) {
        fromAction.crossFadeTo(nextAction, fadeDuration, false);
      } else {
        nextAction.fadeIn(fadeDuration);
      }

      if (playableActions.length <= 1) {
        return;
      }

      const nextWaitMs = Math.max((nextAction.getClip().duration - fadeDuration) * 1000, 250);
      transitionTimerRef.current = setTimeout(() => {
        playSequentially((index + 1) % playableActions.length, nextAction);
      }, nextWaitMs);
    };

    playSequentially(0);

    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
      playableActions.forEach((action) => action.stop());
    };
  }, [actions]);

  return <primitive object={scene} scale={0.01} position={[0, -1, 0]} />;
};

const Kyoka = () => {
  return (
    <div style={{ padding: "8%", marginTop: "60px" }}>
      <h2>Kyoka</h2>
      <hr />
      <p>Kyoka の 3D モデルを表示しています。アニメーションが含まれている場合は自動で再生します。</p>

      <div style={{ height: "520px", borderRadius: "8px", overflow: "hidden", marginTop: "20px" }}>
        <ModelErrorBoundary
          fallback={
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                background: "#1f2937",
                color: "#fca5a5",
                padding: "16px",
                textAlign: "center",
              }}
            >
              3Dモデルの読み込みに失敗しました。参照パスを確認してください。
              <br />
              model: {MODEL_PATH}
            </div>
          }
        >
          <Canvas shadows camera={{ position: [0, 1.4, 3], fov: 40 }}>
            <color attach="background" args={["#0e0f14"]} />
            <ambientLight intensity={1.1} />
            <hemisphereLight intensity={1.2} color="#ffffff" groundColor="#2b2f3a" />
            <directionalLight position={[3, 5, 2]} intensity={2.2} castShadow />
            <directionalLight position={[-3, 2, -2]} intensity={0.8} color="#88aaff" />
            <pointLight position={[0, 2.5, 2.5]} intensity={18} distance={10} color="#ffffff" />
            <Suspense fallback={null}>
              <KyokaModel />
            </Suspense>
            <OrbitControls target={[0, 1, 0]} enablePan={false} minDistance={1.2} maxDistance={8} />
          </Canvas>
        </ModelErrorBoundary>
      </div>

      <p style={{ marginTop: "14px", opacity: 0.8 }}>
        配置先: src/assets/models/kyoka/Kyoka_share1.glb
      </p>
      <p style={{ marginTop: "8px", opacity: 0.8 }}>
        GLB形式のモデルを表示しています
      </p>
    </div>
  );
};

export default Kyoka;
