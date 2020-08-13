import {
  getPatioPackageAdditions,
  PatioPackage,
  PatioPackageAddition,
  PatioPackageOption
} from '../models/patio-package';

export const patioPackageOptions = {
  ECONOMY_SERIES: {
    options: [
      new PatioPackageOption(`15' x 20'`, 7500, '15_20'),
      new PatioPackageOption(`20' x 20'`, 9750, '20_20'),
      new PatioPackageOption(`20' x 25'`, 12250, '20_25'),
    ],
    additional: getPatioPackageAdditions([PatioPackageAddition.FirePit, PatioPackageAddition.SittingWall])
  },
  ENTERTAINMENT_SERIES: {
    options: [
      new PatioPackageOption('400 sq ft', 12600, '400_SQ_FT'),
      new PatioPackageOption('600 sq ft', 17500, '600_SQ_FT'),
      new PatioPackageOption('800 sq ft', 22450, '800_SQ_FT'),
    ],
    additional: getPatioPackageAdditions([PatioPackageAddition.Pillars, PatioPackageAddition.WallLights])
  },
  EXECUTIVE_SERIES: {
    options: [
      new PatioPackageOption('600 sq ft', 36450, '600_SQ_FT'),
      new PatioPackageOption('900 sq ft', 43959, '900_SQ_FT'),
      new PatioPackageOption('1100 sq ft', 48950, '1100_SQ_FT'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.OutdoorSpeakers,
      PatioPackageAddition.TimberFrameOrVinylPavilion,
      PatioPackageAddition.OutdoorLighting,
      PatioPackageAddition.LandscapeDesignAndInstallation
    ])
  },
  DECK_EXTENDER_SERIES: {
    options: [
      new PatioPackageOption('Under deck 16 x 20 patio', 8640, 'UNDER_DECK_16_20_PATIO'),
      new PatioPackageOption('Under Deck + Fire Pit area', 14040, 'UNDER_DECK_PLUS_FIRE_PIT'),
      new PatioPackageOption('20 x 28 Deck Replacement', 15120, '20_28_DECK_REPLACEMENT'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.GraniteSteps,
      PatioPackageAddition.SideRetainingWalls,
      PatioPackageAddition.SittingWall,
      PatioPackageAddition.FirePit,
    ])
  },
  WALKWAY_PACKAGES: {
    options: [
      new PatioPackageOption('Up to 25 foot long', 3400, 'UP_TO_25'),
      new PatioPackageOption('Up to 35 foot long', 4480, 'UP_TO_35'),
      new PatioPackageOption('Up to 45 foot long', 5580, 'UP_TO_45'),
      new PatioPackageOption('Up to 55 foot long', 6820, 'UP_TO_55'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.GraniteSteps,
      PatioPackageAddition.Curbing,
    ])
  },
  NEW_POOL_PATIO_PACKAGES: {
    options: [
      new PatioPackageOption('750 sq ft', 18750, '750_SQ_FT'),
      new PatioPackageOption('1100 sq ft', 26400, '1100_SQ_FT'),
      new PatioPackageOption('1500 sq ft', 35250, '1500_SQ_FT'),
    ],
    additional: getPatioPackageAdditions([
      PatioPackageAddition.PoolCoping,
      PatioPackageAddition.SittingWall,
      PatioPackageAddition.FirePit,
    ])
  },
  HARDSCAPE_BAR: {
    price: 4850,
  },
  HARDSCAPE_COUCH: {
    price: 7850,
  },
  HARDSCAPE_GRILL: {
    price: 8500
  }
};

export const patioPackages = {
  ECONOMY_SERIES: {
    label: 'Economy Series',
    description: `
      <p class="color-mine-shaft font-14 mb-20">Are you looking for a simple patio,something that is cost effective, has style and is installed with the durability to last a life time. </p>
      <p class="color-mine-shaft font-14 mb-0">Our economy line offers just that, Choose the style and colors of your choice, Choose the border and choose the size of the paver.</p>
    `,
    info: [
      {
        label: 'Economy Packages',
        options: patioPackageOptions.ECONOMY_SERIES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.ECONOMY_SERIES.additional
      }
    ],
    images: [
      'assets/images/landing-page/patio-packages/economy/1.png',
      'assets/images/landing-page/patio-packages/economy/2.png',
      'assets/images/landing-page/patio-packages/economy/3.png',
      'assets/images/landing-page/patio-packages/economy/4.png',
      'assets/images/landing-page/patio-packages/economy/5.png',
    ]
  },
  ENTERTAINMENT_SERIES: {
    label: 'Entertainment Series',
    description: `
      <p class="color-mine-shaft font-14 mb-20">If your looking to spend time with your family and friends  or a romantic getaway in your back yard the Entertainment series is designed for you.</p>
      <p class="color-mine-shaft font-14 mb-0">Our entertainment line comes in a variety of sizes/colors and includes a fire pit, sitting wall and a custom 10' design, free inlay upgrades  and pre-wire for wall lights.</p>
    `,
    info: [
      {
        label: 'Entertainment Packages',
        options: patioPackageOptions.ENTERTAINMENT_SERIES.options
      },
      {
        label: 'Project Includes',
        options: [
          new PatioPackageOption('Techo-bloc Valencia Fire pit'),
          new PatioPackageOption(`12' Mini-creta sitting wall`),
          new PatioPackageOption(`10' custom circle design`),
          new PatioPackageOption(`and your choice of paver/border`),
        ]
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.ENTERTAINMENT_SERIES.additional
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/entertainment/1.png',
      'assets/images/landing-page/patio-packages/entertainment/2.png',
      'assets/images/landing-page/patio-packages/entertainment/3.png',
      'assets/images/landing-page/patio-packages/entertainment/4.png',
      'assets/images/landing-page/patio-packages/entertainment/5.png',
      'assets/images/landing-page/patio-packages/entertainment/6.png',
      'assets/images/landing-page/patio-packages/entertainment/7.png',
    ]
  },
  EXECUTIVE_SERIES: {
    label: 'Executive Series',
    description: `
      <p class="color-mine-shaft font-14 mb-20">If your looking to go all out with outdoor living and live like a boss then our Executive series is for you. </p>
      <p class="color-mine-shaft font-14 mb-0">Our executive packages start larger, include a Hardscape couch, Hardscape bar, and outdoor grill island. <span class="font-weight-medium">(Items can be separated)</span></p>
    `,
    info: [
      {
        label: 'Executive Packages',
        options: patioPackageOptions.EXECUTIVE_SERIES.options
      },
      {
        label: 'Project Includes',
        options: [
          new PatioPackageOption('Tech-bloc Valencia Fire pit'),
          new PatioPackageOption(`12' Hardscape Couch`),
          new PatioPackageOption(`2 Pillars`),
          new PatioPackageOption(`2 pillar Caps`),
          new PatioPackageOption(`9' Hardscape Bar`),
          new PatioPackageOption(`7' built in grill island (In block or natural stone)`),
          new PatioPackageOption(`10' custom circle design and your choice of paver.`),
        ]
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.EXECUTIVE_SERIES.additional
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/executive/1.png',
      'assets/images/landing-page/patio-packages/executive/2.png',
      'assets/images/landing-page/patio-packages/executive/3.png',
      'assets/images/landing-page/patio-packages/executive/4.png',
      'assets/images/landing-page/patio-packages/executive/5.png',
    ]
  },
  DECK_EXTENDER_SERIES: {
    label: 'Deck Extender Series',
    description: `
      <p class="color-mine-shaft font-14 mb-20">If you have a deck your looking to replace or need more space around an existing deck then these packages are for you.</p>
      <p class="color-mine-shaft font-14 mb-0">J & D Landscaping provides many solutions to maximize your backyard living whether its adding a patio under an existing deck, coordinating a patio off a new or existing deck or  adding side retaining walls our packages can solve all your problems.</p>
    `,
    info: [
      {
        label: 'Deck Extender Packages',
        options: patioPackageOptions.DECK_EXTENDER_SERIES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.DECK_EXTENDER_SERIES.additional
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/deck-extender/1.png',
      'assets/images/landing-page/patio-packages/deck-extender/2.png',
      'assets/images/landing-page/patio-packages/deck-extender/3.png',
      'assets/images/landing-page/patio-packages/deck-extender/4.png',
      'assets/images/landing-page/patio-packages/deck-extender/5.png',
      'assets/images/landing-page/patio-packages/deck-extender/6.png',
      'assets/images/landing-page/patio-packages/deck-extender/7.png',
      'assets/images/landing-page/patio-packages/deck-extender/8.png',
      'assets/images/landing-page/patio-packages/deck-extender/9.png',
    ]
  },
  WALKWAY_PACKAGES: {
    label: 'Walkways Packages',
    description: `
      <p class="color-mine-shaft font-14 mb-20">If you need a new walkway, pavers are by far the best way to go, however many people miss understand the costs, thats why we broke down our most popular sized walkways to help educate you on how affordable paver walkways are.</p>
      <p class="color-mine-shaft font-14 mb-0">All walkway packages include a minimum of 8 inches of base on each side of the walkway for support, your choice of color, paver and border. Standard walkways are 4' wide and include a flair out to the driveway and steps.</p>
    `,
    info: [
      {
        label: 'Walkways Packages',
        options: patioPackageOptions.WALKWAY_PACKAGES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.WALKWAY_PACKAGES.additional
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/walkway/1.png',
      'assets/images/landing-page/patio-packages/walkway/2.png',
      'assets/images/landing-page/patio-packages/walkway/3.png',
      'assets/images/landing-page/patio-packages/walkway/4.png',
      'assets/images/landing-page/patio-packages/walkway/5.png',
      'assets/images/landing-page/patio-packages/walkway/6.png',
      'assets/images/landing-page/patio-packages/walkway/7.png',
      'assets/images/landing-page/patio-packages/walkway/8.png',
      'assets/images/landing-page/patio-packages/walkway/9.png',
    ]
  },
  NEW_POOL_PATIO_PACKAGES: {
    label: 'New Pool Patio Packages',
    description: `
      <p class="color-mine-shaft font-14 mb-20">Pool's are the centerpiece of many back yards and provide years of excitement for the entire family. Given the investment pools are its important to remember to budget for their patios, don't end up short budget and stuck with concrete.</p>
      <p class="color-mine-shaft font-14 mb-0">Pool patio packages are designed around your budget, pool  design and to maximize usable space.</p>
    `,
    info: [
      {
        label: 'Pool patio Packages',
        options: patioPackageOptions.NEW_POOL_PATIO_PACKAGES.options
      },
      {
        label: 'Additional Options',
        options: patioPackageOptions.NEW_POOL_PATIO_PACKAGES.additional
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/pool-patio/1.png',
      'assets/images/landing-page/patio-packages/pool-patio/2.png',
      'assets/images/landing-page/patio-packages/pool-patio/3.png',
      'assets/images/landing-page/patio-packages/pool-patio/4.png',
      'assets/images/landing-page/patio-packages/pool-patio/5.png',
    ]
  },
  HARDSCAPE_BAR: {
    label: 'Hardscapes Bar',
    description: `
      <p class="color-mine-shaft font-14 mb-0">Outdoor patios are all the rage right now, and being able to have a designated hangout or "bar" area where you can pull up a chair or rest your beer is where its at. That's why J & D Landscaping come up with their signature Hardscape Bar.</p>
    `,
    info: [
      {
        label: `Hardscape Bar  <span class="ml-40">$4,650</span>`,
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption('Your choice of color block and caps'),
          new PatioPackageOption(`9' 3" wide x 3" deep`),
          new PatioPackageOption(`New England winter durable `),
          new PatioPackageOption(`15 color combinations`),
        ]
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/hardscape-bar/1.png',
      'assets/images/landing-page/patio-packages/hardscape-bar/2.png',
      'assets/images/landing-page/patio-packages/hardscape-bar/3.png',
    ]
  },
  HARDSCAPE_COUCH: {
    label: 'Hardscapes Couch',
    description: `
      <p class="color-mine-shaft font-14 mb-0">If your looking for a patio show piece, adding a Hardscape couch will do the trick, these indestructible outdoor couches are great hang out locations, can be decorated with pillows and are designed to be the perfect height.</p>
    `,
    info: [
      {
        label: 'Hardscape Couch   <span class="ml-40">$7,850</span>',
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption(`Your choice of color block and caps`),
          new PatioPackageOption(`2 pillars plus matching caps`),
          new PatioPackageOption(`12 feet of sitting area`),
          new PatioPackageOption(`New England winter durable`),
          new PatioPackageOption(`15 color combinations`),
        ]
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/hardscape-couch/1.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/2.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/3.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/4.png',
      'assets/images/landing-page/patio-packages/hardscape-couch/5.png',
    ]
  },
  HARDSCAPE_GRILL: {
    label: 'Hardscape Grill Island',
    description: `
      <p class="color-mine-shaft font-14 mb-0">If your looking for an affordable outdoor grill island our basic package has everything you are looking for. </p>
    `,
    info: [
      {
        label: 'Hardscape Grill Island   <span class="ml-40">$8,500</span>',
      },
      {
        label: 'Specifications',
        options: [
          new PatioPackageOption(`Your choice of block or natural stone`),
          new PatioPackageOption(`Includes Granite Top`),
          new PatioPackageOption(`32" Sumerset Stainless steel Grill`),
          new PatioPackageOption(`Matching Stainless steel cabinet`),
          new PatioPackageOption(`New England winter durable `),
        ]
      },
    ],
    images: [
      'assets/images/landing-page/patio-packages/hardscape-grill/1.png',
    ]
  },
};

export const patioPackageCards = [
  { image: 'assets/images/landing-page/patio-packages/economy/card.png', label: 'Economy Series', id: PatioPackage.Economy },
  { image: 'assets/images/landing-page/patio-packages/entertainment/card.png', label: 'Entertainment Series', id: PatioPackage.Entertainment },
  { image: 'assets/images/landing-page/patio-packages/executive/card.png', label: 'Executive Series', id: PatioPackage.Executive },
  { image: 'assets/images/landing-page/patio-packages/deck-extender/card.png', label: 'Deck Extender Series', id: PatioPackage.DeckExtender },
  { image: 'assets/images/landing-page/patio-packages/walkway/card.png', label: 'Walkways Packages', id: PatioPackage.Walkway },
  { image: 'assets/images/landing-page/patio-packages/pool-patio/card.png', label: 'New Pool Patio Packages', id: PatioPackage.PoolPatio },
  { image: 'assets/images/landing-page/patio-packages/hardscape-bar/card.png', label: 'Hardscape Bar', id: PatioPackage.HardscapeBar },
  { image: 'assets/images/landing-page/patio-packages/hardscape-couch/card.png', label: 'Hardscape Couch', id: PatioPackage.HardscapeCouch },
  { image: 'assets/images/landing-page/patio-packages/hardscape-grill/card.png', label: 'Hardscape Grill Island', id: PatioPackage.HardscapeGrill },
];
