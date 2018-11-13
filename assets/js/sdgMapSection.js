
$(document).ready(function () {
  loadMap(1);
});

function loadTarget(containerID) {
  loadMap(1,containerID);
}

function loadMap(n,containerID){

  // Prepare demo data
  // Data is joined to map using value of 'hc-key' property by default.
  // See API docs for 'joinBy' for more info on linking data and map.
  var data = [
    ['ug', 0],
    ['ng', 1],
    ['st', 2],
    ['tz', 3],
    ['sl', 4],
    ['gw', 5],
    ['cv', 6],
    ['sc', 7],
    ['tn', 8],
    ['mg', 9],
    ['ke', 10],
    ['cd', 11],
    ['fr', 12],
    ['mr', 13],
    ['dz', 14],
    ['er', 15],
    ['gq', 16],
    ['mu', 17],
    ['sn', 18],
    ['km', 19],
    ['et', 20],
    ['ci', 21],
    ['gh', 22],
    ['zm', 23],
    ['na', 24],
    ['rw', 25],
    ['sx', 26],
    ['so', 27],
    ['cm', 28],
    ['cg', 29],
    ['eh', 30],
    ['bj', 31],
    ['bf', 32],
    ['tg', 33],
    ['ne', 34],
    ['ly', 35],
    ['lr', 36],
    ['mw', 37],
    ['gm', 38],
    ['td', 39],
    ['ga', 40],
    ['dj', 41],
    ['bi', 42],
    ['ao', 43],
    ['gn', 44],
    ['zw', 45],
    ['za', 46],
    ['mz', 47],
    ['sz', 48],
    ['ml', 49],
    ['bw', 50],
    ['sd', 51],
    ['ma', 52],
    ['eg', 53],
    ['ls', 54],
    ['ss', 55],
    ['cf', 56]
  ];

  // Create the chart
  if (n == 1) {
    $("#container"+containerID).css({"width":"100%", "height":"600px"});
    $('#container'+containerID).highcharts('Map', {
      chart: {
        map: 'custom/africa'
      },

      title: {
        text: 'Africa'
      },

      subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/africa.js">Africa</a>'
      },

      mapNavigation: {
        enabled: false,
        enableTouchZoom: false,
        enableDoubleClickZoomTo: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      colorAxis: {
        min: 0,
        maxColor: '#FF0000',
        minColor: '#008000'
      },

      series: [{
        data: data,
        name: 'Africa',
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        },

      }],

      plotOptions: {
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: function (e) {
                //location.href
                url = 'https://en.wikipedia.org/wiki/'+e.point.name;
                //window.open(url,'_blank');
                document.getElementById('country').innerHTML = e.point.name;
                $("#myModal").modal();
              }

            }
          }
        }
      }


    });
  }

  if (n == 2) {
    $("#container"+containerID).css({"width":"100%", "height":"500px"});
    var chart = AmCharts.makeChart("container"+containerID, {
      "creditsPosition":"bottom-right",
      "theme": "light",
      "type": "serial",
      "startDuration": 2,
      "dataProvider": [{
        "country": "Algeria",
        "visits": 25,
        "color": "#FF0F00"
      }, {
        "country": "Angola",
        "visits": 35,
        "color": "#FF6600"
      }, {
        "country": "Benin",
        "visits": 15,
        "color": "#FF9E01"
      }, {
        "country": "Botswana",
        "visits": 56,
        "color": "#FCD202"
      }, {
        "country": "Burkina faso",
        "visits": 78,
        "color": "#F8FF01"
      }, {
        "country": "Burundi",
        "visits": 68,
        "color": "#B0DE09"
      }, {
        "country": "Cameroon",
        "visits": 43,
        "color": "#04D215"
      }, {
        "country": "Cabo Verde",
        "visits": 26,
        "color": "#0D8ECF"
      }, {
        "country": "Central African Republic",
        "visits": 60,
        "color": "#0D52D1"
      }, {
        "country": "Chad",
        "visits": 70,
        "color": "#2A0CD0"
      }, {
        "country": "Comoros",
        "visits": 32,
        "color": "#8A0CCF"
      }, {
        "country": "Congo",
        "visits": 67,
        "color": "#CD0D74"
      }, {
        "country": "Democratic Republic of the Congo",
        "visits": 78,
        "color": "#754DEB"
      }, {
        "country": "Cote d'Ivoire",
        "visits": 55,
        "color": "#DDDDDD"
      }, {
        "country": "Djibouti",
        "visits": 90,
        "color": "#999999"
      }, {
        "country": "Egypt",
        "visits": 50,
        "color": "#333333"
      }, {
        "country": "Equatorial Guinea",
        "visits": 11,
        "color": "#000000"
      }],
      "valueAxes": [{
        "position": "left",
        "title": "Percentage(%)"
      }],
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "visits"
      }],
      "depth3D": 20,
      "angle": 30,
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 90
      },
      "export": {
        "enabled": true
      }

    });

  }

  window.scrollTo(0,document.body.scrollHeight);
}
