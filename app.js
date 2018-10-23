var app = new Vue({
  el: '#app',
  data: {
    firstName: "Camille",
    lastName: "Camdessus",
    description: "Journaliste en formation, j'aime l'Asie, la musique et le rugby!",
    photo: "https://pbs.twimg.com/profile_images/928223723706077184/wRwXIOxi_400x400.jpg",
    twitter: "CCamdessus",
    github: "ccamillej",
    mail: "camille.camdessus@sciencespo.fr",
    experiences: [{
      dateBegin: "2017",
      dateEnd: "Today",
      name: "Agence France Presse",
      title: "Apprentie",
      description: " Apprentissage à l'Agence France Presse (AFP), service politique, desk sport, Infogénés, documentation."
    }, {
      dateBegin: "2017",
      dateEnd: false,
      name: "The China Post",
      title: "Stagiaire",
      description: "production de vidéos courtes sur l'actualité taïwanaise, rédaction d'articles format web et papier en anglais et création d’un chatbot. "
    }, {
      dateBegin: "Octobre 2016",
      dateEnd: "Février 2017",
      name: "Radio Taiwan International",
      title: "Stagiaire",
      description: "production d'une émission hebdomadaire sur la société taïwanaise (interview, rédaction, montage)"
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "2019",
      name: "Master Journalisme",
      university: "Ecole de Journalisme de Sciences Po"
    }, {
      dateBegin: "2014",
      dateEnd: "2017",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Paris campus asiatique du Havre"
    }],
    languages: ["Anglais", "Chinois"],
    skills: ["Premiere Pro", "Audition", "Dalet", "Audacity", "Microsoft Office"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})
