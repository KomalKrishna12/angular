import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  routeEle:any;
  constructor(private route : ActivatedRoute){

  }

  ngOnInit():void{
    console.warn(this.route.snapshot.paramMap.get('id'));
    this.routeEle = this.route.snapshot.paramMap.get('id');
  }
}
