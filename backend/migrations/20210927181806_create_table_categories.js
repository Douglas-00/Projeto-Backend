const Knex = require("../config/db");

exports.up = function(knex, Promise) {
    return Knex.schema.createTable('categories', table =>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('parentID').references('id')
            .inTable('categories')
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
};
