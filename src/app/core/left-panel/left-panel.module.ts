import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { MenuItemModule } from "../menu-item/menu-item.module";
// store
import { LeftPanelComponent } from "./left-panel.component";

@NgModule({
  declarations: [
    LeftPanelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuItemModule
  ],
  providers: [ ],
  exports: [LeftPanelComponent]
})
export class LeftPanelModule {}
