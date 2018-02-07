var assert = require('assert');
const request = require('supertest');
const app = require('./app');

describe ('POST /ecommerce',function(){
		it('test success when values is correct',function(done){
				request(app)
				.post('/ecommerce?token=Admin&product=pollo')
				.set('accept', 'application/json')
				.expect(200)
				.end(function(err, res){
					if(err) return done(err);
					done();
			});
		});

    it('test failed when token is uncorrected',function(done){
				request(app)
				.post('/ecommerce?token=Pippo&product=pollo')
				.set('accept', 'application/json')
				.expect(401)
				.end(function(err, res){
					if(err) return done(err);
					done();
			});
		});

    it('test failed when product is not a string',function(done){
				request(app)
				.post('/ecommerce?token=Admin&product=3')
				.set('accept', 'application/json')
				.expect(400)
				.end(function(err, res){
					if(err) return done(err);
					done();
			});
		});
  });


  describe ('DELETE /ecommerce',function(){
  		it('test success ecommerce',function(done){
  				request(app)
  				.delete('/ecommerce?token=Admin&id=2')
  				.set('accept', 'application/json')
  				.expect(200)
  				.end(function(err, res){
  					if(err) return done(err);
  					done();
  			});
  		});

      it('test failed when token is uncorrected',function(done){
  				request(app)
  				.delete('/ecommerce?token=Pippo&id=2')
  				.set('accept', 'application/json')
  				.expect(401)
  				.end(function(err, res){
  					if(err) return done(err);
  					done();
  			});
  		});

      it('test failed when id is not a number',function(done){
  				request(app)
  				.delete('/ecommerce?token=Admin&id=ciao')
  				.set('accept', 'application/json')
  				.expect(400)
  				.end(function(err, res){
  					if(err) return done(err);
  					done();
  			});
  		});

			it('test failed when id > 5',function(done){
  				request(app)
  				.delete('/ecommerce?token=Admin&id=6')
  				.set('accept', 'application/json')
  				.expect(400)
  				.end(function(err, res){
  					if(err) return done(err);
  					done();
  			});
  		});
    });

		describe ('PUT /ecommerce',function(){
	  		it('test success ecommerce',function(done){
	  				request(app)
	  				.put('/ecommerce?token=Admin&id=2&newProduct=porchetta&quantity=4')
	  				.set('accept', 'application/json')
	  				.expect(200)
	  				.end(function(err, res){
	  					if(err) return done(err);
	  					done();
	  			});
	  		});

				it('test failed when token is uncorrected',function(done){
	  				request(app)
	  				.put('/ecommerce?token=Pippo&id=2&newProduct=porchetta&quantity=4')
	  				.set('accept', 'application/json')
	  				.expect(401)
	  				.end(function(err, res){
	  					if(err) return done(err);
	  					done();
			});
		});

		it('test failed when id is not a number',function(done){
				request(app)
				.put('/ecommerce?token=Admin&id=ciao&newProduct=porchetta&quantity=4')
				.set('accept', 'application/json')
				.expect(400)
				.end(function(err, res){
					if(err) return done(err);
					done();
				});
			});

			it('test failed when product is not a string',function(done){
					request(app)
					.put('/ecommerce?token=Admin&id=ciao&newProduct=2&quantity=4')
					.set('accept', 'application/json')
					.expect(400)
					.end(function(err, res){
						if(err) return done(err);
						done();
					});
				});

				it('test failed when quantity is not a number',function(done){
						request(app)
						.put('/ecommerce?token=Admin&id=2&newProduct=porchetta&quantity=ciao')
						.set('accept', 'application/json')
						.expect(400)
						.end(function(err, res){
							if(err) return done(err);
							done();
						});
					});
		});


		describe ('GET /ecommerce',function(){
			it('test success ecommerce',function(done){
					request(app)
					.get('/ecommerce?token=Pippo&id=2')
					.set('accept', 'application/json')
					.expect(200)
					.end(function(err, res){
						if(err) return done(err);
						done();
				});
			});

			it('test failed when token is uncorrected',function(done){
	  				request(app)
	  				.get('/ecommerce?token=Admin&id=2')
	  				.set('accept', 'application/json')
	  				.expect(401)
	  				.end(function(err, res){
	  					if(err) return done(err);
	  					done();
	  			});
	  		});

				it('test failed when id is not a number',function(done){
		  				request(app)
		  				.get('/ecommerce?token=Pippo&id=ciao')
		  				.set('accept', 'application/json')
		  				.expect(400)
		  				.end(function(err, res){
		  					if(err) return done(err);
		  					done();
		  			});
		  		});

					it('test failed when token is not a string',function(done){
			  				request(app)
			  				.get('/ecommerce?token=5&id=2')
			  				.set('accept', 'application/json')
			  				.expect(400)
			  				.end(function(err, res){
			  					if(err) return done(err);
			  					done();
			  			});
			  		});
					});
