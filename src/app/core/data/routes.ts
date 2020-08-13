export const ROUTES = {
  // landing pages
  landingPages: {
    about: 'about',
    whyChooseUs: {
      root: 'why-choose-us',
      installationProcess: 'installation-process',
      projectManagement: 'project-management',
    },
    ideaBoard: 'idea-board',
    patioPackages: 'patio-packages',
    services: {
      root: 'services',
      patios: 'patios',
      walkways: 'walkways',
      retainingWalls: 'retaining-walls',
      driveways: 'driveways',
      poolPatios: 'pool-patios',
      completeTransformations: 'complete-transformations',
      designServices: 'design-services',
      stepsAndStaircases: 'steps-and-staircases',
      inlaysAndBorders: 'inlays-and-borders',
      paversVsConcrete: 'pavers-vs-concrete',
    },
    contact: 'contact',
    requestEstimate: 'request-estimate',
    blog: 'blog',
    hiring: 'hiring',
    privacy: 'privacy',
    legalNotice: 'legal-notice',
  },
  // marketing landing pages
  marketingPages: {
    servicePatio: 'patio'
  },
  // authentication
  auth: {
    login: 'login',
    forgotPassword: 'forgot-password',
    resetPassword: 'reset-password',
    verify: 'verify',
    verifyEmailChange: 'verify-email-change',
    invite: 'invite'
  },
  // client pages
  app: {
    root: 'app',
    myProjects: 'my-projects',
    createProject: 'create-project',
    project: 'project',
    estimate: 'estimate',
    proposal: 'proposal',
    payment: 'management',
    contract: 'contract',
    ideaBoard: 'idea-board',
    portfolioProjects: 'portfolio-projects',
    networkContractors: 'network-contractors',
  },
  // admin pages
  admin: {
    root: 'admin',
    dashboard: 'dashboard',
    schedule: 'schedule',
    projects: 'projects',
    leads: 'leads',
    customers: 'customers',
    ideaBoard: 'idea-board',
    network: {
      root: 'network',
      category: 'category',
      create: 'create',
    },
    search: 'search',
    hiring: 'hiring',
    marketing: 'marketing',
    project: {
      brief: 'brief',
      estimate: 'estimate',
      finalProposal: 'proposal',
      contract: 'contract',
      management: 'management',
      emailActivity: 'email-activity',
      customerActivity: 'customer-activity',
      chooseMaterial: 'choose-material',
      orderMaterial: 'order-material',
      cbyd: 'cbyd'
    }
  },
  // common pages
  common: {
    notifications: 'notifications',
    inbox: 'inbox',
    create: 'create',
    account: {
      root: 'account',
      projectsSetting: 'projects-setting',
      accountSetting: 'account-setting',
      paymentSetting: 'payment-setting',
      userManagement: 'user-management',
      contracts: 'contracts',
      logRocket: 'log-rocket',
    }
  },
  // redirect
  redirect: 'redirect'
};

export function toAbsolutePath(path: string | string[]) {
  // this function accepts string or string array
  // CAUTION! - be aware, send only valid array or string
  if (typeof path === 'string') {
    return '/' + path;
  } else {
    return '/' + path.join('/');
  }
}
