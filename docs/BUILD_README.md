# ECS SAMPLE API

## Build Setup Instructions

### Create Codebuild build

* Create an IAM user in the target AWS account with enough privileges to deploy the API
* Capture the Access key ID and Secret access key for the newly created user
* Create API Build in CodeBuild - 
  * **Do not create any Environment variables at this time**
  * Repo: XXX
  * Provider: AWS CodeCommit
  * Image: Managed image
  * OS: Ubuntu
  * Runtime: Standard
  * Image: most up to date image available
  * Service role: New service role
  * Buildspec: Use a buildspec file
  * Branch: desired branch for your build
* Save the build as is
* Create 2 SSM parameters and set their values to the AWS key ID and Secret access key of the IAM user created in the target account
  * /CodeBuild/[buildname]/AWS_SECRET_ACCESS_KEY
  * /CodeBuild/[buildname]/AWS_ACCESS_KEY_ID
*
* Edit the build and create the following environment variables
  * Environment variables
    * AWS_SECRET_ACCESS_KEY: /CodeBuild/[buildname]/AWS_SECRET_ACCESS_KEY
    * AWS_ACCESS_KEY_ID: /CodeBuild/[buildname]/AWS_ACCESS_KEY_IDaccount
    * AWS_REGION - AWS region where API will be deployed to
    * STAGE - stage to be used (OPTIONAL, default to dev)

### Create CodePipeline

XXX
