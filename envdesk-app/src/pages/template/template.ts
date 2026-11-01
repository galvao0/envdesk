import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LucideAngularModule,
  Flame,
  House,
  Plus,
  Dumbbell,
  Trophy,
  ListTodo,
} from 'lucide-angular';

@Component({
  selector: 'app-template',
  templateUrl: './template.html',
  styleUrl: './template.scss',
  imports: [RouterOutlet, LucideAngularModule],
})
export class Template {
  readonly Fire = Flame;
  readonly Home = House;
  readonly Plus = Plus;
  readonly Weight = Dumbbell;
  readonly Trophy = Trophy;
  readonly List = ListTodo;

  rAtual = '/';
}
