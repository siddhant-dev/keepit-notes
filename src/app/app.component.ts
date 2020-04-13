import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AccessService } from './services/access.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Keepit Notes';
  isToggle: boolean;
  icon: string;
  in: string;
  val: string;
  animate;
  name: string;
  email: string;
  sub: Subscription;


  constructor(private sidbar: NbSidebarService, public access: AccessService) {
    this.sub = this.access.user$.subscribe(pay => {
      if (pay) {
        this.name = pay.name;
        this.email = pay.email;
      }

    });

  }

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

  close() {
    this.isToggle = false;
    this.icon = 'menu-2-outline';
    this.sidbar.collapse();
  }

  logOut() {
    this.access.signOut();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
