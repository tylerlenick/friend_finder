var friendArr = require("../data/friends.js");

module.exports = app => {

    app.get("api/friends", function(req, res){
        res.json(friendArr);
    });

    app.post("api/friends", function(req, res){
        friendsArr.push(res.body);
    });
};