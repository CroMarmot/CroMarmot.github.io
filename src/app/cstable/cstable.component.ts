import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CstableDataSource } from './cstable-datasource';

@Component({
  selector: 'app-cstable',
  templateUrl: './cstable.component.html',
  styleUrls: ['./cstable.component.css']
})
export class CstableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CstableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new CstableDataSource(this.paginator, this.sort);
  }
}
