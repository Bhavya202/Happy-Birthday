var song;

function preload(){
    //preload the files
    song = loadSound("Sprites/Song.mp3");
}

function setup(){
    //make the sound repeat
    song.loop();
}

function draw(){
    //create the backgrund
    background(0);

    //makes the sprites visible
    drawSprites();
}