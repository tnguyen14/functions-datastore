#! /bin/bash

export GCLOUD_STORAGE_BUCKET="test-tridnguyen-com"

deploy() {
    if [ -z "$1" ]; then
        echo "Function name is needed"
        return 1
    fi

    gcloud functions deploy $1 --stage-bucket $GCLOUD_STORAGE_BUCKET --trigger-http
}

deploy "get"
deploy "set"
deploy "del"
