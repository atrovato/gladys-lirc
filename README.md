# gladys-lirc
Control LIRC with Gladys

## Installation
You need first configure a LIRC remote. Follow instructions on this [tutorial] (https://www.hackster.io/austin-stanton/creating-a-raspberry-pi-universal-remote-with-lirc-2fd581).

Then install Gladys module, and configure it to automatically create remotes as devices and defined keys as device types.

## More
It also implements the Gladys Television API according to following mapping :

| TV API action | LIRC remote key |
| ------------- |----------------:|
| Switch state  | KEY_POWER       |
| Set channel   | KEY_[0-9]       |
| Volume up     | KEY_VOLUMEUP    |
| Volume down   | KEY_VOLUMEDOWN  |
| Mute          | KEY_MUTE        |
| Play          | KEY_PLAY        |
| Pause         | KEY_PAUSE       |
| Stop          | KEY_STOP        |
| Rewind        | KEY_REWIND      |
| Fast forward  | KEY_FASTFORWARD |
| Blue button   | KEY_BLUE        |
| Green button  | KEY_GREEN       |
| Red button    | KEY_RED         |
| Yellow button | KEY_YELLOW      |
