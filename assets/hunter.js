// Tile size
var T_size = 50;

// Map dimensions
var Line = 12;
var Column = 16;

// init map
var map = [
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,3,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,4,4,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,3,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
[0,0,0,0,0,1,0,4,0,1,0,4,0,0,0,0],
[0,0,0,0,0,1,1,1,4,1,1,1,0,0,0,0],
[0,0,0,0,0,4,0,1,0,4,0,1,0,0,0,0],
[0,0,0,0,0,1,1,1,4,3,1,1,0,0,0,0],
[0,0,0,0,0,1,0,4,0,0,0,1,0,0,0,0],
[0,0,0,0,0,1,1,1,2,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[
[0,0,1,1,4,1,0,0,1,1,1,1,0,0,1,1],
[0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0],
[3,1,1,0,0,1,0,0,4,0,0,1,1,1,1,0],
[0,0,1,1,4,1,0,0,1,1,1,4,0,0,1,1],
[0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0],
[1,1,1,0,0,4,0,0,2,0,0,1,1,4,1,0],
[0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1],
[0,0,4,0,0,1,4,1,1,0,0,1,0,0,1,0],
[1,1,1,0,0,1,0,0,4,0,0,4,1,1,1,0],
[0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1],
[0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0],
[1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0],
],
[
[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,4,1,0,1,1,1,1,0,0],
[0,0,1,1,1,0,1,4,1,0,1,4,4,1,1,1],
[0,0,1,4,1,1,1,0,1,4,1,1,1,0,0,3],
[0,0,1,4,4,4,4,0,1,4,4,1,0,2,1,0],
[0,0,1,1,1,1,1,4,1,1,4,1,1,0,1,0],
[0,0,0,0,0,0,1,4,0,1,4,4,1,0,1,0],
[0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0],
[0,0,0,0,0,4,4,1,0,0,0,0,0,0,1,0],
[0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0],
[0,0,0,1,4,4,0,0,0,1,0,0,1,0,1,0],
[0,0,0,1,1,1,1,1,1,1,4,1,1,1,1,0],
],
[
[0,0,1,1,1,4,1,1,1,4,1,1,1,1,1,0],
[0,0,1,0,1,0,0,1,0,0,1,0,1,0,4,0],
[0,0,1,0,1,1,1,1,1,4,1,4,1,1,1,0],
[0,1,1,4,1,0,0,1,0,0,1,0,0,0,3,0],
[0,1,0,0,4,0,0,1,0,0,1,0,0,0,4,0],
[0,1,1,1,1,4,1,1,1,1,1,4,1,0,2,0],
[0,1,0,0,1,0,0,1,0,1,0,0,1,4,1,0],
[0,4,0,0,1,0,0,4,0,4,0,0,1,0,1,0],
[0,1,1,1,1,1,4,1,1,1,1,1,1,4,1,0],
[0,1,0,0,4,0,0,1,0,1,0,0,1,0,1,0],
[0,1,1,1,1,0,0,1,4,1,0,0,1,0,1,0],
[0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0],
],
[
[0,2,0,0,1,1,1,4,1,1,1,4,1,1,1,1],
[1,1,1,0,1,4,1,1,1,4,1,4,1,4,4,1],
[1,4,1,0,1,1,1,4,1,1,1,1,1,4,4,1],
[1,1,1,0,1,4,0,0,0,0,0,0,0,1,1,1],
[4,1,4,0,1,1,0,1,1,0,1,3,0,1,4,4],
[1,1,1,0,4,1,0,0,0,0,1,4,0,1,1,1],
[1,4,1,0,1,1,4,4,1,1,1,1,0,4,4,1],
[1,1,1,0,4,1,1,1,1,4,4,1,0,1,1,1],
[4,1,4,0,0,0,0,0,0,0,0,0,0,1,4,4],
[1,1,4,1,1,1,4,1,1,1,4,1,4,1,1,1],
[1,4,4,1,4,1,1,1,4,1,1,1,4,4,4,1],
[1,1,1,1,1,1,4,1,1,1,4,1,1,1,1,1],
],
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,4,1,1,0,0,0,0,1,1,1,4,1,1,1,1],
[1,1,1,4,1,0,0,0,1,4,1,1,1,4,4,1],
[1,0,1,1,1,4,0,0,1,1,4,0,0,0,0,1],
[1,0,0,4,1,1,1,0,0,1,1,4,4,0,1,1],
[1,4,1,0,1,4,1,1,1,0,1,1,1,4,1,0],
[1,1,1,4,0,1,1,4,1,4,0,0,2,4,1,0],
[4,4,1,4,4,0,4,1,1,4,1,0,4,1,1,0],
[1,1,1,4,4,0,0,1,1,1,4,1,1,1,0,0],
[1,4,4,1,1,1,0,0,0,1,1,1,4,0,0,0],
[1,1,1,1,4,1,3,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[
[3,4,4,4,4,1,1,1,1,1,1,4,4,4,4,4],
[1,4,1,1,1,1,4,4,4,4,1,4,4,4,4,4],
[1,4,1,4,4,1,4,4,4,4,1,1,1,4,4,4],
[1,4,1,4,4,1,4,4,4,4,4,4,1,1,1,1],
[1,4,1,4,4,1,4,4,4,4,1,4,4,4,4,1],
[1,4,1,4,4,1,4,4,4,4,1,4,4,4,4,1],
[1,4,1,4,4,1,4,1,1,1,1,4,4,4,4,1],
[1,4,1,1,4,1,1,1,4,4,1,4,4,4,4,1],
[1,1,4,1,4,4,4,4,4,4,1,4,4,4,1,1],
[4,1,4,1,1,1,1,1,1,4,1,4,4,4,1,4],
[4,1,1,4,4,4,4,4,1,4,1,1,1,1,1,1],
[4,4,1,1,1,1,1,1,1,4,4,4,4,4,4,2]
]
];


// init display
var display;

// init player
var player = { x:0, y:0};
var jager;

//init margin
var M_top = 100;
var M_left = 200;

//level used
var level = 0;
var levelmax = 6;

//score
var score = 0;

//initialise create
var createinit = 0;

//text
var text;
var tutorial;

var groupblock;
var grouphidden;
var groupgamer;

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

function preload() {

    game.load.image('tile', 'http://tim.liquizz.com/assets/bloc_empty.png');
    game.load.image('hole', 'http://tim.liquizz.com/assets/bloc_black.png');
    game.load.image('bomb', 'http://tim.liquizz.com/assets/bloc_bomb.png');
    game.load.image('diamond_red', 'http://tim.liquizz.com/assets/bloc_diamond_red.png');
    game.load.image('jager', 'http://tim.liquizz.com/assets/jager.png');
    game.load.image('lock', 'http://tim.liquizz.com/assets/bloc_locker.png');
    game.load.image('hide', 'http://tim.liquizz.com/assets/bloc_hidden.png');
    game.load.image('titre', 'http://tim.liquizz.com/assets/jagerhunter.png');
    game.load.image('background', 'http://tim.liquizz.com/assets/background.png');

}

function create() {
  groupblock = game.add.group();
  grouphidden=game.add.group();
  groupgamer=game.add.group();
  losing = 0;
  if (hide == 0)
    drawMap();
  else
    hideMap();
  jager = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'jager');
  jager.scale.setTo(0.5, 0.5);


  if (createinit == 0){
    createinit = 1;
    tutorial = 1;
    this.cursors = game.input.keyboard.createCursorKeys();
    onepress = 1;
    score = 0;
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    enterK = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    title = block0_0 = game.add.image(450, 0, 'titre');
    background = game.add.image(M_left + 100, M_top + 610, 'background');
    text = game.add.text(M_left + 115, M_top + 625, "Hello Jager Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});
  }
}

function drawMap() {
    for (var y = 0; y < Line; y++)
      for (var x = 0; x < Column; x++){
        if (map[level][y][x] == 0){
            groupblock.create(((x * 50) +  M_left), ((y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
        }
        else if (map[level][y][x] == 1 || map[level][y][x] == 2){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        }
        else if (map[level][y][x] == 3){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_red').scale.setTo(0.5, 0.5);
        }
        else if (map[level][y][x] == 4){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'bomb').scale.setTo(0.5, 0.5);
        }
        if (map[level][y][x] == 2){
            player.x = x;
            player.y = y;
            firstx = x;
            firsty = y;
        }
      }
}

function hideMap()
{
  for (var y = 0; y < Line; y++)
    for (var x = 0; x < Column; x++){
      if (map[level][y][x] != 0 && map[level][y][x] !=2){
          grouphidden.create(((x * 50) +  M_left), ((y * 50) + M_top), 'hide').scale.setTo(0.5, 0.5);
      }
    }
}

function move(dir){
  //check si mouvement possible
  if (canGo(dir) == 1)
    return (0);

  //hide map;
  if (hide == 0){
  hide = 1;
  create();
  }


  PlayerMove(dir);
  player.x = player.x + dir.x;
  player.y = player.y + dir.y;
  playerclear();


  if (map[level][player.y][player.x] == 3){
    var victory = game.add.text(game.world.centerX, game.world.centerY - 500, 'Victory!', { fill : '#2e2', align: "center" } );
    victory.anchor.setTo(0.5,0.5);
    var Tweenvictory = game.add.tween(victory).to({x:game.world.centerX,y:game.world.centerY + 10},1000);
    Tweenvictory.onComplete.addOnce(function(){
      if (level < levelmax) {
        hide = 0;
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
  else if (map[level][player.y][player.x] == 4){
    losing = 1;
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

function destroying(){
  groupblock.removeAll();
  grouphidden.removeAll();
}

function PlayerMove(dir){

  jagerleft = ((player.x * 50) + M_left)//jager.world.x;
  jagertop = ((player.y * 50) + M_top)//jager.world.y;
  if (dir.x == -1){
    jagerleft = (jagerleft - 50);
    var demoTween = game.add.tween(jager).to({x:jagerleft,y:jagertop},300);
    demoTween.start();
  }
  if (dir.x == 1){
    jagerleft = jagerleft + 50;
    var demoTween = game.add.tween(jager).to({x:jagerleft,y:jagertop},300);
    demoTween.start();
  }
  if (dir.y == -1){
    jagertop = jagertop - 50;
    var demoTween = game.add.tween(jager).to({x:jagerleft,y:jagertop},300);
    demoTween.start();
  }
  if (dir.y == 1){
    jagertop = jagertop + 50;
    var demoTween = game.add.tween(jager).to({x:jagerleft,y:jagertop},300);
    demoTween.start();
  }

}


//devoiler la case d'arrivee
function playerclear(){
  var yep = map[level][player.y][player.x];
  if (yep == 0){
      grouphidden.create(((player.x * 50) +  M_left), ((player.y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
  }
  else if (yep == 1 || yep == 2){
      grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
  }
  else if (yep == 3){
      grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_red').scale.setTo(0.5, 0.5);
  }
  else if (yep == 4){
      grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'bomb').scale.setTo(0.5, 0.5);
  }
      grouphidden.create(((firstx * 50) + M_left), ((firsty * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
}

// check si mouvement possible
function canGo(dir) {
  if ((player.x + dir.x) < 0 || (player.y + dir.y) < 0 || (player.x + dir.x) >= 16 || (player.y + dir.y) >= 12 || map[level][player.y + dir.y][player.x + dir.x] == 0)
    return(1);
  else
    return(0);
}

function update() {
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
  else if (losing == 0){
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
}

function updateTutorial(){
  if (tutorial == 1){
    text.setText("You are the black circle on the map. You look so fantastic.\nPress enter to continue...");
    tutorial++;
  }
  else if (tutorial == 2){
    text.setText("Your mission : get the red diamond. You will get rich with it.\nPress enter to continue...");
    tutorial++;
  }
  else if (tutorial == 3){
    text.setText("Be carreful : don't fall into darkness.\nPress enter to continue...");
    tutorial++;
  }
  else if (tutorial == 4){
    text.setText("Memorize the map now...\nPress enter to continue...");
      tutorial++;
  }
  else if (tutorial == 5){
    text.setText("Good luck my hero !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 7){
    text.setText("Now there is Jager bombs. You MUST avoid them !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 9){
    text.setText("I'm sure you can do it !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 11){
    text.setText("This place definitely looks like a trap !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 13){
    text.setText("Maybe it's too dangerous to steal diamonds nowadays.\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 14){
    text.setText("I believe the value of this diamond is over 9000.\nUse the arrows keys to move.");
    tutorial++;
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
