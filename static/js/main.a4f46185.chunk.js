(this["webpackJsonplogic-circuit-simulator"]=this["webpackJsonplogic-circuit-simulator"]||[]).push([[0],[,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return s}));var a=function(t){for(var e=!1,n=0;n<t.length;n++){if(!1===t[n])return[!1];void 0===t[n]&&(e=!0)}return e?[void 0]:[!0]},r=function(t){return void 0===t[0]?[void 0]:[!t[0]]},o=function(t){for(var e=!1,n=0;n<t.length;n++){if(!0===t[n])return[!0];void 0===t[n]&&(e=!0)}return e?[void 0]:[!1]},i=function(){return[!0]},s=function(){return[!1]}},function(t,e,n){t.exports={LogicGate:"LogicGate_LogicGate__1Cc_p",LogicGateDummy:"LogicGate_LogicGateDummy__19ubT",LogicGateInputs:"LogicGate_LogicGateInputs__oV9js",LogicGateOutputs:"LogicGate_LogicGateOutputs__3uRMQ",LogicGateValue:"LogicGate_LogicGateValue__3jkbZ"}},function(t,e,n){t.exports={Node:"Node_Node__281H-",NodeStart:"Node_NodeStart__1jpUM",NodeButton:"Node_NodeButton__1rebI",NodeNameBox:"Node_NodeNameBox__345Rr",NodeEnd:"Node_NodeEnd__4v1_S",NodeHandle:"Node_NodeHandle__KdPUw",NodeButtonUndefined:"Node_NodeButtonUndefined__2T20-",NodeButtonTrue:"Node_NodeButtonTrue__1G1Qu",NodeButtonFalse:"Node_NodeButtonFalse__2WrOE"}},,function(t,e,n){t.exports={MainNewText:"ProjectPopup_MainNewText__1SFYZ",MainNewButton:"ProjectPopup_MainNewButton__2GPPS",MainList:"ProjectPopup_MainList__191xa",MainListProject:"ProjectPopup_MainListProject__3HcTX",MainListProjectBody:"ProjectPopup_MainListProjectBody__2OszP",MainListProjectDelete:"ProjectPopup_MainListProjectDelete__2zh0d"}},,,function(t,e,n){"use strict";var a=n(2),r=n(3),o=n(5),i=n(4),s=n(1),c=n.n(s),u=n(21),l=n(22),d=n(8),f=n.n(d),p=n(0),h=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).handleMouseDown=function(e){0===e.button&&t.props.addGate(e,{gateName:t.props.gateName,function:t.props.function,style:t.style,inputCount:t.props.inputs,outputCount:t.props.outputs})},t}return Object(r.a)(n,[{key:"render",value:function(){for(var t=this,e=[],n=0;n<this.props.inputs;n++)e.push(Object(p.jsx)(l.a,{}));for(var a=[],r=0;r<this.props.outputs;r++)a.push(Object(p.jsx)(u.a,{}));var o={backgroundColor:this.props.color};return Object(p.jsxs)("div",{className:"".concat(f.a.LogicGate," ").concat(f.a.LogicGateDummy),style:o,onMouseDown:function(e){return t.props.addGate(e,{gateName:t.props.gateName,function:t.props.function,style:o,inputCount:t.props.inputs,outputCount:t.props.outputs})},children:[Object(p.jsx)("div",{className:f.a.LogicGateInputs,children:e}),Object(p.jsxs)("h5",{className:f.a.LogicGateValue,children:[" ",this.props.gateName.replace("f_","")," "]}),Object(p.jsx)("div",{className:f.a.LogicGateOutputs,children:a})]})}}]),n}(c.a.Component);e.a=h},function(t,e,n){"use strict";var a=n(13),r=n(6),o=n(17),i=n(2),s=n(3),c=n(10),u=n(5),l=n(4),d=n(29),f=n(27),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(t=e.call.apply(e,[this].concat(s))).state=Object(o.a)(Object(o.a)({},t.state),{},{childPins:[],value:!1}),t.handleOnMouseDown=function(e){0===e.button?t.props.setFocusedElement(Object(c.a)(t)):1===e.button&&t.toggleValue()},t.selfDestruct=function(){t.fireRemoveEvent(),t.setState({render:!1});var e,n=Object(r.a)(t.state.childPins);try{for(n.s();!(e=n.n()).done;){e.value.disconnect(Object(c.a)(t))}}catch(a){n.e(a)}finally{n.f()}},t}return Object(s.a)(n,[{key:"connect",value:function(t){var e=this.state.childPins;e.push(t),this.setState({childPins:e})}},{key:"disconnect",value:function(t){var e=this.state.childPins,n=e.indexOf(t),r=Object(a.a)(e);r.splice(n,1),this.setState({childPins:r})}},{key:"toggleValue",value:function(){var t=!this.state.value;this.setState({value:t},(function(){for(var e=0;e<this.state.childPins.length;e++)this.state.childPins[e].receiveSignal(t);this.state.ref.current.dispatchEvent(f.a)}))}}]),n}(d.a);e.a=p},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return retrieveFunction})),__webpack_require__.d(__webpack_exports__,"b",(function(){return makeNewGate})),__webpack_require__.d(__webpack_exports__,"a",(function(){return findReact}));var _home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_Components_Node_EndNode__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(31),_Components_Node_StartNode__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15);function retrieveFunction(functions){var funcs=functions.map((function(f){return eval(f)}));return function(t){for(var e=[],n=0;n<funcs.length;n++)e.push(funcs[n](t));return e}}var compareTop=function(t,e){return parseInt(t.style.top.slice(0,-2))-parseInt(e.style.top.slice(0,-2))};function makeNewGate(t,e,n){var a,r=t.childNodes[0],o=t.childNodes[2],i=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(o.childNodes).sort(compareTop).map((function(t){return findReact(t)})),s=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(r.childNodes).sort(compareTop).map((function(t){return findReact(t)})),c=function t(e,n){var a=e.state.parentPin;if(!a||n[a]&&-1!==n[a].indexOf(e))return"undefined";if(!(a instanceof _Components_Node_StartNode__WEBPACK_IMPORTED_MODULE_3__.a)){n[a]?n[a].push(e):n[a]=[e];var r,o=a.gate,i=[],c=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(o.inputs);try{for(c.s();!(r=c.n()).done;){var u=r.value;u.state.parentPin?i.push(t(u,n)):i.push("undefined")}}catch(d){c.e(d)}finally{c.f()}return o.name+"(["+i+"])["+a.index+"]"}for(var l=0;l<s.length;l++)if(a===s[l])return"i["+l+"]"},u=[],l=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(i);try{for(l.s();!(a=l.n()).done;){var d="(i) => "+c(a.value,[]);u.push(d)}}catch(f){l.e(f)}finally{l.f()}return{name:e,inputs:s.length,outputs:i.length,functions:u,color:n}}function findReact(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object.keys(t).find((function(t){return t.startsWith("__reactFiber$")})),a=t[n];if(null==a)return null;for(var r=function(t){for(var e=t.return;"string"==typeof e.type;)e=e.return;return e},o=r(a),i=0;i<e;i++)o=r(o);return o.stateNode}function checkForCycle(t){for(var e=collectGates(t),n=new Array(e.length),a=new Array(e.length),r=0;r<e.length;r++)n[r]=!1,a[r]=!1;for(var o=0;o<e.length;o++)if(DFSutil(o,n,a,getChildGates(e[o])))return!0;return!1}function DFSutil(t,e,n,a){if(n[t])return!0;if(e[t])return!1;e[t]=!0,n[t]=!0;for(var r=0;r<a.length;r++)if(DFSutil(r,e,n,a))return!0;return n[t]=!1,!1}function collectGates(t){var e=[t];return function t(n){getChildGates(n).forEach((function(n){e.includes(n)||(e.push(n),t(n))}))}(t),e}function getChildGates(t){for(var e=[],n=0;n<t.outputs.length;n++)for(var a=t.outputs[n].state.childPins,r=0;r<a.length;r++)a[r]instanceof _Components_Node_EndNode__WEBPACK_IMPORTED_MODULE_2__.a||e.push(a[r].gate);return e}},,function(t,e,n){t.exports={Application:"Application_Application__2wRsQ",Canvas:"Application_Canvas__35aVF",Board:"Application_Board__sFgm3",InputArea:"Application_InputArea__3XmUM",OutputArea:"Application_OutputArea__flxHC"}},function(t,e,n){t.exports={Wire:"Wire_Wire__14Zuc",WireUndefinedState:"Wire_WireUndefinedState__WPt42",WireHighState:"Wire_WireHighState__14PU4",WireLowState:"Wire_WireLowState__1Ox6P",ClickableArea:"Wire_ClickableArea__3OPA6"}},,function(t,e,n){"use strict";var a=n(13),r=n(2),o=n(3),i=n(5),s=n(4),c=n(1),u=n.n(c),l=n(26),d=n(27),f=n(0),p=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={childPins:[],value:void 0,ref:u.a.createRef()},a.setStateClass(),a}return Object(o.a)(n,[{key:"connect",value:function(t){var e=this.state.childPins;e.push(t),this.setState({childPins:e}),this.state.stateClass||this.setStateClass()}},{key:"disconnect",value:function(t){var e=this.state.childPins,n=e.indexOf(t),r=Object(a.a)(e);r.splice(n,1),this.setState({childPins:r})}},{key:"receiveSignal",value:function(t){this.setState({value:t},(function(){this.state.ref.current.dispatchEvent(d.a),this.setStateClass();for(var e=0;e<this.state.childPins.length;e++)this.state.childPins[e].receiveSignal(t)}))}},{key:"render",value:function(){var t=this;return Object(f.jsx)("button",{ref:this.state.ref,className:"\n        ".concat(this.style.Pin,"\n        ").concat(this.state.stateClass,"\n        "),onClick:function(){return t.props.setFocusedElement(t)},children:" "})}}]),n}(l.a);e.a=p},function(t,e,n){"use strict";var a=n(2),r=n(3),o=n(5),i=n(4),s=n(1),c=n.n(s),u=n(28),l=n(26),d=n(0),f=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).handleOnClick=function(t){var e=r.props.getFocusedElement();e&&r.changeParentPin(e)},r.state={parentPin:void 0,value:void 0,ref:c.a.createRef()},r.setStateClass(),r}return Object(r.a)(n,[{key:"disconnect",value:function(){this.state.parentPin&&(this.state.parentPin.disconnect(this),this.setState({parentPin:void 0,stateClass:""}),this.receiveSignal(void 0))}},{key:"changeParentPin",value:function(t){var e=this;this.state.parentPin!==t&&(this.state.parentPin&&this.state.parentPin.disconnect(this),t.connect(this),this.setState({parentPin:t},(function(){return e.state.ref.current.dispatchEvent(u.a)})),this.receiveSignal(t.state.value),this.props.drawWire(t,this))}},{key:"receiveSignal",value:function(t){t!==this.state.value&&this.setState({value:t},(function(){this.setStateClass(),this.gate.processOutput()}))}},{key:"render",value:function(){return Object(d.jsx)("button",{ref:this.state.ref,className:"\n        ".concat(this.style.Pin,"\n        ").concat(this.state.stateClass,"\n        "),onClick:this.handleOnClick})}}]),n}(l.a);e.a=f},function(t,e,n){"use strict";function a(t){for(var e=t.parentElement;!e.classList.contains("LogicGate");)e=e.parentElement;return e}function r(t){if(t){for(var e=t.parentElement;!e.className.includes("Node");)e=e.parentElement;return e}}n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}))},function(t,e,n){t.exports={Pin:"Pin_Pin__2O3LC",PinUndefinedState:"Pin_PinUndefinedState__2WxX8",PinHighState:"Pin_PinHighState__38LMy",PinLowState:"Pin_PinLowState__2-FI9"}},,function(t,e,n){"use strict";var a=n(2),r=n(3),o=n(5),i=n(4),s=n(1),c=n.n(s),u=n(24),l=n.n(u),d={true:l.a.PinHighState,false:l.a.PinLowState,undefined:l.a.PinUndefinedState},f=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this)).setStateClass=function(){r.setState({stateClass:d[r.state.value]})},r.style=l.a,r.index=t.index,r.gate=t.gate,r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.mount&&this.props.mount(this)}}]),n}(c.a.Component);e.a=f},function(t,e,n){"use strict";var a=new Event("signalChange");e.a=a},function(t,e,n){"use strict";var a=new Event("parentChange");e.a=a},function(t,e,n){"use strict";var a=n(2),r=n(3),o=n(5),i=n(4),s=n(1),c=n.n(s),u=n(9),l=n.n(u),d=n(30),f=n(15),p=n(23),h=n(0),v=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={name:"",render:!0,renderNameBox:!1,ref:c.a.createRef(),value:void 0},t.toggleNameBox=function(){t.setState({renderNameBox:!t.state.renderNameBox})},t.handleHandleMouseUp=function(e){2===e.button&&t.toggleNameBox()},t.onInputChange=function(e){t.setState({name:e.target.value})},t.fireRemoveEvent=function(){Object(p.b)(t.state.ref.current).dispatchEvent(d.a)},t}return Object(r.a)(n,[{key:"value",get:function(){return this.state.value}},{key:"name",get:function(){return this.state.name}},{key:"render",value:function(){var t,e=this;if(!1===this.state.render)return null;var n=this.state.value;t=void 0===n?l.a.NodeButtonUndefined:n?l.a.NodeButtonTrue:l.a.NodeButtonFalse;var a=this.props.position+"px";if(this.state.renderNameBox)var r=Object(h.jsxs)("div",{className:l.a.NodeNameBox,children:[Object(h.jsx)("input",{onChange:this.onInputChange,value:this.name,onKeyDown:function(t){"Enter"===t.key&&e.toggleNameBox()}}),Object(h.jsx)("div",{onClick:this.selfDestruct,children:"delete"})]});return Object(h.jsxs)("div",{className:"".concat(l.a.Node," ").concat(this instanceof f.a?l.a.NodeStart:l.a.NodeEnd),style:{top:a},children:[Object(h.jsx)("div",{className:"NodeHandle ".concat(l.a.NodeHandle),onMouseUp:this.handleHandleMouseUp}),Object(h.jsx)("div",{ref:this.state.ref,className:"".concat(l.a.NodeButton," ").concat(t),onMouseDown:this.handleOnMouseDown}),r]})}}]),n}(c.a.Component);e.a=v},function(t,e,n){"use strict";var a=new Event("remove");e.a=a},function(t,e,n){"use strict";var a=n(17),r=n(2),o=n(3),i=n(10),s=n(5),c=n(4),u=n(28),l=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state=Object(a.a)(Object(a.a)({},t.state),{},{parentPin:void 0,value:void 0}),t.handleOnMouseDown=function(e){if(0===e.button){var n=t.props.getFocusedElement();n&&t.changeParentPin(n)}},t.disconnect=function(){return t.changeParentPin(void 0)},t.changeParentPin=function(e){e!==t.state.parentPin&&(t.state.parentPin&&t.state.parentPin.disconnect(Object(i.a)(t)),t.setState({parentPin:e},(function(){t.state.ref.current&&t.state.ref.current.dispatchEvent(u.a)})),e?(e.connect(Object(i.a)(t)),t.props.drawWire(e,Object(i.a)(t)),t.receiveSignal(e.state.value)):t.receiveSignal(void 0))},t.selfDestruct=function(){t.fireRemoveEvent(),t.disconnect(),t.setState({render:!1})},t}return Object(o.a)(n,[{key:"receiveSignal",value:function(t){this.setState({value:t})}}]),n}(n(29).a);e.a=l},function(t,e,n){t.exports={Menu:"Menu_Menu__2X7bN",Button:"Menu_Button__8Dt-Z"}},,function(t,e,n){t.exports={Cover:"Popup_Cover__t0waS",Popup:"Popup_Popup__3fAZZ"}},function(t,e,n){"use strict";var a=new Event("move");e.a=a},,,function(t,e,n){"use strict";(function(t){var a=n(6),r=n(2),o=n(3),i=n(5),s=n(4),c=n(1),u=n.n(c),l=n(18),d=n.n(l),f=n(39),p=n(15),h=n(31),v=n(40),_=n(44),m=n(45),j=n(16),g=n(7),b=n(46),O=n(42),P=n(30),N=n(35),x=n(0);function E(t){return/^f_[A-Za-z0-9]*$/.test(t)}var y=function(e){Object(i.a)(c,e);var n=Object(s.a)(c);function c(){var e;Object(r.a)(this,c);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).state={focusedElement:void 0,heldElement:void 0,heldElementOffset:[0,0],popup:null,elements:{inputs:[],board:[],outputs:[]},wires:[],grid:40},e.boardRef=u.a.createRef(),e.canvasRef=u.a.createRef(),e.controlRef=u.a.createRef(),e.setFocusedElement=function(t){e.setState({focusedElement:t})},e.getFocusedElement=function(){return e.state.focusedElement},e.getCurrentProjectName=function(){return e.currentProjectName},e.loadProject=function(n){var r=[],o={};if(null!==localStorage.getItem("projects")){if(void 0!==(o=JSON.parse(localStorage.getItem("projects")))[e.currentProjectName]){var i,s=Object(a.a)(o[e.currentProjectName]);try{for(s.s();!(i=s.n()).done;){var c=i.value;t[c.name]=void 0}}catch(u){s.e(u)}finally{s.f()}}void 0!==o[n]&&(r=o[n])}e.currentProjectName=n,e.controlPanelObject.reset(r),e.clearCanvas()},e.addNode=function(t,n){if(t.target.classList.contains("Area")){var a=t.clientY-t.target.offsetTop-10,r=e.state.elements;"startNode"===n?r.inputs.push(Object(x.jsx)(p.a,{setFocusedElement:e.setFocusedElement,position:a})):r.outputs.push(Object(x.jsx)(h.a,{drawWire:e.drawWire,removeWire:e.removeWire,getFocusedElement:e.getFocusedElement,position:a})),e.setState({elements:r})}},e.addGate=function(t,n){var a,r=e.state.elements;r.board.push(Object(x.jsx)(f.a,{gateName:n.gateName,inputs:n.inputCount,outputs:n.outputCount,function:n.function,style:n.style,drawWire:e.drawWire,getFocusedElement:e.getFocusedElement,setFocusedElement:e.setFocusedElement,reference:function(t){return a=t}})),e.setState({elements:r},(function(){var e=t.clientX-t.target.offsetLeft+this.controlRef.current.scrollLeft,n=t.clientY-t.target.offsetTop+t.target.offsetHeight/2;a.style.left=t.clientX-e+"px",a.style.top=t.clientY-n+"px",a.style.zIndex=2,this.setState({heldElement:a,heldElementOffset:[e,n]})}))},e.handleMouseDown=function(t){0===t.button&&e.grab(t)},e.drawWire=function(t,n){var a=e.state.wires.concat([Object(x.jsx)(b.a,{firstPin:t,secondPin:n})]);e.setState({wires:a})},e.saveGate=function(){do{var n="f_"+prompt("podaj nazw\u0119 dla tej bramki")}while(!E(n)||void 0!==t[n]);do{var a=prompt("podaj kolor")}while(""===a);var r=Object(j.b)(e.canvasRef,n,a),o={};null!==localStorage.getItem("projects")&&(o=JSON.parse(localStorage.getItem("projects"))),void 0===o[e.currentProjectName]&&(o[e.currentProjectName]=[]),o[e.currentProjectName].push(r),localStorage.setItem("projects",JSON.stringify(o)),e.controlPanelObject.addDummy(r)},e.showPopup=function(t){var n;switch(t){case"project":n=Object(x.jsx)(m.a,{getCurrentProjectName:e.getCurrentProjectName,killPopup:e.killPopup,loadProject:e.loadProject});break;case"save":case"settings":n=null;break;default:return}e.setState({popup:n})},e.killPopup=function(){e.setState({popup:null})},e.clearCanvas=function(){e.setState({focusedElement:void 0,elements:{inputs:[],board:[],outputs:[]},wires:[]})},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){t.NOT=g.c,t.AND=g.a,t.OR=g.d,t.TRUE=g.e,t.FALSE=g.b,window.addEventListener("contextmenu",(function(t){return t.preventDefault()})),this.controlPanelObject=Object(j.a)(this.controlRef.current),this.showPopup("project")}},{key:"grab",value:function(t){var e=t.target;if(e.classList.contains("LogicGate")||e.classList.contains("NodeHandle")){e.style.zIndex=2,this.setState({heldElement:e});var n=this.state.grid,a=t.clientX-e.offsetLeft-n/2,r=t.clientY-e.offsetTop-n/2;this.setState({heldElementOffset:[a,r]})}}},{key:"move",value:function(t){var e=this.state.heldElement;if(e){var n=t.currentTarget,a=this.boardRef.current;if(e.classList.contains("LogicGate")){var r=t.clientX-this.state.heldElementOffset[0]-a.offsetLeft,o=t.clientY-this.state.heldElementOffset[1],i=this.state.grid;o-=o%i,(r=r-r%i+a.offsetLeft)<a.offsetLeft?r=a.offsetLeft:r+e.offsetWidth>a.offsetWidth+a.offsetLeft&&(r=a.offsetWidth+a.offsetLeft-e.offsetWidth),o<a.offsetTop?o=a.offsetTop:o+e.offsetHeight>n.offsetHeight&&(o=n.offsetHeight+n.offsetTop-e.offsetHeight),e.style.left=r+"px",e.style.top=o+"px",e.dispatchEvent(N.a)}else if(e.classList.contains("NodeHandle")){var s=e.parentElement,c=t.clientY;c>s.parentElement.offsetHeight-20&&(c=s.parentElement.offsetHeight-20),c<s.parentElement.offsetTop+40&&(c=s.parentElement.offsetTop+40),s.style.top=c-10+"px",s.dispatchEvent(N.a)}}}},{key:"drop",value:function(){var t=this.state.heldElement;if(t){this.setState({heldElement:void 0});var e=this.boardRef.current;if(parseInt(t.style.top.split("px")[0])+t.offsetHeight>e.offsetHeight+e.offsetTop){var n=Object(j.a)(t);n.selfDestruct(),t.dispatchEvent(P.a);var a=this.getFocusedElement();a&&a.gate===n&&this.setFocusedElement(void 0)}else t.style.zIndex=1}}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{className:d.a.Application,onMouseDown:this.handleMouseDown,onMouseMove:function(e){return t.move(e)},onMouseUp:function(){return t.drop()},children:[this.state.popup,Object(x.jsx)(_.a,{functions:[{name:"zapisz bramk\u0119",function:this.saveGate},{name:"wyczy\u015b\u0107",function:this.clearCanvas},{name:"projekt",function:function(){return t.showPopup("project")}}]}),Object(x.jsx)(O.a,{wires:this.state.wires}),Object(x.jsxs)("div",{className:d.a.Canvas,ref:function(e){return t.canvasRef=e},children:[Object(x.jsx)("div",{className:"Area ".concat(d.a.InputArea),onClick:function(e){return t.addNode(e,"startNode")},children:this.state.elements.inputs}),Object(x.jsx)("div",{className:d.a.Board,ref:this.boardRef,style:{backgroundSize:this.state.grid+"px "+this.state.grid+"px"},children:this.state.elements.board}),Object(x.jsx)("div",{className:"Area ".concat(d.a.OutputArea),onClick:function(e){return t.addNode(e,"endNode")},children:this.state.elements.outputs})]}),Object(x.jsx)(v.a,{addGate:this.addGate,reference:this.controlRef})]})}}]),c}(u.a.Component);e.a=y}).call(this,n(36))},function(t,e,n){"use strict";var a=n(2),r=n(3),o=n(5),i=n(4),s=n(1),c=n.n(s),u=n(21),l=n(22),d=n(8),f=n.n(d),p=n(0),h=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this)).mountPin=function(t){t instanceof l.a?r.inputs[t.index]=t:t instanceof u.a&&(r.outputs[t.index]=t)},r.name=t.gateName,r.func=t.function,r.state={value:void 0,render:!0},r.inputs=[],r.outputs=[],r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.processOutput()}},{key:"selfDestruct",value:function(){this.inputs.forEach((function(t){return t.disconnect()})),this.outputs.forEach((function(t){t.state.childPins.forEach((function(t){return t.disconnect()}))})),this.setState({render:!1})}},{key:"processOutput",value:function(){for(var t=Array.from(this.inputs.map((function(t){return t.state.value}))),e=this.func(t),n=0;n<e.length;n++)this.outputs[n].receiveSignal(e[n]);this.setState({value:e[0]})}},{key:"render",value:function(){if(!1===this.state.render)return null;for(var t=[],e=0;e<this.props.inputs;e++)t.push(Object(p.jsx)(l.a,{drawWire:this.props.drawWire,index:e,gate:this,getFocusedElement:this.props.getFocusedElement,mount:this.mountPin}));for(var n=[],a=0;a<this.props.outputs;a++)n.push(Object(p.jsx)(u.a,{index:a,gate:this,getFocusedElement:this.props.getFocusedElement,setFocusedElement:this.props.setFocusedElement,mount:this.mountPin}));return Object(p.jsxs)("div",{className:"LogicGate ".concat(f.a.LogicGate),style:this.props.style,ref:this.props.reference,children:[Object(p.jsx)("div",{className:f.a.LogicGateInputs,children:t}),Object(p.jsxs)("h5",{className:f.a.LogicGateValue,children:[" ",this.name.replace("f_","")," "]}),Object(p.jsx)("div",{className:f.a.LogicGateOutputs,children:n})]})}}]),n}(c.a.Component);e.a=h},function(t,e,n){"use strict";(function(t){var a=n(6),r=n(2),o=n(3),i=n(5),s=n(4),c=n(41),u=n.n(c),l=n(14),d=n(16),f=n(7),p=n(1),h=n.n(p),v=n(0),_=function(t){return[Object(v.jsx)(l.a,{gateName:"AND",function:f.a,color:"cornflowerblue",inputs:2,outputs:1,addGate:t}),Object(v.jsx)(l.a,{gateName:"NOT",function:f.c,color:"purple",inputs:1,outputs:1,addGate:t}),Object(v.jsx)(l.a,{gateName:"OR",function:f.d,color:"chocolate",inputs:2,outputs:1,addGate:t}),Object(v.jsx)(l.a,{gateName:"FALSE",function:f.b,color:"red",inputs:0,outputs:1,addGate:t}),Object(v.jsx)(l.a,{gateName:"TRUE",function:f.e,color:"lime",inputs:0,outputs:1,addGate:t})]},m=function(e){Object(i.a)(c,e);var n=Object(s.a)(c);function c(e){var o;return Object(r.a)(this,c),(o=n.call(this)).reset=function(t){var e,n=[],r=Object(a.a)(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;n.push(o.createDummy(i))}}catch(s){r.e(s)}finally{r.f()}o.setState({dummies:_(o.props.addGate).concat(n)})},o.createDummy=function(e){var n=Object(d.c)(e.functions);return t[e.name]=n,Object(v.jsx)(l.a,{gateName:e.name,function:n,color:e.color,inputs:e.inputs,outputs:e.outputs,addGate:o.props.addGate})},o.addDummy=function(t){var e=o.state.dummies;e.push(o.createDummy(t)),o.setState({dummies:e})},o.handleOnWheel=function(t){t.currentTarget.scrollLeft+=t.deltaY},o.state={dummies:_(e.addGate)},o}return Object(o.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{className:u.a.ControlPanel,ref:this.props.reference,onWheel:this.handleOnWheel,children:this.state.dummies})}}]),c}(h.a.Component);e.a=m}).call(this,n(36))},function(t,e,n){t.exports={ControlPanel:"ControlPanel_ControlPanel__1H8pU"}},function(t,e,n){"use strict";var a=n(43),r=n.n(a),o=n(0);e.a=function(t){return Object(o.jsx)("svg",{className:r.a.WiresBoard,children:t.wires})}},function(t,e,n){t.exports={WiresBoard:"WiresBoard_WiresBoard__1awF0"}},function(t,e,n){"use strict";var a=n(6),r=n(32),o=n.n(r),i=n(0),s=function(t){return Object(i.jsx)("button",{onClick:t.action,className:o.a.Button,children:t.text})};e.a=function(t){var e,n=[],r=Object(a.a)(t.functions);try{for(r.s();!(e=r.n()).done;){var c=e.value;n.push(Object(i.jsx)("li",{children:Object(i.jsx)(s,{text:c.name,action:c.function})}))}}catch(u){r.e(u)}finally{r.f()}return Object(i.jsx)("div",{className:o.a.Menu,children:Object(i.jsx)("ul",{children:n})})}},function(t,e,n){"use strict";var a=n(2),r=n(3),o=n(47),i=n(12),s=n(5),c=n(4),u=n(1),l=n.n(u),d=n(34),f=n.n(d),p=n(0),h=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).style={maxWidth:"400px",height:"400px"},t.selfDestruct=function(){t.props.killPopup()},t}return Object(r.a)(n,[{key:"render",value:function(t){return Object(p.jsx)("div",{className:f.a.Cover,children:Object(p.jsxs)("div",{className:f.a.Popup,style:this.style,children:[Object(p.jsx)("strong",{onClick:this.selfDestruct,children:"X"}),t]})})}}]),n}(l.a.Component),v=h,_=n(11),m=n.n(_);function j(t){if(void 0===t)return!1;return/^[A-Za-z0-9 ]+$/.test(t)}var g=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).style={maxWidth:"440px",height:"600px"},t.state={givenName:void 0,projects:JSON.parse(localStorage.getItem("projects"))},t.handleOnChange=function(e){t.setState({givenName:e.target.value})},t.loadProject=function(e){j(e)?(t.props.loadProject(e),t.props.killPopup()):alert("niepoprawna nazwa")},t.deleteProject=function(e){if(t.props.getCurrentProjectName()!==e){var n=t.state.projects;delete n[e],t.setState({projects:n}),localStorage.setItem("projects",JSON.stringify(n))}else alert("nie mo\u017cesz usun\u0105\u0107\xa0otwartego projektu")},t.selfDestruct=function(){void 0!==t.props.getCurrentProjectName()?t.props.killPopup():alert("wybierz lub utw\xf3rz projekt")},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=[],a=function(n){e.push(Object(p.jsxs)("div",{className:m.a.MainListProject,children:[Object(p.jsx)("div",{className:m.a.MainListProjectBody,onClick:function(){return t.loadProject(n)},children:Object(p.jsx)("p",{children:n})}),Object(p.jsx)("div",{className:m.a.MainListProjectDelete,onClick:function(){return t.deleteProject(n)},children:Object(p.jsx)("strong",{children:"X"})})]}))};for(var r in this.state.projects)a(r);return Object(o.a)(Object(i.a)(n.prototype),"render",this).call(this,Object(p.jsxs)("div",{className:m.a.Main,children:[Object(p.jsx)("input",{type:"text",className:m.a.MainNewText,placeHolder:"Nowy projekt",onChange:this.handleOnChange}),Object(p.jsx)("input",{type:"button",value:"+",className:m.a.MainNewButton,onClick:function(){return t.loadProject(t.state.givenName)}}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:m.a.MainList,children:e})]}))}}]),n}(v);e.a=g},function(t,e,n){"use strict";var a=n(6),r=n(2),o=n(3),i=n(5),s=n(4),c=n(1),u=n.n(c),l=n(19),d=n.n(l);var f=function(t,e,n){var a=[t.left,t.top],r=[e.left,e.top];return a[1]+=t.height/2,a[0]+=t.width/2,r[1]+=e.height/2,r[0]+=e.width/2,r[0]>a[0]+30?function(t,e){var n,a,r,o=e[1]-t[1],i=e[0]-t[0];return o<-25?(n="a20,20 0 0 0 12,-12",a="a20,20 0 0 1 12 -12"):o>25&&(n="a20,20 0 0 1 12 12",a="a20,20 0 0 0 12 12"),r=n?"\n                l ".concat([i/2,0],"\n                ").concat(n,"\n                l ").concat([0,o<0?o+25:o-25]," \n                ").concat(a,"\n                "):"","M ".concat(t,"\n            ").concat(r,"\n        L ").concat(e,"\n        ")}(a,r):function(t,e,n){var a,r=e[1]-t[1],o=e[0]-t[0],i=r>0,s="";return a=i?n[0][1]+n[1][0]+75:n[0][0]+n[1][1]+75,s=Math.abs(r)>a?i?"\n                a20,20 0 0 1 12,12\n                l 0,".concat(r/2-25,"\n\n                a20,20 0 0 1 -12,12\n\n                l ").concat(o-50,", 0\n\n                a20,20 0 0 0 -12,12\n\n                L ").concat(e[0]-35,", ").concat(e[1]-15,"\n\n                a20,20 0 0 0 12,12\n\n                "):"   \n                    a20,20 0 0 0 12,-12\n                    l 0,".concat(r/2+25,"\n\n                    a20,20 0 0 0 -12,-12\n\n                    l ").concat(o-50,", 0\n\n                    a20,20 0 0 1 -12,-12\n\n                    L ").concat(e[0]-35,", ").concat(e[1]+15,"\n\n                    a20,20 0 0 1 12,-12\n\n                "):i?"\n                    a20,20 0 0 0 12,-12\n\n                    l 0, ".concat(2*n[0][0],"\n\n                    a20,20 0 0 0 -12,-12\n\n                    l ").concat(o-35,", 0\n\n                    a20,20 0 0 0 -12,12\n\n                    L ").concat(e[0]-25,", ").concat(e[1]-10,"\n\n                    a20,20 0 0 0 12, 12\n                "):"\n                    a20,20 0 0 1 12,12\n\n                    l 0, ".concat(-2*n[0][0],"\n\n                    a20,20 0 0 1 -12,12\n\n                    l ").concat(o-35,", 0\n\n                    a20,20 0 0 1 -12,-12\n\n                    L ").concat(e[0]-25,", ").concat(e[1]+15,"\n\n                    a20,20 0 0 1 12, -12\n                "),"\n        M ".concat(t,"\n        l 25, 0\n        ").concat(s,"\n        \n        L ").concat(e,"\n    ")}(a,r,n)},p=n(23),h=n(0),v={true:d.a.WireHighState,false:d.a.WireLowState,undefined:d.a.WireUndefinedState},_=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var o;Object(r.a)(this,n),(o=e.call(this,t)).attachEventListeners=function(){window.addEventListener("resize",o.updatePosition);var t,e=Object(a.a)(o.gates);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.addEventListener("move",o.updatePosition),n.addEventListener("remove",o.onGateRemoval)}}catch(r){e.e(r)}finally{e.f()}o.firstPin.state.ref.current.addEventListener("signalChange",o.updateStateClass),o.secondPin.state.ref.current.addEventListener("parentChange",o.onPinParentChange)},o.detachEventListeners=function(){window.removeEventListener("resize",o.updatePosition);var t,e=Object(a.a)(o.gates);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.removeEventListener("move",o.updatePosition),n.removeEventListener("remove",o.onGateRemoval)}}catch(r){e.e(r)}finally{e.f()}o.firstPin.state.ref.current.removeEventListener("signalChange",o.updateStateClass),o.secondPin.state.ref.current.removeEventListener("parentChange",o.onPinParentChange)},o.hideWire=function(){return o.setState({render:!1})},o.handleOnClick=function(){o.detachEventListeners(),o.secondPin.disconnect(),o.hideWire()},o.onPinParentChange=function(){o.firstPin!==o.secondPin.state.parentPin&&(o.hideWire(),o.detachEventListeners())},o.onGateRemoval=function(){o.detachEventListeners(),o.hideWire()},o.getStateClass=function(){return v[o.firstPin.state.value]},o.updateStateClass=function(){o.setState({stateClass:o.getStateClass()})},o.updatePosition=function(){o.setState({firstPinPosition:o.firstPin.state.ref.current.getBoundingClientRect(),secondPinPosition:o.secondPin.state.ref.current.getBoundingClientRect()})},o.firstPin=t.firstPin,o.secondPin=t.secondPin,o.gates=[o.firstPin,o.secondPin].map((function(t){return t.gate?Object(p.a)(t.state.ref.current):Object(p.b)(t.state.ref.current)})),o.attachEventListeners(),o.state={firstPinPosition:t.firstPin.state.ref.current.getBoundingClientRect(),secondPinPosition:t.secondPin.state.ref.current.getBoundingClientRect(),stateClass:o.getStateClass(),render:!0};var i=o.gates[0].getBoundingClientRect();o.firstPinPaddings=[i.top-o.state.firstPinPosition.top,i.bottom-o.state.firstPinPosition.bottom];var s=o.gates[1].getBoundingClientRect();return o.secondPinPaddings=[s.top-o.state.secondPinPosition.top,s.bottom-o.state.secondPinPosition.bottom],o}return Object(o.a)(n,[{key:"render",value:function(){if(!this.state.render)return null;var t=f(this.state.firstPinPosition,this.state.secondPinPosition,[this.firstPinPaddings,this.secondPinPaddings]).replace(/(\r\n|\n|\r| {2})/gm,"");return Object(h.jsxs)("g",{children:[Object(h.jsx)("path",{d:t,className:"".concat(d.a.Wire," ").concat(this.state.stateClass)}),Object(h.jsx)("path",{d:t,className:d.a.ClickableArea,onClick:this.handleOnClick})]})}}]),n}(u.a.Component);e.a=_},,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(37),i=n.n(o),s=n(38),c=n(0);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.a4f46185.chunk.js.map