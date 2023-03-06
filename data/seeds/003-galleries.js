/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
/*   await knex('gallery_cars').truncate()
  await knex('galleries').truncate()
  await knex('cars').truncate() */
  await knex('galleries').insert([
    {gallery_name: 'Fatih Oto Galerisi'},
    {gallery_name: 'Merve Otomotiv'}
  ]);
  await knex('cars').insert([
    {car_name: 'VW Passat'},
    {car_name: 'Fiat Albea'},
    {car_name: 'Volvo C40'},
    {car_name: 'Opel Corsa'}
  ]);
  await knex('gallery_cars').insert([
    {car_id: 1, gallery_id: 1},
    {car_id: 2, gallery_id: 1},
    {car_id: 3, gallery_id: 2},
    {car_id: 4, gallery_id: 2},
    {car_id: 1, gallery_id: 2}
  ]);
};
