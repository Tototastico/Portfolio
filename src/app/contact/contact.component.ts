import { Component, OnInit } from '@angular/core';
import { PortfolioService, ContactItem } from '../services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactItems$: Observable<ContactItem[]>;

  constructor(private portfolioService: PortfolioService) {
    this.contactItems$ = this.portfolioService.contact$;
  }

  ngOnInit(): void {
  }

}
