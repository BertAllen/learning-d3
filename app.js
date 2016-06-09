d3.selectAll("section")
    .attr("class", "special")
    .append("div")
    .html("Hello World!");

var section = d3.selectAll("section");
section.append("div").html("Furst ---");
section.append("div").html("Second ----");

// Second time for the D3 tutorial
// d3.selectAll("svg")
//     .style("fill", "red")
//     .attr('cy', 60)
    // .exit().remove();

var svg = d3.selectAll("svg");
// var circle = svg.selectAll("circle")
// .style("fill", "orange")
//     // .attr('cx', function (d, i) { return i * 100 + 30; })
//     // .attr('r', function (d) { return Math.sqrt(d); })
//     // .attr("r", 30);
// var circleEnter = circle.enter().append("circle");
//     // .append('circle')
//     circleEnter.attr("cy", 60)
//     .attr("cx", function (d, i) { return d * 100 + 30; })
//        .attr("r", function (d) { return Math.sqrt(d);})

// circle.attr("cx", function () { return Math.random() * 720; });
var data = [{ x: 32, y: 97 }, { x: 57, y: 120 }, { x: 112, y: 44 }, { x: 293, y: 20 }];

// svg.append("circle")
//     .attr("cx", d.x)
//     .attr("cy", d.y)
//     .attr("r", 25);

var circle = svg.selectAll("circle")
    .data(data);

circle.exit().remove();

circle.enter().append("circle").attr("r", 10);

  circle.style("fill", "red")  
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })

  var xcisn = d3.selectAll("h1");
  xcisn.append("h1")
    .html("Can I stick this text in here?");
  console.log(xcisn);
  xcisn.transition().duration(3000).style("color", "green")

circle.transition().styleTween("color", function () { return d3.interpolate("red", "green") });