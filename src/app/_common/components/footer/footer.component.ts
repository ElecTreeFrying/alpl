import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { QService } from '../../services/q.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  selected: string;

  constructor(
    private q: QService
  ) {

    const session = sessionStorage.getItem('currency');
    this.selected = !session ? 'usd' : session;
  }

  ngOnInit(): void {
  }

  changed(select: MatSelectChange) {
    sessionStorage.setItem('currency', select.value);
    this.q.updateSource('currency', select.value);
  }

}
