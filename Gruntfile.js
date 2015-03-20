// Обязательная обёртка
module.exports = function(grunt) {
	  require('load-grunt-tasks')(grunt);
	// Задачи
	grunt.initConfig({
		sass:{
			dev:{
				files:{
					'css/main.css': 'components/sass/styles.scss',
					'css/variables.css': 'components/sass/_variables.scss'
				}
			}
	  },
	  sprite:{
		  dev:{
				src: 'images/icons/*.png',
				dest: 'images/spritesheet.png',
				destCss: 'css/sprites.css'
		  }
	  },
		watch:{
			css:{
				files: [
					'components/sass/styles.scss',
					'components/sass/_variables.scss'
				],
				tasks: ['sass:dev'],
				options: {
					nospawn: true
				}
			},
			sprite:{
				files: [
					'images/icons/*.png'
				],
				tasks: ['sprite'],
				options: {
					nospawn: true
				}
			}
		}
	});
	// Задача по умолчанию
	grunt.registerTask('default', ['sass:dev', 'sprite', 'watch']);
};
