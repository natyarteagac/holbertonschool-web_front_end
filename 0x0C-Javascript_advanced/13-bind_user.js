#!/usr/bin/node

let user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer',
  loWelcomeUser: function (welcomeString) {
    console.log(welcomeString + ' ' + this.firstName + ' ' + 'your occupation is ' + this.occupation);
  }
}

let bindLogWelcomeUser = user.loWelcomeUser.bind(user)
bindLogWelcomeUser('Hello')
