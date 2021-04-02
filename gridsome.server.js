// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const {readFileSync} = require('fs');
const parse = require('csv-parse/lib/sync');

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const input = readFileSync('./src/data/agencies.csv', 'utf8');

    const Agencies = parse(input, {
      columns: true,
      skip_empty_lines: true,
    });

    const collection = actions.addCollection({
      typeName: 'Agencies',
    });

    for (const agency of Agencies) {
      collection.addNode(agency);
    }
  })
}
