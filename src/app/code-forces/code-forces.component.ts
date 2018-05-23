import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {CodeforcesApiService} from '../service/codeforces-api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import {CfUserRatingItem} from '../cf-user-rating-item';

@Component({
  selector: 'app-code-forces',
  templateUrl: './code-forces.component.html',
  styleUrls: ['./code-forces.component.css']
})
export class CodeForcesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource$: MatTableDataSource<CfUserRatingItem> ;
  displayedColumns = [
    'contestId',
    'contestName',
    /*'handle',*/
    'newRating',
    /*'oldRating',*/
    'rank',
    'ratingUpdateTimeSeconds',
  ];

  calcColor(r: number) {
    for (const i of Object.keys(COLORS)) {
      if (r < Number.parseInt(i)) {
        return COLORS[i];
      }
    }
    return '#000000';
  }

  constructor(private codeforcesApi: CodeforcesApiService) {
  }

  ngOnInit() {
    this.codeforcesApi.getUserRating('cro-marmot').subscribe(
      ret => (this.dataSource$ = new MatTableDataSource(ret)) && (this.dataSource$.paginator = this.paginator) );
  }
}
const COLORS = {
  1200: '#cccccc',
  1400: '#70eb74',
  1600: '#76ddbb',
  1900: '#aaa9fc',
  2100: '#ec84fc',
  2300: '#fecc88',
  2400: '#fcbb54',
  2600: '#f47476',
  3000: '#f24533',
  4000: '#ab2e16',
};
