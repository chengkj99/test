import { SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders";
import { useEffect, useState } from "react";
import { useBabylonScene } from "react-babylonjs-x";

function importMesh(url, scene ) {
    return new Promise(resolve => {
        SceneLoader.ImportMesh("", url, "", scene,
            function (meshes, particleSystems, skeletons, animationGroups) {
                resolve({meshes, particleSystems, skeletons, animationGroups});
            });
    })
}

// const memoImportMesh = memo(importMesh, (url) => {
//     return url;
// });

/**
 * TODO: support url[]
 * @param url
 */
export function useLoader(url) {
    const scene = useBabylonScene();
    const [loaded, setLoaded] = useState(false);
    const [results, setResults] = useState({
        meshes: [],
        particleSystems: [],
        skeletons: [],
        animationGroups: [],
    });

    useEffect(() => {
        importMesh(url, scene)
            .then((result) => {
                // result.meshes.forEach(mesh => {
                //     return mesh.clone();
                // })

                result.animationGroups.forEach(ani => ani.stop());

                setResults(result);
                setLoaded(true);
            })
    }, [url])

    return [loaded, results];
}
