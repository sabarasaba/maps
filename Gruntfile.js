module.exports = function(grunt) {
  'use strict';

  var PATH_ASSETS_JS = 'js/';
  var PATH_ASSETS_CSS = 'css/';
  var PATH_DEPLOY_ASSETS = 'public/';

  // ==========================================================================
  // Project configuration
  // ==========================================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [PATH_DEPLOY_ASSETS],

    // js linting options
    jshint: {
      all: [
        'Gruntfile.js',
        PATH_ASSETS_JS + '/*.js',
        '!' + PATH_ASSETS_JS + '/spin.js'
      ]
    },

    csslint: {
      lax: {
        rules: {
          'box-sizing': false,
          'adjoining-classes': false,
          'ids': false,
          'font-sizes': false,
          'unique-headings': false,
          'qualified-headings': false,
          'compatible-vendor-prefixes': false,
          'box-model': false,
          'known-properties': false,
          'fallback-colors': false,
          'zero-units': false
        },
        src: [
          PATH_ASSETS_CSS + '/*.css'
        ]
      }
    },

    concat: {
      css: {
        src: [PATH_ASSETS_CSS + '/*.css'],
        dest: PATH_DEPLOY_ASSETS +
          '/css/<%= pkg.name %>.concat.css'
      }
    },

    cssmin: {
      my_target: {
        src: PATH_DEPLOY_ASSETS +
          '/css/<%= pkg.name %>.concat.css',
        dest: PATH_DEPLOY_ASSETS +
          '/css/<%= pkg.name %>.min.css'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'public/js/<%= pkg.name %>.min.js': 'js/*.js'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('default', 'build:dev');

  grunt.registerTask('build:dev', ['clean', 'jshint:all', 'csslint:lax', 'concat', 'cssmin', 'uglify']);
};
