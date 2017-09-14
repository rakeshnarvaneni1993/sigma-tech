import {Directive,ElementRef,HostListener,Renderer2} from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appBorderBottomHover]'
})
export class BorderBottomHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') clicked(eventData: Event) {
    $(this.element.nativeElement).siblings().css('borderBottom', '4px solid #0088cc');
  }
  @HostListener('mouseleave') clickeda(eventData: Event) {
    $(this.element.nativeElement).siblings().css('border', '');
  }
}
