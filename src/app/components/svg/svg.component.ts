import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  constructor(private pageService:PageService) {
    this.pageService.curentPage='Pictures'
  }

  ngOnInit(): void {
  }

}
