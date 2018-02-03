var gameState = 0;
var gamePreviousState = 0;
// Tile size
var T_size = 50;

// Map dimensions
var Line = 12;
var Column = 16;


// init display
var display;
var sun = 0;
var speed = 1;

// init player
var player = { x:0, y:0};
var hera;

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
var groupsun;
var groupgamer;
var groupdiamonds;
var groupoverdiamond;

var losing;
var score;
var scoreText;


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

// storm initialise
var stormitem;

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



// initialise Phaser
var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var bootstate = {
  preload: function() {
    game.load.image('playbutton', 'assets/playbutton.jpeg');
    game.load.image('Airbutton', 'assets/air_button.png');
    game.load.image('Waterbutton', 'assets/water_button.png');
    game.load.image('Earthbutton', 'assets/earth_button.png');
    game.load.image('Firebutton', 'assets/fire_button.png');
    game.load.image('creditsbutton', 'assets/credit_button.png');
  },
  create: function () {
    game.stage.backgroundColor = "#b6d2f4";
    Airbutton = game.add.button(game.world.centerX - 130, 500, 'Airbutton', AirOnClick, this);
    Waterbutton = game.add.button(game.world.centerX - 130, 550, 'Waterbutton', WaterOnClick, this);
    Earthbutton = game.add.button(game.world.centerX - 130, 600, 'Earthbutton', EarthOnClick, this);
    Firebutton = game.add.button(game.world.centerX - 130, 650, 'Firebutton', FireOnClick, this);
    creditbutton = game.add.button(1050, 20, 'creditsbutton', creditOnClick, this);
      //console.log('bootstate created');
  },

  update: function () {

  //  console.log('bootstate updated');
  }

};


var Airstate = {

  preload: function () {
    game.load.image('tile', 'assets/Air/cloud.png');
    game.load.image('hole', 'assets/Air/bloc_black.png');
      game.load.spritesheet('storm', 'assets/Air/lightning.png', 100, 100, 4);
    game.load.image('lightning_light', 'assets/Air/lightning_light.png');
    game.load.image('stone', 'assets/Air/AirTab.png');
    game.load.spritesheet('hera', 'assets/Hera.png', 100, 100, 11);
    game.load.image('lock', 'assets/Air/bloc_locker.png');
    game.load.image('key', 'assets/Air/bloc_key.png');
    game.load.image('button_key', 'assets/button_key.png');
    game.load.image('button_reverse', 'assets/button_reverse.png');
    game.load.image('hide', 'assets/Air/bloc_hidden.png');
    game.load.image('titre', 'assets/jagerhunter.png');
    game.load.spritesheet('reverse', 'assets/Air/bloc_reverse.png', 100, 100, 4);
    game.load.image('umbrella', 'assets/Air/bloc_umbrella.png');
    game.load.image('sun', 'assets/Air/bloc_light.png');
    game.load.image('credits', 'assets/button_info.png');
    game.load.image('about', 'assets/aboutus.png');
    game.load.image('background', 'assets/background.png');
    game.load.image('d_red', 'assets/Air/AirTab.png');
    game.load.image('arrow', 'assets/arrowred.png');
    game.load.image('order', 'assets/order.png');
  },

  create: function () {
    gameState = 1;
    console.log('CREATE SHEET');
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
    groupsun=game.add.group();
    groupgamer=game.add.group();
    groupdiamonds=game.add.group();
    groupoverdiamond=game.add.group();
    losing = 0;
    cheat = 0;
    if (hide == 0)
      drawMap();
    else
      hideMap();
    hera = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'hera');
    hera.scale.setTo(0.5, 0.5);
    var animation = hera.animations.add('animation');
    hera.animations.play('animation', 10, true);
    if (createinit == 0)
    {
      createinit = 1;
      tutorial = 1;
      this.cursors = game.input.keyboard.createCursorKeys();
      onepress = 1;
      score = 0;
      scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
      enterK = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      //  title = block0_0 = game.add.image(400, 0, 'titre');
      background = game.add.image(M_left + 100, M_top + 610, 'background');
      arrow = game.add.image(M_left + 300, M_top + 435, 'arrow');
      game.add.image( 10, M_top + 600, 'order').scale.setTo(0.5,0.5);
      credits = game.add.button(M_left + 900,  35, 'credits', creditsclick, this).scale.setTo(0.5,0.5);
      text = game.add.text(M_left + 115, M_top + 625, "Hello hera Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});
      console.log('Test');
    }
    game.input.onTap.add(onTap, this);
    player_diamond = 0;
  },

  update: function () {
    console.log("game state:" + gameState+ "\n" + "gamePreviousState" + gamePreviousState);

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
                  EndSwipe(reverse);
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
              if (swipe == 0)
                EndSwipe(reverse);
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
};

var Waterstate = {

  preload: function () {
    game.load.image('tile', 'assets/Water/ice.png');
    game.load.image('hole', 'assets/Water/bloc_black.png');
    game.load.spritesheet('storm', 'assets/Water/lightning.png', 100, 100, 4);
    game.load.image('lightning_light', 'assets/Water/lightning_light.png');
    game.load.image('stone', 'assets/Water/WaterTab.png');
    game.load.spritesheet('hera', 'assets/Hera.png', 100, 100, 11);
    game.load.image('lock', 'assets/Water/bloc_locker.png');
    game.load.image('key', 'assets/Water/bloc_key.png');
    game.load.image('button_key', 'assets/button_key.png');
    game.load.image('button_reverse', 'assets/button_reverse.png');
    game.load.image('hide', 'assets/Water/bloc_hidden.png');
    game.load.image('break', 'assets/Water/bloc_break.png');
    game.load.image('titre', 'assets/jagerhunter.png');
    game.load.spritesheet('reverse', 'assets/Water/bloc_reverse.png', 100, 100, 4);
    game.load.image('umbrella', 'assets/Water/bloc_umbrella.png');
    game.load.image('sun', 'assets/Water/bloc_light.png');
    game.load.image('credits', 'assets/button_info.png');
    game.load.image('about', 'assets/aboutus.png');
    game.load.image('background', 'assets/background.png');
    game.load.image('d_red', 'assets/Water/WaterTab.png');
    game.load.image('arrow', 'assets/arrowred.png');
    game.load.image('order', 'assets/order.png');
  },

  create: function () {
    gameState = 2;
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
    game.stage.backgroundColor = "#4057a2";
    trap = 0;
    copyMap();
    groupblock = game.add.group();
    grouphidden=game.add.group();
    groupsun=game.add.group();
    groupgamer=game.add.group();
    groupdiamonds=game.add.group();
    groupoverdiamond=game.add.group();
    losing = 0;
    cheat = 0;
    if (hide == 0)
      drawMap();
    else
      hideMap();
    hera = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'hera');
    hera.scale.setTo(0.5, 0.5);
    var animation = hera.animations.add('animation');
    hera.animations.play('animation', 10, true);
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
      text = game.add.text(M_left + 115, M_top + 625, "Hello hera Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});

    }
    game.input.onTap.add(onTap, this);
    player_diamond = 0;
  },

  update: function () {

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
                  EndSwipe(reverse);
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
              if (swipe == 0)
                EndSwipe(reverse);
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
};

var Earthstate = {

  preload: function () {
    game.load.image('tile', 'assets/Earth/wood.png');
    game.load.image('hole', 'assets/Earth/bloc_black.png');
      game.load.spritesheet('storm', 'assets/Earth/lightning.png', 100, 100, 4);
    game.load.image('lightning_light', 'assets/Earth/lightning_light.png');
    game.load.image('stone', 'assets/Earth/WaterTab.png');
    game.load.spritesheet('hera', 'assets/Hera.png', 100, 100, 11);
    game.load.image('lock', 'assets/Earth/bloc_locker.png');
    game.load.image('key', 'assets/Earth/bloc_key.png');
    game.load.image('button_key', 'assets/button_key.png');
    game.load.image('button_reverse', 'assets/button_reverse.png');
    game.load.image('hide', 'assets/Earth/bloc_hidden.png');
    game.load.image('titre', 'assets/jagerhunter.png');
    game.load.spritesheet('reverse', 'assets/Earth/bloc_reverse.png', 100, 100, 4);
    game.load.image('umbrella', 'assets/Earth/bloc_umbrella.png');
    game.load.image('sun', 'assets/Earth/bloc_light.png');
    game.load.image('credits', 'assets/button_info.png');
    game.load.image('about', 'assets/aboutus.png');
    game.load.image('background', 'assets/background.png');
    game.load.image('d_red', 'assets/Earth/WaterTab.png');
    game.load.image('arrow', 'assets/arrowred.png');
    game.load.image('order', 'assets/order.png');
  },

  create: function () {
    gameState = 2;
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
    game.stage.backgroundColor = "#8cd07a";
    trap = 0;
    copyMap();
    groupblock = game.add.group();
    grouphidden=game.add.group();
    groupsun=game.add.group();
    groupgamer=game.add.group();
    groupdiamonds=game.add.group();
    groupoverdiamond=game.add.group();
    losing = 0;
    cheat = 0;
    if (hide == 0)
      drawMap();
    else
      hideMap();
    hera = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'hera');
    hera.scale.setTo(0.5, 0.5);
    var animation = hera.animations.add('animation');
    hera.animations.play('animation', 10, true);
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
      text = game.add.text(M_left + 115, M_top + 625, "Hello hera Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});

    }
    game.input.onTap.add(onTap, this);
    player_diamond = 0;
  },

  update: function () {

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
                  EndSwipe(reverse);
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
              if (swipe == 0)
                EndSwipe(reverse);
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
};

var Firestate = {

  preload: function () {
    game.load.image('tile', 'assets/Water/ice.png');
    game.load.image('hole', 'assets/Water/bloc_black.png');
      game.load.spritesheet('storm', 'assets/Water/lightning.png', 100, 100, 4);
    game.load.image('lightning_light', 'assets/Water/lightning_light.png');
    game.load.image('stone', 'assets/Water/AirTab.png');
    game.load.spritesheet('hera', 'assets/Hera.png', 100, 100, 11);
    game.load.image('lock', 'assets/Water/bloc_locker.png');
    game.load.image('key', 'assets/Water/bloc_key.png');
    game.load.image('button_key', 'assets/button_key.png');
    game.load.image('button_reverse', 'assets/button_reverse.png');
    game.load.image('hide', 'assets/Water/bloc_hidden.png');
    game.load.image('titre', 'assets/jagerhunter.png');
    game.load.spritesheet('reverse', 'assets/Water/bloc_reverse.png', 100, 100, 4);
    game.load.image('umbrella', 'assets/Water/bloc_umbrella.png');
    game.load.image('sun', 'assets/Water/bloc_light.png');
    game.load.image('credits', 'assets/button_info.png');
    game.load.image('about', 'assets/aboutus.png');
    game.load.image('background', 'assets/background.png');
    game.load.image('d_red', 'assets/Water/AirTab.png');
    game.load.image('arrow', 'assets/arrowred.png');
    game.load.image('order', 'assets/order.png');
  },

  create: function () {
    gameState = 2;
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
    game.stage.backgroundColor = "#4057a2";
    trap = 0;
    copyMap();
    groupblock = game.add.group();
    grouphidden=game.add.group();
    groupsun=game.add.group();
    groupgamer=game.add.group();
    groupdiamonds=game.add.group();
    groupoverdiamond=game.add.group();
    losing = 0;
    cheat = 0;
    if (hide == 0)
      drawMap();
    else
      hideMap();
    hera = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'hera');
    hera.scale.setTo(0.5, 0.5);
    var animation = hera.animations.add('animation');
    hera.animations.play('animation', 10, true);
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
      text = game.add.text(M_left + 115, M_top + 625, "Hello hera Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});

    }
    game.input.onTap.add(onTap, this);
    player_diamond = 0;
  },

  update: function () {

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
                  EndSwipe(reverse);
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
              if (swipe == 0)
                EndSwipe(reverse);
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
};


game.state.add('bootstate', bootstate);
game.state.add('Airstate', Airstate);
game.state.add('Waterstate', Waterstate);
game.state.add('Earthstate', Earthstate);
game.state.add('Firestate', Firestate);

game.state.start('bootstate');
function AirOnClick(){
    game.state.start('Airstate');
}

function WaterOnClick(){
    game.state.start('Waterstate');
}

function EarthOnClick(){
    game.state.start('Earthstate');
}

function FireOnClick(){
   game.state.start('Firestate');
}

function creditOnClick(){
   // yoooollloooooooo
}


function ClickEvent()
{
    console.log("click event");
    click = 1;
}

function preload() {

}

var mc;

var swipe = 0;

function create() {
  console.log("yolyo");
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
  if (gameState == 1)
    game.stage.backgroundColor = "#b6d2f4";
  else if (gameState == 1)
    game.stage.backgroundColor = "#4057a2";
  trap = 0;
  copyMap();
  groupblock = game.add.group();
  grouphidden=game.add.group();
  groupsun=game.add.group();
  groupgamer=game.add.group();
  groupdiamonds=game.add.group();
  groupoverdiamond=game.add.group();
  losing = 0;
  cheat = 0;
  if (hide == 0)
    drawMap();
  else
    hideMap();
  hera = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'hera');
  hera.scale.setTo(0.5, 0.5);
  var animation = hera.animations.add('animation');
  hera.animations.play('animation', 10, true);
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
    text = game.add.text(M_left + 115, M_top + 625, "Hello hera Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});
    console.log('Test');
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
  if (sun == 1){
    groupsun.removeAll();
  }
  groupdiamonds.removeAll();
  draw_rectangle();
  groupoverdiamond.removeAll();
}







var b_pos_mouse = 0;
var start_mouse_x = 0;
var start_mouse_y = 0;


function update() {
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
