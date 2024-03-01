import { Component, Input, OnInit } from "@angular/core"
import { MenuItem } from "../../models/menuItem";

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})

export class ToolbarMenuComponent implements OnInit{
  @Input() shadow = false;
  @Input() popText = false;
  @Input() menuName: string = '';
  @Input() itemsMenu: MenuItem[] = [];

  constructor () {}

  ngOnInit(): void {

  }
}
