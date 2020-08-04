import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppToolbarProviderModule } from './app-toolbar-provider.module';
import { AppSideOptionsProviderModule } from './app-side-options-provider.module';
import { AppContentProviderModule } from './app-content-provider.module';
import { AppFooterProviderModule } from './app-footer-provider.module';


@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppToolbarProviderModule,
    AppSideOptionsProviderModule,
    AppContentProviderModule,
    AppFooterProviderModule
  ]
})
export class AppProviderModule { }
