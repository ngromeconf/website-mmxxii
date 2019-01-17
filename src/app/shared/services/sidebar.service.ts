import {BehaviorSubject} from 'rxjs';

export class SideBarService {

  private sidebarStatus = 'hidden';
  sidebarStatus$: BehaviorSubject<string> = new BehaviorSubject(this.sidebarStatus);

  toggleSidebarStatus = (status = false) => {
    if (!status) {
      this.sidebarStatus$.next(this.sidebarStatus === 'hidden' ? 'visible' : 'hidden');
      console.log(this.sidebarStatus);
      this.updateSidebarStatus();
    } else if (status && this.sidebarStatus === 'visible') {
      this.sidebarStatus$.next('hidden');
      console.log(this.sidebarStatus);
      this.updateSidebarStatus();
    }
    return;
  }

  updateSidebarStatus = () => this.sidebarStatus = this.sidebarStatus === 'hidden' ? 'visible' : 'hidden';

}

