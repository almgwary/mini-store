import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

// <img src="./assets/144p.png" alt="">

@Directive({
  selector: 'img'
})
export class ImgDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef) {
  
    }

  @HostListener('load') onLoad() {
    
    setTimeout(()=>{
      let newImage = this.el.nativeElement.src;
      newImage = newImage.replace('720', '1080');
      newImage = newImage.replace('144', '720');

      this.renderer.setAttribute(this.el.nativeElement, 'src',newImage);
    },2000)
  }
  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', './assets/error.png');
  }

}
