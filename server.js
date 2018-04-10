const PlexiClient = require('plexiframework');
const client = new PlexiClient();

client.login(process.env.SECRET);