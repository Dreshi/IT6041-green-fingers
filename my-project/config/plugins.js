module.exports = ({ env }) => ({
    // ...
    meilisearch: {
      config: {
        // Your meili host
        host: "http://localhost:7700",
        // Your master key or private key
        apiKey: "",
      }
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });