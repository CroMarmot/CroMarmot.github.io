import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppRoutingModule} from '../routing/app-routing.module';

@Component({
  selector: 'app-cs-nav',
  templateUrl: './cs-nav.component.html',
  styleUrls: ['./cs-nav.component.css'],
})
export class AppCsnavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
