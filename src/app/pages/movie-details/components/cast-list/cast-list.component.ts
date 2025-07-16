import { Component, Input } from '@angular/core';
import { PersonCard } from '../../../../core/models/person.model';
import { CommonModule } from '@angular/common';
import { CastCardComponent } from "../../../../shared/components/cast-card/cast-card/cast-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cast-list',
  standalone: true,
  imports: [CommonModule, CastCardComponent, RouterLink],
  templateUrl: './cast-list.component.html',
  styleUrl: './cast-list.component.css'
})
export class CastListComponent {
  @Input() castList : PersonCard[] = [];
}
