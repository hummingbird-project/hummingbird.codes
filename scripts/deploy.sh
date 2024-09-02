#!/bin/bash

has_command () {
    command -v "$1" > /dev/null
}

if ! has_command aws ; then
    echo "aws cli is required to deploy"
    exit 1
fi

if ! has_command bun ; then
    echo "Bun, the Javascript runtime and toolkit, is required to deploy"
    exit 1
fi

SITE_ENV="staging"

while getopts ":p" OPT; do
  case "$OPT" in
    "p")
      SITE_ENV="production"
      shift
      ;;
    *)
      echo "Unrecognized option: $1"
      echo "Usage: deploy.sh [-p]"
      exit 1
      ;;
  esac
done

export NUXT_SITE_ENV=$SITE_ENV

if [[ $SITE_ENV == "production" ]]; then
  S3_PATH=s3://hummingbird.codes/
  DISTRIBUTION_ID=E1WY5ZRQPDX7NV
else
  S3_PATH=s3://staging.hummingbird.codes/
  DISTRIBUTION_ID=EYMMXRXBFOIF7
fi

# install latest modules
bun install

# build site
bun run generate

# sync with aws folder
aws s3 sync .output/public/ "$S3_PATH"

# invalidate cloudfront cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"