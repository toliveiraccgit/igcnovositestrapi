export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: Boolean(process.env.BUCKET)
        ? {
            useDefaults: true,
            directives: {
              "connect-src": ["'self'", "https:", "http:"],
              "img-src": [
                "'self'",
                "data:",
                "blob:",
                "dl.airtable.com",
                "igc-front-images-bucket.s3.us-east-1.amazonaws.com",
              ],
              "media-src": [
                "'self'",
                "data:",
                "blob:",
                "dl.airtable.com",
                "igc-front-images-bucket.s3.us-east-1.amazonaws.com",
              ],
              upgradeInsecureRequests: null,
            },
          }
        : {},
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "500mb", // modify form body
      jsonLimit: "500mb", // modify JSON body
      textLimit: "500mb", // modify text body
      formidable: {
        maxFileSize: 500 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
