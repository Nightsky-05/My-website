import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit() {
    const potion = document.getElementById('potionTrigger');
    const fill = document.getElementById('potionFill');
    const content = document.getElementById('magicalContent');
    const closeBtn = document.getElementById('closeButton'); // added

    if (potion && fill && content) {
      potion.addEventListener('click', () => {
        fill.style.height = '100%';
        potion.style.display = 'none';

        setTimeout(() => {
          content.style.opacity = '1';
          if (closeBtn) closeBtn.classList.add('show'); // show close button
        }, 4000);
      });
    }

    // Close button logic
    if (closeBtn && fill && content && potion) {
      closeBtn.addEventListener('click', () => {
        fill.style.height = '0';
        content.style.opacity = '0';
        closeBtn.classList.remove('show');

        setTimeout(() => {
          potion.style.display = 'block';
        }, 3000);
      });
    }
  }
}
