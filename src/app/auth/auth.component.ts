import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'btk-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChild('heroHalf') heroHalf: ElementRef<HTMLElement>;

  isMobileDevice = false;
  imgSrcs = [
    'https://cdn.zmescience.com/wp-content/uploads/2015/04/Girl-reading-book-.jpg',
    'https://imgix.bustle.com/rehost/2017/5/30/20129bf4-6e0d-4101-afe4-994adaf4c2ae.jpg',
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/10/05/17/man-reading-book-outside.jpg',
    'https://png.pngtree.com/thumb_back/fh260/photos/md/2017-11-07/person_reading_a_book_uses_their_finger_to_keep_their_page.jpg'
  ];

  constructor(private _query: BreakpointObserver) {}

  ngOnInit() {
    this.isMobile();
  }

  ngAfterViewInit(): void {
    this.changeImage();
    if (!this.isMobileDevice) {
      setInterval(() => this.changeImage(), 10000);
    }
  }

  changeImage = () => {
    this.heroHalf.nativeElement.style[
      'backgroundImage'
    ] = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${this.getRandomImage()})`;
  };

  getRandomImage = (): string =>
    this.imgSrcs[Math.floor(Math.random() * this.imgSrcs.length)]

  isMobile = () =>
    this._query
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(res => (this.isMobileDevice = res.matches))
}
