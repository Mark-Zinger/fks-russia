'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('game', [
      { id: 1, title:'WoT', icon: '#wot'},
      { id: 2, title:'FIFA', icon: '#fi'},
      { id: 3, title:'PUBG', icon: '#pub'},
      { id: 4, title:'DOTA 2', icon: '#dt'},
      { id: 5, title:'War Thunder', icon: '#wt'},
      { id: 6, title:'Valorant', icon: '#vlrt'},
      { id: 7, title:'Warface', icon: '#wf'},
      { id: 8, title:'CS:GO', icon: '#csg'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('game', null, {});
  }
};
