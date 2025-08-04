// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "@strapi/provider-upload-s3",
//       providerOptions: {
//         accessKeyId: env("DO_SPACE_ACCESS_KEY"), //allbuckets-1754230400792
//         secretAccessKey: env("DO_SPACE_SECRET_KEY"), //oAYjk+LqJ91Fh+LNw9yhW1U/H+0Zu+wNnkbplPn37TQ
//         endpoint: env("DO_SPACE_ENDPOINT"), // important  https://voyagio-imagestore1.sfo3.digitaloceanspaces.co
//         region: env("DO_SPACE_REGION"), //sfo3
//         params: {
//           Bucket: env("DO_SPACE_BUCKET"), //voyagio-imagestore1
//         },
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "aws-s3",
//       providerOptions: {
//         accessKeyId: env("DO_SPACE_ACCESS_KEY"), //allbuckets-1754230400792
//         secretAccessKey: env("DO_SPACE_SECRET_KEY"), //oAYjk+LqJ91Fh+LNw9yhW1U/H+0Zu+wNnkbplPn37TQ
//         endpoint: env("DO_SPACE_ENDPOINT"), // https://voyagio-imagestore1.sfo3.digitaloceanspaces.com
//         region: env("DO_SPACE_REGION"), //sfo3
//         params: {
//           Bucket: env("DO_SPACE_BUCKET"), //voyagio-imagestore1
//         },
//       },
//     },
//   },
// });

// config/plugins.js
module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: "@strapi/provider-upload-aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("DO_SPACE_ACCESS_KEY"),
              secretAccessKey: env("DO_SPACE_SECRET_KEY"),
            },
            region: env("DO_SPACE_REGION"),
            endpoint: env("DO_SPACE_ENDPOINT"),
            forcePathStyle: false,
            params: {
              Bucket: env("DO_SPACE_BUCKET"),
            },
          },
        },
      },
    },
  };
};

// path: config/plugins.js
// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: '@strapi/provider-upload-aws-s3',
//       providerOptions: {
//         s3Options: {
//           credentials: {
//             accessKeyId: env('DO_SPACE_ACCESS_KEY'),
//             secretAccessKey: env('DO_SPACE_SECRET_KEY'),
//           },
//           region: env('DO_SPACE_REGION'),
//           endpoint: env('DO_SPACE_ENDPOINT'), // https://sfo3.digitaloceanspaces.com
//           forcePathStyle: false,
//           params: {
//             Bucket: env('DO_SPACE_BUCKET'),
//           },
//         },
//         baseUrl: env('PROXY_BASE_URL'), // This will be your droplet URL
//         baseUrlAppendPath: true,
//       },
//     },
//   },
// });
