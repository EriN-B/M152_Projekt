import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private pageService:PageService) {
    this.pageService.curentPage='Videos';
  }

  ngOnInit(): void {
  }

}
