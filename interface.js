
// fonction pour faire apparaitre le about (en haut a droit)

function creditsclick(){
  if (creditsbool == 0){
  creditsbool = 1;
  about =  game.add.image(M_left + 75, M_top + 60, 'about');
  }
  else {
    creditsbool = 0;
    about.kill();
  }
}

// fonctions pour l affichage des diamonds en bas a gauche de l ecran

function print_diamond()
{
    var pos_x = 0;
    var pos_y = 740;
    var i = 1;
    var x = 1;
    var y = 1;

    console.log(level);
    while (i <= tab_diamond[level][0])
    {
        if (tab_diamond[level][i] == 3){
            groupdiamonds.create(((i * 30)) + pos_x, ((y * 30) + pos_y), 'd_red').scale.setTo(0.3, 0.3);
        }
        else if (tab_diamond[level][i] == 13){
            test = groupdiamonds.create(((i * 30)) + pos_x, ((y * 30) + pos_y), 'd_blue').scale.setTo(0.3, 0.3);
            console.log("hello sir");
        }
        else if (tab_diamond[level][i] == 14){
            groupdiamonds.create(((i * 30)) + pos_x, ((y * 30) + pos_y), 'd_green').scale.setTo(0.3, 0.3);
        }
        else if (tab_diamond[level][i] == 15){
            groupdiamonds.create(((i * 30)) + pos_x, ((y * 30) + pos_y), 'd_orange').scale.setTo(0.3, 0.3);
        }
        else if (tab_diamond[level][i] == 16){
            groupdiamonds.create(((i * 30)) + pos_x, ((y * 30) + pos_y), 'd_yellow').scale.setTo(0.3, 0.3);
        }
        else if (tab_diamond[level][i] == 17){
            groupdiamonds.create(((i * 30)) + pos_x, ((y * 30) + pos_y), 'd_white').scale.setTo(0.3, 0.3);
        }
        else if (tab_diamond[level][i] == 18){
            groupdiamonds.create(((i * 30)) + pos_x, ((y * 30) + pos_y), 'd_violet').scale.setTo(0.3, 0.3);
        }
        i++;
    }
}

function print_check_diamond()
{
    var pos_x = 0;
    var pos_y = 740;
    var y = 1;

    groupoverdiamond.create((((player_diamond + 1) * 30)) + pos_x, ((y * 30) + pos_y), 'd_check').scale.setTo(0.3, 0.3);
}

function print_wrong_diamond()
{
    var pos_x = 0;
    var pos_y = 740;
    var y = 1;

    groupoverdiamond.create((((player_diamond + 1) * 30)) + pos_x, ((y * 30) + pos_y), 'd_wrong').scale.setTo(0.3, 0.3);
}

function draw_rectangle()
{
    var graphics = game.add.graphics();
    graphics.beginFill(0x000000);
    graphics.drawRect(0, 770, 270, 30);
    window.graphics = graphics;
}
