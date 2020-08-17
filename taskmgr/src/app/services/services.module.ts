import { NgModule, ModuleWithProviders } from '@angular/core';
import { QuoteService } from './quote.service';
import { ProjectService } from './project.service';
import { TaksListService } from './task-list.service';

// export {
//   QuoteService
// }

@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        ProjectService,
        TaksListService
      ]
    }
  }
}