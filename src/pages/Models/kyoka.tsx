import { Component, Suspense, useEffect, useMemo, useRef } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useAnimations, useFBX } from "@react-three/drei";
import type { AnimationAction, AnimationClip, Group } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

const MODEL_PATH = "/assets/models/kyoka/kyoka.fbx";
const ANIMATION_PATHS: string[] = [];

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
    console.error("FBX load error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const KyokaModel = () => {
  const model = useFBX(MODEL_PATH);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const importedAnimationAssets = useLoader(FBXLoader, ANIMATION_PATHS) as Group[];
  const animations = useMemo(() => {
    const rawClips =
      importedAnimationAssets.length > 0
        ? importedAnimationAssets.flatMap((asset) => asset.animations)
        : model.animations ?? [];

    // useAnimations uses clip names as action keys, so ensure duplicates are uniquely renamed.
    const clipNameCount = new Map<string, number>();
    return rawClips.map((clip) => {
      const nextCount = (clipNameCount.get(clip.name) ?? 0) + 1;
      clipNameCount.set(clip.name, nextCount);

      if (nextCount === 1) {
        return clip;
      }

      const cloned = clip.clone() as AnimationClip;
      cloned.name = `${clip.name}-${nextCount}`;
      return cloned;
    });
  }, [importedAnimationAssets, model.animations]);
  const { actions } = useAnimations(animations, model);

  useEffect(() => {
    model.traverse((node) => {
      if ("castShadow" in node) {
        node.castShadow = true;
      }
      if ("receiveShadow" in node) {
        node.receiveShadow = true;
      }
    });
  }, [model]);

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

  return <primitive object={model} scale={0.01} position={[0, -1, 0]} />;
};

const Kyoka = () => {
  return (
    <div style={{ padding: "8%", marginTop: "60px" }}>
      <h2>Kyoka</h2>
      <hr />
      <p>Humanoid FBXモデルを表示しています。複数のアニメーションクリップを自動でクロスフェード遷移しながら再生します。</p>

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
              FBXの読み込みに失敗しました。参照パスを確認してください。
              <br />
              model: {MODEL_PATH}
              <br />
              animations: {ANIMATION_PATHS.length > 0 ? ANIMATION_PATHS.join(", ") : "なし"}
            </div>
          }
        >
          <Canvas shadows camera={{ position: [0, 1.4, 3], fov: 40 }}>
            <color attach="background" args={["#0e0f14"]} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />
            <Suspense fallback={null}>
              <KyokaModel />
            </Suspense>
            <OrbitControls target={[0, 1, 0]} enablePan={false} minDistance={1.2} maxDistance={8} />
          </Canvas>
        </ModelErrorBoundary>
      </div>

      <p style={{ marginTop: "14px", opacity: 0.8 }}>
        配置先: public/assets/models/kyoka/kyoka.fbx
      </p>
      <p style={{ marginTop: "8px", opacity: 0.8 }}>
        追加アニメーション: kyoka.tsx の ANIMATION_PATHS に FBX パスを複数指定
      </p>
    </div>
  );
};

export default Kyoka;