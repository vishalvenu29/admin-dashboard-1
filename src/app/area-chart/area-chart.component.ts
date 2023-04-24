import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor(){
    this.chartOptions={
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['MEARN', 'PYTHON', 'DATA-SCIENCE', 'TESTING', 'FLUTTER', 'ASP.NET',
            'BIG DATA', 'JAVA SPRING', 'AI', 'DEVOPS']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Placements done: {point.y}'
    },
    title: {
        text: 'Yearly Placement Analysis of  2022-2023',
        align: 'center'
    },
    subtitle: {
        text: 'Luminar Technolab',
        align: 'center'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    credits:{
      enabled:false
    },
    series: [{
        data: [1318, 673, 560, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
    }]
  
    }

    // to export chart
    HC_exporting(Highcharts);
  }


}
