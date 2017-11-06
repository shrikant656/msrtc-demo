(function () {
  'use strict';

var app = angular.module('myapp', ['chart.js','percentCircle-directive']);
  //var app = angular.module('examples', ['chart.js', 'ui.bootstrap']);

  app.config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('doughnut', {
      cutoutPercentage: 60
    });
   
  });

  app.controller('percentController01',['$scope',function($scope){
    $scope.percent = 95;
    
    
  }]);


  app.controller('datectrl',['$scope',function($scope){
    var date = new Date();
                        var monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"
                        ];
    var datevalues = ('0' + date.getDate()).slice(-2) + ' ' + monthNames[date.getMonth()]+ ', ' + date.getFullYear();
    // + ' ' + date.getHours() + ':' + date.getMinutes();
                        $scope.bdatetime = datevalues;

  }]);

  app.controller('percentController02',['$scope',function($scope){
    $scope.percent = 94;
    
  }])

 
  app.controller('LineCtrl', ['$scope', function ($scope) {
    $scope.labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    $scope.series = ['Weekends', 'Working Days','Holidays & Ramadan'];
    $scope.colors = ['#ec3e40','#ff9b2b','#f5d800'];
    $scope.data = [
      [564,561,459,492,511,482,514,670,668,666,645,610,573,590,565,580,602,630,709,721,698,678,690,489],
      [178,176,172,174,384,374,1330,1129,1384,1062,1205,604,640,595,645,594,1092,1517,1379,1108,1161,577,545,572],
    [460,465,448,448,451,452,507,741,723,1210,1033,676,528,544,562,817,768,827,795,738,685,539,417,284]
      
    ];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHover = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];

    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      },
      legend: { display: true },
        
    };
  }]);
  


  
  app.controller('LineCtrl1', ['$scope', function ($scope) {
    $scope.labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    $scope.series = ['6 May','12 May','13 May','19 May','20 May'];
    $scope.colors = ['#ec3e40'];
    $scope.data = [
      [749,762,550,637,673,576,590,599,620,616,642,656,556,533,552,582,582,601,604,615,581,564,613,180],
    [382,382,380,372,383,416,387,650,623,614,597,591,545,632,564,554,610,579,786,798,794,772,818,835],
    [764,796,528,609,630,554,573,621,603,605,627,651,566,535,526,597,620,628,557,625,555,584,603,162],
    [458,445,393,419,424,329,961,1058,1046,945,915,366,247,298,144,221,333,1010,976,885,855,474,162,101],
    [485,465,421,426,470,729,1347,1941,1845,1743,1604,957,883,908,946,953,1076,1697,1618,1505,1371,878,663,507]
      
    ];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHover = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];

    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      },
      legend: { display: false },
        
    };
  }]);
  
  app.controller('LineCtrl2', ['$scope', function ($scope) {
    $scope.labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    $scope.series = ['14 May','15 May','16 May','17 May','18 May'];
    $scope.colors = ['#ff9b2b'];
    $scope.data = [
      [167,185,174,179,380,367,1308,167,185,174,179,591,659,614,629,613,1117,1540,1384,1097,1172,595,561,585],
    [120,190,180,153,399,374,1315,1147,1374,1073,1189,380,367,1308,167,185,399,374,1315,1147,1374,1073,544,588],
    [180,210,148,163,375,383,1325,1121,1396,1082,1223,621,645,600,650,603,1104,1533,1388,1086,1174,571,524,586],
    [170,230,188,163,392,400,1322,1152,1355,1066,1195,1325,1121,1396,1082,580,399,163,392,400,1322,1152,1355,1066],
    [80,160,155,163,359,372,1348,1156,1405,1075,1203,592,624,575,636,591,1080,163,359,372,1348,1156,1405,1075]
      
    ];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHover = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];

    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      },
      legend: { display: false },
        
    };
  }]);
  
  
  app.controller('LineCtrl3', ['$scope', function ($scope) {
    $scope.labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    $scope.series = ['18 Jun','19 Jun','20 Jun','21 Jun','22 Jun'];
    $scope.colors = ['#f5d800'];
    $scope.data = [
      [443,458,440,429,460,396,461,583,579,1474,1258,612,459,473,448,884,837,576,530,473,468,340,324,172],
    [461,474,443,466,465,382,473,585,548,1455,1236,639,428,477,445,919,847,534,537,493,437,342,293,175],
    [471,481,423,454,435,724,812,500,470,1159,949,482,468,472,470,897,864,509,501,438,434,340,639,507],
    [436,441,420,427,433,409,466,564,566,1475,1262,644,472,437,473,880,826,541,530,469,470,334,281,163],
    [488,449,423,451,437,419,464,577,543,1473,1236,613,435,444,458,905,875,573,548,516,456,436,575,466]
      
    ];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHover = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];

    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      },
      legend: { display: false },
        
    };
  }]);
 
 

    app.controller('avgdelay', ['$scope', function ($scope) {
    $scope.labels = ['Critical', 'High', 'Medium', 'Low'];
    $scope.colors = ['#4fab79', '#cc3300', '#f79646', '#4f81bd'];
    //$scope.colors = [ { backgroundColor: '#ec3e40' } ];
    $scope.series = ['Critical','High','Medium','Low'];
    $scope.data = [
      [5,6,11,7]
    ];
	$scope.datasetOverride = [
                    {
                        fill: true,
                         borderWidth:0,
                        backgroundColor: [
                       "#ec3e40",
                       "#ff9b2b",
                       "#f5d800",
                       "#377fc7"
                        ]
                    }];

	
    $scope.options = {
      legend: { display: true },
        
    };
  }]);
  
  app.controller('StatusWise', ['$scope', function ($scope) {
    $scope.labels = ['New', 'In-Progress', 'Closed'];
    $scope.colors = ['#4fab79', '#cc3300', '#f79646'];
    //$scope.colors = [ { backgroundColor: '#ec3e40' } ];
    $scope.series = ['New','In-Progress','Closed'];
    $scope.data = [
      [200,500,435]
    ];
	
	$scope.datasetOverride = [
                    {
                        fill: true,
                         borderWidth:0,
                        backgroundColor: [
                       "#ec3e40",
                       "#ff9b2b",
                       "#f5d800"
                        ]
                    }];
	
    $scope.options = {
      legend: { display: true },
        
    };
  }]);

  app.controller('BarCtrl', ['$scope', function ($scope) {
    $scope.labels = ['Metro', 'Bus','Train'];
    $scope.colors = ['#FFC000','#377FC7','#00B050'];
    $scope.series = ['Metro', 'Bus','Train'];
    $scope.data = [70000,48000,42000];
  }]);

   app.controller('BarCtrladmin', ['$scope', function ($scope) {
    $scope.labels = ['NOL Top Ups','Fee Collections','Salik Top Ups','Parking','Parking Fines'];
    $scope.series = ['NOL Top Ups','Fee Collections','Salik Top Ups','Parking','Parking Fines'];
    $scope.colors = [ { backgroundColor: '#d50000' } ];
    $scope.$on('chart-create', function(event, instance){
      // used to obtain chart instance
      $scope.chart = instance.chart;
    });
    $scope.data = [
      [4500000,2300000,3400000,5000000,4000000]
    ];
    $scope.options = {
        //legend: { display: true },
        //backgroundColor:'rgba(0,0,0,0.2)'
    };

    $scope.onClick = function(elements,e){
      // helper function that translates an event to a position in canvas coordinates
      var pos = Chart.helpers.getRelativePosition(e, $scope.chart);

      // inRange is the function on the chart element that is used for hit testing
      var intersect = elements.find(function(element) {
        return element.inRange(pos.x, pos.y);
      });
      if(intersect){
        console.log('You clicked ' + $scope.labels[intersect._index]);  
        if($scope.labels[intersect._index] == 'NOL Top Ups'){
            $('.linechart3').show();
            $('.linechart4,.linechart5,.linechart6,.linechart7,.linechart8').hide();
        } else if($scope.labels[intersect._index] == 'Fee Collections'){
            $('.linechart4').show();
            $('.linechart3,.linechart5,.linechart6,.linechart7,.linechart8').hide();
        }  else if($scope.labels[intersect._index] == 'Salik Top Ups'){
            $('.linechart5').show();
            $('.linechart3,.linechart4,.linechart6,.linechart7,.linechart8').hide();
        }  else if($scope.labels[intersect._index] == 'Parking'){
            $('.linechart6').show();
            $('.linechart3,.linechart5,.linechart4,.linechart7,.linechart8').hide();
        }   else if($scope.labels[intersect._index] == 'Parking Fines'){
            $('.linechart7').show();
            $('.linechart3,.linechart5,.linechart6,.linechart4,.linechart8').hide();
        } 
      }
    }
    /*$scope.onClick = function(_points, _event, barClicked){
      if (barClicked) {
        var associatedLabel = barClicked._model.datasetLabel;
        console.log("Label of the bar you clicked is " + associatedLabel);
        if(associatedLabel == 'NOL Top Ups'){
          alert(1);
        }else if(associatedLabel == 'Fee Collections'){
          alert(2);
        }
      }
    }*/
  }]);

 
  //function ($scope) {
  app.controller('BarCtrl01', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.labels = ['Robbery', 'Cyber Crime', 'Murder', 'Against Women'];
    $scope.series = ['Series A'];

    $scope.data = [89, 34, 10, 2];
    $scope.colors = ['#C0504D','#FF9B2B','#E05038','#E46C0A'];
  }]);
  
  app.controller('BarCtrl02', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.labels = ['CCTV Cameras', 'Sensors'];
    $scope.series = ['Series A'];

    $scope.data = [10, 5];
    $scope.colors = ['#FFC000','#E46C0A'];
  }]);

  app.controller('DoughnutCtrla', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.labels = ['Facebook','Twitter','LinkedIn','Google+'];
    $scope.data = [500000,350000,25000,15000];
    $scope.colors = ['#365A94','#00B7F0','#f5d800','#377fc7'];

    var dataLabel = ['Facebook','Twitter','LinkedIn','Google+'];
    var dataValue = [500000,350000,25000,15000];
    var dataColors = ['#365A94','#00B7F0','#f5d800','#377fc7'];

    var newRecd = dataValue.map( function(x, i, z){
        return {"label": dataLabel[i],"value": x, "color": dataColors[i]}        
    }.bind(this));
                    
    console.log(newRecd);
    $scope.newRec = newRecd;
    
  }]);

  app.controller('DoughnutCtrlb', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.labels = ['SMTP','USB','Print','Web','Chart'];
    $scope.data = [50,35,5,5,5];
    $scope.colors = ['#ec3e40','#ff9b2b','#f5d800','#377fc7','#01a46d'];
    $scope.options = {
      legend: { display: true,position: "right" },
        
    };

    $timeout(function () {
      $scope.data = [50,35,5,5,5];
    }, 500);
  }]);

  app.controller('PieCtrla', ['$scope', function ($scope) {
    $scope.labels = ['Discover', 'Mobile', 'Endpoint', 'Network'];
    $scope.data = [6000,0, 386,0];
    $scope.colors = ['#ec3e40','#ff9b2b','#f5d800','#377fc7','#01a46d'];
    $scope.options = {
      legend: { display: true,position: "right" },
        
    };
  }]);
  app.controller('PieCtrlb', ['$scope', function ($scope) {
    $scope.labels = ['Fatal','Nonfatal','No injuries'];
    $scope.data = [8,3,2];
    $scope.colors = ['#ec3e40','#ff9b2b','#f5d800','#377fc7'];
    $scope.options = {
      legend: { display: true,position: "right" },
        
    };
  }]);
  app.controller('PieCtrlc', ['$scope', function ($scope) {
    $scope.labels = ['Gmail','Yahoo','Facebook','Blog','Cloud'];
    $scope.data = [50,35,5,5,5];
    $scope.colors = ['#ec3e40','#ff9b2b','#f5d800','#377fc7','#01a46d'];
    $scope.options = {
      legend: { display: true,position: "right" },
        
    };


  }]);




  




  $("#menuShowHide").click(function(){
    if($(".menuWrap").css("width")=="63px"){
      $(".menuWrap").animate({"width":"260"});
      $(".userImgCont").animate({"width":"260"});
      $(".disNone").fadeIn();
    }
    else{
      $(".menuWrap").animate({"width":"63"});
      $(".userImgCont").animate({"width":"63"});
      $(".disNone").fadeOut();
    }
    $(".menuWrap").toggleClass("collapsed");






    
  });
})();