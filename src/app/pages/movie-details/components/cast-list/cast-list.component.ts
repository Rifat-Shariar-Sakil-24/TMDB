import { Component, Input } from '@angular/core';
import { CastMember } from '../../../../core/models/movie.model';
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
  @Input() castList : CastMember[] = [];
}
