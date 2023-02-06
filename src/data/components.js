import uniqid from 'uniqid';

import Fury64 from './images/RAM/Fury64.jpeg';
import Fury32 from './images/RAM/Fury32.jpeg';
import I512400F from './images/CPU/I512400F.jpeg';
import I712700F from './images/CPU/I712700F.jpeg';
import I913900K from './images/CPU/I913900K.jpeg';
import TOMAHAWK from './images/MTHB/TOMAHAWK.jpeg';
import PRIME from './images/MTHB/PRIME.jpeg';
import ROG from './images/MTHB/ROG.jpeg';
import KINGSTON from './images/SSD/KINGSTON240GB.jpeg';
import SAMSUNG from './images/SSD/SAMSUNG1TB.jpeg';
import BARRACUDA from './images/HDD/BARRACUDA4TB.jpeg';
import CORSAIR850W from './images/PSU/CORSAIR850W.jpeg';
import CORSAIR1200W from './images/PSU/CORSAIR1200W.jpeg';

//import all files from './images/MTHB/ROG.jpeg'

const components = [
  {
    name: 'motherboards',
    items: [
      {
        id: uniqid(),
        name: 'MSI MAG B550 TOMAHAWK ATX AMD Socket AM4 Motherboard',
        price: 159.94,
        image: TOMAHAWK,
      },
      {
        id: uniqid(),
        name: 'ASUS PRIME B660M-A WIFI D4 mATX Intel Socket 1700 Motherboard',
        price: 127.06,
        image: PRIME,
      },
      {
        id: uniqid(),
        name: 'ASUS ROG Strix Z690-F Gaming WiFi ATX Intel Socket 1700 Motherboard',
        price: 359.99,
        image: ROG,
      },
    ],
  },
  {
    name: 'processors',
    items: [
      {
        id: uniqid(),
        name: 'Intel Core i5-12400F 12th Gen Desktop Processor 18M Cache',
        price: 156.02,
        image: I512400F,
      },
      {
        id: uniqid(),
        name: 'Intel Core i7-12700F 12th Gen Desktop Processor 25M Cache',
        price: 345.14,
        image: I712700F,
      },
      {
        id: uniqid(),
        name: 'Intel Core i9-13900K 13th Gen Desktop Processor',
        price: 581.58,
        image: I913900K,
      },
    ],
  },
  {
    name: 'memory-modules',
    items: [
      {
        id: uniqid(),
        name: 'Kingston FURY Beast RGB 64GB (2x 32GB) 5200MHz DDR5 RAM - Black',
        price: 237.99,
        image: Fury64,
      },
      {
        id: uniqid(),
        name: 'Kingston FURY Beast RGB 32GB (2 x 16GB) 3200MHz DDR4 RAM',
        price: 104.1,
        image: Fury32,
      },
    ],
  },
  {
    name: 'power-supplies',
    items: [
      {
        id: uniqid(),
        name: `Corsair RM850e 850W 80 PLUS Gold Fully Modular PSU Power Supply`,
        price: 132.99,
        image: CORSAIR850W,
      },
      {
        id: uniqid(),
        name: `Corsair HX1200 1200W 80 PLUS Platinum Fully Modular PSU Power Supply`,
        price: 220.97,
        image: CORSAIR1200W,
      },
    ],
  },
  {
    name: 'solid-state-drives',
    items: [
      {
        id: uniqid(),
        name: `Kingston A400 240GB 2.5" SSD Solid State Drive`,
        price: 18.83,
        image: KINGSTON,
      },
      {
        id: uniqid(),
        name: `Samsung 870 QVO 1TB 2.5" SATA III SSD`,
        price: 81.49,
        image: SAMSUNG,
      },
    ],
  },
  {
    name: 'hard-disk-drives',
    items: [
      {
        id: uniqid(),
        name: `Seagate 4TB BarraCuda Desktop Hard Drive 3.5" SATA III 6GB's 5400RPM 256MB Cache`,
        price: 69.48,
        image: BARRACUDA,
      },
    ],
  },
];

export default components;
