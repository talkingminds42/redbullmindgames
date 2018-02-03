

// eclaire toute la map
function showsun() {
    for (var y = 0; y < Line; y++)
      for (var x = 0; x < Column; x++){
        if (map[y][x] == 0){
            groupsun.create(((x * 50) +  M_left), ((y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 1 || map[y][x] == 2){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 3){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'stone').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 4){
            storms = groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'lightning_light');
            storms.scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 5){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'key').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 6){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'lock').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 7){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'sun').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 8){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'reverse').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 9){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'umbrella').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 10){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'fast').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 11){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'slow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 12){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'break').scale.setTo(0.5, 0.5);
        }
		    else if (map[y][x] == 13){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_blue').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 14){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_green').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 15){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_orange').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 16){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_yellow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 17){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_white').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 18){
            groupsun.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_violet').scale.setTo(0.5, 0.5);
        }
      }
    }
