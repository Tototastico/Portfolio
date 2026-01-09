import { Component, OnInit } from '@angular/core';
import { PortfolioService, AboutData } from '../services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutData$: Observable<AboutData>;

  constructor(private portfolioService: PortfolioService) {
    this.aboutData$ = this.portfolioService.about$;
  }

  ngOnInit(): void {
  }

}
