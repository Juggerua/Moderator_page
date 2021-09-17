import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-moderator-dashboard',
  templateUrl: './moderator-dashboard.component.html',
  styleUrls: ['./moderator-dashboard.component.scss']
})
export class ModeratorDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'New users', cols: 2, rows: 1 },
          { title: 'Chats', cols: 1, rows: 1 },
          { title: 'Comments', cols: 1, rows: 1 },
          { title: 'Mentors', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'New users', cols: 2, rows: 1 },
        { title: 'Chats', cols: 1, rows: 1 },
        { title: 'Last comments', cols: 1, rows: 2 },
        { title: 'Mentors', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
