import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  selected: string;

  constructor() { 
    this.selected = 'usd';
  }

  ngOnInit(): void {
  }

  changed(select: MatSelectChange) {
    console.log('selected currency:', select.value);
  }

}
