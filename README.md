
# Home Assistant (0.103.4) configuration

## Zigbee Network

I utilize the native ZHA integration.

## Current Zigbee Devices
* Coordinator
  * Xbee S2C
* Routers (Mains Powered Devices)
  * Switches
    * Jasco/GE
      * [2] Add on switches AS2005 https://byjasco.com/ge-enbrighten-add-switch-quickfit-and-simplewire (Used for 3 way switching)
      * [2] Relay switches 45856 https://byjasco.com/products/ge-zigbee-wall-smart-switch
      * [2] Dimming switches 45857 (Link removed from Jasco site, looks like they are releasing Zigbee 3.0 models)
    * Smart Plugs
      * [2] Sengled E11-N1EA https://us.sengled.com/products/sengled-smart-plug
      * [1] Sylvania Smart+ 72922-A https://consumer.sylvania.com/our-products/smart/product-info/zigbee/sylvania-smart-zigbee-indoor-smart-plug/index.jsp
    * Relays
      * [2] Aqara Relays Lumi LLKZMK11LM (I use these to control bathroom fans)
    * Ceiling Fan Controllers
      * [3] Hampton Bay 722493 (These work well but the range is limited)
    * Light Controllers (Dimmable)
      * [1] Sunricher ZG9101SAC-HP (used to control a 7 bulb bathroom vanity)
    * Light Controllers (RGB)
      * [1] Feibit Inc FZB56-ZCW27LX1.0 (Only works with encryption turned off)
    * Bulbs (RGB)
      * [2] Sengled E11-N1EA
      * [3] Osram Lightify A19 RGBW
    * Bulbs (Dimmable)
      * [2] GE Wink (Avoid These)
    * Bulbs (Temp Control)
      * [2] Home Depot Ecosmart ZBT-A19-CCT
    * Door Bell
      * [1] Xbee and arduino sensor (uses zha)
    * Water Heater Controller
      * [1] Xbee and arduino with 40 amp ssr (uses zha)
    * Garage Door
      * [1] Xbee connected to a relay (Uses automations and a zha-quirk)
    * Sprinkler Control
      * [1] Xbee connected to relays (Uses automations and a zha-quirk)
 * Endpoints (Battery Powered Devices)
    * Sensors
      * [1] Xiaomi Mijia Door Sensor (Get the Aqara version, they are easier to pair and more reliable)
      * [5] Xiaomi Aqara Door Sensor
      * [1] Xiaomi Aqara vibration sensor (I keep moving this around, still haven't found a great use for it)
      * [3] Xiaomi Aqara motion sensor
      * [2] Xiaomi Aqara Water Sensor
      * [1] Xiaomi Aqara Weather Sensor
      * [1] Xiaomi/Honeywell Smoke Detector
    * Door Lock
      * [1] Yale YRD256 TSDB
    * Remotes
      * [2] Home Depot ZBT-CCTSwitch-D0001
      * [1] Xiaomi Opple 1 button switch (These are crazy, they broadcast so everything on the network turns on or off, have to be paired directly.)
      
      
