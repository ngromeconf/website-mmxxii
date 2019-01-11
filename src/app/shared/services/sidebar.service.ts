import {BehaviorSubject} from 'rxjs';

export class SideBarService {

  private sidebarStatus = 'hidden';
  sidebarStatus$: BehaviorSubject<string> = new BehaviorSubject(this.sidebarStatus);

  toggleSidebarStatus = () => {
    this.sidebarStatus$.next(this.sidebarStatus === 'hidden' ? 'visible' : 'hidden');
    this.updateSidebarStatus();
  }

  updateSidebarStatus = () => this.sidebarStatus = this.sidebarStatus === 'hidden' ? 'visible' : 'hidden';

}

