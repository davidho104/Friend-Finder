var friendsJS = require("/../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsJS);
    });
    app.post("/api/friends", function(req,res){
        var newUser = req.body;
        for (let i=0;i<newUser.scores.length;i++){
            newUser[i] = parseInt(newUser.scores[i]);
        }
        friendsJS.push(newUser);
        res.json(newUser);
    });
}