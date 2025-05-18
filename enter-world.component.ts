import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enter-world',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './enter-world.component.html',
  styleUrls: ['./enter-world.component.css']
})
export class EnterWorldComponent {

  constructor() {
    // Show popup after 2 seconds on page load
    setTimeout(() => {
      const popup = document.getElementById('popupBackdrop');
      if (popup) popup.style.display = 'flex';
    }, 2000);
  }

  closePopup(): void {
    const popup = document.getElementById('popupBackdrop');
    if (popup) popup.style.display = 'none';
  }
}




