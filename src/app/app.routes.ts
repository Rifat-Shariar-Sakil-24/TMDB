import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

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
        component: PersonDetailsComponent
    },

    {
        path : 'search/movie',
        component: SearchResultsComponent
    },

];
