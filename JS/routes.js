
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.redirect('/index#/dashboards/main');
	});

	app.get('/index', function(req, res) {   
		res.render('index.ejs'); 
	});
	app.get('/content', function(req, res) {       
		res.render('content.ejs'); 
	});
	app.get('/dashboard', function(req, res) {  
		res.render('dashboard.ejs'); 
	});	
	app.get('/new',function(req, res) {  
		res.render('new.ejs'); 
	});	
	app.get('/edit',function(req, res) {  
		res.render('edit.ejs'); 
	});	
}