import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private elem: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.elem.nativeElement.style.color = "red";
  }
}
