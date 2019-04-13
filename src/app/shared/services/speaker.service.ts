import { Injectable } from '@angular/core';


export interface Speaker{
  image: string;
  name: string;
  job: string;
  description: string;
  fullDescription: string;
  visible: boolean;
  company: string;
  twitter: string;
  homepage: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  speakerList: Speaker[] = [
    {
      name: 'Matias Niemelä',
      job: 'Angular core team',
      company: 'Google',
      description: 'Matias is a fullstack web developer who has been programming & building websites for over 10 years, and a core team member of AngularJS for two years. In the spring of 2015 Matias joined Angular full time at Google.',
      fullDescription: 'Matias is a fullstack web developer who has been programming & building websites for over 10 years, and a core team member of AngularJS for two years. In the spring of 2015 Matias joined Angular full time at Google. In his free time Matias loves to build complex things and is always up for public speaking, travelling and tweaking his current Vim setup.',
      image: './assets/images/matias.png',
      visible: true,
      homepage: true,
      twitter: 'yearofmoo'
    },
    {
      image: './assets/images/aysegul.png',
      name: 'Ayşegül Yönet',
      job: 'Azure Advocates',
      company: 'Microsoft',
      description: 'Aysegul, focuses on Spatial Computing, Mixed Reality, Angular and Data Visualization. She is a Google Developer Expert for Web Technologies & Angular and an active conference speaker.',
      fullDescription: 'Aysegul, focuses on Spatial Computing, Mixed Reality, Angular and Data Visualization. She is a Google Developer Expert for Web Technologies & Angular and an active conference speaker. She previously worked as Senior Software Engineer at Nrwl.io, Autodesk Play, a 3D and VR authoring tool and A360 Viewer and A360 Drive. She enjoys teaching at a variety of non-profit organizations aiming to increase diversity in the software industry.',
      visible: false,
      twitter: 'AysSomething',
      homepage: true,
    },
    {
      name: 'Pamela Ocampo',
      job: 'Senior Software Engineer',
      company: 'OneMedical',
      description: 'As a lifetime learner of web technologies, Pam looks to Javascript as the gift that keeps on giving. Pam is currently a Señora Software Engineer at One Medical leading the migration of the clinical team’s electronic health record application from AngularJS to Angular.',
      fullDescription: 'As a lifetime learner of web technologies, Pam looks to Javascript as the gift that keeps on giving. Pam is currently a Señora Software Engineer at One Medical leading the migration of the clinical team’s electronic health record application from AngularJS to Angular. She advocates for consistent design, accessibility, and developer happiness. When she’s not fighting to exit vim, she can be found climbing fake rock walls (sometimes real ones), riding a bike, or lifting weights.',
      image: './assets/images/pamela.png',
      visible: false,
      twitter: 'pmocampo',
      homepage: true,
    },
    {
        name: 'Juri Strumpflohner',
        job: 'Google Developer Expert #GDE',
        company: 'Freelance',
        description: 'Juri is a software engineer and freelance trainer. He currently develops modern web and mobile enterprise applications using the web platform, JavaScript and Angular. He is an official http://Egghead.io  instructor where he is one of the top publishers around Angular topics.',
        fullDescription: 'Juri Strumpflohner is a software engineer and freelance trainer. He currently develops modern web and mobile enterprise applications using the web platform, JavaScript and Angular. He is an official http://Egghead.io  instructor where he is one of the top publishers around Angular topics. Most recently Juri has been recognized by Google as a Google Developers Expert in Web Technologies. Juri is an international speaker, writes technical articles on his website at https://juristr.com  and tweets as @juristr.',
        image: './assets/images/juri.png',
        visible: false,
        twitter: 'juristr',
        homepage: false,
      },
    {
      image: './assets/images/john.png',
      name: 'John Papa',
      job: 'Principal Developer Advocate',
      company: 'Microsoft',
      description: 'John Papa is a dedicated father and husband, a Web Developer, and an alumn of the Google Developer Expert, Microsoft RD, and MVP programs. His passions are coding and teaching modern web technologies and enjoying everything Disney with his family. ',
      fullDescription: 'John Papa is a dedicated father and husband, a Web Developer, and an alumn of the Google Developer Expert, Microsoft RD, and MVP programs. His passions are coding and teaching modern web technologies and enjoying everything Disney with his family. John is a co-host of the Adventures in Angular and Views on Vue podcasts, author of the Angular Style Guide, and many popular Pluralsight courses.',
      visible: true,
      twitter: 'John_Papa',
      homepage: true,
    },
    {
      image: './assets/images/juri.png',
      name: 'Mike Ryan',
      job: 'NgRx Core Team & Software Engineer at Synapse',
      company: 'Synapse',
      description: 'Google Developer Expert, Software Engineer at Synapse, and builder of #NgRx',
      fullDescription: '',
      visible: false,
      twitter: 'MikeRyanDev',
      homepage: false,
    },

    {
      image: './assets/images/juri.png',
      name: 'Juan Herrera',
      job: 'Head of Frontend Development @YuxiGlobal',
      company: 'YuxiGlobal',
      description: 'Google Developer Expert in #Angular Organizer of @AngularMedellin & #NgColombia 🌟 Head of Frontend Development @YuxiGlobal ❤️ I sing and dance 🕺',
      fullDescription: '',
      visible: false,
      twitter: 'jdjuan',
      homepage: false
    },


    {
      image: './assets/images/juri.png',
      name: 'Leonardo Zizzamia',
      job: 'Web Consumer',
      company:'Coinbase',
      description: 'Leonardo is a Google Developer Expert in Web Technologies and Angular. Previously, he lead the internal #ngTwitter cross-team Angular group as a Web engineer at Twitter',
      fullDescription: '',
      visible: false,
      twitter: 'Zizzamia',
      homepage: false
    }
  ];

  constructor() { }

  getSpeakers(ishome: false): Speaker[] {
    let toReturn: Speaker[];

    if (ishome){

      toReturn = this.speakerList
        .map(data => data)
        .filter(x => x.homepage === ishome);

    } else {
      toReturn = this.speakerList;
    }

    return toReturn;

  }
}
