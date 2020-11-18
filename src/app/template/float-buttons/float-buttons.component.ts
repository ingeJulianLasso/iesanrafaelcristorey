import { roundArrow } from 'tippy.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-buttons',
  templateUrl: './float-buttons.component.html',
  styleUrls: ['./float-buttons.component.scss']
})
export class FloatButtonsComponent implements OnInit {

  roundArrow = roundArrow;

  constructor() { }

  ngOnInit(): void { }

}
