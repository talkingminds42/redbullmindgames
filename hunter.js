// Tile size
var T_size = 50;

// Map dimensions
var Line = 12;
var Column = 16;

// init map
var maps = [
[//1
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,3,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//2
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,4,4,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,3,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//3
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
[0,0,0,0,0,1,0,4,0,1,0,4,0,0,0,0],
[0,0,0,0,0,1,1,1,4,1,1,1,0,0,0,0],
[0,0,0,0,0,4,0,1,0,4,0,1,0,0,0,0],
[0,0,0,0,0,1,1,1,4,3,6,1,0,0,0,0],
[0,0,0,0,0,1,0,4,0,0,0,5,0,0,0,0],
[0,0,0,0,0,1,1,1,2,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//4
[0,0,1,1,4,1,0,0,1,1,1,1,0,0,1,1],
[0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0],
[3,6,1,0,0,1,0,0,4,0,0,1,1,1,1,0],
[0,0,1,1,4,1,0,0,1,1,1,4,0,0,1,1],
[0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0],
[1,1,1,0,0,4,0,0,2,0,0,1,1,4,1,0],
[0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1],
[0,0,4,0,0,1,4,1,1,0,0,1,0,0,1,0],
[1,1,1,0,0,1,0,0,4,0,0,4,1,1,1,0],
[0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1],
[0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0],
[5,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0],
],
[//5
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[3,1,4,1,1,1,4,1,7,1,0,0,0,0,0,0],
[0,1,1,1,4,1,1,1,0,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,4,4,0,0,0,0],
[0,2,1,4,1,1,1,1,0,1,4,1,1,1,4,1],
[0,0,1,1,1,4,4,1,0,1,1,1,4,1,4,0],
[0,0,0,1,4,1,1,1,0,1,1,4,1,1,0,0],
[0,0,0,0,1,1,4,4,0,4,4,1,1,0,0,0],
[0,0,0,0,0,1,1,1,0,4,1,1,0,0,0,0],
[0,0,0,0,0,0,4,1,0,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,7,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
],
[//6
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,4,1,1,1,4,1,7,0,0,0,0,0,0,0],
[0,1,1,8,4,8,1,1,4,1,1,1,4,0,0,0],
[0,1,4,1,1,1,4,1,1,1,4,1,1,0,0,0],
[0,1,1,8,4,0,0,0,0,0,0,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,1,0,0,0,0,7,0],
[0,2,1,1,8,1,1,1,8,1,0,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,8,0,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

],
[//7
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,0,0,1,12,1,12,1,12,1,12,1,0],
[0,0,0,6,0,0,12,0,12,0,4,0,4,0,12,0],
[0,0,2,1,1,12,1,12,4,12,1,12,1,4,1,0],
[0,0,0,12,0,0,12,0,4,0,12,0,12,0,12,0],
[0,0,0,1,0,0,4,12,1,12,1,4,1,4,1,0],
[0,0,0,12,0,0,12,0,12,0,12,0,12,0,12,0],
[0,0,0,1,0,0,4,12,1,12,4,12,1,4,1,0],
[0,0,0,5,12,1,12,0,12,0,12,0,12,0,12,0],
[0,0,0,0,0,0,1,12,1,12,4,7,1,12,1,0],
[0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0],
],
[//8ok
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
[0,1,0,0,1,0,4,0,1,0,0,1,0,0,0,0],
[0,1,0,0,1,0,3,0,1,0,0,7,0,0,0,0],
[0,1,1,1,6,1,1,4,1,1,1,4,0,0,0,0],
[0,0,0,12,0,0,4,0,0,8,0,0,0,0,0,0],
[0,0,0,1,0,0,7,0,0,1,0,0,0,0,0,0],
[0,1,1,1,4,1,1,1,1,1,4,5,0,0,0,0],
[0,1,0,4,0,0,4,0,0,1,0,1,0,0,0,0],
[0,1,1,1,1,1,1,4,1,1,1,1,0,0,0,0],
[0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
],
[//9ok intro umbrella
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,4,1,0,0,0,0,1,1,1,1,1,1,0,0],
[0,0,9,1,0,8,0,0,1,4,4,4,4,1,0,0],
[0,0,4,1,0,1,0,0,1,4,4,4,4,1,0,0],
[0,0,4,1,1,2,8,12,1,4,4,3,4,1,0,0],
[0,0,4,1,0,1,0,0,1,4,4,4,4,1,0,0],
[0,0,4,1,0,8,0,0,1,4,4,4,4,1,0,0],
[0,0,4,1,0,0,0,0,1,1,1,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
],
[//10ok normal
[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,4,1,0,1,1,1,1,0,0],
[0,0,1,1,1,0,1,4,1,0,1,4,4,1,1,1],
[0,0,1,4,1,1,1,0,1,4,1,1,1,0,0,3],
[0,0,1,4,4,4,4,0,1,4,4,1,0,2,1,0],
[0,0,1,1,1,1,1,4,1,1,4,1,1,0,1,0],
[0,0,0,0,0,0,1,4,0,1,4,4,1,0,1,0],
[0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0],
[0,0,0,0,0,4,4,1,0,0,0,0,0,0,1,0],
[0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0],
[0,0,0,1,4,4,0,0,0,1,0,0,1,0,1,0],
[0,0,0,1,1,1,1,1,1,1,4,1,1,1,1,0]
],
[//11 intro 2 diamonds
[0,0,0,0,0,0,4,1,4,0,0,0,0,0,0,0],
[0,0,0,0,0,3,4,1,8,3,0,0,0,0,0,0],
[0,0,0,0,1,6,4,1,4,1,1,0,0,0,0,0],
[0,0,0,1,1,0,4,1,4,0,1,1,0,0,0,0],
[0,0,1,1,4,1,4,5,4,4,4,1,1,0,0,0],
[0,0,1,4,1,1,1,0,1,1,1,4,1,0,0,0],
[0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0],
[0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0],
[0,0,0,0,1,1,1,1,1,4,1,0,0,0,0,0],
[0,0,0,0,0,1,4,4,1,4,0,0,0,0,0,0],
[0,0,0,0,0,0,2,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//12 basic
[0,0,1,1,1,4,1,1,1,4,1,1,1,1,1,0],
[0,0,1,0,1,0,0,1,0,0,1,0,1,0,4,0],
[0,0,1,0,1,1,1,1,1,4,1,4,1,1,1,0],
[0,1,1,4,1,0,0,1,0,0,1,0,0,0,3,0],
[0,1,0,0,4,0,0,1,0,0,1,0,0,0,4,0],
[0,1,1,1,1,4,1,1,1,1,1,4,1,0,2,0],
[0,1,0,0,1,0,0,1,0,1,0,0,1,4,1,0],
[0,4,0,0,1,0,0,4,0,4,0,0,1,0,1,0],
[0,1,1,1,1,1,4,1,1,1,1,1,1,4,1,0],
[0,1,0,0,4,0,0,1,0,1,0,0,1,0,1,0],
[0,1,1,1,1,0,0,1,4,1,0,0,1,0,1,0],
[0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0]
],
[//13 multi locks hearth
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,4,0,0,0,0,0,5,0,0,0,0,0],
[0,0,0,1,1,6,0,0,0,1,1,1,0,0,0,0],
[0,0,1,1,4,1,4,0,1,6,6,4,4,0,0,0],
[0,4,1,4,5,1,1,1,1,4,1,1,1,1,0,0],
[0,0,1,1,4,4,4,4,4,4,1,4,5,0,0,0],
[0,0,0,1,1,4,4,3,4,4,1,4,0,0,0,0],
[0,0,0,0,1,1,1,1,4,1,1,0,0,0,0,0],
[0,0,0,0,0,4,4,4,1,1,0,0,0,0,0,0],
[0,0,0,0,0,0,4,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//14  basic
[0,2,0,0,1,1,1,4,1,1,1,4,1,1,1,1],
[1,1,1,0,1,4,1,1,1,4,1,4,1,4,4,1],
[1,4,1,0,1,1,1,4,1,1,1,1,1,4,4,1],
[1,1,1,0,1,4,0,0,0,0,0,0,0,1,1,1],
[4,1,4,0,1,1,0,1,1,0,1,3,0,1,4,4],
[1,1,1,0,4,1,0,0,0,0,1,4,0,1,1,1],
[1,4,1,0,1,1,4,4,1,1,1,1,0,4,4,1],
[1,1,1,0,4,1,1,1,1,4,4,1,0,1,1,1],
[4,1,4,0,0,0,0,0,0,0,0,0,0,1,4,4],
[1,1,4,1,1,1,4,1,1,1,4,1,4,1,1,1],
[1,4,4,1,4,1,1,1,4,1,1,1,4,4,4,1],
[1,1,1,1,1,1,4,1,1,1,4,1,1,1,1,1]
],
[//new hard mixed 15
[0,0,0,1,4,1,4,1,5,1,4,1,0,0,0,0],
[0,0,1,8,1,4,1,8,1,8,1,8,1,0,0,0],
[0,1,3,1,4,1,4,1,4,1,4,1,4,1,0,0],
[1,8,1,6,1,8,1,7,1,4,1,5,1,8,1,0],
[0,1,4,1,4,1,4,1,4,1,8,1,4,1,0,0],
[0,0,1,8,1,6,1,4,1,4,1,8,1,0,0,0],
[0,0,0,1,4,1,4,1,4,1,7,1,0,0,0,0],
[0,0,0,0,1,8,1,7,1,8,1,0,0,0,0,0],
[0,0,0,0,0,1,4,1,4,1,0,0,0,0,0,0],
[0,0,0,0,0,0,1,8,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0]
],
[//intro respect order  16 
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,17,0,0,0,0,0,2,1,0,0,0,0,0,13,0],
[0,1,1,0,0,0,1,4,1,1,0,0,0,1,1,0],
[0,4,1,4,0,1,4,1,1,4,1,0,1,1,4,0],
[0,1,1,1,7,1,1,4,1,1,1,4,1,4,1,0],
[0,4,4,1,7,4,1,1,4,1,1,8,1,1,1,0],
[0,1,1,1,0,1,4,1,1,1,1,0,1,4,1,0],
[0,1,4,0,0,0,1,1,1,4,0,0,0,4,1,0],
[0,18,0,0,0,0,0,4,1,0,0,0,0,0,14,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//mad hashtag 2 diamonds 17
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,4,0,5,0,4,0,0,0,0,0,0,0],
[0,0,0,4,8,1,8,1,8,14,0,0,0,0,0,0],
[0,0,0,0,1,0,4,0,6,0,0,0,0,0,0,0],
[0,0,0,4,8,1,8,4,8,5,0,0,0,0,0,0],
[0,0,0,0,4,0,1,0,6,0,0,0,0,0,0,0],
[0,0,0,4,8,1,8,4,8,13,0,0,0,0,0,0],
[0,0,0,0,2,0,4,0,4,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//all colors 1 18
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,4,1,14,0,0,17,0,13,0,0,0,3,0,0,0],
[0,0,1,0,0,0,1,4,1,0,7,4,1,0,0,0],
[0,1,1,4,0,0,1,0,1,0,1,0,1,0,0,0],
[0,1,0,1,1,1,1,4,1,9,1,1,1,1,1,0],
[0,1,0,0,4,1,0,0,1,0,1,0,1,0,1,0],
[0,1,1,9,1,1,1,9,1,0,1,0,1,4,1,2],
[0,0,1,0,1,0,8,0,1,4,1,1,1,0,1,0],
[0,0,4,0,1,0,4,0,1,0,0,4,0,0,1,0],
[0,0,1,1,1,1,1,1,1,1,1,1,9,1,1,0],
[0,0,18,0,7,0,0,15,0,0,0,4,0,0,16,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//19 6 diamonds locks
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,5,0,1,4,9,0,8,1,1,0,7,1,5],
[2,1,12,1,6,1,4,1,6,1,4,1,6,1,12,4],
[0,4,1,17,0,5,1,1,0,4,5,8,0,1,1,7],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0],
[0,1,14,7,0,8,1,1,0,4,1,3,0,1,1,5],
[0,5,4,1,6,1,5,1,6,1,1,1,6,1,12,9],
[0,1,1,12,0,9,4,1,0,7,5,4,0,4,8,18],
[0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,5,1,1,0,4,7,12,0,4,1,5,0,1,1,4],
[0,8,4,1,6,1,1,1,6,1,1,1,6,1,12,8],
[0,12,4,15,0,5,4,1,0,4,7,12,0,4,1,13]
],
[//20
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,4,1,1,0,0,0,0,1,1,1,4,1,1,1,1],
[1,1,1,4,1,0,0,0,1,4,1,1,1,4,4,1],
[1,0,1,1,1,4,0,0,1,1,4,0,0,0,0,1],
[1,0,0,4,1,1,1,0,0,1,1,4,4,0,1,1],
[1,4,1,0,1,4,1,1,1,0,1,1,1,4,1,0],
[1,1,1,4,0,1,1,4,1,4,0,0,2,4,1,0],
[4,4,1,4,4,0,4,1,1,4,1,0,4,1,1,0],
[1,1,1,4,4,0,0,1,1,1,4,1,1,1,0,0],
[1,4,4,1,1,1,0,0,0,1,1,1,4,0,0,0],
[1,1,1,1,4,1,3,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[//21 umbrella hell
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,7,1,0,0,1,5,0,0,0,0,0,0],
[0,0,0,0,4,1,0,0,1,4,0,0,0,0,0,0],
[0,1,4,4,4,1,6,1,1,1,6,1,0,0,0,0],
[0,3,4,4,0,0,4,1,0,0,4,1,1,1,0,0],
[0,0,0,0,7,1,0,0,4,1,0,0,4,1,0,0],
[0,0,4,12,1,1,1,1,1,1,1,1,1,1,0,0],
[2,1,1,1,0,0,4,1,0,0,4,1,0,0,0,0],
[1,7,0,0,1,1,1,1,1,4,0,0,0,0,0,0],
[5,9,0,0,1,4,0,0,1,1,1,4,9,0,0,0],
[0,0,0,0,1,9,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
],
[//22 dollar bill
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[2,7,4,4,4,4,4,9,1,4,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,9,4,4,4,4,9,0,4],
[1,0,1,0,0,0,0,9,4,4,4,4,9,0,0,1],
[1,0,1,0,0,0,9,4,4,4,4,9,0,0,0,8],
[1,0,1,0,0,9,4,4,4,4,9,0,0,0,0,5],
[1,0,0,0,9,4,4,4,4,9,0,0,0,0,0,4],
[1,0,0,9,4,4,4,4,9,0,0,0,0,0,0,4],
[7,1,1,1,4,4,4,4,1,12,1,12,1,4,6,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
],
[//mental mad spin23
[1,1,1,5,1,1,8,1,4,1,1,5,1,1,1,9],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[9,0,1,1,9,1,6,1,4,1,1,5,1,4,0,1],
[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1],
[1,0,6,0,1,1,1,4,1,12,1,1,0,1,0,8],
[8,0,1,0,3,0,0,0,0,0,0,1,0,5,0,1],
[1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1],
[1,0,1,1,8,1,1,1,1,4,1,1,0,1,0,4],
[6,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
[1,9,1,1,6,1,1,2,1,1,8,1,1,1,0,8],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[4,1,7,1,12,1,8,1,1,9,1,8,1,1,9,1],
],
[//24 weakfloor
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,12,1,12,1,12,1,12,7,12,1,12,1,12,0],
[0,12,1,12,1,12,8,12,4,12,1,12,8,12,14,0],
[0,1,12,7,12,4,12,1,12,1,12,4,12,1,12,0],
[0,12,1,12,1,12,1,12,4,12,1,12,7,12,1,0],
[0,4,12,8,12,1,12,2,12,8,12,1,12,8,12,0],
[0,12,1,12,1,12,1,12,4,12,1,12,1,12,4,0],
[0,1,12,1,12,4,12,1,12,1,12,4,12,1,12,0],
[0,12,1,12,1,12,7,12,4,12,1,12,1,12,1,0],
[0,13,12,1,12,8,12,1,12,1,12,8,12,7,12,0],
[0,12,1,12,7,12,1,12,4,12,1,12,1,12,18,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
],
[//25 last mission
[3,4,4,4,4,1,1,1,1,1,1,4,4,4,4,4],
[1,4,1,1,1,1,4,4,4,4,1,4,4,4,4,4],
[1,4,1,4,4,1,4,4,4,4,1,1,1,4,4,4],
[1,4,1,4,4,1,4,4,4,4,4,4,1,1,1,1],
[1,4,1,4,4,1,4,4,4,4,1,4,4,4,4,1],
[1,4,1,4,4,1,4,4,4,4,1,4,4,4,4,1],
[1,4,1,4,4,1,4,1,1,1,1,4,4,4,4,1],
[1,4,1,1,4,1,1,1,4,4,1,4,4,4,4,1],
[1,1,4,1,4,4,4,4,4,4,1,4,4,4,1,1],
[4,1,4,1,1,1,1,1,1,4,1,4,4,4,1,4],
[4,1,1,4,4,4,4,4,1,4,1,1,1,1,1,1],
[4,4,1,1,1,1,1,1,1,4,4,4,4,4,4,2]
]
];


var map =[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

// init display
var display;
var light = 0;
var speed = 1;

// init player
var player = { x:0, y:0};
var jager;

//init margin
var M_top = 100;
var M_left = 200;

//level used
var level = 0;
var levelmax = 24;

//score
var score = 0;

//initialise create
var createinit = 0;

//text
var text;
var tutorial;

var groupblock;
var grouphidden;
var grouplight;
var groupgamer;
var groupdiamonds;
var groupoverdiamond;

var losing;
var score;
var scoreText;



// initialise Phaser
var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var onepress;

var dir = {x:0, y:0};

var hide = 0;

var firstx;
var firsty;
var cheat;

//key initialise
var key = 0;
var keyitem;
var keyButton;

var reverse = 0;
var reverseitem;
var reverseButton;
var arrow;

//umbrella initialise
var umbrella = 0;
var umbrellaitem;
var umbrellaButton;

// bomb initialise
var bombitem;

//lock initialise
var lockitem;

//trap
var trap;
var credits;
var creditsbool;
var about;


var tab_diamond = [
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],//2
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],//4
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],//7
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],//10
    [2,3,3,0,0,0,0,0],//2 diamants
    [1,3,0,0,0,0,0,0],//12
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],//15
    [4,17,13,18,14,0,0,0],
    [2,13,14,0,0,0,0,0],//17
    [7,3,13,14,15,16,17,18],
    [6,18,3,15,17,14,13,0],//19
    [1,3,0,0,0,0,0,0],
	[1,3,0,0,0,0,0,0],//21
    [1,3,0,0,0,0,0,0],
    [1,3,0,0,0,0,0,0],//23
    [4,3,13,18,14,0,0,0],
    [1,3,0,0,0,0,0,0],//25
];
var player_diamond;
var diamond;

function preload() {

  game.load.image('tile', 'http://www.liquizz.com/assets/bloc_empty.png');
  game.load.image('hole', 'http://www.liquizz.com/assets/bloc_black.png');
  game.load.image('bomb', 'http://www.liquizz.com/assets/bloc_bomb.png');
  game.load.image('diamond_red', 'http://www.liquizz.com/assets/bloc_diamond_red.png');
  game.load.image('jager', 'http://www.liquizz.com/assets/jager.png');
  game.load.image('lock', 'http://www.liquizz.com/assets/bloc_locker.png');
  game.load.image('key', 'http://www.liquizz.com/assets/bloc_key.png');
  game.load.image('button_key', 'http://www.liquizz.com/assets/button_key.png');
  game.load.image('button_reverse', 'http://www.liquizz.com/assets/button_reverse.png');
  game.load.image('hide', 'http://www.liquizz.com/assets/bloc_hidden.png');
  game.load.image('titre', 'http://www.liquizz.com/assets/jagerhunter.png');
  game.load.image('background', 'http://www.liquizz.com/assets/background.png');
  game.load.image('light', 'http://www.liquizz.com/assets/bloc_light.png');
  game.load.image('reverse', 'http://www.liquizz.com/assets/bloc_reverse.png');
  game.load.image('umbrella', 'http://www.liquizz.com/assets/bloc_umbrella.png');
  game.load.image('fast', 'http://www.liquizz.com/assets/bloc_fast.png');
  game.load.image('slow', 'http://www.liquizz.com/assets/bloc_slow.png');
  game.load.image('break', 'http://www.liquizz.com/assets/bloc_break.png');
  game.load.image('button_umbrella', 'http://www.liquizz.com/assets/button_umbrella.png');
  game.load.image('light', 'http://www.liquizz.com/assets/bloc_light.png');
  game.load.image('slow', 'http://www.liquizz.com/assets/bloc_slow.png');
  game.load.image('fast', 'http://www.liquizz.com/assets/bloc_fast.png');
  game.load.image('arrow', 'http://www.liquizz.com/assets/arrowred.png');
  game.load.image('credits', 'http://www.liquizz.com/assets/button_info.png');
  game.load.image('diamond_blue', 'http://www.liquizz.com/assets/bloc_diamond_blue.png');
  game.load.image('diamond_green', 'http://www.liquizz.com/assets/bloc_diamond_green.png');
  game.load.image('diamond_orange', 'http://www.liquizz.com/assets/bloc_diamond_orange.png');
  game.load.image('diamond_yellow', 'http://www.liquizz.com/assets/bloc_diamond_yellow.png');
  game.load.image('diamond_white', 'http://www.liquizz.com/assets/bloc_diamond_white.png');
  game.load.image('diamond_violet', 'http://www.liquizz.com/assets/bloc_diamond_violet.png');
  game.load.image('d_red', 'http://www.liquizz.com/assets/diamond_red_new.png');
  game.load.image('d_blue', 'http://www.liquizz.com/assets/diamond_blue.png');
  game.load.image('d_green', 'http://www.liquizz.com/assets/diamond_green.png');
  game.load.image('d_orange', 'http://www.liquizz.com/assets/diamond_orange.png');
  game.load.image('d_yellow', 'http://www.liquizz.com/assets/diamond_yellow.png');
  game.load.image('d_white', 'http://www.liquizz.com/assets/diamond_white.png');
  game.load.image('d_violet', 'http://www.liquizz.com/assets/diamond_violet.png');
  game.load.image('d_check', 'http://www.liquizz.com/assets/diamond_check.png');
  game.load.image('d_wrong', 'http://www.liquizz.com/assets/diamond_wrong.png');
  game.load.image('about', 'http://www.liquizz.com/assets/aboutus.png');
  game.load.image('order', 'http://www.liquizz.com/assets/order.png');
}

function create() {
  trap = 0;
  copyMap();
  groupblock = game.add.group();
  grouphidden=game.add.group();
  grouplight=game.add.group();
  groupgamer=game.add.group();
  groupdiamonds=game.add.group();
  groupoverdiamond=game.add.group();
  losing = 0;
  cheat = 0;
  if (hide == 0)
    drawMap();
  else
    hideMap();
  jager = groupgamer.create(((player.x * 50) + M_left), ((player.y * 50) +  M_top), 'jager');
  jager.scale.setTo(0.5, 0.5);


  if (createinit == 0){
    createinit = 1;
    tutorial = 1;
    this.cursors = game.input.keyboard.createCursorKeys();
    onepress = 1;
    creditsbool = 0;
    score = 0;
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
    enterK = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    title = block0_0 = game.add.image(400, 0, 'titre');
    background = game.add.image(M_left + 100, M_top + 610, 'background');
    arrow = game.add.image(M_left + 300, M_top + 435, 'arrow');
    game.add.image( 10, M_top + 600, 'order').scale.setTo(0.5,0.5);
    credits = game.add.button(M_left + 900,  35, 'credits', creditsclick, this).scale.setTo(0.5,0.5);
    text = game.add.text(M_left + 115, M_top + 625, "Hello Jager Hunter ! Welcome to your treasure hunt.\nPress enter to continue...", {font:"18px arial"});
  }
  player_diamond = 0;
}


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


function drawMap() {
    for (var y = 0; y < Line; y++)
      for (var x = 0; x < Column; x++){
        if (map[y][x] == 0){
            groupblock.create(((x * 50) +  M_left), ((y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 1 || map[y][x] == 2){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 3){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_red').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 4){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'bomb').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 5){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'key').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 6){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'lock').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 7){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'light').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 8){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'reverse').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 9){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'umbrella').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 10){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'fast').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 11){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'slow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 12){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'break').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 13){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_blue').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 14){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_green').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 15){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_orange').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 16){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_yellow').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 17){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_white').scale.setTo(0.5, 0.5);
        }
        else if (map[y][x] == 18){
            groupblock.create(((x * 50) + M_left), ((y * 50) + M_top), 'diamond_violet').scale.setTo(0.5, 0.5);
        }
        if (map[y][x] == 2){
            player.x = x;
            player.y = y;
            firstx = x;
            firsty = y;
        }
      }
      print_diamond();
}

function hideMap()
{
  for (var y = 0; y < Line; y++)
    for (var x = 0; x < Column; x++){
      if (map[y][x] != 0 && map[y][x] !=2){
          grouphidden.create(((x * 50) +  M_left), ((y * 50) + M_top), 'hide').scale.setTo(0.5, 0.5);
      }
    }
}

function move(dir){
  //check light
  if (light == 1)
  grouplight.removeAll();
  //check si mouvement possible
  if (canGo(dir) == 1)
    return (0);
  //hide map;
  if (hide == 0){
  hide = 1;
  create();
  }


  PlayerMove(dir);
  player.x = player.x + dir.x;
  player.y = player.y + dir.y;
  playerclear();

  if (player_diamond == tab_diamond[level][0]){
      victory();
  }
  else if (map[player.y][player.x] == 4){
      defeat();
  }

}

function victory(){
    losing = 5;
    var victory = game.add.text(game.world.centerX, game.world.centerY - 500, 'Victory!', { fill : '#2e2', align: "center" } );
    victory.anchor.setTo(0.5,0.5);
    var Tweenvictory = game.add.tween(victory).to({x:game.world.centerX,y:game.world.centerY + 10},1000);
    Tweenvictory.onComplete.addOnce(function(){
      if (level < levelmax) {
        hide = 0;
        resetButton();
        level++;
        tutorial++;
        destroying();
        score += 100;
       scoreText.text = 'Score: ' + score;
        create();
      }
    });
    Tweenvictory.start();
}

function defeat(){
    if (umbrella == 1)
    {
      umbrella = 0;
      losing = 1;
      map[player.y][player.x] = 1;
      umbrellaButton.kill();
      var Tweenbomb = game.add.tween(bombitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweenbomb.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
        losing = 0;
      });
      Tweenbomb.start();
    }
    else {
      losing = 5;
      resetButton();
      var gameOver = game.add.text(game.world.centerX, game.world.centerY - 500, 'Game Over!', { fill : '#e22', align: "center" } );
      gameOver.anchor.setTo(0.5,0.5);
      var Tweendefeat = game.add.tween(gameOver).to({x:game.world.centerX,y:game.world.centerY + 10},1000);
      Tweendefeat.onComplete.addOnce(function(){
        hide = 0;
        destroying();
        score -= 20;
        scoreText.text = 'Score: ' + score;
        create();
      });
      Tweendefeat.start();
    }
}

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
            grouplight.create(((x * 50) + M_left), ((y * 50) + M_top), 'bomb').scale.setTo(0.5, 0.5);
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

function resetButton(){
  if(reverse == 1){
    reverseButton.kill();
    reverse = 0;
  }
  if(umbrella == 1){
    umbrellaButton.kill();
    umbrella = 0;
  }
}


function destroying(){
  groupblock.removeAll();
  grouphidden.removeAll();
  if (light == 1){
    grouplight.removeAll();
  }
  groupdiamonds.removeAll();
  draw_rectangle();
  groupoverdiamond.removeAll();
}

function PlayerMove(dir){

  jagerleft = ((player.x * 50) + M_left)//jager.world.x;
  jagertop = ((player.y * 50) + M_top)//jager.world.y;
  losing++;
  if (dir.x == -1)
    jagerleft = (jagerleft - 50);

  if (dir.x == 1)
    jagerleft = jagerleft + 50;

  if (dir.y == -1)
    jagertop = jagertop - 50;

  if (dir.y == 1)
    jagertop = jagertop + 50;

  var demoTween = game.add.tween(jager).to({x:jagerleft,y:jagertop},300);
  demoTween.onComplete.addOnce(function(){
    if (trap == 1 && map[player.y][player.x] != 12) {
       trap = 0;
       map[player.y - dir.y][player.x - dir.x] = 0;
       grouphidden.create((((player.x - dir.x) * 50) + M_left), (((player.y - dir.y) * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
   }

    losing--;
  });
  demoTween.start();
}


//devoiler la case d'arrivee
function playerclear(){
  var yep = map[player.y][player.x];
  if (yep == 0){
      grouphidden.create(((player.x * 50) +  M_left), ((player.y * 50) + M_top), 'hole').scale.setTo(0.5, 0.5);
  }
  else if (yep == 1 || yep == 2){
      grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
  }
  else if (yep == 3){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_red');
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 4){
      bombitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'bomb');
      bombitem.scale.setTo(0.5, 0.5);
  }
  else if (yep == 5){
      keyitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'key');
      keyitem.scale.setTo(0.5, 0.5);
      if (key == 0){
        key = 1;
        losing = 1;
        map[player.y][player.x] = 1;
        keyButton = game.add.image(15, 50, 'button_key');
        keyButton.scale.setTo(0.3, 0.3);
        var Tweenkey = game.add.tween(keyitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
        Tweenkey.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
        });
        Tweenkey.start();
      }
  }
  else if (yep == 6){
      lockitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'lock');
      lockitem.scale.setTo(0.5, 0.5);
      if (key == 1){
        key = 0;
        losing = 1;
        map[player.y][player.x] = 1;
        keyButton.kill();
        var Tweenlock = game.add.tween(lockitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
        Tweenlock.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
        });
        Tweenlock.start();
      }
  }
  else if (yep == 7){
    lighty = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
    light = 1;
    //losing = 0;
    showlight();
    map[player.y][player.x] = 1;
    //var Tweenkey = game.add.tween(lighty).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
    //Tweenkey.onComplete.addOnce(function(){
      //grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      //losing = 0;
    //});
    //showlight();

  }
  else if (yep == 8){
      reverseitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'reverse');
      reverseitem.scale.setTo(0.5, 0.5);
      reverse = reverse == 0 ? 1 : 0;
      losing = 1;
      map[player.y][player.x] = 1;

      // add reverse activation
      if (reverse == 0)
          reverseButton.kill();
      else {
        reverseButton = game.add.image(50, 50, 'button_reverse');
        reverseButton.scale.setTo(0.3, 0.3);
      }
      //---------------------------

      var Tweenkey = game.add.tween(reverseitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweenkey.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
      });
      Tweenkey.start();
  }
  else if (yep == 9){
      umbrellaitem = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'umbrella');
      umbrellaitem.scale.setTo(0.5, 0.5);
      if (umbrella == 0){
        umbrella = 1;
        losing = 1;
        map[player.y][player.x] = 1;
        umbrellaButton = game.add.image(85, 50, 'button_umbrella');
        umbrellaButton.scale.setTo(0.3, 0.3);
        var Tweenumbrella = game.add.tween(umbrellaitem).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
        Tweenumbrella.onComplete.addOnce(function(){
          grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
          losing = 0;
        });
        Tweenumbrella.start();
      }
  }
  else if (yep == 12){
      trap++;
      grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'break').scale.setTo(0.5, 0.5);
  }
  else if (yep == 13){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_blue')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 14){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_green')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 15){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_orange')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 16){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_yellow')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 17){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_white')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }
  else if (yep == 18){
      diamond = grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'diamond_violet')
      diamond.scale.setTo(0.5, 0.5);
      checkDiamond(yep);
      map[player.y][player.x] = 1;
      var Tweendiamond = game.add.tween(diamond).to({x:((player.x * 50) + M_left),y:((player.y * 50) + M_top)},300);
      Tweendiamond.onComplete.addOnce(function(){
        grouphidden.create(((player.x * 50) + M_left), ((player.y * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
      });
      Tweendiamond.start();
  }

    grouphidden.create(((firstx * 50) + M_left), ((firsty * 50) + M_top), 'tile').scale.setTo(0.5, 0.5);
}


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

function update() {
  if (tutorial < 6){
    if (enterK.isDown && onepress == 1){
			updateTutorial();
			onepress=2;
		}
    if (enterK.isUp) {
			onepress = 1;
		}
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
  else if (losing == 0){
    dir.x = 0;
    dir.y = 0;

    if (reverse == 0) {
        if (this.cursors.left.isDown && onepress == 1){
            dir.x = -1;
            move(dir);
            onepress = 3;
        }
        if (this.cursors.right.isDown && onepress == 1){
            dir.x = 1;
            move(dir);
            onepress = 4;
        }
        if (this.cursors.up.isDown && onepress == 1){
            dir.y = -1;
            move(dir);
            onepress = 5;
        }
        if (this.cursors.down.isDown && onepress == 1){
            dir.y = 1;
            move(dir);
            onepress = 2;
        }
    }
    else {
        if (this.cursors.right.isDown && onepress == 1){
            dir.x = -1;
            move(dir);
            onepress = 3;
        }
        if (this.cursors.left.isDown && onepress == 1){
            dir.x = 1;
            move(dir);
            onepress = 4;
        }
        if (this.cursors.down.isDown && onepress == 1){
            dir.y = -1;
            move(dir);
            onepress = 5;
        }
        if (this.cursors.up.isDown && onepress == 1){
            dir.y = 1;
            move(dir);
            onepress = 2;
        }
    }
    if (onepress == 2 && this.cursors.down.isUp) {
      onepress = 1;
    }
    if (onepress == 3 && this.cursors.left.isUp) {
      onepress = 1;
    }
    if (onepress == 4 && this.cursors.right.isUp) {
      onepress = 1;
    }
    if (onepress == 5 && this.cursors.up.isUp) {
      onepress = 1;
    }
  }
}

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


function copyMap() {
    for (var y = 0; y < Line; y++){
      for (var x = 0; x < Column; x++){
          map[y][x] = maps[level][y][x];
      }
    }
}

function gameUpdate(){
  dir.x = 0;
  dir.y = 0;

  if (this.cursors.left.isDown && onepress == 1){
    dir.x = -1;
    move(dir);
    onepress = 3;
  }
  if (this.cursors.right.isDown && onepress == 1){
    dir.x = 1;
    move(dir);
    onepress = 4;
  }
  if (this.cursors.up.isDown && onepress == 1){
    dir.y = -1;
    move(dir);
    onepress = 5;
  }
  if (this.cursors.down.isDown && onepress == 1){
    dir.y = 1;
    move(dir);
    onepress = 2;
  }
  if (onepress == 2 && this.cursors.down.isUp) {
    onepress = 1;
  }
  if (onepress == 3 && this.cursors.left.isUp) {
    onepress = 1;
  }
  if (onepress == 4 && this.cursors.right.isUp) {
    onepress = 1;
  }
  if (onepress == 5 && this.cursors.up.isUp) {
    onepress = 1;
  }
}



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
