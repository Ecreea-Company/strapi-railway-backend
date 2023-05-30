export default ({ env }) => ({
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
        uploadStream: {},
        delete: {},
      },
    },
  },
  search: {
    enabled: true, //env.bool('SEARCH_PLUGIN', false),
    config: {
      provider: 'algolia',
      providerOptions: {
        apiKey: 'b438ec363ec34c835279a2f298f16e3f', //env('ALGOLIA_PROVIDER_ADMIN_API_KEY'),
        applicationId: 'AQS72RFZ2Qenv' //('ALGOLIA_PROVIDER_APPLICATION_ID'),
      },
      contentTypes: [{
        name: 'api::job.job',
        index: 'job'
      }],
    },
  },
})
