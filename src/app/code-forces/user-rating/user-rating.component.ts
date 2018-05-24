import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {CodeforcesApiService} from '../../service/codeforces-api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import {CfUserRatingItem} from '../../model/cf-user-rating-item';
import {CodeforcesStaticService} from '../../service/codeforces-static.service';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnInit {
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
    const COLORS = CodeforcesStaticService.getColors();
    for (const i in Object.keys(COLORS)) {
      if (r < COLORS[i].score ) {
        return COLORS[i].color;
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
