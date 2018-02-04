
function AirOnClick(){
  Airbutton.kill();
  Waterbutton.kill();
  Firebutton.kill();
  creditbutton.kill();
  //  game.state.start('Airstate');
  MenuText =  game.add.image(M_left + 290, M_top + 150, 'MenuText');
  BacktoMenu = game.add.button(game.world.centerX - 130, 700, 'BacktoMenu', backtoMenu, this);
  lvl1 = game.add.button(game.world.centerX - 200, M_top + 250, 'lvl1', levelbutton(1), this);
  lvl2 = game.add.button(game.world.centerX - 100, M_top + 250, 'lvl2', levelbutton(2), this);
  lvl3 = game.add.button(game.world.centerX + 0, M_top + 250, 'lvl3', levelbutton(3), this);
  lvl4 = game.add.button(game.world.centerX + 100, M_top + 250, 'lvl4', levelbutton(4), this);
  lvl5 = game.add.button(game.world.centerX - 200, M_top + 400, 'lvl5', levelbutton(5), this);
  lvl6 = game.add.button(game.world.centerX - 100, M_top + 400, 'lvl6', levelbutton(6), this);
  lvl7 = game.add.button(game.world.centerX + 0, M_top + 400, 'lvl7', levelbutton(7), this);
  lvl8 = game.add.button(game.world.centerX + 100, M_top + 400, 'lvl8', levelbutton(8), this);
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

function backtoMenu(){
  MenuText.kill();
  BacktoMenu.kill();
  lvl1.kill();
  lvl2.kill();
  lvl3.kill();
  lvl4.kill();
  lvl5.kill();
  lvl6.kill();
  lvl7.kill();
  lvl8.kill();
  Airbutton = game.add.button(game.world.centerX - 130, 600, 'Airbutton', AirOnClick, this);
  Waterbutton = game.add.button(game.world.centerX - 130, 650, 'Waterbutton', WaterOnClick, this);
  Firebutton = game.add.button(game.world.centerX - 130, 700, 'Firebutton', FireOnClick, this);
  creditbutton = game.add.button(1050, 20, 'creditsbutton', creditsclick, this);
}

function ClickEvent()
{
    console.log("click event");
    click = 1;
}

function levelbutton(level)
{

}
