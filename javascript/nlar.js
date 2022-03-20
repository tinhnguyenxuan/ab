var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 15 year ago";
	$scope.verify = "Đang Buồn :((";
	$scope.des = "31/12/2007";
	$scope.cv = "Thông Tin";
	$scope.job1 = "Học Sinh";
	$scope.job2 = "Coder Lỏ";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "Phone 0852271064";
	$scope.contact2 = "Email :tinhnx4@gmail.com";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "Telagram";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://www.facebook.com/nguyen.xuan.tinh.2007";
	$scope.linkzl = "https://zalo.me/0387017368";
	$scope.linksc = "https://t.me/tinh31122007";
	$scope.linkgm = "";
	$scope.phonenumber = "0852271064 - Vinaphone";
	$scope.email = "tinhnx4@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Xin chào bạn đã đến với website about me của mình nha <3";
	$scope.contentStory2 = "";
	$scope.storytitle1 = "Thanks bạn";
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