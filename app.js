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

// d3.select(".chart")
    chart.selectAll("div")
    .data(data)
        .enter().append("div")
    .style("width", function (d) { return d * 10 + "px"; })
    .text(function (d) { return d; })

    var chart = d3.select(".chart");
    var bar = chart.selectAll("div");
    var barUpdate = bar.data(data);
    var barEnter = barUpdate.enter().append("div");
    barEnter.style("width", function (d) { return d * 10 + "px"; });
    barEnter.text(function (d) { return d });

    
