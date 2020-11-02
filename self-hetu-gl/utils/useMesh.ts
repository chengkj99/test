import {MutableRefObject, useEffect, useRef} from "react";
import {Mesh, TransformNode} from "@babylonjs/core";
import {CreatedInstance, LoadedModel} from "react-babylonjs-x";


type $mesh = LoadedModel | Mesh | TransformNode  | null;
type $instance = CreatedInstance<$mesh>;

export function useMesh(callback: Function, deps: any[]): [MutableRefObject<$instance>, $mesh] {
    const ref = useRef<$instance>(null) as MutableRefObject<$instance>;
    let mesh: $mesh = null;

    useEffect(() => {
        if (ref.current) {
            const instance = ref.current.hostInstance;
            if (instance) {

                if (instance instanceof Mesh || instance instanceof TransformNode) {
                    mesh = instance;
                }

                if (instance instanceof LoadedModel) {
                    mesh = instance.rootMesh;
                }

                if (mesh) {
                    callback(mesh);
                }
            }
        }
    }, [ref, ...deps]);

    return [ref, mesh];
}

