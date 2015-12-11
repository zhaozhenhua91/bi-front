<<<<<<< HEAD
module.exports = {
	app: {
        files: {
          'src/css/app.css': [
            'src/css/less/app.less'
          ]
        },
        options: {
          compile: true
        }
    },
    min: {
        files: {
            'dist/css/app.min.css': [
                'src/css/bootstrap.css',
                'src/css/*.css'
            ]
        },
        options: {
            compress: true
        }
    }
=======
module.exports = {
	app: {
        files: {
          'src/css/app.css': [
            'src/css/less/app.less'
          ]
        },
        options: {
          compile: true
        }
    },
    min: {
        files: {
            'dist/css/app.min.css': [
                'src/css/bootstrap.css',
                'src/css/*.css'
            ]
        },
        options: {
            compress: true
        }
    }
>>>>>>> f7670e88ad3798a75d6e9c8b8912206c9b113183
}