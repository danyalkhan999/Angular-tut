import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { WinComponent } from './win/win.component';
import { LoseComponent } from './lose/lose.component';

@NgModule({
    declarations: [InputComponent, WinComponent, LoseComponent],
    imports: [CommonModule],
    exports: [InputComponent],
})
export class ConditionalsModule {}
