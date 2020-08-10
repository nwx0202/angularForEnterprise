import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from '../utils/svg.util';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../services/services.module';

import 'hammerjs';
import 'rxjs-compat/add/operator/take'
import 'rxjs-compat/add/operator/map'
import 'rxjs/add/operator/map'

import '../utils/debug.util';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ServicesModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule {
  // 使用SkipSelf()注解，避免重复注入，去系统的父级查找依赖
  // 使用Optional()注解，让SkipSelf作为可选，在第一次系统中并没有CoreModule的时候成功注入
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已加载，不需要重新加载');
    }
    loadSvgResources(ir, ds);
  }
}
