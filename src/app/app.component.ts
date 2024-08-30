import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'test';
  constructor() {}

  ngOnInit(): void {
    this.initializeEventListeners();
    this.applyStoredTheme();
  }

  initializeEventListeners(): void {

    const sidebar = document.getElementById('sidebar');
    const buttonSidebar = document.getElementById('sidebar-toggle');

    buttonSidebar?.addEventListener('click', () => {
      if (sidebar) { 
        if (sidebar.style.maxWidth === "15vw" && sidebar.style.minWidth === "15vw") {
          sidebar.style.maxWidth = "0";
          sidebar.style.minWidth = "0";
        }else{
          sidebar.style.maxWidth = "15vw";
          sidebar.style.minWidth = "15vw";
        }
      }
    });

    const themeToggleButtons = document.querySelectorAll<HTMLButtonElement>("[data-bs-theme-value]");
    themeToggleButtons.forEach(button => {
      button.addEventListener("click", () => {
        const theme = button.getAttribute("data-bs-theme-value");
        this.setTheme(theme);
      });
    });
  }

  setTheme(theme: string | null): void {
    if (theme) {
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem("theme", theme);
    }
  }

  applyStoredTheme(): void {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.setAttribute('data-bs-theme', storedTheme);
    }
  }

  toggleRootClass(): void {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
  }

  toggleLocalStorage(): void {
    if (this.isLight()) {
      localStorage.removeItem("light");
    } else {
      localStorage.setItem("light", "set");
    }
  }

  isLight(): boolean {
    return localStorage.getItem("light") !== null;
  }
}