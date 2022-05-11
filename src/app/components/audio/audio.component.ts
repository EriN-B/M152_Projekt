import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  constructor(private pageService:PageService) {
    this.pageService.curentPage='Audio';
  }

  ngOnInit(): void {
  }

}
