import {BehaviorSubject} from 'rxjs';

export class SideBarService {

  private sidebarStatus = 'hidden';
  sidebarStatus$: BehaviorSubject<string> = new BehaviorSubject(this.sidebarStatus);

  toggleSidebarStatus = () => {
    this.sidebarStatus$.next(this.sidebarStatus === 'hidden' ? 'visible' : 'hidden');
    console.log(this.sidebarStatus);
    this.updateSidebarStatus();
  }

  updateSidebarStatus = () => this.sidebarStatus = this.sidebarStatus === 'hidden' ? 'visible' : 'hidden';

}

