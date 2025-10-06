import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { getBatteryLevel, getStatus } from '@/modules/batterystatus';

export default function App() {
  const [level, setLevel] = useState(0);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setInterval(async () => {
      const lvl = await getBatteryLevel();
      setLevel(lvl);
      setStatus(getStatus(lvl));
    }, 10000);
  }, []);

  const handlePress = async () => {
    const lvl = await getBatteryLevel();
    setLevel(lvl);
    setStatus(getStatus(lvl));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Battery Level: {level}%</Text>
      <Text>Status: {status}</Text>
      <Button title="Check Now" onPress={handlePress} />
    </View>
  );
}