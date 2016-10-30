'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');



var imageURL = require('../images/yeoman.png');
//获取图片相关数据
var imageDatas = require('../data/imagesDatas.json');
//利用自执行函数，将图片名信息转成图片url路径信息
imageDatas =(function genImageURL(imageDatasArr){
	for(var i = 0,j = imageDatasArr.length; i < j; i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


var GalleryByReactApp = React.createClass({
  render: function() {
    return (
     <section  className="stage">
     	<section className="img-sec">
     	</section>
     	<nav className="controller-nav">
     	</nav>
     </section>
    );
  }
});

module.exports = GalleryByReactApp;
