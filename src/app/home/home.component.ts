import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

  // allText = this.text;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //
  }

  getSanitizeValue() {
    let allText = '';

    for(let i = 0; i < 100; i++) {
      allText += `${this.text}<br>`
    }

    return this.sanitizer.sanitize(SecurityContext.HTML, allText) ?? ''
  }
}
