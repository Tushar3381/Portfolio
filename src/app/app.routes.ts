import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { SkillsComponent } from './components/skill/skill';

// ✅ Export the routes so other files can import it
export const routes: Routes = [
  { path: '', component: Hero },
  
  { path: 'about', component: About },
  {path: 'skills',component:SkillsComponent},
  { path: 'projects', component: Projects },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

