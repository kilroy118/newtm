var app = angular.module('myApp', []);

app.controller('newController', function(){
	var vm = this;
	
	vm.newStyle = [
		{
			header: "header1",
			buttons: "buttons1",
			blocks: "blocks1"
		},
		{
			header: "header2",
			buttons: "buttons2",
			blocks: "blocks2"
		},
		{
			header: "header3",
			buttons: "buttons3",
			blocks: "blocks3"
		}
	]
	vm.addStyle1 = function(index){
		vm.bodyStyle = vm.newStyle[0];
	}
	vm.addStyle2 = function(){
		vm.bodyStyle = vm.newStyle[1];
	}
	vm.addStyle3 = function(){
		vm.bodyStyle = vm.newStyle[2];
	}
	
	
	vm.blockStyle = function(index){
		vm.blockStyle = vm.newStyle[0];
	}
})