import { Injectable } from "@angular/core";
import { State, Selector } from "@ngxs/store";
import {
  DataAction,
  StateRepository,
  Persistence,
  Payload
} from "@ngxs-labs/data/decorators";
import { NgxsDataRepository } from "@ngxs-labs/data/repositories";
import { MenuApiService } from "./services/menu-api.service";
// models
import { EntityStateModel } from "../common";
import { MenuItem } from "./interfaces/menu-item";
import { menuItems } from "./menu-items";

@Persistence([{
  path: "menu",
  existingEngine: localStorage
}])
@StateRepository()
@State<EntityStateModel<MenuItem>>({
  name: "menu",
  defaults: {
    loaded: false,
    item: null,
    list: [],
    searchTerm: "",
    filtered: [],
    selected: []
  }
})
@Injectable()
export class MenuState extends NgxsDataRepository<EntityStateModel<MenuItem>> {

  @Selector()
  public static loaded(state: EntityStateModel<MenuItem>): boolean {
    return state.loaded;
  }

  @Selector()
  public static item(state: EntityStateModel<MenuItem>): MenuItem {
    return state.item;
  }

  @Selector()
  public static list(state: EntityStateModel<MenuItem>): MenuItem[] {
    return state.list;
  }

  constructor(private readonly api: MenuApiService) {
    super();
  }

  public ngxsAfterBootstrap(): void {
    super.ngxsAfterBootstrap();
    // this.api.getMenuitems().subscribe((list: MenuItem[]) => {
    //   list should come form the Rest API
    //   console.log("list", list);
    // });
    const list = menuItems;
    this.setList(list);
    this.setLoaded(true);
  }

  @DataAction()
  public setLoaded(@Payload("loaded") loaded: boolean): void {
    this.ctx.patchState({ loaded });
  }

  @DataAction()
  public setItem(@Payload("item") item: MenuItem): void {
    this.ctx.patchState({ item });
  }

  @DataAction()
  public setList(@Payload("list") list: MenuItem[]): void {
    this.ctx.patchState({ list });
  }

  @DataAction()
  public updateMenu(@Payload('item') item: MenuItem) {
    console.log('Update the menu item in state', item);
  }

}
