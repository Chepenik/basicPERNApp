'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year_published: 1937
      },
      {
        name: 'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        year_published: 1954
      },
      {
        name: 'The Two Towers',
        author: 'J.R.R. Tolkien',
        year_published: 1954
      },
      {
        name: '1984',
        author: 'George Orwell',
        year_published: 1949
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
