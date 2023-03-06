/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {name: 'Emre', surname: 'Sahiner', ip: "192.0.0.1", nickname: "ESahiner"},
    {name: 'Kazım', surname: 'Nergiz', ip: "0.0.0.0", nickname: "KN"}
  ]);
};
