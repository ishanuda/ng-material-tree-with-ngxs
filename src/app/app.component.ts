import { Component } from '@angular/core';
import { MenuItem } from 'src/app/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'ng-material-tree-with-ngxs';
  public width = 250;
  public opened = true;
  public sideMode = 'side';
  public item: MenuItem;


  public onItemSelected(item: MenuItem): void {
    this.item = item;
  }

  public getText(): string {
    return this.item ? `${this.item.title} clicked` : 'Main content'
  }

}
