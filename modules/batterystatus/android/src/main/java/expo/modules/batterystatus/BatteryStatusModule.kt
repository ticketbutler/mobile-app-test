package expo.modules.batterystatus

import android.content.Context
import android.os.BatteryManager
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class BatteryStatusModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("BatteryStatus")

    val context: Context? = appContext.reactContext

    AsyncFunction("getLevel") { promise: Promise ->
      val battery = context?.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
      val lvl = battery.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
      promise.resolve(lvl)
    }

    Function("getStatus") { lvl: Any ->
      if (lvl as Int > 20) "ok" else "low"
    }
  }
}