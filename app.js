(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  })

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some gems have hidden qualities beyond their luster, behond their shine... Dodeca is one of those gems.',
      canPurchase: true,
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Origin of the Pentagonal Gem is unknown, hence it's low value. It has a very high shine and 12 sides, however.",
      canPurchase: false,
    }
  ];
})();

