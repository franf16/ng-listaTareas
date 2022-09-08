import { Component, Input, OnInit } from '@angular/core';

export type SupportedIcons = 'check' | 'clipboard' | 'fullscreen' | 'share' | 'trash';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() type!: SupportedIcons;

  constructor() { }

  ngOnInit(): void {
  }

}
