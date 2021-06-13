import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
