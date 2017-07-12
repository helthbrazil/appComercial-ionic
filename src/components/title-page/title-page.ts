import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-page',
  templateUrl: 'title-page.html'
})
export class TitlePageComponent {
  @Input() titulo: string;
  @Input() icone: string;
  @Input() cor: string;
  @Input() showIcon: boolean;
  @Input() hideIcon: boolean;
  @Input() labelColor : string;

  constructor() {
    console.log('Hello TitlePageComponent Component');

  }

ionViewDidLoad(){
  if(this.labelColor == undefined){
    this.labelColor = "intergado";
  }
}


}
