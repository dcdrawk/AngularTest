(function(){
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    function dataService() {

        var inventory = [
            {
                name: 'Drywall',
                productCode: 'dw-001',
                price: '12.5'
            },
            {
                name: 'Poly Tubing',
                productCode: 'pt-101',
                price: '8.25'
            },
            {
                name: 'Paint Brush',
                productCode: 'pb-123',
                price: '3'
            },
            {
                name: 'Laminate Floor Cleaner',
                productCode: 'fc-213',
                price: '4.25'
            },
            {
                name: 'Insulation',
                productCode: 'in-321',
                price: '9'
            }
        ];

        var service = {
            inventory: inventory
        };

        return service;
    }
})();