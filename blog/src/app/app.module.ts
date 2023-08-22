import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConditionalsModule } from './conditionals/conditionals.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ConditionalsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
