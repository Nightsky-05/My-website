import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {

  cards: { image: string; name: string; description: string; flipped: boolean; matched: boolean }[] = [];
  flippedIndexes: number[] = [];
  matchedCards: number = 0;
  popupDisplay: string = 'none';
  currentMatch: { name: string; description: string } | null = null;

  @ViewChild('matchSound') matchSound!: ElementRef<HTMLAudioElement>;
  @ViewChild('wrongSound') wrongSound!: ElementRef<HTMLAudioElement>;

  constructor() {
    this.popupDisplay = 'none';
    this.resetGame();
  }

  ngAfterViewInit(): void {}

  flipCard(index: number): void {
    const card = this.cards[index];

    if (card.flipped || card.matched || this.flippedIndexes.length >= 2) {
      return;
    }

    card.flipped = true;
    this.flippedIndexes.push(index);

    if (this.flippedIndexes.length === 2) {
      setTimeout(() => this.checkMatch(), 800);
    }
  }

  checkMatch(): void {
    const [firstIndex, secondIndex] = this.flippedIndexes;
    const firstCard = this.cards[firstIndex];
    const secondCard = this.cards[secondIndex];

    if (firstCard.image === secondCard.image) {
      firstCard.matched = true;
      secondCard.matched = true;
      this.matchedCards += 2;
      this.matchSound.nativeElement.play();

      this.currentMatch = {
        name: firstCard.name,
        description: firstCard.description
      };

      setTimeout(() => {
        this.currentMatch = null;
        if (this.matchedCards === this.cards.length) {
          this.popupDisplay = 'block';
        }
      }, 3000);
    } else {
      firstCard.flipped = false;
      secondCard.flipped = false;
      this.wrongSound.nativeElement.play();
    }

    this.flippedIndexes = [];
  }

  resetGameAgain(): void {
    this.resetGame();
  }

  resetGame(): void {
    this.popupDisplay = 'none';
    this.currentMatch = null;
    this.flippedIndexes = [];
    this.matchedCards = 0;
    this.cards = [];

    const creatureData = [
      { image: 'pega.jpg', name: 'Pegasus', description: 'A winged divine horse, symbolizing wisdom and inspiration.' },
      { image: 'phone.jpeg', name: 'Phoenix', description: 'A bird reborn from ashes, representing immortality and renewal.' },
      { image: 'mermaid.jpg', name: 'Mermaid', description: 'A mystical being of the sea with a fish tail and enchanting beauty.' },
      { image: 'griffin.jpg', name: 'Griffin', description: 'A noble creature with the body of a lion and the wings of an eagle.' },
      { image: 'fairy.jpg', name: 'Fairy', description: 'A tiny magical creature known for granting wishes and playing tricks.' },
      { image: 'dragon.jpg', name: 'Dragon', description: 'A fire-breathing beast guarding ancient treasures and ancient wisdom.' },
      { image: 'chimera.jpg', name: 'Chimera', description: 'A monstrous hybrid with the head of a lion, goat, and serpent.' },
      { image: 'werie.png', name: 'Werewolf', description: 'A cursed being that transforms into a wolf under the full moon.' }
    ];

    const duplicated = [...creatureData, ...creatureData];
    const shuffled = duplicated.sort(() => Math.random() > 0.5 ? 1 : -1);

    for (let i = 0; i < shuffled.length; i++) {
      this.cards.push({
        ...shuffled[i],
        flipped: false,
        matched: false
      });
    }
  }
}
