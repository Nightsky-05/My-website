import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Optional animations can go here
  }
}

declare global {
  interface Window {
    revealPersonality: () => void;
    generateStory: (id: number) => void;
    saveUserStory: () => void;
  }
}

// Descriptions and traits based on zodiac
const traits: Record<string, {
  description: string,
  eyeColor: string,
  hairColor: string,
  power: string,
  creature: string
}> = {
  Aries: {
    description: 'a bold and fiery warrior of the stars, symbolized by the blazing ram and ruled by Mars, the planet of courage.',
    eyeColor: 'crimson',
    hairColor: 'flame-orange',
    power: 'Fire Summoning',
    creature: 'Starborn Warrior'
  },
  Taurus: {
    description: 'a grounded guardian of enchanted forests, bearing the sacred sigil of the earthhorn and ruled by Venus, goddess of beauty.',
    eyeColor: 'emerald green',
    hairColor: 'earth brown',
    power: 'Nature’s Embrace',
    creature: 'Forest Guardian'
  },
  Gemini: {
    description: 'a dual-wielding trickster with celestial wit, guided by twin stars and ruled by Mercury, the messenger of magic.',
    eyeColor: 'silver',
    hairColor: 'sunlight blonde',
    power: 'Illusion Casting',
    creature: 'Celestial Trickster'
  },
  Cancer: {
    description: 'a protective moon mage of the tides, wearing the silver shell of destiny and governed by the moon’s mystical pull.',
    eyeColor: 'moonlight blue',
    hairColor: 'pearl white',
    power: 'Tidal Shields',
    creature: 'Moon Mage'
  },
  Leo: {
    description: 'a radiant flame-bearer with royal blood, marked by the golden lion crest and ruled by the sun itself.',
    eyeColor: 'gold',
    hairColor: 'sunset auburn',
    power: 'Solar Radiance',
    creature: 'Sunfire Monarch'
  },
  Virgo: {
    description: 'a wise timekeeper of the ancient scrolls, blessed with the rune of purity and ruled by Mercury’s insight.',
    eyeColor: 'hazel',
    hairColor: 'platinum silver',
    power: 'Chrono Vision',
    creature: 'Runescribe'
  },
  Libra: {
    description: 'a harmony weaver balancing dark and light, marked with the sigil of starlit scales and ruled by the planet Venus.',
    eyeColor: 'ice blue',
    hairColor: 'lavender grey',
    power: 'Balance Aura',
    creature: 'Starweaver'
  },
  Scorpio: {
    description: 'a mysterious shadow stalker with stinger magic, bearing the obsidian scorpion mark and ruled by Pluto, the lord of rebirth.',
    eyeColor: 'deep violet',
    hairColor: 'raven black',
    power: 'Shadowstep',
    creature: 'Obsidian Warden'
  },
  Sagittarius: {
    description: 'an arrow-flinging dream chaser of the skies, guided by constellation glyphs and ruled by Jupiter’s expansion.',
    eyeColor: 'sky teal',
    hairColor: 'starlight silver',
    power: 'Celestial Arrows',
    creature: 'Skyborne Archer'
  },
  Capricorn: {
    description: 'a mountain-climber of magical discipline, carrying the sacred horn of ambition and ruled by Saturn’s ancient wisdom.',
    eyeColor: 'granite grey',
    hairColor: 'ash blonde',
    power: 'Stonebound Will',
    creature: 'Horned Sentinel'
  },
  Aquarius: {
    description: 'an aqua-summoner with winds of change, bearing the wave symbol and ruled by Uranus, keeper of transformation.',
    eyeColor: 'aqua',
    hairColor: 'mist blue',
    power: 'Storm Whisper',
    creature: 'Water Oracle'
  },
  Pisces: {
    description: 'a dreamy illusionist from the deep ocean realm, wearing the twin fish sigil and ruled by Neptune’s mystic veil.',
    eyeColor: 'seafoam green',
    hairColor: 'coral pink',
    power: 'Dream Weaving',
    creature: 'Ocean Illusionist'
  }
};

window.revealPersonality = function () {
  const zodiac = (document.getElementById('zodiacs') as HTMLSelectElement).value;
  const personalityBox = document.getElementById('personalityReveal');
  const trait = traits[zodiac];

  if (personalityBox && trait) {
    personalityBox.innerHTML = `
      🧚‍♂️ You are a mystical <strong>${trait.creature}</strong>, born of ancient magic and destined to walk between worlds.<br><br>
      👁️ Your eyes shimmer like <span style="color:${trait.eyeColor}; font-weight:bold;">${trait.eyeColor}</span>, reflecting forgotten constellations,<br>
      and your hair flows like enchanted silk in the hue of <span style="color:${trait.hairColor}; font-weight:bold;">${trait.hairColor}</span>.<br><br>
      ✨ You are gifted with the power of <strong>${trait.power}</strong>, an ability granted only to those chosen by the Celestial Council.<br>
      This power pulses with <em>arcane runes</em> and is connected to your soul’s elemental core.<br><br>
      ♒ As a <strong>${zodiac}</strong>, you are ${trait.description}<br><br>
      🪄 Your aura glows with <strong>ancient sigils</strong>, and your presence awakens symbols that respond only to true magic.<br>
      You are guided by fate, bound to a sacred path that weaves between dreams, stars, and the spirit realms...<br>
      🌌 Your destiny is not just written in the stars — it <strong>creates</strong> them.
    `;
  }
};

window.saveUserStory = function () {
  const text = (document.getElementById('userStory') as HTMLTextAreaElement).value;
  const msg = document.getElementById('savedMessage');
  if (text.length > 5 && msg) {
    localStorage.setItem('savedStory', text);
    msg.textContent = '🌟 Your story has been woven into the fabric of eternity!';
  }
};

window.generateStory = function (id: number) {
  const box = document.getElementById('generatedStory');
  if (!box) return;

  const stories = [
    `Once upon a time, hidden deep within the heart of the Whispering Woods, lay a secret haven known only to those pure of heart—the Crystal Grove. Bathed in the soft shimmer of moonlight, the grove sparkled with trees made of translucent crystal, their branches chiming gently in the breeze like a lullaby for the stars.

It was said that the grove granted a single wish to any who found it and proved themselves worthy. One chilly twilight, a kind-hearted girl named Elira, seeking to heal her ailing village, followed a trail of glowing butterflies into the woods. She spoke not a word but listened—truly listened—to the forest’s heartbeat.

When she stepped into the grove, the crystals pulsed with a warm, welcoming glow. A gentle voice echoed, “What is your wish, child of light?”

Elira bowed her head and whispered, “Let my people thrive again, with hope in their hearts and warmth in their homes.”

The crystals sang in harmony, and from that night on, her village knew no hunger, no sorrow, only joy and the soft, echoing song of the enchanted grove that had once answered a selfless wish.

The end...`,
    `In a forgotten glade where moonflowers bloom only under silver light, there lived a sorceress named Elira, cloaked in twilight and crowned with stardust. She walked the midnight woods with bare feet and whispered to the owls, drawing ancient runes in the air that shimmered like fireflies.

Each night, she summoned the moonlight into her hands, weaving spells to protect the dreams of wandering spirits and lost children. Her magic was soft and powerful — not of thunder and flames, but of memories, hope, and lullabies sung by wind and stars.

One evening, the moon did not rise.

Darkness swallowed the forest, and even the stars turned their eyes away. Elira stood at the edge of the world, her heart pulsing with the silence. With her last spell, she cast her soul into the sky, reigniting the moon with her light — so others would never fear the night again.

Now, when you see the moon glowing brighter than usual, know that the Moonlit Sorceress is watching still, guarding the dreams of those who believe in magic.

The end`,
    `Once upon a time, in the fiery heart of the Ashen Peaks, there existed an ancient rite known only as The Ember Trials. Each century, the flames of the dormant volcano would stir, summoning a worthy soul to face the elemental trials of fire, spirit, and truth.

Kaelin, a young orphan with a heart full of courage and a pendant that pulsed with emberlight, was chosen by fate. Guided by the whispers of the Flame Warden, she ventured into the molten caverns, where lava flowed like rivers and shadows danced like spirits.

Her first trial tested her endurance — walking barefoot across a path of searing coals. With each step, memories of her village’s ruin gave her strength. The second trial tested her heart — a mirror of flame that revealed her darkest fears. She stood tall, facing the vision of herself consumed by vengeance, and let it burn away.

The final trial was the hardest: she had to reignite the Ember Core, the dying heart of the volcano, using nothing but her inner flame. Kneeling before the ancient forge, she closed her eyes and whispered a promise — not of power, but of peace. A single tear fell, glowing with emberlight, and the mountain roared back to life.

Kaelin emerged from the trials, crowned not in gold, but in firelight. The skies above the Ashen Peaks burned with auroras, and the people below knew a new guardian had been born.

The end`
  ];

  box.innerHTML = stories[id - 1] || '✨ A magical tale awaits, waiting to be told... ✨';
};
