import { ROUTES } from './routes';
import { ProjectAccessoryType } from '../models/project';

export const landingPageServices = {
  patios: {
    id: 'PATIOS',
    title: 'Bring your backyard to life.',
    description: 'Want to spend more time enjoying the outdoors? Need more room for entertaining? Or want a place to simply “get away” in your own back yard? A patio done by J&D Landscaping is your solution, with custom design ideas and accessories including fire pits, sitting walls, outdoor kitchen and couches. Let the patios of your dreams become a reality.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/patios/1.jpg', flex: 2 },
        { url: 'assets/images/landing-page/services/patios/2.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/patios/3.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/patios/4.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/patios/5.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/patios/6.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/patios/7.jpg', flex: 2 },
      ]
    ],
    moreLink: `${ROUTES.landingPages.ideaBoard}?projectType=${ProjectAccessoryType.Patio}`
  },
  walkways: {
    id: 'WALKWAYS',
    title: 'Add value and safety to every household.',
    description: 'Walkways are an important part of front yard landscaping. A beautiful walkway will greatly enhance your home’s curb appeal and provide a way for you and your guests to get to your front door. No matter the size or shape of your walkway you can rest assured that J&D Landscaping will help you design a custom walkway that fits your home.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/walkways/1.jpg', flex: 2 },
        { url: 'assets/images/landing-page/services/walkways/2.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/walkways/3.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/walkways/4.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/walkways/5.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/walkways/6.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/walkways/7.jpg', flex: 2 },
      ]
    ],
    moreLink: `${ROUTES.landingPages.ideaBoard}?projectType=${ProjectAccessoryType.Walkway}`
  },
  retainingWalls: {
    id: 'RETAINING_WALLS',
    title: 'Make the impossible, possible.',
    description: 'Retaining walls are one of the most underappreciated parts of the Hardscape industry, although retaining walls serve as the back bone of many projects. Retaining walls have their own set of challenges separate from pavers including proper drainage, geo-grid and back filling. There are many choices for retaining wall blocks and each type of block is rated for a specific load capacity. J&D Landscaping has extensive experience in the SRW industry and will help explain the differences.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/retaining-walls/1.jpg', flex: 2 },
        { url: 'assets/images/landing-page/services/retaining-walls/2.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/retaining-walls/3.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/retaining-walls/4.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/retaining-walls/5.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/retaining-walls/6.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/retaining-walls/7.jpg', flex: 2 },
      ]
    ],
    moreLink: `${ROUTES.landingPages.ideaBoard}?projectType=${ProjectAccessoryType.RetainingWall}`
  },
  driveways: {
    id: 'DRIVE_WAYS',
    title: 'Stand out from the neighbors.',
    description: 'Paver driveways have become very popular in this day and age. With the rising cost of asphalt and the nearly indestructible durability of pavers, it makes sense to consider doing pavers once and never having to worry about replacing your driveway again. Driveways are more complex than patios and walkways and require additional measures to ensure durability against cars and trucks. J&D Landscaping takes extra precaution when installing paver driveways to ensure they last a lifetime.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/driveways/1.jpg', flex: 2 },
        { url: 'assets/images/landing-page/services/driveways/2.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/driveways/3.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/driveways/4.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/driveways/5.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/driveways/6.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/driveways/7.jpg', flex: 2 },
      ]
    ],
    moreLink: `${ROUTES.landingPages.ideaBoard}?projectType=${ProjectAccessoryType.DrivewayParking}`
  },
  completeTransformations: {
    id: 'COMPLETE_TRANSFORMATIONS',
    title: 'Complete Transformations.',
    hasBeforeAfter: true,
    description: 'Think your back yard can’t be fixed? Have no idea where to begin? J&D Landscaping has seen it all when it comes to outdated back yards and we are here to help! A completed Hardscape project using walls, pavers, and outdoor elements can turn any basic backyard into an updated back yard of your dreams.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/complete-transformations/1.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/complete-transformations/2.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/complete-transformations/3.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/complete-transformations/4.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/complete-transformations/5.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/complete-transformations/6.jpg', flex: 1 },
      ]
    ]
  },
  poolPatios: {
    id: 'POOL_PATIOS',
    title: 'Create your outdoor oasis.',
    description: 'Pool Patios allow the imagination to come to life, J&D Landscaping pool patio projects have incorporated gas fire pits, complete outdoor kitchen areas, Hardscape bars, Pavilions and various other custom ideas. Whether you are looking to upgrade your existing pool patio or plan a new pool from scratch, J&D Landscaping can coordinate the entire project from creating your custom design to completion.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/pool-patios/1.jpg', flex: 2 },
        { url: 'assets/images/landing-page/services/pool-patios/2.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/pool-patios/3.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/pool-patios/4.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/pool-patios/5.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/pool-patios/6.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/pool-patios/7.jpg', flex: 2 },
      ]
    ],
    moreLink: `${ROUTES.landingPages.ideaBoard}?projectType=${ProjectAccessoryType.PoolPatio}`
  },
  designServices: {
    id: 'DESIGN_SERVICES',
    title: 'Design Services',
    description: 'The options and possibilities in the Hardscape industry are countless and we understand the difficulties envisioning your completed project. We offer custom 3D design services to help our customers realize the potential of their back yard. This 3D service allows you to visualize your project and fine tune the design before breaking ground.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/design-services/1.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/design-services/2.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/design-services/3.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/design-services/4.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/design-services/5.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/design-services/6.jpg', flex: 1 },
      ],
    ]
  },
  stepsAndStaircases: {
    id: 'STEPS_AND_STAIRCASES',
    title: 'Hardscape Steps & Staircases',
    description: '<span class="font-weight-medium">Steps and staircases are a very important part of most Hardscape projects</span>, it’s important to find the stairs that work best with your project. Whether you are looking to step out a back slider door onto your beautiful patio below or walk up or down a steep hill to your driveway, J & D Landscaping has the solution picking out the best choice of stairs to complete your project.',
    ideas: [
      [
        { url: 'assets/images/landing-page/services/steps-and-staircases/1.jpg', flex: 2 },
        { url: 'assets/images/landing-page/services/steps-and-staircases/2.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/steps-and-staircases/3.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/steps-and-staircases/4.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/steps-and-staircases/5.jpg', flex: 1 },
      ],
      [
        { url: 'assets/images/landing-page/services/steps-and-staircases/6.jpg', flex: 1 },
        { url: 'assets/images/landing-page/services/steps-and-staircases/7.jpg', flex: 2 },
      ]
    ]
  }
};
