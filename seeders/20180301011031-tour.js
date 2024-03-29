'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tour', [
      {
        id: 1,	
        id_game: 8,	
        name: 'Funspark ULTI 2021: Europe Season 1',	
        dateBegin: new Date(2021, 12, 14, 10, 30),
        backgroundURL: '/resources/images/background/csgo_3.jpg',
        fond: 140000
      },
      {
        id: 2,	
        id_game: 8,	
        name: 'Snow Sweet Snow #3',	
        dateBegin: new Date(2021, 12, 10, 2, 55),
        backgroundURL: '/resources/images/background/csgo_2.jpg',
        fond: 140000
      },


      {
        id: 3,	
        id_game: 8,	
        name: 'Aorus League 2021 Season 1',	
        dateBegin: new Date(2021, 12, 29, 22, 10),
        backgroundURL: '/resources/images/background/csgo_5.jpg',
        fond: 30000
      },
      {
        id: 4,	
        id_game: 8,	
        name: 'ESL Pro League Season 13',	
        dateBegin: new Date(2021, 12, 16, 17,30),
        backgroundURL: '/resources/images/background/csgo_1.jpg',
        fond: 70000
      },
      {
        id: 5,	
        id_game: 4,	
        name: 'ONE Esports Singapore Major 2021',	
        dateBegin: new Date(2021, 12, 14, 6, 24),
        backgroundURL: '/resources/images/background/dota_1.jpg',
        fond: 65000
      },

      {
        id: 6,	
        id_game: 4,	
        name: 'Dota2 Winter Invitational',	
        dateBegin: new Date(2021, 12, 27, 9, 55),
        backgroundURL: '/resources/images/background/dota_3.jpg',
        fond: 350000
      },
      {
        id: 7,	
        id_game: 4,	
        name: 'OGA Dota PIT Season 4: China',	
        dateBegin: new Date(2021, 12, 20, 23, 17),
        backgroundURL: '/resources/images/background/dota_4.jpg',
        fond: 110000
      },
      {
        id: 8,	
        id_game: 4,	
        name: 'EPIC League | Закрытые квалификации',	
        dateBegin: new Date(2021, 12, 5, 4, 19),
        backgroundURL: '/resources/images/background/dota_5.jpg',
        fond: 100000
      },
      {
        id: 9,	
        id_game: 2,	
        name: 'Лига Европы PS4/5',	
        dateBegin: new Date(2021, 12, 12, 14, 15),
        backgroundURL: '/resources/images/background/fifa_1.jpg',
        fond: 30000
      },
      {
        id: 10,	
        id_game: 1,	
        name: 'Серия турниров «Ледяная лавина 2021»',	
        dateBegin: new Date(2021, 12, 16, 23, 23),
        backgroundURL: '/resources/images/background/wot_3.jpg',
        fond: 150000
      },
      {
        id: 11,	
        id_game: 2,	
        name: 'Кубок Юрия Розанова',	
        dateBegin: new Date(2021, 12, 24, 22, 11),
        backgroundURL: '/resources/images/background/fifa_3.jpg',
        fond: 20000
      },
      {
        id: 12,	
        id_game: 4,	
        name: 'EPIC League Season 3 Групповой этап',	
        dateBegin: new Date(2021, 12, 14, 1, 4),
        backgroundURL: '/resources/images/background/dota_2.jpg',
        fond: 235000
      },
      {
        id: 13,	
        id_game: 5,	
        name: '2x2 CБ Авиа',	
        dateBegin: new Date(2021, 12, 25, 2, 6),
        backgroundURL: '/resources/images/background/wt_2.jpg',
        fond: 85000
      },      
      {
        id: 14,	
        id_game: 7,	
        name: 'PVP Daily Warface Alpha #335',	
        dateBegin: new Date(2021, 12, 16, 9, 33),
        backgroundURL: '/resources/images/background/wf_1.jpg',
        fond: 120000
      },
      {
        id: 15,	
        id_game: 3,	
        name: 'ESL Masters 2021 NA Spring',	
        dateBegin: new Date(2021, 12, 1, 20, 20),
        backgroundURL: '/resources/images/background/pubg_1.jpg',
        fond: 190000
      },
      {
        id: 16,	
        id_game: 8,	
        name: 'Khamsa International Tournament',	
        dateBegin: new Date(2021, 12, 22, 17, 37),
        backgroundURL: '/resources/images/background/csgo_4.jpg',
        fond: 200000
      },
      {
        id: 17,	
        id_game: 6,	
        name: 'KTB | BOSSES BATTLE',	
        dateBegin: new Date(2021, 12, 1, 15, 15),
        backgroundURL: '/resources/images/background/vrnt_1.jpg',
        fond: 100000
      },
      {
        id: 18,	
        id_game: 1,	
        name: 'Шоу-матч регионов: RU vs ASIA',	
        dateBegin: new Date(2021, 12, 8, 14, 22),
        backgroundURL: '/resources/images/background/wot_2.jpg',
        fond: 30000
      },
      {
        id: 19,	
        id_game: 6,	
        name: 'VCT 2021: Game Changers North America Series 1',	
        dateBegin: new Date(2021, 12, 14, 4, 3),
        backgroundURL: '/resources/images/background/vrnt_2.jpg',
        fond: 135000
      },
      {
        id: 20,	
        id_game: 7,	
        name: 'Flow Cup #1 Challenge III',	
        dateBegin: new Date(2021, 12, 16, 8, 18),
        backgroundURL: '/resources/images/background/wf_2.jpg',
        fond: 17000
      },
      {
        id: 21,	
        id_game: 3,	
        name: 'Spark Series S1',	
        dateBegin: new Date(2021, 12, 13, 19, 7),
        backgroundURL: '/resources/images/background/pubg_2.jpg',
        fond: 45000
      },
      {
        id: 22,	
        id_game: 5,	
        name: 'Кубок OlySt CUP и Twitch Drops',	
        dateBegin: new Date(2021, 12, 21, 8, 55),
        backgroundURL: '/resources/images/background/wt_1.jpg',
        fond: 27000
      },
      {
        id: 23,	
        id_game: 1,	
        name: 'Серия турниров «Ледяная лавина 2021»',	
        dateBegin: new Date(2021, 12, 3, 8, 10),
        backgroundURL: '/resources/images/background/wot_1.jpg',
        fond: 140000
      },
      {
        id: 24,	
        id_game: 2,	
        name: 'Бундеслига FIFA21 PS4|5  серия ТОП5',	
        dateBegin: new Date(2021, 12, 16, 4, 45),
        backgroundURL: '/resources/images/background/fifa_2.jpg',
        fond: 45000
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tour', null, {});
  }
};
