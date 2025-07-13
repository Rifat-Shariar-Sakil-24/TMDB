import { Component, Input } from '@angular/core';
import { CastCard } from '../../../../core/models/cast.model';
import { CommonModule } from '@angular/common';
import { CastCardComponent } from "../../../../shared/components/cast-card/cast-card/cast-card.component";

@Component({
  selector: 'app-cast-list',
  standalone: true,
  imports: [CommonModule, CastCardComponent],
  templateUrl: './cast-list.component.html',
  styleUrl: './cast-list.component.css'
})
export class CastListComponent {
  @Input() castList : CastCard[] = [];
}
