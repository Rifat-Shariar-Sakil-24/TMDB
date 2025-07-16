import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HomeComponent } from './pages/home/home.component';
import { CastDetailsComponent } from './pages/cast-details/cast-details/cast-details.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'movie/:id',
        component: MovieDetailsComponent
    },

    {
        path : 'person/:id',
        component: CastDetailsComponent
    },

];
