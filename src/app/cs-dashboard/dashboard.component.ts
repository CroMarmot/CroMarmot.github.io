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
        'https://wakatime.com/share/@Cromarmot/02a9704d-9734-43b6-8eb7-fb7805a22f48.svg')
    },
    {
      title: 'Editors',
      cols: 1,
      rows: 2,
      figure: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://wakatime.com/share/@Cromarmot/d0b6f293-bf67-48ee-a7b6-3f0eaeb2e45f.svg')
    },
    {
      title: 'OS',
      cols: 1,
      rows: 2,
      figure: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://wakatime.com/share/@Cromarmot/51c751b2-d6fe-43dc-8fe4-4adf40c9b8c4.svg')
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
