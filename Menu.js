var Air;

function AirOnClick(){
  gameState = 1;
  Airbutton.kill();
  Waterbutton.kill();
  Firebutton.kill();
  creditbutton.kill();
  //  game.state.start('Airstate');
  MenuText =  game.add.image(M_left + 290, M_top + 150, 'MenuText');
  BacktoMenu = game.add.button(game.world.centerX - 130, 700, 'BacktoMenu', backtoMenu, this);
  lvl1 = game.add.button(game.world.centerX - 200, M_top + 250, 'lvl1', level1button, this);
  lvl2 = game.add.button(game.world.centerX - 100, M_top + 250, 'lvl2', level2button, this);
  lvl3 = game.add.button(game.world.centerX + 0, M_top + 250, 'lvl3', level3button, this);
  lvl4 = game.add.button(game.world.centerX + 100, M_top + 250, 'lvl4', level4button, this);
  lvl5 = game.add.button(game.world.centerX - 200, M_top + 400, 'lvl5', level5button, this);
  lvl6 = game.add.button(game.world.centerX - 100, M_top + 400, 'lvl6', level6button, this);
  lvl7 = game.add.button(game.world.centerX + 0, M_top + 400, 'lvl7', level7button, this);
  lvl8 = game.add.button(game.world.centerX + 100, M_top + 400, 'lvl8', level8button, this);
}

function WaterOnClick(){
    // game.state.start('Waterstate');
    gameState = 2;
    Airbutton.kill();
    Waterbutton.kill();
    Firebutton.kill();
    creditbutton.kill();
    MenuText =  game.add.image(M_left + 290, M_top + 150, 'MenuText');
    BacktoMenu = game.add.button(game.world.centerX - 130, 700, 'BacktoMenu', backtoMenu, this);
    lvl1 = game.add.button(game.world.centerX - 200, M_top + 250, 'lvl1', level1button, this);
    lvl2 = game.add.button(game.world.centerX - 100, M_top + 250, 'lvl2', level2button, this);
    lvl3 = game.add.button(game.world.centerX + 0, M_top + 250, 'lvl3', level3button, this);
    lvl4 = game.add.button(game.world.centerX + 100, M_top + 250, 'lvl4', level4button, this);
    lvl5 = game.add.button(game.world.centerX - 200, M_top + 400, 'lvl5', level5button, this);
    lvl6 = game.add.button(game.world.centerX - 100, M_top + 400, 'lvl6', level6button, this);
    lvl7 = game.add.button(game.world.centerX + 0, M_top + 400, 'lvl7', level7button, this);
    lvl8 = game.add.button(game.world.centerX + 100, M_top + 400, 'lvl8', level8button, this);
}

function EarthOnClick(){
    game.state.start('Earthstate');
}

function FireOnClick(){
   // game.state.start('Firestate');
   gameState = 3;
   Airbutton.kill();
   Waterbutton.kill();
   Firebutton.kill();
   creditbutton.kill();
   MenuText =  game.add.image(M_left + 290, M_top + 150, 'MenuText');
   BacktoMenu = game.add.button(game.world.centerX - 130, 700, 'BacktoMenu', backtoMenu, this);
   lvl1 = game.add.button(game.world.centerX - 200, M_top + 250, 'lvl1', level1button, this);
   lvl2 = game.add.button(game.world.centerX - 100, M_top + 250, 'lvl2', level2button, this);
   lvl3 = game.add.button(game.world.centerX + 0, M_top + 250, 'lvl3', level3button, this);
   lvl4 = game.add.button(game.world.centerX + 100, M_top + 250, 'lvl4', level4button, this);
   lvl5 = game.add.button(game.world.centerX - 200, M_top + 400, 'lvl5', level5button, this);
   lvl6 = game.add.button(game.world.centerX - 100, M_top + 400, 'lvl6', level6button, this);
   lvl7 = game.add.button(game.world.centerX + 0, M_top + 400, 'lvl7', level7button, this);
   lvl8 = game.add.button(game.world.centerX + 100, M_top + 400, 'lvl8', level8button, this);
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

function level1button()
{
  if (gameState == 1) {
    level = 0;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 8;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 16;
    game.state.start('Firestate');
  }
}

function level2button()
{
  if (gameState == 1) {
    level = 1;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 9;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 17;
    game.state.start('Firestate');
  }
}

function level3button()
{
  if (gameState == 1) {
    level = 2;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 10;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 18;
    game.state.start('Firestate');
  }
}

function level4button()
{
  if (gameState == 1) {
    level = 3;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 11;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 19;
    game.state.start('Firestate');
  }
}

function level5button()
{
  if (gameState == 1) {
    level = 4;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 12;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 20;
    game.state.start('Firestate');
  }
}

function level6button()
{
  if (gameState == 1) {
    level = 5;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 13;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 21;
    game.state.start('Firestate');
  }
}

function level7button()
{
  if (gameState == 1) {
    level = 6;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 14;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 22;
    game.state.start('Firestate');
  }
}

function level8button()
{
  if (gameState == 1) {
    level = 7;
    game.state.start('Airstate');
  }
  else if (gameState == 2) {
    level = 15;
    game.state.start('Waterstate');
  }
  else if( gameState == 3){
    level = 23;
    game.state.start('Firestate');
  }
}
