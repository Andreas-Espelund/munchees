/*
This file was modified by the Flashtalking Service Suite
Version: 2.4.7
Tool: conceptulator
Date: July 5, 2022 at 10:02:14 AM
Logged Changes: 
*/
/*
This file was modified by the Flashtalking Service Suite
Version: 2.4.7
Tool: animate2ft
Date: junio 10, 2022 at 13:27:18
Logged Changes: 
*/
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.adobe_logo = function() {
	this.initialize(img.adobe_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,101);


(lib.bg_black = function() {
	this.initialize(img.bg_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,180);


(lib.cv1 = function() {
	this.initialize(img.cv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.cv2 = function() {
	this.initialize(img.cv2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.cv3 = function() {
	this.initialize(img.cv3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.cv4 = function() {
	this.initialize(img.cv4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.cv5 = function() {
	this.initialize(img.cv5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.cv6 = function() {
	this.initialize(img.cv6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.cv7 = function() {
	this.initialize(img.cv7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.cv8 = function() {
	this.initialize(img.cv8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,600);


(lib.t = function() {
	this.initialize(img.t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,78);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADADQACACAAADQAAAEgCADQgCACgFAAQgDAAgDgCg");
	this.shape.setTransform(261.95,-131.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAcIAAgBIAAgfQAAgKgJABQgFAAgEADIAAAGIAAAfIgBABIgMAAIgBgBIAAgfQAAgJgJAAQgEAAgFACIAAAmIgBABIgNAAIgBgBIAAgpIAAgKIABgBIALAAIABAAIABAEQAHgGAJAAQAJAAAEAHQAJgHAJAAQAIAAAFAFQAGAFAAAMIAAAgIgBABg");
	this.shape_1.setTransform(256.1,-133.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAUQgGgHAAgMQAAgMAHgHQAHgKAMABQALgBAGAJQAGAGAAAKIgBAGIgBABIgLAAIgUAAQABAMANAAQAIgBAGgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAAKIgBACQgHACgKAAQgNAAgIgIgAgIgGIANAAIAFAAIAAgBQAAgDgBgCQgDgDgFAAQgIAAgBAJg");
	this.shape_2.setTransform(248.775,-133.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAZIAAg+IABgCIANAAIABACIAAA8QAAAEADAAIACAAIABABIAAAJIgBABIgHABQgNABAAgPg");
	this.shape_3.setTransform(244.775,-134.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAlIgBgBIAAhJIABgCIAOAAIABACIAAAWIAJgBQALgBAHAJQAIAGAAALQgBAOgJAJQgKAHgNAAQgJABgIgDgAgJgDIAAAeIAEAAQAGAAAEgEQAFgEAAgJQAAgHgEgDQgDgEgFAAIgHABg");
	this.shape_4.setTransform(240.25,-134.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTATQgHgHAAgMQAAgLAHgIQAIgIALAAQANAAAHAIQAHAIAAALQAAANgIAHQgHAJgMgBQgNABgGgKgAgIgKQgCAEAAAGQAAAHACAEQADAFAFAAQAFAAADgEQADgEAAgIQAAgFgDgFQgCgFgGAAQgFAAgDAFg");
	this.shape_5.setTransform(234.15,-133.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAcIgBgBIAAglIgBgPIABAAIAMAAIABABIABAFQAGgIALAAIABABIAAANIgBABQgGAAgFABIgFAEIAAAiIgBABg");
	this.shape_6.setTransform(229.525,-133.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAmIAAg/IAAgIIAAAAQAOgFAKAAQAMAAAIAIQAGAIABALQgBANgJAJQgKAHgNAAIgCAAIAAATIgBABIgOABIgBgBgAgJgYIAAAdIADAAQAGAAAEgDQAGgEAAgIQAAgPgMAAIgHABg");
	this.shape_7.setTransform(224.5,-132.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAUQgGgHAAgMQAAgMAHgHQAHgKAMABQALgBAGAJQAGAGAAAKIgBAGIgBABIgLAAIgUAAQABAMANAAQAIgBAGgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAAKIgBACQgHACgKAAQgNAAgIgIgAgIgGIANAAIAFAAIAAgBQAAgDgBgCQgDgDgFAAQgIAAgBAJg");
	this.shape_8.setTransform(216.275,-133.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTATQgHgHAAgMQAAgLAHgIQAIgIALAAQANAAAHAIQAHAIAAALQAAANgIAHQgHAJgMgBQgNABgGgKgAgIgKQgCAEAAAGQAAAHACAEQADAFAFAAQAFAAADgEQAEgEgBgIQAAgFgCgFQgEgFgFAAQgEAAgEAFg");
	this.shape_9.setTransform(210.55,-133.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAcIgBgBIAAgfQAAgKgJABQgEAAgEADIAAAlIgBABIgNAAIgBgBIAAgoIAAgMIABAAIALAAIABAAIABAEQAHgGAIAAQAIAAAEAFQAHAFgBANIAAAfIAAABg");
	this.shape_10.setTransform(204.55,-133.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAUQgGgHAAgMQAAgMAHgHQAHgKAMABQALgBAGAJQAGAGAAAKIgBAGIgBABIgLAAIgUAAQABAMANAAQAIgBAGgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAAKIgBACQgHACgKAAQgNAAgIgIgAgIgGIANAAIAFAAIAAgBQAAgDgBgCQgDgDgFAAQgIAAgBAJg");
	this.shape_11.setTransform(196.475,-133.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIAnIgBgBIgRgXIAAAXIgBABIgOAAIgBgBIAAhLIABgBIAOAAIABABIAAAsIARgVIABAAIAPAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgVAVIAAABIAXAdIAAABIAAAAg");
	this.shape_12.setTransform(191.4,-134.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAIAnIgBgBIgRgXIAAAXIgBABIgNAAIgBgBIAAhLIABgBIANAAIABABIAAAsIARgVIABAAIAPAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBABIgUAVIAAABIAXAdIAAABIAAAAg");
	this.shape_13.setTransform(185.85,-134.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAkIAAgBIAAhFIAAgBIAMAAIACABIAABFIgCABg");
	this.shape_14.setTransform(181.1,-134.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAjQgCgCAAgEQAAgEACgDQACgCAEAAQADAAADACQACADAAAEQAAAEgCACQgDACgDAAQgEAAgCgCgAgFANIgBgBQgDgDAAgEQAAgEACgCIAGgHQAFgFAAgDQAAgGgIAAQgGAAgIAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgMIABgBQAIgEAJAAQAJAAAGAFQAGAFAAAHQAAAJgHAHQgJAGAAADIACAGQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_15.setTransform(175.075,-134.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAcIgBgBIAAglIgBgPIABAAIAMAAIABABIABAFQAGgIALAAIABABIAAANIgBABQgGAAgFABIgFAEIAAAiIgBABg");
	this.shape_16.setTransform(170.875,-133.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAUQgGgHAAgMQAAgMAHgHQAHgKAMABQALgBAGAJQAGAGAAAKIgBAGIgBABIgLAAIgUAAQABAMANAAQAIgBAGgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAAKIgBACQgHACgKAAQgNAAgIgIgAgIgGIANAAIAFAAIAAgBQAAgDgBgCQgDgDgFAAQgIAAgBAJg");
	this.shape_17.setTransform(165.925,-133.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAKAcIgBgBIAAgfQAAgKgJABQgEAAgDADIAAAlIgBABIgOAAIgBgBIAAgoIgBgMIABAAIAMAAIACAAIABAEQAGgGAIAAQAIAAAFAFQAFAFABANIAAAfIgBABg");
	this.shape_18.setTransform(160.15,-133.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAiQgFgEAAgHQAAgGAKgIQgDgEAAgEQAAgDACgEQgHgEAAgKQAAgIAFgFQAHgGAKAAIAJABIADABIAPAAIABAAIAAALIgBAAIgHAAQACADAAAEQgBAIgGAFQgGAEgJAAIgDAAIAAACIABADIAKAAQAVACABAOQAAAJgIAGQgIAGgNAAQgMAAgIgGgAgMATIgBADQABACADADQADACAGAAQAGAAAFgCQACgCAAgDQABgFgLgBIgLAAIgEADgAgKgUQABADACACQACADADAAQAHAAAAgIQAAgIgHAAQgIAAAAAIg");
	this.shape_19.setTransform(154.45,-132.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAnIgBgBIAAg0IABgBIAMAAIABABIAAA0IgBABgAgFgXQgCgCgBgEQAAgEADgCQACgDADAAQAEAAACADQACACAAAEQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_20.setTransform(150.2,-134.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAaIgBgBIAAgNQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAHAEAJAAQAHAAAAgEQAAgDgHgCQgJgEgEgDQgEgEAAgGQAAgIAFgEQAGgFAKAAQAJgBAFADIABABIAAAMQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgHgDgIAAQgFAAAAAEQAAACAGADQAKAEAEADQAEAEAAAGQAAAIgGAFQgGAFgKgBQgKAAgGgCg");
	this.shape_21.setTransform(146.625,-133.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAUQgGgHAAgMQAAgMAHgHQAHgKAMABQALgBAGAJQAGAGAAAKIgBAGIgBABIgLAAIgUAAQABAMANAAQAIgBAGgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAAKIgBACQgHACgKAAQgNAAgIgIgAgIgGIANAAIAFAAIAAgBQAAgDgBgCQgDgDgFAAQgIAAgBAJg");
	this.shape_22.setTransform(141.675,-133.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAgQgHgHAAgOQAAgLAHgHQAJgKAOABIAEAAIAAgVIABgCIANAAIABABIAABAIAAAIIAAABQgLAFgLgBQgMABgIgIgAgEAAQgFADAAAIQAAAIAEAEQAEADAGABIAFgBIAAgdIgEgBQgGAAgEAEg");
	this.shape_23.setTransform(135.8,-134.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAUQgGgHAAgMQAAgMAHgHQAHgKAMABQALgBAGAJQAGAGAAAKIgBAGIgBABIgLAAIgUAAQABAMANAAQAIgBAGgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAAKIgBACQgHACgKAAQgNAAgIgIgAgIgGIANAAIAFAAIAAgBQAAgDgBgCQgDgDgFAAQgIAAgBAJg");
	this.shape_24.setTransform(127.875,-133.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAJAnIgCgBIgRgXIAAAXIgBABIgOAAIAAgBIAAhLIAAgBIAOAAIABABIAAAsIARgVIACAAIAOAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgVAVIAAABIAYAdIAAABIgBAAg");
	this.shape_25.setTransform(122.8,-134.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAIAnIgBgBIgRgXIAAAXIgBABIgOAAIgBgBIAAhLIABgBIAOAAIABABIAAAsIARgVIABAAIAPAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgVAVIAAABIAXAdIAAABIAAAAg");
	this.shape_26.setTransform(117.25,-134.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGAnIgBgBIAAg0IABgBIAMAAIACABIAAA0IgCABgAgGgXQgBgCAAgEQgBgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgDACgDAAQgDAAgDgCg");
	this.shape_27.setTransform(112.7,-134.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAHIAAghIABgBIANAAIABABIAAAfQAAAKAIAAQAEAAAEgEIAAglIABgBIAOAAIAAABIAAApIABALIgBABIgMAAIgBgBIAAgDQgHAFgIAAQgSAAAAgVg");
	this.shape_28.setTransform(106.025,-133.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAgQgIgHAAgOQAAgLAIgHQAIgKAOABIAEAAIAAgVIABgCIANAAIABABIAABAIAAAIIAAABQgLAFgLgBQgMABgHgIgAgEAAQgFADAAAIQAAAIAEAEQAEADAFABIAGgBIAAgdIgEgBQgGAAgEAEg");
	this.shape_29.setTransform(99.9,-134.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAcIgBgBIAAglIgBgPIABAAIAMAAIABABIABAFQAGgIALAAIABABIAAANIgBABQgGAAgFABIgFAEIAAAiIgBABg");
	this.shape_30.setTransform(93.075,-133.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAkIgBgBIAAhFIABgBIAqAAIABABIABALQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgeAAIAAAQIAbAAIABABIAAAKIgBABIgbAAIAAAQIAfAAIABABIgCAMIgBABg");
	this.shape_31.setTransform(88.225,-134.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(83,-144,200,17.799999999999997), null);


(lib.txt1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgEgFAAgGQAAgFAEgFQAEgDAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAFQgDADgHAAQgFAAgEgDg");
	this.shape.setTransform(301.825,-36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAyQgNgLAAgVQAAgSANgMQAOgOAWAAIAFAAIAAghIABgBIAWAAIABABIAABkIABAMIgCABQgQAHgRAAQgTAAgMgLgAgHAAQgHAFAAAMQAAAMAGAGQAGAGAJAAIAIgBIAAgtIgGgBQgJAAgHAGg");
	this.shape_1.setTransform(295.225,-41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglALIAAgzQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAVAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAvQAAAQANAAQAHAAAFgFIAAg6QAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAVAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAA/IABARQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgSAAIgCAAIgBgGQgJAIgNAAQgdAAgBggg");
	this.shape_2.setTransform(286.3,-39.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAeQgKgMAAgSQAAgSALgMQAMgNATAAQATAAALANQALAMAAASQAAAUgMAMQgLAMgTAAQgTAAgMgOgAgMgRQgFAHAAAKQAAALAFAHQAFAGAIAAQAHAAAFgGQAEgHABgLQAAgKgFgGQgFgHgIAAQgHAAgFAGg");
	this.shape_3.setTransform(277.05,-39.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAmIAAhgQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIATAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABdQAAAHAGAAIADAAIABABIAAAPQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgDACgHAAQgVAAAAgXg");
	this.shape_4.setTransform(270.575,-41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYArQgRgPAAgbQAAgZAQgQQARgQAbAAQAQAAAGADIABACIAAASQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAgBQgIgDgOAAQgRAAgJAJQgKAKAAAQQAAASAMAKQAJAIAPAAQANAAAIgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAARQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgIADgQAAQgYAAgQgOg");
	this.shape_5.setTransform(263.425,-41.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAeQgJgLAAgSQAAgSAKgMQALgOASAAQATAAAKAMQAHAKAAAPIAAAKIgCACIgRAAIggAAQABASAWAAQALAAAKgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgLAFgPAAQgVAAgMgOgAgNgJIAVAAIAIgBIAAgBQAAgEgCgEQgFgFgHAAQgNAAgCAPg");
	this.shape_6.setTransform(250.8,-39.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAqIgDgBIgbhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAWAAIACABIAQA8QACgMAQgwIACgBIATAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgcBRQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_7.setTransform(242.525,-39.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJA8QgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAIAUAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAABQQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAgAgJgkQgDgEAAgFQAAgHAEgDQADgEAFAAQAGAAAEAEQADADAAAHQAAAFgEAEQgDADgGAAQgFAAgEgDg");
	this.shape_8.setTransform(236.375,-41.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAfIAAgpIgKAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgQQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAIAKAAQABgNABgHQAAgBAAAAQAAAAABAAQAAAAAAgBQAAAAABAAIATgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIgBAXIAQAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIAAARIgBABIgQAAIAAAjQAAALAJAAIAGAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAAOQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgHACgIAAQgXAAAAgYg");
	this.shape_9.setTransform(231.525,-40.9312);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAlQgKgHAAgOQAAgOALgGQAKgHAQAAIAKAAIAAgBQAAgEgCgCQgFgFgHAAQgNAAgKAFQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgRIAAgCQAMgFAPAAQARAAAJAKQAJAJAAAQIAAAfIAAAMIAAABQgUAIgQAAQgPAAgKgHgAgMAPQAAALAOAAQAGAAAEgCIAAgSIgIgBQgQAAAAAKg");
	this.shape_10.setTransform(224.5,-39.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAeQgKgLABgSQgBgSALgMQAMgOARAAQASAAAKAMQAJAKgBAPIAAAKIgBACIgSAAIghAAQADASAVAAQALAAAKgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgLAFgPAAQgWAAgLgOgAgOgJIAWAAIAJgBIAAgBQAAgEgEgEQgEgFgHAAQgNAAgDAPg");
	this.shape_11.setTransform(216.3,-39.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWArQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAg5IgBgYIABgBIATAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIACAJQAJgMARAAIABABIAAAVQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgIAAgIACQgGACgCADIAAA1QAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_12.setTransform(209.525,-39.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYArQgRgPAAgbQAAgZAQgQQARgQAbAAQAQAAAGADIABACIAAASQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAgBQgIgDgOAAQgRAAgJAJQgKAKAAAQQAAASAMAKQAJAIAPAAQANAAAIgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAARQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgIADgQAAQgYAAgQgOg");
	this.shape_13.setTransform(201.525,-41.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAeQgKgLAAgSQAAgSALgMQALgOATAAQARAAALAMQAHAKABAPIgBAKIgCACIgRAAIggAAQABASAWAAQAMAAAJgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgKAFgQAAQgVAAgMgOgAgNgJIAVAAIAIgBIAAgBQAAgEgCgEQgEgFgIAAQgNAAgCAPg");
	this.shape_14.setTransform(188.9,-39.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglA6IgCgCIAAhzQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAVAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAiIAPgCQARAAALAMQAMALgBARQABAXgRANQgOALgTAAQgPAAgMgDgAgPgEIAAAtIAHAAQAJABAHgHQAHgGAAgNQAAgLgFgFQgHgGgIABIgKABg");
	this.shape_15.setTransform(180.3,-41.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAeQgKgMAAgSQAAgSALgMQAMgNATAAQATAAALANQALAMAAASQAAAUgMAMQgLAMgTAAQgTAAgMgOgAgMgRQgFAHAAAKQAAALAFAHQAFAGAIAAQAHAAAFgGQAEgHABgLQAAgKgFgGQgFgHgIAAQgHAAgFAGg");
	this.shape_16.setTransform(170.85,-39.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAyQgNgLAAgVQAAgSANgMQAOgOAWAAIAFAAIAAghIABgBIAWAAIABABIAABkIABAMIgCABQgQAHgRAAQgTAAgMgLgAgHAAQgHAFAAAMQAAAMAGAGQAGAGAJAAIAIgBIAAgtIgGgBQgJAAgHAGg");
	this.shape_17.setTransform(161.475,-41.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdA4IgCgBIgJgaIgmAAIgIAZIgCACIgUAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAihhIACgKQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAaAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAnBsQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAgAAMAIIgMgrIgOArIAaAAIAAAAg");
	this.shape_18.setTransform(151.9888,-41.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZA5QgKgHAAgOQAAgOALgHQAKgHAQAAIALAAIAAgBQAAgEgDgCQgFgEgHAAQgNAAgKAEQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgQIABgCQAMgFAOAAQASAAAJAKQAIAJAAAPIAAAgIABAMIgBABQgTAIgRAAQgOAAgKgHgAgMAjQAAALAOAAQAGAAAFgCIAAgTIgJAAQgQAAAAAKgAgKghQgFgEAAgJQAAgHAFgFQAFgEAHAAQAJAAAGAEQAFAFAAAHQAAAIgGAFQgEAFgKgBQgHABgFgFgAgDguQAAAIAFgBQAIABAAgIQAAgDgCgBQgCgCgEAAQgFAAAAAGg");
	this.shape_19.setTransform(138.75,-41.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmA7IAAhjIgBgLIABgBQAVgHAPAAQAUAAALAMQALAMAAARQAAAWgQAMQgPAMgUAAIgDAAIAAAdQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgVACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgAgOgmIAAAtIAFABQAJAAAHgFQAIgHAAgMQAAgXgTAAQgGAAgEABg");
	this.shape_20.setTransform(130.425,-38.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQAuQgGgIAAgNQAAgPAJgJQAHgHANAAQANAAAIAIQAHAIAAAOQAAANgHAIQgIAKgNAAQgOAAgJgJgAAcAYQAAAQALAAQAKAAAAgQQAAgQgKAAQgLAAAAAQgAgtA2IgBgBIABgBIBKhnIACgBIAPAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIhKBoIgCABgAg7gBQgHgIAAgNQAAgPAJgJQAIgIALAAQAPAAAHAJQAHAIAAAOQAAANgHAIQgIAJgOAAQgNAAgIgIgAgwgXQAAAQALAAQALAAgBgQQABgQgLAAQgLAAAAAQg");
	this.shape_21.setTransform(114.75,-40.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAxQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgTQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQANAHAPAAQASAAAAgOQAAgJgLgFQgJgEgYgCQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgJIAMgqIABgBIA1AAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgGASQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIghAAIgDAPQAvAGAAAfQAAAQgMAKQgLAJgTAAQgQAAgMgFg");
	this.shape_22.setTransform(99.7,-40.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAqQgLgMAAgTQAAgaAVgSQATgSAegDIABABIAAASIgBABQgOABgMAGQgKAGgGAKQAIgEAKAAQAPAAAKAJQAKAIAAAQQAAAPgKALQgMALgTAAQgSAAgLgNgAgQAHIAAAFQAAALAFAGQAEAGAIAAQAHAAAFgEQAEgEAAgIQAAgIgFgEQgFgEgHAAQgJAAgHAEg");
	this.shape_23.setTransform(90.775,-40.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWArQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAg6IgBgYIABgBIATAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIACAKQAJgNARAAIABABIAAAVQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgIAAgIACQgGADgCADIAAA1QAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_24.setTransform(296.975,-58.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAeQgJgLAAgSQAAgSAKgMQAMgOARAAQATAAAJAMQAJAKgBAPIAAAKIgCACIgRAAIghAAQACASAWAAQALAAAKgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgLAFgPAAQgWAAgLgOgAgOgJIAWAAIAJgBIAAgBQAAgEgEgEQgEgFgHAAQgNAAgDAPg");
	this.shape_25.setTransform(289.3,-58.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKAqIgDgBIgbhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAWAAIACABIAQA8QACgMAQgwIACgBIATAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgcBRQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_26.setTransform(281.025,-58.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfAeQgKgMAAgSQAAgSALgMQAMgNATAAQATAAALANQALAMAAASQAAAUgMAMQgLAMgTAAQgUAAgLgOgAgMgRQgFAHAAAKQAAALAFAHQAFAGAIAAQAHAAAFgGQAFgHAAgLQgBgKgEgGQgFgHgIAAQgHAAgFAGg");
	this.shape_27.setTransform(272.35,-58.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWArQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAg6IgBgYIABgBIATAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIACAKQAJgNARAAIABABIAAAVQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgIAAgIACQgGADgCADIAAA1QAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_28.setTransform(261.575,-58.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAlQgLgHAAgOQAAgOALgGQAKgHARAAIAKAAIAAgBQgBgEgCgCQgEgFgIAAQgNAAgKAFQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAgRIABgCQALgFAPAAQASAAAJAKQAJAJgBAQIAAAfIABAMIgBABQgTAIgRAAQgPAAgIgHgAgMAPQAAALAOAAQAGAAAFgCIAAgSIgJgBQgQAAAAAKg");
	this.shape_29.setTransform(253.7,-58.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmA7IAAhjIgBgMIABAAQAVgHAPAAQAUAAALANQALALAAARQAAAWgQAMQgPAMgUAAIgDAAIAAAcQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgVACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgAgOglIAAAtIAFAAQAJAAAHgGQAIgFAAgNQAAgXgTAAQgGAAgEACg");
	this.shape_30.setTransform(245.375,-56.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjA0QAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgUQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAABQAOAJASAAQARAAAAgLQAAgIgPgGIgJgEQgOgGgHgHQgFgIgBgKQAAgPALgJQALgJATAAQARAAAJAEIABACIAAATQAAABAAAAQAAAAAAAAQgBABAAAAQAAgBgBAAQgJgFgQAAQgSAAABAKQAAAEADADQAEADAIAEIAGACQAQAHAIAHQAFAIAAALQAAAPgMAJQgLAJgSAAQgUAAgLgFg");
	this.shape_31.setTransform(236.4,-59.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJAlQgEgEAAgHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAHgDAEQgEADgHABQgFgBgEgDgAgJgPQgEgEAAgGQAAgGAEgFQAEgDAFAAQAGAAAEADQAEAFAAAGQAAAGgDAEQgEAEgHAAQgFAAgEgEg");
	this.shape_32.setTransform(226.125,-57.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWArQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAg6IgBgYIABgBIATAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIACAKQAJgNARAAIABABIAAAVQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgIAAgIACQgGADgCADIAAA1QAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_33.setTransform(221.175,-58.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAeQgKgLAAgSQAAgSALgMQAMgOASAAQARAAAKAMQAJAKgBAPIAAAKIgBACIgSAAIghAAQADASAVAAQALAAAKgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgKAFgQAAQgWAAgLgOgAgOgJIAWAAIAJgBIAAgBQgBgEgDgEQgDgFgIAAQgNAAgDAPg");
	this.shape_34.setTransform(213.5,-58.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOAfIAAgpIgKAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgQQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAKAAQABgNABgHQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIATgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBAXIAQAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAARIgBABIgQAAIAAAjQAAALAJAAIAGAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAAOQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgHACgIAAQgXAAAAgYg");
	this.shape_35.setTransform(206.525,-59.1812);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQArQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgwQAAgPgNgBQgIABgFAEIAAA7QAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgVAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAg+IgBgTQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAIASAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIABAFQALgIAMAAQAMAAAHAHQAKAJAAASIAAAyQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_36.setTransform(199.2688,-58.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcAeQgJgLAAgSQAAgSAKgMQAMgOARAAQATAAAJAMQAIAKAAAPIAAAKIgCACIgRAAIghAAQADASAVAAQAMAAAJgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgLAFgPAAQgWAAgLgOgAgOgJIAWAAIAJgBIAAgBQAAgEgDgEQgFgFgHAAQgNAAgDAPg");
	this.shape_37.setTransform(190.4,-58.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAyQgNgLAAgVQAAgSANgNQAOgMAWAAIAFAAIAAgiIABgBIAWAAIABABIAABjIABANIgCACQgQAGgRAAQgTAAgMgLgAgHAAQgHAFAAAMQAAAMAGAGQAGAGAJAAIAIgBIAAgtIgGgBQgJAAgHAGg");
	this.shape_38.setTransform(181.375,-59.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglALIAAg0QAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAVAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAwQAAAQANAAQAHAAAFgFIAAg7QAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAVAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAA/IABASQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgSAAIgCgBIgBgFQgJAIgNAAQgdAAgBggg");
	this.shape_39.setTransform(172.45,-57.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOAfIAAgpIgKAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgQQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAKAAQABgNABgHQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIATgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBAXIAQAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAARIgBABIgQAAIAAAjQAAALAJAAIAGAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAAOQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgHACgIAAQgXAAAAgYg");
	this.shape_40.setTransform(165.075,-59.1812);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcAnIgBgCIAAgSQAAgBAAAAQAAAAAAAAQAAgBABAAQAAABAAAAQALAHAOAAQALAAAAgGQAAgFgMgEQgOgGgGgFQgGgGAAgKQAAgLAIgHQAJgIAPAAQAPAAAHADQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABIAAARQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQgKgFgMAAQgKAAAAAGQAAAEAMAFQAPAFAGAGQAGAGAAAJQAAAMgKAIQgJAHgPAAQgQAAgJgFg");
	this.shape_41.setTransform(159.175,-58.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AggA1QgKgHAAgLQAAgIAQgNQgEgGAAgHQAAgFADgFQgLgIAAgOQAAgNAJgIQAJgIARAAIAPABIAEAAIAXAAIABABIAAAQIgBABIgMAAQADAEAAAHQAAANgKAHQgJAHgOAAIgGgBIAAAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAIARABQAhACAAAWQAAAOgMAJQgNAJgTAAQgUAAgLgIgAgSAdIgCAEQAAAEAFAEQAGADAJAAQAKAAAGgDQAFgDAAgFQAAgHgRgBIgSgBIgEAFgAgPggQAAAFADAEQADADAGAAQAKAAAAgLQAAgMgKAAQgMAAAAALg");
	this.shape_42.setTransform(147.925,-56.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgfAeQgKgMAAgSQAAgSALgMQAMgNATAAQATAAALANQALAMAAASQAAAUgMAMQgLAMgTAAQgTAAgMgOgAgMgRQgFAHAAAKQAAALAFAHQAFAGAIAAQAHAAAFgGQAFgHAAgLQAAgKgFgGQgFgHgIAAQgHAAgFAGg");
	this.shape_43.setTransform(138.8,-58.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgWArQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAg6IgBgYIABgBIATAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIACAKQAJgNARAAIABABIAAAVQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgIAAgIACQgGADgCADIAAA1QAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_44.setTransform(128.025,-58.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgcAeQgKgLAAgSQAAgSALgMQAMgOARAAQASAAAKAMQAJAKgBAPIAAAKIgBACIgSAAIghAAQADASAVAAQALAAAKgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgLAFgPAAQgWAAgLgOgAgOgJIAWAAIAJgBIAAgBQgBgEgDgEQgDgFgIAAQgNAAgDAPg");
	this.shape_45.setTransform(120.35,-58.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAqIgDgBIgbhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAWAAIACABIAQA8QACgMAQgwIACgBIATAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgcBRQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_46.setTransform(112.075,-58.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcAeQgKgLABgSQgBgSALgMQAMgOASAAQARAAALAMQAHAKABAPIgBAKIgCACIgRAAIggAAQABASAWAAQAMAAAJgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAQIgBACQgLAFgPAAQgWAAgLgOgAgNgJIAVAAIAIgBIAAgBQAAgEgCgEQgFgFgHAAQgNAAgCAPg");
	this.shape_47.setTransform(103.75,-58.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgQAmIAAhhQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIATAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAABfQAAAGAGAAIADAAIABABIAAAOQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgDACgHAAQgVAAAAgXg");
	this.shape_48.setTransform(97.625,-59.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgjA4QgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAhrQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIBCAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIACASQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgvAAIAAAWIAqAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAASQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgqAAIAAAZIAxAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIgDASQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAg");
	this.shape_49.setTransform(90.975,-59.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(84,-73,290,43.5), null);


(lib.t_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.t();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t_1, new cjs.Rectangle(0,0,36,39), null);


(lib.line_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005ED2").s().p("A3bDIIAAmPMArvAAAQBTAAA6A3QA7A2AABNIAAAaQAABNg7A3Qg6A3hTAAg");
	this.shape.setTransform(150,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line_blue, new cjs.Rectangle(0,0,300,40), null);


(lib.lin_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C606").s().p("A3bDIIAAmPMAu3AAAIAAGPg");
	this.shape.setTransform(150,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lin_yellow, new cjs.Rectangle(0,0,300,40), null);


(lib.cv8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv8();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv8_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv7();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv7_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv6();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv6_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv5();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv5_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv4();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv4_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv3();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv3_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv2();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv2_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cv1();
	this.instance.setTransform(0,0,0.4473,0.4473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv1_1, new cjs.Rectangle(0,0,208,268.4), null);


(lib.cv_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AroU8MAAAgp3IXRAAMAAAAp3g");
	this.shape.setTransform(541.5,-179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv_bg, new cjs.Rectangle(467,-313,149,268), null);


(lib.bg_black_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.bg_black();
	this.instance.setTransform(152,-302);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_black_1, new cjs.Rectangle(152,-302,488,180), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3266").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,728,90), null);


(lib.adobe_logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.adobe_logo();
	this.instance.setTransform(0,-1,0.5184,0.515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.adobe_logo_1, new cjs.Rectangle(0,-1,36.8,52), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAvQgJgHABgLQgBgLAKgGQAHgGAOAAIAIAAIAAgBQABgDgDgCQgDgCgHAAQgKAAgIACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAgNQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAJgEAMAAQAOAAAIAIQAHAIAAALIAAAbIAAAKIAAABQgQAGgNAAQgNAAgHgFgAgJAdQgBAIALAAQAGAAADgBIAAgPIgHgBQgNAAABAJgAgJgbQgDgEAAgHQAAgGADgEQAFgDAGAAQAHAAAFADQAEAEAAAGQAAAHgEAEQgFADgHAAQgGAAgFgDgAgCgmQgBAGAFAAQAGAAAAgGQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAAAAAgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgFAAABAFg");
	this.shape.setTransform(70.25,18.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAjQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgmQAAgNgLgBQgGABgFAEIAAAvQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgRAAIgBgBIAAgzIgBgPQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAPAAIACABIABAEQAJgGAKgBQAJAAAGAGQAIAHAAAPIAAApQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1.setTransform(63.1938,20.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAwIAAhRIgBgJIABAAQARgGAMgBQAQAAAKALQAJAKAAANQAAASgOAKQgMAKgQAAIgDgBIAAAZIgBABIgRABIgBgBgAgMgfIAAAmIAFAAQAHAAAGgFQAHgEAAgLQAAgTgRAAIgIABg");
	this.shape_2.setTransform(52.875,21.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAgIgCADIgBABIgKAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAABgBIAGgIQgKgKAAgQQAAgOAKgLQAKgKAOAAQALAAAHAEIACgCIACgBIAKAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgGAIQAIAKAAAPQAAAQgJAKQgJAKgQAAQgJAAgIgEgAgHASQAEADADAAQAHAAAEgGQAFgFAAgKQgBgEgBgFgAgKgOQgFAGAAAIQABAGACAFIAUgcQgEgDgEAAQgGAAgEAGg");
	this.shape_3.setTransform(45.15,20.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBAIgBgCIAAgOIABgBQAFAAADgDQADgDAAgHIAAhDIABgBIAQAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAA+QAAALgBAGQgCAFgEAFQgGAIgNAAgAgBgtQgDgCAAgGQAAgEADgDQACgDAFAAQAFAAADADQACADAAAEQAAAGgCACQgEAEgFAAQgEAAgCgEg");
	this.shape_4.setTransform(39.15,20.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAuIgDgBIgggoIAAAoQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgRAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAhYIABgBIARAAIABABIAAAnIAggnIACgBIATAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgkApIAAABIAmAtQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAg");
	this.shape_5.setTransform(34.6417,19.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("Aj+i4IH9AAQBLAAA1A2QA0A2AABMQAABMg0A3Qg1A2hLAAIn9AAQhLAAg1g2Qg0g3AAhMQAAhMA0g2QA1g2BLAAg");
	this.shape_6.setTransform(49.5,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAvQgJgHABgLQgBgLAKgGQAHgGAOAAIAIAAIAAgBQABgDgDgCQgDgCgHAAQgKAAgIACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAgNQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAJgEAMAAQAOAAAIAIQAHAIAAALIAAAbIAAAKIAAABQgQAGgNAAQgNAAgHgFgAgJAdQgBAIALAAQAGAAADgBIAAgPIgHgBQgNAAABAJgAgJgbQgDgEAAgHQAAgGADgEQAFgDAGAAQAHAAAFADQAEAEAAAGQAAAHgEAEQgFADgHAAQgGAAgFgDgAgCgmQgBAGAFAAQAGAAAAgGQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAAAAAgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgFAAABAFg");
	this.shape_7.setTransform(70.25,18.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANAjQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgmQAAgNgLgBQgGABgFAEIAAAvQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgRAAIgBgBIAAgzIgBgPQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAPAAIACABIABAEQAJgGAKgBQAJAAAGAGQAIAHAAAPIAAApQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_8.setTransform(63.1938,20.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAwIAAhRIgBgJIABAAQARgGAMgBQAQAAAKALQAJAKAAANQAAASgOAKQgMAKgQAAIgDgBIAAAZIgBABIgRABIgBgBgAgMgfIAAAmIAFAAQAHAAAGgFQAHgEAAgLQAAgTgRAAIgIABg");
	this.shape_9.setTransform(52.875,21.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAgIgCADIgBABIgKAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAABgBIAGgIQgKgKAAgQQAAgOAKgLQAKgKAOAAQALAAAHAEIACgCIACgBIAKAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgGAIQAIAKAAAPQAAAQgJAKQgJAKgQAAQgJAAgIgEgAgHASQAEADADAAQAHAAAEgGQAFgFAAgKQgBgEgBgFgAgKgOQgFAGAAAIQABAGACAFIAUgcQgEgDgEAAQgGAAgEAGg");
	this.shape_10.setTransform(45.15,20.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOBAIgBgCIAAgOIABgBQAFAAADgDQADgDAAgHIAAhDIABgBIAQAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAA+QAAALgBAGQgCAFgEAFQgGAIgNAAgAgBgtQgDgCAAgGQAAgEADgDQACgDAFAAQAFAAADADQACADAAAEQAAAGgCACQgEAEgFAAQgEAAgCgEg");
	this.shape_11.setTransform(39.15,20.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAuIgDgBIgggoIAAAoQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgRAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAhYIABgBIARAAIABABIAAAnIAggnIACgBIATAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgkApIAAABIAmAtQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAg");
	this.shape_12.setTransform(34.6417,19.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Aj+C5QhLAAg1g2Qg0g3AAhMQAAhMA0g2QA1g2BLAAIH9AAQBKAAA2A2QA0A2AABMQAABMg0A3Qg2A2hKAAg");
	this.shape_13.setTransform(49.5,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Eg7wAHgIAAu/MB3hAAAIAAO/g");
	this.shape_14.setTransform(25.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357,-28,765,96);


(lib.cv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cv8
	this.instance = new lib.cv8_1();
	this.instance.setTransform(25.95,240.55,0.2562,0.2562,-29.9997,0,0,25.8,241.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({regX:25.9,regY:241.5,scaleX:1,scaleY:1,rotation:0,x:25.9,y:240.5},17,cjs.Ease.get(1)).wait(1));

	// cv5
	this.instance_1 = new lib.cv5_1();
	this.instance_1.setTransform(186.5,133.2,1,1,0,0,0,104,134.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:104},17,cjs.Ease.get(1)).wait(18));

	// cv3
	this.instance_2 = new lib.cv3_1();
	this.instance_2.setTransform(104,61.7,1,1,0,0,0,104,134.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:133.2},17,cjs.Ease.get(1)).wait(26));

	// cv4
	this.instance_3 = new lib.cv4_1();
	this.instance_3.setTransform(104,-67,1,1,0,0,0,104,134.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:133.2},17,cjs.Ease.get(1)).wait(16));

	// cv7
	this.instance_4 = new lib.cv7_1();
	this.instance_4.setTransform(21.5,133.2,1,1,0,0,0,104,134.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({x:104},17,cjs.Ease.get(1)).wait(6));

	// cv6
	this.instance_5 = new lib.cv6_1();
	this.instance_5.setTransform(27,133.2,1,1,0,0,0,104,134.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({x:104},17,cjs.Ease.get(1)).wait(12));

	// cv2
	this.instance_6 = new lib.cv2_1();
	this.instance_6.setTransform(186.5,133.2,1,1,0,0,0,104,134.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({x:104},17,cjs.Ease.get(1)).wait(28));

	// cv1
	this.instance_7 = new lib.cv1_1();
	this.instance_7.setTransform(104,408.2,1,1,0,0,0,104,134.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:133.2},17,cjs.Ease.get(1)).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-201.2,373,743.5999999999999);


// stage content:
(lib.FY22Q3_CC_Student_Blank_NO_NO_DCOHowtoresume_ROI_AN_728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(106));

	// cta
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(406.3,44.4,0.9537,0.9488,0,0,0,53.8,19.4);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Símbolo1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

	// t
	this.instance_1 = new lib.t_1();
	this.instance_1.setTransform(711.8,-25.3,1.0003,1.0253,0,0,0,19.8,19.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({y:18.7},15,cjs.Ease.get(1)).wait(52));

	// line_yellow
	this.instance_2 = new lib.line_blue();
	this.instance_2.setTransform(711.25,-139.4,0.9,0.8994,90,0,0,151.8,18.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({y:-59.4},15,cjs.Ease.get(1)).wait(57));

	// line_yellow
	this.instance_3 = new lib.lin_yellow();
	this.instance_3.setTransform(750.2,42.5,0.12,2.2498,0,0,0,151.7,18.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:710.2},15,cjs.Ease.get(1)).wait(62));

	// cv_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_54 = new cjs.Graphics().p("ArdO3IAA9tIW8AAIAAdtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_54,x:587.5,y:107.275}).wait(52));

	// cv
	this.instance_4 = new lib.cv("synched",0,false);
	this.instance_4.setTransform(587.8,107.3,0.7098,0.7098,0,0,0,104,134.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).wait(52));

	// cv_bg
	this.instance_5 = new lib.cv_bg();
	this.instance_5.setTransform(149.5,742.5,1,1,0,0,0,103.5,134);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({y:459},15,cjs.Ease.get(1)).wait(52));

	// black_bg
	this.instance_6 = new lib.bg_black_1();
	this.instance_6.setTransform(483.1,226.05,0.5,0.5001,0,0,0,150.2,150.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(67));

	// txt2
	this.instance_7 = new lib.txt2();
	this.instance_7.setTransform(65.5,213,1,1,0,0,0,115,12);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({x:133,alpha:1},15,cjs.Ease.get(1)).wait(82));

	// txt1
	this.instance_8 = new lib.txt1();
	this.instance_8.setTransform(69.3,139.3,1,1,0,0,0,119.8,54.3);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:136.8,alpha:1},15,cjs.Ease.get(1)).wait(91));

	// adobe_logo
	this.instance_9 = new lib.adobe_logo_1();
	this.instance_9.setTransform(38,45.6,1,1,0,0,0,18,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(106));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363,-231,405,794.5);
// library properties:
lib.properties = {
	id: 'ABBDA611786146D29800F07412EA4F06',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FF3266",
	opacity: 1.00,
	manifest: [
		{src:"images/adobe_logo.png?1654124210346", id:"adobe_logo"},
		{src:"images/bg_black.jpg?1654124210346", id:"bg_black"},
		{src:"images/cv1.png?1654124210346", id:"cv1"},
		{src:"images/cv2.png?1654124210346", id:"cv2"},
		{src:"images/cv3.png?1654124210346", id:"cv3"},
		{src:"images/cv4.png?1654124210346", id:"cv4"},
		{src:"images/cv5.png?1654124210346", id:"cv5"},
		{src:"images/cv6.png?1654124210346", id:"cv6"},
		{src:"images/cv7.png?1654124210346", id:"cv7"},
		{src:"images/cv8.png?1654124210346", id:"cv8"},
		{src:"images/t.png?1654124210346", id:"t"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ABBDA611786146D29800F07412EA4F06'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;