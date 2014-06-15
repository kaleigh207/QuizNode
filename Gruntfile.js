module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: true,
          optimization: 0,
          strictUnits: true,
          sourceMap: true
        },
        files: {
          'client/css/<%= pkg.name %>.css': 'client/less/<%= pkg.name %>.less',
        }
      }
    },
    jshint: {
      files: [
        'Gruntfile.js', 'index.js',
        'server/**/*.js', 'client/**/*.js', 'test/**/*.js'
      ],
      options: {
        bitwise: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonbsp: true,
        plusplus: true,
        quotmark: 'single',
        undef: true,
        unused: 'vars',
        strict: true,
        trailing: true,
        maxparams: 4,
        maxdepth: 3,
        maxstatements: 8,
        maxcomplexity: 4,
        maxlen:80,
        devel: true,
        node: true,
        globals: {
          //AngularJS
          angular   : true,
          //Mocha
          describe  : false,
          it        : false,
          before    : false,
          beforeEach: false,
          after     : false,
          afterEach : false
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'less']);
};
