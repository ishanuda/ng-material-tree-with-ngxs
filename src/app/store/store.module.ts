import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { ngxsOptions } from "./ngxs.config";
import { NgxsDataPluginModule } from "@ngxs-labs/data";
import {
  NGXS_DATA_STORAGE_PLUGIN,
  NGXS_DATA_STORAGE_PREFIX_TOKEN
} from "@ngxs-labs/data/storage";
import { LeftPanelState, MenuState } from "./system";

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot([
      LeftPanelState,
      MenuState
    ], ngxsOptions),
    NgxsDataPluginModule.forRoot([
      NGXS_DATA_STORAGE_PLUGIN
    ])
  ],
  exports: [NgxsModule],
  providers: [
    {
      provide: NGXS_DATA_STORAGE_PREFIX_TOKEN,
      useValue: "@test.tree."
    },
  ]
})
export class StoreModule { }
