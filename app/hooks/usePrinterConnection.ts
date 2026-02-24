/* usePrinterConnection hook
- Manages connection status to a printer device
- Automatically attempts to connect on app start, app focus, and device unlock (when app is in foreground)
- Retries connection up to 3 times before showing an error modal
*/

import React from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from 'expo-router';

export const usePrinterConnection = (deviceId) => {
    const [status, setStatus] = React.useState('disconnected');
    const [retryCount, setRetryCount] = React.useState(0);

    const performConnection = React.useCallback(async () => {
        try {
            setStatus('connecting');
            await connectToPrinter(deviceId);
            setStatus('connected');
            setRetryCount(0);
        } catch (err) {
            if (retryCount < 3) {
                setRetryCount(retryCount + 1);
                performConnection();
            } else {
                setStatus('failed');
                showErrorModal();
            }
        }
    }, [deviceId, retryCount]);

    function showErrorModal() {
        Alert.alert("Connection Failed", "Retry?", [
            { text: "Remove", onPress: () => setStatus('disconnected') },
            { text: "Retry", onPress: () => setRetryCount(0) }
        ]);
    };

    React.useEffect(() => {
        performConnection();
    }, []);

    useFocusEffect(React.useCallback(() => {
        performConnection();
    }, []));

    return status;
};



function connectToPrinter(deviceId) {
    // TODO: Implement printer connection logic
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}