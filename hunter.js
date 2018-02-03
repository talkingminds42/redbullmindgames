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

var click = 0;

function ClickEvent()
{
    console.log("click event");
    click = 1;
}

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
}

var mc;

var swipe = 0;

function create() {
  document.getElementById("body").addEventListener("click", ClickEvent);
  game.input.addPointer();
  game.input.onUp.add(function ()
  {
      swipe = 0;
  }, this);
  game.input.onDown.add(function ()
  {
      swipe = 1;
  }, this);
  game.stage.backgroundColor = "#b6d2f4";
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
  game.input.onTap.add(onTap, this);
  player_diamond = 0;
}

var isTap = 0;
function onTap()
{
    //alert("tap");
    isTap = 1;
}

// copy la map du niveau dans le tableau de map actuel
function copyMap() {
    for (var y = 0; y < Line; y++){
      for (var x = 0; x < Column; x++){
          map[y][x] = maps[level][y][x];
      }
    }
}

function victory(){
    losing = 5;
    var victory = game.add.text(game.world.centerX, game.world.centerY - 500, 'Victory!', { fill : '#2e2', align: "center" } );
    victory.anchor.setTo(0.5,0.5);
    var Tweenvictory = game.add.tween(victory).to({x:game.world.centerX,y:game.world.centerY + 10},1000);
    Tweenvictory.onComplete.addOnce(function(){
      if (level < levelmax) {
        hide = 0;
        resetButton();
        level++;
        tutorial++;
        destroying();
        score += 100;
       scoreText.text = 'Score: ' + score;
        create();
      }
    });
    Tweenvictory.start();
}

function defeat(){
    if (umbrella == 1)
    {
      umbrella = 0;
      losing = 1;
      map[player.y][player.x] = 1;
      umbrellaButton.kill();
      var Tweenbomb = game.add.tween(bombitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweenbomb.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        losing = 0;
      });
      Tweenbomb.start();
    }
    else {
      losing = 5;
      resetButton();
      var gameOver = game.add.text(game.world.centerX, game.world.centerY - 500, 'Game Over!', { fill : '#e22', align: "center" } );
      gameOver.anchor.setTo(0.5,0.5);
      var Tweendefeat = game.add.tween(gameOver).to({x:game.world.centerX,y:game.world.centerY + 10},1000);
      Tweendefeat.onComplete.addOnce(function(){
        hide = 0;
        destroying();
        score -= 20;
        scoreText.text = 'Score: ' + score;
        create();
      });
      Tweendefeat.start();
    }
}


// eclaire toute la map
function showlight() {
    for (var y = 0; y < Line; y++)
      for (var x = 0; x < Column; x++){
        if (map[y][x] == 0){
            grouplight.create(((x * 50) +  M_left), ((y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 1 || map[y][x] == 2){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 3){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_red').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 4){
            bombs = grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'lightning_light');
            bombs.scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 5){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'key').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 6){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'lock').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 7){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'light').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 8){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'reverse').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 9){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'umbrella').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 10){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'fast').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 11){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'slow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 12){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'break').scale.setTo(0.5, 0.5);
        }
		    else if (map[y][x] == 13){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_blue').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 14){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_green').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 15){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_orange').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 16){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_yellow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 17){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_white').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 18){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_violet').scale.setTo(0.5, 0.5);
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

function checkDiamond(yep){
    if (yep == tab_diamond[level][player_diamond + 1]){
        print_check_diamond();
        player_diamond++;
        return(0);
    }
    else {
        print_wrong_diamond();
        defeat();
    }
}


var b_pos_mouse = 0;
var start_mouse_x = 0;
var start_mouse_y = 0;


function update() {

if (swipe == 1)
    LaunchSwipe();
else {
  if (tutorial < 6){
    if ((enterK.isDown || isTap) && onepress == 1){
			updateTutorial();
			onepress=2;
            isTap = 2;
		}
    if (enterK.isUp || isTap == 2) {
			onepress = 1;
            isTap = 0;
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
    else if (tutorial > 6 && (tutorial % 2) == 1)
      updateTutorial();
    else if (enterK.isDown && onepress == 1){
      cheat++;
    }
    else if (cheat > 420){
      cheat = 0;
      victory();
      onpress = 1;
    }
    if (losing == 0){
      dir.x = 0;
      dir.y = 0;

      if (reverse == 0) {
          if (swipe == 0)
              EndSwipe();
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
