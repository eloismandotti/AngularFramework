import { Component, OnInit } from '@angular/core';
import { ContactCard } from '../auth/interfaces/contact-card';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {

  cardsList: ContactCard[] = [
    {
      title: "Kurenai no Buta",
      subtitle: "Porco Rosso",
      imgLink: "https://cdn1.thespacecinema.it/-/media/tsc/2022/07/ghibli-festival/porco-rosso/coverig.jpg?mw=768",
      description: "The plot revolves around an Italian World War I ex-fighter ace, now living as a freelance bounty hunter chasing air pirates in the Adriatic Sea. However, an unusual curse has transformed him into an anthropomorphic pig. Once called Marco Pagot (Marco Rossolini in the American version), he is now known to the world as Porco Rosso."
    },
    {
      title: "Mononoke-Hime",
      subtitle: "Princess Mononoke",
      imgLink: "https://www.lafionda.org/wp-content/uploads/2020/05/principessamononoke-e1591461017870.jpeg",
      description: "Ashitaka, a young warrior of the Emishi dynasty, is forced to kill a wild boar possessed by an evil deity. Wounded in the arm by the animal, the young man struck by a deadly curse must leave his village. During his journey he comes across young San, a wild girl raised by wolves and nicknamed Princess Mononoke. Although Ashitaka's curse is lifted, his scar remains."
    },
    {
      title: "Karigurashi no Arrietty",
      subtitle: "Arietty",
      imgLink: "https://focus.telerama.fr/967x550/100/2021/03/29/58ef0ca5-6939-4227-b32e-353539ede8b5.jpg",
      description: "Arrietty and the Prendimprestito family is made up of tiny characters intent on using objects belonging to human beings as well as creating a dwelling under the floor of other people's homes. One day little Arrietty is discovered by Sho, a young boy of fourteen, and a tender and compassionate friendship begins between the two."
    },
    {
      title: "Gake no ue no Ponyo",
      subtitle: "Ponyo",
      imgLink: "https://media.npr.org/assets/artslife/movies/2009/08/ponyo/fishtank_wide-b3697da90a8d3726cf8cc1aac9061dd6f09c129d-s1100-c50.jpg",
      description: "Ponyo (Nara) is a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, after she is washed ashore while trapped in a glass jar. Ponyo represents the creatures in the sea. The message is that mankind will disrupt the balance of nature by using the sea and taking the bounty of the sea unless we love and care for it."
    },
    {
      title: "Tenkū no shiro Rapyuta",
      subtitle: "Laputa",
      imgLink: "https://images.everyeye.it/img-articoli/laputa-castello-cielo-avventura-studio-ghibli-v8-47191.jpg",
      description: "The first film produced by Studio Ghibli, it was produced for Tokuma Shoten. Set in a fictional late 19th century, it follows the adventures of a boy and girl who are trying to keep a powerful crystal from the army, a group of secret agents, and a family of pirates, while searching for a legendary floating castle. The film was distributed by Toei Company"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
