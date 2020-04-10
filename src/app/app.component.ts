import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Keepit Notes';
  isToggle: boolean;
  icon: string;
  in: string;
  val: string;
  animate;


  constructor(private sidbar: NbSidebarService) {}

  ngOnInit() {
    this.isToggle = false;
    this.icon = 'menu-2-outline';

  }

  toggle() {
    this.animate = '{animation: {type: "zoom"}}';
    this.isToggle = !this.isToggle;
    this.sidbar.toggle();
    if (this.isToggle) {
      this.icon = 'close-outline';
    } else {
      this.icon = 'menu-2-outline';
    }
    // console.log(this.isToggle)

  }

  close(){
    this.isToggle = false;
    this.icon = 'menu-2-outline';
    this.sidbar.collapse();
  }

}
