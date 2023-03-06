// Update with your config settings.



/*
1- mkdir klasör oluşturduk
2- package.json
3- knex ve sqlite3 install ettik
4- knexfile.js configurasyonları yaptık. (knex init)
5- data klasörü oluşturduk.
6- migration dosyası oluşturduk(cli) (knex migrate:make ISIM) başına timestamp ekledi
7- up ve down fonskiyonlarını yazdık
8- migration'ları çalıştırdık. (knex migrate:latest)
9- seed yarattık (knex seed:make 001-users) (truncate ve del farkını konuştuk)
10- seed'leri run ettik (knex seed:run) 


*/

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // sqlite engine'e bağlandığımızda aşağıdaki kod çalışacak:
        conn.run('PRAGMA foreign_keys = ON', done); // FK kullanımını açmaya zorlayacak
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

};
