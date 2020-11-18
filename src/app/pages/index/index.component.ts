import { roundArrow } from 'tippy.js';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  roundArrow = roundArrow;

  constructor() { }

  ngOnInit(): void {
  }

}
