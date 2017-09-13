(function(){
    var app = angular.module('store', []);
    
    app.controller('StoreCOntroller', function(){
        this.product = gem;
    });
    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .',
        canPurchase: false,
        soldOut: true
    }
})();