<svelte:head>

  <title>LeLight</title>
</svelte:head>

# LeLight

This project started with reverse engineering of app
called [GM Smart Light](http://le-iot.com/download/simble_gm_downshow.html) which was listed in lamp
manual. [(copy if original site is not available)](https://github.com/v1ack/smartLightConnector/blob/master/.github/GM_Smart_Light_0.0.3.apk)

As I found out, there are many apps, which are using the same protocol

|           Name            |       package        |                             Link                              |
| :-----------------------: | :------------------: | :-----------------------------------------------------------: |
|      GM Smart Light       |   com.hm.simpleble   |  [link](http://le-iot.com/download/simble_gm_downshow.html)   |
|      Le Smart Light       | cn.lelight.smart.lzg |                                                               |
| Le+ Pro (simple ble mode) |   com.lelight.pro    |              [link](http://www.lelight.cn/saas/)              |
|         LeSigMash         |                      | [link](http://le-iot.com/download/sigmesh_lskj_downshow.html) |
|         乐智光Pro         |                      |          [link](https://openapi.lelight.top/dl/cqan)          |

As a start point I had the lamp with _Iralan_ brand

![](/lelight/lamp.jpg)

And the app

![](/lelight/screen.png)

## How it works?

Lamp accepts commands by listening ble advertisement packets.

Commands must be sent as BLE advertising packets, not through standard GATT connections. The lamp scans nearby BLE
devices and parses the payloads of advertising packets to extract control instructions.

Message contains from:

- device id (called MAC in app)
- group id
- command and command data
- message number
- checksum
- additional random data

Result of reverse engineering is a python
library [v1ack/smartLightConnector](https://github.com/v1ack/smartLightConnector)

## How to use?

At first, you need to install original app, connect to lamp, and get `Current ID (mode)` in app settings

#### Home Assistant integration

GitHub repo [v1ack/lelight](https://github.com/v1ack/lelight)

Open in
HACS [lelight](https://my.home-assistant.io/redirect/hacs_repository/?owner=v1ack&repository=lelight&category=integration)

#### ESPHome component

GitHub repo [v1ack/lelight-esphome](https://github.com/v1ack/lelight-esphome)
