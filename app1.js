//I think this will be fun!
d3.select("body")
    .style("color", "#0f0")
    .style("background-color", "#999")
    .style("font-size", "20px");

d3.selectAll("section")
    .attr("class", "special")
    .append("div")
    .html("Hello World!");

var section = d3.selectAll("section");
section.append("div").html("Furst ---");
section.append("div").html("Second ----");

var data = [4, 8, 15, 16, 23, 42];

var chart = d3.select(".chart");

chart.style("font", "10px")
    .style("background-color", "steelblue")
    .style("text-align", "right")
    .style("padding", "10px")
    .style("margin", "1px")
    .style("color", "white")
    .style("margin-bottom", "5px");

//     chart.selectAll("div")
//     .data(data)
//         .enter().append("div")
//     .style("width", function (d) { return d * 10 + "px"; })
//     .text(function (d) { return d; })

//     var bar = chart.selectAll("div");
//     var barUpdate = bar.data(data);
//     var barEnter = barUpdate.enter().append("div");
//     barEnter.style("width", function (d) { return d * 10 + "px"; });
//     barEnter.text(function (d) { return d });

// d3.select("body").transition().styleTween("color", function () {
//     return d3.interpolate("green", "red");
// });

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", x.rangeBand());
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}

chart.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Frequency");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

// var width = 420,
//     barHeight = 20;

// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, width]);

// var chart = d3.select(".chart")
//     .attr("width", width)
//     .attr("height", barHeight * data.length);

// var bar = chart.selectAll("g")
//     .data(data)
//   .enter().append("g")
//     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

// bar.append("rect")
//     .attr("width", x)
//     .attr("height", barHeight - 1);

// bar.append("text")
//     .attr("x", function(d) { return x(d) - 3; })
//     .attr("y", barHeight / 2)
//     .attr("dy", ".35em")
//     .text(function(d) { return d; });

// var gradient = d3.append("svg:defs")
//     .append("svg:linearGradient")
//     .attr("id", "gradient")
//     .attr("x1", "0%")
//     .attr("y1", "0%")
//     .attr('x2', "100%")
//     .attr("y2", "100%")
//     .attr("spreadMethod", "pad");

// gradient.append("svg:stop")
//     .attr("offset", "0%")
//     .attr("stop-color", "#0c0")
//     .attr("stop-opacity", 1);

// gradient.append("svg:stop")
//     .attr("offset", "100%")
//     .attr("stop-color", "#c00")
// .attr("stop-opacity", 1)
