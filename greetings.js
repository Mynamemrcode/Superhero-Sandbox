var canvas = new fabric.Canvas("myCanvas");

playerwax =20;
playeryard =20;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
    
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
}
    )}

function newimage() {
    fabric.Image.fromURL(get_image, function(Img) {
        player_object = Img;
    
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

}
    )}
