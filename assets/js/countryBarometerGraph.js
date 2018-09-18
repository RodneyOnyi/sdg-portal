function countryBarometerGraph(countryID) {
    var countryBarometerDataURL = 'assets/data/' + countryID + 'BarometerChartData.json';
    $.getJSON(countryBarometerDataURL,function (data) {

    }).fail(function () {
        console.log("error fetching countryBarometer Data")
    })
}