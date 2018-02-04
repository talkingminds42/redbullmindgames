var b_1st_create = 0;

function create_state_level()
{
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
      helpbool = 0;
      onepress = 1;
      score = 0;
      enterK = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);


    }
    this.cursors = game.input.keyboard.createCursorKeys();
    game.add.image( 10, 680, 'collect').scale.setTo(1,1);
    game.add.image( 380, 710, 'instruction').scale.setTo(1,1);
          home = game.add.button(M_left + 888,  670, 'button_background', menuButton, this).scale.setTo(1,1);
    game.add.text(M_left + 905, 678, "HOME", {font:"18px arial"});
    retry = game.add.button(M_left + 888,  710, 'button_background', retryButton, this).scale.setTo(1,1);
    game.add.text(M_left + 905, 718, "RETRY", {font:"18px arial"});
    help = game.add.button(M_left + 888,  750, 'button_background', helpButton, this).scale.setTo(1,1);
    game.add.text(M_left + 905, 758, "HELP", {font:"18px arial"});
    game.add.image( 10, 10, 'b_up_left').scale.setTo(1,2);
    score_img = game.add.image( 20, 20, 'score').scale.setTo(0.4,0.4);
    scoreText = game.add.text(70, 25, score, { fontSize: '32px', fill: '#000' });
    //game.add.image( 10, M_top + 600, 'order').scale.setTo(0.5,0.5);
    //credits = game.add.button(M_left + 900,  35, 'credits', creditsclick, this).scale.setTo(0.5,0.5);
    items = game.add.image( M_left + 850,  10, 'items').scale.setTo(1,1);
    game.input.onTap.add(onTap, this);
    player_diamond = 0;
    if (timer == -1)
    {
        timer = game.time.create(false);
        timer.start();
    }
}
