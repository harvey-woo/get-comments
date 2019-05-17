#! /bin/bash
if [ ! -n $GITHUB_TOKEN ] ; then
  echo "Please set GITHUB_TOKEN"
  exit 1;
fi


export PAGER=cat
TO_BRANCH="master"
URL=$(git remote -v | head -n1 | cut -f2 | cut -d" " -f1)
echo "Repo url is $URL"
PUSH_URL="https://scuzzlebuzzle:$GITHUB_TOKEN@${URL:8}"

git checkout $TRAVIS_BRANCH . &&\
git fetch origin $TO_BRANCH:$TO_BRANCH && \
git checkout $TO_BRANCH && \
echo "Merging changes..." && \
git merge $TRAVIS_BRANCH && \
echo "Pushing changes..." && \
git push $PUSH_URL && \
echo "Merge complete!" || \
echo "Error Occurred. Merge failed"
