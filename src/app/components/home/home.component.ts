import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  public sort: string = ''; // Initialize with an empty string or another default value

  constructor() {}

  ngOnInit(): void {
    // Your initialization logic here if needed
  }
}
