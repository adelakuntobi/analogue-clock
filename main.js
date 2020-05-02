var canvas, clockWidth, cenX, cenY, clock;

function startClock(cw) {
  canvas = document.querySelector('canvas');
  clock = canvas.getContext('2d');
  clockWidth = cw;
  //Assigning the center of the Canvas to a value
  cenX = canvas.height/2;
  cenY = canvas.width/2;
  
  activateClock();
  window.setInterval(activateClock, 1000);
}


window.onload = function(){
  startClock(350);
}

function activateClock() {
  //Assigning cuurent date to a variable
  var date = new Date();
  clock.clearRect(0,0,canvas.width, canvas.height);
  
  //Drawing the Circle
  drawCircle();
  
  //Draw the hands and assign to the current time
  var hr = date.getHours();
  clock.strokeStyle = "black";
  clock.lineWidth = 8
  drawHands(clockWidth/3, hr * 30);
  
  
  var min = date.getMinutes();
  clock.strokeStyle = "#c6c6cc";
  clock.lineWidth = 6
  drawHands(200, min * 6);
  
  
  var sec = date.getSeconds();
  clock.strokeStyle = "red";
  clock.lineWidth = 2
  drawHands(clockWidth/2, sec * 6);
};

  
  
  function drawCircle(){
    //Draw the Inner Smaller Circle
   clock.beginPath();
   clock.arc(cenX,cenY,4,0, 2 * Math.PI ,false);
   clock.strokeStyle = "black"
   clock.fill();
   clock.closePath();

   drawNumbers();
  };
  
  
  function drawNumbers() {

    var i =12;
    clock.strokeStyle = "black";
    clock.lineWidth = 3;
    
    while(i>0){
      clock.save();
      clock.beginPath();
      clock.translate(cenX,cenY);
      var angle = (i * 30) * Math.PI/180;
      clock.rotate(angle);
      clock.translate(0,-clockWidth/2);

      clock.save();
      clock.translate(0, -30);
      clock.rotate(-angle);
      for(i=0;i,12;i+4){
      //Adding Numbers as the loop runs
      clock.font = '40px Monospace';
      clock.fillText(i,-16,14);
      clock.restore();
      
      //Draw a line for each number 
      clock.moveTo(0,0);
      clock.lineTo(0, 15);
      clock.stroke();
      clock.closePath();
      clock.restore();
  
    
  
      i--
    } 
  }
  
  function drawHands(length,angle) {
  //Draw line fuction which was later called at the top to draw the hands
  clock.save();
  clock.beginPath();
  clock.translate(cenX,cenY);
  clock.rotate(-180 * Math.PI / 180);
  clock.rotate(angle * Math.PI / 180);
  clock.moveTo(0,-30);
  clock.lineTo(0,length);
  clock.stroke();
  clock.strokeStyle = "black";
  clock.closePath();
  clock.lineWidth = 7;
  clock.restore();
};