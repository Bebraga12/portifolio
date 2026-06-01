import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface SkillCategory {
  key: 'backend' | 'frontend' | 'infra' | 'ai' | 'practices';
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private readonly langService = inject(LanguageService);
  readonly t = this.langService.t;

  readonly categories: SkillCategory[] = [
    {
      key: 'backend',
      items: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'PostgreSQL', 'MySQL', 'SQL Server', 'Laravel', 'ASP.NET Core'],
    },
    {
      key: 'frontend',
      items: ['Angular', 'Ionic', 'JavaScript', 'TypeScript'],
    },
    {
      key: 'infra',
      items: ['Docker', 'Linux VPS', 'Ubuntu Server', 'Debian Server', 'VPS Cluster', 'Azure', 'Azure DevOps', 'AWS S3', 'Azure Blob Storage', 'Git', 'GitHub', 'Bitbucket'],
    },
    {
      key: 'ai',
      items: ['OpenAI API', 'Chatbots', 'AI Automation', 'Local LLMs'],
    },
    {
      key: 'practices',
      items: ['SOLID', 'Clean Code', 'Teamwork', 'Problem Solving'],
    },
  ];

  getCategoryLabel(key: SkillCategory['key']): string {
    return this.t().skills.categories[key];
  }
}
