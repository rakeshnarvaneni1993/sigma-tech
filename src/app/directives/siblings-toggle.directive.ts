import {Directive,ElementRef,HostListener,Renderer2} from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appSiblingsToggle]'
})
export class SiblingsToggleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {}

  @HostListener('click') clicked(eventData: Event) {
    $(this.element.nativeElement).siblings().toggle(500);
  }
}
