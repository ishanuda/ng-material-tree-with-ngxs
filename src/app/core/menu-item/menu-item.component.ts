import {
  Component, EventEmitter,
  OnInit, Input, Output,
} from "@angular/core";
import { indicatorRotate, listAnimation } from "src/app/common";
import { MenuItem } from "src/app/store";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
  animations: [indicatorRotate, listAnimation]
})
export class MenuItemComponent implements OnInit {

  public expanded: boolean;

  @Input()
  public item!: MenuItem;

  @Input()
  public depth!: number;

  @Output()
  public selected: EventEmitter<MenuItem>;

  constructor() {
    this.expanded = false;
    this.selected = new EventEmitter(true);
  }

  private assertInputProvided(): void {
    if (!this.item)
      throw (new Error('The required input [item] was not provided'));
    if (!this.depth)
      throw (new Error('The required input [depth] was not provided'));
  }

  ngOnInit(): void {
    // Ensure the input bindings are actually provided at run-time
    // this.assertInputProvided();
  }

  public onSelected(event: MouseEvent, item: MenuItem): void {
    event.preventDefault();
    const newitem = { ...item };

    if (item.children && item.children.length) {
      newitem.expanded = !item.expanded;
      this.expanded = newitem.expanded;
      this.item = newitem;
    }

    if (!item.children || item.children.length === 0) {
      newitem.active = true;
      this.item = newitem;
      this.selected.emit(this.item);
    }
  }

  public onItemSelected(item: MenuItem): void {
    this.selected.emit(item);
  }

}
