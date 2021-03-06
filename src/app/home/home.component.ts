import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'frappe-erpnext';

  constructor(page: Page) {
    page.actionBarHidden = true;
}

  ngOnInit() {
  }
}
