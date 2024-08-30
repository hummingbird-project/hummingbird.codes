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

STAGING_DISTRIBUTION_ID=EYMMXRXBFOIF7
PROD_DISTRIBUTION_ID=E1WY5ZRQPDX7NV
STAGING_S3_PATH=s3://staging.hummingbird.codes/
PROD_S3_PATH=s3://hummingbird.codes/

S3_PATH="$STAGING_S3_PATH"
DISTRIBUTION_ID="$STAGING_DISTRIBUTION_ID"

while getopts ":p" OPT; do
  case "$OPT" in
    "p")
      S3_PATH="$PROD_S3_PATH"
      DISTRIBUTION_ID="$PROD_DISTRIBUTION_ID"
      shift
      ;;
    *)
      echo "Unrecognized option: $1"
      echo "Usage: deploy.sh [-p]"
      exit 1
      ;;
  esac
done

# install latest modules
bun install

# build site
bun run generate

# sync with aws folder
aws s3 sync .output/public/ "$S3_PATH"

# invalidate cloudfront cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"