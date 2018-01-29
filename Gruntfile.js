module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ["*.js", "js/app.js"],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ["css/style.css"]
            }
        },
        uglify: {
            my_target: {
                files: {
                    "js/app.min.js": ["js/app.js"]
                },
                output: {
                    quoteStyle: 2
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: "css/",
                    src: ["*.css", "!*.min.css"],
                    dest: "css/",
                    ext: ".min.css"
                }]
            }
        },
        watch: {
            css: {
                files: ["css/style.css", "css/sass.css"],
                tasks: ["csslint", "cssmin"]
            },
            js: {
                files: ["js/app.js"],
                tasks: ["jshint", "uglify"]
            },
            sass: {
                files: ["sass/style.scss"],
                tasks: ["sass"]
            }
        },
        sass: {
            dist: {
                files: {
                    "css/sass.css": "sass/style.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask("default", ["jshint", "csslint"]);
    grunt.registerTask("min", ["csslint", "cssmin", "jshint", "uglify"]);
    grunt.registerTask("w", ["watch"]);
    grunt.registerTask("compile", ["sass"]);
};