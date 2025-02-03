// src/admin/app..ts
import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'ar', 
      'en', 
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "...",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },

  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
