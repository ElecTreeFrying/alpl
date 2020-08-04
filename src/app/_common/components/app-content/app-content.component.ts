import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

  hotels: Observable<any>;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.hotels = this.api.hotels;
  }

}
