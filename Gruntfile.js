module.exports = function (grunt) {

    grunt.initConfig({
        less: {
          main: {
            expand: true,
            cwd: 'css/less/',
            src: ['*.less'],
            dest: 'css/',
            ext: '.css'
          }
        },
        tmod: {
            template: {
                src: ['./templates/*.html','./templates/**/*.html'],
                dest: './js/template.js',
                options: {
                    base: './templates',
                    combo: true,
                    syntax: "native"
                } 
            },
            yl_template: {
                src: ['./yl_templates/*.html','./yl_templates/**/*.html'],
                dest: './js/yl_template.js',
                options: {
                    base: './yl_templates',
                    combo: true,
                    syntax: "native"
                } 
            },
            dj_template: {
                src: ['./dj_templates/*.html','./dj_templates/**/*.html'],
                dest: './js/dj_template.js',
                options: {
                    base: './dj_templates',
                    combo: true,
                    syntax: "native"
                } 
            },
            ls_template: {
                src: ['./ls_templates/*.html','./ls_templates/**/*.html'],
                dest: './js/ls_template.js',
                options: {
                    base: './ls_templates',
                    combo: true,
                    syntax: "native"
                } 
            }
        },
        watch: {
            css: {
                files: ['css/*.css'],
                options: {livereload:true}
            },
            less: {
                files: ['css/less/*.less'],
                options: {livereload:true},
                tasks: ['less:main']
            },
            html: {
                files: ['**/*.html','**/*.php'],
                options: {livereload:true}
            },
            js: {
                files: ['js/*.js'],
                options: {livereload:true}
            },
            template: {
                files: '<%=tmod.template.src%>',
                options: {
                    spawn: false,
                    livereload:true
                },
                tasks: ['tmod:template']
            },
            yl_template: {
                files: '<%=tmod.yl_template.src%>',
                options: {
                    spawn: false,
                    livereload:true
                },
                tasks: ['tmod:yl_template']
            },
            dj_template: {
                files: '<%=tmod.dj_template.src%>',
                options: {
                    spawn: false,
                    livereload:true
                },
                tasks: ['tmod:dj_template']
            },
            ls_template: {
                files: '<%=tmod.ls_template.src%>',
                options: {
                    spawn: false,
                    livereload:true
                },
                tasks: ['tmod:ls_template']
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-tmod');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['watch']);
    grunt.registerTask('lessc',['less:main']);

};