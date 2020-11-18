
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit, AfterViewInit {

  constructor(
    private router: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.router.fragment.subscribe(fragment => {
      this.viewportScroller.scrollToAnchor(fragment);
    });
  }

}
