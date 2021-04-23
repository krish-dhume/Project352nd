var database;
var gameState=0;
var playerCount=0;

var player,form,game;
function setup(){
    createCanvas(400,400)
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
    player=new Player();
}
function draw(){




    
}
