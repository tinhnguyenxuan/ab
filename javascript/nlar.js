var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "Học Sinh";
	$scope.job2 = "";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "ZaLo 0852271064";
	$scope.contact2 = "";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "lol";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "SnapChat";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://www.facebook.com/nguyen.xuan.tinh.2007";
	$scope.linkzl = "https://zalo.me/0387017365";
	$scope.linksc = "";
	$scope.linkgm = "";
	$scope.phonenumber = "0852271064 - Vinaphone";
	$scope.email = "";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "l";
	$scope.contentStory2 = "2";
	$scope.storytitle1 = "";
	$scope.storytitle2 = "";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});
