/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */
require('dotenv').config();
console.log(process.env.PORT);
module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'mysqlserver'
  },
  // see https://www.vivekrk.com/getting-started-with-sailsjs-part-3-sails-policies-and-jwt/ for more details
  secret: 'mysecret',//This value will be globally accessible using sails.config.secret once the server is started

  port :process.env.PORT

};
