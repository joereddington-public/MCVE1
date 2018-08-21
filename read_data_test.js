/*
 * Unit tests for javascript using jasmine
 *
 */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
describe( "Displaying OBF on the index page", function () {
         
    describe( "Test Name property", function () {
		
		//Declare the variable within the suite's scope		
		var originalTimeout;
		
		beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;			
		});
		
		afterEach(function() {
		  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});
		
		it('We can get a manifest file', function(doneFn) {
			manifest=""
			console.log(window.location.pathname);
			console.log("1")
			load_manifest("/Users/joepublic/MCVE/manifest.json");
			
			console.log("2")
			console.log(manifest.length)
			setTimeout(expect(manifest.length).not.toBeLessThan(1),4000);
			console.log(manifest);
			doneFn();
			});			
		});
     }
     
     )
