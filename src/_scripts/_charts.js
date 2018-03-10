var Plotly = require('plotly.js/lib/core');
var Plotlybar = require('plotly.js/lib/bar');

Plotly.register(Plotlybar);

// initialize arrays that hold lists of data
var countyHomicides = annualTotals.map(a => a.homicides_total);
var harvardParkHomicides = annualTotals.map(a => a.homicides_harvard_park);
var years = annualTotals.map(a => a.year);

var createChart = function(x, y, element, title) {
  var settings = [{
    x: x,
    y: y,
    type: 'bar',
    marker: {
      color: 'orange'
    },
    hoverinfo: 'y',
    hoverlabel: {
      bgcolor:'#777'
    },
  }]

  var tickLayout = {
      size: 11,
  };

  var layout = {
    title: title,
    xaxis: {
      title: 'Year',
      fixedrange:true,
      tickfont:tickLayout
    },

    yaxis: {
      fixedrange: true,
      tickfont:tickLayout
    },

    // Add the margin here
    // Don't forget the comma above!
    margin: {
        l: 30,
        r: 15,
        t: 45,
        b: 30
    },
    // Add a height parameter to the bottom of your file
    height: 250
  };

  //Create the chart
  Plotly.newPlot(element, settings, layout, {displayModeBar: false})
}
//define titles of charts
var countyChartTitle = "County Homicides, 2000-2017";
var hpChartTitle = "Harvard Park Homicides, 2000-2017";

// Create the charts
createChart(years, countyHomicides, 'county-homicides', countyChartTitle);
createChart(years, harvardParkHomicides, 'harvard-park-homicides', hpChartTitle);


//check to see if this file is being read
console.log('hello this is my charts file saying hi!')
