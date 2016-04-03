// config
var config = {
    source: {
        server: './src/server/**/*.ts',
        client: './src/client/**/*.ts',
        html: './src/client/**/*.html'
    },
    dist: {
        server: './dist/server',
        client: './dist/client',
        lib: './dist/client/libs'
    }
    ,
    tsProject: {
        server: './src/server/tsconfig.json',
        client: './src/client/tsconfig.json'
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

//SERVER
gulp.task('clean', function(){
    return del('dist')
});

gulp.task('build:server', function() {
    return gulp.src(config.source.server)
                .pipe(sourcemaps.init())
                .pipe(ts(ts.createProject(config.tsProject.server)))
                .js
                // .pipe(concat('server.js'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(config.dist.server))
                .pipe(reload({stream:true}));
});

//CLIENT

gulp.task('build:html', function(){
       
   //let's copy our index into dest/client
   return gulp.src(config.source.html)
              .pipe(gulp.dest(config.dist.client))
              .pipe(reload({stream:true}));
});

gulp.task('build:lib', function(){
    var mappedPaths = config.jsNPMDependencies.map(function(file){ {return path.resolve('node_modules', file)}})
    
    //Let's copy our head dependencies into a dest/client/libs
    return gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest(config.dist.lib));
});

gulp.task('build:client', function() {
    return gulp.src(config.source.client)
               .pipe(sourcemaps.init())
               .pipe(ts(ts.createProject(config.tsProject.client)))
               .js
               .pipe(sourcemaps.write())
               .pipe(gulp.dest(config.dist.client))
               .pipe(reload({stream:true}));
});
// build all
gulp.task('build', function(callback){
    runSequence('clean', 'build:server', 'build:lib', 'build:html', 'build:client', callback);
});

//serve

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './dist/client/'
        }
    });
});

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////

gulp.task ('watch', function(){
	gulp.watch(config.source.server, ['build:server']);
    gulp.watch(config.source.client, ['build:client']);
  	gulp.watch(config.source.html, ['build:html']);
});

gulp.task('build.watch.serve', function(callback){
    runSequence('build', 'watch', 'serve', callback);
});

gulp.task('default', ['build.watch.serve']);