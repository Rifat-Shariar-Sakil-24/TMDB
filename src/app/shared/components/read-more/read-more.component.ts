import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.css'
})
export class ReadMoreComponent {
  @Input()
  text: string = '';
  @Input()
  length: number = 0;
  isCollapsed: boolean = false;
  constructor() { }

}
