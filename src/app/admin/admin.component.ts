import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PortfolioService, WorkItem, KnowledgeItem, HomeData, AboutData, ContactItem } from '../services/portfolio.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    workItems: WorkItem[] = [];
    knowledgeItems: KnowledgeItem[] = [];
    contactItems: ContactItem[] = [];

    homeData: HomeData = { title: '', subtitle: '', description: '' };
    aboutData: AboutData = { title: '', intro: '', bio: [] };

    newWork: WorkItem = { id: 0, title: '', link: '', images: [], description: '' };
    newKnowledge: KnowledgeItem = { id: 0, name: '', image: '' };
    newContact: ContactItem = { id: 0, name: '', link: '', text: '' };

    newWorkImage = '';
    aboutBioText = '';

    constructor(private authService: AuthService, private portfolioService: PortfolioService) { }

    ngOnInit(): void {
        this.portfolioService.work$.subscribe(data => this.workItems = data);
        this.portfolioService.knowledge$.subscribe(data => this.knowledgeItems = data);
        this.portfolioService.contact$.subscribe(data => this.contactItems = data);

        this.portfolioService.home$.subscribe(data => this.homeData = { ...data });
        this.portfolioService.about$.subscribe(data => {
            this.aboutData = { ...data };
            this.aboutBioText = this.aboutData.bio.join('\n\n');
        });
    }

    logout() {
        this.authService.logout();
    }

    // Home Section
    saveHome() {
        this.portfolioService.updateHome(this.homeData);
        alert('Home section updated!');
    }

    // About Section
    saveAbout() {
        this.aboutData.bio = this.aboutBioText.split('\n\n').filter(p => p.trim().length > 0);
        this.portfolioService.updateAbout(this.aboutData);
        alert('About section updated!');
    }

    // Contact Section
    addContact() {
        this.newContact.id = Date.now();
        this.portfolioService.addContact({ ...this.newContact });
        this.newContact = { id: 0, name: '', link: '', text: '' };
    }

    deleteContact(id: number) {
        this.portfolioService.deleteContact(id);
    }

    // Work Section
    addWork() {
        this.newWork.id = Date.now();
        if (this.newWorkImage) {
            this.newWork.images.push(this.newWorkImage);
        }
        this.portfolioService.addWork({ ...this.newWork });
        this.newWork = { id: 0, title: '', link: '', images: [], description: '' };
        this.newWorkImage = '';
    }

    deleteWork(id: number) {
        this.portfolioService.deleteWork(id);
    }

    addWorkImage() {
        if (this.newWorkImage) {
            this.newWork.images.push(this.newWorkImage);
            this.newWorkImage = '';
        }
    }

    // Knowledge Section
    addKnowledge() {
        this.newKnowledge.id = Date.now();
        this.portfolioService.addKnowledge({ ...this.newKnowledge });
        this.newKnowledge = { id: 0, name: '', image: '' };
    }

    deleteKnowledge(id: number) {
        this.portfolioService.deleteKnowledge(id);
    }
}
