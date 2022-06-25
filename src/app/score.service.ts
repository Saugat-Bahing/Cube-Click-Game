import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  score:number = 0;
  position:number = 10;
  constructor() { }

  private Score = new BehaviorSubject(this.score)
  private Position = new BehaviorSubject(this.position)
  currentScore = this.Score.asObservable();
  currentPosition = this.Position.asObservable();

  changeScore(data:number) {

    this.Score.next(data);
  }

  changePosition(data:number){

    this.Position.next(data);
  }
}
