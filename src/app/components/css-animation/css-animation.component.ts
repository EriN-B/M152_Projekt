import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-css-animation',
  templateUrl: './css-animation.component.html',
  styleUrls: ['./css-animation.component.css']
})
export class CssAnimationComponent implements OnInit {

  constructor(private pageService:PageService) {
    this.pageService.curentPage='CSS Animations'
  }

  ngOnInit(): void {
  }

}
