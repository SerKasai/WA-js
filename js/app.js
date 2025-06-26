console.log('WhatsApp')

const app = new Vue({
  el: "#app",
  data: {
    currentChat: [],

    contacts: [
      {
        name: 'Michele',
        avatar: 'img/wayne-barnett-founder-ceo.jpg',
        visible: true,
        messages: [
          {
            date: '15:30',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '15:50',
            text: 'Ricordati di dargli da mangiare.',
            status: 'sent'
          },
          {
            date: '16:15',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: 'img/new-team-member-02.jpg',
        visible: false,
        messages: [
          {
            date: '16:30',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '16:30',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '15:35',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: 'img/new-team-member-04.jpg',
        visible: false,
        messages: [
          {
            date: '10:10',
            text: 'Marianna va in campagna.',
            status: 'received'
          },
          {
            date: '10:20',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '12:15',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: 'img/barbara-ramos-graphic-designer.jpg',
        visible: false,
        messages: [
          {
            date: '15:30',
            text: 'Hey, ciao!',
            status: 'sent'
          },
          {
            date: '15:30',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: 'Ieri',
            text: 'Sì, ma preferirei andare al cinema.',
            status: 'received'
          }
        ],
      },
    ],
  },
  methods: {
    mexSent: function () {
      if (this.messages.status === sent);
      this.messages.push()
    },
  }
})

console.log(app)