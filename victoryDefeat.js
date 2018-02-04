function victory(){
    losing = 5;
    var victory = game.add.text(game.world.centerX, game.world.centerY - 500, 'Victory!', { fill : '#2e2', align: "center" } );
    victory.anchor.setTo(0.5,0.5);
    var Tweenvictory = game.add.tween(victory).to({x:game.world.centerX,y:game.world.centerY + 10},1000);
    Tweenvictory.onComplete.addOnce(function(){
      if (level < levelmax) {
        hide = 0;
        resetButton();
        var tmp = 100 + parseInt(60 + 10 * level - timer.seconds)
        score += tmp;
        if (tab_score[level] < tmp)
            tab_score[level] = tmp;
        scoreText.text = 'Score: ' + score;
        console.log(tab_score);
        level++;
        if (level == 8)
        {
          if (!(planetState & 0x04))
            planetState += 4;
          game.state.start('bootstate');
        }
        else if(level == 16) {
          if (!(planetState & 0x01))
            planetState += 1;
          game.state.start('bootstate');
        }
        else if(level == 24) {
          if (!(planetState & 0x02))
            planetState += 2;
          game.state.start('bootstate');
        }
        tutorial++;
        destroying();
       timer.destroy();
       timer = -1;
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
      var Tweenstorm = game.add.tween(stormitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweenstorm.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        losing = 0;
      });
      Tweenstorm.start();
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
        if (score < 0)
            score = 0;
        scoreText.text = 'Score: ' + score;
        create();
      });
      Tweendefeat.start();
    }
}
