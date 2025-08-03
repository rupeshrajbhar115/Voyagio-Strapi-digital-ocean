module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      headers: "*",
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
