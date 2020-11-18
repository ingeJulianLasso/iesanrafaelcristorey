import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  color: string;

  constructor() {
    this.color = '';
  }

  ngOnInit(): void { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 15) {
      this.color = 'primary';
    } else {
      this.color = '';
    }
  }

}
