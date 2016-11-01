'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');



//获取图片相关数据
var imageDatas = require('../data/imageData.json');
//利用自执行函数，将图片名信息转成图片url路径信息 为其添加属性
imageDatas = (function genImageURL(imageDatasArr) {
	for(var i = 0, j = imageDatasArr.length; i < j; i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
	render: function(){
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL}
					 alt={this.props.data.title}
				/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
			);
	}
});

var GalleryByReactApp = React.createClass({
  render: function() {
  	var controllerUnits = [],
  		ImgFigures = [];
  		imageDatas.forEach(function(value){
  			ImgFigures.push(<ImgFigure data={value}/>);
  		});
    return (
     <section className = "stage">
     	<section className = "img-sec">
     		{ImgFigures}
     	</section>
     	<nav className = "controller-nav">
     		{controllerUnits}
     	</nav> 
     </section>
    );
  }
});

module.exports = GalleryByReactApp;
