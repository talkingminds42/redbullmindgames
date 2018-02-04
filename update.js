function update_state_level()
{
    if (swipe == 1)
        LaunchSwipe();
    else {
    if (enterK.isDown && onepress == 1){
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
            if (cursors.left.isDown && onepress == 1){
                dir.x = -1;
                move(dir);
                onepress = 3;
            }
            if (cursors.right.isDown && onepress == 1){
                dir.x = 1;
                move(dir);
                onepress = 4;
            }
            if (cursors.up.isDown && onepress == 1){
                dir.y = -1;
                move(dir);
                onepress = 5;
            }
            if (cursors.down.isDown && onepress == 1){
                dir.y = 1;
                move(dir);
                onepress = 2;
            }
        }
        else {
            if (cursors.right.isDown && onepress == 1){
                dir.x = -1;
                move(dir);
                onepress = 3;
            }
            if (cursors.left.isDown && onepress == 1){
                dir.x = 1;
                move(dir);
                onepress = 4;
            }
            if (cursors.down.isDown && onepress == 1){
                dir.y = -1;
                move(dir);
                onepress = 5;
            }
            if (cursors.up.isDown && onepress == 1){
                dir.y = 1;
                move(dir);
                onepress = 2;
            }
        }
        if (onepress == 2 && cursors.down.isUp) {
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
              if (cursors.left.isDown && onepress == 1){
                  dir.x = -1;
                  move(dir);
                  onepress = 3;
              }
              if (cursors.right.isDown && onepress == 1){
                  dir.x = 1;
                  move(dir);
                  onepress = 4;
              }
              if (cursors.up.isDown && onepress == 1){
                  dir.y = -1;
                  move(dir);
                  onepress = 5;
              }
              if (cursors.down.isDown && onepress == 1){
                  dir.y = 1;
                  move(dir);
                  onepress = 2;
              }
          }
          else {
              if (swipe == 0)
                EndSwipe(reverse);
              if (cursors.right.isDown && onepress == 1){
                  dir.x = -1;
                  move(dir);
                  onepress = 3;
              }
              if (cursors.left.isDown && onepress == 1){
                  dir.x = 1;
                  move(dir);
                  onepress = 4;
              }
              if (cursors.down.isDown && onepress == 1){
                  dir.y = -1;
                  move(dir);
                  onepress = 5;
              }
              if (cursors.up.isDown && onepress == 1){
                  dir.y = 1;
                  move(dir);
                  onepress = 2;
              }
          }
          if (onepress == 2 && cursors.down.isUp) {
            onepress = 1;
          }
          if (onepress == 3 && cursors.left.isUp) {
            onepress = 1;
          }
          if (onepress == 4 && cursors.right.isUp) {
            onepress = 1;
          }
          if (onepress == 5 && cursors.up.isUp) {
            onepress = 1;
          }
        }
    }
    }
 }
