#!/bin/bash
#
# This script pushes to the mirror repository if the current branch
# name is present in the MirrorBranches env variable.

# Add the remote.
git remote add mirror ssh://$MirrorRepository

# Read the branch names from the MirrorBranches env variable
# and add them to the mirror_branches array.
IFS=',' read -r -a mirror_branches <<< "$MirrorBranches"

# Push the code if the current branch is included in the mirror_branches array.
if [[ "${mirror_branches[@]}" =~ "$BITBUCKET_BRANCH" ]]; then
  git push mirror $BITBUCKET_BRANCH
fi
