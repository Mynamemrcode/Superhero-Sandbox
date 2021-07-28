var canvas = new fabric.Canvas("myCanvas");

playerx =20;
playery =20;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
    
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:playery,
        left:playerx
        });
        canvas.add(player_object);
});
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
    
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:playery,
        left:playerx
        });
        canvas.add(block_image_object);

});
    }
    window.addEventListener("keydown", your_keydown);

    function your_keydown(e)
    {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("Current_Width").innerHTML = block_image_width;
        document.getElementById("Current_Height").innerHTML = block_image_height;	
    }
    if(e.shiftKey && keyPressed == '77')
    {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("Current_Width").innerHTML = block_image_width;
        document.getElementById("Current_Height").innerHTML = block_image_height;
    }
    if(keyPressed == '70')
	{
		newimage("thor_face.png");
		console.log("f");
    }
    if(keyPressed == '66')
	{
		newimage("ironman_body.png");
		console.log("b");
    }
    if(keyPressed == '76')
	{
		newimage("spiderman_legs.png");
		console.log("i");
    }
    if(keyPressed == '82')
	{
		newimage("hulk_right_hand.png");
		console.log("r");
    }
    if(keyPressed == '72')
	{
		newimage("hulk_left_hand.png");
		console.log("h");
    }
    if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
    }
    function up() {
        if(playery>0) {
        playery = playery - block_image_height;
        canvas.remove(player_object);
        player_update();
        }
    }
    function down() {
        if(playery<500) {
        playery = playery + block_image_height;
        canvas.remove(player_object);
        player_update();
        }
    }
    function left() {
        if(playerx>0) {
        playerx = playerx - block_image_width;
        canvas.remove(player_object);
        player_update();
        }
    }
    function right() {
        if(playerx<1000) {
        playerx = playerx + block_image_width;
        canvas.remove(player_object);
        player_update();
        }
    }
    }