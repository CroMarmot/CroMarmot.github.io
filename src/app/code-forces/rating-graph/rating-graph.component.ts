import {Component, OnInit} from '@angular/core';
import {CodeforcesStaticService} from '../../service/codeforces-static.service';
import {CodeforcesApiService} from '../../service/codeforces-api.service';
import {CfUserRatingItem} from '../../model/cf-user-rating-item';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

const COLORS = CodeforcesStaticService.getColors();

@Component({
  selector: 'app-rating-graph',
  templateUrl: './rating-graph.component.html',
  styleUrls: ['./rating-graph.component.scss']
})
export class RatingGraphComponent implements OnInit {
  chartType = 'line';

  /* dynamic no works well ????!!! */
  chartDatasets: Array<any> = [{data: [0], label: 'place holder'}, ];

  /* dynamic no works well ????!!! */
  chartLabels: Array<number> = [0];

  chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderColor: 'rgb(0,0,0)',
      borderWidth: 2,
    },
    {backgroundColor: COLORS[0].color},
    {backgroundColor: COLORS[1].color},
    {backgroundColor: COLORS[2].color},
    {backgroundColor: COLORS[3].color},
    {backgroundColor: COLORS[4].color},
    {backgroundColor: COLORS[5].color},
    {backgroundColor: COLORS[6].color},
    {backgroundColor: COLORS[7].color},
    {backgroundColor: COLORS[8].color},
    {backgroundColor: COLORS[9].color},
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  constructor(private cfapi: CodeforcesApiService, ) {
  }

  ngOnInit(): void {
    // [TODO] userName to config
    this.cfapi.getUserRating('cro-marmot').subscribe(
      dt => {setTimeout(() => {
        const ret: Array<any> = this.chartDatasets = [{
          label: 'My Rating',
          data: []
        }];
        const len = dt.length;
        dt.forEach(v => {
          ret[0].data.push(v.newRating);
        });

        COLORS.forEach(v => {
          const newline = {
            label: v.name,
            data: []
          };
          for (let i = 0; i < len; i++) {
            newline.data.push(v.score);
          }
          ret.push(newline);
        });
        setTimeout(() => {
            this.chartLabels = [];
            for (let i = 0; i < len; i++) {
              this.chartLabels.push(i);
            }
          },
          100);
      }, 100); });
  }
}
