import { Component, OnInit } from '@angular/core';
import { PortfolioService, WorkItem } from '../services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workItems$: Observable<WorkItem[]>;

  constructor(private portfolioService: PortfolioService) {
    this.workItems$ = this.portfolioService.work$;
  }

  ngOnInit(): void {
  }

}
