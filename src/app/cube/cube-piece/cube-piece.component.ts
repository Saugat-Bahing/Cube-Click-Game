import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-cube-piece',
  templateUrl: './cube-piece.component.html',
  styleUrls: ['./cube-piece.component.css']
})
export class CubePieceComponent implements OnInit {

  score:number = 0;
  position:number = 10;
  constructor(private scoreService:ScoreService) { }

  ngOnInit(): void {

    this.scoreService.currentScore.subscribe(data => this.score = data);
    this.scoreService.currentPosition.subscribe(data => this.position = data)

}

  kill(event:any){
    let box = event.target.parentNode;
    console.log(event);
    console.log(event.target.parentNode);
    this.score += 1;
    this.position = Math.random()*50;
    this.scoreService.changeScore(this.score);
    this.scoreService.changePosition(this.position);
    box.parentNode.removeChild(box);
  }
}
