# FX Rates
Interface that displays a summary of the FX rates of currency against other currencies.
## Technical requirements
- Use fixer.io as your API
- You may do vanilla js, or any framework of your choice
- Have a build process that creates a single minified js file
## Expected results
- Historical view of fx rates on a graph
- Fast loading (less than 5s)
- Easy setup (starting the project should take less than 5 mins)
- Good documentation
- Follow a code style guide
## Resources
- Recommended Frameworks: vuejs.org, reactjs.org
- Plotting Framework: c3js.org
- Build process: https://css-tricks.com/gulp-for-beginners/



#### Build process
- Clone repo from: https://github.com/yexhoo/FX-Rates.git
- Once the download is finished, open a terminal and execute next command.
```sh
$ npm install
```
<p align="center"><img src="doc/images/screenShoot1.png" /></p>

- To generate bundle file, execute next command
```sh
$ npm run-script build
```
- you will get something like this

<p align="center"><img src="doc/images/screenShoot2.png" /></p>

- The 'dist' folder must contain the following files
-- FX_Rates_Bundle.js
-- index.css
-- index.html

<p align="center"><img src="doc/images/screenShoot3.png" /></p>

- You can open the index.html file to get the next screen

<p align="center"><img src="doc/images/screenShoot4.png" /></p>