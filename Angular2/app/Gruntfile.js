'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint:{
      ctrlPre:['./controller/*.js'],
      ctrlPost:['prod/controller/myApp.js']
    },
    concat: {
      options: {
          separator: '\n\n'
      },
      myApp:{
        src:['./controller/*.js'],
        dest:'prod/controller/myApp.js'
      }
    },
    uglify:{
      myApp:{
        options:{
          sourceMap:'prod/controller/myApp.min.js.map',
          banner:'/* <%= pkg.name %> created by balaji (c) 2018 */'
        },
        files:{
          'prod/controller/myApp.min.js':'prod/controller/myApp.js'
        }
      }      
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css', 
          src: ['*.css', '!*.min.css'],
          dest: 'prod/css',
          ext: '.min.css'
        }]
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        plugins:[
          'karma-jasmine',
          'karma-coverage',
          'karma-chrome-launcher',
          'karma-coverage-istanbul-reporter'
        ],
      },
      continuous: {
        background: true
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          base: 'coverage/',
          open: true,
          print: 'detail'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('myApp', ['jshint:ctrlPre', 'concat:myApp', 'jshint:ctrlPost', 'uglify:myApp', 'cssmin', 'karma', 'connect:server'])
};

