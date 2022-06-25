import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'sample-app-styling';
  score:number = 0;
  constructor(private scoreService:ScoreService){}

  ngOnInit(): void {
      this.scoreService.currentScore.subscribe(data => this.score= data)
  }
}
