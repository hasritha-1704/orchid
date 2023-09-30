angular.module('orchid',[]);
var bookListCtrl = function ($scope) {
    $scope.data = {
    books: [{
        name: 'Normal People',
        author: 'Sally Rooney',
        rating: 4,
        literary_elements: ['Love', 'Friendship', 'Emotional Intimacy'],
        type: 'Fiction',
        href: '/book'
    }, {
        name: 'Educated',
        author: 'Tara Westover',
        rating: 5,
        literary_elements: ['Memoir'],
        type: 'Non-Fiction',
        href: '/book/2'
    }, {
        name: 'The Silent Patient',
        author: 'Alex Michaelides',
        rating: 5,
        literary_elements: ['Thriller', 'Betrayal', 'Love'],
        type: 'Mystery',
        href: '/book/3'
    }, {
        name: 'Atomic Habits',
        author: 'James Clear',
        rating: 5,
        literary_elements: ['Self-Help', 'Behaviour'],
        type: 'Personal Development',
        href: '/book/4'
    }]};
    $scope.getBookURL = function(index) {
        if (index === 0) {
            return '/book';
        } else {
            return '/book' + (index + 1);
        }
    };    
};

angular
    .module('orchid')
    .controller('bookListCtrl', bookListCtrl)