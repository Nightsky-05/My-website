import { Routes } from '@angular/router';


import { MainComponent } from './pages/main/main.component';
import { EnterWorldComponent } from './pages/enter-world/enter-world.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InfoComponent } from './pages/info/info.component';
import { GameComponent } from './pages/game/game.component';
import { StoryComponent } from './pages/story/story.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'enter-world', component: EnterWorldComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'info', component: InfoComponent },
  { path: 'game', component: GameComponent },
  { path: 'story', component: StoryComponent }
];
