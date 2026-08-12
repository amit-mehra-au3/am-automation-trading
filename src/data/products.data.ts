import type { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // 1. PLCs
  {
    id: 'plc-s71200-1214c',
    name: 'S7-1200 CPU 1214C Compact Controller',
    modelNumber: '6ES7214-1AG40-0XB0',
    category: 'PLC & Controllers',
    categoryId: 'plc-controllers',
    brand: 'Siemens',
    application: ['Machine Automation', 'Packaging', 'Pumping Stations', 'Assembly Lines'],
    shortDescription: 'Compact high-performance programmable controller with built-in PROFINET port, 14 DI / 10 DO / 2 AI.',
    fullDescription: 'The SIMATIC S7-1200 CPU 1214C is an ideal compact logic controller for standalone machine automation and small-to-medium industrial control systems. Built with integrated PROFINET communication, fast pulse outputs, and flexible signal board expansion.',
    keyFeatures: [
      'Integrated PROFINET interface (TCP/IP, ISO-on-TCP, S7 communication)',
      '14 Digital Inputs (24V DC), 10 Digital Outputs (24V DC), 2 Analog Inputs (0-10V)',
      'Integrated high-speed counters (up to 100 kHz)',
      'PID control functionality with auto-tuning',
      'Removable memory card slot for program backup'
    ],
    specifications: [
      { name: 'Supply Voltage', value: '24V DC (20.4 to 28.8V DC)' },
      { name: 'Digital I/O', value: '14 Inputs / 10 Outputs (Transistor/Relay options)' },
      { name: 'Analog Inputs', value: '2 Channels (0..10 V DC, 10-bit resolution)' },
      { name: 'Work Memory', value: '100 KB integrated' },
      { name: 'Communication Port', value: '1 x RJ45 PROFINET (10/100 Mbit/s)' },
      { name: 'Dimensions (W x H x D)', value: '110 x 100 x 75 mm' },
      { name: 'Mounting', value: 'Standard 35mm DIN Rail or Wall Mount' }
    ],
    variants: [
      { id: 'v1', name: 'DC/DC/DC (Transistor Output)', specSummary: '24V DC supply, 24V DC inputs, 24V DC transistor outputs', partNumber: '6ES7214-1AG40-0XB0' },
      { id: 'v2', name: 'AC/DC/Relay (Relay Output)', specSummary: '120/230V AC supply, 24V DC inputs, Relay outputs (2A)', partNumber: '6ES7214-1BG40-0XB0' }
    ],
    imageUrl: '/images/plc_controllers.jpg',
    isFeatured: true,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },
  {
    id: 'plc-fx5u-32mr-es',
    name: 'MELSEC iQ-F FX5U Compact PLC',
    modelNumber: 'FX5U-32MR/ES',
    category: 'PLC & Controllers',
    categoryId: 'plc-controllers',
    brand: 'Mitsubishi Electric',
    application: ['OEM Machinery', 'Conveyors', 'Textile Machines', 'Packing Lines'],
    shortDescription: 'Next-generation micro controller featuring high-speed bus, built-in Ethernet, 16 DI / 16 Relay Outputs.',
    fullDescription: 'The FX5U-32MR/ES brings high processing speed and built-in analog and Ethernet functions to compact machinery. Ideal for multi-axis positioning and serial/Ethernet network integration.',
    keyFeatures: [
      'Processing speed: 34 ns/instruction for fast ladder execution',
      'Built-in Ethernet port and RS485 communication',
      '2 Analog Inputs (0-10V DC) and 1 Analog Output (0-10V / 4-20mA)',
      'Integrated 4-axis 200 kHz positioning capability',
      'SD card slot for data logging and program updates'
    ],
    specifications: [
      { name: 'Power Supply', value: '100-240V AC (50/60 Hz)' },
      { name: 'Digital I/O Points', value: '16 Inputs (24V DC Sink/Source) / 16 Relay Outputs' },
      { name: 'Program Capacity', value: '64k steps' },
      { name: 'Built-in Analog', value: '2 AI (0-10V) / 1 AO (0-10V, 4-20mA)' },
      { name: 'Built-in Ethernet', value: '1 Port (Modbus TCP, MELSOFT connection)' }
    ],
    variants: [
      { id: 'fx5u-relay', name: 'FX5U-32MR/ES (Relay)', specSummary: 'AC Supply, Relay Output', partNumber: 'FX5U-32MR/ES' },
      { id: 'fx5u-transistor', name: 'FX5U-32MT/ESS (Transistor)', specSummary: 'AC Supply, Source Transistor Output', partNumber: 'FX5U-32MT/ESS' }
    ],
    imageUrl: '/images/plc_controllers.jpg',
    isFeatured: true,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },

  // 2. HMIs
  {
    id: 'hmi-ktp700-basic',
    name: 'SIMATIC HMI KTP700 Basic Panel',
    modelNumber: '6AV2123-2GB03-0AX0',
    category: 'HMI & Operator Panels',
    categoryId: 'hmi-operator-panels',
    brand: 'Siemens',
    application: ['Control Panels', 'Machine Visualization', 'Alarm Logging', 'Recipe Management'],
    shortDescription: '7-inch widescreen TFT touch panel with 65,536 colors, PROFINET interface, and tactile function keys.',
    fullDescription: 'The KTP700 Basic HMI features a crisp 7-inch color display combined with touch operation and 8 configurable tactile function keys. Offers intuitive graphical visualization for machine operators.',
    keyFeatures: [
      '7.0 inch TFT display with 800 x 480 pixel resolution',
      'Touch screen + 8 programmable function keys',
      'PROFINET / Ethernet communication interface',
      'USB host interface for flash drive data backup & recipe transfer',
      'WinCC Basic configuration environment'
    ],
    specifications: [
      { name: 'Display Size & Type', value: '7.0 inch TFT widescreen, 65,536 colors' },
      { name: 'Resolution', value: '800 x 480 pixels' },
      { name: 'Input Method', value: 'Touch screen & 8 Function Keys' },
      { name: 'Supply Voltage', value: '24V DC (19.2 to 28.8V DC)' },
      { name: 'Interfaces', value: '1 x Ethernet (RJ45), 1 x USB 2.0' },
      { name: 'Enclosure Protection', value: 'IP65 front panel, NEMA 4x' }
    ],
    variants: [
      { id: 'ktp700-pn', name: 'KTP700 Basic PN', specSummary: 'PROFINET RJ45 Interface', partNumber: '6AV2123-2GB03-0AX0' },
      { id: 'ktp700-dp', name: 'KTP700 Basic DP', specSummary: 'PROFIBUS RS422/RS485 Interface', partNumber: '6AV2123-2GA03-0AX0' }
    ],
    imageUrl: '/images/hmi_panel.jpg',
    isFeatured: true,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },
  {
    id: 'hmi-dop107bv',
    name: 'DOP-100 Series 7" Touch Screen HMI',
    modelNumber: 'DOP-107BV',
    category: 'HMI & Operator Panels',
    categoryId: 'hmi-operator-panels',
    brand: 'Delta',
    application: ['Factory Automation', 'Process Control', 'OEM Panels', 'Packaging'],
    shortDescription: '7-inch High-resolution 65536-color TFT LCD HMI with built-in COM ports and dual Ethernet support.',
    fullDescription: 'Delta DOP-107BV is a high-cost-performance HMI equipped with a Cortex-A8 high-speed processor, offering fast screen refresh rates and wide PLC driver compatibility.',
    keyFeatures: [
      '7-inch 800x480 LCD display with LED backlight',
      'ARM Cortex-A8 800MHz CPU',
      '256MB RAM / 256MB ROM',
      'Supports RS-232 / RS-485 / RS-422 multi-protocol communication',
      'CE & UL safety approvals'
    ],
    specifications: [
      { name: 'Screen Size', value: '7" TFT LCD (65,536 colors)' },
      { name: 'Processor', value: 'ARM Cortex-A8 (800MHz)' },
      { name: 'Serial Ports', value: 'COM1 (RS-232), COM2 (RS-485/RS-422)' },
      { name: 'Operating Temp', value: '0°C to 50°C' }
    ],
    variants: [
      { id: 'dop107bv', name: 'DOP-107BV (Standard)', specSummary: '1 RS-232 / 1 RS-485, USB Slave/Host', partNumber: 'DOP-107BV' },
      { id: 'dop107ev', name: 'DOP-107EV (Ethernet)', specSummary: 'Includes 10/100 Ethernet Port', partNumber: 'DOP-107EV' }
    ],
    imageUrl: '/images/hmi_panel.jpg',
    isFeatured: false,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },

  // 3. AC Drives / VFD
  {
    id: 'vfd-sinamics-g120c',
    name: 'SINAMICS G120C Compact AC Frequency Inverter',
    modelNumber: '6SL3210-1KE18-8AF1',
    category: 'AC Drives / VFD',
    categoryId: 'ac-drives-vfd',
    brand: 'Siemens',
    application: ['Pumps & Fans', 'Conveyors', 'Compressors', 'Mixers & Extruders'],
    shortDescription: '0.75kW to 18.5kW compact vector AC drive with integrated Safe Torque Off (STO) and PROFINET.',
    fullDescription: 'SINAMICS G120C is designed specifically for machine builders who want an space-saving, easy-to-operate vector drive with versatile communication options and built-in safety functions.',
    keyFeatures: [
      'Sensorless vector control for high starting torque',
      'Integrated Safe Torque Off (STO) safety function (SIL 2 / PL d)',
      'Side-by-side mounting without derating',
      'Built-in brake chopper for dynamic deceleration',
      'Available with PROFINET, Modbus RTU, or PROFIBUS'
    ],
    specifications: [
      { name: 'Rated Output Power', value: '3.0 kW / 4.0 HP (Heavy Duty)' },
      { name: 'Input Voltage', value: '3-Phase 380-480V AC (-20% / +10%)' },
      { name: 'Output Frequency', value: '0 to 550 Hz' },
      { name: 'Overload Capability', value: '150% for 60 seconds every 300 seconds' },
      { name: 'Protection Degree', value: 'IP20 / UL Open Type' }
    ],
    variants: [
      { id: 'g120c-075kw', name: '0.75 kW (1.0 HP)', specSummary: '3-Phase 400V, PROFINET', partNumber: '6SL3210-1KE11-8AF1' },
      { id: 'g120c-3kw', name: '3.0 kW (4.0 HP)', specSummary: '3-Phase 400V, PROFINET', partNumber: '6SL3210-1KE17-3AF1' },
      { id: 'g120c-75kw', name: '7.5 kW (10.0 HP)', specSummary: '3-Phase 400V, PROFINET', partNumber: '6SL3210-1KE21-7AF1' }
    ],
    imageUrl: '/images/ac_drives.jpg',
    isFeatured: true,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },
  {
    id: 'vfd-delta-ms300',
    name: 'VFD-MS300 Standard Compact Vector Drive',
    modelNumber: 'VFD7A5MS43ANSAA',
    category: 'AC Drives / VFD',
    categoryId: 'ac-drives-vfd',
    brand: 'Delta',
    application: ['Woodworking Machines', 'Machine Tools', 'Textile Machinery', 'Packaging'],
    shortDescription: 'High-speed 1500Hz output vector AC drive with built-in PLC function and USB parameter tuning.',
    fullDescription: 'The MS300 series is Delta’s compact vector control drive technology. Supports both IM and PM motor control, built-in STO, and up to 2k steps PLC capacity.',
    keyFeatures: [
      'Supports Open loop control of IM and PM motors',
      'High speed frequency output up to 1500 Hz',
      'Built-in STO (Safe Torque Off) SIL2 / PLd',
      'Built-in 2k steps PLC capacity',
      'Includes USB port for quick parameter upload & download'
    ],
    specifications: [
      { name: 'Power Rating', value: '3.7 kW (5 HP)' },
      { name: 'Input Phase / Voltage', value: '3-Phase 460V AC' },
      { name: 'Control Method', value: 'V/f, SVC (Sensorless Vector)' },
      { name: 'Braking Chopper', value: 'Built-in' }
    ],
    variants: [
      { id: 'ms300-15kw', name: '1.5 kW 460V 3-Phase', specSummary: 'Compact Frame A', partNumber: 'VFD4A2MS43ANSAA' },
      { id: 'ms300-37kw', name: '3.7 kW 460V 3-Phase', specSummary: 'Compact Frame B', partNumber: 'VFD7A5MS43ANSAA' }
    ],
    imageUrl: '/images/ac_drives.jpg',
    isFeatured: false,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },

  // 4. Servo Drives & Motors
  {
    id: 'servo-minas-a6-400w',
    name: 'MINAS A6 Series AC Servo Motor & Amplifier Kit',
    modelNumber: 'MSMF042L1U2M + MCDLN35SE',
    category: 'Servo Drives & Motors',
    categoryId: 'servo-drives-motors',
    brand: 'Panasonic',
    application: ['Pick and Place Robots', 'Semiconductor Equipment', 'CNC Feed Axes', 'Labeling Machines'],
    shortDescription: '400W AC Servo Motor with 23-bit absolute encoder (8,388,608 p/rev) and ultrafast 3.2 kHz velocity response.',
    fullDescription: 'Panasonic MINAS A6 high-performance servo system delivers ultra-high positioning resolution, dynamic stiffness, and intelligent real-time notch filters to suppress mechanical resonance.',
    keyFeatures: [
      '23-bit high resolution absolute encoder (8.38 million pulses per revolution)',
      '3.2 kHz frequency response bandwidth',
      'Real-time auto-tuning with friction compensation',
      'IP67 protection rating for motor body',
      'Pulse & Direction, Analog, and EtherCAT network control options'
    ],
    specifications: [
      { name: 'Rated Output Power', value: '400 W' },
      { name: 'Rated Torque', value: '1.27 N·m (Peak Torque 3.82 N·m)' },
      { name: 'Rated Speed', value: '3000 r/min (Max 6000 r/min)' },
      { name: 'Encoder Type', value: '23-bit Absolute / Incremental' },
      { name: 'Input Voltage', value: 'Single/3-Phase 200-240V AC' }
    ],
    variants: [
      { id: 'a6-400w', name: '400W Set (Keyway & Oil Seal)', specSummary: '1.27 Nm, 3000 RPM, 200V', partNumber: 'MSMF042L1U2M' },
      { id: 'a6-750w', name: '750W Set (Keyway & Oil Seal)', specSummary: '2.39 Nm, 3000 RPM, 200V', partNumber: 'MSMF082L1U2M' }
    ],
    imageUrl: '/images/servo_motors.jpg',
    isFeatured: true,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },

  // 5. Sensors
  {
    id: 'sensor-omron-e2b',
    name: 'E2B Brass Long-Body Inductive Proximity Sensor',
    modelNumber: 'E2B-M12KS04-WP-B1 2M',
    category: 'Industrial Sensors',
    categoryId: 'industrial-sensors',
    brand: 'Omron',
    application: ['Metal Part Detection', 'Cylinder Position', 'Gear Speed Sensing', 'Conveyor Tracking'],
    shortDescription: 'M12 cylindrical inductive sensor with 4mm sensing distance, PNP Normally Open, IP67 brass housing.',
    fullDescription: 'Omron E2B series offers reliable metal detection with 360-degree visible bright LED indicators and high mechanical durability for industrial production lines.',
    keyFeatures: [
      'M12 threaded nickel-plated brass body',
      '4mm flush sensing distance',
      'PNP NO (Normally Open) switching output',
      '2-meter pre-wired oil-resistant PVC cable',
      'IP67 water and oil resistant protection'
    ],
    specifications: [
      { name: 'Sensing Distance', value: '4 mm ±10%' },
      { name: 'Operating Voltage', value: '10 to 30 VDC' },
      { name: 'Response Frequency', value: '1,000 Hz' },
      { name: 'Output Configuration', value: 'PNP Open Collector, NO' },
      { name: 'Ambient Temperature', value: '-25°C to 70°C' }
    ],
    variants: [
      { id: 'm12-pnp-no', name: 'M12 Flush PNP NO (2m Cable)', specSummary: '4mm sensing, PNP NO', partNumber: 'E2B-M12KS04-WP-B1 2M' },
      { id: 'm18-pnp-no', name: 'M18 Flush PNP NO (2m Cable)', specSummary: '8mm sensing, PNP NO', partNumber: 'E2B-M18KS08-WP-B1 2M' }
    ],
    imageUrl: '/images/industrial_sensors.jpg',
    isFeatured: true,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  },

  // 6. Power Supplies
  {
    id: 'smps-meanwell-hdr60-24',
    name: 'HDR-60-24 Ultra-Slim 60W 24V DIN Rail Power Supply',
    modelNumber: 'HDR-60-24',
    category: 'Power Supplies',
    categoryId: 'power-supplies',
    brand: 'Mean Well',
    application: ['PLC Panels', 'Sensor Powering', 'Relay Driving', 'HMI Supply'],
    shortDescription: '60W 24V DC 2.5A ultra-slim step-shape plastic housing DIN rail switch mode power supply.',
    fullDescription: 'HDR-60-24 is an economical 60W DIN rail power supply adapted to be installed on TS-35/7.5 or TS-35/15 mounting rails. Compact width of 52.5mm (3SU) saves space inside control cabinets.',
    keyFeatures: [
      'Universal AC input range (85-264VAC)',
      'Adjustable DC output voltage (21.6 to 29V DC)',
      'Protections: Short circuit / Overload / Overvoltage',
      'Cooling by free air convection',
      'Isolation class II, no frame ground required'
    ],
    specifications: [
      { name: 'Output Voltage', value: '24V DC (Adjustable 21.6 - 29V)' },
      { name: 'Rated Current', value: '2.5 A (60W max output)' },
      { name: 'Efficiency', value: '90%' },
      { name: 'Dimensions', value: '52.5 x 90 x 54.5 mm (W x H x D)' }
    ],
    variants: [
      { id: 'hdr-60-24', name: '24V 2.5A (60W)', specSummary: '24V DC Output, 52.5mm width', partNumber: 'HDR-60-24' },
      { id: 'hdr-100-24', name: '24V 4.2A (100W)', specSummary: '24V DC Output, 70mm width', partNumber: 'HDR-100-24' }
    ],
    imageUrl: '/images/power_supplies.jpg',
    isFeatured: true,
    priceEstimate: 'Contact for B2B Pricing',
    availability: 'In Stock'
  }
];
