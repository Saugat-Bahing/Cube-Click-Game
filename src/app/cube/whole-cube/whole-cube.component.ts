import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-whole-cube',
  templateUrl: './whole-cube.component.html',
  styleUrls: ['./whole-cube.component.css']
})
export class WholeCubeComponent implements OnInit {

  items: string[] = [];
  position: number = 40;
  right:string = "20";
  right1:string = "40";
  
  constructor(private scoreService:ScoreService) { }

  ngOnInit(): void {

    this.scoreService.currentPosition.subscribe(data => this.position =data)

    for (let i = 0; i < 5; i++) {

      setTimeout(() => {
        setTimeout(()=>{
          this.right = this.position.toString() + "vw";
           this.right1 = (this.position+20).toString()+"vw";
        }, 100)
        let item = "cube" + i.toString()
        this.items.push(item);
      }, 2000 * i)
    }
  }
  

}


