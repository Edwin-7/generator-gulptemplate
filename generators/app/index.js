'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.green('Gulp Template') + ' generator!'
    ));

  },

  writing: function () {
    
    this.fs.copy(
      this.templatePath('config/*'),
      this.destinationPath('')
    );
  
    this.fs.copy(
      this.templatePath('libraries/css/*'),
      this.destinationPath('dist/css/libraries/')
    );
  
    this.fs.copy(
      this.templatePath('libraries/js/*'),
      this.destinationPath('dist/js/libraries/')
    );
 
    this.fs.copy(
      this.templatePath('scss/**/*'),
      this.destinationPath('src/scss/')
    );
  
    this.fs.copy(
      this.templatePath('views/*'),
      this.destinationPath('src/views/')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
