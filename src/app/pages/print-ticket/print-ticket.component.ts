import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'ngrome-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.scss']
})
export class PrintTicketComponent implements OnInit {

  selectedFirstname: string;
  selectedLastname: string;
  constructor(
    private route: ActivatedRoute,
    // private titoService: TitoService,
    private seoService: SeoService
  ) {



  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      console.log(params);
      console.log('firstname', params.firstname);
        this.selectedFirstname = params.firstname;
        this.selectedLastname = params.lastname;

        this.seoService.generateTags({
          title: `Ticket page: NGRome Conference Ticket for ${this.selectedFirstname} ${this.selectedLastname}`,
          image: `https://vercel-og-nextjs-eta-seven.vercel.app/api/og?firstname=${this.selectedFirstname}&lastname=${this.selectedLastname}`

        });
    });

  }

}
