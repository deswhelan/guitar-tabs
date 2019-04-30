
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        {id: 1, song_name: 'Wonderwall', artist_name: 'Oasis', url: 'https://www.songsterr.com/a/wa/song?id=2'},
        {id: 2, song_name: 'Stairway To Heaven', artist_name: 'Led Zeppelin', url: 'https://www.songsterr.com/a/wa/song?id=27'},
        {id: 3, song_name: 'Smoke On The Water', artist_name: 'Deep Purple', url: 'https://www.songsterr.com/a/wa/song?id=329'}
      ]);
    });
};
