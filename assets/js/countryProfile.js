/*
TODO:
- Check data labels after drilling. Label rank? New positions?
*/

// Function to load specific country data on map click start
function loadCountryData(countryId) {
    var countryDataURL = 'assets/data/countryProfile.json';
    var countryData=null;
    $.getJSON(countryDataURL, function (data) {
        for (var  key in data) {
            var newKey=parseInt(key, 10);
            if ((newKey--) == countryId) {
                countryData = {
                    "name": data[newKey].name,
                    "capital": data[newKey].capital,
                    "region": data[newKey].region,
                    "flagURL": data[newKey].flagURL,
                    "size": data[newKey].size,
                    "capitalPopulation": data[newKey].capitalPopulation,
                    "totalPopulation": data[newKey].totalPopulation
                };
                console.log(countryData);
                // return countryData;
                $('#myModal').modal('show');
            }
        }
    });
}

// Function to load specific country data on map click end
var dataSourceURL = null;

function updateAfricaMap(n) {
    if (n == 411) {
        $('#myModal').modal('hide');
        //get the data source and update var. This is the data that loads.
        dataSourceURL = 'assets/data/trial.json';
        loadMap(1);

    }
    else if (412) {
        $('#myModal').modal('hide');
        //get the data source and update var. This is the data that loads.
        dataSourceURL = 'assets/data/trial.json';
        loadMap(1);
    }
}

$(document).ready(function () {
    dataSourceURL = 'assets/data/trial.json';
    loadMap(1);
});

function loadMap(n) {
    if (n == 1) {
        var data = $.getJSON(dataSourceURL, function (data) {
            // console.log(data[0].value);

// Create the chart
            Highcharts.mapChart('container', {
                chart: {
                    map: 'custom/africa',
                    backgroundColor: 'transparent'
                },

                title: {
                    text: ''
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                click: function () {
                                    // console.log(loadCountryData(this.value));
                                    // alert(this.value);
                                    loadCountryData(this.value);
                                    // if (this.value == 1) {
                                    //     $('#myModal').modal('show'); //TODO pass modal Id as a parameter
                                    // }else if(this.value == 2){
                                    //     $('#myModal2').modal('show');
                                    // }else if (this.value == 3){
                                    //     $('#myModal3').modal('show');
                                    // }else if (this.value == 4){
                                    //     $('#myModal4').modal('show');
                                    // }
                                    // else {
                                    //     $('#myModal1').modal('show');
                                    // }
                                }
                            }
                        }
                    }
                },

                mapNavigation: {},

                colorAxis: {
                    min: 0,
                    minColor: '#f9db8e',
                    maxColor: '#f9db8e'
                },

                series: [{
                    data: data,
                    mapData: Highcharts.maps['custom/africa'],
                    joinBy: ['iso-a2', 'code'],
                    name: 'Random data',
                    cursor: 'pointer',
                    borderColor: 'black', //changes color of the country borders
                    borderWidth: 0.5,
                    states: {
                        hover: {
                            color: '#B22222'
                        }
                    },
                    dataLabels: {
                        // enabled: true,
                        // format: '{point.name}'
                    }
                }]
            });
        });
    }
}