import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',

  imports: [RouterOutlet,Navbar,Footer,About,Projects,ContactComponent,Hero,CommonModule,FormsModule],
  
   template: `
<app-navbar></app-navbar>
<main class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<router-outlet></router-outlet>
</main>
`,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
