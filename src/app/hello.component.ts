import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent  {

  constructor(private router:Router, private route:ActivatedRoute) {}
}
