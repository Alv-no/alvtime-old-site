# Alvtime

Visit the alvtime website at [https://Alv-no.github.io/alvtime/](https://Alv-no.github.io/alvtime/)

## Add and edit content

Add and edit content by adding and editing files in the content folder. See existing files for examples or go to the selected themes page [hugo-theme-introduction](https://github.com/victoriadrake/hugo-theme-introduction) for detaild instructions.

## Development

Clone this repository and run the following command to build the docker image:

```
docker build -t alvtime-site .
```

Then run the following to start a local development server.

```
docker run -it --rm -p 1313:1313 -v $PWD/site:/usr/share/blog alvtime-site
```

Open `localhost:1313` in a webpage and change a file in the content directory. The site will be rebuilt and the changes will be reflected in the browser.

## Publish

To publish the webpage run the `publish_to_ghpages.sh` script.
