$(document).ready(function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(initialize);

    function initialize() {
        drawLineChart("voreslineChart");
        drawLineChart2("voreslineChart2");
        drawPieChart("vorespieChart");
        drawComboChart("voreschart");


    }
    function drawLineChart(HTMLElementId) {
        var chartdata ={
        "cols": [
            {"id":"","label":"","pattern":"","type":"string"},
            {"id":"","label":"Positive reaktioner","pattern":"","type":"number"},
            {"id":"","label":"Negative reaktioner","pattern":"","type":"number"}
        ],
            "rows": [
        ]
    };
        var jsondata;

        $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1UcgVCHUAeZc5Ssozopnmp4vFdTfjGszLz9SOih-Di8M/values/'Ark1'!b2%3Ae4?majorDimension=COLUMNS&valueRenderOption=FORMULA&key=AIzaSyCsvq4SdkxwRX7X2f3dy1kKl3afeK_A5Fk",
            datatype: "json",
            async: false
        }).done(function (data) {
            jsondata = data;
        });
        $.each(jsondata.values, function (k, v) {
            chartdata.rows.push(
                {"c":
                    [
                        {"v":v[0],"f":null},
                        {"v":v[1],"f":null},
                        {"v":v[2],"f":null}
                    ]
                }
            );
        });
        // Create our data table out of JSON data loaded from server.
        var data = new google.visualization.DataTable(chartdata);

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById(HTMLElementId));
        var optinos ={
            width: 1000,
            height: 500,

        }
        chart.draw(data, optinos);




        }
    function drawLineChart2(HTMLElementId) {
        var chartdata = {
            "cols": [
                {"id": "", "label": "", "pattern": "", "type": "string"},
                {"id": "", "label": "visniger", "pattern": "", "type": "number"},
                {"id": "", "label": "kommentarer", "pattern": "", "type": "number"},
                {"id": "", "label": "delinger", "pattern": "", "type": "number"}
            ],
            "rows": []
        };
        var jsondata;

        $.ajax({
            url: "https://sheets.googleapis.com/v4/spreadsheets/1UcgVCHUAeZc5Ssozopnmp4vFdTfjGszLz9SOih-Di8M/values/'Ark1'!b6%3Ah8?majorDimension=COLUMNS&valueRenderOption=FORMULA&key=AIzaSyCsvq4SdkxwRX7X2f3dy1kKl3afeK_A5Fk",
            datatype: "json",
            async: false
        }).done(function (data) {
            jsondata = data;
        });
        $.each(jsondata.values, function (k, v) {
            chartdata.rows.push(
                {
                    "c":
                        [
                            {"v": v[0], "f": null},
                            {"v": v[1], "f": null},
                            {"v": v[2], "f": null},
                            {"v": v[3], "f": null}
                        ]
                }
            );
        });
        // Create our data table out of JSON data loaded from server.
        var data = new google.visualization.DataTable(chartdata);

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart2(document.getElementById(HTMLElementId));
        var optinos = {
            width: 1000,
            height: 500,

        }
        chart.draw(data, optinos);
    }

    function drawPieChart(HTMLElementId){

        var chartdata ={
            "cols": [
                {"id":"","label":"Topping","pattern":"","type":"string"},
                {"id":"","label":"Slices","pattern":"","type":"number"}
            ],
            "rows": [
            ]
        };



        var jsondata;

        $.ajax({
            url: "https://sheets.googleapis.com/v4/spreadsheets/1UcgVCHUAeZc5Ssozopnmp4vFdTfjGszLz9SOih-Di8M/values/'Ark1'!b17%3Ae18?majorDimension=COLUMNS&valueRenderOption=FORMULA&key=AIzaSyCsvq4SdkxwRX7X2f3dy1kKl3afeK_A5Fk",
            datatype: "json",
            async: false
        }).done(function (data) {
            jsondata = data;
        });

        $.each(jsondata.values, function (k, v) {
            chartdata.rows.push(
                {"c":[{"v":v[0],"f":null},{"v":v[1],"f":null}]}
            );
        });


        var data = new google.visualization.DataTable(chartdata);


        var chart = new google.visualization.PieChart(document.getElementById(HTMLElementId));
        var optinos ={
            width: 1000,
            height: 540,
            is3D: true
        }
        chart.draw(data, optinos);


    }
    function drawComboChart() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
            ['udedag', 'visinger'],
            ['mandag',  25],
            ['trisdag',  34],
            ['onsdag',  50],
            ['torsdag',  20]

        ]);

        var options = {
            title : 'hvor mange som kommer på vores side',
            vAxis: {title: 'likes'},
            hAxis: {title: 'udedage'},
            seriesType: 'bars',
            series: {4: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }



    })








