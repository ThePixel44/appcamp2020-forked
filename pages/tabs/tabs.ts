import { Component } from "@angular/core";

import { InsertPage } from "../insert/insert";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = InsertPage;
  tab3Root = ContactPage;

  constructor() {}
}
