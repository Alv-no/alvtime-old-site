#!/bin/sh

if [ "`git status -s`" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf site/public
mkdir site/public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages site/public origin/gh-pages

echo "Removing existing files"
rm -rf site/public/*

echo "Generating site"
docker run -it --rm -v $PWD/site:/usr/share/blog alvtime-site hugo

echo "Updating gh-pages branch"
cd site/public && git add --all && git commit -m "Publishing to gh-pages (publish_to_ghpages.sh)"

#echo "Pushing to github"
#git push --all
