# ECS API - SAMPLE

### Build environments

Environments listed bellow, if specified as environment ivar on the build moment will replace the current development configuration.

- `AWS_ACCESS_KEY_ID` - AWS Key of the account to receive the deployment
- `AWS_SECRET_ACCESS_KEY` - AWS Secret of the account to receive the deployment
- `AWS_REGION` - AWS Region of the account to receive the deployment -- Optional
- `STAGE` - Deployment stage to be used -- Optional, uses 'dev' if not specified
    - `Possible Values` - `dev`, `stage`, `prod`

More instructions at [Build Instructions](docs/BUILD_README.md)

#### Documentation
- [System Enviroments](docs/ENVS.md)
- [Build Instructions](docs/BUILD_README.md)