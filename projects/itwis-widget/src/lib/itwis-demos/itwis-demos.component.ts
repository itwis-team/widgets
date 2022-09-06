import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {interval, timer} from 'rxjs';
import {logoPaths} from '../../data/logo';

@Component({
  selector: 'itwis-demos',
  templateUrl: './itwis-demos.component.html',
  styleUrls: ['./itwis-demos.component.css'],
})
export class ItwisDemosComponent implements OnInit, AfterViewInit {

  @ViewChild('logo') logo: any;

  readonly LS_KEY = 'itwis-demos';
  logoPaths: { d: string, fill: string }[] = logoPaths;

  hideIntervalLogo: any;
  isDemos = false;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem(this.LS_KEY)) return;

    this.isDemos = true;
    document.body.style.overflow = 'hidden';
  }

  ngAfterViewInit() {
    timer(1500).subscribe(() => {
      this.destroyLogo();
    });
  }

  private destroyLogo() {
    this.hideIntervalLogo = interval(1).subscribe(() => {
      this.splitLogo();

      if (this.logoPaths.length <= 0) {
        this.hideIntervalLogo.unsubscribe();
        this.isDemos = false;
        document.body.style.overflow = 'visible';
        localStorage.setItem(this.LS_KEY, 'true');
      }
    });
  }

  private splitLogo() {
    if (this.logoPaths.length > 0) {
      const key = Math.floor(Math.random() * this.logoPaths.length);
      this.logoPaths.splice(key, 1);
    }
  }
}
