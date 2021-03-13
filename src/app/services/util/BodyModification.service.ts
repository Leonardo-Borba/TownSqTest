import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyModificationService {

  private renderer: Renderer2;

constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) { 
  this.renderer = rendererFactory.createRenderer(null, null);
}

  toggleClass( className: string){
    const hasClass = document.body.classList.contains(className);

    if(hasClass)
      this.renderer.removeClass(this.document.body, className);
    else
    this.renderer.addClass(this.document.body, className);
  }

}
