import type { IndustrialSolution } from '../types';

export const SOLUTIONS_DATA: IndustrialSolution[] = [
  {
    id: 'machine-automation',
    title: 'Machine Automation Solutions',
    slug: 'machine-automation',
    iconName: 'Cpu',
    requirement: 'Machine builders (OEMs) require compact, synchronized, and repeatable control architectures for cutting, wrapping, filling, or molding machinery.',
    recommendedApproach: 'Integrate compact high-speed PLCs with EtherCAT/PROFINET real-time bus, paired with multi-axis servo drives and responsive HMI operator panels for rapid setup.',
    relevantProducts: ['Compact Modular PLC', 'High-Res Touch Screen HMI', 'Precision Servo Drives', 'Inductive Sensors'],
    keyBenefits: [
      'Increased machine throughput and cycle consistency',
      'Flexible recipe management via HMI touch screen',
      'Reduced wiring complexity with industrial bus communication'
    ],
    imageUrl: '/images/hero_automation.jpg'
  },
  {
    id: 'factory-automation',
    title: 'Factory Automation Systems',
    slug: 'factory-automation',
    iconName: 'Factory',
    requirement: 'Manufacturing facilities need plant-wide coordination, data acquisition, safety interlocking, and centralized monitoring across multiple production lines.',
    recommendedApproach: 'Deploy modular rack PLCs connected to distributed I/O blocks, industrial Ethernet switches, and centralized SCADA touch consoles for line-wide status reporting.',
    relevantProducts: ['Modular Rack PLC System', 'Managed Industrial Ethernet Switch', 'Distributed I/O Modules', '15" Industrial Touch Panel'],
    keyBenefits: [
      'Real-time production visibility across all assembly shifts',
      'Early fault diagnostic alerts reducing line downtime',
      'Scalable architecture for future production line expansion'
    ],
    imageUrl: '/images/hero_automation.jpg'
  },
  {
    id: 'motor-control',
    title: 'Motor Control & Protection',
    slug: 'motor-control',
    iconName: 'Zap',
    requirement: 'Protecting induction motors from overload, single-phasing, phase reversal, and starting stress in heavy manufacturing plants.',
    recommendedApproach: 'Utilize Motor Protection Circuit Breakers (MPCB), heavy-duty magnetic contactors, electronic overload relays, and soft starters for smooth mechanical ramp up.',
    relevantProducts: ['Motor Protection Circuit Breaker', 'Heavy-Duty Magnetic Contactor', 'Thermal Overload Relay', 'DIN-Rail 24V SMPS'],
    keyBenefits: [
      'Prevents expensive motor winding burnout accidents',
      'Smooth mechanical starting reducing gear wear',
      'Compact panel footprint with comb busbar accessories'
    ],
    imageUrl: '/images/power_supplies.jpg'
  },
  {
    id: 'plc-automation',
    title: 'PLC Automation & Logic Control',
    slug: 'plc-automation',
    iconName: 'Settings',
    requirement: 'Upgrading relay-based control panels to programmable logic controllers for automated sequencing and error logging.',
    recommendedApproach: 'Replace hardwired relay logic with micro/modular PLCs, digital IO expansion units, and analog temperature/pressure inputs.',
    relevantProducts: ['Micro Modular PLC', 'Transistor Output Cards', 'Analog Input Module', 'Shielded Signal Cables'],
    keyBenefits: [
      'Eliminates hundreds of control relays and panel wires',
      'Instant program modifications without rewiring',
      'Built-in real-time clock and counter functions'
    ],
    imageUrl: '/images/plc_controllers.jpg'
  },
  {
    id: 'vfd-applications',
    title: 'VFD Speed & Torque Control',
    slug: 'vfd-applications',
    iconName: 'Activity',
    requirement: 'Controlling speed on conveyors, extruders, fans, and mixers to conserve electrical energy and prevent mechanical strain.',
    recommendedApproach: 'Install sensorless vector VFDs with built-in EMC filters, braking choppers, and Modbus/PROFINET communication cards.',
    relevantProducts: ['Heavy-Duty Vector VFD', 'Dynamic Braking Resistor', 'Line Reactor', 'Shielded Motor Cable'],
    keyBenefits: [
      'Significant electrical power savings on variable load equipment',
      'Precise speed adjustment matching production rate changes',
      'Soft start/stop preventing mechanical shock'
    ],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'control-panel-solutions',
    title: 'Control Panel Component Sourcing',
    slug: 'control-panel-solutions',
    iconName: 'ShieldCheck',
    requirement: 'Panel fabricators require standardized, high-quality switchgear, terminals, power units, and wire management products.',
    recommendedApproach: 'Source pre-qualified DIN-rail SMPS power units, push buttons, indicators, disconnect switches, and cage-clamp terminal blocks.',
    relevantProducts: ['24V DC DIN SMPS', 'LED Push Button Units', 'Terminal Blocks', 'Wire Ducts & DIN Rail'],
    keyBenefits: [
      'Fast electrical cabinet assembly and neat wire layout',
      'High insulation voltage and vibration-proof clamps',
      'Compliance with standard industrial panel panel building'
    ],
    imageUrl: '/images/power_supplies.jpg'
  },
  {
    id: 'conveyor-automation',
    title: 'Conveyor & Material Handling Automation',
    slug: 'conveyor-automation',
    iconName: 'Truck',
    requirement: 'Automating package detection, sorting, acceleration, and emergency stop circuits along material transfer conveyors.',
    recommendedApproach: 'Combine photoelectric sensors, inductive proximity switches, VFD speed controllers, and emergency stop pull cord switches.',
    relevantProducts: ['Photoelectric Retro-Reflective Sensor', 'Compact Micro VFD', 'Safety Relay Unit', 'Inductive Proximity Sensor'],
    keyBenefits: [
      'Automated product tracking and sorting without jam-ups',
      'Adjustable belt speeds depending on line demand',
      'Safety compliant emergency stop loop'
    ],
    imageUrl: '/images/industrial_sensors.jpg'
  },
  {
    id: 'pump-motor-applications',
    title: 'Pump & Blower Control Systems',
    slug: 'pump-motor-applications',
    iconName: 'Droplet',
    requirement: 'Maintaining constant water pressure or air airflow in municipal, HVAC, and industrial processing systems.',
    recommendedApproach: 'Use pressure transmitters with PID loop-enabled AC drives for automatic multi-pump staging and sleep mode operation.',
    relevantProducts: ['Water-Proof Pressure Transmitter', 'HVAC Dedicated VFD', 'Digital Panel Meter', 'Flow Sensor'],
    keyBenefits: [
      'Constant pressure regulation without water hammer effect',
      'Automatic sleep/wake mode saving night-time energy',
      'Pump alternation extending motor life'
    ],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'cnc-automation',
    title: 'CNC & Motion Control Solutions',
    slug: 'cnc-automation',
    iconName: 'Radio',
    requirement: 'High-speed multi-axis interpolation for CNC milling, wood carving, glass cutting, and robotic pick-and-place arms.',
    recommendedApproach: 'Deploy digital AC servo drives with 23-bit optical encoders, combined with CNC motion controller cards and manual pulse generators (MPG).',
    relevantProducts: ['23-bit Optical Servo Motor Set', 'Multi-Axis CNC Motion Board', 'Handheld MPG Wheel', 'High-Flex Servo Cables'],
    keyBenefits: [
      'Sub-micron positioning precision for high-surface finish',
      'High-speed encoder feedback avoiding step loss',
      'Vibration suppression filters during rapid axis deceleration'
    ],
    imageUrl: '/images/servo_motors.jpg'
  },
  {
    id: 'industrial-control-systems',
    title: 'Industrial Supervisory Systems',
    slug: 'industrial-control-systems',
    iconName: 'Layers',
    requirement: 'Consolidating operational data from multiple machines into plant SCADA systems for process logging and remote technical support.',
    recommendedApproach: 'Deploy Industrial IoT gateways, Ethernet switches, and multi-protocol HMIs supporting Modbus TCP, PROFINET, and MQTT.',
    relevantProducts: ['IoT Remote Access Gateway', 'Managed Industrial Switch', 'SCADA HMI Touch Screen', 'RS485 Serial Converter'],
    keyBenefits: [
      'Secure remote diagnostic access reducing technical site visits',
      'Historical alarm logging and trend recording',
      'Seamless connectivity to MES and ERP databases'
    ],
    imageUrl: '/images/hmi_panel.jpg'
  }
];
