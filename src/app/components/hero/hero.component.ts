import { Component, inject, effect, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnDestroy {
  private readonly langService = inject(LanguageService);

  readonly t = this.langService.t;

  readonly orbPhase = signal<'hidden' | 'growing' | 'beating'>('hidden');

  readonly promptTyped = signal('');
  readonly promptDone = signal(false);

  readonly nameTyped = signal('');
  readonly nameDone = signal(false);

  readonly showRole     = signal(false);
  readonly showSubtitle = signal(false);
  readonly visibleBtns  = signal(0);
  readonly showScroll   = signal(false);

  private destroyed = false;
  private readonly PROMPT = 'user@portfolio:~/dev$ whoami';
  private readonly NAME   = 'Bernardo Braga';

  constructor() {
    effect(() => {
      if (this.langService.isSelected()) {
        this.runSequence();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  private async type(setter: (v: string) => void, text: string, speed: number): Promise<void> {
    for (let i = 0; i <= text.length; i++) {
      if (this.destroyed) return;
      setter(text.slice(0, i));
      if (i < text.length) await this.sleep(speed);
    }
  }

  private async runSequence(): Promise<void> {
    if (this.destroyed) return;

    this.orbPhase.set('growing');

    await this.sleep(180);
    if (this.destroyed) return;
    await this.type(v => this.promptTyped.set(v), this.PROMPT, 22);
    if (this.destroyed) return;
    this.promptDone.set(true);

    this.orbPhase.set('beating');

    await this.sleep(260);
    if (this.destroyed) return;
    await this.type(v => this.nameTyped.set(v), this.NAME, 62);
    if (this.destroyed) return;
    this.nameDone.set(true);

    await this.sleep(230);
    if (this.destroyed) return;
    this.showRole.set(true);

    await this.sleep(340);
    if (this.destroyed) return;
    this.showSubtitle.set(true);

    await this.sleep(420);
    if (this.destroyed) return;
    this.visibleBtns.set(1);

    await this.sleep(190);
    if (this.destroyed) return;
    this.visibleBtns.set(2);

    await this.sleep(190);
    if (this.destroyed) return;
    this.visibleBtns.set(3);

    await this.sleep(360);
    if (this.destroyed) return;
    this.showScroll.set(true);
  }
}
