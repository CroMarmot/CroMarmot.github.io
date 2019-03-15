import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {
  }

  cards = [
    {
      title: 'Languages',
      cols: 1,
      rows: 2,
      figure: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://wakatime.com/share/@Cromarmot/ea093788-bca4-4eaa-b2c9-a81c6fcbf77c.svg')
    },
    {
      title: 'Editors',
      cols: 1,
      rows: 2,
      figure: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://wakatime.com/share/@Cromarmot/243aa421-1846-4de3-a48d-62baa4321b7e.svg')
    },
    {
      title: 'OS',
      cols: 1,
      rows: 2,
      figure: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://wakatime.com/share/@Cromarmot/1499a5fb-d182-49b2-b369-06c8ae957360.svg')
    },
    {
      title: 'Days',
      cols: 1,
      rows: 2,
      figure: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://wakatime.com/share/@Cromarmot/024b73e3-7b4b-4e31-8fe4-36045d38cd28.svg')
    }
  ];

  ngOnInit(): void {
  }
}
