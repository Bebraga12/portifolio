import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly langService = inject(LanguageService);
  readonly t = this.langService.t;

  readonly email = 'bebraga12@gmail.com';
  readonly github = 'https://github.com/Bebraga12';
  readonly linkedin = 'https://www.linkedin.com/in/be-braga';
}
