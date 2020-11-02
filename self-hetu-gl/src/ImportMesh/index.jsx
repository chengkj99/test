import { Vector3 } from '@babylonjs/core';
import React, { useEffect, useRef } from 'react';
import { useHasUnmounted } from '../../utils/useHasUnmounted';
import { useLoader } from './useLoder';

const ImportMesh = () => {
  const [loaded, {meshes}] = useLoader('../../assets/01_Kubo_JQR/Kubo_JQR.gltf')
  const unMountedRef = useHasUnmounted()
  const ref = useRef(null)

useEffect(() => {
    if (unMountedRef.current === true) {
        meshes.forEach((mesh) => mesh.dispose())
        return
    }

    if (meshes.length) {
        const parent = ref.current.hostInstance
        //@ts-ignore
        const root = meshes[0].clone(name, parent)

        root.doNotSyncBoundingInfo = true
        root.isPickable = true
        // const pbr = new PBRMetallicRoughnessMaterial('pbr', root.getScene())
        // root.material = pbr
        // pbr.metallic = 0
        // pbr.roughness = 0

        // TODO NOW
        // if (modelFix) {
        //     const { rotation, scale } = modelFix
        //     root.rotation = new Vector3(...rotation)
        //     root.scaling = new Vector3(...scale)
        // }

        // if (fixChildPosition) {
        //     root.getChildMeshes().forEach((child) => {
        //         child.position = Vector3.Zero()
        //     })
        // }

        if (root.material) {
            root.material.freeze()
        }

        // onLoaded && onLoaded(ref.current.hostInstance)
    }
}, [loaded])

return <transformNode name="gltf" ref={ref} position={new Vector3(0, 0, 0)} />
}

export default ImportMesh;
