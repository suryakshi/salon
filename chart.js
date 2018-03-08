var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [{
    "country": "USA",
    "visits": 2025
  }, {
    "country": "China",
    "visits": 1882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "UK",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 1114
  }, {
    "country": "India",
    "visits": 984
  }, {
    "country": "Spain",
    "visits": 711
  }, {
    "country": "Netherlands",
    "visits": 665
  }, {
    "country": "Russia",
    "visits": 580
  }, {
    "country": "South Korea",
    "visits": 443
  }, {
    "country": "Canada",
    "visits": 441
  }, {
    "country": "Brazil",
    "visits": 395
  }],
  "graphs": [{
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  }],
  "categoryField": "country",
  "chartCursor": {
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "listeners": [{
      "event": "changed",
      "method": function(ev) {
        // Log last cursor position
        ev.chart.lastCursorPosition = ev.index;
      }
    }]
  },
  "listeners": [{
    "event": "init",
    "method": function(ev) {
      // Set a jQuery click event on chart area
      jQuery(ev.chart.chartDiv).on("click", function(e) {
        // Check if last cursor position is present
        if (!isNaN(ev.chart.lastCursorPosition)) {
          console.log("clicked on " + ev.chart.dataProvider[ev.chart.lastCursorPosition].country);
        }
      })
    }
  }]
});