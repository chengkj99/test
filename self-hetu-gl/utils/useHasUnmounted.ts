import {useEffect, useRef} from "react";

export function useHasUnmounted() {
    const unmountedRef = useRef(false);
    unmountedRef.current = false;

    useEffect(() => {
        return () => {
            unmountedRef.current = true;
        };
    }, []);

    return unmountedRef;
}
