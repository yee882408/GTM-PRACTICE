import React, { useEffect } from 'react';

const WarningOnExit = () => {
    useEffect(() => {
        // Function to handle the beforeunload event
        const handleBeforeUnload = (event) => {
            // Cancel the event as stated by the standard.
            event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = '';
        };

        // Add the event listener
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div>
            {/* Your component content goes here */}
        </div>
    );
};

export default WarningOnExit;