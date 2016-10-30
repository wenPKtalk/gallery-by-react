'use strict';

var GalleryByReactApp = require('./GalleryByReactApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GalleryByReactApp}>
    <Route name="/" handler={GalleryByReactApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
