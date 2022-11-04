import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  selected = 'dark'
  data = {
    title: "Gold Books"
  }
  modes = [
    {
      key: "light",
      value: "Light"
    },
    {
      key: "dark",
      value: "Dark"
    }
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

  getMode(e: any) {
    console.log(e)
  }

}
