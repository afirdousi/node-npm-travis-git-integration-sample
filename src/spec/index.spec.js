/**
 * Created by Anas on 11/11/2015.
 */

var con = require('../index.js');

describe('test spec', function(){
    it('should be true',function(){
        expect(true).toBe(true);
    });
});


describe('General Application Configuration', function(){

    it('should have DB configuraiton',function(){
        expect(con.db).toBeDefined();
    });

    it('should have Application configuraiton',function(){
        expect(con.app).toBeDefined();
    });

    it('should have access to all configuraiton',function(){
        expect(con.all).toBeDefined();
    });
});

describe('Database Configuration', function(){

    it('should have correct Dev DB defined',function(){
        expect(con.db.dev_url).toBeDefined();
        expect(con.db.dev_url).toBe('http://dev-db.sampledbserver.com')
        expect(con.db.dev_status).toBe('U');
    });

    it('should have correct Pilot DB defined',function(){
        expect(con.db.pilot_url).toBeDefined();
        expect(con.db.pilot_url).toBe('http://pilot-db.sampledbserver.com')
        expect(con.db.pilot_status).toBe('U');
    });

    it('should have correct Production DB defined',function(){
        expect(con.db.prod_url).toBeDefined();
        expect(con.db.prod_url).toBe('http://prod-db.sampledbserver.com')
        expect(con.db.prod_status).toBe('U');
    });

});




