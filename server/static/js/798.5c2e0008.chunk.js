(self.webpackChunktmpl=self.webpackChunktmpl||[]).push([[798],{4462:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.Z=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},5501:function(e,n,t){"use strict";var r=t(7208);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},4635:function(e,n,t){e.exports=t(5501)()},7208:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1089:function(e,n,t){"use strict";t.d(n,{Z:function(){return L}});var r=t(6875),o=t(2601),a=t(2737),i=t(1534),c=t(4635),u=t.n(c),s=t(2364),f=t(6249),l=t(4462),d=t(168),p=t(7248),g=t(1363),v=t(5210),y=t(731),h=t(4974),m={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},E=t(6450),b=t(781),R=t(4716),w=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(n){a(n)}}function c(e){try{u(r.throw(e))}catch(n){a(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}u((r=r.apply(e,n||[])).next())}))},x=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},P=g.PDFDataRangeTransport,S=function(e,n){switch(n){case m.NEED_PASSWORD:e(prompt("Enter the password to open this PDF file."));break;case m.INCORRECT_PASSWORD:e(prompt("Invalid password. Please try again."))}},T=(0,i.forwardRef)((function(e,n){var t=this,c=e.children,u=e.className,m=e.error,R=void 0===m?"Failed to load PDF file.":m,T=e.externalLinkRel,O=e.externalLinkTarget,L=e.file,k=e.inputRef,Z=e.imageResourcesPath,C=e.loading,D=void 0===C?"Loading PDF\u2026":C,A=e.noData,_=void 0===A?"No PDF file specified.":A,I=e.onItemClick,j=e.onLoadError,F=e.onLoadProgress,N=e.onLoadSuccess,M=e.onPassword,V=void 0===M?S:M,U=e.onSourceError,G=e.onSourceSuccess,q=e.options,B=e.renderMode,J=e.rotate,H=x(e,["children","className","error","externalLinkRel","externalLinkTarget","file","inputRef","imageResourcesPath","loading","noData","onItemClick","onLoadError","onLoadProgress","onLoadSuccess","onPassword","onSourceError","onSourceSuccess","options","renderMode","rotate"]),W=(0,b.U)(),$=(0,a.Z)(W,2),K=$[0],z=$[1],X=K.value,Y=K.error,Q=(0,b.U)(),ee=(0,a.Z)(Q,2),ne=ee[0],te=ee[1],re=ne.value,oe=ne.error,ae=(0,i.useRef)(new h.Z),ie=(0,i.useRef)([]),ce=(0,i.useRef)({scrollPageIntoView:function(e){var n=e.dest,t=e.pageIndex,r=e.pageNumber;if(I)I({dest:n,pageIndex:t,pageNumber:r});else{var o=ie.current[t];o?o.scrollIntoView():(0,p.Z)(!1,"An internal link leading to page ".concat(r," was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."))}}});(0,i.useImperativeHandle)(n,(function(){return{linkService:ae,pages:ie,viewer:ce}}),[]),(0,i.useEffect)((function(){z({type:"RESET"})}),[L,z]);var ue=(0,i.useCallback)((function(){return w(t,void 0,void 0,(0,o.Z)().mark((function e(){var n,t,r,a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L){e.next=2;break}return e.abrupt("return",null);case 2:if("string"!==typeof L){e.next=8;break}if(!(0,E.gJ)(L)){e.next=6;break}return n=(0,E.us)(L),e.abrupt("return",{data:n});case 6:return(0,E.tN)(),e.abrupt("return",{url:L});case 8:if(!(L instanceof P)){e.next=10;break}return e.abrupt("return",{range:L});case 10:if(!(0,E.eP)(L)){e.next=12;break}return e.abrupt("return",{data:L});case 12:if(!E.jU){e.next=18;break}if(!(0,E.Lj)(L)){e.next=18;break}return e.next=16,(0,E.eR)(L);case 16:return t=e.sent,e.abrupt("return",{data:t});case 18:if((0,d.Z)("object"===typeof L,"Invalid parameter in file, need either Uint8Array, string or a parameter object"),(0,d.Z)("data"in L||"range"in L||"url"in L,"Invalid parameter object: need either .data, .range or .url"),!("url"in L)||"string"!==typeof L.url){e.next=26;break}if(!(0,E.gJ)(L.url)){e.next=25;break}return r=L.url,a=x(L,["url"]),i=(0,E.us)(r),e.abrupt("return",Object.assign({data:i},a));case 25:(0,E.tN)();case 26:return e.abrupt("return",L);case 27:case"end":return e.stop()}}),e)})))}),[L]);(0,i.useEffect)((function(){var e=(0,f.Z)(ue());return e.promise.then((function(e){z({type:"RESOLVE",value:e})})).catch((function(e){z({type:"REJECT",error:e})})),function(){(0,E.LJ)(e)}}),[ue,z]),(0,i.useEffect)((function(){"undefined"!==typeof X&&(!1!==X?G&&G():Y&&((0,p.Z)(!1,Y.toString()),U&&U(Y)))}),[X]),(0,i.useEffect)((function(){te({type:"RESET"})}),[te,X]),(0,i.useEffect)((function(){if(X){var e=q?Object.assign(Object.assign({},X),q):X,n=g.getDocument(e);F&&(n.onProgress=F),V&&(n.onPassword=V);var t=n;return t.promise.then((function(e){te({type:"RESOLVE",value:e})})).catch((function(e){t.destroyed||te({type:"REJECT",error:e})})),function(){t.destroy()}}}),[q,te,X]),(0,i.useEffect)((function(){"undefined"!==typeof re&&(!1!==re?re&&(N&&N(re),ie.current=new Array(re.numPages),ae.current.setDocument(re)):oe&&((0,p.Z)(!1,oe.toString()),j&&j(oe)))}),[re]),(0,i.useEffect)((function(){ae.current.setViewer(ce.current),ae.current.setExternalLinkRel(T),ae.current.setExternalLinkTarget(O)}),[T,O]);var se={imageResourcesPath:Z,linkService:ae.current,pdf:re,registerPage:function(e,n){ie.current[e]=n},renderMode:B,rotate:J,unregisterPage:function(e){delete ie.current[e]}},fe=(0,i.useMemo)((function(){return(0,s.ZP)(H,(function(){return re}))}),[H,re]);return i.createElement("div",Object.assign({className:(0,l.Z)("react-pdf__Document",u),ref:k,style:(0,r.Z)({},"--scale-factor","1")},fe),L?void 0===re||null===re?i.createElement(y.Z,{type:"loading"},"function"===typeof D?D():D):!1===re?i.createElement(y.Z,{type:"error"},"function"===typeof R?R():R):i.createElement(v.Z.Provider,{value:se},c):i.createElement(y.Z,{type:"no-data"},"function"===typeof _?_():_))})),O=u().oneOfType([u().func,u().node]);T.propTypes=Object.assign(Object.assign({},R.Gg),{children:u().node,className:R.$n,error:O,externalLinkRel:u().string,externalLinkTarget:u().oneOf(["_self","_blank","_parent","_top"]),file:R.zE,imageResourcesPath:u().string,inputRef:R.dq,loading:O,noData:O,onItemClick:u().func,onLoadError:u().func,onLoadProgress:u().func,onLoadSuccess:u().func,onPassword:u().func,onSourceError:u().func,onSourceSuccess:u().func,options:u().shape({canvasFactory:u().any,canvasMaxAreaInBytes:u().number,cMapPacked:u().bool,CMapReaderFactory:u().any,cMapUrl:u().string,disableAutoFetch:u().bool,disableFontFace:u().bool,disableRange:u().bool,disableStream:u().bool,docBaseUrl:u().string,enableXfa:u().bool,filterFactory:u().any,fontExtraProperties:u().bool,httpHeaders:u().object,isEvalSupported:u().bool,isOffscreenCanvasSupported:u().bool,length:u().number,maxImageSize:u().number,ownerDocument:u().any,password:u().string,pdfBug:u().bool,rangeChunkSize:u().number,StandardFontDataFactory:u().any,standardFontDataUrl:u().string,stopAtErrors:u().bool,useSystemFonts:u().bool,useWorkerFetch:u().bool,verbosity:u().number,withCredentials:u().bool,worker:u().any}),rotate:u().number});var L=T},5210:function(e,n,t){"use strict";var r=t(1534);n.Z=(0,r.createContext)(null)},4974:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5207),o=t(3840),a=t(168),i=function(){function e(){(0,r.Z)(this,e),this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}return(0,o.Z)(e,[{key:"setDocument",value:function(e){this.pdfDocument=e}},{key:"setViewer",value:function(e){this.pdfViewer=e}},{key:"setExternalLinkRel",value:function(e){this.externalLinkRel=e}},{key:"setExternalLinkTarget",value:function(e){this.externalLinkTarget=e}},{key:"setHistory",value:function(){}},{key:"pagesCount",get:function(){return this.pdfDocument?this.pdfDocument.numPages:0}},{key:"page",get:function(){return(0,a.Z)(this.pdfViewer,"PDF viewer is not initialized."),this.pdfViewer.currentPageNumber||0},set:function(e){(0,a.Z)(this.pdfViewer,"PDF viewer is not initialized."),this.pdfViewer.currentPageNumber=e}},{key:"rotation",get:function(){return 0},set:function(e){}},{key:"goToDestination",value:function(e){var n=this;return new Promise((function(t){(0,a.Z)(n.pdfDocument,"PDF document not loaded."),(0,a.Z)(e,"Destination is not specified."),"string"===typeof e?n.pdfDocument.getDestination(e).then(t):Array.isArray(e)?t(e):e.then(t)})).then((function(e){(0,a.Z)(Array.isArray(e),'"'.concat(e,'" is not a valid destination array.'));var t=e[0];new Promise((function(e){(0,a.Z)(n.pdfDocument,"PDF document not loaded."),t instanceof Object?n.pdfDocument.getPageIndex(t).then((function(n){e(n)})).catch((function(){(0,a.Z)(!1,'"'.concat(t,'" is not a valid page reference.'))})):"number"===typeof t?e(t):(0,a.Z)(!1,'"'.concat(t,'" is not a valid destination reference.'))})).then((function(t){var r=t+1;(0,a.Z)(n.pdfViewer,"PDF viewer is not initialized."),(0,a.Z)(r>=1&&r<=n.pagesCount,'"'.concat(r,'" is not a valid page number.')),n.pdfViewer.scrollPageIntoView({dest:e,pageIndex:t,pageNumber:r})}))}))}},{key:"navigateTo",value:function(e){this.goToDestination(e)}},{key:"goToPage",value:function(){}},{key:"addLinkAttributes",value:function(e,n,t){e.href=n,e.rel=this.externalLinkRel||"noopener noreferrer nofollow",e.target=t?"_blank":this.externalLinkTarget||""}},{key:"getDestinationHash",value:function(){return"#"}},{key:"getAnchorUrl",value:function(){return"#"}},{key:"setHash",value:function(){}},{key:"executeNamedAction",value:function(){}},{key:"cachePageRef",value:function(){}},{key:"isPageVisible",value:function(){return!0}},{key:"isPageCached",value:function(){return!0}},{key:"executeSetOCGState",value:function(){}}]),e}()},731:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(1534),o=t(4635),a=t.n(o);function i(e){var n=e.children,t=e.type;return r.createElement("div",{className:"react-pdf__message react-pdf__message--".concat(t)},n)}i.propTypes={children:a().node,type:a().oneOf(["error","loading","no-data"]).isRequired}},9650:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r=t(6875),o=t(2737),a=t(1534),i=t(4635),c=t.n(i),u=t(6249),s=t(2364),f=t(4462);function l(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e.filter(Boolean);if(t.length<=1){var r=t[0];return r||null}return function(e){t.forEach((function(n){"function"===typeof n?n(e):n&&(n.current=e)}))}}var d=t(168),p=t(7248),g=t(5210),v=(0,a.createContext)(null),y=t(731),h=t(1363),m=t(6450),E=t(4716),b=h.AnnotationMode;function R(e){var n=(0,a.useContext)(v);(0,d.Z)(n,"Unable to find Page context.");var t=Object.assign(Object.assign({},n),e),r=t.canvasBackground,o=t.devicePixelRatio,i=t.onRenderError,c=t.onRenderSuccess,u=t.page,s=t.renderForms,f=t.rotate,g=t.scale,y=e.canvasRef,h=(0,a.useRef)(null);(0,d.Z)(u,"Attempted to render page canvas, but no page was specified.");var E=o||(0,m.x_)();function R(e){(0,m.DE)(e)||((0,p.Z)(!1,e.toString()),i&&i(e))}var w=(0,a.useMemo)((function(){return u.getViewport({scale:g*E,rotation:f})}),[E,u,f,g]),x=(0,a.useMemo)((function(){return u.getViewport({scale:g,rotation:f})}),[u,f,g]);(0,a.useEffect)((function(){if(u){u.cleanup();var e=h.current;if(e){e.width=w.width,e.height=w.height,e.style.width="".concat(Math.floor(x.width),"px"),e.style.height="".concat(Math.floor(x.height),"px"),e.style.visibility="hidden";var n={annotationMode:s?b.ENABLE_FORMS:b.ENABLE,canvasContext:e.getContext("2d",{alpha:!1}),viewport:w};r&&(n.background=r);var t=u.render(n),o=t;return t.promise.then((function(){e.style.visibility="",u&&c&&c((0,m.XZ)(u,g))})).catch(R),function(){return(0,m.LJ)(o)}}}}),[r,h,E,u,s,w,x]);var P=(0,a.useCallback)((function(){var e=h.current;e&&(e.width=0,e.height=0)}),[h]);return(0,a.useEffect)((function(){return P}),[P]),a.createElement("canvas",{className:"react-pdf__Page__canvas",dir:"ltr",ref:l(y,h),style:{display:"block",userSelect:"none"}})}R.propTypes={canvasRef:E.dq};var w=t(781);function x(){var e=(0,a.useContext)(v);(0,d.Z)(e,"Unable to find Page context.");var n=e.onRenderSuccess,t=e.onRenderError,r=e.page,i=e.rotate,c=e.scale,s=(0,w.U)(),f=(0,o.Z)(s,2),l=f[0],g=f[1],y=l.value,E=l.error;(0,d.Z)(r,"Attempted to render page SVG, but no page was specified.");var b=(0,a.useMemo)((function(){return r.getViewport({scale:c,rotation:i})}),[r,i,c]);(0,a.useEffect)((function(){g({type:"RESET"})}),[r,g,b]),(0,a.useEffect)((function(){if(r){var e=(0,u.Z)(r.getOperatorList());return e.promise.then((function(e){new h.SVGGraphics(r.commonObjs,r.objs).getSVG(e,b).then((function(e){g({type:"RESOLVE",value:e})})).catch((function(e){g({type:"REJECT",error:e})}))})).catch((function(e){g({type:"REJECT",error:e})})),function(){return(0,m.LJ)(e)}}}),[r,g,b]),(0,a.useEffect)((function(){void 0!==y&&(!1!==y?r&&n&&n((0,m.XZ)(r,c)):E&&((0,m.DE)(E)||((0,p.Z)(!1,E.toString()),t&&t(E))))}),[y]);var R=b.width,x=b.height;return a.createElement("div",{className:"react-pdf__Page__svg",ref:function(e){return function(e){if(e&&y){e.firstElementChild||e.appendChild(y);var n=b.width,t=b.height;y.setAttribute("width","".concat(n)),y.setAttribute("height","".concat(t))}}(e)},style:{display:"block",backgroundColor:"white",overflow:"hidden",width:R,height:x,userSelect:"none"}})}function P(){var e=(0,a.useContext)(v);(0,d.Z)(e,"Unable to find Page context.");var n=e.customTextRenderer,t=e.onGetTextError,r=e.onGetTextSuccess,i=e.onRenderTextLayerError,c=e.onRenderTextLayerSuccess,s=e.page,f=e.pageIndex,l=e.pageNumber,g=e.rotate,y=e.scale,E=(0,w.U)(),b=(0,o.Z)(E,2),R=b[0],x=b[1],P=R.value,S=R.error,T=(0,a.useRef)(null),O=(0,a.useRef)();(0,d.Z)(s,"Attempted to load page text content, but no page was specified."),(0,p.Z)(1===parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10),"TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer"),(0,a.useEffect)((function(){x({type:"RESET"})}),[s,x]),(0,a.useEffect)((function(){if(s){var e=(0,u.Z)(s.getTextContent()),n=e;return e.promise.then((function(e){x({type:"RESOLVE",value:e})})).catch((function(e){x({type:"REJECT",error:e})})),function(){return(0,m.LJ)(n)}}}),[s,x]),(0,a.useEffect)((function(){void 0!==P&&(!1!==P?P&&r&&r(P):S&&((0,p.Z)(!1,S.toString()),t&&t(S)))}),[P]);var L=(0,a.useCallback)((function(){c&&c()}),[c]),k=(0,a.useCallback)((function(e){(0,p.Z)(!1,e.toString()),i&&i(e)}),[i]);var Z=(0,a.useMemo)((function(){return s.getViewport({scale:y,rotation:g})}),[s,g,y]);return(0,a.useLayoutEffect)((function(){if(s&&P){var e=T.current;if(e){e.innerHTML="";var t=s.streamTextContent(),r={container:e,textContentSource:t,viewport:Z},o=h.renderTextLayer(r),a=o;return o.promise.then((function(){var t=document.createElement("div");if(t.className="endOfContent",e.append(t),O.current=t,n){var r=0;P.items.forEach((function(t,o){if(function(e){return"str"in e}(t)){var a=e.children[r];if(a){var i=n(Object.assign({pageIndex:f,pageNumber:l,itemIndex:o},t));a.innerHTML=i,r+=t.str&&t.hasEOL?2:1}}}))}L()})).catch(k),function(){return(0,m.LJ)(a)}}}}),[n,k,L,s,f,l,P,Z]),a.createElement("div",{className:"react-pdf__Page__textContent textLayer",onMouseUp:function(){var e=O.current;e&&e.classList.remove("active")},onMouseDown:function(){var e=O.current;e&&e.classList.add("active")},ref:T})}function S(){var e=(0,a.useContext)(g.Z);(0,d.Z)(e,"Unable to find Document context. Did you wrap <Page /> in <Document />?");var n=(0,a.useContext)(v);(0,d.Z)(n,"Unable to find Page context.");var t=Object.assign(Object.assign({},e),n),r=t.imageResourcesPath,i=t.linkService,c=t.onGetAnnotationsError,s=t.onGetAnnotationsSuccess,f=t.onRenderAnnotationLayerError,l=t.onRenderAnnotationLayerSuccess,y=t.page,E=t.renderForms,b=t.rotate,R=t.scale,x=void 0===R?1:R,P=(0,w.U)(),S=(0,o.Z)(P,2),T=S[0],O=S[1],L=T.value,k=T.error,Z=(0,a.useRef)(null);(0,d.Z)(y,"Attempted to load page annotations, but no page was specified."),(0,p.Z)(1===parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10),"AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations"),(0,a.useEffect)((function(){O({type:"RESET"})}),[O,y]),(0,a.useEffect)((function(){if(y){var e=(0,u.Z)(y.getAnnotations()),n=e;return e.promise.then((function(e){O({type:"RESOLVE",value:e})})).catch((function(e){O({type:"REJECT",error:e})})),function(){(0,m.LJ)(n)}}}),[O,y,E]),(0,a.useEffect)((function(){void 0!==L&&(!1!==L?L&&s&&s(L):k&&((0,p.Z)(!1,k.toString()),c&&c(k)))}),[L]);var C=(0,a.useMemo)((function(){return y.getViewport({scale:x,rotation:b})}),[y,b,x]);return(0,a.useEffect)((function(){if(y&&L){var e=Z.current;if(e){var n=C.clone({dontFlip:!0}),t={annotations:L,div:e,downloadManager:null,imageResourcesPath:r,linkService:i,page:y,renderForms:E,viewport:n};e.innerHTML="";try{h.AnnotationLayer.render(t),l&&l()}catch(o){!function(e){(0,p.Z)(!1,"".concat(e)),f&&f(e)}(o)}return function(){}}}}),[L,r,i,y,E,C]),a.createElement("div",{className:"react-pdf__Page__annotations annotationLayer",ref:Z})}var T=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function O(e){var n,t=(0,a.useContext)(g.Z);(0,d.Z)(t,"Unable to find Document context. Did you wrap <Page /> in <Document />?");var i=Object.assign(Object.assign({},t),e),c=i.canvasBackground,h=i.canvasRef,E=i.children,b=i.className,O=i.customTextRenderer,L=i.devicePixelRatio,k=i.error,Z=void 0===k?"Failed to load the page.":k,C=i.height,D=i.inputRef,A=i.loading,_=void 0===A?"Loading page\u2026":A,I=i.noData,j=void 0===I?"No page specified.":I,F=i.onGetAnnotationsError,N=i.onGetAnnotationsSuccess,M=i.onGetTextError,V=i.onGetTextSuccess,U=i.onLoadError,G=i.onLoadSuccess,q=i.onRenderAnnotationLayerError,B=i.onRenderAnnotationLayerSuccess,J=i.onRenderError,H=i.onRenderSuccess,W=i.onRenderTextLayerError,$=i.onRenderTextLayerSuccess,K=i.pageIndex,z=i.pageNumber,X=i.pdf,Y=i.registerPage,Q=i.renderAnnotationLayer,ee=void 0===Q||Q,ne=i.renderForms,te=void 0!==ne&&ne,re=i.renderMode,oe=void 0===re?"canvas":re,ae=i.renderTextLayer,ie=void 0===ae||ae,ce=i.rotate,ue=i.scale,se=void 0===ue?1:ue,fe=i.unregisterPage,le=i.width,de=T(i,["canvasBackground","canvasRef","children","className","customTextRenderer","devicePixelRatio","error","height","inputRef","loading","noData","onGetAnnotationsError","onGetAnnotationsSuccess","onGetTextError","onGetTextSuccess","onLoadError","onLoadSuccess","onRenderAnnotationLayerError","onRenderAnnotationLayerSuccess","onRenderError","onRenderSuccess","onRenderTextLayerError","onRenderTextLayerSuccess","pageIndex","pageNumber","pdf","registerPage","renderAnnotationLayer","renderForms","renderMode","renderTextLayer","rotate","scale","unregisterPage","width"]),pe=(0,w.U)(),ge=(0,o.Z)(pe,2),ve=ge[0],ye=ge[1],he=ve.value,me=ve.error,Ee=(0,a.useRef)(null);(0,d.Z)(X,"Attempted to load a page, but no document was specified.");var be=(0,m.T8)(z)?z-1:null!==K&&void 0!==K?K:null,Re=null!==z&&void 0!==z?z:(0,m.T8)(K)?K+1:null,we=null!==ce&&void 0!==ce?ce:he?he.rotate:null,xe=(0,a.useMemo)((function(){if(!he)return null;var e=1,n=null!==se&&void 0!==se?se:1;if(le||C){var t=he.getViewport({scale:1,rotation:we});le?e=le/t.width:C&&(e=C/t.height)}return n*e}),[C,he,we,se,le]);(0,a.useEffect)((function(){return function(){null!==be&&fe&&fe(be)}}),[X,be,fe]),(0,a.useEffect)((function(){ye({type:"RESET"})}),[ye,X,be]),(0,a.useEffect)((function(){if(X&&Re){var e=(0,u.Z)(X.getPage(Re)),n=e;return e.promise.then((function(e){ye({type:"RESOLVE",value:e})})).catch((function(e){ye({type:"REJECT",error:e})})),function(){return(0,m.LJ)(n)}}}),[ye,X,be,Re,Y]),(0,a.useEffect)((function(){void 0!==he&&(!1!==he?function(){if(G){if(!he||!xe)return;G((0,m.XZ)(he,xe))}if(Y){if(null===be||!Ee.current)return;Y(be,Ee.current)}}():me&&((0,p.Z)(!1,me.toString()),U&&U(me)))}),[he,xe]);var Pe=he&&(0,m.T8)(be)&&(0,m.T8)(Re)&&(0,m.T8)(we)&&(0,m.T8)(xe)?{canvasBackground:c,customTextRenderer:O,devicePixelRatio:L,onGetAnnotationsError:F,onGetAnnotationsSuccess:N,onGetTextError:M,onGetTextSuccess:V,onRenderAnnotationLayerError:q,onRenderAnnotationLayerSuccess:B,onRenderError:J,onRenderSuccess:H,onRenderTextLayerError:W,onRenderTextLayerSuccess:$,page:he,pageIndex:be,pageNumber:Re,renderForms:te,rotate:we,scale:xe}:null,Se=(0,a.useMemo)((function(){return(0,s.ZP)(de,(function(){return he?xe?(0,m.XZ)(he,xe):void 0:he}))}),[de,he,xe]),Te="".concat(be,"@").concat(xe,"/").concat(we),Oe="".concat(be,"/").concat(we);function Le(){return a.createElement(v.Provider,{value:Pe},function(){switch(oe){case"none":return null;case"svg":return a.createElement(x,{key:"".concat(Oe,"_svg")});default:return a.createElement(R,{key:"".concat(Te,"_canvas"),canvasRef:h})}}(),ie?a.createElement(P,{key:"".concat(Te,"_text")}):null,ee?a.createElement(S,{key:"".concat(Te,"_annotations")}):null,E)}return a.createElement("div",Object.assign({className:(0,f.Z)("react-pdf__Page",b),"data-page-number":Re,ref:l(D,Ee),style:(n={},(0,r.Z)(n,"--scale-factor","".concat(xe)),(0,r.Z)(n,"backgroundColor",c||"white"),(0,r.Z)(n,"position","relative"),(0,r.Z)(n,"minWidth","min-content"),(0,r.Z)(n,"minHeight","min-content"),n)},Se),Re?null===X||void 0===he||null===he?a.createElement(y.Z,{type:"loading"},"function"===typeof _?_():_):!1===X||!1===he?a.createElement(y.Z,{type:"error"},"function"===typeof Z?Z():Z):Le():a.createElement(y.Z,{type:"no-data"},"function"===typeof j?j():j))}var L=c().oneOfType([c().func,c().node]);O.propTypes=Object.assign(Object.assign({},E.Gg),{canvasBackground:c().string,canvasRef:E.dq,children:c().node,className:E.$n,customTextRenderer:c().func,devicePixelRatio:c().number,error:L,height:c().number,imageResourcesPath:c().string,inputRef:E.dq,loading:L,noData:L,onGetTextError:c().func,onGetTextSuccess:c().func,onLoadError:c().func,onLoadSuccess:c().func,onRenderError:c().func,onRenderSuccess:c().func,onRenderTextLayerError:c().func,onRenderTextLayerSuccess:c().func,pageIndex:E.qd,pageNumber:E.F$,pdf:E.Ze,renderAnnotationLayer:c().bool,renderForms:c().bool,renderMode:E.DV,renderTextLayer:c().bool,rotate:E.lA,scale:c().number,width:c().number})},781:function(e,n,t){"use strict";t.d(n,{U:function(){return a}});var r=t(1534);function o(e,n){switch(n.type){case"RESOLVE":return{value:n.value,error:void 0};case"REJECT":return{value:!1,error:n.error};case"RESET":return{value:void 0,error:void 0};default:return e}}function a(){return(0,r.useReducer)(o,{value:void 0,error:void 0})}},4716:function(e,n,t){"use strict";t.d(n,{$n:function(){return d},DV:function(){return m},F$:function(){return v},Gg:function(){return s},Ze:function(){return y},dq:function(){return h},lA:function(){return E},qd:function(){return g},zE:function(){return p}});var r=t(4635),o=t.n(r),a=t(2364),i=t(1363),c=t(6450),u=t(4974),s=function(){var e={};return a.Tu.forEach((function(n){e[n]=o().func})),e}(),f=o().oneOfType([o().instanceOf(Int8Array),o().instanceOf(Uint8Array),o().instanceOf(Uint8ClampedArray),o().instanceOf(Int16Array),o().instanceOf(Uint16Array),o().instanceOf(Int32Array),o().instanceOf(Uint32Array),o().instanceOf(Float32Array),o().instanceOf(Float64Array)]),l=[o().string,o().instanceOf(ArrayBuffer),o().shape({data:o().oneOfType([o().string,o().instanceOf(ArrayBuffer),o().arrayOf(o().number.isRequired),f]).isRequired}),o().shape({range:o().instanceOf(i.PDFDataRangeTransport).isRequired}),o().shape({url:o().string.isRequired})];"undefined"!==typeof Blob&&l.push(o().instanceOf(Blob));var d=o().oneOfType([o().string,o().arrayOf(o().string)]),p=o().oneOfType(l),g=(o().instanceOf(u.Z),o().oneOf(["_self","_blank","_parent","_top"]),o().shape({commonObjs:o().shape({}).isRequired,getAnnotations:o().func.isRequired,getTextContent:o().func.isRequired,getViewport:o().func.isRequired,render:o().func.isRequired}),function(e,n,t){var r=e[n],o=e.pageNumber,a=e.pdf;if(!(0,c.$K)(a))return null;if((0,c.$K)(r)){if("number"!==typeof r)return new Error("`".concat(n,"` of type `").concat(typeof r,"` supplied to `").concat(t,"`, expected `number`."));if(r<0)return new Error("Expected `".concat(n,"` to be greater or equal to 0."));var i=a.numPages;if(r+1>i)return new Error("Expected `".concat(n,"` to be less or equal to ").concat(i-1,"."))}else if(!(0,c.$K)(o))return new Error("`".concat(n,"` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(t,"`."));return null}),v=function(e,n,t){var r=e[n],o=e.pageIndex,a=e.pdf;if(!(0,c.$K)(a))return null;if((0,c.$K)(r)){if("number"!==typeof r)return new Error("`".concat(n,"` of type `").concat(typeof r,"` supplied to `").concat(t,"`, expected `number`."));if(r<1)return new Error("Expected `".concat(n,"` to be greater or equal to 1."));var i=a.numPages;if(r>i)return new Error("Expected `".concat(n,"` to be less or equal to ").concat(i,"."))}else if(!(0,c.$K)(o))return new Error("`".concat(n,"` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(t,"`."));return null},y=o().oneOfType([o().shape({getDestination:o().func.isRequired,getOutline:o().func.isRequired,getPage:o().func.isRequired,numPages:o().number.isRequired}),o().bool]),h=o().oneOfType([o().func,o().exact({current:o().any})]),m=o().oneOf(["canvas","none","svg"]),E=o().oneOf([0,90,180,270])},6450:function(e,n,t){"use strict";t.d(n,{$K:function(){return u},DE:function(){return E},LJ:function(){return h},Lj:function(){return l},T8:function(){return s},XZ:function(){return m},eP:function(){return f},eR:function(){return b},gJ:function(){return d},jU:function(){return i},tN:function(){return y},us:function(){return p},x_:function(){return g}});var r=t(2737),o=t(168),a=t(7248),i="undefined"!==typeof document,c=i&&"file:"===window.location.protocol;function u(e){return"undefined"!==typeof e}function s(e){return u(e)&&null!==e}function f(e){return e instanceof ArrayBuffer}function l(e){return(0,o.Z)(i,"isBlob can only be used in a browser environment"),e instanceof Blob}function d(e){return function(e){return"string"===typeof e}(e)&&/^data:/.test(e)}function p(e){(0,o.Z)(d(e),"Invalid data URI.");var n=e.split(","),t=(0,r.Z)(n,2),a=t[0],i=void 0===a?"":a,c=t[1],u=void 0===c?"":c;return-1!==i.split(";").indexOf("base64")?atob(u):unescape(u)}function g(){return i&&window.devicePixelRatio||1}var v="On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";function y(){(0,a.Z)(!c,"Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ".concat(v))}function h(e){e&&e.cancel&&e.cancel()}function m(e,n){return Object.defineProperty(e,"width",{get:function(){return this.view[2]*n},configurable:!0}),Object.defineProperty(e,"height",{get:function(){return this.view[3]*n},configurable:!0}),Object.defineProperty(e,"originalWidth",{get:function(){return this.view[2]},configurable:!0}),Object.defineProperty(e,"originalHeight",{get:function(){return this.view[3]},configurable:!0}),e}function E(e){return"RenderingCancelledException"===e.name}function b(e){return new Promise((function(n,t){var r=new FileReader;r.onload=function(){if(!r.result)return t(new Error("Error while reading a file."));n(r.result)},r.onerror=function(e){if(!e.target)return t(new Error("Error while reading a file."));var n=e.target.error;if(!n)return t(new Error("Error while reading a file."));switch(n.code){case n.NOT_FOUND_ERR:return t(new Error("Error while reading a file: File not found."));case n.SECURITY_ERR:return t(new Error("Error while reading a file: Security error."));case n.ABORT_ERR:return t(new Error("Error while reading a file: Aborted."));default:return t(new Error("Error while reading a file."))}},r.readAsArrayBuffer(e)}))}},7248:function(e,n){"use strict";n.Z=function(e,n){}},6249:function(e,n,t){"use strict";function r(e){var n=!1;return{promise:new Promise((function(t,r){e.then((function(e){return!n&&t(e)})).catch((function(e){return!n&&r(e)}))})),cancel:function(){n=!0}}}t.d(n,{Z:function(){return r}})},2364:function(e,n,t){"use strict";t.d(n,{Tu:function(){return o},ZP:function(){return a}});var r=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},o=r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r([],["onCopy","onCut","onPaste"],!0),["onCompositionEnd","onCompositionStart","onCompositionUpdate"],!0),["onFocus","onBlur"],!0),["onInput","onInvalid","onReset","onSubmit"],!0),["onLoad","onError"],!0),["onKeyDown","onKeyPress","onKeyUp"],!0),["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],!0),["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],!0),["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],!0),["onSelect"],!0),["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],!0),["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],!0),["onScroll"],!0),["onWheel"],!0),["onAnimationStart","onAnimationEnd","onAnimationIteration"],!0),["onTransitionEnd"],!0),["onChange"],!0),["onToggle"],!0);function a(e,n){var t={};return o.forEach((function(r){var o=e[r];o&&(t[r]=n?function(e){return o(e,n(r))}:o)})),t}},168:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r="Invariant failed";function o(e,n){if(!e)throw new Error(r)}}}]);
//# sourceMappingURL=798.5c2e0008.chunk.js.map