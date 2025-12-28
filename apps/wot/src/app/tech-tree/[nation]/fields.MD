description string
Vehicle description

engines list of integers
List of compatible engine IDs

guns list of integers
List of compatible gun IDs

is_gift boolean
Indicates if the vehicle is a gift vehicle

is_premium boolean
Indicates if the vehicle is Premium vehicle

is_premium_igr boolean
Indicates the IGR vehicle. Active only for Korea realm

Warning. The field will be disabled.
is_wheeled boolean
Indicates if the vehicle is a wheeled vehicle

name string
Vehicle name

nation string
Nation

next_tanks associative array
List of vehicles available for research in form of pairs:

researched vehicle ID
cost of research in XP
price_credit numeric
Cost in credits

price_gold numeric
Cost in gold

prices_xp associative array
List of research costs in form of pairs:

parent vehicle ID
cost of research in XP
provisions list of integers
List of IDs of compatible equipment and consumables

radios list of integers
List of compatible radio IDs

short_name string
Vehicle short name

suspensions list of integers
List of compatible suspension IDs

tag string
Vehicle tag

tank_id numeric
Vehicle ID

tier numeric
Tier

turrets list of integers
List of compatible turret IDs

type string
Vehicle type

crew
Crew

crew.member_id string
Crew member ID

crew.roles associative array
List of crew member roles

default_profile
Standard configuration characteristics

default_profile.hp numeric
Hit points

default_profile.hull_hp numeric
Hull HP

default_profile.hull_weight numeric
Hull weight (kg)

default_profile.max_ammo numeric
Ammunition

default_profile.max_weight numeric
Load limit (kg)

Warning. The field will be disabled.
default_profile.speed_backward numeric
Top reverse speed (km/h)

default_profile.speed_forward numeric
Top speed (km/h)

default_profile.weight numeric
Weight (kg)

default_profile.ammo
Gun shells characteristics

default_profile.ammo.damage list of integers
Damage (hp), a list of values: min, avg, max

default_profile.ammo.penetration list of integers
Penetration (mm), a list of values: min, avg, max

default_profile.ammo.type string
Shell type

default_profile.ammo.stun
Stun characteristics

default_profile.ammo.stun.duration object
Stun duration (s) caused by this shell type, a list of values: min, max

default_profile.armor
Armor

default_profile.armor.hull
Hull armor

default_profile.armor.hull.front numeric
Front (mm)

default_profile.armor.hull.rear numeric
Rear (mm)

default_profile.armor.hull.sides numeric
Sides (mm)

default_profile.armor.turret
Turret armor

default_profile.armor.turret.front numeric
Front (mm)

default_profile.armor.turret.rear numeric
Rear (mm)

default_profile.armor.turret.sides numeric
Sides (mm)

default_profile.engine
Engine characteristics

default_profile.engine.fire_chance float
Chance of engine fire

default_profile.engine.name string
Module name

default_profile.engine.power numeric
Engine Power (hp)

default_profile.engine.tag string
Module tag

default_profile.engine.tier numeric
Tier

default_profile.engine.weight numeric
Weight (kg)

default_profile.gun
Gun characteristics

default_profile.gun.aim_time float
Aiming time (s)

default_profile.gun.caliber numeric
Caliber (mm)

default_profile.gun.dispersion float
Dispersion at 100 m (m)

default_profile.gun.fire_rate float
Rate of fire (rounds/min)

default_profile.gun.move_down_arc numeric
Depression angle (deg)

default_profile.gun.move_up_arc numeric
Elevation angle (deg)

default_profile.gun.name string
Module name

default_profile.gun.reload_time float
Reload time (s)

default_profile.gun.tag string
Module tag

default_profile.gun.tier numeric
Tier

default_profile.gun.traverse_speed numeric
Traverse speed (deg/s)

default_profile.gun.weight numeric
Weight (kg)

default_profile.modules
Mounted modules

default_profile.modules.engine_id numeric
Engine ID

default_profile.modules.gun_id numeric
Gun ID

default_profile.modules.radio_id numeric
Radio ID

default_profile.modules.suspension_id numeric
Suspension ID

default_profile.modules.turret_id numeric
Turret ID

default_profile.radio
Radio characteristics

default_profile.radio.name string
Module name

default_profile.radio.signal_range numeric
Signal range

default_profile.radio.tag string
Module tag

default_profile.radio.tier numeric
Tier

default_profile.radio.weight numeric
Weight (kg)

default_profile.rapid
Vehicle characteristics in Rapid mode (for wheeled vehicles)

default_profile.rapid.speed_backward numeric
Top reverse speed (km/h)

default_profile.rapid.speed_forward numeric
Top speed (km/h)

default_profile.rapid.suspension_steering_lock_angle numeric
Maximum wheel turning angle

default_profile.rapid.switch_off_time float
Time required to switch to Cruise mode

default_profile.rapid.switch_on_time float
Time required to switch to Rapid mode

default_profile.siege
Vehicle characteristics in Siege mode

default_profile.siege.aim_time float
Aiming time (s)

default_profile.siege.dispersion float
Dispersion at 100 m (m)

default_profile.siege.move_down_arc numeric
Depression angle (deg)

default_profile.siege.move_up_arc numeric
Elevation angle (deg)

default_profile.siege.reload_time float
Reload time (s)

default_profile.siege.speed_backward numeric
Top reverse speed (km/h)

default_profile.siege.suspension_traverse_speed numeric
Standard suspension traverse speed

default_profile.siege.switch_off_time float
Time needed to switch on the Siege mode

default_profile.siege.switch_on_time float
Time required to switch to Siege mode

default_profile.suspension
Suspension characteristics

default_profile.suspension.load_limit numeric
Load limit (kg)

Warning. The field will be disabled.
default_profile.suspension.name string
Module name

default_profile.suspension.steering_lock_angle numeric
Maximum wheel turning angle (for wheeled vehicles)

default_profile.suspension.tag string
Module tag

default_profile.suspension.tier numeric
Tier

default_profile.suspension.traverse_speed numeric
Traverse speed (deg/s)

default_profile.suspension.weight numeric
Weight (kg)

default_profile.turret
Turret characteristics

default_profile.turret.hp numeric
Hit points

default_profile.turret.name string
Module name

default_profile.turret.tag string
Module tag

default_profile.turret.tier numeric
Tier

default_profile.turret.traverse_left_arc numeric
Traverse angle, left (deg)

default_profile.turret.traverse_right_arc numeric
Traverse angle, right (deg)

default_profile.turret.traverse_speed numeric
Traverse speed (deg/s)

default_profile.turret.view_range numeric
View range (m)

default_profile.turret.weight numeric
Weight (kg)

images
Image links

images.big_icon string
URL to 160 x 100 px image of vehicle

images.contour_icon string
URL to outline image of vehicle

images.small_icon string
URL to 124 x 31 px image of vehicle

modules_tree
Module research information

modules_tree.is_default boolean
Indicates if the module is basic

modules_tree.module_id numeric
Module ID

modules_tree.name string
Module name

modules_tree.next_modules list of integers
List of module IDs available after research of the module

modules_tree.next_tanks list of integers
List of vehicle IDs available after research of the module

modules_tree.price_credit numeric
Cost in credits

modules_tree.price_xp numeric
Research cost

modules_tree.type string
Module type

multination
Информация об мультинации

multination.is_default boolean
Признак нации по-умолчанию

multination.tank_id numeric
Vehicle ID
