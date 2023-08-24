import { useState, useEffect } from 'react';

function useIsMobileDeviceView() {
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobileDevice(window.innerWidth <= 820);
        };

        // Initial check
        checkWindowSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkWindowSize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return isMobileDevice;
}

export default useIsMobileDeviceView;
