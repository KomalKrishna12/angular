import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowEle]'
})
export class YellowEleDirective {

  constructor(ele : ElementRef) {
    ele.nativeElement.style.color = "yellow";
   }

}
