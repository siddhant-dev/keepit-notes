import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotesService } from '../services/notes.service';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  list: any;
  col = 4;
  innerWidth: any;
  sub: Subscription;
  constructor( private notes: NotesService) {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    if (this.innerWidth < 820) {
      this.col = 2;
    } else {
      this.col = 4;
    }
  }
    ngOnInit() {
      this.innerWidth = window.innerWidth;
      // console.log(this.innerWidth);
      if (this.innerWidth < 820) {
      this.col = 2;
    } else {
      this.col = 4;
    }

      this.sub =  this.notes.getNote().subscribe(pay => {
        this.list = pay;
      });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
