import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements AfterViewInit {
  // Track which sections are open
  private openSections: { [key: string]: boolean } = {};

  ngAfterViewInit() {
    // Expose these to global HTML context
    
    (window as any).showPopup = this.showPopup.bind(this);
    (window as any).hidePopup = this.hidePopup.bind(this);
    (window as any).toggleSection = this.toggleSection.bind(this);
  }

  toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    this.openSections[sectionId] = !this.openSections[sectionId];

    if (section) {
      section.style.display = this.openSections[sectionId] ? 'flex' : 'none';
    }
  }

  showPopup(name: string, imagePath: string, description: string): void {
    const title = document.getElementById('popupTitle');
    const image = document.getElementById('popupImage') as HTMLImageElement;
    const desc = document.getElementById('popupDescription');
    const overlay = document.getElementById('popupOverlay');

    if (title && image && desc && overlay) {
      title.textContent = name;
      image.src = imagePath;
      desc.textContent = description;
      overlay.style.display = 'flex';
    }
  }

  hidePopup(): void {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) overlay.style.display = 'none';
  }
}
