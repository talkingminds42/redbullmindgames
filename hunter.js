var gameState = 0;
// Tile size
var T_size = 50;

// Map dimensions
var Line = 12;
var Column = 16;


// init display
var display;
var light = 0;
var speed = 1;

// init player
var player = { x:0, y:0};
var jager;

//init margin
var M_top = 100;
var M_left = 200;

//level used
var level = 0;
var levelmax = 24;

//score
var score = 0;

//initialise create
var createinit = 0;

//text
var text;

var groupblock;
var grouphidden;
var grouplight;
var groupgamer;
var groupdiamonds;
var groupoverdiamond;

var losing;
var score;
var scoreText;



// initialise Phaser
var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var onepress;

var dir = {x:0, y:0};

var hide = 0;

var firstx;
var firsty;
var cheat;

//key initialise
var key = 0;
var keyitem;
var keyButton;

var reverse = 0;
var reverseitem;
var reverseButton;
var arrow;

//umbrella initialise
var umbrella = 0;
var umbrellaitem;
var umbrellaButton;

// bomb initialise
var bombitem;

//lock initialise
var lockitem;

//trap
var trap;
var credits;
var creditsbool;
var about;

var player_diamond;
var diamond;

function preload() {
  game.load.image('tile', 'assets/bloc_empty.png');
  game.load.image('hole', 'assets/bloc_black.png');
  game.load.spritesheet('bomb', 'assets/lightning.png', 100, 100, 4);
  game.load.image('lightning_light', 'assets/lightning_light.png');
  game.load.image('diamond_red', 'assets/bloc_diamond_red.png');
  game.load.spritesheet('jager', 'assets/Hera.png', 100, 100, 11);
  game.load.image('lock', 'assets/bloc_locker.png');
  game.load.image('key', 'assets/bloc_key.png');
  game.load.image('button_key', 'assets/button_key.png');
  game.load.image('button_reverse', 'assets/button_reverse.png');
  game.load.image('hide', 'assets/bloc_hidden.png');
  game.load.image('titre', 'assets/jagerhunter.png');
  game.load.image('background', 'assets/background.png');
  game.load.image('light', 'assets/bloc_light.png');
  game.load.spritesheet('reverse', 'assets/bloc_reverse.png', 100, 100, 4);
  game.load.image('umbrella', 'assets/bloc_umbrella.png');
  game.load.image('fast', 'assets/bloc_fast.png');
  game.load.image('slow', 'assets/bloc_slow.png');
  game.load.image('break', 'assets/bloc_break.png');
  game.load.image('button_umbrella', 'assets/button_umbrella.png');
  game.load.image('light', 'assets/bloc_light.png');
  game.load.image('slow', 'assets/bloc_slow.png');
  game.load.image('fast', 'assets/bloc_fast.png');
  game.load.image('arrow', 'assets/arrowred.png');
  game.load.image('credits', 'assets/button_info.png');
  game.load.image('diamond_blue', 'assets/bloc_diamond_blue.png');
  game.load.image('diamond_green', 'assets/bloc_diamond_green.png');
  game.load.image('diamond_orange', 'assets/bloc_diamond_orange.png');
  game.load.image('diamond_yellow', 'assets/bloc_diamond_yellow.png');
  game.load.image('diamond_white', 'assets/bloc_diamond_white.png');
  game.load.image('diamond_violet', 'assets/bloc_diamond_violet.png');
  game.load.image('d_red', 'assets/diamond_red_new.png');
  game.load.image('d_blue', 'assets/diamond_blue.png');
  game.load.image('d_green', 'assets/diamond_green.png');
  game.load.image('d_orange', 'assets/diamond_orange.png');
  game.load.image('d_yellow', 'assets/diamond_yellow.png');
  game.load.image('d_white', 'assets/diamond_white.png');
  game.load.image('d_violet', 'assets/diamond_violet.png');
  game.load.image('d_check', 'assets/diamond_check.png');
  game.load.image('d_wrong', 'assets/diamond_wrong.png');
  game.load.image('about', 'assets/aboutus.png');
  game.load.image('order', 'assets/order.png');
  game.load.image('playbutton', 'assets/platbutton.jpeg');
}

function create() {
  game.stage.backgroundColor = "#b6d2f4";
  if (gameState == 0)
  {
    button = game.add.button(game.world.centerX - 95, 400, 'playbutton', PlayOnClick(), this, 2, 1, 0);
  }
  else if (gameState == 1)
  {
    trap = 0;
    copyMap();
    groupblock = game.add.group();
    grouphidden=game.add.group();
    grouplight=game.add.group();
    groupgamer=game.add.group();
    groupdiamonds=game.add.group();
    groupoverdiamond=game.add.group();
    losing = 0;
    cheat = 0;
    if (hide == 0)
      drawMap();
    else
      hideMap();
    jager = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'jager');
    jager.scale.setTo(0.5, 0.5);
    var animation = jager.animations.add('animation');
    jager.animations.play('animation', 10, true);
    if (createinit == 0)
    {
      createinit = 1;
      tutorial = 1;
      this.cursors = game.input.keyboard.createCursorKeys();
      onepress = 1;
      creditsbool = 0;
      score = 0;
      scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
      enterK = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      //  title = block0_0 = game.add.image(400, 0, 'titre');
      background = game.add.image(M_left + 100, M_top + 610, 'background');
      arrow = game.add.image(M_left + 300, M_top + 435, 'arrow');
      game.add.image( 10, M_top + 600, 'order').scale.setTo(0.5,0.5);
      credits = game.add.button(M_left + 900,  35, 'credits', creditsclick, this).scale.setTo(0.5,0.5);
      text = game.add.text(M_left + 115, M_top + 625, "Hello Jager Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});
    }
    player_diamond = 0;
  }
}

// copy la map du niveau dans le tableau de map actuel
function copyMap() {
    for (var y = 0; y < Line; y++){
      for (var x = 0; x < Column; x++){
          map[y][x] = maps[level][y][x];
      }
    }
}

function resetButton(){
  if(reverse == 1){
    reverseButton.kill();
    reverse = 0;
  }
  if(umbrella == 1){
    umbrellaButton.kill();
    umbrella = 0;
  }
}


function destroying(){
  groupblock.removeAll();
  grouphidden.removeAll();
  if (light == 1){
    grouplight.removeAll();
  }
  groupdiamonds.removeAll();
  draw_rectangle();
  groupoverdiamond.removeAll();
}


function update() {
  if (gameState == 0) {

  }
  else if (gameState == 1) {
  if (tutorial < 6){
    if (enterK.isDown && onepress == 1){
			updateTutorial();
			onepress=2;
		}
    if (enterK.isUp) {
			onepress = 1;
		}
  }
  else if (tutorial > 6 && (tutorial % 2) == 1)
    updateTutorial();
else if (enterK.isDown && onepress == 1){
	cheat++;
}
else if (cheat > 20){
	cheat = 0;
	victory();
	onpress = 1;
}
  else if (losing == 0){
    dir.x = 0;
    dir.y = 0;

    if (reverse == 0) {
        if (this.cursors.left.isDown && onepress == 1){
            dir.x = -1;
            move(dir);
            onepress = 3;
        }
        if (this.cursors.right.isDown && onepress == 1){
            dir.x = 1;
            move(dir);
            onepress = 4;
        }
        if (this.cursors.up.isDown && onepress == 1){
            dir.y = -1;
            move(dir);
            onepress = 5;
        }
        if (this.cursors.down.isDown && onepress == 1){
            dir.y = 1;
            move(dir);
            onepress = 2;
        }
    }
    else {
        if (this.cursors.right.isDown && onepress == 1){
            dir.x = -1;
            move(dir);
            onepress = 3;
        }
        if (this.cursors.left.isDown && onepress == 1){
            dir.x = 1;
            move(dir);
            onepress = 4;
        }
        if (this.cursors.down.isDown && onepress == 1){
            dir.y = -1;
            move(dir);
            onepress = 5;
        }
        if (this.cursors.up.isDown && onepress == 1){
            dir.y = 1;
            move(dir);
            onepress = 2;
        }
    }
    if (onepress == 2 && this.cursors.down.isUp) {
      onepress = 1;
    }
    if (onepress == 3 && this.cursors.left.isUp) {
      onepress = 1;
    }
    if (onepress == 4 && this.cursors.right.isUp) {
      onepress = 1;
    }
    if (onepress == 5 && this.cursors.up.isUp) {
      onepress = 1;
    }
  }
}
}


function gameUpdate(){
  dir.x = 0;
  dir.y = 0;

  if (this.cursors.left.isDown && onepress == 1){
    dir.x = -1;
    move(dir);
    onepress = 3;
  }
  if (this.cursors.right.isDown && onepress == 1){
    dir.x = 1;
    move(dir);
    onepress = 4;
  }
  if (this.cursors.up.isDown && onepress == 1){
    dir.y = -1;
    move(dir);
    onepress = 5;
  }
  if (this.cursors.down.isDown && onepress == 1){
    dir.y = 1;
    move(dir);
    onepress = 2;
  }
  if (onepress == 2 && this.cursors.down.isUp) {
    onepress = 1;
  }
  if (onepress == 3 && this.cursors.left.isUp) {
    onepress = 1;
  }
  if (onepress == 4 && this.cursors.right.isUp) {
    onepress = 1;
  }
  if (onepress == 5 && this.cursors.up.isUp) {
    onepress = 1;
  }
}
