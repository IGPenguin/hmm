$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/quotes.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var lines = [];

  for (var i=1; i<allTextLines.length; i++) {
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {

          var tarr = [];
          for (var j=0; j<headers.length; j++) {
              tarr.push(headers[j]+":"+data[j]);
          }
        lines.push(tarr);
    }
}
    var quoteCount = lines.length;
    var quoteIndex = generateRandomInteger(quoteCount);
    var selectedLine = String(lines[quoteIndex]);

    var selectedTopicWithKey = String(selectedLine.split(",")[0]);
    var selectedTopic = String(selectedTopicWithKey.split(":")[1]);

    var selectedTitleWithKey = String(selectedLine.split(",")[1]);
    var selectedTitle = String(selectedTopicWithKey.split(":")[1]);

    console.log("lines: " + lines.join());
    console.log(".csv line count: " + quoteCount);
    console.log(".csv selected index: " + quoteIndex);
    console.log("selected line: " + selectedLine);
    console.log("selected line type: " + typeof selectedLine);
    console.log("selected topic with key: " + selectedTopicWithKey);
    console.log("selected topic: " + selectedTopic);
    console.log("selected title with key: " + selectedTitleWithKey);
    console.log("selected title: " + selectedTitle);
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
