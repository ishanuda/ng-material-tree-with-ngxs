import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "src/app/material.module";
import { MenuItemComponent } from "./menu-item.component";

@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [MenuItemComponent]
})
export class MenuItemModule { }
