
angular.module('docs', ['ui.bootstrap'])
.controller('DocsController', function($scope) {
    
    $scope.pages = [
        {
            title: 'Overview',
            doc: overviewContents
        },
        {
            title: 'Getting Started',
            doc: gettingStartedContents
        },
        {
            title: 'Reference',
            doc: referencesContents
        },
        {
            title: 'Demo',
            doc: demoContents
        }
    ];

    $scope.setContent = function(page) {
        document.getElementById("page-content-wrapper").innerHTML = page.doc;
    }

});

var overviewContents;
var gettingStartedContents;
var referencesContents;
var demoContents;

$.get('/app/templates/docs_overview.html', function(data){
    overviewContents = data;
});

$.get('/app/templates/docs_getting_started.html', function(data){
    gettingStartedContents = data;
});

$.get('/app/templates/docs_reference.html', function(data){
    referencesContents = data;
});

$.get('/app/templates/docs_demo.html', function(data){
    demoContents = data;
});