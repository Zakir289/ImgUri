var imguri = require('../');

/** Test Code --------------------------------------------------------------- */
if (require.main === module) {
    (function () {
        var options = {
            force: false
        };
        var paths = ['http://www.zakarthi.com/imguri/Img/Lego.jpg','http://www.zakarthi.com/imguri/Img/Myselfie.png','http://www.zakarthi.com/imguri/Img/favicon.ico','http://www.zakarthi.com/imguri/Img/test.png']
        imguri.encode(paths, options, console.log);
    })();
}
