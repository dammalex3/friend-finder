var path = require("path");

var friendData = require("../data/friends.js");

module.exports = function(app) {
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;

        friendDifferenceArray = [];
    
        for (var i=0; i<friendData.length; i++) {
            var totalDifference = 0;
            for (var j=0; j<friendData[i].scores.length; j++) {
                var difference = Math.abs(friendData[i].scores[j] - req.body.scores[j]);
                totalDifference += difference;
            }
            friendDifferenceArray.push(totalDifference);
        }

        console.log(friendDifferenceArray);
        var winningScore = Math.min.apply(null, friendDifferenceArray);
        var winningFriendIndex = friendDifferenceArray.indexOf(winningScore);
    
        //return the best match friend
        res.json(friendData[winningFriendIndex]);
        
    });
}