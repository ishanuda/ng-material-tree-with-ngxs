import {
  Component, EventEmitter, Output,
  OnInit, OnDestroy
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";
import { Select } from "@ngxs/store";
import { indicatorRotate, listAnimation } from "../../common";
import {
  MenuItem, TocFlatNode, MenuState
} from "../../store";

// import { Helper } from 'src/app/shared/models/helper.model';

@Component({
  selector: "app-left-panel",
  templateUrl: "./left-panel.component.html",
  styleUrls: ["./left-panel.component.scss"],
  animations: [indicatorRotate, listAnimation]
})
export class LeftPanelComponent implements OnInit, OnDestroy {

  @Output()
  public selected: EventEmitter<MenuItem>;

  public tree: MenuItem[];
  public filteredtree$: Observable<MenuItem[]>;

  private _transformer = (node: MenuItem, level: number): TocFlatNode => {
    return {
      uid: node.uid,
      pid: node.pid,
      refid: node.refid,
      iconName: node.iconName,
      title: node.title,
      active: node.active,
      disabled: node.disabled,
      expanded: node.expanded,
      route: node.route,
      expandable: !!node.children && node.children.length > 0,
      level
    };
  };

  public treeControl = new FlatTreeControl<TocFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  public treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  public dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );

  @Select(MenuState.list)
  public list$: Observable<MenuItem[]>;

  private subscribers: Subscription[] = [];

  constructor(
    private readonly mnustt: MenuState,
  ) {
    this.selected = new EventEmitter(true);
  }

  ngOnInit(): void {
    this.consumeTree();
  }

  private consumeTree(): void {
    this.subscribers[0] = this.list$
      .subscribe((tree: MenuItem[]) => this.tree = tree);
  }

  hasChild = (_: number, node: MenuItem) =>
    !!node.children && node.children.length > 0;

  public onItemSelected(item: MenuItem): void {
    console.log("selected item on left panel", item);
    this.mnustt.updateMenu(item);
    // Route to the page
    this.selected.emit(item);
  }

  // private assertInputProvided(): void {
  //   if (!this.tree)
  //     throw (new Error('The required input [item] was not provided'));
  //   if (!this.filteredtree$)
  //     throw (new Error('The required input [depth] was not provided'));
  // }

  // private toggleTree(): void {
  //   this.dataSource.data = this.systemMenu;
  //   this.initFilter();
  // }

  // private initFilter(): void {
  //   this.filteredTree$ = this.filterCtrl.valueChanges
  //   .pipe(
  //   startWith(''),
  //   debounceTime(300),
  //   map(value => this._filter(value)));
  // }

  // private consumeFilterdData(): void {
  //   this.filteredTree$
  //     .subscribe((tree: MenuItem[]) => this.dataSource.data = tree);
  // }

  // tocPredicate = (item: MenuItem) => item.title.toLowerCase().includes(this.searchPhrase);

  // private _filter(value: string): MenuItem[] | SNSMenuItem[] {
  //   this.searchPhrase = value.toLowerCase();
  //   console.log('_lpAction', this._lpAction);
  //   switch(this._lpAction) {
  //     case LeftPanelAction.SYS_MENU: {
  //       // if (this.searchPhrase === '') {
  //       //   return this.systemMenu;
  //       // }
  //       return this.systemMenu.filter(item => item.title.toLowerCase()
  //         .includes(this.searchPhrase));
  //     }
  //     default: {
  //       return this.systemMenu.filter(item => item.title.toLowerCase()
  //       // .indexOf(this.searchPhrase) === 0);
  //       .includes(this.searchPhrase));
  //     }
  //   }
  // }

  // public toggleFilterPlaceholder(action: LeftPanelAction): string {
  //   switch(action) {
  //     case LeftPanelAction.SYS_MENU: return 'Filter System Menu';
  //   }
  // }

  // public onFilterClear(event: MouseEvent | TouchEvent): void {
  //   event.preventDefault();
  //   this.filterCtrl.setValue('');
  // }

  // notifications
  // public refresh(): void {}

  // expandNode() {
  //   this.treeControl.expand(this.treeControl.dataNodes[1]);
  //   this.treeControl.expand(this.treeControl.dataNodes[11]);
  // }

  ngOnDestroy(): void {
    // Helper.unsubscribe(this.subscribers);
    // this.tocTree = [];
    this.dataSource.disconnect();
  }
}
