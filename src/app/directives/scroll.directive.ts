import {Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(element: ElementRef) {
    window.addEventListener('scroll' , (e) => {

      if (window.pageYOffset > 100) {
        element.nativeElement.classList.add('stick');
      } else {
        element.nativeElement.classList.remove('stick');
      }
    });
  }
  }
  // @HostListener('scroll') scrolling() {
  //   console.log(document.body.scrollTop);
  //   console.log(window.scrollY);
  //   console.log('scrolling');
  // }
// }
