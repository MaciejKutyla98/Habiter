import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  githubLink: string = 'https://github.com/MaciejKutyla98'

  goToGithub(url: string): void {
    window.open(url, "_blank");
  }
}
