import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // ✅ Import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // 👈 this is required
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showIntro = true;

  constructor() {
    setTimeout(() => {
      this.showIntro = false;
      const bg = document.getElementById('bg');
      if (bg) {
        bg.classList.remove('hidden');
      }
    }, 6000);
  }
}



