/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('galleries', tbl => {
    tbl.increments();
    tbl.string('gallery_name', 128)
        .notNullable();
  })
  .createTable('revenues', tbl=> {
    tbl.increments();
    tbl.integer('monthly_revenue')
        .unsigned();
    tbl.integer('gallery_id')
        .unsigned()
        .notNullable()
        .unique()
        .references('id')
        .inTable('galleries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
  .createTable('cars', tbl=>{
    tbl.increments();
    tbl.string('car_name', 128)
        .notNullable();
    tbl.integer('number').defaultTo(0);
  })
  .createTable('gallery_cars', tbl => {
    tbl.integer('car_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cars');
    tbl.integer('gallery_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('galleries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.primary(['car_id','gallery_id']);  // many-to-many ilişkilerinde ortak tabloda FK ikililerinden primary key oluşturduk.
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('gallery_cars')
                    .dropTableIfExists('cars')
                    .dropTableIfExists('revenues')
                    .dropTableIfExists('galleries')
};
