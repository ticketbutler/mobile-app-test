import { NativeModule, requireNativeModule } from 'expo';

import { BatteryStatusModuleEvents } from './BatteryStatus.types';

declare class BatteryStatusModule extends NativeModule<BatteryStatusModuleEvents> {

}

// This call loads the native module object from the JSI.
export default requireNativeModule<BatteryStatusModule>('BatteryStatus');
