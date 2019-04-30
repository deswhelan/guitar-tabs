
exports.up = function(knex, Promise) {
    return knex.schema.createTable('favourites', function (table) {
        table.increments('id').primary()
        table.string('song_name')
        table.string('artist_name')
        table.string('url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('favourites')
};
