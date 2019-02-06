import { Injectable } from '@angular/core';


export interface Speaker{
  image: String;
  name: String;
  job: String;
  description: String;
  visible: boolean;
  company: String;
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
      description: 'Matias is a fullstack web developer who has been programming & building websites for over 10 years, and a core team member of AngularJS for two years. In the spring of 2015 Matias joined Angular full time at Google. In his free time Matias loves to build complex things and is always up for public speaking, travelling and tweaking his current Vim setup.',
      image: './assets/images/matias.png',
      visible: true
    },
    {
      name: 'John Papa',
      job: 'Principal Developer Advocate',
      company: 'Microsoft',
      description: 'John Papa is a dedicated father and husband, a Web Developer, and an alumn of the Google Developer Expert, Microsoft RD, and MVP programs. His passions are coding and teaching modern web technologies and enjoying everything Disney with his family. John is a co-host of the Adventures in Angular and Views on Vue podcasts, author of the Angular Style Guide, and many popular Pluralsight courses.',
      image: './assets/images/john.png',
      visible: true
    },
    // {
    //   name: 'Ayşegül Yönet',
    //   job: '@CodeForGoodWeek',
    //   description: '@GoogleDevExpert for Web Technologies, #Angular. #WebVR and #Visualization, #NeuroTech bug. @CodeForGoodWeek, previously @nrwl_io, Autodesk',
    //   image: 'https://uphillconf.com/2018/wp-content/uploads/2018/08/aysegul.png',
    //   visible: false
    // },
    // {
    //   name: 'Mike Ryan',
    //   job: 'NgRx Core Team & Software Engineer at Synapse',
    //   description: 'Google Developer Expert, Software Engineer at Synapse, and builder of #NgRx',
    //   image: 'https://pbs.twimg.com/profile_images/967861418765750282/Omq905_m_400x400.jpg',
    //   visible: false
    // },
    // {
    //   name: 'Juri Strumpflohner',
    //   job: 'Google Developer Expert #GDE',
    //   description: 'Google Developer Expert #GDE •🎓 @eggheadio instructor • ❤ Softw. Architecture, JS, Angular • dev • freelance trainer • 📽 author • 📝 blogger • intl speaker',
    //   image: 'https://pbs.twimg.com/profile_images/1061721443262595072/exf-4JXp_400x400.jpg',
    //   visible: false
    // },
    // {
    //   name: 'Juan Herrera',
    //   job: 'Head of Frontend Development @YuxiGlobal',
    //   description: 'Google Developer Expert in #Angular Organizer of @AngularMedellin & #NgColombia 🌟 Head of Frontend Development @YuxiGlobal ❤️ I sing and dance 🕺',
    //   image: 'https://pbs.twimg.com/profile_images/1062162091598000128/5u1BNPgE_400x400.jpg',
    //   visible: false
    // },
    // {
    //   name: 'Pamela Ocampo',
    //   job: 'Dev @OneMedical',
    //   description: 'Chicana, ☕️ geek, lady 🏋🏻, climber, lazy cyclist. Dev @OneMedical Previously @ThoughtWorks ❤️',
    //   image: 'https://pbs.twimg.com/profile_images/896227790369939460/LDxU2Zt7_400x400.jpg',
    //   visible: false
    // },

    // {
    //   name: 'Leonardo Zizzamia',
    //   job: 'Web Consumer, Coinbase',
    //   description: 'Leonardo is a Google Developer Expert in Web Technologies and Angular. Previously, he lead the internal #ngTwitter cross-team Angular group as a Web engineer at Twitter',
    //   image: 'https://pbs.twimg.com/profile_images/957865024126533632/71tNdug__400x400.jpg',
    //   visible: false
    // }
  ];

  constructor() { }

  getSpeakers(): Speaker[] {
    return this.speakerList;
  }
}
