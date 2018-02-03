
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

// check si mouvement possible
function canGo(dir) {
  if ((player.x + dir.x) < 0 || (player.y + dir.y) < 0 || (player.x + dir.x) >= 16 || (player.y + dir.y) >= 12 || map[player.y + dir.y][player.x + dir.x] == 0 || (map[player.y + dir.y][player.x + dir.x] == 6 && key == 0))
    return(1);
  else
    return(0);
}
