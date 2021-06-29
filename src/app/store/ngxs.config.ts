import { NgxsModuleOptions } from "@ngxs/store";

export const ngxsOptions: NgxsModuleOptions = {
  developmentMode: true,
  selectorOptions: {
    suppressErrors: false,
    injectContainerState: false
  },
  compatibility: {
    strictContentSecurityPolicy: true
  }
};
