// config
var config = {
    source: {
        server: './src/**/*.ts',
        main: './src/server.ts',
        client: './src/public/**/*.ts',
        html: './src/public/**/*.html',
        views: './src/views/**/*.ejs'
    },
    dist: {
        server: './dist',
        client: './dist/public',
        lib: './dist/public/libs',
        views: './dist/views'
    }
    ,
    tsProject: {
        server: './src/tsconfig.json',
        client: './src/public/tsconfig.json'
    },
    jsNPMDependencies: [
        'angular2/bundles/angular2-polyfills.js',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.dev.js'
    ]
    
}

// required
var path = require('path');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// ////////////////////////////////////////////////
// Log Errors
// // /////////////////////////////////////////////

function errorlog(err){
	console.error(err.message);
	this.emit('end');
}

//SERVER
gulp.task('clean', function(){
    return del('dist')
});

gulp.task('build:server', function() {
    return gulp.src(config.source.server, {"ignore": ['./src/public']})
                .pipe(sourcemaps.init())
                .pipe(ts(ts.createProject(config.tsProject.server)))
                .js
                .on('error', errorlog)
                // .pipe(concat('server.js'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(config.dist.server))
                .pipe(reload({stream:true}));
});

gulp.task('build:main', function(){
    return gulp.src(config.source.main)
                .pipe(sourcemaps.init())
                .pipe(ts(ts.createProject(config.tsProject.server)))
                .js
                .on('error', errorlog)
                // .pipe(concat('server.js'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(config.dist.server))
                .pipe(reload({stream:true}));
});

//CLIENT

gulp.task('build:html', function(){
       
   return gulp.src(config.source.html)
              .pipe(gulp.dest(config.dist.client))
              .pipe(reload({stream:true}));
});

gulp.task('build:views', function(){
       
   return gulp.src(config.source.views)
              .pipe(gulp.dest(config.dist.views))
              .pipe(reload({stream:true}));
});

gulp.task('build:lib', function(){
    var mappedPaths = config.jsNPMDependencies.map(function(file){ {return path.resolve('node_modules', file)}})
    
    //Let's copy our head dependencies into a dest/client/libs
    return gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest(config.dist.lib));
});

gulp.task('build:public', function() {
    return gulp.src(config.source.client)
               .pipe(sourcemaps.init())
               .pipe(ts(ts.createProject(config.tsProject.client)))
               .js
               .on('error', errorlog)
               .pipe(sourcemaps.write())
               .pipe(gulp.dest(config.dist.client))
               .pipe(reload({stream:true}));
});
// build all
gulp.task('build', function(callback){
    runSequence('clean', 'build:main', 'build:server', 'build:lib', 'build:html', 'build:views', 'build:public', callback);
});

//serve

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './dist/public',
            
        }
    });
});

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////

gulp.task ('watch', function(){
	gulp.watch(config.source.server, ['build:server']);
    gulp.watch(config.source.client, ['build:public']);
  	gulp.watch(config.source.html, ['build:html']);
});

gulp.task('build.watch.serve', function(callback){
    runSequence('build', 'watch', 'serve', callback);
});

gulp.task('default', ['build.watch.serve']);