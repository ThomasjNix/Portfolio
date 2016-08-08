module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      js: {src: ['js/*.js'], dest: 'dist/scripts.js'},
      css_index: {src: ['css/main_style.css', 'css/index_style.css'], dest: 'dist/index.css'},
      css_about: {src: ['css/main_style.css', 'css/about_style.css'], dest: 'dist/about.css'},
      css_skills: {src: ['css/main_style.css', 'css/skills_style.css'], dest: 'dist/skills.css'},
      css_contact: {src: ['css/main_style.css', 'css/contact_style.css'], dest: 'dist/contact.css'}
    },
    sass: {
      build: {files: [
        {src:'css/sass/main_style.sass', dest: 'css/main_style.css'},
        {src:'css/sass/index_style.sass', dest: 'css/index_style.css'},
        {src:'css/sass/about_style.sass', dest: 'css/about_style.css'},
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
