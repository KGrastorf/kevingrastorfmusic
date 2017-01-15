angular.module("musicApp", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home", {
    url: "/home",
    templateUrl: "./public/home.html"
  })
  $stateProvider
  .state("bio", {
    url: "/bio",
    templateUrl: "./public/bio.html"
  })
  $stateProvider
  .state("music", {
    url: "/music",
    templateUrl: "./public/music.html"
  })
  $stateProvider
  .state("videos", {
    url: "/videos",
    templateUrl: "./public/videos.html"
  })
  $stateProvider
  .state("contact", {
    url: "/contact",
    templateUrl: "./public/contact.html"
  });
  $urlRouterProvider.otherwise("/home");
});
