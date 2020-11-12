# Deployment

Deploy scripts for deploying the app to aws environments.

## Deploying to staing

The `staging.py` script will first create aws security group exception for the running machine.

It gets ssh cert from `wineapp-secrets` bucket.

Then it will use `fabric` to deploy to aws ec2 instances:

1. Copy `docker-compose.{env}.yml` to `docker-compose.yml` on the ec2.

2. Copy `secrets.{env}.yml` from `wineapp-secrets` s3 bucket to `docker-compose.override.yml` on the ec2.

3. Runs `docker-compose pull` and `docker-compose up -d`.


## Initializing machines

`initialize.py` script uses `fabric` to install required dependencies to ec2 instances.
