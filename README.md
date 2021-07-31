# stevenkoerts.nl (portfolio)

This is my personal website/blog/portfolio here I show the world what I am up to at the moment.

You can visit it at [stevenkoerts.nl](https://stevenkoerts.nl)

## Tech 

This website is build with Gatsby, a static site generator for react. I manage the content completed from this repository, including the deployments. 
This site is being hosted from the master branch to GitHub pages and the content is on the portfolio branch. 

The pages are represented as React components and the content is managed through markdown files. 

## Typescript support 

in the lib folder there are Typescript files, wich can be compiled using the commands below. The compiled Javascript code can be found in lib/dist and that code can be 
used in the whole application. 

`yarn tsc` or `yarn tsc-w` to compile in watch mode. 


## Commands 

`yarn build` Make production build 

`yarn develop` or `yarn start` Start a dev server with hot reloading 

`yarn serve` To preview the production build 

`yarn deploy` Make a production build and publish the public folder to GitHub pages 

`yarn deploy-now` Deploy without building
