(function(){
	var app = angular.module("site4you",[]);
	app.controller('HeadMenu',	function(){
		this.itemMenu = menu;
	});
		var menu = [{menuName:'ГЛАВНАЯ'},{menuName:'ПОРТФОЛИО'},{menuName:'КОНТАКТЫ'}];
})();		
