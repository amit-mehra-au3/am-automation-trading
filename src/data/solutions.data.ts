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
    relevantProducts: ['Heavy-Duty Magnetic Contactor', 'Thermal & Electronic Overload Relay', 'Motor Circuit Breaker (MPCB)', 'Digital Soft Starter'],
    keyBenefits: [
      'Extended motor operating life by eliminating mechanical shock',
      'Precise thermal protection against electrical imbalances',
      'Compliance with international panel safety standards'
    ],
    imageUrl: '/images/power_supplies.jpg'
  },
  {
    id: 'plc-automation',
    title: 'PLC Automation Programming & Hardware',
    slug: 'plc-automation',
    iconName: 'Binary',
    requirement: 'Upgrading legacy relay-based control panels to modern programmable controllers for complex logic, timing, and process sequencing.',
    recommendedApproach: 'Select appropriately sized CPU units (micro or modular), add analog I/O expansion modules for temperature/pressure loop control, and configure ladder logic.',
    relevantProducts: ['Programmable Logic Controllers', 'Analog Expansion Cards', 'Thermocouple Signal Conditioners'],
    keyBenefits: [
      'Elimination of physical relay clutter inside control panels',
      'Quick logic modifications without re-wiring hardware',
      'Integrated diagnostics with LED state indication'
    ],
    imageUrl: '/images/plc_controllers.jpg'
  },
  {
    id: 'vfd-applications',
    title: 'VFD & Variable Speed Drives',
    slug: 'vfd-applications',
    iconName: 'Gauge',
    requirement: 'Varying process motor speed for fans, extruders, mixers, and rollers while optimizing electrical power consumption.',
    recommendedApproach: 'Sizing sensorless vector AC drives based on motor full-load current (FLA), duty cycle, ambient temperature, and brake resistor braking requirements.',
    relevantProducts: ['Heavy-Duty AC VFD Drive', 'Dynamic Braking Resistor', 'AC Input Line Reactor'],
    keyBenefits: [
      'Up to 30-50% energy savings on centrifugal fan & pump loads',
      'Smooth speed regulation with wide frequency range',
      'Protection against overvoltage, undervoltage, and stall'
    ],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'control-panel-solutions',
    title: 'Control Panel Component Sourcing',
    slug: 'control-panel-solutions',
    iconName: 'Sliders',
    requirement: 'Panel builders and system integrators need quick sourcing of reliable, neatly rated DIN rail components for custom electrical enclosures.',
    recommendedApproach: 'Provide comprehensive component BOM packages including 24V DC power supplies, DIN terminal blocks, push buttons, indicators, and wire ducting.',
    relevantProducts: ['24V DC DIN Rail Power Supply', 'Screw/Spring Terminal Blocks', '22mm LED Indicator Pilot Lamps', 'Wiring Ducts'],
    keyBenefits: [
      'Single-source procurement saving sourcing lead time',
      'Standardized DIN rail mounting dimensions',
      'Consistent aesthetics and wiring organization'
    ],
    imageUrl: '/images/power_supplies.jpg'
  },
  {
    id: 'conveyor-automation',
    title: 'Conveyor & Material Handling Automation',
    slug: 'conveyor-automation',
    iconName: 'Truck',
    requirement: 'Managing belt speed, package indexing, sorting gates, emergency stop lanyard lines, and jam detection on busy conveyor belts.',
    recommendedApproach: 'Combine AC drives for smooth conveyor speed tuning, photoelectric sensors for package presence detection, and safety relay modules for E-stop loops.',
    relevantProducts: ['Micro AC Drive 0.75kW', 'Retro-Reflective Photoelectric Sensor', 'Industrial Safety Relay Module'],
    keyBenefits: [
      'Prevent material damage with soft starting and stopping',
      'Automated sorting triggers without manual intervention',
      'Immediate safety tripping on emergency line pull'
    ],
    imageUrl: '/images/industrial_sensors.jpg'
  },
  {
    id: 'pump-motor-applications',
    title: 'Pump & Compressor Speed Control',
    slug: 'pump-motor-applications',
    iconName: 'Activity',
    requirement: 'Constant pressure or flow control for industrial water supply, chemical dosing pumps, and air compressor systems.',
    recommendedApproach: 'Use AC drives with built-in PID control feedback, connected to 4-20mA pressure transmitters to automatically throttle pump speed according to fluid demand.',
    relevantProducts: ['Pumping Dedicated VFD', 'Industrial Pressure Transmitter 0-10 Bar', 'Analog Signal Isolator'],
    keyBenefits: [
      'Eliminate water hammer damage in pipe networks',
      'Automatic sleep/wake mode during low demand periods',
      'Substantial reduction in electricity peak demand charges'
    ],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'cnc-machine-automation',
    title: 'CNC & Multi-Axis Motion Control',
    slug: 'cnc-machine-automation',
    iconName: 'Compass',
    requirement: 'Milling, turning, routing, and plasma cutting machines requiring smooth multi-axis coordinated linear and circular interpolation.',
    recommendedApproach: 'Equip CNC controllers with high-resolution absolute encoder servo motors, manual pulse generators (MPG handwheels), and limit switches.',
    relevantProducts: ['4-Axis Motion Controller', 'Absolute Encoder Servo Motor', 'Optical Handwheel MPG'],
    keyBenefits: [
      'Micron-level positioning accuracy and surface finish quality',
      'Zero position loss upon machine power restart',
      'Manual jog wheel for precise tool zero setting'
    ],
    imageUrl: '/images/servo_motors.jpg'
  },
  {
    id: 'industrial-control-systems',
    title: 'Industrial Control Systems & Retrofits',
    slug: 'industrial-control-systems',
    iconName: 'Settings',
    requirement: 'Restoring aging machinery with hard-to-find obsolete parts by retrofitting with modern, readily available automation controllers.',
    recommendedApproach: 'Conduct IO audit, map existing wiring signals to modern PLC I/O, replace relay logic with programmable code, and install modern HMI operator screens.',
    relevantProducts: ['Compact PLC CPU', '7 Inch Touch Panel HMI', 'DIN Rail 24V SMPS', 'Inductive Sensors'],
    keyBenefits: [
      'Extends asset lifespan without high new machine capital cost',
      'Readily available off-the-shelf spare parts replacement',
      'Enhanced operator diagnostic screens'
    ],
    imageUrl: '/images/hmi_panel.jpg'
  }
];
