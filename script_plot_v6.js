var layoutx = { xaxis: {title: "Time (s)"}, yaxis: {title: "mm"}, title: "Melt Width Prediction"};
var layoutx2 = { xaxis: {title: "Time (s)"}, yaxis: {title: "mm<sup>2</sup>"}, title: "Melt Area Prediction"};
var layoutx1 = { xaxis: {title: "Time (s)"}, yaxis: {title: "mm"}, title: "Melt Depth Prediction"};
var layoutx3 = {xaxis: {title: "Time (s)"}, yaxis: {title: "Temperature (K)"}, title: "Point Prediction"};
  
Plotly.newPlot("myPlot",layoutx);
Plotly.newPlot("myPlot1",layoutx1);
// Plotly.newPlot("myPlot2",layoutx2);
Plotly.newPlot("myPlot3",layoutx3);
Plotly.newPlot("myPlot4",layoutx);
Plotly.newPlot("myPlot5",layoutx1);
Plotly.newPlot("myPlot6",layoutx2);
Plotly.newPlot("myPlot7",layoutx3);
Plotly.newPlot("myPlot8",layoutx);
Plotly.newPlot("myPlot9",layoutx1);
Plotly.newPlot("myPlot10",layoutx2);
Plotly.newPlot("myPlot11",layoutx3);