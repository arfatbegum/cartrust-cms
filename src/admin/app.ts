// src/admin/app.ts
import type { StrapiApp } from "@strapi/strapi/admin";
import '../../src/admin/styles/custom-styles.css';

export default {
  config: {
    auth: {
      logo: "./extensions/logo.png",
    },
    menu: {
      logo: "./extensions/logo.png",
    },
    locales: ["ar", "en"],
    translations: {
      en: {
        "Auth.form.welcome.title": "Hello, welcome back!",
        "Auth.form.register.subtitle":
          "Let's explore beyond the world with CarTrust services.",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
      ar: {
        "Auth.form.welcome.title": "يا هلا، مرحبًا بعودتك!",
        "Auth.form.register.subtitle":
          "دعنا نستكشف ما وراء العالم من خلال خدمات كار ترست",
        "Auth.form.welcome.subtitle": "تسجيل الدخول إلى حسابك",
      },
    },
    theme: {
      light: {
        colors: {
          primary600: "#2d3291",
          buttonPrimary500: "#2d3291",
          buttonPrimary600: "#2d3291",
        },
      },
      dark: {
        colors: {
          primary600: "#848afd",
          buttonPrimary500: "#848afd",
          buttonPrimary600: "#848afd",
        },
      },
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app: StrapiApp) {
    // Redirect to /admin/content-manager when accessing /admin
    if (typeof window !== "undefined" && window.location.pathname === "/admin") {
      window.location.replace("/admin/content-manager");
    }
    const style = document.createElement("style");
    style.innerHTML = `
      nav ul li a[href="/admin"] { display: none !important; }
    nav ul li a[href="/admin/plugins/cloud"] { display: none !important; }
    nav ul li a[href="/admin/marketplace"] { display: none !important; }
    nav ul li a[href="/admin/plugins/content-type-builder"] { display: none !important; }
    nav ul li a[href="/admin/plugins/documentation"] { display: none !important; }
    nav ol li a[href="/admin/settings/purchase-audit-logs"] { display: none !important; }
    nav ol li a[href="/admin/settings/documentation"] { display: none !important; }
    nav ol li a[href="/admin/settings/plugins/purchase-content-releases"] { display: none !important; }
    nav ol li a[href="/admin/settings/purchase-review-workflows"] { display: none !important; }
    nav ol li a[href="/admin/settings/purchase-single-sign-on"] { display: none !important; }
    `;
    document.head.appendChild(style);
  },
};
