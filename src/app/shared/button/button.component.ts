import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  onClickButton() {
    console.log('Button clicked');
    this.onClick.emit();
  }
}
