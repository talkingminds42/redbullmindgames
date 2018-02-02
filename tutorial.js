var tutorial;

function updateTutorial(){
  if (tutorial == 1){
    arrow.kill();
    text.setText("You are the green circle on the map. You look so fantastic.\nPress enter to continue...");
    tutorial++;
  }
  else if (tutorial == 2){
    text.setText("Your mission : get the red diamond. You will get rich with it.\nPress enter to continue...");
    tutorial = 5;
  }
  else if (tutorial == 3){
    text.setText("Be carreful : don't fall into darkness.\nPress enter to continue...");
    tutorial++;
  }
  else if (tutorial == 4){
    text.setText("Memorize the map now...\nPress enter to continue...");
      tutorial++;
  }
  else if (tutorial == 5){//1
    text.setText("Good luck my hero !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 7){//2
    text.setText("Now there is Jager bombs. You MUST avoid them !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 9){//3
    text.setText("If your way is locked, try to find a key.\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 11){//4
    text.setText("This place definitely looks like a trap !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 13){//5
    text.setText("Hard to remember everything?\n Everytime you find a light, you way become clear again.");
    tutorial++;
  }
  else if (tutorial == 15){//6
    text.setText("Be carrefull of reverse blocks !\n When you walk on it your directions are upside down !");
    tutorial++;
  }
  else if (tutorial == 17){//7
    text.setText("Broken blocks can only be walked on once.\n Use them wisely !");
    tutorial++;
  }
  else if (tutorial == 25){//7
    text.setText("Look! There is two diamonds now. Get them all !");
    tutorial++;
  }
  else if (tutorial == 27){
    text.setText("Maybe it's too dangerous to steal diamonds nowadays.\nUse the arrows keys to move.");
    tutorial++;
  }
   else if (tutorial == 29){
    text.setText("Will you find the keys of my heart ?\nUse the arrows keys to move.");
    tutorial++;
  }
   else if (tutorial == 31){
    text.setText("Good luck !\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 33){
    text.setText("I believe the value of this diamond is over 9000.\nUse the arrows keys to move.");
    tutorial++;
  }
   else if (tutorial == 35){
    text.setText("Sweet ! There's new diamonds ! \nRespect the order of the alarm will stop you");
    tutorial++;
  }
   else if (tutorial == 37){
    text.setText("Don't claim your #victory too fast !\nOnce again, respect the order.");
    tutorial++;
  }
  else if (tutorial == 39){
    text.setText("Look! Diamonds everywhere !");
    tutorial++;
  }
   else if (tutorial == 41){
    text.setText("Welcome to big safe.\nYou will need a lot of keys.");
    tutorial++;
  }
     else if (tutorial == 43){
    text.setText("Not as easy as it looks.");
    tutorial++;
  }
   else if (tutorial == 45){
    text.setText("Fortunately, you have umbrellas.\nUse them to steal this red diamond.");
    tutorial++;
  }
  else if (tutorial == 47){
    text.setText("It's raining Jager bombs\nGet the umbrellas.");
    tutorial++;
  }
   else if (tutorial == 49){
    text.setText("People have gone mad trying to steal this diamond.");
    tutorial++;
  }
     else if (tutorial == 51){
    text.setText("Be carefull.\nThis floor seems weak.");
    tutorial++;
  }
   else if (tutorial == 53){
    text.setText("Congratulations !\nThis is the final mission for now.");
    tutorial++;
  }
  else if (tutorial == 55){
    text.setText("No more levels for now. Come back soon. If your above zero, share your score.");
    tutorial++;
  }
   else if (tutorial == 21){
    text.setText("An umbrella is the only way to protect yourself from a Jager bomb.\n Find the umbrella.");
    tutorial++;
  }
  else if (tutorial == 23){
    text.setText("you seems to really like diamonds.\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial == 19){
    text.setText("oh...looks like you're going to steal another diamond.\nUse the arrows keys to move.");
    tutorial++;
  }
  else if (tutorial >= 27){
    text.setText("We should split. this is clearly too much diamonds for you.\nUse the arrows keys to move.");
    tutorial++;
  }
}
