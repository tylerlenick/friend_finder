const path = require('path');

module.exports = app => {

    app.get("/", function(req, res){
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });

    app.get("/survery", function(req, res){
        res.sendFile(path.join(_dirname, "../public/survery.html"));
    });
};