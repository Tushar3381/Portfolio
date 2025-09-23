import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,  
  imports: [RouterLink,CommonModule,RouterLinkActive], 
  
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
 isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}







