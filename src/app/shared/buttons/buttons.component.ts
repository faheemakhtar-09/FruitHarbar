import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() label: string = 'Button';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
