(this.webpackJsonprobot=this.webpackJsonprobot||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i,o,a=n(0),r=n.n(a),s=n(9),c=n.n(s),h=(n(15),n(16),n(3)),u=n(4),l=n(6),b=n(5),O=n(2),d=n(7),f=(n(17),n(18),function(t){function e(){return Object(h.a)(this,e),Object(l.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"renderRobot",value:function(t,e){var n=this.props.robotBrain,i=n.orientation===n.constructor.ORIENTATIONS.E?90:n.orientation===n.constructor.ORIENTATIONS.S?180:n.orientation===n.constructor.ORIENTATIONS.W?270:0;return e===n.x&&t===n.y?r.a.createElement("div",{style:{transform:"rotate(".concat(i,"deg)"),color:"white"}},"^"):r.a.createElement("div",null,"*")}},{key:"render",value:function(){var t=this,e=this.props,n=e.width,i=e.height;e.robotBrain;return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-squares"},Array.from({length:i}).map((function(e,o){return r.a.createElement("div",{className:"table-row",key:o},Array.from({length:n}).map((function(e,a){return r.a.createElement("div",{className:"table-col",style:{width:"".concat(100/n,"%")},key:a},t.renderRobot(i-o-1,a))})))}))))}}]),e}(r.a.Component)),E=n(1),N=(n(19),function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(l.a)(this,Object(b.a)(e).call(this,t))).state={x:"",y:"",orientation:""},n.onPlace=n.onPlace.bind(Object(O.a)(n)),n.onLeft=n.onLeft.bind(Object(O.a)(n)),n.onRight=n.onRight.bind(Object(O.a)(n)),n.onMove=n.onMove.bind(Object(O.a)(n)),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"onChange",value:function(t,e){var n=e.target.value;this.setState(Object(E.a)({},t,n))}},{key:"onPlace",value:function(){this.hasError||this.props.onPlace(this.state)}},{key:"onLeft",value:function(){this.props.onLeft()}},{key:"onRight",value:function(){this.props.onRight()}},{key:"onMove",value:function(){this.props.onMove()}},{key:"render",value:function(){var t=this.robotBrain.canReceiveCommands;return r.a.createElement("div",{className:"commands"},r.a.createElement("div",{className:"input-fields"},r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.onPlace,disabled:this.hasError},"Place"),r.a.createElement("input",{"data-has-error":this.xHasError,onChange:this.onChange.bind(this,"x")}),r.a.createElement("input",{"data-has-error":this.yHasError,onChange:this.onChange.bind(this,"y")}),r.a.createElement("input",{"data-has-error":this.orientationHasError,onChange:this.onChange.bind(this,"orientation")})),r.a.createElement("div",{className:"row"},r.a.createElement("button",{disabled:!t,onClick:this.onLeft},"Left"),r.a.createElement("button",{disabled:!t,onClick:this.onRight},"Right"),r.a.createElement("button",{disabled:!t,onClick:this.onMove},"Move"),r.a.createElement("div",{className:"report"},this.robotBrain.report||"-"))))}},{key:"robotBrain",get:function(){return this.props.robotBrain}},{key:"xHasError",get:function(){return!this.robotBrain.isValidX(this.state.x)}},{key:"yHasError",get:function(){return!this.robotBrain.isValidY(this.state.y)}},{key:"orientationHasError",get:function(){return!this.robotBrain.isValidOrientation(this.state.orientation)}},{key:"hasError",get:function(){return this.xHasError||this.yHasError||this.orientationHasError}}]),e}(r.a.Component)),v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;Object(h.a)(this,t),this.tableWidth=e,this.tableHeight=n,this._x=null,this._y=null,this._orientation=null}return Object(u.a)(t,[{key:"isValidOrientation",value:function(t){return t.toUpperCase()in this.constructor.ORIENTATIONS}},{key:"isValidX",value:function(t){return this.isValidCoordinate("x",t)}},{key:"isValidY",value:function(t){return this.isValidCoordinate("y",t)}},{key:"isValidCoordinate",value:function(t,e){var n="x"===t?this.tableWidth:this.tableHeight,i=+e;return""!==e&&Math.round(i)===i&&i>=0&&i<n}},{key:"turnLeft",value:function(){this.orientation=y[this.orientation]}},{key:"turnRight",value:function(){this.orientation=m[this.orientation]}},{key:"move",value:function(){var t,e=this.x,n=this.y,i=this.orientation;(t={},Object(E.a)(t,i===this.constructor.ORIENTATIONS.N,(function(){return n+=1})),Object(E.a)(t,i===this.constructor.ORIENTATIONS.S,(function(){return n-=1})),Object(E.a)(t,i===this.constructor.ORIENTATIONS.E,(function(){return e+=1})),Object(E.a)(t,i===this.constructor.ORIENTATIONS.W,(function(){return e-=1})),t).true(),this.x=e,this.y=n}},{key:"orientation",get:function(){return this._orientation},set:function(t){this.isValidOrientation(t)&&(this._orientation=t.toUpperCase())}},{key:"x",get:function(){return this._x},set:function(t){this.isValidX(t)&&(this._x=+t)}},{key:"y",get:function(){return this._y},set:function(t){this.isValidY(t)&&(this._y=+t)}},{key:"report",get:function(){return this.canReceiveCommands&&"".concat(this.x,", ").concat(this.y,", ").concat(this.orientation)||""}},{key:"canReceiveCommands",get:function(){return!!this.orientation}}],[{key:"ORIENTATIONS",get:function(){return Object.freeze({N:"N",S:"S",E:"E",W:"W"})}}]),t}(),y=(i={},Object(E.a)(i,v.ORIENTATIONS.N,v.ORIENTATIONS.W),Object(E.a)(i,v.ORIENTATIONS.W,v.ORIENTATIONS.S),Object(E.a)(i,v.ORIENTATIONS.S,v.ORIENTATIONS.E),Object(E.a)(i,v.ORIENTATIONS.E,v.ORIENTATIONS.N),i),m=(o={},Object(E.a)(o,v.ORIENTATIONS.N,v.ORIENTATIONS.E),Object(E.a)(o,v.ORIENTATIONS.E,v.ORIENTATIONS.S),Object(E.a)(o,v.ORIENTATIONS.S,v.ORIENTATIONS.W),Object(E.a)(o,v.ORIENTATIONS.W,v.ORIENTATIONS.N),o),I=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(l.a)(this,Object(b.a)(e).call(this,t))).tableWidth=5,n.tableHeight=5,n.robotBrain=new v(n.tableWidth,n.tableHeight),n.onPlace=n.onPlace.bind(Object(O.a)(n)),n.onLeft=n.onLeft.bind(Object(O.a)(n)),n.onRight=n.onRight.bind(Object(O.a)(n)),n.onMove=n.onMove.bind(Object(O.a)(n)),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"onPlace",value:function(t){var e=t.x,n=t.y,i=t.orientation;this.robotBrain.x=e,this.robotBrain.y=n,this.robotBrain.orientation=i,this.forceUpdate()}},{key:"onLeft",value:function(){this.robotBrain.turnLeft(),this.forceUpdate()}},{key:"onRight",value:function(){this.robotBrain.turnRight(),this.forceUpdate()}},{key:"onMove",value:function(){this.robotBrain.move(),this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement("div",{className:"stage"},r.a.createElement(f,{robotBrain:this.robotBrain,width:this.tableWidth,height:this.tableHeight}),r.a.createElement(N,{robotBrain:this.robotBrain,onPlace:this.onPlace,onLeft:this.onLeft,onRight:this.onRight,onMove:this.onMove}))}}]),e}(r.a.PureComponent);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5c970eeb.chunk.js.map