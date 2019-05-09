import { Injectable, HostListener } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PWAService {

  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }

  constructor(private swUpdate: SwUpdate) {}

  public checkUpdateAvailable(){
    if (this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe( () => {
        if (confirm("New version available, Load a new version?")){
          window.location.reload();
        }
      });
    }
  }



}
