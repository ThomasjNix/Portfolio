module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      js: {src: ['js/*.js'], dest: 'dist/scripts.js'},
      css: {src: ['css/*.css'], dest: 'dist/styles.css'}
    },
    sass: {
      build: {files: [
        {src:'css/sass/main_style.sass', dest: 'css/main_style.css'},

      ]}
    },
    uglify: {
      build: {files: [
        {src: 'dist/scripts.js', dest: 'dist/scripts.js'}
      ]}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('rungrunt', ['sass','concat', 'uglify']);
};
