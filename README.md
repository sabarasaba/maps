Daytripper Maps
=================

## Installing dependencies

- Make sure you have installed [NodeJS](http://nodejs.org/) on your computer.
- Install [grunt-cli](http://gruntjs.com/getting-started) by running the following command on your terminal: ``` npm install -g grunt-cli ```
- Install the dependencies of the project: ``` npm install ```
- Generate the minified assets by running: ``` grunt ```

## Workflow

Everytime we change something on the css or js files we're gonna have to run grunt again in order to generate the assets. Now this sounds a little tedious right ? There is a grunt task that takes care of that problem for us. Its called grunt-watch, and his job is to watch for changes on the css,js and html files and then trigger certain tasks when that happends. It also supports LiveReload! So If you make a change on any of the files, you can just alt-tab to your browser and it'll refresh automatically!

So the workflow would be something like:

- Run ```grunt``` on your terminal. That'll keep watching for changes
- Load your static assets server (I'm using a simple python server from the comandline in osx).
- Open your browser and activate the LiveReload plugin.
- Make changes to the code
- Go to the browser
- ???
- Profit

###Live reload

There are plugins for most texteditors/ides. Im using SublimeText and you can install the extension from the package manager.

Also, make sure you install the extension on your browser, I'm using chrome https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related?hl=en


## Special Thanks To

- Google
- CodingDojo : http://codingdojo.com/

#####For the inspiration:
- Brian Folts : http://www.brianfolts.com/driver/
- The Folks behind HyperLapse : http://hyperlapse.tllabs.io/

**For the loading spinner: ** [Felix Gnass](http://fgnass.github.com)


If you're reading this, you're looking at the first public iteration of this project. My code hasn't quite been optimized yet, but it's on my to-do list. Also, I'm open to any more suggestions for a project name, cause I've been changing the name of this thing pretty often. You will have my utmost thanks and an internet high-five.

Thanks!

-Jefferson Lam
February 17, 2014
