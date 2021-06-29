import { Injectable } from "@angular/core";
import { State, Selector } from "@ngxs/store";
import {
  DataAction,
  StateRepository,
  Persistence,
  Payload
} from "@ngxs-labs/data/decorators";
import { NgxsDataRepository } from "@ngxs-labs/data/repositories";
// models
import { LeftPanel } from "./models/left-panel";

@Persistence([{
  path: "leftPanel",
  existingEngine: localStorage
}])
@StateRepository()
@State<LeftPanel>({
  name: "leftPanel",
  defaults: {
    opened: false,
    initialWidth: 270,
    width: 270
  }
})
@Injectable()
export class LeftPanelState extends NgxsDataRepository<LeftPanel> {

  @Selector()
  public static panel(state: LeftPanel): LeftPanel {
    return state;
  }

  @Selector()
  public static opened(state: LeftPanel): boolean {
    return state.opened;
  }

  @Selector()
  public static width(state: LeftPanel): number {
    return state.width;
  }

  public ngxsAfterBootstrap(): void {
    super.ngxsAfterBootstrap();
  }

  public getPanel(): LeftPanel {
    return this.ctx.getState();
  }

  @DataAction()
  public setOpened(@Payload("opened") opened: boolean): void {
    this.ctx.patchState({ opened });
  }

  @DataAction()
  public setWidth(@Payload("width") width: number): void {
    this.ctx.patchState({ width });
  }
}
