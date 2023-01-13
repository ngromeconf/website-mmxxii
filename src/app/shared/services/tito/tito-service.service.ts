import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface TicketData {
  "id":number,
  "slug":string,
  "first_name":string,
  "last_name":string,
  "email":string,
  "company_name":string,
  "release_title":string,
  "reference":string,
  "registration_reference":string,
  "tags":null,
  "created_at":string,
  "updated_at": string
}

@Injectable({
  providedIn: 'root'
})
export class TitoService {

  //private checkInList = 'chk_pH6ySWdfLs7dI5CehX3DvNQ/';
  //https://api.tito.io/v3/:account_slug/:event_slug/tickets/:ticket_slug
  //http://localhost:4200/api.tito.io/ngrome-conf/ngrome-conf-mmxxii-dec-2022/tickets/pcGc7Gnf9YLjyJLJFpGK5SA
  private titoUrl = '/api.tito.io/ngrome-conf/ngrome-conf-mmxxii-dec-2022/tickets/'

  constructor(private http: HttpClient) { }

  getTicket(ticketSlug: string) {
    //this.testConnection();
    //check id format
    let ticketUrl = this.titoUrl + ticketSlug;
    console.log(ticketUrl)
    return this.http.get<TicketData[]>(ticketUrl);
  }

  testConnection(){
    this.http.get('/api.tito.io/hello').subscribe( result => {
      console.log(result);
    });
  }
}
