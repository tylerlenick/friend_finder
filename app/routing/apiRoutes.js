var friendArr = require("../data/friends.js");

module.exports = app => {

    app.get("/api/friends", function(req, res){
        res.json(friendArr);
    });

    app.post("/api/friends", function(req, res){

        var newUser = req.body;
        console.log(newUser);
        //take in user data.scores
        for (var i=0; i < newUser.scores.length; i++){
            var index = parseInt(i);
            var newSum =+ index;
        };

        for(var i=0; i < friendArr.score.length; i++){
            
        }

        //for loop through the friendArr
            //
        friendArr.push(newUser);
    });
};