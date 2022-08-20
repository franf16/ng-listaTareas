import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  templateUrl: './trash-icon.component.svg',
  styleUrls: ['./trash-icon.component.scss']
})
export class TrashIconComponent implements OnInit {

  currentColor = 'rgb(0, 0, 0)';

  constructor() { }

  ngOnInit(): void {
  }

}
