import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../menu-list';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menulist = MenuList;
  constructor() { }

  ngOnInit(): void {
  }

}
