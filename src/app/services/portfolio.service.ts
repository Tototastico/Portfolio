import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface WorkItem {
    id: number;
    title: string;
    link: string;
    images: string[];
    description: string;
}

export interface KnowledgeItem {
    id: number;
    name: string;
    image: string;
}

export interface HomeData {
    title: string;
    subtitle: string;
    description: string;
}

export interface AboutData {
    title: string;
    intro: string;
    bio: string[];
}

export interface ContactItem {
    id: number;
    name: string;
    link: string;
    text: string;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    private workData: WorkItem[] = [
        {
            id: 1,
            title: "Go up cloud",
            link: "https://www.goup.cloud/project/procesamiento-con-analisis-cognitivo-para-datos-clinicos-en-azure/",
            images: ["assets/infraestructura.png", "assets/azure-health.png"],
            description: "Internship at Go Up Cloud in Chile, as a data engineering experience in challenging projects, and professional growth."
        }
    ];

    private knowledgeData: KnowledgeItem[] = [
        { id: 1, name: 'Python', image: 'assets/python.png' },
        { id: 2, name: 'Azure', image: 'assets/azure.png' },
        { id: 3, name: 'MongoDB', image: 'assets/mongodb.png' },
        { id: 4, name: 'SQL', image: 'assets/sql.png' },
        { id: 5, name: 'Docker', image: 'assets/docker.png' },
        { id: 6, name: 'NoSQL', image: 'assets/nosql.png' },
        { id: 7, name: 'PowerBI', image: 'assets/powerbi.png' },
        { id: 8, name: 'Numpy', image: 'assets/numpy.png' },
        { id: 9, name: 'Tensorflow', image: 'assets/tensorflow.png' },
        { id: 10, name: 'Tableau', image: 'assets/tableau.png' },
        { id: 11, name: 'Git', image: 'assets/git.png' },
        { id: 12, name: 'Scikit', image: 'assets/scikit-learn.png' },
        { id: 13, name: 'MySQL', image: 'assets/mysql.png' },
        { id: 14, name: 'Pandas', image: 'assets/pandas.png' },
        { id: 15, name: 'AirFlow', image: 'assets/airflow.png' }
    ];

    private homeData: HomeData = {
        title: "Hi, I'm Tobi.",
        subtitle: "Data Analyst. Person",
        description: "I'm a Data Analyst\nwho turned his passion into a daily job. \nGrowing up every day on a world fully of data."
    };

    private aboutData: AboutData = {
        title: "My name is Tobias Sirne.",
        intro: "I'm 19 years old\nI'm a Data Scientist",
        bio: [
            "With experience using SQL, Python and PowerBI for data analysis.\nI have worked on data cleaning, data visualization,\nand predictive modeling projects using Scikit or Tensorflow.",
            "I have experience working on a Tech Startup\nas a Machine Learning dev, and Data Engineering."
        ]
    };

    private contactData: ContactItem[] = [
        { id: 1, name: 'LinkedIn', link: 'https://www.linkedin.com/in/tobias-sirne/', text: 'Connect on LinkedIn' },
        { id: 2, name: 'GitHub', link: 'https://github.com/Tototastico', text: 'Follow on GitHub' },
        { id: 3, name: 'Email', link: 'mailto:tobiassirne@gmail.com', text: 'tobiassirne@gmail.com' }
    ];

    private workSubject = new BehaviorSubject<WorkItem[]>(this.workData);
    private knowledgeSubject = new BehaviorSubject<KnowledgeItem[]>(this.knowledgeData);
    private homeSubject = new BehaviorSubject<HomeData>(this.homeData);
    private aboutSubject = new BehaviorSubject<AboutData>(this.aboutData);
    private contactSubject = new BehaviorSubject<ContactItem[]>(this.contactData);

    work$ = this.workSubject.asObservable();
    knowledge$ = this.knowledgeSubject.asObservable();
    home$ = this.homeSubject.asObservable();
    about$ = this.aboutSubject.asObservable();
    contact$ = this.contactSubject.asObservable();

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage() {
        const storedWork = localStorage.getItem('workData');
        if (storedWork) {
            this.workData = JSON.parse(storedWork);
            this.workSubject.next(this.workData);
        }

        const storedKnowledge = localStorage.getItem('knowledgeData');
        if (storedKnowledge) {
            this.knowledgeData = JSON.parse(storedKnowledge);
            this.knowledgeSubject.next(this.knowledgeData);
        }

        const storedHome = localStorage.getItem('homeData');
        if (storedHome) {
            this.homeData = JSON.parse(storedHome);
            this.homeSubject.next(this.homeData);
        }

        const storedAbout = localStorage.getItem('aboutData');
        if (storedAbout) {
            this.aboutData = JSON.parse(storedAbout);
            this.aboutSubject.next(this.aboutData);
        }

        const storedContact = localStorage.getItem('contactData');
        if (storedContact) {
            this.contactData = JSON.parse(storedContact);
            this.contactSubject.next(this.contactData);
        }
    }

    private saveToStorage() {
        localStorage.setItem('workData', JSON.stringify(this.workData));
        localStorage.setItem('knowledgeData', JSON.stringify(this.knowledgeData));
        localStorage.setItem('homeData', JSON.stringify(this.homeData));
        localStorage.setItem('aboutData', JSON.stringify(this.aboutData));
        localStorage.setItem('contactData', JSON.stringify(this.contactData));
    }

    updateWork(data: WorkItem[]) {
        this.workData = data;
        this.workSubject.next(this.workData);
        this.saveToStorage();
    }

    addWork(item: WorkItem) {
        this.workData.push(item);
        this.workSubject.next(this.workData);
        this.saveToStorage();
    }

    deleteWork(id: number) {
        this.workData = this.workData.filter(w => w.id !== id);
        this.workSubject.next(this.workData);
        this.saveToStorage();
    }

    updateKnowledge(data: KnowledgeItem[]) {
        this.knowledgeData = data;
        this.knowledgeSubject.next(this.knowledgeData);
        this.saveToStorage();
    }

    addKnowledge(item: KnowledgeItem) {
        this.knowledgeData.push(item);
        this.knowledgeSubject.next(this.knowledgeData);
        this.saveToStorage();
    }

    deleteKnowledge(id: number) {
        this.knowledgeData = this.knowledgeData.filter(k => k.id !== id);
        this.knowledgeSubject.next(this.knowledgeData);
        this.saveToStorage();
    }

    updateHome(data: HomeData) {
        this.homeData = data;
        this.homeSubject.next(this.homeData);
        this.saveToStorage();
    }

    updateAbout(data: AboutData) {
        this.aboutData = data;
        this.aboutSubject.next(this.aboutData);
        this.saveToStorage();
    }

    addContact(item: ContactItem) {
        this.contactData.push(item);
        this.contactSubject.next(this.contactData);
        this.saveToStorage();
    }

    deleteContact(id: number) {
        this.contactData = this.contactData.filter(c => c.id !== id);
        this.contactSubject.next(this.contactData);
        this.saveToStorage();
    }
}
