module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*
				concat: {
					dist: {
						src: [
							'js/app.js', // All JS in the libs folder
							'js/controllers.js' // This specific file
						],
						dest: 'js/production.js'
					}
				},
		*/
		/*
				jshint: {
					work: [
						'js/app.js',
						'js/controller.js'
					]
				},
		*/
		// uglify: {
		// 	build: {
		// 		src: 'js/build/production.js',
		// 		dest: 'js/build/production.js'
		// 	}
		// },

		less: {
			development: {
				options: {
					compress: false,
					yuicompress: false,
					optimization: 2
				},
				files: {
					"styles.css": "less/styles.less"
				}
			}
		},
		watch: {
			styles: {
				files: [
					// Listen For Less Files
					"less/*.less",
					// Mixins
					"less/mixins/*.less",
					// Font-Awesome
					"less/fontawesome/*.less",
					// Custom less file
					"less/styles.less"
				],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify']);

	// Might have to break this into a local file or a BuildGruntfile.js
	grunt.registerTask('default', ['watch']);
};
