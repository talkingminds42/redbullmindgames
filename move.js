function move(dir){
  //check sun
  if (sun == 1)
  groupsun.removeAll();
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
  if (player_diamond == tab_diamond[level][0]){
      victory();
  }
  else if (map[player.y][player.x] == 4){
      defeat();
  }
}

function PlayerMove(dir){

  heraleft = ((player.x * 50) + M_left)//hera.world.x;
  heratop = ((player.y * 50) + M_top)//hera.world.y;
  losing++;
  if (dir.x == -1)
    heraleft = (heraleft - 50);

  if (dir.x == 1)
    heraleft = heraleft + 50;

  if (dir.y == -1)
    heratop = heratop - 50;

  if (dir.y == 1)
    heratop = heratop + 50;

  var demoTween = game.add.tween(hera).to({x:heraleft,y:heratop},300);
  demoTween.onComplete.addOnce(function(){
    if (trap == 1 && map[player.y][player.x] != 12)
    {
       trap = 0;
       map[player.y - dir.y][player.x - dir.x] = 0;
       grouphidden.create((((player.x - dir.x) * 50) + M_left), (((player.y - dir.y) * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
   }
    losing--;
  });
  demoTween.start();
}

// check si mouvement possible
function canGo(dir) {
  if ((player.x + dir.x) < 0 || (player.y + dir.y) < 0 || (player.x + dir.x) >= 16 || (player.y + dir.y) >= 12 || map[player.y + dir.y][player.x + dir.x] == 0 || (map[player.y + dir.y][player.x + dir.x] == 6 && key == 0))
    return(1);
  else
    return(0);
}

//devoiler la case d'arrivee du personnage
function playerclear()
{
  var yep = map[player.y][player.x];
  if (yep == 0){
      grouphidden.create(((player.x * 50) +  M_left), ((player.y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
  }
  else if (yep == 1 || yep == 2){
      grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
  }
  else if (yep == 3){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'stone');
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 4){
      stormitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'storm');
      stormitem.scale.setTo(0.5, 0.5);
      var lighting = stormitem.animations.add('animation');
      stormitem.animations.play('animation', 6, true);
  }
  else if (yep == 5){
      keyitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'key');
      keyitem.scale.setTo(0.5, 0.5);
      if (key == 0){
        key = 1;
        losing = 1;
        map[player.y][player.x] = 1;
        keyButton = game.add.image(855 + M_left, 15, 'button_key');
        keyButton.scale.setTo(1, 1);
        var Tweenkey = game.add.tween(keyitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
        Tweenkey.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
        });
        Tweenkey.start();
      }
  }
  else if (yep == 6){
      lockitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'lock');
      lockitem.scale.setTo(0.5, 0.5);
      if (key == 1){
        key = 0;
        losing = 1;
        map[player.y][player.x] = 1;
        keyButton.kill();
        var Tweenlock = game.add.tween(lockitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
        Tweenlock.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
        });
        Tweenlock.start();
      }
  }
  else if (yep == 7){
    suny = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
    sun = 1;
    //losing = 0;
    showsun();
    map[player.y][player.x] = 1;
    //var Tweenkey = game.add.tween(suny).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
    //Tweenkey.onComplete.addOnce(function(){
      //grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      //losing = 0;
    //});
    //showsun();

  }
  else if (yep == 8){
      reverseitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'reverse');
      reverseitem.scale.setTo(0.5, 0.5);
      var tornado = reverseitem.animations.add('tornado');
      reverseitem.animations.play('tornado', 6, true);
      reverse = reverse == 0 ? 1 : 0;
      losing = 1;
      map[player.y][player.x] = 1;

      // add reverse activation
      if (reverse == 0)
          reverseButton.kill();
      else {
        reverseButton = game.add.image(897 + M_left, 15, 'button_reverse');
        reverseButton.scale.setTo(1, 1);
      }
      //---------------------------

      var Tweenkey = game.add.tween(reverseitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweenkey.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
      });
      Tweenkey.start();
  }
  else if (yep == 9){
      umbrellaitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'umbrella');
      umbrellaitem.scale.setTo(0.5, 0.5);
      if (umbrella == 0){
        umbrella = 1;
        losing = 1;
        map[player.y][player.x] = 1;
        umbrellaButton = game.add.image(940 + M_left, 15, 'button_umbrella');
        umbrellaButton.scale.setTo(1, 1);
        var Tweenumbrella = game.add.tween(umbrellaitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
        Tweenumbrella.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
        });
        Tweenumbrella.start();
      }
  }
  else if (yep == 12){
      trap++;
      grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'break').scale.setTo(0.5, 0.5);
  }
  else if (yep == 13){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_blue')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 14){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_green')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 15){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_orange')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 16){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_yellow')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 17){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_white')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 18){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_violet')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }

    grouphidden.create(((firstx * 50) + M_left), ((firsty * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
}
