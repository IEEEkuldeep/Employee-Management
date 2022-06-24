import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit, OnDestroy {
  
  // user: {name: string, id: number};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.user ={
    //   name: this.route.snapshot.params['name'],
    //   id: this.route.snapshot.params['id']
    // };
  }

  ngOnDestroy(): void {
    
  }

}
