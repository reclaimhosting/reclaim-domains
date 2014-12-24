var app = angular.module("domainTool", []);

app.controller("domainControl", function($scope, $http) {
  $scope.domains = [];
  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
  $scope.$watch('domainSearch', function(){
    if($scope.domainSearch && $scope.domainSearch.length>2){
      var request = $http({
      method: "JSONP",
      url: "https://api.domainsbot.com/v4/spinner",
      params: {
          'auth-token': "DOMAINSBOTAPIKEY",
          'tlds': "com,net,org,us,info",
          'pageSize': 20,
          'callback': 'JSON_CALLBACK',
          'q': $scope.domainSearch
      }
      }).success(function(data, status) {
              $scope.domains = data.Domains;
      });
    }
  });
});
