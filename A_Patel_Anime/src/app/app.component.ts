import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { ContentCardComponent } from './content-card/content-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A_Patel_Anime';
}
