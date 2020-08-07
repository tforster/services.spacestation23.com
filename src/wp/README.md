# wp.services.spacestation23.com

Provides on-demand site building capability via the tforster/web-producer GitHub module

This is a Serverless Framework managed AWS Lambda function. Ensure all localised dependencies are installed.

# Install Dependencies for This Service

1. Change directory to this specific service `cd src/wp`
1. Install service specific dependencies with `npm i`. Note that each service directory has its own specific package.json file.
1. Set up a `.env` file with the following:

```ini
ALIAS_DATA=data-s3
STAGE=dev
PREVIEW=true
CLOUDFRONT_ID=
```

# Deploy This Service

Typically the wp service will be deployed in either a stage or production environment as follows:

1. Update the environment variable `STAGE` in your .env file to indicate either `dev`, `stage` or `prod`.
2. Update webproducer.yml to ensure the `destination.path` points to either the stage or production S3 bucket.
3. Update webproducer.yml to ensure that `destination.webserver.cloudFrontDistributionId` points to either the stage or production CloudFront Id
4. Deploy this service using the Serverless Framework:

   ```sh
   cd src/wp
   sls deploy --aws-profile spacestation23
   ```
