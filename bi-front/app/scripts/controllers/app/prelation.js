'use strict';

app.controller('PrelationCtrl', ['$scope', function($scope) {
$scope.selectedRange=0;
$scope.selectedRange1=0;
$scope.r=function(){
	return $scope.selectedRange;
};
function h(newValue,oldValue,scope){
	console.log(newValue);
	popData[11]=(newValue*0.03)*50;
}
$scope.$watch($scope.r,h);

$scope.rr=function(){
	return $scope.selectedRange1;
};
function hh(newValue,oldValue,scope){
	console.log(newValue);
}
$scope.$watch($scope.rr,hh);

	var popData=[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
		 148.5, 216.4, 194.1, 95.6, 54.4];

		 $scope.predictChart ={
 chart: {
            zoomType: 'xy'
        },
        title: {
            text: '劳动力人口与经济关联分析预测'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                formatter: function() {
                    return this.value +'°C';
                },
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                text: 'GDP',
                style: {
                    color: '#89A54E'
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '人口',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                formatter: function() {
                    return this.value +' mm';
                },
                style: {
                    color: '#4572A7'
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    color: '#AA4643'
                }
            },
            labels: {
                formatter: function() {
                    return this.value +' mb';
                },
                style: {
                    color: '#AA4643'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 80,
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        series: [{
            name: '人口',
            color: '#4572A7',
            type: 'spline',
            yAxis: 1,
            data: popData,
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Sea-Level Pressure',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' mb'
            }

        }, {
            name: 'GDP',
            color: '#89A54E',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: ' °C'
            }
        }]

};	
$scope.populationChart ={
      options: {
					chart: {
						type: 'column'
					}
				},
				series: [{
					name: '银行中长期贷款',
					data: [1,2,4,3,5,7,6,1,4,5,1,2]
				}],
				title: {
					text: '银行中长期贷款'
				},
				xAxis: {
					categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
					title:{
						text:"月"
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: '亿元'
					}
				},
				loading: false,


	};	
	$scope.GDPChart ={
     options: {
					chart: {
						type: 'column'
					}
				},
				series: [{
					name: '银行中长期贷款',
					data: [1,2,4,3,5,7,6,1,4,5,1,2]
				}],
				title: {
					text: '银行中长期贷款'
				},
				xAxis: {
					categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
					title:{
						text:"月"
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: '亿元'
					}
				},
				loading: false,

	};	
	
	$scope.sumpopulation ={
title: {
            text: '产业GDP与各项人口指标的关联度分析预测',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
};
$scope.populationPie={
chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]

};
$scope.industryPie={
chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]

};              	
}]);
