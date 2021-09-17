import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjektService} from '../services/projekt.service';
import {Projekt} from '../model/Projekt';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';


@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjekteComponent implements OnInit {
  hover:boolean;
  projekte:Projekt[] = new Array();
  constructor(private projekService:ProjektService,private router:Router,private route:ActivatedRoute,private scroller:ViewportScroller) { }

  ngOnInit(): void {
    this.projekte = this.projekService.projekte;
    //this.projekte = this.shuffleArray(this.projekte);
  }
  clickProject(it:number){
    const url = this.route + '/'+it;
    console.log(url);

    // console.log(it);
    // console.log(this.projekte[it].githubLink);
    //
    // window.open(this.projekte[it].githubLink);
  }
  scrollProjectes(){
    this.scroller.scrollToAnchor("projekt")
  }
  shuffleArray(arr){
    let currentIndex = arr.length, randomIndex;
    while(currentIndex !=0){
      randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex--;
      [arr[currentIndex],arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]];
    }
    return arr;
  }
}
