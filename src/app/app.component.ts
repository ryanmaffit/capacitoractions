import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CapacitorActions';
  events: { time: Date, message: string, event: any }[] = [];

  async ngOnInit() {
    this.events.push({
      time: new Date(),
      message: 'ngOnInit()',
      event: 'App Initialized'
    });
    
    if(Capacitor.isNativePlatform())
    {
      this.events.push({
        time: new Date(),
        message: 'getInfo()',
        event: await App.getInfo()
      });
      
      App.addListener('appStateChange', (event) => this.events.push({ time: new Date(), message: 'appStateChange', event }));
      App.addListener('pause', () => this.events.push({ time: new Date(), message: 'pause', event: null }));
      App.addListener('resume', () => this.events.push({ time: new Date(), message: 'resume', event: null }));
      App.addListener('appUrlOpen', (event) => this.events.push({ time: new Date(), message: 'appUrlOpen', event }));
      App.addListener('appRestoredResult', (event) => this.events.push({ time: new Date(), message: 'appRestoredResult', event }));
      App.addListener('backButton', (event) => this.events.push({ time: new Date(), message: 'backButton', event }));
    }
  }

}
