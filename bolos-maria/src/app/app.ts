import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBackgroundLayout } from "./components/main-background-layout/main-background-layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainBackgroundLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bolos-maria');
}
