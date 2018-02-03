

// eclaire toute la map
function showlight() {
    for (var y = 0; y < Line; y++)
      for (var x = 0; x < Column; x++){
        if (map[y][x] == 0){
            grouplight.create(((x * 50) +  M_left), ((y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 1 || map[y][x] == 2){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 3){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_red').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 4){
            bombs = grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'lightning_light');
            bombs.scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 5){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'key').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 6){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'lock').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 7){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'light').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 8){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'reverse').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 9){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'umbrella').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 10){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'fast').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 11){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'slow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 12){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'break').scale.setTo(0.5, 0.5);
        }
		    else if (map[y][x] == 13){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_blue').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 14){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_green').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 15){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_orange').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 16){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_yellow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 17){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_white').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 18){
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_violet').scale.setTo(0.5, 0.5);
        }
      }
    }
