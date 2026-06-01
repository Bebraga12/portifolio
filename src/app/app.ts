import { Component, signal, effect, inject } from '@angular/core';
import { LanguageService } from './services/language.service';
import { LanguagePopupComponent } from './components/language-popup/language-popup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LanguagePopupComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly langService = inject(LanguageService);
  readonly showLangPopup = signal(true);

  constructor() {
    effect(() => {
      if (this.langService.isSelected()) {
        this.showLangPopup.set(false);
      }
    });
  }
}
