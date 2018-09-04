# FULL-STACK WEB APPLICATION
![screen shot 2018-08-17 at 1 12 57 pm](https://user-images.githubusercontent.com/36870689/44284559-5ba49a00-a21f-11e8-9653-e201342178b7.png)


## set up
Create React app to create folder structure
NPM isntall server dependencies
* Express
* Mongoose
* Body-parser
* babel-cli
* babel-preset-es2015
* rimraf 
  * (npm install --save-dev babel-cli babel-preset-es2015 rimraf)

## [To run server](https://www.codementor.io/iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o) 
- in package.json, under scripts:
```
 "start-server": "npm run build-server && node dist-server/index.js",
 "build-server": "rimraf dist-server/ && babel ./server --out-dir dist-server/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files"
```
- A new start command and a new build command. ["start": "npm run build && node dist/index.js"](https://www.codementor.io/iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o)


## Connect MongoDB
- In terminal, make sure you're in the home directory `cd ~`
- Type: `mongod --dbpath data/db/` => enter

## CSS from [Connect Ghibli-API tutorial](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/)
- [Full CSS code here](https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/style.css)
