module.exports.routes = {
    'POST /register': { controller: 'PassportController', action: 'register' },
    'POST /login': { controller: 'PassportController', action: 'login' },
    'GET  /logout': { controller: 'PassportController', action: 'logout' },
    'GET /api/v1/auth/facebook': { controller: 'PassportController', action: 'facebookAuth' },
    'GET /api/v1/auth/facebook/callback': { controller: 'PassportController', action: 'facebookCallback' }
  };