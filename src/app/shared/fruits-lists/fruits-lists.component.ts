import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-fruits-lists',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './fruits-lists.component.html',
  styleUrl: './fruits-lists.component.css'
})
export class FruitsListsComponent {
  @Input() contents: Array<{ image: string; alt: string; text: string; heading:string }> = [];
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  onClick(): void {
    this.clicked.emit();
  }
  onButtonClick(content: { image: string; alt: string; text: string }): void {
    console.log('Button clicked for:', content);
  }

}
