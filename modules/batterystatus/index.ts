import BatteryStatusModule from './src/BatteryStatusModule';

export function getBatteryLevel() {
  return BatteryStatusModule.getLevel();
}

export function getStatus(level: any) {
  return level > 20 ? 'ok' : 'low';
}