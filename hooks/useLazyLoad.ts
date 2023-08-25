import { useEffect } from "react";
import LazyLoad from "vanilla-lazyload";

export const useLazyLoad = (selector: string) => {
    useEffect(() => {
        const lazyLoadInstance = new LazyLoad({
            elements_selector: selector,
            // Add any other configuration options as needed
        });

        return () => {
            lazyLoadInstance.destroy();
        };
    }, [selector]);
};
