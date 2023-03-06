/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable();
        tbl.text('surname' ,128)
            .notNullable();
        tbl.text('ip', 128)
            .notNullable()
            .defaultTo('0.0.0.0');
        tbl.text('nickname', 128)
            .notNullable()
            .unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
