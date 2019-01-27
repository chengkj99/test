import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {}

  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
