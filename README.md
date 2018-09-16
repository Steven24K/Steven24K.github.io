# Steven24K.github.io

I am hosting my personal website from this repository, it is available at [stevenkoerts.nl](http://stevenkoerts.nl/), here I will post
information about myself, what I do and what I have done. This website is build with Docusaurus a powerfull static site generator, build by
Facebook opensource. Originally used for managing documentation for opensource projects, but also usefull for a personall website and blog. 

## Dependecies
- Docusaurus
- Bootstrap 4.1.1
- JQuery
- Popper
- gh-pages 1.2.0
- Node.js

## Setup Site locally

clone the repository: 
`git clone https://github.com/Steven24K/Steven24K.github.io.git`

Make sure you are in the right directory:
`cd website`

Install packages:
`npm install`

or

`yarn install`

Run the project: 

`npm run start`

or 

`yarn start`

## Helpfull commands
Start the project, with live reload server for development:
`npm run start`

Build static HTML pages, website will be placed in the build directory:
`npm run build`

Build HTML pages and deploy site to GitHub pages:
`npm run deploy`

Just deploy the site without building it, for manual builds:
`npm run deploy-without-build`

