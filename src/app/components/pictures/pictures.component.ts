import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor(private pageService:PageService) {
    this.pageService.curentPage='Pictures'
  }

  ngOnInit(): void {

  }

}
