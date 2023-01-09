const bookingLink = document.getElementById("booking")



function linkRef (element, link){
    element.href = link
}

bookingLink.addEventListener("click", linkRef(bookingLink, "booking.html"))
//////////////////////////////

var Plot1 =document.getElementById("Plot1")
var Plot2 =document.getElementById("Plot2")

var xArray = [50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150];
var yArray = [6,6.5,7,8,9,10,12,13,13.5,15,14,12,13,11,10,8,11.5,10,9.5,9,8];

//plot1
// Define Data
var data1 = [{
  x:xArray,
  y:yArray,
  mode: "lines",
  type: "scatter"
}];

// Define Layout
var layout1 = {
  xaxis: {range: [40, 160]},
  yaxis: {range: [5, 16]},  
  title: "Miles Statistics"
};

// plot2
var xArray2 = ["1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
var yArray2 = [45, 38, 55, 35, 50, 30, 40];

var data2 = [{
  x: xArray2,
  y: yArray2,
  type: "bar"  }];
var layout2 = {title:"Car Statistics"};

// Display using Plotly
Plotly.newPlot(Plot1, data1, layout1);
Plotly.newPlot(Plot2, data2, layout2);
