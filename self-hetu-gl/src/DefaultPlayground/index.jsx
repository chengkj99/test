import { Vector3 } from "@babylonjs/core";
import React from "react";
import { Engine, Scene } from "react-babylonjs";
import ImportMesh from "../ImportMesh.jsx";
import "./index.css";

const DefaultPlayground = () => (
  <Engine canvasId="sample-canvas">
    <Scene>
      <arcRotateCamera
        name="camera11"
        position={new Vector3(0, 5, -10)}
        target={Vector3.Zero()}
        alpha={-(Math.PI / 2)}
        beta={Math.PI / 3}
        radius={10}
      />
      <hemisphericLight
        name="light11"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      // <sphere
      //   name="sphere11"
      //   diameter={2}
      //   segments={16}
      //   position={new Vector3(0, 1, 0)}
      // />
      <ImportMesh> </ImportMesh>
      // <ground name="ground1" width={6} height={6} subdivisions={2} />
    </Scene>
  </Engine>
);

export default DefaultPlayground;
