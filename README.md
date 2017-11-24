# fast-gulp
A simply configured gulpfile.js with major of important tasks and configure option
## why?
Idk, just wanna to improve my workflow, so i thought it would be helpfull
## what does it?
- compile and minify files
- optimize images
- compile scss
- distribute ready to use, renamed files
- is fully configurable - You can disable or enable any module
## how into?
* Clone repository into Your project
``` git clone https://github.com/truskul/fast-gulp/ ```
* Install modules by npm
``` npm install ```
* Go to config in **gulpfile.js**:
```

/*
		CONFIG SECTION
		
*/

// Define folders
var SRC_DEST = 'src/';
var BUILD_DEST = 'dist/';

// Name of sass file
var SCSS_FILE = 'style.scss';

// Define state of tasks -- it's important!
var DO_HTML = true;
var DO_CSS = true;
var DO_JS = true;
var DO_IMG = true;

//Array of definied tasks
var TASK_ARRAY = ['html', 'image', 'scripts', 'styles'];

/*
	END OF CONFIG SECTION
		
*/
```
**SRC_DEST** -  @string destination of source files
**BUILD_DEST** - @string destination of builded files
**SCSS_FILE** - @string name of .scss file which You'll compile
**DO_...** - @bool switch of disable/enable task from title
**TASK_ARRAY** @array array of tasks included in **default** task

* Run by **gulp** command
* Enjoy! - Your files are in directory setted in config
