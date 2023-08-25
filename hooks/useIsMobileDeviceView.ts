import { useState, useEffect } from 'react';

function useIsMobileDeviceView() {
    const isSSR = typeof window === 'undefined';
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(isSSR ? false : window.innerWidth <= 820);

    useEffect(() => {
        if (!isSSR) {
            const checkWindowSize = () => {
                setIsMobileDevice(window.innerWidth <= 820);
            };

            // Add event listener for window resize
            window.addEventListener('resize', checkWindowSize);

            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('resize', checkWindowSize);
            };
        }
    }, [isSSR]);

    return isMobileDevice;
}

export default useIsMobileDeviceView;
