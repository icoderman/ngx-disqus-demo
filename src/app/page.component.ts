import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent  {
  constructor(private router:Router, private route:ActivatedRoute) {}
}
