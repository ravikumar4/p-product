import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
   // public z: string[] = ['test'];    // for showing how to define data type.

  constructor() { }

  ngOnInit() {
  }

}
