import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  speakerList = [
    {
      name: 'Matias Niemelä',
      job: '@yearofmoo',
      description: 'World-class material and high quality articles, guides and code perfect for your web and software development needs.',
      image: 'https://pbs.twimg.com/profile_images/1315020115/clouds-lightning_400x400.png',
    },
    {
      name: 'Ayşegül Yönet',
      job: '@CodeForGoodWeek',
      description: '@GoogleDevExpert for Web Technologies, #Angular. #WebVR and #Visualization, #NeuroTech bug. @CodeForGoodWeek, previously @nrwl_io, Autodesk',
      image: 'https://uphillconf.com/2018/wp-content/uploads/2018/08/aysegul.png'
    },
    {
      name: 'Mike Ryan',
      job: 'NgRx Core Team & Software Engineer at Synapse',
      description: 'Google Developer Expert, Software Engineer at Synapse, and builder of #NgRx',
      image: 'https://pbs.twimg.com/profile_images/967861418765750282/Omq905_m_400x400.jpg'
    },
    {
      name: 'Juri Strumpflohner',
      job: 'Google Developer Expert #GDE',
      description: 'Google Developer Expert #GDE •🎓 @eggheadio instructor • ❤ Softw. Architecture, JS, Angular • dev • freelance trainer • 📽 author • 📝 blogger • intl speaker',
      image: 'https://pbs.twimg.com/profile_images/1061721443262595072/exf-4JXp_400x400.jpg'
    },
    {
      name: 'Juan Herrera',
      job: 'Head of Frontend Development @YuxiGlobal',
      description: 'Google Developer Expert in #Angular Organizer of @AngularMedellin & #NgColombia 🌟 Head of Frontend Development @YuxiGlobal ❤️ I sing and dance 🕺',
      image: 'https://pbs.twimg.com/profile_images/1062162091598000128/5u1BNPgE_400x400.jpg'
    },
    {
      name: 'Pamela Ocampo',
      job: 'Dev @OneMedical',
      description: 'Chicana, ☕️ geek, lady 🏋🏻, climber, lazy cyclist. Dev @OneMedical Previously @ThoughtWorks ❤️',
      image: 'https://pbs.twimg.com/profile_images/896227790369939460/LDxU2Zt7_400x400.jpg'
    },
    {
      name: 'John Papa',
      job: 'Principal Developer Advocate, Microsoft',
      description: 'John Papa is a Principal Developer Advocate with Microsoft and an alumni of the Google Developer Expert, Microsoft Regional Director, and MVP programs.',
      image: 'https://pbs.twimg.com/profile_images/888397702391902208/CupdIngs_400x400.jpg'
    },
    {
      name: 'Leonardo Zizzamia',
      job: 'Web Consumer, Coinbase',
      description: 'Leonardo is a Google Developer Expert in Web Technologies and Angular. Previously, he lead the internal #ngTwitter cross-team Angular group as a Web engineer at Twitter',
      image: 'https://pbs.twimg.com/profile_images/957865024126533632/71tNdug__400x400.jpg'
    }
  ];

  constructor() { }

  getSpeakers(){
    return this.speakerList;
  }
}
