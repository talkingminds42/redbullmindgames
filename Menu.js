function AirOnClick(){
    game.state.start('Airstate');
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


function ClickEvent()
{
    console.log("click event");
    click = 1;
}
