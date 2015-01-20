angular.module('docs', ['ui.bootstrap'])
.controller('docsController', function ($scope) {

    $scope.pages = [
        {
            title: 'Overview',
            page: "<iframe src='app/templates/docs_overview.html' frameborder=\"no\" width=\"100%\" height=\"100%\" scrolling=\"no\"></iframe>"
        },
        {
            title: 'Getting Started',
            page: "<iframe src='app/templates/docs_getting_started.html' frameborder=\"no\" width=\"100%\" height=\"100%\" scrolling=\"no\"></iframe>"
        },
        {
            title: 'Reference',
            page: "<iframe src='app/templates/docs_reference.html' frameborder=\"no\" width=\"100%\" height=\"100%\" scrolling=\"no\"></iframe>"
        },
        {
            title: 'Demo',
            page: "<iframe src='app/templates/docs_demo.html' frameborder=\"no\" width=\"100%\" height=\"100%\" scrolling=\"yes\"></iframe>"
        },
    ];

    $scope.$watch('document', function () {

        // Summary Stats
        $scope.document = $scope.pages.page;

    }, true);

});