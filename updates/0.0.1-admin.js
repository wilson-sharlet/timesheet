var keystone = require('keystone'),
    User = keystone.list('User');
 
exports = module.exports = (done) => {
    
    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'admin@techracers.com',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);
    
};