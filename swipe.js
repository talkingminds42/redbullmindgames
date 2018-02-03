
function LaunchSwipe()
{
    if (b_pos_mouse == 0)
    {
        start_mouse_x = game.input.pointer1.x;
        start_mouse_y = game.input.pointer1.y;
        b_pos_mouse = 1;
    }
}

function EndSwipe()
{
    if (b_pos_mouse == 1)
    {
        var x = start_mouse_x - game.input.pointer1.x;
        var y = start_mouse_y - game.input.pointer1.y;
        console.log("tmp :"+x+","+y);
        if (Math.abs(x) > Math.abs(y))
        {

            if (x > 0)
            {
                dir.x = -1;
                onepress = 3;
            }
            else if (x < 0)
            {
                dir.x = 1;
                onepress = 4;
            }
        }
        else {
            if (y < 0)
            {
                dir.y = 1;
                onepress = 2;
            }
            else if (y > 0)
            {
                dir.y = -1;
                onepress = 5;
            }
        }
        if (x != 0 || y != 0)
            move(dir);
        b_pos_mouse = 0;
    }
}
