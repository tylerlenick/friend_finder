var friendArr = require("../data/friends.js");

module.exports = app => {

    app.get("/api/friends", function(req, res){
        res.json(friendArr);
    });

    app.post("/api/friends", function(req, res){

        let newUser = req.body.scores;
        let scoreTotal = [];
        let bestMatch = 0;

        for (var i = 0; i < friendArr.length; i++) {
            var difference = 0;
            for (var j = 0; j < newUser.length; j++) {
                difference += (Math.abs(parseInt(friendArr[i].scores[j]) - parseInt(newUser[j])));
            }
            scoreTotal.push(difference)
        }

        for (var i = 0; i < scoreTotal.length; i++) {
            if(scoreTotal[i] <= scoreTotal[bestMatch]) {
                bestMatch = i
            }
        }
        let bestFriend = friendArr[bestMatch];
        
        res.json(bestFriend)
        friendArr.push(req.body)
    });
};