import { Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useFBX } from "@react-three/drei";

const MODEL_PATH = "/assets/models/kyoka/kyoka.fbx";

const KyokaModel = () => {
  const model = useFBX(MODEL_PATH);
  const animations = useMemo(() => model.animations ?? [], [model.animations]);
  const { actions, names } = useAnimations(animations, model);

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
    if (names.length === 0) {
      return;
    }

    const firstAnimationName = names[0];
    const firstAction = actions[firstAnimationName];
    firstAction?.reset().fadeIn(0.3).play();

    return () => {
      firstAction?.fadeOut(0.2);
    };
  }, [actions, names]);

  return <primitive object={model} scale={0.01} position={[0, -1, 0]} />;
};

const Kyoka = () => {
  return (
    <div style={{ padding: "8%", marginTop: "60px" }}>
      <h2>Kyoka</h2>
      <hr />
      <p>Humanoid FBXモデルを表示しています。アニメーションはFBX内の最初のクリップを自動再生します。</p>

      <div style={{ height: "520px", borderRadius: "8px", overflow: "hidden", marginTop: "20px" }}>
        <Canvas shadows camera={{ position: [0, 1.4, 3], fov: 40 }}>
          <color attach="background" args={["#0e0f14"]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />
          <Suspense fallback={null}>
            <KyokaModel />
          </Suspense>
          <OrbitControls target={[0, 1, 0]} enablePan={false} minDistance={1.2} maxDistance={8} />
        </Canvas>
      </div>

      <p style={{ marginTop: "14px", opacity: 0.8 }}>
        配置先: public/assets/models/kyoka/kyoka.fbx
      </p>
    </div>
  );
};

export default Kyoka;