import { Component, OnInit } from '@angular/core';
import { PortfolioService, KnowledgeItem } from '../services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  knowledgeItems$: Observable<KnowledgeItem[]>;

  constructor(private portfolioService: PortfolioService) {
    this.knowledgeItems$ = this.portfolioService.knowledge$;
  }

  ngOnInit(): void {
  }

}
