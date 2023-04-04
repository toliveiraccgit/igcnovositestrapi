export default ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 500 * 1024 * 1024,
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_USER"),
        defaultReplyTo: env("SMTP_USER"),
      },
    },
  },
  // ...(Boolean(env("BUCKET", false))
  //   ? {
  //       upload: {
  //         config: {
  //           provider: "aws-s3",
  //           providerOptions: {
  //             accessKeyId: env("AWS_ACCESS_KEY_ID"),
  //             secretAccessKey: env("AWS_ACCESS_SECRET"),
  //             region: env("AWS_REGION"),
  //             params: {
  //               Bucket: env("AWS_BUCKET_NAME"),
  //             },
  //           },
  //           actionOptions: {
  //             upload: {},
  //             uploadStream: {},
  //             delete: {},
  //           },
  //         },
  //       },
  //     }
  //   : {}),
});
