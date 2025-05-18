import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,              // ✅ Required for routing without NgModule
   imports: [RouterModule],                   // ✅ Leave as is if no imported components
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']  // ✅ Must be plural
})
export class MainComponent { }
