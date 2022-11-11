import { InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export class MyClass {
  constructor() {
    console.log('Nameless class was contructed');

  }
}
const myCustomToken = new InjectionToken('Test')

const myProvider: Provider = {
  // useValue: 123
  provide:  myCustomToken,
  useClass: MyClass,

}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyClass
    // myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
