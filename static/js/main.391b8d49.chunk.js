(this["webpackJsonplogic-circuit-simulator"]=this["webpackJsonplogic-circuit-simulator"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={LogicGate:"LogicGate_LogicGate__1Cc_p",LogicGateDummy:"LogicGate_LogicGateDummy__19ubT",LogicGateInputs:"LogicGate_LogicGateInputs__oV9js",LogicGateOutputs:"LogicGate_LogicGateOutputs__3uRMQ",LogicGateValue:"LogicGate_LogicGateValue__3jkbZ"}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));var a=function(t){for(var e=!1,n=0;n<t.length;n++){if(!1===t[n])return[!1];void 0===t[n]&&(e=!0)}return e?[void 0]:[!0]},i=function(t){return void 0===t[0]?[void 0]:[!t[0]]},s=function(t){for(var e=!1,n=0;n<t.length;n++){if(!0===t[n])return[!0];void 0===t[n]&&(e=!0)}return e?[void 0]:[!1]}},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return retrieveFunction})),__webpack_require__.d(__webpack_exports__,"b",(function(){return makeNewGate})),__webpack_require__.d(__webpack_exports__,"a",(function(){return findReact}));var _home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_Components_Node_EndNode__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(26),_Components_Node_StartNode__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24);function retrieveFunction(functions){var funcs=functions.map((function(f){return eval(f)}));return function(t){for(var e=[],n=0;n<funcs.length;n++)e.push(funcs[n](t));return e}}var compareTop=function(t,e){return parseInt(t.style.top.slice(0,-2))-parseInt(e.style.top.slice(0,-2))};function makeNewGate(t,e,n){var a,i=t.childNodes[0],s=t.childNodes[2],r=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(s.childNodes).sort(compareTop).map((function(t){return findReact(t)})),o=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(i.childNodes).sort(compareTop).map((function(t){return findReact(t)})),c=function t(e,n){var a=e.state.parentPin;if(!a||n[a]&&-1!==n[a].indexOf(e))return"undefined";if(!(a instanceof _Components_Node_StartNode__WEBPACK_IMPORTED_MODULE_3__.a)){n[a]?n[a].push(e):n[a]=[e];var i,s=a.gate,r=[],c=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(s.inputs);try{for(c.s();!(i=c.n()).done;){var u=i.value;u.state.parentPin?r.push(t(u,n)):r.push("undefined")}}catch(f){c.e(f)}finally{c.f()}return s.name+"(["+r+"])["+a.index+"]"}for(var l=0;l<o.length;l++)if(a===o[l])return"i["+l+"]"},u=[],l=Object(_home_runner_work_logic_logic_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(r);try{for(l.s();!(a=l.n()).done;){var f="(i) => "+c(a.value,[]);u.push(f)}}catch(d){l.e(d)}finally{l.f()}return{name:e,inputs:o.length,outputs:r.length,functions:u,color:n}}function findReact(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object.keys(t).find((function(t){return t.startsWith("__reactFiber$")})),a=t[n];if(null==a)return null;for(var i=function(t){for(var e=t.return;"string"==typeof e.type;)e=e.return;return e},s=i(a),r=0;r<e;r++)s=i(s);return s.stateNode}function checkForCycle(t){for(var e=collectGates(t),n=new Array(e.length),a=new Array(e.length),i=0;i<e.length;i++)n[i]=!1,a[i]=!1;for(var s=0;s<e.length;s++)if(DFSutil(s,n,a,getChildGates(e[s])))return!0;return!1}function DFSutil(t,e,n,a){if(n[t])return!0;if(e[t])return!1;e[t]=!0,n[t]=!0;for(var i=0;i<a.length;i++)if(DFSutil(i,e,n,a))return!0;return n[t]=!1,!1}function collectGates(t){var e=[t];return function t(n){getChildGates(n).forEach((function(n){e.includes(n)||(e.push(n),t(n))}))}(t),e}function getChildGates(t){for(var e=[],n=0;n<t.outputs.length;n++)for(var a=t.outputs[n].state.childPins,i=0;i<a.length;i++)a[i]instanceof _Components_Node_EndNode__WEBPACK_IMPORTED_MODULE_2__.a||e.push(a[i].gate);return e}},function(t,e,n){t.exports={Application:"Application_Application__2wRsQ",Canvas:"Application_Canvas__35aVF",Board:"Application_Board__sFgm3",InputArea:"Application_InputArea__3XmUM",OutputArea:"Application_OutputArea__flxHC"}},,function(t,e,n){"use strict";var a=n(10),i=n(2),s=n(3),r=n(5),o=n(4),c=n(1),u=n.n(c),l=n(21),f=n(22),d=n(0),h=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={childPins:[],value:void 0,ref:u.a.createRef()},a.setStateClass(),a}return Object(s.a)(n,[{key:"connect",value:function(t){var e=this.state.childPins;e.push(t),this.setState({childPins:e}),this.state.stateClass||this.setStateClass()}},{key:"disconnect",value:function(t){var e=this.state.childPins,n=e.indexOf(t),i=Object(a.a)(e);i.splice(n,1),this.setState({childPins:i})}},{key:"receiveSignal",value:function(t){this.setState({value:t},(function(){this.state.ref.current.dispatchEvent(f.a),this.setStateClass();for(var e=0;e<this.state.childPins.length;e++)this.state.childPins[e].receiveSignal(t)}))}},{key:"render",value:function(){var t=this;return Object(d.jsx)("button",{ref:this.state.ref,className:"\n        ".concat(this.style.Pin,"\n        ").concat(this.state.stateClass,"\n        "),onClick:function(){return t.props.setFocusedElement(t)},children:" "})}}]),n}(l.a);e.a=h},function(t,e,n){"use strict";var a=n(2),i=n(3),s=n(5),r=n(4),o=n(1),c=n.n(o),u=n(23),l=n(21),f=n(0),d=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).handleOnClick=function(t){var e=i.props.getFocusedElement();e&&i.changeParentPin(e)},i.state={parentPin:void 0,value:void 0,ref:c.a.createRef()},i.setStateClass(),i}return Object(i.a)(n,[{key:"disconnect",value:function(){this.state.parentPin&&(this.state.parentPin.disconnect(this),this.setState({parentPin:void 0,stateClass:""}),this.receiveSignal(void 0))}},{key:"changeParentPin",value:function(t){var e=this;this.state.parentPin!==t&&(this.state.parentPin&&this.state.parentPin.disconnect(this),t.connect(this),this.setState({parentPin:t},(function(){return e.state.ref.current.dispatchEvent(u.a)})),this.receiveSignal(t.state.value),this.props.drawWire(t,this))}},{key:"receiveSignal",value:function(t){t!==this.state.value&&this.setState({value:t},(function(){this.setStateClass(),this.gate.processOutput()}))}},{key:"render",value:function(){return Object(f.jsx)("button",{ref:this.state.ref,className:"\n        ".concat(this.style.Pin,"\n        ").concat(this.state.stateClass,"\n        "),onClick:this.handleOnClick})}}]),n}(l.a);e.a=d},function(t,e,n){t.exports={Pin:"Pin_Pin__2O3LC",PinUndefinedState:"Pin_PinUndefinedState__2WxX8",PinHighState:"Pin_PinHighState__38LMy",PinLowState:"Pin_PinLowState__2-FI9"}},function(t,e,n){t.exports={Node:"Node_Node__281H-",NodeUndefined:"Node_NodeUndefined__3Ozqf",NodeTrue:"Node_NodeTrue__3vLME",NodeFalse:"Node_NodeFalse__39hyq"}},function(t,e,n){"use strict";var a=n(2),i=n(3),s=n(5),r=n(4),o=n(1),c=n.n(o),u=n(14),l=n(15),f=n(6),d=n.n(f),h=n(0),p=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).style={backgroundColor:t.props.color},t}return Object(i.a)(n,[{key:"render",value:function(){for(var t=this,e=[],n=0;n<this.props.inputs;n++)e.push(Object(h.jsx)(l.a,{}));for(var a=[],i=0;i<this.props.outputs;i++)a.push(Object(h.jsx)(u.a,{}));return Object(h.jsxs)("div",{className:"".concat(d.a.LogicGate," ").concat(d.a.LogicGateDummy),style:this.style,onMouseDown:function(e){return t.props.addGate(e,{gateName:t.props.gateName,function:t.props.function,style:t.style,inputCount:t.props.inputs,outputCount:t.props.outputs})},children:[Object(h.jsx)("div",{className:d.a.LogicGateInputs,children:e}),Object(h.jsxs)("h5",{className:d.a.LogicGateValue,children:[" ",this.props.gateName.replace("f_","")," "]}),Object(h.jsx)("div",{className:d.a.LogicGateOutputs,children:a})]})}}]),n}(c.a.Component);e.a=p},function(t,e,n){t.exports={Wire:"Wire_Wire__14Zuc",WireUndefinedState:"Wire_WireUndefinedState__WPt42",WireHighState:"Wire_WireHighState__14PU4",WireLowState:"Wire_WireLowState__1Ox6P"}},,function(t,e,n){"use strict";var a=n(2),i=n(3),s=n(5),r=n(4),o=n(1),c=n.n(o),u=n(16),l=n.n(u),f={true:l.a.PinHighState,false:l.a.PinLowState,undefined:l.a.PinUndefinedState},d=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this)).setStateClass=function(){i.setState({stateClass:f[i.state.value]})},i.style=l.a,i.index=t.index,i.gate=t.gate,i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.mount&&this.props.mount(this)}}]),n}(c.a.Component);e.a=d},function(t,e,n){"use strict";var a=new Event("signalChange");e.a=a},function(t,e,n){"use strict";var a=new Event("parentChange");e.a=a},function(t,e,n){"use strict";var a=n(10),i=n(2),s=n(3),r=n(8),o=n(5),c=n(4),u=n(1),l=n.n(u),f=n(25),d=n(22),h=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={value:!1,childPins:[],ref:l.a.createRef()},t.handleOnMouseDown=function(e){0===e.button?t.props.setFocusedElement(Object(r.a)(t)):1===e.button&&t.toggleValue()},t}return Object(s.a)(n,[{key:"connect",value:function(t){var e=this.state.childPins;e.push(t),this.setState({childPins:e})}},{key:"disconnect",value:function(t){var e=this.state.childPins,n=e.indexOf(t),i=Object(a.a)(e);i.splice(n,1),this.setState({childPins:i})}},{key:"toggleValue",value:function(){var t=!this.state.value;this.setState({value:t},(function(){for(var e=0;e<this.state.childPins.length;e++)this.state.childPins[e].receiveSignal(t);this.state.ref.current.dispatchEvent(d.a)}))}}]),n}(f.a);e.a=h},function(t,e,n){"use strict";var a=n(2),i=n(3),s=n(5),r=n(4),o=n(1),c=n.n(o),u=n(17),l=n.n(u),f=n(0),d=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"value",get:function(){return this.state.value}},{key:"render",value:function(){var t,e=this.state.value;t=void 0===e?l.a.NodeUndefined:e?l.a.NodeTrue:l.a.NodeFalse;var n=this.props.position+"px";return Object(f.jsx)("div",{ref:this.state.ref,className:"".concat(l.a.Node," ").concat(t),onMouseDown:this.handleOnMouseDown,style:{top:n}})}}]),n}(c.a.Component);e.a=d},function(t,e,n){"use strict";var a=n(2),i=n(3),s=n(8),r=n(5),o=n(4),c=n(1),u=n.n(c),l=n(23),f=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={value:void 0,parentPin:void 0,ref:u.a.createRef()},t.handleOnMouseDown=function(e){if(0===e.button){var n=t.props.getFocusedElement();n&&t.changeParentPin(n)}},t.disconnect=function(){return t.changeParentPin(void 0)},t.changeParentPin=function(e){e!==t.state.parentPin&&(t.state.parentPin&&t.state.parentPin.disconnect(Object(s.a)(t)),t.setState({parentPin:e},(function(){t.state.ref.current.dispatchEvent(l.a)})),e?(e.connect(Object(s.a)(t)),t.props.drawWire(e,Object(s.a)(t)),t.receiveSignal(e.state.value)):t.receiveSignal(void 0))},t}return Object(i.a)(n,[{key:"receiveSignal",value:function(t){this.setState({value:t})}}]),n}(n(25).a);e.a=f},function(t,e,n){t.exports={Menu:"Menu_Menu__2X7bN",Button:"Menu_Button__8Dt-Z"}},,,,function(t,e,n){"use strict";(function(t){var a=n(7),i=n(2),s=n(3),r=n(5),o=n(4),c=n(1),u=n.n(c),l=n(12),f=n.n(l),d=n(32),h=n(24),p=n(26),_=n(33),v=n(38),m=n(11),g=n(9),b=n(39),O=n(35),j=n(37),P=n(0);function E(t){return/^f_[A-Za-z0-9]*$/.test(t)}var y=function(e){Object(r.a)(c,e);var n=Object(o.a)(c);function c(){var e;Object(i.a)(this,c);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=n.call.apply(n,[this].concat(s))).state={focusedElement:void 0,heldElement:void 0,heldElementOffset:[0,0],elements:{inputs:[],board:[],outputs:[]},wires:[]},e.boardRef=u.a.createRef(),e.canvasRef=u.a.createRef(),e.controlRef=u.a.createRef(),e.setFocusedElement=function(t){e.setState({focusedElement:t})},e.getFocusedElement=function(){return e.state.focusedElement},e.addNode=function(t,n){if(t.target.classList.contains("Area")){var a=t.clientY-t.target.offsetTop-10,i=e.state.elements;"startNode"===n?i.inputs.push(Object(P.jsx)(h.a,{setFocusedElement:e.setFocusedElement,position:a})):i.outputs.push(Object(P.jsx)(p.a,{drawWire:e.drawWire,removeWire:e.removeWire,getFocusedElement:e.getFocusedElement,position:a})),e.setState({elements:i})}},e.addGate=function(t,n){var a,i=e.state.elements;i.board.push(Object(P.jsx)(d.a,{gateName:n.gateName,inputs:n.inputCount,outputs:n.outputCount,function:n.function,style:n.style,drawWire:e.drawWire,getFocusedElement:e.getFocusedElement,setFocusedElement:e.setFocusedElement,reference:function(t){return a=t}})),e.setState({elements:i},(function(){var e=t.clientX-t.target.offsetLeft+this.controlRef.current.scrollLeft,n=t.clientY-t.target.offsetTop+t.target.offsetHeight/2;a.style.left=t.clientX-e+"px",a.style.top=t.clientY-n+"px",a.style.zIndex=2,this.setState({heldElement:a,heldElementOffset:[e,n]})}))},e.drawWire=function(t,n){var a=e.state.wires.concat([Object(P.jsx)(b.a,{firstPin:t,secondPin:n})]);e.setState({wires:a})},e.saveGate=function(){do{var n="f_"+prompt("podaj nazw\u0119 dla tej bramki")}while(!E(n)||void 0!==t[n]);do{var a=prompt("podaj kolor")}while(""===a);var i,s=Object(m.b)(e.canvasRef,n,a);(i=null!==localStorage.getItem("savedGates")?JSON.parse(localStorage.getItem("savedGates")):[]).push(s),localStorage.setItem("savedGates",JSON.stringify(i)),e.controlPanelObject.addDummy(s)},e.clearCanvas=function(){e.setState({focusedElement:void 0,elements:{inputs:[],board:[],outputs:[]},wires:[]})},e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e;t.NOT=g.b,t.AND=g.a,t.OR=g.c,this.controlPanelObject=Object(m.a)(this.controlRef.current),e=null!==localStorage.getItem("savedGates")?JSON.parse(localStorage.getItem("savedGates")):[];var n,i=Object(a.a)(e);try{for(i.s();!(n=i.n()).done;){var s=n.value;this.controlPanelObject.addDummy(s)}}catch(r){i.e(r)}finally{i.f()}}},{key:"grab",value:function(t){var e=t.target;if(e.classList.contains("LogicGate")){e.style.zIndex=2,this.setState({heldElement:e});var n=t.clientX-e.offsetLeft,a=t.clientY-e.offsetTop;this.setState({heldElementOffset:[n,a]})}}},{key:"move",value:function(t){if(this.state.heldElement){var e=this.state.heldElement,n=t.currentTarget,a=this.boardRef.current,i=t.clientX-this.state.heldElementOffset[0],s=t.clientY-this.state.heldElementOffset[1];i<a.offsetLeft?i=a.offsetLeft:i+e.offsetWidth>a.offsetWidth+a.offsetLeft&&(i=a.offsetWidth+a.offsetLeft-e.offsetWidth),s<n.offsetTop?s=n.offsetTop:s+e.offsetHeight>n.offsetHeight+n.offsetTop&&(s=n.offsetHeight+n.offsetTop-e.offsetHeight),e.style.left=i+"px",e.style.top=s+"px"}}},{key:"drop",value:function(){var t=this.state.heldElement;if(t){this.setState({heldElement:void 0});var e=this.boardRef.current;if(parseInt(t.style.top.split("px")[0])+t.offsetHeight>e.offsetHeight+e.offsetTop){var n=Object(m.a)(t);n.selfDestruct(),t.dispatchEvent(j.a);var a=this.getFocusedElement();a&&a.gate===n&&this.setFocusedElement(void 0)}else t.style.zIndex=1}}},{key:"render",value:function(){var t=this;return Object(P.jsxs)("div",{className:f.a.Application,onMouseDown:function(e){return t.grab(e)},onMouseMove:function(e){return t.move(e)},onMouseUp:function(){return t.drop()},children:[Object(P.jsx)(v.a,{functions:[this.saveGate,this.clearCanvas]}),Object(P.jsx)(O.a,{wires:this.state.wires}),Object(P.jsxs)("div",{className:f.a.Canvas,ref:function(e){return t.canvasRef=e},children:[Object(P.jsx)("div",{className:"Area ".concat(f.a.InputArea),onClick:function(e){return t.addNode(e,"startNode")},children:this.state.elements.inputs}),Object(P.jsx)("div",{className:f.a.Board,ref:this.boardRef,children:this.state.elements.board}),Object(P.jsx)("div",{className:"Area ".concat(f.a.OutputArea),onClick:function(e){return t.addNode(e,"endNode")},children:this.state.elements.outputs})]}),Object(P.jsx)(_.a,{addGate:this.addGate,reference:this.controlRef})]})}}]),c}(u.a.Component);e.a=y}).call(this,n(29))},function(t,e,n){"use strict";var a=n(2),i=n(3),s=n(5),r=n(4),o=n(1),c=n.n(o),u=n(14),l=n(15),f=n(6),d=n.n(f),h=n(0),p=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this)).mountPin=function(t){t instanceof l.a?i.inputs[t.index]=t:t instanceof u.a&&(i.outputs[t.index]=t)},i.name=t.gateName,i.func=t.function,i.state={value:void 0,render:!0},i.inputs=[],i.outputs=[],i}return Object(i.a)(n,[{key:"selfDestruct",value:function(){this.inputs.forEach((function(t){return t.disconnect()})),this.outputs.forEach((function(t){t.state.childPins.forEach((function(t){return t.disconnect()}))})),this.setState({render:!1})}},{key:"processOutput",value:function(){for(var t=Array.from(this.inputs.map((function(t){return t.state.value}))),e=this.func(t),n=0;n<e.length;n++)this.outputs[n].receiveSignal(e[n]);this.setState({value:e[0]})}},{key:"render",value:function(){if(!1===this.state.render)return null;for(var t=[],e=0;e<this.props.inputs;e++)t.push(Object(h.jsx)(l.a,{drawWire:this.props.drawWire,index:e,gate:this,getFocusedElement:this.props.getFocusedElement,mount:this.mountPin}));for(var n=[],a=0;a<this.props.outputs;a++)n.push(Object(h.jsx)(u.a,{index:a,gate:this,getFocusedElement:this.props.getFocusedElement,setFocusedElement:this.props.setFocusedElement,mount:this.mountPin}));return Object(h.jsxs)("div",{className:"LogicGate ".concat(d.a.LogicGate),style:this.props.style,ref:this.props.reference,children:[Object(h.jsx)("div",{className:d.a.LogicGateInputs,children:t}),Object(h.jsxs)("h5",{className:d.a.LogicGateValue,children:[" ",this.name.replace("f_","")," "]}),Object(h.jsx)("div",{className:d.a.LogicGateOutputs,children:n})]})}}]),n}(c.a.Component);e.a=p},function(t,e,n){"use strict";(function(t){var a=n(2),i=n(3),s=n(5),r=n(4),o=n(34),c=n.n(o),u=n(18),l=n(11),f=n(9),d=n(1),h=n.n(d),p=n(0),_=function(e){Object(s.a)(o,e);var n=Object(r.a)(o);function o(e){var i;return Object(a.a)(this,o),(i=n.call(this)).addDummy=function(e){var n=i.state.dummies,a=Object(l.c)(e.functions);t[e.name]=a;var s=Object(p.jsx)(u.a,{gateName:e.name,function:a,color:e.color,inputs:e.inputs,outputs:e.outputs,addGate:i.props.addGate});n.push(s),i.setState({dummies:n})},i.handleOnWheel=function(t){t.currentTarget.scrollLeft+=t.deltaY},i.state={dummies:[Object(p.jsx)(u.a,{gateName:"AND",function:f.a,color:"cornflowerblue",inputs:2,outputs:1,addGate:e.addGate}),Object(p.jsx)(u.a,{gateName:"NOT",function:f.b,color:"red",inputs:1,outputs:1,addGate:e.addGate}),Object(p.jsx)(u.a,{gateName:"OR",function:f.c,color:"chocolate",inputs:2,outputs:1,addGate:e.addGate})]},i}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsx)("div",{className:c.a.ControlPanel,ref:this.props.reference,onWheel:this.handleOnWheel,children:this.state.dummies})}}]),o}(h.a.Component);e.a=_}).call(this,n(29))},function(t,e,n){t.exports={ControlPanel:"ControlPanel_ControlPanel__1H8pU"}},function(t,e,n){"use strict";var a=n(36),i=n.n(a),s=n(0);e.a=function(t){return Object(s.jsx)("svg",{className:i.a.WiresBoard,children:t.wires})}},function(t,e,n){t.exports={WiresBoard:"WiresBoard_WiresBoard__1awF0"}},function(t,e,n){"use strict";var a=new Event("remove");e.a=a},function(t,e,n){"use strict";var a=n(27),i=n.n(a),s=n(0),r=function(t){return Object(s.jsx)("button",{onClick:t.action,className:i.a.Button,children:t.text})};e.a=function(t){return Object(s.jsx)("div",{className:i.a.Menu,children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(r,{text:"zapisz bramk\u0119",action:function(){return t.functions[0]()}})}),Object(s.jsx)("li",{children:Object(s.jsx)(r,{text:"wyczy\u015b\u0107\xa0canvas",action:function(){return t.functions[1]()}})}),Object(s.jsx)("li",{children:Object(s.jsx)(r,{text:"przycisk 3",action:function(){return t.functions[2]()}})})]})})}},function(t,e,n){"use strict";var a=n(7),i=n(2),s=n(3),r=n(5),o=n(4),c=n(1),u=n.n(c),l=n(19),f=n.n(l);var d=function(t,e,n){var a=[t.left,t.top],i=[e.left,e.top];return a[1]+=t.height/2,a[0]+=t.width/2,i[1]+=e.height/2,i[0]+=e.width/2,i[0]>a[0]+30?function(t,e){var n,a,i,s=e[1]-t[1],r=e[0]-t[0];return s<-25?(n="a20,20 0 0 0 12,-12",a="a20,20 0 0 1 12 -12"):s>25&&(n="a20,20 0 0 1 12 12",a="a20,20 0 0 0 12 12"),i=n?"\n                l ".concat([r/2,0],"\n                ").concat(n," \n                l ").concat([0,s<0?s+25:s-25]," \n                ").concat(a,"\n                "):"","M ".concat(t," \n            ").concat(i,"\n        L ").concat(e,"\n        ")}(a,i):function(t,e,n){var a,i=e[1]-t[1],s=e[0]-t[0],r=i>0,o="";return a=r?n[0][1]+n[1][0]+75:n[0][0]+n[1][1]+75,o=Math.abs(i)>a?r?"\n                a20,20 0 0 1 12,12\n                l 0,".concat(i/2-25,"\n\n                a20,20 0 0 1 -12,12\n\n                l ").concat(s-50,", 0\n\n                a20,20 0 0 0 -12,12\n\n                L ").concat(e[0]-35,", ").concat(e[1]-15,"\n\n                a20,20 0 0 0 12,12\n\n                "):"   \n                    a20,20 0 0 0 12,-12\n                    l 0,".concat(i/2+25,"\n\n                    a20,20 0 0 0 -12,-12\n\n                    l ").concat(s-50,", 0\n\n                    a20,20 0 0 1 -12,-12\n\n                    L ").concat(e[0]-35,", ").concat(e[1]+15,"\n\n                    a20,20 0 0 1 12,-12\n\n                "):r?"\n                    a20,20 0 0 0 12,-12\n\n                    l 0, ".concat(2*n[0][0],"\n\n                    a20,20 0 0 0 -12,-12\n\n                    l ").concat(s-35,", 0\n\n                    a20,20 0 0 0 -12,12\n\n                    L ").concat(e[0]-25,", ").concat(e[1]-10,"\n\n                    a20,20 0 0 0 12, 12\n                "):"\n                    a20,20 0 0 1 12,12\n\n                    l 0, ".concat(-2*n[0][0],"\n\n                    a20,20 0 0 1 -12,12\n\n                    l ").concat(s-35,", 0\n\n                    a20,20 0 0 1 -12,-12\n\n                    L ").concat(e[0]-25,", ").concat(e[1]+15,"\n\n                    a20,20 0 0 1 12, -12\n                "),"\n        M ".concat(t,"\n        l 25, 0\n        ").concat(o,"\n        \n        L ").concat(e,"\n    ")}(a,i,n)},h=n(0),p={true:f.a.WireHighState,false:f.a.WireLowState,undefined:f.a.WireUndefinedState};var _=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(t){var s;Object(i.a)(this,n),(s=e.call(this,t)).attachEventListeners=function(){window.addEventListener("resize",s.updatePosition);var t,e=Object(a.a)(s.gates);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.addEventListener("mousemove",s.updatePosition),n.addEventListener("remove",s.removeConnection)}}catch(i){e.e(i)}finally{e.f()}s.firstPin.state.ref.current.addEventListener("signalChange",s.updateStateClass),s.secondPin.state.ref.current.addEventListener("parentChange",s.examineWireVisibility)},s.detachEventListeners=function(){window.removeEventListener("resize",s.updatePosition);var t,e=Object(a.a)(s.gates);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.removeEventListener("mousemove",s.updatePosition),n.removeEventListener("remove",s.removeConnection)}}catch(i){e.e(i)}finally{e.f()}s.firstPin.state.ref.current.removeEventListener("signalChange",s.updateStateClass),s.secondPin.state.ref.current.removeEventListener("parentChange",s.examineWireVisibility)},s.handleOnClick=function(){return s.removeConnection()},s.removeConnection=function(){s.detachEventListeners(),s.secondPin.disconnect(),s.setState({render:!1})},s.examineWireVisibility=function(){s.setState({render:s.firstPin===s.secondPin.state.parentPin})},s.getStateClass=function(){return p[s.firstPin.state.value]},s.updateStateClass=function(){s.setState({stateClass:s.getStateClass()})},s.updatePosition=function(){s.setState({firstPinPosition:s.firstPin.state.ref.current.getBoundingClientRect(),secondPinPosition:s.secondPin.state.ref.current.getBoundingClientRect()})},s.firstPin=t.firstPin,s.secondPin=t.secondPin,s.gates=[s.firstPin,s.secondPin].map((function(t){return t.gate?function(t){for(var e=t.parentElement;!e.classList.contains("LogicGate");)e=e.parentElement;return e}(t.state.ref.current):t.state.ref.current})),s.attachEventListeners(),s.state={firstPinPosition:t.firstPin.state.ref.current.getBoundingClientRect(),secondPinPosition:t.secondPin.state.ref.current.getBoundingClientRect(),stateClass:s.getStateClass(),render:!0};var r=s.gates[0].getBoundingClientRect();s.firstPinPaddings=[r.top-s.state.firstPinPosition.top,r.bottom-s.state.firstPinPosition.bottom];var o=s.gates[1].getBoundingClientRect();return s.secondPinPaddings=[o.top-s.state.secondPinPosition.top,o.bottom-s.state.secondPinPosition.bottom],s}return Object(s.a)(n,[{key:"render",value:function(){return this.state.render?Object(h.jsx)("path",{d:d(this.state.firstPinPosition,this.state.secondPinPosition,[this.firstPinPaddings,this.secondPinPaddings]).replace(/(\r\n|\n|\r| {2})/gm,""),className:"".concat(f.a.Wire," ").concat(this.state.stateClass),onClick:this.handleOnClick}):null}}]),n}(u.a.Component);e.a=_},function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(30),r=n.n(s),o=n(31),c=n(0);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(o.a,{})}),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.391b8d49.chunk.js.map