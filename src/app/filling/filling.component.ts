import { Component, OnInit } from '@angular/core';
import { PortfolioService, HomeData } from '../services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filling',
  templateUrl: './filling.component.html',
  styleUrls: ['./filling.component.css']
})
export class FillingComponent implements OnInit {

  homeData$: Observable<HomeData>;

  constructor(private portfolioService: PortfolioService) {
    this.homeData$ = this.portfolioService.home$;
  }

  ngOnInit(): void {
  }

}
