console.log('WhatsApp')

const app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: 'wayne-barnett-founder-ceo.jpg',
        visible: true,
        messages: [
          {
            date: '10/04/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/04/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare.',
            status: 'sent'
          },
          {
            date: '10/04/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: 'new-team-member-02.jpg',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/04/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: 'new-team-member-04.jpg',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'Marianna va in campagna.',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: 'barbara-ramos-graphic-designer.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Sì, ma preferirei andare al cinema.',
            status: 'received'
          }
        ],
      },
    ]
  }
})