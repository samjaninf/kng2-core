import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { AuthGuardService } from './auth-guard.service';

import { Category, CategoryService } from './category.service';
import { ConfigService } from './config.service';
import { LoaderService } from './loader.service';
import { OrderService } from './order/order.service';
import { Order } from './order/order';
import { UserPipe } from './user.pipe';
import { User, UserService } from './user.service';
import { Shop } from './shop.service'


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    UserPipe
  ],
  exports: [
    UserPipe
  ],
  providers: [
        AuthGuardService,
        CategoryService,
        ConfigService,
        LoaderService,
        OrderService,
        UserService
      ]
})
export class Kng2CoreModule {
  
  // in root module : import Kng2CoreModule.forRoot() to have only one instance of services when lazy loaded
  //https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html

  // static forRoot() {
  //   return {
  //     ngModule: Kng2CoreModule,
  //     providers: [
  //       AuthGuardService,
  //       CategoryService,
  //       ConfigService,
  //       LoaderService,
  //       OrderService,
  //       UserService
  //     ]
  //   }
  // }
}

//
//
export {
  AuthGuardService,
  CategoryService, Category,
  ConfigService,
  LoaderService,
  OrderService, Order,
  UserPipe,
  UserService, User, Shop
}

export * from './order/order.enum';
export { Config } from './config';