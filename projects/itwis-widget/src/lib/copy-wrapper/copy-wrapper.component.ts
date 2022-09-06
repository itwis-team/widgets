import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {fromEvent, timer} from 'rxjs';
import {buffer, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'dlv',
  templateUrl: './copy-wrapper.component.html',
  styleUrls: ['./copy-wrapper.component.css'],
})
export class CopyWrapperComponent implements AfterViewInit {

  @ViewChild('wrapper') wrapper: any;

  readonly DEBOUNCE_TIME = 1000;
  readonly LOGO_SHOW_TIME = 6000;
  readonly CLICKS_TO_SHOW = 11;

  showLogo = false;

  constructor() {
  }

  ngAfterViewInit() {
    const click$ = fromEvent(this.wrapper.nativeElement, 'click');

    click$.pipe(
      buffer(click$.pipe(debounceTime(this.DEBOUNCE_TIME))),
    ).subscribe((clicksArray) => this.handleClicks(clicksArray.length));
  }

  handleClicks(clicks: number) {
    if (clicks >= this.CLICKS_TO_SHOW && !this.showLogo) {
      this.showLogo = true;
      timer(this.LOGO_SHOW_TIME).subscribe(() => this.showLogo = false);
    }
  }
}
