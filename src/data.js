// ── IMAGE MAP (filenames in /public/images/) ──────────────────────────────
export const IMG = {
  brake:    'car_brake_pads_category_1778327187913.png',
  engine:   'car_engine_part_category_1778327173549.png',
  body:     'car_body_parts_category_1778327203501.png',
  susp:     'car_suspension_category_1778327219701.png',
  filter:   'car_filters_category_1778327237229.png',
  light:    'car_lighting_category_1778327257264.png',
  trans:    'car_transmission_category_1778327271267.png',
  elec:     'car_electricals_category_1778327286059.png',
  spark:    'car_spark_plug_product_1778327301866.png',
  oil:      'car_oil_filter_product_1778327316988.png',
  wiper:    'car_wiper_blades_product_1778327371060.png',
  battery:  'car_battery_product_1778327386793.png',
  clutch:   'car_clutch_kit_product_1778327402731.png',
  wheel:    'car_alloy_wheel_product_1778327419390.png',
  radiator: 'car_radiator_product_1778330830798.png',
  ac_comp:  'car_ac_compressor_product_1778330845400.png',
  exhaust:  'car_exhaust_muffler_product_1778330861870.png',
  steering: 'car_steering_pump_product_1778330881007.png',
  fuel_pump:'car_fuel_pump_product_1778330903755.png',
  cv_axle:  'car_cv_axle_product_1778330921969.png',
  timing:   'car_timing_belt_product_1778330941180.png',
  gasket:   'car_head_gasket_product_1778330956586.png',
  rotor:    'car_disc_rotor_product_1778330979465.png',
  fog_lamp: 'car_fog_lamp_product_1778330994691.png',
  shock:    'car_shock_absorber_product_1778331009919.png',
  thermo:   'car_coolant_thermostat_product_1778331025673.png',
};

export const CATEGORIES = [
  { id:'brake',    name:'Brake System',    icon:'🔴', img: IMG.brake,   desc:'Pads, rotors, calipers' },
  { id:'engine',   name:'Engine Parts',    icon:'⚙️', img: IMG.engine,  desc:'Pistons, gaskets, valves' },
  { id:'susp',     name:'Suspension',      icon:'🔧', img: IMG.susp,    desc:'Shocks, springs, arms' },
  { id:'filter',   name:'Filters',         icon:'🌀', img: IMG.filter,  desc:'Oil, air, fuel, cabin' },
  { id:'light',    name:'Lighting',        icon:'💡', img: IMG.light,   desc:'Headlights, fog, LED' },
  { id:'elec',     name:'Electricals',     icon:'⚡', img: IMG.elec,    desc:'Alternator, starter' },
  { id:'trans',    name:'Transmission',    icon:'🔩', img: IMG.trans,   desc:'Gearbox, clutch, CVT' },
  { id:'body',     name:'Body Parts',      icon:'🚗', img: IMG.body,    desc:'Bumpers, fenders, hood' },
  { id:'wiper',    name:'Wiper Blades',    icon:'🌧️', img: IMG.wiper,   desc:'Flat, traditional, rear' },
  { id:'battery',  name:'Batteries',       icon:'🔋', img: IMG.battery, desc:'12V, MF, VRLA' },
  { id:'clutch',   name:'Clutch Kit',      icon:'🎯', img: IMG.clutch,  desc:'Plate, pressure, bearing' },
  { id:'wheel',    name:'Alloy Wheels',    icon:'🏎️', img: IMG.wheel,   desc:'14", 15", 16", 17"' },
];

export const PRODUCTS = [
  // ── Brakes ──
  { id:'b1', cat:'brake', name:'Brembo Front Brake Pad Set', partNo:'P23002', brand:'Brembo', price:1850, mrp:2400, img:IMG.brake, type:'Genuine', fitment:'Hyundai i20 / i10 / Grand i10', rating:4.8, reviews:312, stock:true, badge:'Best Seller' },
  { id:'b2', cat:'brake', name:'TVS Rear Drum Brake Shoe', partNo:'SB2210', brand:'TVS', price:420, mrp:550, img:IMG.brake, type:'Aftermarket', fitment:'Maruti Alto / WagonR / Celerio', rating:4.5, reviews:198, stock:true, badge:'' },
  { id:'b3', cat:'brake', name:'Disc Brake Rotor (Vented)', partNo:'DR5501', brand:'ATE', price:2100, mrp:2800, img:IMG.brake, type:'Genuine', fitment:'Honda City / Civic', rating:4.7, reviews:87, stock:true, badge:'New' },
  { id:'b4', cat:'brake', name:'Brake Caliper (Front LH)', partNo:'BC7701', brand:'TRW', price:3200, mrp:4100, img:IMG.brake, type:'Genuine', fitment:'Toyota Innova Crysta', rating:4.9, reviews:45, stock:true, badge:'' },

  // ── Engine ──
  { id:'e1', cat:'engine', name:'NGK Iridium Spark Plug (4-Pack)', partNo:'ILFR6D11', brand:'NGK', price:680, mrp:900, img:IMG.spark, type:'Genuine', fitment:'Universal Petrol Engines', rating:4.9, reviews:540, stock:true, badge:'Best Seller' },
  { id:'e2', cat:'engine', name:'Cylinder Head Gasket Set', partNo:'GS4401', brand:'Elring', price:1450, mrp:1800, img:IMG.engine, type:'Genuine', fitment:'Maruti Swift / Baleno 1.2L', rating:4.7, reviews:134, stock:true, badge:'' },
  { id:'e3', cat:'engine', name:'Timing Chain Kit', partNo:'TCK9901', brand:'Iwis', price:4800, mrp:6200, img:IMG.engine, type:'Genuine', fitment:'Hyundai Creta 1.5 Petrol', rating:4.8, reviews:67, stock:true, badge:'Premium' },
  { id:'e4', cat:'engine', name:'Engine Mount (Front)', partNo:'EM1102', brand:'Monroe', price:950, mrp:1200, img:IMG.engine, type:'Aftermarket', fitment:'Tata Nexon / Altroz', rating:4.4, reviews:89, stock:false, badge:'' },

  // ── Suspension ──
  { id:'s1', cat:'susp', name:'Gabriel Front Shock Absorber', partNo:'GAB7701', brand:'Gabriel', price:1950, mrp:2500, img:IMG.susp, type:'Genuine', fitment:'Maruti Suzuki Ertiga / S-Cross', rating:4.7, reviews:203, stock:true, badge:'Best Seller' },
  { id:'s2', cat:'susp', name:'Ball Joint (Lower, LH)', partNo:'BJ3301', brand:'Moog', price:780, mrp:1000, img:IMG.susp, type:'Genuine', fitment:'Honda Jazz / WR-V', rating:4.6, reviews:112, stock:true, badge:'' },
  { id:'s3', cat:'susp', name:'Stabilizer Link / Sway Bar Link', partNo:'SL2201', brand:'Lemforder', price:620, mrp:820, img:IMG.susp, type:'Genuine', fitment:'Volkswagen Polo / Vento', rating:4.5, reviews:78, stock:true, badge:'' },

  // ── Filters ──
  { id:'f1', cat:'filter', name:'BOSCH Premium Oil Filter', partNo:'F026407079', brand:'BOSCH', price:280, mrp:350, img:IMG.oil, type:'Genuine', fitment:'All Maruti Suzuki Petrol Cars', rating:4.8, reviews:890, stock:true, badge:'Best Seller' },
  { id:'f2', cat:'filter', name:'Air Filter (Engine)', partNo:'C25101', brand:'Mann', price:420, mrp:550, img:IMG.filter, type:'Genuine', fitment:'Hyundai i20 / Verna 1.5L', rating:4.7, reviews:345, stock:true, badge:'' },
  { id:'f3', cat:'filter', name:'Cabin / AC Filter', partNo:'CUK2240', brand:'Mann', price:380, mrp:480, img:IMG.filter, type:'Aftermarket', fitment:'Honda City / Amaze', rating:4.6, reviews:267, stock:true, badge:'' },
  { id:'f4', cat:'filter', name:'Fuel Filter (In-Line)', partNo:'WK890', brand:'Mann', price:550, mrp:700, img:IMG.filter, type:'Genuine', fitment:'Toyota Innova / Fortuner Diesel', rating:4.7, reviews:134, stock:true, badge:'' },

  // ── Lighting ──
  { id:'l1', cat:'light', name:'LUMAX LED Headlight Assembly (RH)', partNo:'DL3305', brand:'LUMAX', price:3200, mrp:4000, img:IMG.light, type:'Genuine', fitment:'Mahindra XUV300', rating:4.8, reviews:156, stock:true, badge:'New' },
  { id:'l2', cat:'light', name:'Osram H4 Halogen Bulb (Pair)', partNo:'64193CBN', brand:'Osram', price:450, mrp:600, img:IMG.light, type:'Genuine', fitment:'Universal H4 Fit', rating:4.7, reviews:423, stock:true, badge:'Best Seller' },
  { id:'l3', cat:'light', name:'Rear Tail Lamp Assembly (LH)', partNo:'TL4401', brand:'FIEM', price:1850, mrp:2300, img:IMG.light, type:'Genuine', fitment:'Maruti Swift (2018+)', rating:4.6, reviews:98, stock:true, badge:'' },

  // ── Electricals ──
  { id:'el1', cat:'elec', name:'Bosch Alternator 65A', partNo:'0986049030', brand:'BOSCH', price:6500, mrp:8200, img:IMG.elec, type:'Genuine', fitment:'Hyundai Creta / Verna Diesel', rating:4.8, reviews:67, stock:true, badge:'Premium' },
  { id:'el2', cat:'elec', name:'Starter Motor Assembly', partNo:'SM5501', brand:'Lucas', price:4200, mrp:5500, img:IMG.elec, type:'Genuine', fitment:'Maruti Suzuki Alto / WagonR', rating:4.6, reviews:89, stock:true, badge:'' },

  // ── Transmission ──
  { id:'t1', cat:'trans', name:'Clutch Kit (3-Piece) — LUK', partNo:'628 3051 00', brand:'LUK', price:4800, mrp:6000, img:IMG.clutch, type:'Genuine', fitment:'Tata Tiago / Tigor / Altroz', rating:4.9, reviews:178, stock:true, badge:'Best Seller' },
  { id:'t2', cat:'trans', name:'Gear Lever Boot & Knob Kit', partNo:'GL1102', brand:'Lokar', price:650, mrp:850, img:IMG.trans, type:'Aftermarket', fitment:'Universal Fit', rating:4.4, reviews:234, stock:true, badge:'' },

  // ── Body Parts ──
  { id:'bo1', cat:'body', name:'Front Bumper Guard (Black)', partNo:'FBG2201', brand:'Automob OEM', price:1200, mrp:1500, img:IMG.body, type:'Aftermarket', fitment:'Maruti Swift / Dezire', rating:4.3, reviews:312, stock:true, badge:'' },
  { id:'bo2', cat:'body', name:'Side Mirror (Electric, RH)', partNo:'SM7702', brand:'Genuine', price:2800, mrp:3500, img:IMG.body, type:'Genuine', fitment:'Honda City 5th Gen', rating:4.8, reviews:89, stock:true, badge:'New' },

  // ── Wiper ──
  { id:'w1', cat:'wiper', name:'Bosch AeroTwin Wiper Blades (Pair)', partNo:'A299S', brand:'BOSCH', price:890, mrp:1100, img:IMG.wiper, type:'Genuine', fitment:'26"/16" Universal Fit', rating:4.9, reviews:678, stock:true, badge:'Best Seller' },
  { id:'w2', cat:'wiper', name:'Rear Wiper Blade', partNo:'H402', brand:'BOSCH', price:280, mrp:360, img:IMG.wiper, type:'Genuine', fitment:'Hyundai Creta / Venue', rating:4.7, reviews:234, stock:true, badge:'' },

  // ── Battery ──
  { id:'bat1', cat:'battery', name:'Exide Mileage 35Ah Battery', partNo:'EM38B20L', brand:'Exide', price:3800, mrp:4600, img:IMG.battery, type:'Genuine', fitment:'Small Hatchbacks — Alto, i10', rating:4.7, reviews:345, stock:true, badge:'Best Seller' },
  { id:'bat2', cat:'battery', name:'Amaron Go 44Ah Battery', partNo:'AM44LB0', brand:'Amaron', price:4200, mrp:5100, img:IMG.battery, type:'Genuine', fitment:'Mid-size Sedans & SUVs', rating:4.8, reviews:289, stock:true, badge:'' },

  // ── Alloy Wheels ──
  { id:'aw1', cat:'wheel', name:'16" Diamond-Cut Alloy Wheel (Single)', partNo:'AW1601', brand:'Neo', price:7200, mrp:9000, img:IMG.wheel, type:'Aftermarket', fitment:'PCD 4×100 / ET35', rating:4.6, reviews:134, stock:true, badge:'' },
  { id:'aw2', cat:'wheel', name:'15" Hyper Silver Alloy Wheel Set (4)', partNo:'AW1504', brand:'OZ Racing', price:22000, mrp:28000, img:IMG.wheel, type:'Aftermarket', fitment:'PCD 4×100 / ET40', rating:4.8, reviews:56, stock:true, badge:'Premium' },

  // ── New Products ──
  { id:'new1', cat:'engine', name:'Engine Radiator Assembly', partNo:'RAD-8890', brand:'Valeo', price:4500, mrp:5800, img:IMG.radiator, type:'Genuine', fitment:'Honda City / Jazz', rating:4.7, reviews:112, stock:true, badge:'Best Seller' },
  { id:'new2', cat:'elec', name:'AC Compressor Unit', partNo:'AC-Comp-400', brand:'Denso', price:12500, mrp:15000, img:IMG.ac_comp, type:'Genuine', fitment:'Toyota Innova / Fortuner', rating:4.9, reviews:84, stock:true, badge:'Premium' },
  { id:'new3', cat:'body', name:'Exhaust Muffler Silencer', partNo:'EXM-102', brand:'Bosal', price:3200, mrp:4100, img:IMG.exhaust, type:'Aftermarket', fitment:'Maruti Suzuki Swift', rating:4.5, reviews:201, stock:true, badge:'' },
  { id:'new4', cat:'susp', name:'Power Steering Pump', partNo:'PSP-500', brand:'ZF', price:6800, mrp:8500, img:IMG.steering, type:'Genuine', fitment:'Mahindra Scorpio / XUV500', rating:4.6, reviews:92, stock:true, badge:'' },
  { id:'new5', cat:'engine', name:'Fuel Pump Assembly Module', partNo:'FPA-300', brand:'Delphi', price:2900, mrp:3600, img:IMG.fuel_pump, type:'Genuine', fitment:'Hyundai i20 / Verna', rating:4.8, reviews:145, stock:true, badge:'New' },
  { id:'new6', cat:'trans', name:'CV Joint Drive Shaft Axle', partNo:'CV-Axle-99', brand:'GSP', price:4100, mrp:5200, img:IMG.cv_axle, type:'Aftermarket', fitment:'Volkswagen Polo / Vento', rating:4.4, reviews:76, stock:true, badge:'' },
  { id:'new7', cat:'engine', name:'Timing Belt Kit with Tensioner', partNo:'TBK-77', brand:'Continental', price:2400, mrp:3100, img:IMG.timing, type:'Genuine', fitment:'Ford EcoSport / Fiesta', rating:4.7, reviews:210, stock:true, badge:'Best Seller' },
  { id:'new8', cat:'engine', name:'Engine Head Gasket', partNo:'HG-55', brand:'Victor Reinz', price:1800, mrp:2300, img:IMG.gasket, type:'Genuine', fitment:'Tata Nexon / Altroz', rating:4.8, reviews:188, stock:true, badge:'' },
  { id:'new9', cat:'brake', name:'Ventilated Brake Disc Rotor (Pair)', partNo:'BDR-22', brand:'Bosch', price:3600, mrp:4500, img:IMG.rotor, type:'Genuine', fitment:'Kia Seltos / Sonet', rating:4.9, reviews:315, stock:true, badge:'Premium' },
  { id:'new10', cat:'light', name:'LED Fog Lamp Assembly (Pair)', partNo:'FL-LED-88', brand:'Hella', price:2800, mrp:3800, img:IMG.fog_lamp, type:'Aftermarket', fitment:'Universal Fit (4 inch)', rating:4.5, reviews:402, stock:true, badge:'New' },
  { id:'new11', cat:'susp', name:'Gas Shock Absorber Strut (Front)', partNo:'SAS-Gas-1', brand:'KYB', price:2600, mrp:3400, img:IMG.shock, type:'Genuine', fitment:'Maruti Suzuki Brezza', rating:4.7, reviews:275, stock:true, badge:'' },
  { id:'new12', cat:'engine', name:'Coolant Thermostat Sensor', partNo:'CTS-10', brand:'Mahle', price:850, mrp:1100, img:IMG.thermo, type:'Genuine', fitment:'Renault Duster / Kwid', rating:4.6, reviews:130, stock:true, badge:'' },
];

export const BRANDS = [
  { name: 'Maruti Suzuki', slug: 'maruti' },
  { name: 'Hyundai', slug: 'hyundai' },
  { name: 'Honda', slug: 'honda' },
  { name: 'Toyota', slug: 'toyota' },
  { name: 'Tata', slug: 'tata' },
  { name: 'Mahindra', slug: 'mahindra' },
  { name: 'Kia', slug: 'kia' },
  { name: 'MG', slug: 'mg' },
];

export const TESTIMONIALS = [
  { name: 'Rajesh Kumar', city: 'Delhi', text: 'Got genuine Brembo pads delivered in 2 days. Quality is excellent. Will order again!', rating: 5, car: 'Hyundai i20' },
  { name: 'Priya Sharma', city: 'Bangalore', text: 'The Bosch wiper blades are perfect. Fit perfectly and cleared my windshield like new.', rating: 5, car: 'Honda City' },
  { name: 'Amit Patel', city: 'Ahmedabad', text: 'Ordered NGK spark plugs and saw improved mileage. Fast shipping and great packaging.', rating: 4, car: 'Maruti Baleno' },
  { name: 'Deepa Nair', city: 'Chennai', text: 'Best prices online. Got Exide battery installed by their tie-up mechanic. 10/10 service.', rating: 5, car: 'Toyota Innova' },
];

// ── ALIASES (for compatibility) ─────────────────────────────────────────
export const categories = CATEGORIES;
export const products = PRODUCTS;

// ── CART HELPERS ──────────────────────────────────────────────────────────
export const getProductById = (id) => PRODUCTS.find(p => p.id === id);
export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id);
export const getProductsByCategory = (catId) => catId ? PRODUCTS.filter(p => p.cat === catId) : PRODUCTS;

export const fmt = (n) => '₹' + n.toLocaleString('en-IN');
export const discount = (price, mrp) => Math.round(((mrp - price) / mrp) * 100);
