var tutorial;

function updateTutorial(){
  if (tutorial == 1){
    arrow.kill();
    text.setText("");
    tutorial++;
  }
  else if (tutorial == 2){
    text.setText(".");
    tutorial = 5;
  }

  else if (tutorial >= 3){
    text.setText("W");
    tutorial++;
  }
}
