
# Home Assistant (2021.1.1) configuration

## Zigbee Network

I utilize the native ZHA integration.

## Current Zigbee Devices
* Coordinator
  * Xbee S2C
* Routers (Mains Powered Devices)
  * Switches
    * Jasco/GE
      * [2] Add on switches [AS2005](https://byjasco.com/ge-enbrighten-add-switch-quickfit-and-simplewire) (Used for 3 way switching)
      * [2] Relay switches [45856](https://byjasco.com/products/ge-zigbee-wall-smart-switch)
      * [2] Dimming switches 45857 (Link removed from Jasco site, looks like they are releasing Zigbee 3.0 models)
    * Smart Plugs
      * [2] Sengled [E11-N1EA](https://us.sengled.com/products/sengled-smart-plug)
      * [1] Sylvania Smart+ [72922-A](https://consumer.sylvania.com/our-products/smart/product-info/zigbee/sylvania-smart-zigbee-indoor-smart-plug/index.jsp)
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
      * [2] Xiaomi Aqara Weather Sensor
      * [1] Xiaomi/Honeywell Smoke Detector
    * Door Lock
      * [1] Yale YRD256 TSDB
    * Remotes
      * [2] Home Depot ZBT-CCTSwitch-D0001
      * [1] Xiaomi Opple 1 button switch (These are crazy, they broadcast so everything on the network turns on or off, have to be paired directly.)
      
      
## Floorplan

Created drawing with [designspark mechanical](https://www.rs-online.com/designspark/mechanical-software) and then converted to svg and edited with [Inkscape](https://inkscape.org/).  Fans, dumpster, doors and vehicles are animated.

### Top Floor
![Top Floor](https://github.com/prairiesnpr/Home-AssistantConfig/blob/master/www/floorplan/wiebelo/wiebelo_top_floor.svg)
### Bottom Floor
![Bottom Floor](https://github.com/prairiesnpr/Home-AssistantConfig/blob/master/www/floorplan/wiebelo/wiebelo_bottom_floor.svg) 

## Cameras
* DVR
  * Zoneminder in Docker
* Cameras
  * [2] Hikvision DS-2CD2385FWD-I
  * [1] Foscam FI8918W
  
## HVAC
* Thermostat
  * Nest 3rd Generation Thermostat Pro T3008US

## BLE Tracking
* Hardware
  * [Pi Zero W](https://www.sparkfun.com/products/14277)
  * [4] [BLE Beacons](https://www.aliexpress.com/item/2PCS-Save-Energy-Beacon-EEK-Support-Eddystone-and-Ibeacon/32967422564.html)
* Software
  * [Room Assistant](https://github.com/mKeRix/room-assistant)
  * [Setup Script](https://gist.github.com/prairiesnpr/dd0a81fc1acf3a26ab43d29ffff114cb)
  
## Install Method and Hardware
* Raspberry pi 4
* Flirc Raspberry Pi 4 Case
* Running in venv 

