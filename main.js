var canvas, clockWidth, cenX, cenY, clock;


startClock(360);


function startClock(theWidth) {
  canvas = document.querySelector('canvas');
  clock = canvas.getContext('2d');
  clockWidth = theWidth;
  //Assigning the center of the Canvas to a value
  cenX = canvas.height/2;
  cenY = canvas.width/2;
  
  drawTime();
  window.setInterval(drawTime, 1000);
}





function drawTime() {

  clock.clearRect(0,0,canvas.width, canvas.height);
  
  //Drawing the Circle
  drawCircle();
  assignHands();
}

    
function assignHands() {
  //Assigning cuurent date to a variable
  var date = new Date();

  
  //Draw the hands and assign to the current time
  var hr = date.getHours();
  clock.strokeStyle = "black";
  drawHands(clockWidth/3, hr * 30,8);
  
  
  var min = date.getMinutes();
  clock.strokeStyle = "#c6c6cc";
  drawHands(200, min * 6,6);
  
  
  var sec = date.getSeconds();
  clock.strokeStyle = "red";
  drawHands(clockWidth/2, sec * 6,2);
}


  
  
  function drawCircle(){
    //Draw the Inner Smaller Circle
   clock.beginPath();
   clock.arc(cenX,cenY,10,0, 2 * Math.PI ,false);
   clock.strokeStyle = "blue"
   clock.fill();
   clock.closePath();

   getNumber();
  };
  
  
  function getNumber() {
    clock.strokeStyle = "black";
    clock.lineWidth = 3;
    
    for(num=1; num<13; num++){
      clock.save();
      clock.beginPath();
      clock.translate(cenX,cenY);
      var angle = (num * 30) * Math.PI/180;
      clock.rotate(angle);
      clock.translate(0,-clockWidth/2);

      clock.save();
      clock.translate(0, -30);
      clock.rotate(-angle);
      
      //Adding Numbers as the loop runs
      clock.font = '40px Monospace';
      clock.fillText(num,-16,14);
      clock.restore();
      
      //Draw a line for each number 
      clock.moveTo(0,0);
      clock.lineTo(0, 15);
      clock.stroke();
      clock.closePath();
      clock.restore();
  
  
    } 
  }
  
  function drawHands(length,angle,lwidth) {
  //Draw line fuction which was later called at the top to draw the hands
  clock.save();
  clock.beginPath();
  clock.lineWidth = lwidth;
  clock.lineCap = "round"
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
