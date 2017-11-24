// Require gulp
var gulp = require('gulp');

/*
		CONFIG SECTION
		
*/

// Define folders
var SRC_DEST = 'src/';
var BUILD_DEST = 'build/';

// Name of sass file
var SCSS_FILE = 'style.scss';

// Define state of tasks -- it's important!
var DO_HTML = true;
var DO_CSS = true;
var DO_JS = true;
var DO_IMG = true;

//Array of definied tasks
var TASK_ARRAY = ['html', 'image', 'scripts', 'styles'];

// Short info about state of task function
function log(name, state){
	console.log("Task " + name + " is " + (state) ? "enabled" : "disabled");
};	
// Require plugins

var concat = require('gulp-concat');
var html = require('gulp-minify-html-2');
var image = require('gulp-imagemin');
var rename = require('gulp-rename');
var styles = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');

/*
	END OF CONFIG SECTION
		
*/
gulp.task('scripts', function(){
	if(DO_JS){
		return gulp.src(SRC_DEST +'js/*.js')
		.pipe(concat('app.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(BUILD_DEST +'js'));
	}
	log('concating, renaming and minifing js', DO_JS);
});
gulp.task('styles', function(){
	if(DO_CSS){
		return styles(SRC_DEST +'scss/'+SCSS_FILE, {style: 'compressed'})
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(BUILD_DEST +'css'));
	}
	log('compiling sass file, renaming and minifing css', DO_CSS);
});
gulp.task('html', function(){
	if(DO_HTML){
		var opts = {
			comments: true,
			spare: true,
		};
		return gulp.src(SRC_DEST +'*.html')
		.pipe(html(opts))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(BUILD_DEST));
	}
	log('compressing and minifing html file', DO_HTML);
});

gulp.task('image', function(){
	if(DO_IMG){
		return gulp.src(SRC_DEST +'images/*')
			.pipe(gulp.dest(BUILD_DEST +'img'));
	}
	log('optimizing images', DO_IMG);
});

gulp.task('default', TASK_ARRAY);