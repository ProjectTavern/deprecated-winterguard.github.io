#!/bin/bash

dist_directory="out"

function next_build {
    next build
}

function publish_repository {
    local publish_directory=$1
    local commit_hash=`git rev-parse --short HEAD`
    local original_branch=`git symbolic-ref --short HEAD`

    git branch -D publish-${commit_hash}
    git --work-tree ${publish_directory} checkout --orphan publish-${commit_hash}
    git --work-tree ${publish_directory} add --all
    git --work-tree ${publish_directory} commit -m "publish ${commit_hash}"
    git push origin HEAD:gh-pages --force
    git checkout -f ${original_branch}
    git branch -D publish-${commit_hash}
}

next_build
publish_repository dist_directory
