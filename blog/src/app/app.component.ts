import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Property Binding in Angular';
  name= "Danyal";
  disable= true;
  functionClick(){
    if(!this.disable){
      this.disable=true;
    }else{
      this.disable = false;
    }
  }
}
