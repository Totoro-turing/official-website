!function(){"use strict";var e,a=function(t,s){function r(e){return Math.floor(e)}function i(){var e=x.params.autoplay,a=x.slides.eq(x.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?s.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}function n(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),x.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===a||!x.isHorizontal()&&40===a))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===a||!x.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(x.container.parents("."+x.params.slideClass).length>0&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=x.container.offset();x.rtl&&(n.left=n.left-x.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+x.width,n.top],[n.left,n.top+x.height],[n.left+x.width,n.top+x.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}x.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!x.rtl||37===a&&x.rtl)&&x.slideNext(),(37===a&&!x.rtl||39===a&&x.rtl)&&x.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&x.slideNext(),38===a&&x.slidePrev()),x.emit("onKeyPress",x,a)}}function p(e){var a=0,t=0,s=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||r)&&e.deltaMode&&(1===e.deltaMode?(s*=40,r*=40):(s*=800,r*=800)),s&&!a&&(a=s<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:r}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=x.rtl?-1:1,s=p(e);if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(x.params.mousewheelInvert&&(a=-a),x.params.freeMode){var r=x.getWrapperTranslate()+a*x.params.mousewheelSensitivity,i=x.isBeginning,n=x.isEnd;if(r>=x.minTranslate()&&(r=x.minTranslate()),r<=x.maxTranslate()&&(r=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(r),x.updateProgress(),x.updateActiveIndex(),(!i&&x.isBeginning||!n&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),x.emit("onScroll",x,e),x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===r||r===x.maxTranslate())return}else{if((new window.Date).getTime()-x.mousewheel.lastScrollTime>60)if(a<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(a,t){a=e(a);var s,r,i,n=x.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",r=a.attr("data-swiper-parallax-x"),i=a.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):x.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",a.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=s&&s.virtualTranslate;s=s||{};var h={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))h[v]=s[v];else{h[v]={};for(var f in s[v])h[v][f]=s[v][f]}for(var w in c)if(void 0===s[w])s[w]=c[w];else if("object"==typeof s[w])for(var y in c[w])void 0===s[w][y]&&(s[w][y]=c[w][y]);var x=this;if(x.params=s,x.originalParams=h,x.classNames=[],void 0!==e&&"undefined"!=typeof Dom7&&(e=Dom7),(void 0!==e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(x.$=e,x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){if(!x.params.breakpoints)return!1;var e,a=!1,t=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},x.setBreakpoint=function(){var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var a=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,t=x.params.loop&&a.slidesPerView!==x.params.slidesPerView;for(var s in a)x.params[s]=a[s];x.currentBreakpoint=e,t&&x.destroyLoop&&x.reLoop(!0)}},x.params.breakpoints&&x.setBreakpoint(),x.container=e(t),0!==x.container.length)){if(x.container.length>1){var T=[];return x.container.each(function(){T.push(new a(this,s))}),T}x.container[0].swiper=x,x.container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(x.params.effect)>=0&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,x.params.spaceBetween=0,void 0===g&&(x.params.virtualTranslate=!0)),x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),x.wrapper=x.container.children("."+x.params.wrapperClass),x.params.pagination&&(x.paginationContainer=e(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&x.paginationContainer.length>1&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=e(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&x.nextButton.length>1&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=e(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&x.prevButton.length>1&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),x.isHorizontal=function(){return"horizontal"===x.params.direction},x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),x.params.slidesPerColumn>1&&x.classNames.push(x.params.containerModifierClass+"multirow"),x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),x.container.addClass(x.classNames.join(" ")),x.translate=0,x.progress=0,x.velocity=0,x.lockSwipeToNext=function(){x.params.allowSwipeToNext=!1,x.params.allowSwipeToPrev===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){x.params.allowSwipeToPrev=!1,x.params.allowSwipeToNext===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){x.params.allowSwipeToNext=!0,x.params.allowSwipeToPrev===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){x.params.allowSwipeToPrev=!0,x.params.allowSwipeToNext===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor(),x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},x.preloadImages=function(){function e(){void 0!==x&&null!==x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var a=0;a<x.imagesToLoad.length;a++)x.loadImage(x.imagesToLoad[a],x.imagesToLoad[a].currentSrc||x.imagesToLoad[a].getAttribute("src"),x.imagesToLoad[a].srcset||x.imagesToLoad[a].getAttribute("srcset"),x.imagesToLoad[a].sizes||x.imagesToLoad[a].getAttribute("sizes"),!0,e)},x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void i())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,i()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?i():x.stopAutoplay())}))},x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},x.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==x.params.slidesPerView&&x.params.slidesPerView>1)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var s=x.activeIndex+e;if(s>x.slides.length)break;a.push(x.slides.eq(s)[0])}else a.push(x.slides.eq(x.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&x.wrapper.css("height",t+"px")},x.updateContainerSize=function(){var e,a;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,a=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===a&&!x.isHorizontal()||(e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),a=a-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),x.width=e,x.height=a,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,a=x.params.spaceBetween,t=-x.params.slidesOffsetBefore,s=0,i=0;if(void 0!==x.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*x.size),x.virtualSize=-a,x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""});var n;x.params.slidesPerColumn>1&&(n=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(n=Math.max(n,x.params.slidesPerView*x.params.slidesPerColumn)));var o,l=x.params.slidesPerColumn,p=n/l,d=p-(x.params.slidesPerColumn*p-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var m=x.slides.eq(e);if(x.params.slidesPerColumn>1){var u,c,g;"column"===x.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),u=c+g*n/l,m.css({"-webkit-box-ordinal-group":u,"-moz-box-ordinal-group":u,"-ms-flex-order":u,"-webkit-order":u,order:u})):(g=Math.floor(e/p),c=e-g*p),m.css("margin-"+(x.isHorizontal()?"top":"left"),0!==g&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==m.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),x.params.roundLengths&&(o=r(o))):(o=(x.size-(x.params.slidesPerView-1)*a)/x.params.slidesPerView,x.params.roundLengths&&(o=r(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-x.size/2-a),0===e&&(t=t-x.size/2-a),Math.abs(t)<.001&&(t=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t),t=t+o+a),x.virtualSize+=o+a,s=o,i++)}x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter;var h;if(x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),x.params.slidesPerColumn>1&&(x.virtualSize=(o+x.params.spaceBetween)*n,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&h.push(x.snapGrid[e]);x.snapGrid=h}if(!x.params.centeredSlides){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&h.push(x.snapGrid[e]);x.snapGrid=h,Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])>1&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:a+"px"}):x.slides.css({marginRight:a+"px"}):x.slides.css({marginBottom:a+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},x.currentSlidesPerView=function(){var e,a,t=1;if(x.params.centeredSlides){var s,r=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!s&&(r+=x.slides[e].swiperSlideSize,t++,r>x.size&&(s=!0));for(a=x.activeIndex-1;a>=0;a--)x.slides[a]&&!s&&(r+=x.slides[a].swiperSlideSize,t++,r>x.size&&(s=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&t++;return t},x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var a=-e;x.rtl&&(a=e),x.slides.removeClass(x.params.slideVisibleClass);for(var t=0;t<x.slides.length;t++){var s=x.slides[t],r=(a+(x.params.centeredSlides?x.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+x.slidesSizesGrid[t];(i>=0&&i<x.size||n>0&&n<=x.size||i<=0&&n>=x.size)&&x.slides.eq(t).addClass(x.params.slideVisibleClass)}s.progress=x.rtl?-r:r}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var a=x.maxTranslate()-x.minTranslate(),t=x.isBeginning,s=x.isEnd;0===a?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/a,x.isBeginning=x.progress<=0,x.isEnd=x.progress>=1),x.isBeginning&&!t&&x.emit("onReachBeginning",x),x.isEnd&&!s&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,a,t,s=x.rtl?x.translate:-x.translate;for(a=0;a<x.slidesGrid.length;a++)void 0!==x.slidesGrid[a+1]?s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]-(x.slidesGrid[a+1]-x.slidesGrid[a])/2?e=a:s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]&&(e=a+1):s>=x.slidesGrid[a]&&(e=a);x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/x.params.slidesPerGroup),t>=x.snapGrid.length&&(t=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=t,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var a=x.slides.eq(x.activeIndex);a.addClass(x.params.slideActiveClass),s.loop&&(a.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));var t=a.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0),t.addClass(x.params.slideNextClass));var r=a.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);if(x.params.loop&&0===r.length&&(r=x.slides.eq(-1),r.addClass(x.params.slidePrevClass)),s.loop&&(t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),r.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&x.paginationContainer.length>0){var i,n=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?(i=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup),i>x.slides.length-1-2*x.loopedSlides&&(i-=x.slides.length-2*x.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==x.params.paginationType&&(i=n+i)):i=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,"bullets"===x.params.paginationType&&x.bullets&&x.bullets.length>0&&(x.bullets.removeClass(x.params.bulletActiveClass),x.paginationContainer.length>1?x.bullets.each(function(){e(this).index()===i&&e(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(i).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(i+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(n)),"progress"===x.params.paginationType){var o=(i+1)/n,l=o,p=1;x.isHorizontal()||(p=o,l=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,i+1,n)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}x.params.loop||(x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&x.paginationContainer.length>0){var e="";if("bullets"===x.params.paginationType){for(var a=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,t=0;t<a;t++)e+=x.params.paginationBulletRender?x.params.paginationBulletRender(x,t,x.params.bulletClass):"<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},x.update=function(e){function a(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}if(x){x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set();var t;if(e){x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(a(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||a()}else x.params.autoHeight&&x.updateAutoHeight()}},x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),x.params.breakpoints&&x.setBreakpoint();var a=x.params.allowSwipeToPrev,t=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var s=!1;if(x.params.freeMode){var r=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(r),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),s=("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!s&&x.lazy&&x.lazy.load(),x.params.allowSwipeToPrev=a,x.params.allowSwipeToNext=t,x.params.onAfterResize&&x.params.onAfterResize(x)},x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),x.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?r:document,n=!!x.params.nested;if(x.browser.ie)r[t](x.touchEvents.start,x.onTouchStart,!1),i[t](x.touchEvents.move,x.onTouchMove,n),i[t](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};r[t](x.touchEvents.start,x.onTouchStart,o),r[t](x.touchEvents.move,x.onTouchMove,n),r[t](x.touchEvents.end,x.onTouchEnd,o)}(s.simulateTouch&&!x.device.ios&&!x.device.android||s.simulateTouch&&!x.support.touch&&x.device.ios)&&(r[t]("mousedown",x.onTouchStart,!1),document[t]("mousemove",x.onTouchMove,n),document[t]("mouseup",x.onTouchEnd,!1))}window[t]("resize",x.onResize),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.nextButton[a]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[a]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.prevButton[a]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[a]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[a]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[a]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),(x.params.preventClicks||x.params.preventClicksPropagation)&&r[t]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*x.params.slidesPerGroup
;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(a){var t=n(a,"."+x.params.slideClass),s=!1;if(t)for(var r=0;r<x.slides.length;r++)x.slides[r]===t&&(s=!0);if(!t||!s)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=e(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,o=x.clickedIndex,l="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?o<x.loopedSlides-l/2||o>x.slides.length-x.loopedSlides+l/2?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o):o>x.slides.length-l?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o)}else x.slideTo(o)}};var b,C,S,z,M,P,E,I,k,D,L="input, select, textarea, button, video",B=Date.now(),H=[];x.animating=!1,x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,X;x.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(G="touchstart"===a.type)||!("which"in a)||3!==a.which){if(x.params.noSwiping&&n(a,"."+x.params.noSwipingClass))return void(x.allowClick=!0);if(!x.params.swipeHandler||n(a,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=x.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(b=!0,C=!1,S=!0,M=void 0,X=void 0,x.touches.startX=t,x.touches.startY=s,z=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,x.params.threshold>0&&(I=!1),"touchstart"!==a.type){var r=!0;e(a.target).is(L)&&(r=!1),document.activeElement&&e(document.activeElement).is(L)&&document.activeElement.blur(),r&&a.preventDefault()}x.emit("onTouchStart",x,a)}}}},x.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!G||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return x.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(x.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(x.params.onlyExternal)return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.startY=x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,z=Date.now()));if(G&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(G&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(L))return C=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,a),!(a.targetTouches&&a.targetTouches.length>1)){if(x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===M){var t;x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX?M=!1:(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,M=x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle)}if(M&&x.emit("onTouchMoveOpposite",x,a),void 0===X&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(X=!0)),b){if(M)return void(b=!1);if(X){x.allowClick=!1,x.emit("onSliderMove",x,a),a.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&a.stopPropagation(),C||(s.loop&&x.fixLoop(),E=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),D=!1,!x.params.grabCursor||x.params.allowSwipeToNext!==!0&&x.params.allowSwipeToPrev!==!0||x.setGrabCursor(!0)),C=!0;var r=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;r*=x.params.touchRatio,x.rtl&&(r=-r),x.swipeDirection=r>0?"prev":"next",P=r+E;var i=!0;if(r>0&&P>x.minTranslate()?(i=!1,x.params.resistance&&(P=x.minTranslate()-1+Math.pow(-x.minTranslate()+E+r,x.params.resistanceRatio))):r<0&&P<x.maxTranslate()&&(i=!1,x.params.resistance&&(P=x.maxTranslate()+1-Math.pow(x.maxTranslate()-E-r,x.params.resistanceRatio))),i&&(a.preventedByNestedSwiper=!0),!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&P<E&&(P=E),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&P>E&&(P=E),x.params.threshold>0){if(!(Math.abs(r)>x.params.threshold||I))return void(P=E);if(!I)return I=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,P=E,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&((x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(0===H.length&&H.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:z}),H.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),x.updateProgress(P),x.setWrapperTranslate(P))}}}}},x.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),S&&x.emit("onTouchEnd",x,a),S=!1,b){x.params.grabCursor&&C&&b&&(x.params.allowSwipeToNext===!0||x.params.allowSwipeToPrev===!0)&&x.setGrabCursor(!1);var t=Date.now(),s=t-z;if(x.allowClick&&(x.updateClickedSlide(a),x.emit("onTap",x,a),s<300&&t-B>300&&(k&&clearTimeout(k),k=setTimeout(function(){x&&(x.params.paginationHide&&x.paginationContainer.length>0&&!e(a.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,a))},300)),s<300&&t-B<300&&(k&&clearTimeout(k),x.emit("onDoubleTap",x,a))),B=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),!b||!C||!x.swipeDirection||0===x.touches.diff||P===E)return void(b=C=!1);b=C=!1;var r;if(r=x.params.followFinger?x.rtl?x.translate:-x.translate:-P,x.params.freeMode){if(r<-x.minTranslate())return void x.slideTo(x.activeIndex);if(r>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;x.velocity=o/l,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,H.length=0;var p=1e3*x.params.freeModeMomentumRatio,d=x.velocity*p,m=x.translate+d;x.rtl&&(m=-m);var u,c=!1,g=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(m<x.maxTranslate())x.params.freeModeMomentumBounce?(m+x.maxTranslate()<-g&&(m=x.maxTranslate()-g),u=x.maxTranslate(),c=!0,D=!0):m=x.maxTranslate();else if(m>x.minTranslate())x.params.freeModeMomentumBounce?(m-x.minTranslate()>g&&(m=x.minTranslate()+g),u=x.minTranslate(),c=!0,D=!0):m=x.minTranslate();else if(x.params.freeModeSticky){var h,v=0;for(v=0;v<x.snapGrid.length;v+=1)if(x.snapGrid[v]>-m){h=v;break}m=Math.abs(x.snapGrid[h]-m)<Math.abs(x.snapGrid[h-1]-m)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(m=-m)}if(0!==x.velocity)p=x.rtl?Math.abs((-m-x.translate)/x.velocity):Math.abs((m-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(u),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&D&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(u),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(m),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(m),x.updateActiveIndex()}return void((!x.params.freeModeMomentum||s>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex()))}var f,w=0,y=x.slidesSizesGrid[0];for(f=0;f<x.slidesGrid.length;f+=x.params.slidesPerGroup)void 0!==x.slidesGrid[f+x.params.slidesPerGroup]?r>=x.slidesGrid[f]&&r<x.slidesGrid[f+x.params.slidesPerGroup]&&(w=f,y=x.slidesGrid[f+x.params.slidesPerGroup]-x.slidesGrid[f]):r>=x.slidesGrid[f]&&(w=f,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);var T=(r-x.slidesGrid[w])/y;if(s>x.params.longSwipesMs){if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(T>=x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w)),"prev"===x.swipeDirection&&(T>1-x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w))}else{if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(w+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(w)}}},x._slideTo=function(e,a){return x.slideTo(e,a,!0,!0)},x.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var r=-x.snapGrid[x.snapIndex];if(x.params.autoplay&&x.autoplaying&&(s||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(a):x.stopAutoplay()),x.updateProgress(r),x.params.normalizeSlideIndex)for(var i=0;i<x.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*x.slidesGrid[i])&&(e=i);return!(!x.params.allowSwipeToNext&&r<x.translate&&r<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&r>x.translate&&r>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(void 0===a&&(a=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-r===x.translate||!x.rtl&&r===x.translate?(x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(r),!1):(x.updateClasses(),x.onTransitionStart(t),0===a||x.browser.lteIE9?(x.setWrapperTranslate(r),x.setWrapperTransition(0),x.onTransitionEnd(t)):(x.setWrapperTranslate(r),x.setWrapperTransition(a),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(t)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,a,e,t)}return x.slideTo(x.activeIndex-1,a,e,t)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,a,t){return x.slideTo(x.activeIndex,a,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0,!0},x.enableTouchControl=function(){return x.params.onlyExternal=!1,!0},x.setWrapperTransition=function(e,a){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,a),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,a,t){var s=0,i=0;x.isHorizontal()?s=x.rtl?-e:e:i=e,x.params.roundLengths&&(s=r(s),i=r(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+s+"px, "+i+"px)")),x.translate=x.isHorizontal()?s:i;var n,o=x.maxTranslate()-x.minTranslate();n=0===o?0:(e-x.minTranslate())/o,n!==x.progress&&x.updateProgress(e),a&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,t),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,a){var t,s,r,i;return void 0===a&&(a="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),x.rtl&&s&&(s=-s),s||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),a=0;a<e.length;a++)o(e[a]);o(x.container[0],{childList:!1}),o(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},x.createLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var t,s=[],r=[];for(a.each(function(t,i){var n=e(this);t<x.loopedSlides&&r.push(i),t<a.length&&t>=a.length-x.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var a=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(a+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&x.wrapper.append(e[a]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var a=x.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&x.wrapper.prepend(e[t]);a=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(a,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var a,t=x.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(t+x.loopedSlides,0,!1):x.slideTo(t,0,!1)},x.removeAllSlides=function(){for(var e=[],a=0;a<x.slides.length;a++)e.push(a);x.removeSlide(e)},x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var a=x.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;x.params.virtualTranslate||(s-=x.translate);var r=0;x.isHorizontal()||(r=s,s=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var a=!1;x.slides.transitionEnd(function(){if(!a&&x){a=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<x.slides.length;a++){var t=x.slides.eq(a),s=t[0].progress;x.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(x.isHorizontal()?x.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+x.slides.length,x.params.flip.slideShadows){var d=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),m=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(m)),d.length&&(d[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),x.params.virtualTranslate&&0!==a){var t=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!t&&x&&e(this).hasClass(x.params.slideActiveClass)){t=!0,x.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)x.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;x.params.cube.shadow&&(x.isHorizontal()?(a=x.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(a)),a.css({height:x.width+"px"})):(a=x.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.container.append(a))));for(var s=0;s<x.slides.length;s++){var r=x.slides.eq(s),i=90*s,n=Math.floor(i/360);x.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*x.size,d=0):(s-1)%4==0?(l=0,d=4*-n*x.size):(s-2)%4==0?(l=x.size+4*n*x.size,d=x.size):(s-3)%4==0&&(l=-x.size,d=3*x.size+4*x.size*n),x.rtl&&(l=-l),x.isHorizontal()||(p=l,l=0);var m="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,x.rtl&&(t=90*-s-90*o)),r.transform(m),x.params.cube.slideShadows){var u=x.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),r.append(u)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),u.length&&(u[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())a.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),v=x.params.cube.shadowScale,f=x.params.cube.shadowScale/h,w=x.params.cube.shadowOffset;a.transform("scale3d("+v+", 1, "+f+") translate3d(0px, "+(x.height/2+w)+"px, "+-x.height/2/f+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=x.translate,t=x.isHorizontal()?-a+x.width/2:-a+x.height/2,s=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,r=x.params.coverflow.depth,i=0,n=x.slides.length;i<n;i++){var o=x.slides.eq(i),l=x.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*x.params.coverflow.modifier,m=x.isHorizontal()?s*d:0,u=x.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=x.isHorizontal()?0:x.params.coverflow.stretch*d,h=x.isHorizontal()?x.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0);var v="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+u+"deg) rotateY("+m+"deg)";if(o.transform(v),o[0].style.zIndex=1-Math.abs(Math.round(d)),x.params.coverflow.slideShadows){var f=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(f)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),f.length&&(f[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(x.browser.ie){x.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},x.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==x.slides.length)){var s=x.slides.eq(a),r=s.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!s.hasClass(x.params.lazyLoadingClass)||s.hasClass(x.params.lazyStatusLoadedClass)||s.hasClass(x.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var a=e(this);a.addClass(x.params.lazyStatusLoadingClass);var r=a.attr("data-background"),i=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");x.loadImage(a[0],i||r,n,o,!1,function(){if(void 0!==x&&null!==x&&x){if(r?(a.css("background-image",'url("'+r+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),i&&(a.attr("src",i),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),s.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(x.params.slideDuplicateClass)){var l=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(l.index(),!1)}else{var p=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(p.index(),!1)}}x.emit("onLazyImageReady",x,s[0],a[0])}}),x.emit("onLazyImageLoad",x,s[0],a[0])})}},load:function(){var a,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=x.activeIndex;a<x.activeIndex+t;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(t>1||x.params.lazyLoadingInPrevNextAmount&&x.params.lazyLoadingInPrevNextAmount>1){var s=x.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(x.activeIndex+r+Math.max(s,r),x.slides.length),n=Math.max(x.activeIndex-Math.max(r,s),0);for(a=x.activeIndex+t;a<i;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);for(a=n;a<x.activeIndex;a++)x.slides[a]&&x.lazy.loadImageInSlide(a)}else{var o=x.wrapper.children("."+x.params.slideNextClass);o.length>0&&x.lazy.loadImageInSlide(o.index());var l=x.wrapper.children("."+x.params.slidePrevClass);l.length>0&&x.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},x.scrollbar={isTouched:!1,setDragPosition:function(e){var a=x.scrollbar,t=x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[x.isHorizontal()?"left":"top"]-a.dragSize/2,r=-x.minTranslate()*a.moveDivider,i=-x.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,x.updateProgress(s),x.setWrapperTranslate(s,!0)},dragStart:function(e){var a=x.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),x.params.scrollbarHide&&a.track.css("opacity",1),x.wrapper.transition(100),a.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var a=x.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),x.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var a=x.scrollbar;a.isTouched&&(a.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:function(){return x.params.simulateTouch!==!1||x.support.touch?x.touchEvents:x.touchEventsDesktop}(),enableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(x.params.scrollbar){var a=x.scrollbar;a.track=e(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&a.track.length>1&&1===x.container.find(x.params.scrollbar).length&&(a.track=x.container.find(x.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=x.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=x.size/x.virtualSize,a.moveDivider=a.divider*(a.trackSize/x.size),a.dragSize=a.trackSize*a.divider,x.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",x.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,a=x.scrollbar,t=(x.translate,a.dragSize);e=(a.trackSize-a.dragSize)*x.progress,x.rtl&&x.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),x.isHorizontal()?(x.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(x.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),x.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},x.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,r;this.x.length;this.interpolate=function(e){return e?(r=t(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(a),i=-x.controller.spline.interpolate(-e)),i&&"container"!==x.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(x.maxTranslate()-x.minTranslate()),i=(e-x.minTranslate())*r+a.minTranslate()),x.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,x),a.updateActiveIndex()}var r,i,n=x.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,x),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===x.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=x.params.control;if(Array.isArray(i))for(r=0;r<i.length;r++)i[r]!==t&&i[r]instanceof a&&s(i[r]);else i instanceof a&&t!==i&&s(i)}},x.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){
if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=x.slides.length;a<t;a++){var s=x.slides.eq(a),r=s.attr("data-hash")||s.attr("data-history");if(r===e&&!s.hasClass(x.params.slideDuplicateClass)){var i=s.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(x.history.initialized&&x.params.history){var t=x.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),x.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=x.slides.length;s<r;s++){var i=x.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(x.params.slideDuplicateClass)){var o=i.index();x.slideTo(o,e,t)}}else x.slideTo(0,e,t)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,e(document).off("keydown",l)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,e(document).on("keydown",l)},x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(x.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.off(x.mousewheel.event,d),x.params.mousewheelControl=!1,!0},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.on(x.mousewheel.event,d),x.params.mousewheelControl=!0,!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,x.progress)}),x.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},x.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2))},onGestureStart:function(a){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(x.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<x.params.zoomMin&&(a.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),x.params.zoomMin),a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=x.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(x.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=x.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=x.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),x.rtl&&(a.image.startX=-a.image.startX),x.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(x.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,m=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-m/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,m,u,c,g,h,v,f,w,y,x,T;void 0===s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,u=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=u*s.scale,h=c*s.scale,v=Math.min(x/2-g/2,0),f=Math.min(T/2-h/2,0),w=-v,y=-f,d=l*s.scale,m=p*s.scale,d<v&&(d=v),d>w&&(d=w),m<f&&(m=f),m>y&&(m=y)):(d=0,m=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+m+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(x.params.zoom){var s=(x.slides,!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1});x.support.gestures?(x.slides[t]("gesturestart",x.zoom.onGestureStart,s),x.slides[t]("gesturechange",x.zoom.onGestureChange,s),x.slides[t]("gestureend",x.zoom.onGestureEnd,s)):"touchstart"===x.touchEvents.start&&(x.slides[t](x.touchEvents.start,x.zoom.onGestureStart,s),x.slides[t](x.touchEvents.move,x.zoom.onGestureChange,s),x.slides[t](x.touchEvents.end,x.zoom.onGestureEnd,s)),x[t]("touchStart",x.zoom.onTouchStart),x.slides.each(function(a,s){e(s).find("."+x.params.zoomContainerClass).length>0&&e(s)[t](x.touchEvents.move,x.zoom.onTouchMove)}),x[t]("touchEnd",x.zoom.onTouchEnd),x[t]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},x._plugins=[];for(var Y in x.plugins){var A=x.plugins[Y](x,x.params[Y]);A&&x._plugins.push(A)}return x.callPlugins=function(e){for(var a=0;a<x._plugins.length;a++)e in x._plugins[a]&&x._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(x.emitterEventListeners[e])for(a=0;a<x.emitterEventListeners[e].length;a++)x.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,a){return e=u(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(a),x},x.off=function(e,a){var t;if(e=u(e),void 0===a)return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t]===a&&x.emitterEventListeners[e].splice(t,1);return x}},x.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(e,t)};return x.on(e,t),x},x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(x.params.nextButton)?(x.onClickNext(a),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):e(a.target).is(x.params.prevButton)&&(x.onClickPrev(a),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),e(a.target).is("."+x.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=x.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),e(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var a=e(this);x.a11y.makeFocusable(a),x.a11y.addRole(a,"button"),x.a11y.addLabel(a,x.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){x.a11y.liveRegion&&x.a11y.liveRegion.length>0&&x.a11y.liveRegion.remove()}},x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},x.cleanupStyles=function(){x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),x.wrapper.removeAttr("style"),x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),x.params.prevButton&&e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},x.destroy=function(e,a){x.detachEvents(),x.stopAutoplay(),x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),x.params.loop&&x.destroyLoop(),a&&x.cleanupStyles(),x.disconnectObservers(),x.params.zoom&&x.zoom&&x.zoom.destroy(),x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),x.params.a11y&&x.a11y&&x.a11y.destroy(),x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),x.emit("onDestroy"),e!==!1&&(x=null)},x.init(),x}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=["jQuery","Zepto","Dom7"],s=0;s<t.length;s++)window[t[s]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[t[s]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
(function($){var S=new String('万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤呼啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲尽脏拼');var T=new String('萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒儘臟拚');function tranStr(str,toT){var i;var letter;var code;var isChinese;var index;var src,des;var result='';if(toT){src=S;des=T}else{src=T;des=S}if(typeof str!=="string"){return str}for(i=0;i<str.length;i++){letter=str.charAt(i);code=str.charCodeAt(i);isChinese=(code>0x3400&&code<0x9FC3)||(code>0xF900&&code<0xFA6A);if(!isChinese){result+=letter;continue}index=src.indexOf(letter);if(index!==-1){result+=des.charAt(index)}else{result+=letter}}return result}function tranAttr(element,attr,toT){var i,attrValue;if(attr instanceof Array){for(i=0;i<attr.length;i++){tranAttr(element,attr[i],toT)}}else{attrValue=element.getAttribute(attr);if(attrValue!==""&&attrValue!==null){element.setAttribute(attr,tranStr(attrValue,toT))}}}function tranElement(element,toT){var i;var childNodes;if(element.nodeType!==1){return}childNodes=element.childNodes;for(i=0;i<childNodes.length;i++){var childNode=childNodes.item(i);if(childNode.nodeType===1){if("|BR|HR|TEXTAREA|SCRIPT|OBJECT|EMBED|".indexOf("|"+childNode.tagName+"|")!==-1){continue}tranAttr(childNode,['title','data-original-title','alt','placeholder'],toT);if(childNode.tagName==="INPUT"&&childNode.value!==""&&childNode.type!=="text"&&childNode.type!=="hidden"){childNode.value=tranStr(childNode.value,toT)}tranElement(childNode,toT)}else if(childNode.nodeType===3){childNode.data=tranStr(childNode.data,toT)}}}$.extend({s2t:function(str){return tranStr(str,true)},t2s:function(str){return tranStr(str,false)}});$.fn.extend({s2t:function(){return this.each(function(){tranElement(this,true)})},t2s:function(){return this.each(function(){tranElement(this,false)})}})})(jQuery);
!function(a,b,c){"use strict";!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(function(d){function e(a,b){return this.$element=d(a),b&&("string"===d.type(b.delay)||"number"===d.type(b.delay))&&(b.delay={show:b.delay,hide:b.delay}),this.options=d.extend({},i,b),this._defaults=i,this._name=f,this._targetclick=!1,this.init(),k.push(this.$element),this}var f="webuiPopover",g="webui-popover",h="webui.popover",i={placement:"auto",container:null,width:"auto",height:"auto",trigger:"click",style:"",selector:!1,delay:{show:null,hide:300},async:{type:"GET",before:null,success:null,error:null},cache:!0,multi:!1,arrow:!0,title:"",content:"",closeable:!1,padding:!0,url:"",type:"html",direction:"",animation:null,template:'<div class="webui-popover"><div class="webui-arrow"></div><div class="webui-popover-inner"><a href="#" class="close"></a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',backdrop:!1,dismissible:!0,onShow:null,onHide:null,abortXHR:!0,autoHide:!1,offsetTop:0,offsetLeft:0,iframeOptions:{frameborder:"0",allowtransparency:"true",id:"",name:"",scrolling:"",onload:"",height:"",width:""},hideEmpty:!1},j=g+"-rtl",k=[],l=d('<div class="webui-popover-backdrop"></div>'),m=0,n=!1,o=-2e3,p=d(b),q=function(a,b){return isNaN(a)?b||0:Number(a)},r=function(a){return a.data("plugin_"+f)},s=function(){for(var a=null,b=0;b<k.length;b++)a=r(k[b]),a&&a.hide(!0);p.trigger("hiddenAll."+h)},t=function(a){for(var b=null,c=0;c<k.length;c++)b=r(k[c]),b&&b.id!==a.id&&b.hide(!0);p.trigger("hiddenAll."+h)},u="ontouchstart"in b.documentElement&&/Mobi/.test(navigator.userAgent),v=function(a){var b={x:0,y:0};if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type){var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];b.x=c.pageX,b.y=c.pageY}else("mousedown"===a.type||"mouseup"===a.type||"click"===a.type)&&(b.x=a.pageX,b.y=a.pageY);return b};e.prototype={init:function(){if(this.$element[0]instanceof b.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");"manual"!==this.getTrigger()&&(u?this.$element.off("touchend",this.options.selector).on("touchend",this.options.selector,d.proxy(this.toggle,this)):"click"===this.getTrigger()?this.$element.off("click",this.options.selector).on("click",this.options.selector,d.proxy(this.toggle,this)):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave click",this.options.selector).on("mouseenter",this.options.selector,d.proxy(this.mouseenterHandler,this)).on("mouseleave",this.options.selector,d.proxy(this.mouseleaveHandler,this))),this._poped=!1,this._inited=!0,this._opened=!1,this._idSeed=m,this.id=f+this._idSeed,this.options.container=d(this.options.container||b.body).first(),this.options.backdrop&&l.appendTo(this.options.container).hide(),m++,"sticky"===this.getTrigger()&&this.show(),this.options.selector&&(this._options=d.extend({},this.options,{selector:""}))},destroy:function(){for(var a=-1,b=0;b<k.length;b++)if(k[b]===this.$element){a=b;break}k.splice(a,1),this.hide(),this.$element.data("plugin_"+f,null),"click"===this.getTrigger()?this.$element.off("click"):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave"),this.$target&&this.$target.remove()},getDelegateOptions:function(){var a={};return this._options&&d.each(this._options,function(b,c){i[b]!==c&&(a[b]=c)}),a},hide:function(a,b){if((a||"sticky"!==this.getTrigger())&&this._opened){b&&(b.preventDefault(),b.stopPropagation()),this.xhr&&this.options.abortXHR===!0&&(this.xhr.abort(),this.xhr=null);var c=d.Event("hide."+h);if(this.$element.trigger(c,[this.$target]),this.$target){this.$target.removeClass("in").addClass(this.getHideAnimation());var e=this;setTimeout(function(){e.$target.hide(),e.getCache()||e.$target.remove()},e.getHideDelay())}this.options.backdrop&&l.hide(),this._opened=!1,this.$element.trigger("hidden."+h,[this.$target]),this.options.onHide&&this.options.onHide(this.$target)}},resetAutoHide:function(){var a=this,b=a.getAutoHide();b&&(a.autoHideHandler&&clearTimeout(a.autoHideHandler),a.autoHideHandler=setTimeout(function(){a.hide()},b))},delegate:function(a){var b=d(a).data("plugin_"+f);return b||(b=new e(a,this.getDelegateOptions()),d(a).data("plugin_"+f,b)),b},toggle:function(a){var b=this;a&&(a.preventDefault(),a.stopPropagation(),this.options.selector&&(b=this.delegate(a.currentTarget))),b[b.getTarget().hasClass("in")?"hide":"show"]()},hideAll:function(){s()},hideOthers:function(){t(this)},show:function(){if(!this._opened){var a=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass);if(this.options.multi||this.hideOthers(),!this.getCache()||!this._poped||""===this.content){if(this.content="",this.setTitle(this.getTitle()),this.options.closeable||a.find(".close").off("click").remove(),this.isAsync()?this.setContentASync(this.options.content):this.setContent(this.getContent()),this.canEmptyHide()&&""===this.content)return;a.show()}this.displayContent(),this.options.onShow&&this.options.onShow(a),this.bindBodyEvents(),this.options.backdrop&&l.show(),this._opened=!0,this.resetAutoHide()}},displayContent:function(){var a=this.getElementPosition(),b=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass),c=this.getContentElement(),e=b[0].offsetWidth,f=b[0].offsetHeight,i="bottom",k=d.Event("show."+h);if(this.canEmptyHide()){var l=c.children().html();if(null!==l&&0===l.trim().length)return}this.$element.trigger(k,[b]);var m=this.$element.data("width")||this.options.width;""===m&&(m=this._defaults.width),"auto"!==m&&b.width(m);var n=this.$element.data("height")||this.options.height;""===n&&(n=this._defaults.height),"auto"!==n&&c.height(n),this.options.style&&this.$target.addClass(g+"-"+this.options.style),"rtl"!==this.options.direction||c.hasClass(j)||c.addClass(j),this.options.arrow||b.find(".webui-arrow").remove(),b.detach().css({top:o,left:o,display:"block"}),this.getAnimation()&&b.addClass(this.getAnimation()),b.appendTo(this.options.container),i=this.getPlacement(a),this.$element.trigger("added."+h),this.initTargetEvents(),this.options.padding||("auto"!==this.options.height&&c.css("height",c.outerHeight()),this.$target.addClass("webui-no-padding")),this.options.maxHeight&&c.css("maxHeight",this.options.maxHeight),this.options.maxWidth&&c.css("maxWidth",this.options.maxWidth),e=b[0].offsetWidth,f=b[0].offsetHeight;var p=this.getTargetPositin(a,i,e,f);if(this.$target.css(p.position).addClass(i).addClass("in"),"iframe"===this.options.type){var q=b.find("iframe"),r=b.width(),s=q.parent().height();""!==this.options.iframeOptions.width&&"auto"!==this.options.iframeOptions.width&&(r=this.options.iframeOptions.width),""!==this.options.iframeOptions.height&&"auto"!==this.options.iframeOptions.height&&(s=this.options.iframeOptions.height),q.width(r).height(s)}if(this.options.arrow||this.$target.css({margin:0}),this.options.arrow){var t=this.$target.find(".webui-arrow");t.removeAttr("style"),"left"===i||"right"===i?t.css({top:this.$target.height()/2}):("top"===i||"bottom"===i)&&t.css({left:this.$target.width()/2}),p.arrowOffset&&(-1===p.arrowOffset.left||-1===p.arrowOffset.top?t.hide():t.css(p.arrowOffset))}this._poped=!0,this.$element.trigger("shown."+h,[this.$target])},isTargetLoaded:function(){return 0===this.getTarget().find("i.glyphicon-refresh").length},getTriggerElement:function(){return this.$element},getTarget:function(){if(!this.$target){var a=f+this._idSeed;this.$target=d(this.options.template).attr("id",a),this._customTargetClass=this.$target.attr("class")!==g?this.$target.attr("class"):null,this.getTriggerElement().attr("data-target",a)}return this.$target.data("trigger-element")||this.$target.data("trigger-element",this.getTriggerElement()),this.$target},removeTarget:function(){this.$target.remove(),this.$target=null,this.$contentElement=null},getTitleElement:function(){return this.getTarget().find("."+g+"-title")},getContentElement:function(){return this.$contentElement||(this.$contentElement=this.getTarget().find("."+g+"-content")),this.$contentElement},getTitle:function(){return this.$element.attr("data-title")||this.options.title||this.$element.attr("title")},getUrl:function(){return this.$element.attr("data-url")||this.options.url},getAutoHide:function(){return this.$element.attr("data-auto-hide")||this.options.autoHide},getOffsetTop:function(){return q(this.$element.attr("data-offset-top"))||this.options.offsetTop},getOffsetLeft:function(){return q(this.$element.attr("data-offset-left"))||this.options.offsetLeft},getCache:function(){var a=this.$element.attr("data-cache");if("undefined"!=typeof a)switch(a.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":return!1}return this.options.cache},getTrigger:function(){return this.$element.attr("data-trigger")||this.options.trigger},getDelayShow:function(){var a=this.$element.attr("data-delay-show");return"undefined"!=typeof a?a:0===this.options.delay.show?0:this.options.delay.show||100},getHideDelay:function(){var a=this.$element.attr("data-delay-hide");return"undefined"!=typeof a?a:0===this.options.delay.hide?0:this.options.delay.hide||100},getAnimation:function(){var a=this.$element.attr("data-animation");return a||this.options.animation},getHideAnimation:function(){var a=this.getAnimation();return a?a+"-out":"out"},setTitle:function(a){var b=this.getTitleElement();a?("rtl"!==this.options.direction||b.hasClass(j)||b.addClass(j),b.html(a)):b.remove()},hasContent:function(){return this.getContent()},canEmptyHide:function(){return this.options.hideEmpty&&"html"===this.options.type},getIframe:function(){var a=d("<iframe></iframe>").attr("src",this.getUrl()),b=this;return d.each(this._defaults.iframeOptions,function(c){"undefined"!=typeof b.options.iframeOptions[c]&&a.attr(c,b.options.iframeOptions[c])}),a},getContent:function(){if(this.getUrl())switch(this.options.type){case"iframe":this.content=this.getIframe();break;case"html":try{this.content=d(this.getUrl()),this.content.is(":visible")||this.content.show()}catch(a){throw new Error("Unable to get popover content. Invalid selector specified.")}}else if(!this.content){var b="";if(b=d.isFunction(this.options.content)?this.options.content.apply(this.$element[0],[this]):this.options.content,this.content=this.$element.attr("data-content")||b,!this.content){var c=this.$element.next();c&&c.hasClass(g+"-content")&&(this.content=c)}}return this.content},setContent:function(a){var b=this.getTarget(),c=this.getContentElement();"string"==typeof a?c.html(a):a instanceof d&&(c.html(""),this.options.cache?a.removeClass(g+"-content").appendTo(c):a.clone(!0,!0).removeClass(g+"-content").appendTo(c)),this.$target=b},isAsync:function(){return"async"===this.options.type},setContentASync:function(a){var b=this;this.xhr||(this.xhr=d.ajax({url:this.getUrl(),type:this.options.async.type,cache:this.getCache(),beforeSend:function(a,c){b.options.async.before&&b.options.async.before(b,a,c)},success:function(c){b.bindBodyEvents(),a&&d.isFunction(a)?b.content=a.apply(b.$element[0],[c]):b.content=c,b.setContent(b.content);var e=b.getContentElement();e.removeAttr("style"),b.displayContent(),b.options.async.success&&b.options.async.success(b,c)},complete:function(){b.xhr=null},error:function(a,c){b.options.async.error&&b.options.async.error(b,a,c)}}))},bindBodyEvents:function(){n||(this.options.dismissible&&"click"===this.getTrigger()?u?p.off("touchstart.webui-popover").on("touchstart.webui-popover",d.proxy(this.bodyTouchStartHandler,this)):(p.off("keyup.webui-popover").on("keyup.webui-popover",d.proxy(this.escapeHandler,this)),p.off("click.webui-popover").on("click.webui-popover",d.proxy(this.bodyClickHandler,this))):"hover"===this.getTrigger()&&p.off("touchend.webui-popover").on("touchend.webui-popover",d.proxy(this.bodyClickHandler,this)))},mouseenterHandler:function(a){var b=this;a&&this.options.selector&&(b=this.delegate(a.currentTarget)),b._timeout&&clearTimeout(b._timeout),b._enterTimeout=setTimeout(function(){b.getTarget().is(":visible")||b.show()},this.getDelayShow())},mouseleaveHandler:function(){var a=this;clearTimeout(a._enterTimeout),a._timeout=setTimeout(function(){a.hide()},this.getHideDelay())},escapeHandler:function(a){27===a.keyCode&&this.hideAll()},bodyTouchStartHandler:function(a){var b=this,c=d(a.currentTarget);c.on("touchend",function(a){b.bodyClickHandler(a),c.off("touchend")}),c.on("touchmove",function(){c.off("touchend")})},bodyClickHandler:function(a){n=!0;for(var b=!0,c=0;c<k.length;c++){var d=r(k[c]);if(d&&d._opened){var e=d.getTarget().offset(),f=e.left,g=e.top,h=e.left+d.getTarget().width(),i=e.top+d.getTarget().height(),j=v(a),l=j.x>=f&&j.x<=h&&j.y>=g&&j.y<=i;if(l){b=!1;break}}}b&&s()},initTargetEvents:function(){"hover"===this.getTrigger()&&this.$target.off("mouseenter mouseleave").on("mouseenter",d.proxy(this.mouseenterHandler,this)).on("mouseleave",d.proxy(this.mouseleaveHandler,this)),this.$target.find(".close").off("click").on("click",d.proxy(this.hide,this,!0))},getPlacement:function(a){var b,c=this.options.container,d=c.innerWidth(),e=c.innerHeight(),f=c.scrollTop(),g=c.scrollLeft(),h=Math.max(0,a.left-g),i=Math.max(0,a.top-f);b="function"==typeof this.options.placement?this.options.placement.call(this,this.getTarget()[0],this.$element[0]):this.$element.data("placement")||this.options.placement;var j="horizontal"===b,k="vertical"===b,l="auto"===b||j||k;return l?b=d/3>h?e/3>i?j?"right-bottom":"bottom-right":2*e/3>i?k?e/2>=i?"bottom-right":"top-right":"right":j?"right-top":"top-right":2*d/3>h?e/3>i?j?d/2>=h?"right-bottom":"left-bottom":"bottom":2*e/3>i?j?d/2>=h?"right":"left":e/2>=i?"bottom":"top":j?d/2>=h?"right-top":"left-top":"top":e/3>i?j?"left-bottom":"bottom-left":2*e/3>i?k?e/2>=i?"bottom-left":"top-left":"left":j?"left-top":"top-left":"auto-top"===b?b=d/3>h?"top-right":2*d/3>h?"top":"top-left":"auto-bottom"===b?b=d/3>h?"bottom-right":2*d/3>h?"bottom":"bottom-left":"auto-left"===b?b=e/3>i?"left-top":2*e/3>i?"left":"left-bottom":"auto-right"===b&&(b=e/3>i?"right-bottom":2*e/3>i?"right":"right-top"),b},getElementPosition:function(){var a=this.$element[0].getBoundingClientRect(),c=this.options.container,e=c.css("position");if(c.is(b.body)||"static"===e)return d.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height});if("fixed"===e){var f=c[0].getBoundingClientRect();return{top:a.top-f.top+c.scrollTop(),left:a.left-f.left+c.scrollLeft(),width:a.width,height:a.height}}return"relative"===e?{top:this.$element.offset().top-c.offset().top,left:this.$element.offset().left-c.offset().left,width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height}:void 0},getTargetPositin:function(a,c,d,e){var f=a,g=this.options.container,h=this.$element.outerWidth(),i=this.$element.outerHeight(),j=b.documentElement.scrollTop+g.scrollTop(),k=b.documentElement.scrollLeft+g.scrollLeft(),l={},m=null,n=this.options.arrow?20:0,p=10,q=n+p>h?n:0,r=n+p>i?n:0,s=0,t=b.documentElement.clientHeight+j,u=b.documentElement.clientWidth+k,v=f.left+f.width/2-q>0,w=f.left+f.width/2+q<u,x=f.top+f.height/2-r>0,y=f.top+f.height/2+r<t;switch(c){case"bottom":l={top:f.top+f.height,left:f.left+f.width/2-d/2};break;case"top":l={top:f.top-e,left:f.left+f.width/2-d/2};break;case"left":l={top:f.top+f.height/2-e/2,left:f.left-d};break;case"right":l={top:f.top+f.height/2-e/2,left:f.left+f.width};break;case"top-right":l={top:f.top-e,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"top-left":s=w?q:-p,l={top:f.top-e,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"bottom-right":l={top:f.top+f.height,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"bottom-left":s=w?q:-p,l={top:f.top+f.height,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"right-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left+f.width},m={top:y?e-Math.min(i,e)/2-r:o};break;case"right-bottom":l={top:x?f.top-r:p,left:f.left+f.width},m={top:x?Math.min(i,e)/2+r:o};break;case"left-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left-d},m={top:y?e-Math.min(i,e)/2-r:o};break;case"left-bottom":l={top:x?f.top-r:p,left:f.left-d},m={top:x?Math.min(i,e)/2+r:o}}return l.top+=this.getOffsetTop(),l.left+=this.getOffsetLeft(),{position:l,arrowOffset:m}}},d.fn[f]=function(a,b){var c=[],g=this.each(function(){var g=d.data(this,"plugin_"+f);g?"destroy"===a?g.destroy():"string"==typeof a&&c.push(g[a]()):(a?"string"==typeof a?"destroy"!==a&&(b||(g=new e(this,null),c.push(g[a]()))):"object"==typeof a&&(g=new e(this,a)):g=new e(this,null),d.data(this,"plugin_"+f,g))});return c.length?c:g};var w=function(){var a=function(){s()},b=function(a,b){b=b||{},d(a).webuiPopover(b)},e=function(a){var b=!0;return d(a).each(function(a,e){b=b&&d(e).data("plugin_"+f)!==c}),b},g=function(a,b){b?d(a).webuiPopover(b).webuiPopover("show"):d(a).webuiPopover("show")},h=function(a){d(a).webuiPopover("hide")},j=function(a){i=d.extend({},i,a)},k=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache();c.options.cache=!1,c.options.content=b,c._opened?(c._opened=!1,c.show()):c.isAsync()?c.setContentASync(b):c.setContent(b),c.options.cache=e}},l=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache(),g=c.options.type;c.options.cache=!1,c.options.url=b,c._opened?(c._opened=!1,c.show()):(c.options.type="async",c.setContentASync(c.content)),c.options.cache=e,c.options.type=g}};return{show:g,hide:h,create:b,isCreated:e,hideAll:a,updateContent:k,updateContentAsync:l,setDefaultOptions:j}}();a.WebuiPopovers=w})}(window,document);
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/webui-popover",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginWebuiPopover=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="webuiPopover",WebuiPopover=function(_Plugin){function WebuiPopover(){return babelHelpers.classCallCheck(this,WebuiPopover),babelHelpers.possibleConstructorReturn(this,(WebuiPopover.__proto__||Object.getPrototypeOf(WebuiPopover)).apply(this,arguments))}return babelHelpers.inherits(WebuiPopover,_Plugin),babelHelpers.createClass(WebuiPopover,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}}}]),WebuiPopover}(_Plugin3.default);_Plugin3.default.register(NAME,WebuiPopover),exports.default=WebuiPopover});
if(window.FormValidation={AddOn:{},Framework:{},I18n:{},Validator:{}},"undefined"==typeof jQuery)throw new Error("FormValidation requires jQuery");!function(t){var e=t.fn.jquery.split(" ")[0].split(".");if(+e[0]<2&&+e[1]<9||1==+e[0]&&9==+e[1]&&+e[2]<1)throw new Error("FormValidation requires jQuery version 1.9.1 or higher")}(jQuery),function(t){FormValidation.Base=function(e,a,i){this.$form=t(e),this.options=t.extend({},t.fn.formValidation.DEFAULT_OPTIONS,a),this._namespace=i||"fv",this.$invalidFields=t([]),this.$submitButton=null,this.$hiddenButton=null,this.STATUS_NOT_VALIDATED="NOT_VALIDATED",this.STATUS_VALIDATING="VALIDATING",this.STATUS_INVALID="INVALID",this.STATUS_VALID="VALID",this.STATUS_IGNORED="IGNORED",this.DEFAULT_MESSAGE=t.fn.formValidation.DEFAULT_MESSAGE,this._ieVersion=function(){for(var t=3,e=document.createElement("div"),a=e.all||[];e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><br><![endif]--\x3e",a[0];);return t>4?t:document.documentMode}();var r=document.createElement("div"),n=this;this._changeEvent=9!==this._ieVersion&&"oninput"in r?"input change":"keyup",this._submitIfValid=null,this._cacheFields={},function(){if("undefined"!=typeof M&&M.weburl&&"undefined"!=typeof M.validation_locale){var t=M.weburl+"app/system/include/static2/vendor/formvalidation/language/"+M.validation_locale+".js";$.cachedScript(t).done(function(t,e,a){n._init()})}else n._init()}()},FormValidation.Base.prototype={constructor:FormValidation.Base,_exceedThreshold:function(e){var a=this._namespace,i=e.attr("data-"+a+"-field"),r=this.options.fields[i].threshold||this.options.threshold;return!r||(-1!==t.inArray(e.attr("type"),["button","checkbox","file","hidden","image","radio","reset","submit"])||e.val().length>=r)},_init:function(){var e=this,a=this._namespace,i={addOns:{},autoFocus:this.$form.attr("data-"+a+"-autofocus"),button:{selector:this.$form.attr("data-"+a+"-button-selector")||this.$form.attr("data-"+a+"-submitbuttons"),disabled:this.$form.attr("data-"+a+"-button-disabled")},control:{valid:this.$form.attr("data-"+a+"-control-valid"),invalid:this.$form.attr("data-"+a+"-control-invalid")},err:{clazz:this.$form.attr("data-"+a+"-err-clazz"),container:this.$form.attr("data-"+a+"-err-container")||this.$form.attr("data-"+a+"-container"),parent:this.$form.attr("data-"+a+"-err-parent")},events:{formInit:this.$form.attr("data-"+a+"-events-form-init"),formPreValidate:this.$form.attr("data-"+a+"-events-form-prevalidate"),formError:this.$form.attr("data-"+a+"-events-form-error"),formReset:this.$form.attr("data-"+a+"-events-form-reset"),formSuccess:this.$form.attr("data-"+a+"-events-form-success"),fieldAdded:this.$form.attr("data-"+a+"-events-field-added"),fieldRemoved:this.$form.attr("data-"+a+"-events-field-removed"),fieldInit:this.$form.attr("data-"+a+"-events-field-init"),fieldError:this.$form.attr("data-"+a+"-events-field-error"),fieldReset:this.$form.attr("data-"+a+"-events-field-reset"),fieldSuccess:this.$form.attr("data-"+a+"-events-field-success"),fieldStatus:this.$form.attr("data-"+a+"-events-field-status"),localeChanged:this.$form.attr("data-"+a+"-events-locale-changed"),validatorError:this.$form.attr("data-"+a+"-events-validator-error"),validatorSuccess:this.$form.attr("data-"+a+"-events-validator-success"),validatorIgnored:this.$form.attr("data-"+a+"-events-validator-ignored")},excluded:this.$form.attr("data-"+a+"-excluded"),icon:{valid:this.$form.attr("data-"+a+"-icon-valid")||this.$form.attr("data-"+a+"-feedbackicons-valid"),invalid:this.$form.attr("data-"+a+"-icon-invalid")||this.$form.attr("data-"+a+"-feedbackicons-invalid"),validating:this.$form.attr("data-"+a+"-icon-validating")||this.$form.attr("data-"+a+"-feedbackicons-validating"),feedback:this.$form.attr("data-"+a+"-icon-feedback")},live:this.$form.attr("data-"+a+"-live"),locale:this.$form.attr("data-"+a+"-locale"),message:this.$form.attr("data-"+a+"-message"),onPreValidate:this.$form.attr("data-"+a+"-onprevalidate"),onError:this.$form.attr("data-"+a+"-onerror"),onReset:this.$form.attr("data-"+a+"-onreset"),onSuccess:this.$form.attr("data-"+a+"-onsuccess"),row:{selector:this.$form.attr("data-"+a+"-row-selector")||this.$form.attr("data-"+a+"-group"),valid:this.$form.attr("data-"+a+"-row-valid"),invalid:this.$form.attr("data-"+a+"-row-invalid"),feedback:this.$form.attr("data-"+a+"-row-feedback")},threshold:this.$form.attr("data-"+a+"-threshold"),trigger:this.$form.attr("data-"+a+"-trigger"),verbose:this.$form.attr("data-"+a+"-verbose"),fields:{}};this.$form.attr("novalidate","novalidate").addClass(this.options.elementClass).on("submit."+a,function(t){t.preventDefault(),e.validate()}).on("click."+a,this.options.button.selector,function(){e.$submitButton=t(this),e._submitIfValid=!0}),(!0===this.options.declarative||"true"===this.options.declarative)&&this.$form.find("[name], [data-"+a+"-field]").each(function(){var r=t(this),n=r.attr("name")||r.attr("data-"+a+"-field"),s=e._parseOptions(r);s&&(r.attr("data-"+a+"-field",n),i.fields[n]=t.extend({},s,i.fields[n]))}),this.options=t.extend(!0,this.options,i),"string"==typeof this.options.err.parent&&(this.options.err.parent=new RegExp(this.options.err.parent)),this.options.container&&(this.options.err.container=this.options.container,delete this.options.container),this.options.feedbackIcons&&(this.options.icon=t.extend(!0,this.options.icon,this.options.feedbackIcons),delete this.options.feedbackIcons),this.options.group&&(this.options.row.selector=this.options.group,delete this.options.group),this.options.submitButtons&&(this.options.button.selector=this.options.submitButtons,delete this.options.submitButtons),FormValidation.I18n[this.options.locale]||(this.options.locale=t.fn.formValidation.DEFAULT_OPTIONS.locale),(!0===this.options.declarative||"true"===this.options.declarative)&&(this.options=t.extend(!0,this.options,{addOns:this._parseAddOnOptions()})),this.$hiddenButton=t("<button/>").attr("type","submit").prependTo(this.$form).addClass("fv-hidden-submit").css({display:"none",width:0,height:0}),this.$form.on("click."+this._namespace,'[type="submit"]',function(a){if(!a.isDefaultPrevented()){var i=t(a.target),r=i.is('[type="submit"]')?i.eq(0):i.parent('[type="submit"]').eq(0);if(e.options.button.selector&&!r.is(e.options.button.selector)&&!r.is(e.$hiddenButton))return e.$form.off("submit."+e._namespace).submit(),!1}});for(var r in this.options.fields)this._initField(r);for(var n in this.options.addOns)"function"==typeof FormValidation.AddOn[n].init&&FormValidation.AddOn[n].init(this,this.options.addOns[n]);this.$form.trigger(t.Event(this.options.events.formInit),{bv:this,fv:this,options:this.options}),this.options.onPreValidate&&this.$form.on(this.options.events.formPreValidate,function(t){FormValidation.Helper.call(e.options.onPreValidate,[t])}),this.options.onSuccess&&this.$form.on(this.options.events.formSuccess,function(t){FormValidation.Helper.call(e.options.onSuccess,[t])}),this.options.onError&&this.$form.on(this.options.events.formError,function(t){FormValidation.Helper.call(e.options.onError,[t])}),this.options.onReset&&this.$form.on(this.options.events.formReset,function(t){FormValidation.Helper.call(e.options.onReset,[t])})},_initField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field");break;case"string":(i=this.getFieldElements(e)).attr("data-"+a+"-field",e)}
if(0!==i.length&&null!==this.options.fields[e]&&null!==this.options.fields[e].validators){var r,n,s=this.options.fields[e].validators;for(r in s)n=s[r].alias||r,FormValidation.Validator[n]||delete this.options.fields[e].validators[r];null===this.options.fields[e].enabled&&(this.options.fields[e].enabled=!0);for(var o=this,l=i.length,d=i.attr("type"),u=1===l||"radio"===d||"checkbox"===d,f=this._getFieldTrigger(i.eq(0)),c=this.options.err.clazz.split(" ").join("."),h=t.map(f,function(t){return t+".update."+a}).join(" "),p=0;l>p;p++){var m=i.eq(p),v=this.options.fields[e].row||this.options.row.selector,g=m.closest(v),A="function"==typeof(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container)?(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container).call(this,m,this):this.options.fields[e].container||this.options.fields[e].err||this.options.err.container,I=A&&"tooltip"!==A&&"popover"!==A?t(A):this._getMessageContainer(m,v);A&&"tooltip"!==A&&"popover"!==A&&I.addClass(this.options.err.clazz),I.find("."+c+"[data-"+a+"-validator][data-"+a+'-for="'+e+'"]').remove(),g.find("i[data-"+a+'-icon-for="'+e+'"]').remove(),m.off(h).on(h,function(){o.updateStatus(t(this),o.STATUS_NOT_VALIDATED)}),m.data(a+".messages",I);var smallPostion=function(obj){if(parseInt(obj.css('marginBottom'))>16){if(obj.find('.small-fixed').length){obj.find('.small-fixed').append(obj.find('small.form-control-label:gt(0)'));}else{obj.find('small.form-control-label').wrapAll('<span class="small-fixed"></span>');}}};for(r in s)m.data(a+".result."+r,this.STATUS_NOT_VALIDATED),u&&p!==l-1||t("<small/>").css("display","none").addClass(this.options.err.clazz).attr("data-"+a+"-validator",r).attr("data-"+a+"-for",e).attr("data-"+a+"-result",this.STATUS_NOT_VALIDATED).html(this._getMessage(e,r)).appendTo(I),smallPostion(I),n=s[r].alias||r,"function"==typeof FormValidation.Validator[n].init&&FormValidation.Validator[n].init(this,m,this.options.fields[e].validators[r],r);if(!1!==this.options.fields[e].icon&&"false"!==this.options.fields[e].icon&&this.options.icon&&this.options.icon.valid&&this.options.icon.invalid&&this.options.icon.validating&&(!u||p===l-1)){g.addClass(this.options.row.feedback);var b=t("<i/>").css("display","none").addClass(this.options.icon.feedback).attr("data-"+a+"-icon-for",e).insertAfter(m);(u?i:m).data(a+".icon",b),("tooltip"===A||"popover"===A)&&((u?i:m).on(this.options.events.fieldError,function(){g.addClass("fv-has-tooltip")}).on(this.options.events.fieldSuccess,function(){g.removeClass("fv-has-tooltip")}),m.off("focus.container."+a).on("focus.container."+a,function(){o._showTooltip(t(this),A)}).off("blur.container."+a).on("blur.container."+a,function(){o._hideTooltip(t(this),A)})),"string"==typeof this.options.fields[e].icon&&"true"!==this.options.fields[e].icon?b.appendTo(t(this.options.fields[e].icon)):this._fixIcon(m,b)}}
var F=[];for(r in s)n=s[r].alias||r,s[r].priority=parseInt(s[r].priority||FormValidation.Validator[n].priority||1,10),F.push({validator:r,priority:s[r].priority});F=F.sort(function(t,e){return t.priority-e.priority}),i.data(a+".validators",F).on(this.options.events.fieldSuccess,function(t,e){var a=o.getOptions(e.field,null,"onSuccess");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.fieldError,function(t,e){var a=o.getOptions(e.field,null,"onError");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.fieldReset,function(t,e){var a=o.getOptions(e.field,null,"onReset");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.fieldStatus,function(t,e){var a=o.getOptions(e.field,null,"onStatus");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.validatorError,function(t,e){var a=o.getOptions(e.field,e.validator,"onError");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.validatorIgnored,function(t,e){var a=o.getOptions(e.field,e.validator,"onIgnored");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.validatorSuccess,function(t,e){var a=o.getOptions(e.field,e.validator,"onSuccess");a&&FormValidation.Helper.call(a,[t,e])}),this.onLiveChange(i,"live",function(){o._exceedThreshold(t(this))&&o.validateField(t(this))}),i.trigger(t.Event(this.options.events.fieldInit),{bv:this,fv:this,field:e,element:i})}},_isExcluded:function(e){var a=this._namespace,i=e.attr("data-"+a+"-excluded"),r=e.attr("data-"+a+"-field")||e.attr("name");switch(!0){case!!r&&this.options.fields&&this.options.fields[r]&&("true"===this.options.fields[r].excluded||!0===this.options.fields[r].excluded):case"true"===i:case""===i:return!0;case!!r&&this.options.fields&&this.options.fields[r]&&("false"===this.options.fields[r].excluded||!1===this.options.fields[r].excluded):case"false"===i:return!1;case!!r&&this.options.fields&&this.options.fields[r]&&"function"==typeof this.options.fields[r].excluded:return this.options.fields[r].excluded.call(this,e,this);case!!r&&this.options.fields&&this.options.fields[r]&&"string"==typeof this.options.fields[r].excluded:case i:return FormValidation.Helper.call(this.options.fields[r].excluded,[e,this]);default:if(this.options.excluded){"string"==typeof this.options.excluded&&(this.options.excluded=t.map(this.options.excluded.split(","),function(e){return t.trim(e)}));for(var n=this.options.excluded.length,s=0;n>s;s++)
if("string"==typeof this.options.excluded[s]&&e.is(this.options.excluded[s])||"function"==typeof this.options.excluded[s]&&!0===this.options.excluded[s].call(this,e,this))return!0}
return!1}},_getFieldTrigger:function(t){var e=this._namespace,a=t.data(e+".trigger");if(a)return a;var i=t.attr("type"),r=t.attr("data-"+e+"-field"),n="radio"===i||"checkbox"===i||"file"===i||"SELECT"===t.get(0).tagName||t.data('fv-remote')?"change":this._ieVersion>=10&&t.attr("placeholder")?"keyup":this._changeEvent;return a=((this.options.fields[r]?this.options.fields[r].trigger:null)||this.options.trigger||n).split(" "),t.data(e+".trigger",a),a},_getMessage:function(t,e){if(!this.options.fields[t]||!this.options.fields[t].validators)return"";var a=this.options.fields[t].validators,i=a[e]&&a[e].alias?a[e].alias:e;if(!FormValidation.Validator[i])return"";switch(!0){case!!a[e].message:return a[e].message;case!!this.options.fields[t].message:return this.options.fields[t].message;case!!this.options.message:return this.options.message;case!!FormValidation.I18n[this.options.locale]&&!!FormValidation.I18n[this.options.locale][i]&&!!FormValidation.I18n[this.options.locale][i].default:return FormValidation.I18n[this.options.locale][i].default;default:return this.DEFAULT_MESSAGE}},_getMessageContainer:function(t,e){if(!this.options.err.parent)throw new Error("The err.parent option is not defined");var a=t.parent();if(a.is(e))return a;var i=a.attr("class");return i&&this.options.err.parent.test(i)?a:this._getMessageContainer(a,e)},_parseAddOnOptions:function(){var t=this._namespace,e=this.$form.attr("data-"+t+"-addons"),a=this.options.addOns||{};if(e){e=e.replace(/\s/g,"").split(",");for(var i=0;i<e.length;i++)a[e[i]]||(a[e[i]]={})}
var r,n,s,o;for(r in a)
if(FormValidation.AddOn[r]){if(n=FormValidation.AddOn[r].html5Attributes)
for(s in n)(o=this.$form.attr("data-"+t+"-addons-"+r.toLowerCase()+"-"+s.toLowerCase()))&&(a[r][n[s]]=o)}else delete a[r];return a},_parseOptions:function(e){var a,i,r,n,s,o,l,d,u,f=this._namespace,c=e.attr("name")||e.attr("data-"+f+"-field"),h={},p=new RegExp("^data-"+f+"-([a-z]+)-alias$"),m=t.extend({},FormValidation.Validator);t.each(e.get(0).attributes,function(t,e){e.value&&p.test(e.name)&&(i=e.name.split("-")[2],m[e.value]&&(m[i]=m[e.value],m[i].alias=e.value))});for(i in m)
if(a=m[i],r="data-"+f+"-"+i.toLowerCase(),n=e.attr(r)+"",(u="function"==typeof a.enableByHtml5?a.enableByHtml5(e):null)&&"false"!==n||!0!==u&&(""===n||"true"===n||r===n.toLowerCase())){a.html5Attributes=t.extend({},{message:"message",onerror:"onError",onreset:"onReset",onsuccess:"onSuccess",priority:"priority",transformer:"transformer"},a.html5Attributes),h[i]=t.extend({},!0===u?{}:u,h[i]),a.alias&&(h[i].alias=a.alias);for(d in a.html5Attributes)s=a.html5Attributes[d],o="data-"+f+"-"+i.toLowerCase()+"-"+d,(l=e.attr(o))&&("true"===l||o===l.toLowerCase()?l=!0:"false"===l&&(l=!1),h[i][s]=l)}
var v={autoFocus:e.attr("data-"+f+"-autofocus"),err:e.attr("data-"+f+"-err-container")||e.attr("data-"+f+"-container"),enabled:e.attr("data-"+f+"-enabled"),excluded:e.attr("data-"+f+"-excluded"),icon:e.attr("data-"+f+"-icon")||e.attr("data-"+f+"-feedbackicons")||(this.options.fields&&this.options.fields[c]?this.options.fields[c].feedbackIcons:null),message:e.attr("data-"+f+"-message"),onError:e.attr("data-"+f+"-onerror"),onReset:e.attr("data-"+f+"-onreset"),onStatus:e.attr("data-"+f+"-onstatus"),onSuccess:e.attr("data-"+f+"-onsuccess"),row:e.attr("data-"+f+"-row")||e.attr("data-"+f+"-group")||(this.options.fields&&this.options.fields[c]?this.options.fields[c].group:null),selector:e.attr("data-"+f+"-selector"),threshold:e.attr("data-"+f+"-threshold"),transformer:e.attr("data-"+f+"-transformer"),trigger:e.attr("data-"+f+"-trigger"),verbose:e.attr("data-"+f+"-verbose"),validators:h},g=t.isEmptyObject(v);return!t.isEmptyObject(h)||!g&&this.options.fields&&this.options.fields[c]?v:null},_submit:function(){var e=this.isValid();if(null!==e){var a=e?this.options.events.formSuccess:this.options.events.formError,i=t.Event(a);this.$form.trigger(i),this.$submitButton&&(e?this._onSuccess(i):this._onError(i))}},_onError:function(e){if(!e.isDefaultPrevented()){if("submitted"===this.options.live){this.options.live="enabled";var a=this;for(var i in this.options.fields)!function(e){var i=a.getFieldElements(e);i.length&&a.onLiveChange(i,"live",function(){a._exceedThreshold(t(this))&&a.validateField(t(this))})}(i)}
for(var r=this._namespace,n=0;n<this.$invalidFields.length;n++){var s=this.$invalidFields.eq(n);if(this.isOptionEnabled(s.attr("data-"+r+"-field"),"autoFocus")){s.focus();break}}}},_onFieldValidated:function(e,a){var i=this._namespace,r=e.attr("data-"+i+"-field"),n=this.options.fields[r].validators,s={},o=0,l={bv:this,fv:this,field:r,element:e,validator:a,result:e.data(i+".response."+a)};if(a)switch(e.data(i+".result."+a)){case this.STATUS_INVALID:e.trigger(t.Event(this.options.events.validatorError),l);break;case this.STATUS_VALID:e.trigger(t.Event(this.options.events.validatorSuccess),l);break;case this.STATUS_IGNORED:e.trigger(t.Event(this.options.events.validatorIgnored),l)}
s[this.STATUS_NOT_VALIDATED]=0,s[this.STATUS_VALIDATING]=0,s[this.STATUS_INVALID]=0,s[this.STATUS_VALID]=0,s[this.STATUS_IGNORED]=0;for(var d in n)
if(!1!==n[d].enabled){o++;var u=e.data(i+".result."+d);u&&s[u]++}
s[this.STATUS_VALID]+s[this.STATUS_IGNORED]===o?(this.$invalidFields=this.$invalidFields.not(e),e.trigger(t.Event(this.options.events.fieldSuccess),l)):(0===s[this.STATUS_NOT_VALIDATED]||!this.isOptionEnabled(r,"verbose"))&&0===s[this.STATUS_VALIDATING]&&s[this.STATUS_INVALID]>0&&(this.$invalidFields=this.$invalidFields.add(e),e.trigger(t.Event(this.options.events.fieldError),l))},_onSuccess:function(t){t.isDefaultPrevented()||this.disableSubmitButtons(!0).defaultSubmit()},_fixIcon:function(t,e){},_createTooltip:function(t,e,a){},_destroyTooltip:function(t,e){},_hideTooltip:function(t,e){},_showTooltip:function(t,e){},defaultSubmit:function(){var e=this._namespace;this.$submitButton&&t("<input/>").attr({type:"hidden",name:this.$submitButton.attr("name")}).attr("data-"+e+"-submit-hidden","").val(this.$submitButton.val()).appendTo(this.$form),this.$form.off("submit."+e).submit()},disableSubmitButtons:function(t){return t?"disabled"!==this.options.live&&this.$form.find(this.options.button.selector).attr("disabled","disabled").addClass(this.options.button.disabled):this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled),this},getFieldElements:function(e){if(!this._cacheFields[e])
if(this.options.fields[e]&&this.options.fields[e].selector){var a=this.$form.find(this.options.fields[e].selector);this._cacheFields[e]=a.length?a:t(this.options.fields[e].selector)}else this._cacheFields[e]=this.$form.find('[name="'+e+'"]');return this._cacheFields[e]},getFieldValue:function(t,e){var a,i=this._namespace;if("string"==typeof t){if(0===(a=this.getFieldElements(t)).length)return null}else a=t,t=a.attr("data-"+i+"-field");if(!t||!this.options.fields[t])return a.val();var r=(this.options.fields[t].validators&&this.options.fields[t].validators[e]?this.options.fields[t].validators[e].transformer:null)||this.options.fields[t].transformer;return r?FormValidation.Helper.call(r,[a,e,this]):a.val()},getNamespace:function(){return this._namespace},getOptions:function(t,e,a){var i=this._namespace;if(!t)return a?this.options[a]:this.options;if("object"==typeof t&&(t=t.attr("data-"+i+"-field")),!this.options.fields[t])return null;var r=this.options.fields[t];return e?r.validators&&r.validators[e]?a?r.validators[e][a]:r.validators[e]:null:a?r[a]:r},getStatus:function(t,e){var a=this._namespace;switch(typeof t){case"object":return t.data(a+".result."+e);case"string":default:return this.getFieldElements(t).eq(0).data(a+".result."+e)}},isOptionEnabled:function(t,e){return!(!this.options.fields[t]||"true"!==this.options.fields[t][e]&&!0!==this.options.fields[t][e])||(!this.options.fields[t]||"false"!==this.options.fields[t][e]&&!1!==this.options.fields[t][e])&&("true"===this.options[e]||!0===this.options[e])},isValid:function(){for(var t in this.options.fields){var e=this.isValidField(t);if(null===e)return null;if(!1===e)return!1}
return!0},isValidContainer:function(e){var a=this,i=this._namespace,r=[],n="string"==typeof e?t(e):e;if(0===n.length)return!0;n.find("[data-"+i+"-field]").each(function(){var e=t(this);a._isExcluded(e)||r.push(e)});for(var s=r.length,o=this.options.err.clazz.split(" ").join("."),l=0;s>l;l++){var d=r[l],u=d.attr("data-"+i+"-field"),f=d.data(i+".messages").find("."+o+"[data-"+i+"-validator][data-"+i+'-for="'+u+'"]');if(!this.options.fields||!this.options.fields[u]||"false"!==this.options.fields[u].enabled&&!1!==this.options.fields[u].enabled){if(f.filter("[data-"+i+'-result="'+this.STATUS_INVALID+'"]').length>0)return!1;if(f.filter("[data-"+i+'-result="'+this.STATUS_NOT_VALIDATED+'"]').length>0||f.filter("[data-"+i+'-result="'+this.STATUS_VALIDATING+'"]').length>0)return null}}
return!0},isValidField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field");break;case"string":i=this.getFieldElements(e)}
if(0===i.length||!this.options.fields[e]||"false"===this.options.fields[e].enabled||!1===this.options.fields[e].enabled)return!0;for(var r,n,s,o=i.attr("type"),l="radio"===o||"checkbox"===o?1:i.length,d=0;l>d;d++)
if(r=i.eq(d),!this._isExcluded(r))
for(n in this.options.fields[e].validators)
if(!1!==this.options.fields[e].validators[n].enabled){if((s=r.data(a+".result."+n))===this.STATUS_VALIDATING||s===this.STATUS_NOT_VALIDATED)return null;if(s===this.STATUS_INVALID)return!1}
return!0},offLiveChange:function(e,a){if(null===e||0===e.length)return this;var i=this._namespace,r=this._getFieldTrigger(e.eq(0)),n=t.map(r,function(t){return t+"."+a+"."+i}).join(" ");return e.off(n),this},onLiveChange:function(e,a,i){if(null===e||0===e.length)return this;var r=this._namespace,n=this._getFieldTrigger(e.eq(0)),s=t.map(n,function(t){return t+"."+a+"."+r}).join(" ");switch(this.options.live){case"submitted":break;case"disabled":e.off(s);break;case"enabled":default:e.off(s).on(s,function(t){i.apply(this,arguments)})}
return this},updateMessage:function(e,a,i){var r=this._namespace,n=t([]);switch(typeof e){case"object":n=e,e=e.attr("data-"+r+"-field");break;case"string":n=this.getFieldElements(e)}
var s=this.options.err.clazz.split(" ").join(".");return n.each(function(){t(this).data(r+".messages").find("."+s+"[data-"+r+'-validator="'+a+'"][data-'+r+'-for="'+e+'"]').html(i)}),this},updateStatus:function(e,a,i){var r=this._namespace,n=t([]);switch(typeof e){case"object":n=e,e=e.attr("data-"+r+"-field");break;case"string":n=this.getFieldElements(e)}
if(!e||!this.options.fields[e])return this;a===this.STATUS_NOT_VALIDATED&&(this._submitIfValid=!1);for(var s=this,o=n.attr("type"),l=this.options.fields[e].row||this.options.row.selector,d="radio"===o||"checkbox"===o?1:n.length,u=this.options.err.clazz.split(" ").join("."),f=0;d>f;f++){var c=n.eq(f);if(!this._isExcluded(c)){var h,p,m=c.closest(l),v=c.data(r+".messages").find("."+u+"[data-"+r+"-validator][data-"+r+'-for="'+e+'"]'),g=i?v.filter("[data-"+r+'-validator="'+i+'"]'):v,A=c.data(r+".icon"),I="function"==typeof(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container)?(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container).call(this,c,this):this.options.fields[e].container||this.options.fields[e].err||this.options.err.container,b=null;if(i)c.data(r+".result."+i,a);else
for(var F in this.options.fields[e].validators)c.data(r+".result."+F,a);switch(g.attr("data-"+r+"-result",a),a){case this.STATUS_VALIDATING:b=null,this.disableSubmitButtons(!0),c.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),m.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),A&&A.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();break;case this.STATUS_INVALID:b=!1,this.disableSubmitButtons(!0),c.removeClass(this.options.control.valid).addClass(this.options.control.invalid),m.removeClass(this.options.row.valid).addClass(this.options.row.invalid),A&&A.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();break;case this.STATUS_IGNORED:case this.STATUS_VALID:h=v.filter("[data-"+r+'-result="'+this.STATUS_VALIDATING+'"]').length>0,p=v.filter("[data-"+r+'-result="'+this.STATUS_NOT_VALIDATED+'"]').length>0;var V=v.filter("[data-"+r+'-result="'+this.STATUS_IGNORED+'"]').length;b=h||p?null:v.filter("[data-"+r+'-result="'+this.STATUS_VALID+'"]').length+V===v.length,c.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),!0===b?(this.disableSubmitButtons(!1===this.isValid()),a===this.STATUS_VALID&&c.addClass(this.options.control.valid)):!1===b&&(this.disableSubmitButtons(!0),a===this.STATUS_VALID&&c.addClass(this.options.control.invalid)),A&&(A.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid),(a===this.STATUS_VALID||V!==v.length)&&A.addClass(h?this.options.icon.validating:null===b?"":b?this.options.icon.valid:this.options.icon.invalid).show());var S=this.isValidContainer(m);null!==S&&(m.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),(a===this.STATUS_VALID||V!==v.length)&&m.addClass(S?this.options.row.valid:this.options.row.invalid));break;case this.STATUS_NOT_VALIDATED:default:b=null,this.disableSubmitButtons(!1),c.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),m.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),A&&A.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide()}!A||"tooltip"!==I&&"popover"!==I?a===this.STATUS_INVALID?g.show():g.hide():!1===b?this._createTooltip(c,v.filter("[data-"+r+'-result="'+s.STATUS_INVALID+'"]').eq(0).html(),I):this._destroyTooltip(c,I),c.trigger(t.Event(this.options.events.fieldStatus),{bv:this,fv:this,field:e,element:c,status:a,validator:i}),this._onFieldValidated(c,i)}}
return this},validate:function(){if(t.isEmptyObject(this.options.fields))return this._submit(),this;this.$form.trigger(t.Event(this.options.events.formPreValidate)),this.disableSubmitButtons(!0),this._submitIfValid=!1;for(var e in this.options.fields)this.validateField(e);return this._submit(),this._submitIfValid=!0,this},validateField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field");break;case"string":i=this.getFieldElements(e)}
if(0===i.length||!this.options.fields[e]||"false"===this.options.fields[e].enabled||!1===this.options.fields[e].enabled)return this;for(var r,n,s,o=this,l=i.attr("type"),d="radio"!==l&&"checkbox"!==l||"disabled"===this.options.live?i.length:1,u="radio"===l||"checkbox"===l,f=this.options.fields[e].validators,c=this.isOptionEnabled(e,"verbose"),h=0;d>h;h++){var p=i.eq(h);if(!this._isExcluded(p))
for(var m=!1,v=p.data(a+".validators"),g=v.length,A=0;g>A&&(r=v[A].validator,p.data(a+".dfs."+r)&&p.data(a+".dfs."+r).reject(),!m);A++){var I=p.data(a+".result."+r);if(I!==this.STATUS_VALID&&I!==this.STATUS_INVALID)
if(!1!==f[r].enabled)
if(p.data(a+".result."+r,this.STATUS_VALIDATING),n=f[r].alias||r,"object"==typeof(s=FormValidation.Validator[n].validate(this,p,f[r],r))&&s.resolve)this.updateStatus(u?e:p,this.STATUS_VALIDATING,r),p.data(a+".dfs."+r,s),s.done(function(t,e,i){t.removeData(a+".dfs."+e).data(a+".response."+e,i),i.message&&o.updateMessage(t,e,i.message),o.updateStatus(u?t.attr("data-"+a+"-field"):t,!0===i.valid?o.STATUS_VALID:!1===i.valid?o.STATUS_INVALID:o.STATUS_IGNORED,e),i.valid&&!0===o._submitIfValid?o._submit():!1!==i.valid||c||(m=!0)});else if("object"==typeof s&&void 0!==s.valid){if(p.data(a+".response."+r,s),s.message&&this.updateMessage(u?e:p,r,s.message),this.updateStatus(u?e:p,!0===s.valid?this.STATUS_VALID:!1===s.valid?this.STATUS_INVALID:this.STATUS_IGNORED,r),!1===s.valid&&!c)break}else if("boolean"==typeof s){if(p.data(a+".response."+r,s),this.updateStatus(u?e:p,s?this.STATUS_VALID:this.STATUS_INVALID,r),!s&&!c)break}else null===s&&(p.data(a+".response."+r,s),this.updateStatus(u?e:p,this.STATUS_IGNORED,r));else this.updateStatus(u?e:p,this.STATUS_IGNORED,r);else this._onFieldValidated(p,r)}}
return this},addField:function(e,a){var i=this._namespace,r=t([]);switch(typeof e){case"object":r=e,e=e.attr("data-"+i+"-field")||e.attr("name");break;case"string":delete this._cacheFields[e],r=this.getFieldElements(e)}
r.attr("data-"+i+"-field",e);for(var n=r.attr("type"),s="radio"===n||"checkbox"===n?1:r.length,o=0;s>o;o++){var l=r.eq(o),d=this._parseOptions(l);d=null===d?a:t.extend(!0,d,a),this.options.fields[e]=t.extend(!0,this.options.fields[e],d),this._cacheFields[e]=this._cacheFields[e]?this._cacheFields[e].add(l):l,this._initField("checkbox"===n||"radio"===n?e:l)}
return this.disableSubmitButtons(!1),this.$form.trigger(t.Event(this.options.events.fieldAdded),{field:e,element:r,options:this.options.fields[e]}),this},destroy:function(){var t,e,a,i,r,n,s,o,l=this._namespace;for(e in this.options.fields)
for(a=this.getFieldElements(e),t=0;t<a.length;t++){i=a.eq(t);for(r in this.options.fields[e].validators)i.data(l+".dfs."+r)&&i.data(l+".dfs."+r).reject(),i.removeData(l+".result."+r).removeData(l+".response."+r).removeData(l+".dfs."+r),o=this.options.fields[e].validators[r].alias||r,"function"==typeof FormValidation.Validator[o].destroy&&FormValidation.Validator[o].destroy(this,i,this.options.fields[e].validators[r],r)}
var d=this.options.err.clazz.split(" ").join(".");for(e in this.options.fields)
for(a=this.getFieldElements(e),s=this.options.fields[e].row||this.options.row.selector,t=0;t<a.length;t++){var u=(i=a.eq(t)).data(l+".messages");u&&u.find("."+d+"[data-"+l+"-validator][data-"+l+'-for="'+e+'"]').remove(),i.removeData(l+".messages").removeData(l+".validators").closest(s).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("."+l).removeAttr("data-"+l+"-field");var f="function"==typeof(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container)?(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container).call(this,i,this):this.options.fields[e].container||this.options.fields[e].err||this.options.err.container;("tooltip"===f||"popover"===f)&&this._destroyTooltip(i,f),(n=i.data(l+".icon"))&&n.remove(),i.removeData(l+".icon").removeData(l+".trigger")}
for(var c in this.options.addOns)"function"==typeof FormValidation.AddOn[c].destroy&&FormValidation.AddOn[c].destroy(this,this.options.addOns[c]);this.disableSubmitButtons(!1),this.$hiddenButton.remove(),this.$form.removeClass(this.options.elementClass).off("."+l).removeData("bootstrapValidator").removeData("formValidation").find("[data-"+l+"-submit-hidden]").remove().end().find('[type="submit"]').off("click."+l)},enableFieldValidators:function(t,e,a){var i=this.options.fields[t].validators;if(a&&i&&i[a]&&i[a].enabled!==e)this.options.fields[t].validators[a].enabled=e,this.updateStatus(t,this.STATUS_NOT_VALIDATED,a);else if(!a&&this.options.fields[t].enabled!==e){this.options.fields[t].enabled=e;for(var r in i)this.enableFieldValidators(t,e,r)}
return this},getDynamicOption:function(t,e){var a="string"==typeof t?this.getFieldElements(t):t,i=a.val();if("function"==typeof e)return FormValidation.Helper.call(e,[i,this,a]);if("string"==typeof e){var r=this.getFieldElements(e);return r.length?r.val():FormValidation.Helper.call(e,[i,this,a])||e}
return null},getForm:function(){return this.$form},getInvalidFields:function(){return this.$invalidFields},getLocale:function(){return this.options.locale},getMessages:function(e,a){var i=this,r=this._namespace,n=[],s=t([]);switch(!0){case e&&"object"==typeof e:s=e;break;case e&&"string"==typeof e:var o=this.getFieldElements(e);if(o.length>0){var l=o.attr("type");s="radio"===l||"checkbox"===l?o.eq(0):o}
break;default:s=this.$invalidFields}
var d=a?"[data-"+r+'-validator="'+a+'"]':"",u=this.options.err.clazz.split(" ").join(".");return s.each(function(){n=n.concat(t(this).data(r+".messages").find("."+u+"[data-"+r+'-for="'+t(this).attr("data-"+r+"-field")+'"][data-'+r+'-result="'+i.STATUS_INVALID+'"]'+d).map(function(){var e=t(this).attr("data-"+r+"-validator"),a=t(this).attr("data-"+r+"-for");return!1===i.options.fields[a].validators[e].enabled?"":t(this).html()}).get())}),n},getSubmitButton:function(){return this.$submitButton},removeField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field")||e.attr("name"),i.attr("data-"+a+"-field",e);break;case"string":i=this.getFieldElements(e)}
if(0===i.length)return this;for(var r=i.attr("type"),n="radio"===r||"checkbox"===r?1:i.length,s=0;n>s;s++){var o=i.eq(s);this.$invalidFields=this.$invalidFields.not(o),this._cacheFields[e]=this._cacheFields[e].not(o)}
return this._cacheFields[e]&&0!==this._cacheFields[e].length||delete this.options.fields[e],("checkbox"===r||"radio"===r)&&this._initField(e),this.disableSubmitButtons(!1),this.$form.trigger(t.Event(this.options.events.fieldRemoved),{field:e,element:i}),this},resetField:function(e,a){var i=this._namespace,r=t([]);switch(typeof e){case"object":r=e,e=e.attr("data-"+i+"-field");break;case"string":r=this.getFieldElements(e)}
var n=0,s=r.length;if(this.options.fields[e])
for(n=0;s>n;n++)
for(var o in this.options.fields[e].validators)r.eq(n).removeData(i+".dfs."+o);if(a){var l=r.attr("type");"radio"===l||"checkbox"===l?r.prop("checked",!1).removeAttr("selected"):r.val("")}
for(this.updateStatus(e,this.STATUS_NOT_VALIDATED),n=0;s>n;n++)r.eq(n).trigger(t.Event(this.options.events.fieldReset),{fv:this,field:e,element:r.eq(n),resetValue:a});return this},resetForm:function(e){for(var a in this.options.fields)this.resetField(a,e);return this.$invalidFields=t([]),this.$submitButton=null,this.disableSubmitButtons(!1),this.$form.trigger(t.Event(this.options.events.formReset),{fv:this,resetValue:e}),this},revalidateField:function(t){return this.updateStatus(t,this.STATUS_NOT_VALIDATED).validateField(t),this},setLocale:function(e){return this.options.locale=e,this.$form.trigger(t.Event(this.options.events.localeChanged),{locale:e,bv:this,fv:this}),this},updateOption:function(t,e,a,i){var r=this._namespace;return"object"==typeof t&&(t=t.attr("data-"+r+"-field")),this.options.fields[t]&&this.options.fields[t].validators[e]&&(this.options.fields[t].validators[e][a]=i,this.updateStatus(t,this.STATUS_NOT_VALIDATED,e)),this},validateContainer:function(e){var a=this,i=this._namespace,r=[],n="string"==typeof e?t(e):e;if(0===n.length)return this;n.find("[data-"+i+"-field]").each(function(){var e=t(this);a._isExcluded(e)||r.push(e)});for(var s=r.length,o=0;s>o;o++)this.validateField(r[o]);return this}},t.fn.formValidation=function(e){var a=arguments;return this.each(function(){var i=t(this),r=i.data("formValidation"),n="object"==typeof e&&e;if(!r){var s=(n.framework||i.attr("data-fv-framework")||"bootstrap").toLowerCase(),o=s.substr(0,1).toUpperCase()+s.substr(1);if(void 0===FormValidation.Framework[o])throw new Error("The class FormValidation.Framework."+o+" is not implemented");r=new FormValidation.Framework[o](this,n),i.addClass("fv-form-"+s).data("formValidation",r)}"string"==typeof e&&r[e].apply(r,Array.prototype.slice.call(a,1))})},t.fn.formValidation.Constructor=FormValidation.Base,t.fn.formValidation.DEFAULT_MESSAGE="This value is not valid",t.fn.formValidation.DEFAULT_OPTIONS={autoFocus:!0,declarative:!0,elementClass:"fv-form",events:{formInit:"init.form.fv",formPreValidate:"prevalidate.form.fv",formError:"err.form.fv",formReset:"rst.form.fv",formSuccess:"success.form.fv",fieldAdded:"added.field.fv",fieldRemoved:"removed.field.fv",fieldInit:"init.field.fv",fieldError:"err.field.fv",fieldReset:"rst.field.fv",fieldSuccess:"success.field.fv",fieldStatus:"status.field.fv",localeChanged:"changed.locale.fv",validatorError:"err.validator.fv",validatorSuccess:"success.validator.fv",validatorIgnored:"ignored.validator.fv"},excluded:[":disabled",":hidden",":not(:visible)"],fields:null,live:"enabled",locale:"zh_CN",message:null,threshold:null,verbose:!0,button:{selector:'[type="submit"]:not([formnovalidate])',disabled:""},control:{valid:"",invalid:""},err:{clazz:"",container:null,parent:null},icon:{valid:null,invalid:null,validating:null,feedback:""},row:{selector:null,valid:"",invalid:"",feedback:""}}}(jQuery),function(t){FormValidation.Helper={call:function(t,e){if("function"==typeof t)return t.apply(this,e);if("string"==typeof t){"()"===t.substring(t.length-2)&&(t=t.substring(0,t.length-2));for(var a=t.split("."),i=a.pop(),r=window,n=0;n<a.length;n++)r=r[a[n]];return void 0===r[i]?null:r[i].apply(this,e)}},date:function(t,e,a,i){if(isNaN(t)||isNaN(e)||isNaN(a))return!1;if(a.length>2||e.length>2||t.length>4)return!1;if(a=parseInt(a,10),e=parseInt(e,10),1e3>(t=parseInt(t,10))||t>9999||0>=e||e>12)return!1;var r=[31,28,31,30,31,30,31,31,30,31,30,31];if((t%400==0||t%100!=0&&t%4==0)&&(r[1]=29),0>=a||a>r[e-1])return!1;if(!0===i){var n=new Date,s=n.getFullYear(),o=n.getMonth(),l=n.getDate();return s>t||t===s&&o>e-1||t===s&&e-1===o&&l>a}
return!0},format:function(e,a){t.isArray(a)||(a=[a]);for(var i in a)e=e.replace("%s",a[i]);return e},luhn:function(t){for(var e=t.length,a=0,i=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],r=0;e--;)r+=i[a][parseInt(t.charAt(e),10)],a^=1;return r%10==0&&r>0},mod11And10:function(t){for(var e=5,a=t.length,i=0;a>i;i++)e=(2*(e||10)%11+parseInt(t.charAt(i),10))%10;return 1===e},mod37And36:function(t,e){for(var a=(e=e||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").length,i=t.length,r=Math.floor(a/2),n=0;i>n;n++)r=(2*(r||a)%(a+1)+e.indexOf(t.charAt(n)))%a;return 1===r}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{base64:{default:"Please enter a valid base 64 encoded"}}}),FormValidation.Validator.base64={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/.test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{between:{default:"Please enter a value between %s and %s",notInclusive:"Please enter a value between %s and %s strictly"}}}),FormValidation.Validator.between={html5Attributes:{message:"message",min:"min",max:"max",inclusive:"inclusive"},enableByHtml5:function(t){return"range"===t.attr("type")&&{min:t.attr("min"),max:t.attr("max")}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=this._format(n);var s=e.getLocale(),o=t.isNumeric(i.min)?i.min:e.getDynamicOption(a,i.min),l=t.isNumeric(i.max)?i.max:e.getDynamicOption(a,i.max),d=this._format(o),u=this._format(l);return!0===i.inclusive||void 0===i.inclusive?{valid:t.isNumeric(n)&&parseFloat(n)>=d&&parseFloat(n)<=u,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].between.default,[o,l])}:{valid:t.isNumeric(n)&&parseFloat(n)>d&&parseFloat(n)<u,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].between.notInclusive,[o,l])}},_format:function(t){return(t+"").replace(",",".")}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{bic:{default:"Please enter a valid BIC number"}}}),FormValidation.Validator.bic={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(r)}}}(jQuery),function(t){FormValidation.Validator.blank={validate:function(t,e,a,i){return!0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{callback:{default:"Please enter a valid value"}}}),FormValidation.Validator.callback={priority:999,html5Attributes:{message:"message",callback:"callback"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r),s=new t.Deferred,o={valid:!0};if(i.callback){var l=FormValidation.Helper.call(i.callback,[n,e,a]);o="boolean"==typeof l||null===l?{valid:l}:l}
return s.resolve(a,r,o),s}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{choice:{default:"Please enter a valid value",less:"Please choose %s options at minimum",more:"Please choose %s options at maximum",between:"Please choose %s - %s options"}}}),FormValidation.Validator.choice={html5Attributes:{message:"message",min:"min",max:"max"},validate:function(e,a,i,r){var n=e.getLocale(),s=e.getNamespace(),o=a.is("select")?e.getFieldElements(a.attr("data-"+s+"-field")).find("option").filter(":selected").length:e.getFieldElements(a.attr("data-"+s+"-field")).filter(":checked").length,l=i.min?t.isNumeric(i.min)?i.min:e.getDynamicOption(a,i.min):null,d=i.max?t.isNumeric(i.max)?i.max:e.getDynamicOption(a,i.max):null,u=!0,f=i.message||FormValidation.I18n[n].choice.default;switch((l&&o<parseInt(l,10)||d&&o>parseInt(d,10))&&(u=!1),!0){case!!l&&!!d:f=FormValidation.Helper.format(i.message||FormValidation.I18n[n].choice.between,[parseInt(l,10),parseInt(d,10)]);break;case!!l:f=FormValidation.Helper.format(i.message||FormValidation.I18n[n].choice.less,parseInt(l,10));break;case!!d:f=FormValidation.Helper.format(i.message||FormValidation.I18n[n].choice.more,parseInt(d,10))}
return{valid:u,message:f}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{color:{default:"Please enter a valid color"}}}),FormValidation.Validator.color={html5Attributes:{message:"message",type:"type"},enableByHtml5:function(t){return"color"===t.attr("type")},SUPPORTED_TYPES:["hex","rgb","rgba","hsl","hsla","keyword"],KEYWORD_COLORS:["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","transparent","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(this.enableByHtml5(a))return/^#[0-9A-F]{6}$/i.test(n);var s=i.type||this.SUPPORTED_TYPES;t.isArray(s)||(s=s.replace(/s/g,"").split(","));for(var o,l,d=!1,u=0;u<s.length;u++)
if(l=s[u],o="_"+l.toLowerCase(),d=d||this[o](n))return!0;return!1},_hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},_hsl:function(t){return/^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t)},_hsla:function(t){return/^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t)},_keyword:function(e){return t.inArray(e,this.KEYWORD_COLORS)>=0},_rgb:function(t){var e=/^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;return/^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(t)||e.test(t)},_rgba:function(t){var e=/^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;return/^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t)||e.test(t)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{creditCard:{default:"Please enter a valid credit card number"}}}),FormValidation.Validator.creditCard={validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(/[^0-9-\s]+/.test(n))return!1;if(n=n.replace(/\D/g,""),!FormValidation.Helper.luhn(n))return!1;var s,o,l={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DANKORT:{length:[16],prefix:["5019"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},ELO:{length:[16],prefix:["4011","4312","4389","4514","4573","4576","5041","5066","5067","509","6277","6362","6363","650","6516","6550"]},FORBRUGSFORENINGEN:{length:[16],prefix:["600722"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","5868","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA_ELECTRON:{length:[16],prefix:["4026","417500","4405","4508","4844","4913","4917"]},VISA:{length:[16],prefix:["4"]}};for(s in l)
for(o in l[s].prefix)
if(n.substr(0,l[s].prefix[o].length)===l[s].prefix[o]&&-1!==t.inArray(n.length,l[s].length))return{valid:!0,type:s};return!1}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{cusip:{default:"Please enter a valid CUSIP number"}}}),FormValidation.Validator.cusip={validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(n=n.toUpperCase(),!/^[0-9A-Z]{9}$/.test(n))return!1;for(var s=t.map(n.split(""),function(t){var e=t.charCodeAt(0);return e>="A".charCodeAt(0)&&e<="Z".charCodeAt(0)?e-"A".charCodeAt(0)+10:t}),o=s.length,l=0,d=0;o-1>d;d++){var u=parseInt(s[d],10);d%2!=0&&(u*=2),u>9&&(u-=9),l+=u}
return(l=(10-l%10)%10)===parseInt(s[o-1],10)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{cvv:{default:"Please enter a valid CVV number"}}}),FormValidation.Validator.cvv={html5Attributes:{message:"message",ccfield:"creditCardField"},init:function(t,e,a,i){if(a.creditCardField){var r=t.getFieldElements(a.creditCardField);t.onLiveChange(r,"live_"+i,function(){t.getStatus(e,i)!==t.STATUS_NOT_VALIDATED&&t.revalidateField(e)})}},destroy:function(t,e,a,i){if(a.creditCardField){var r=t.getFieldElements(a.creditCardField);t.offLiveChange(r,"live_"+i)}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(!/^[0-9]{3,4}$/.test(n))return!1;if(!i.creditCardField)return!0;var s=e.getFieldValue(i.creditCardField,"creditCard");if(null===s||""===s)return!0;s=s.replace(/\D/g,"");var o,l,d={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DANKORT:{length:[16],prefix:["5019"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},ELO:{length:[16],prefix:["4011","4312","4389","4514","4573","4576","5041","5066","5067","509","6277","6362","6363","650","6516","6550"]},FORBRUGSFORENINGEN:{length:[16],prefix:["600722"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","5868","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA_ELECTRON:{length:[16],prefix:["4026","417500","4405","4508","4844","4913","4917"]},VISA:{length:[16],prefix:["4"]}},u=null;for(o in d)
for(l in d[o].prefix)
if(s.substr(0,d[o].prefix[l].length)===d[o].prefix[l]&&-1!==t.inArray(s.length,d[o].length)){u=o;break}
return null!==u&&("AMERICAN_EXPRESS"===u?4===n.length:3===n.length)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{date:{default:"Please enter a valid date",min:"Please enter a date after %s",max:"Please enter a date before %s",range:"Please enter a date in the range %s - %s"}}}),FormValidation.Validator.date={html5Attributes:{message:"message",format:"format",min:"min",max:"max",separator:"separator"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;i.format=i.format||"MM/DD/YYYY","date"===a.attr("type")&&(i.format="YYYY-MM-DD");var s=e.getLocale(),o=i.message||FormValidation.I18n[s].date.default,l=i.format.split(" "),d=l[0],u=l.length>1?l[1]:null,f=l.length>2?l[2]:null,c=n.split(" "),h=c[0],p=c.length>1?c[1]:null;if(l.length!==c.length)return{valid:!1,message:o};var m=i.separator;if(m||(m=-1!==h.indexOf("/")?"/":-1!==h.indexOf("-")?"-":-1!==h.indexOf(".")?".":null),null===m||-1===h.indexOf(m))return{valid:!1,message:o};if(h=h.split(m),d=d.split(m),h.length!==d.length)return{valid:!1,message:o};var v=h[t.inArray("YYYY",d)],g=h[t.inArray("MM",d)],A=h[t.inArray("DD",d)];if(!v||!g||!A||4!==v.length)return{valid:!1,message:o};var I=null,b=null,F=null;if(u){if(u=u.split(":"),p=p.split(":"),u.length!==p.length)return{valid:!1,message:o};if(b=p.length>0?p[0]:null,I=p.length>1?p[1]:null,F=p.length>2?p[2]:null,""===b||""===I||""===F)return{valid:!1,message:o};if(F){if(isNaN(F)||F.length>2)return{valid:!1,message:o};if(0>(F=parseInt(F,10))||F>60)return{valid:!1,message:o}}
if(b){if(isNaN(b)||b.length>2)return{valid:!1,message:o};if(0>(b=parseInt(b,10))||b>=24||f&&b>12)return{valid:!1,message:o}}
if(I){if(isNaN(I)||I.length>2)return{valid:!1,message:o};if(0>(I=parseInt(I,10))||I>59)return{valid:!1,message:o}}}
var V=FormValidation.Helper.date(v,g,A),S=null,E=null,T=i.min,_=i.max;switch(T&&(S=T instanceof Date?T:this._parseDate(T,d,m)||this._parseDate(e.getDynamicOption(a,T),d,m),T=this._formatDate(S,i.format)),_&&(E=_ instanceof Date?_:this._parseDate(_,d,m)||this._parseDate(e.getDynamicOption(a,_),d,m),_=this._formatDate(E,i.format)),h=new Date(v,g-1,A,b,I,F),!0){case T&&!_&&V:V=h.getTime()>=S.getTime(),o=i.message||FormValidation.Helper.format(FormValidation.I18n[s].date.min,T);break;case _&&!T&&V:V=h.getTime()<=E.getTime(),o=i.message||FormValidation.Helper.format(FormValidation.I18n[s].date.max,_);break;case _&&T&&V:V=h.getTime()<=E.getTime()&&h.getTime()>=S.getTime(),o=i.message||FormValidation.Helper.format(FormValidation.I18n[s].date.range,[T,_])}
return{valid:V,date:h,message:o}},_parseDate:function(e,a,i){if(e instanceof Date)return e;if("string"!=typeof e)return null;var r=t.inArray("YYYY",a),n=t.inArray("MM",a),s=t.inArray("DD",a);if(-1===r||-1===n||-1===s)return null;var o=0,l=0,d=0,u=e.split(" "),f=u[0].split(i);if(f.length<3)return null;if(u.length>1){var c=u[1].split(":");l=c.length>0?c[0]:null,o=c.length>1?c[1]:null,d=c.length>2?c[2]:null}
return new Date(f[r],f[n]-1,f[s],l,o,d)},_formatDate:function(t,e){var a={d:function(t){return t.getDate()},dd:function(t){var e=t.getDate();return 10>e?"0"+e:e},m:function(t){return t.getMonth()+1},mm:function(t){var e=t.getMonth()+1;return 10>e?"0"+e:e},yy:function(t){return(""+t.getFullYear()).substr(2)},yyyy:function(t){return t.getFullYear()},h:function(t){return t.getHours()%12||12},hh:function(t){var e=t.getHours()%12||12;return 10>e?"0"+e:e},H:function(t){return t.getHours()},HH:function(t){var e=t.getHours();return 10>e?"0"+e:e},M:function(t){return t.getMinutes()},MM:function(t){var e=t.getMinutes();return 10>e?"0"+e:e},s:function(t){return t.getSeconds()},ss:function(t){var e=t.getSeconds();return 10>e?"0"+e:e}};return(e=e.replace(/Y/g,"y").replace(/M/g,"m").replace(/D/g,"d").replace(/:m/g,":M").replace(/:mm/g,":MM").replace(/:S/,":s").replace(/:SS/,":ss")).replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,function(e){return a[e]?a[e](t):e.slice(1,e.length-1)})}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{different:{default:"Please enter a different value"}}}),FormValidation.Validator.different={html5Attributes:{message:"message",field:"field"},init:function(e,a,i,r){for(var n=i.field.split(","),s=0;s<n.length;s++){var o=e.getFieldElements(t.trim(n[s]));e.onLiveChange(o,"live_"+r,function(){e.getStatus(a,r)!==e.STATUS_NOT_VALIDATED&&e.revalidateField(a)})}},destroy:function(e,a,i,r){for(var n=i.field.split(","),s=0;s<n.length;s++){var o=e.getFieldElements(t.trim(n[s]));e.offLiveChange(o,"live_"+r)}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;for(var s=i.field.split(","),o=!0,l=0;l<s.length;l++){var d=e.getFieldElements(t.trim(s[l]));if(null!=d&&0!==d.length){var u=e.getFieldValue(d,r);n===u?o=!1:""!==u&&e.updateStatus(d,e.STATUS_VALID,r)}}
return o}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{digits:{default:"Please enter only digits"}}}),FormValidation.Validator.digits={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^\d+$/.test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ean:{default:"Please enter a valid EAN number"}}}),FormValidation.Validator.ean={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^(\d{8}|\d{12}|\d{13})$/.test(r))return!1;for(var n=r.length,s=0,o=8===n?[3,1]:[1,3],l=0;n-1>l;l++)s+=parseInt(r.charAt(l),10)*o[l%2];return(s=(10-s%10)%10)+""===r.charAt(n-1)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ein:{default:"Please enter a valid EIN number"}}}),FormValidation.Validator.ein={CAMPUS:{ANDOVER:["10","12"],ATLANTA:["60","67"],AUSTIN:["50","53"],BROOKHAVEN:["01","02","03","04","05","06","11","13","14","16","21","22","23","25","34","51","52","54","55","56","57","58","59","65"],CINCINNATI:["30","32","35","36","37","38","61"],FRESNO:["15","24"],KANSAS_CITY:["40","44"],MEMPHIS:["94","95"],OGDEN:["80","90"],PHILADELPHIA:["33","39","41","42","43","48","62","63","64","66","68","71","72","73","74","75","76","77","81","82","83","84","85","86","87","88","91","92","93","98","99"],INTERNET:["20","26","27","45","46","47"],SMALL_BUSINESS_ADMINISTRATION:["31"]},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(!/^[0-9]{2}-?[0-9]{7}$/.test(n))return!1;var s=n.substr(0,2)+"";for(var o in this.CAMPUS)
if(-1!==t.inArray(s,this.CAMPUS[o]))return{valid:!0,campus:o};return!1}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{emailAddress:{default:"Please enter a valid email address"}}}),FormValidation.Validator.emailAddress={html5Attributes:{message:"message",multiple:"multiple",separator:"separator"},enableByHtml5:function(t){return"email"===t.attr("type")},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;if(!0===a.multiple||"true"===a.multiple){for(var s=a.separator||/[,;]/,o=this._splitEmailAddresses(r,s),l=0;l<o.length;l++)
if(!n.test(o[l]))return!1;return!0}
return n.test(r)},_splitEmailAddresses:function(t,e){for(var a=t.split(/"/),i=a.length,r=[],n="",s=0;i>s;s++)
if(s%2==0){var o=a[s].split(e),l=o.length;if(1===l)n+=o[0];else{r.push(n+o[0]);for(var d=1;l-1>d;d++)r.push(o[d]);n=o[l-1]}}else n+='"'+a[s],i-1>s&&(n+='"');return r.push(n),r}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{file:{default:"Please choose a valid file"}}}),FormValidation.Validator.file={Error:{EXTENSION:"EXTENSION",MAX_FILES:"MAX_FILES",MAX_SIZE:"MAX_SIZE",MAX_TOTAL_SIZE:"MAX_TOTAL_SIZE",MIN_FILES:"MIN_FILES",MIN_SIZE:"MIN_SIZE",MIN_TOTAL_SIZE:"MIN_TOTAL_SIZE",TYPE:"TYPE"},html5Attributes:{extension:"extension",maxfiles:"maxFiles",minfiles:"minFiles",maxsize:"maxSize",minsize:"minSize",maxtotalsize:"maxTotalSize",mintotalsize:"minTotalSize",message:"message",type:"type"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s,o=i.extension?i.extension.toLowerCase().split(","):null,l=i.type?i.type.toLowerCase().split(","):null;if(window.File&&window.FileList&&window.FileReader){var d=a.get(0).files,u=d.length,f=0;if(i.maxFiles&&u>parseInt(i.maxFiles,10))return{valid:!1,error:this.Error.MAX_FILES};if(i.minFiles&&u<parseInt(i.minFiles,10))return{valid:!1,error:this.Error.MIN_FILES};for(var c={},h=0;u>h;h++){if(f+=d[h].size,s=d[h].name.substr(d[h].name.lastIndexOf(".")+1),c={file:d[h],size:d[h].size,ext:s,type:d[h].type},i.minSize&&d[h].size<parseInt(i.minSize,10))return{valid:!1,error:this.Error.MIN_SIZE,metaData:c};if(i.maxSize&&d[h].size>parseInt(i.maxSize,10))return{valid:!1,error:this.Error.MAX_SIZE,metaData:c};if(o&&-1===t.inArray(s.toLowerCase(),o))return{valid:!1,error:this.Error.EXTENSION,metaData:c};if(d[h].type&&l&&-1===t.inArray(d[h].type.toLowerCase(),l))return{valid:!1,error:this.Error.TYPE,metaData:c}}
if(i.maxTotalSize&&f>parseInt(i.maxTotalSize,10))return{valid:!1,error:this.Error.MAX_TOTAL_SIZE,metaData:{totalSize:f}};if(i.minTotalSize&&f<parseInt(i.minTotalSize,10))return{valid:!1,error:this.Error.MIN_TOTAL_SIZE,metaData:{totalSize:f}}}else if(s=n.substr(n.lastIndexOf(".")+1),o&&-1===t.inArray(s.toLowerCase(),o))return{valid:!1,error:this.Error.EXTENSION,metaData:{ext:s}};return!0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{greaterThan:{default:"Please enter a value greater than or equal to %s",notInclusive:"Please enter a value greater than %s"}}}),FormValidation.Validator.greaterThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(t){var e=t.attr("type"),a=t.attr("min");return!(!a||"date"===e)&&{value:a}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=this._format(n);var s=e.getLocale(),o=t.isNumeric(i.value)?i.value:e.getDynamicOption(a,i.value),l=this._format(o);return!0===i.inclusive||void 0===i.inclusive?{valid:t.isNumeric(n)&&parseFloat(n)>=l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].greaterThan.default,o)}:{valid:t.isNumeric(n)&&parseFloat(n)>l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].greaterThan.notInclusive,o)}},_format:function(t){return(t+"").replace(",",".")}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{grid:{default:"Please enter a valid GRId number"}}}),FormValidation.Validator.grid={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||(r=r.toUpperCase(),!!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(r)&&("GRID:"===(r=r.replace(/\s/g,"").replace(/-/g,"")).substr(0,5)&&(r=r.substr(5)),FormValidation.Helper.mod37And36(r)))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{hex:{default:"Please enter a valid hexadecimal number"}}}),FormValidation.Validator.hex={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^[0-9a-fA-F]+$/.test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{iban:{default:"Please enter a valid IBAN number",country:"Please enter a valid IBAN number in %s",countries:{AD:"Andorra",AE:"United Arab Emirates",AL:"Albania",AO:"Angola",AT:"Austria",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BR:"Brazil",CH:"Switzerland",CI:"Ivory Coast",CM:"Cameroon",CR:"Costa Rica",CV:"Cape Verde",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",DO:"Dominican Republic",DZ:"Algeria",EE:"Estonia",ES:"Spain",FI:"Finland",FO:"Faroe Islands",FR:"France",GB:"United Kingdom",GE:"Georgia",GI:"Gibraltar",GL:"Greenland",GR:"Greece",GT:"Guatemala",HR:"Croatia",HU:"Hungary",IE:"Ireland",IL:"Israel",IR:"Iran",IS:"Iceland",IT:"Italy",JO:"Jordan",KW:"Kuwait",KZ:"Kazakhstan",LB:"Lebanon",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MG:"Madagascar",MK:"Macedonia",ML:"Mali",MR:"Mauritania",MT:"Malta",MU:"Mauritius",MZ:"Mozambique",NL:"Netherlands",NO:"Norway",PK:"Pakistan",PL:"Poland",PS:"Palestine",PT:"Portugal",QA:"Qatar",RO:"Romania",RS:"Serbia",SA:"Saudi Arabia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",SN:"Senegal",TL:"East Timor",TN:"Tunisia",TR:"Turkey",VG:"Virgin Islands, British",XK:"Republic of Kosovo"}}}}),FormValidation.Validator.iban={html5Attributes:{message:"message",country:"country",sepa:"sepa"},REGEX:{AD:"AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",AE:"AE[0-9]{2}[0-9]{3}[0-9]{16}",AL:"AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",AO:"AO[0-9]{2}[0-9]{21}",AT:"AT[0-9]{2}[0-9]{5}[0-9]{11}",AZ:"AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",BA:"BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",BE:"BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",BF:"BF[0-9]{2}[0-9]{23}",BG:"BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",BH:"BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",BI:"BI[0-9]{2}[0-9]{12}",BJ:"BJ[0-9]{2}[A-Z]{1}[0-9]{23}",BR:"BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",CH:"CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",CI:"CI[0-9]{2}[A-Z]{1}[0-9]{23}",CM:"CM[0-9]{2}[0-9]{23}",CR:"CR[0-9]{2}[0-9]{3}[0-9]{14}",CV:"CV[0-9]{2}[0-9]{21}",CY:"CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",CZ:"CZ[0-9]{2}[0-9]{20}",DE:"DE[0-9]{2}[0-9]{8}[0-9]{10}",DK:"DK[0-9]{2}[0-9]{14}",DO:"DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",DZ:"DZ[0-9]{2}[0-9]{20}",EE:"EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",ES:"ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",FI:"FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",FO:"FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",FR:"FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",GB:"GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",GE:"GE[0-9]{2}[A-Z]{2}[0-9]{16}",GI:"GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",GL:"GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",GR:"GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",GT:"GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",HR:"HR[0-9]{2}[0-9]{7}[0-9]{10}",HU:"HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",IE:"IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",IL:"IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",IR:"IR[0-9]{2}[0-9]{22}",IS:"IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",IT:"IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",JO:"JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",KW:"KW[0-9]{2}[A-Z]{4}[0-9]{22}",KZ:"KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LB:"LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",LI:"LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",LT:"LT[0-9]{2}[0-9]{5}[0-9]{11}",LU:"LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LV:"LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",MC:"MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",MD:"MD[0-9]{2}[A-Z0-9]{20}",ME:"ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",MG:"MG[0-9]{2}[0-9]{23}",MK:"MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",ML:"ML[0-9]{2}[A-Z]{1}[0-9]{23}",MR:"MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",MT:"MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",MU:"MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",MZ:"MZ[0-9]{2}[0-9]{21}",NL:"NL[0-9]{2}[A-Z]{4}[0-9]{10}",NO:"NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",PK:"PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",PL:"PL[0-9]{2}[0-9]{8}[0-9]{16}",PS:"PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",PT:"PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",QA:"QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",RO:"RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",RS:"RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",SA:"SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",SE:"SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",SI:"SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",SK:"SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",SM:"SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",SN:"SN[0-9]{2}[A-Z]{1}[0-9]{23}",TL:"TL38[0-9]{3}[0-9]{14}[0-9]{2}",TN:"TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",TR:"TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",VG:"VG[0-9]{2}[A-Z]{4}[0-9]{16}",XK:"XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}"},SEPA_COUNTRIES:["AT","BE","BG","CH","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GI","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","NL","NO","PL","PT","RO","SE","SI","SK","SM"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=n.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();var s=i.country;s?"string"==typeof s&&this.REGEX[s]||(s=e.getDynamicOption(a,s)):s=n.substr(0,2);var o=e.getLocale();if(!this.REGEX[s])return!1;if(void 0!==typeof i.sepa){var l=-1!==t.inArray(s,this.SEPA_COUNTRIES);if(("true"===i.sepa||!0===i.sepa)&&!l||("false"===i.sepa||!1===i.sepa)&&l)return!1}
if(!new RegExp("^"+this.REGEX[s]+"$").test(n))return{valid:!1,message:FormValidation.Helper.format(i.message||FormValidation.I18n[o].iban.country,FormValidation.I18n[o].iban.countries[s])};n=n.substr(4)+n.substr(0,4),n=(n=t.map(n.split(""),function(t){var e=t.charCodeAt(0);return e>="A".charCodeAt(0)&&e<="Z".charCodeAt(0)?e-"A".charCodeAt(0)+10:t})).join("");for(var d=parseInt(n.substr(0,1),10),u=n.length,f=1;u>f;++f)d=(10*d+parseInt(n.substr(f,1),10))%97;return{valid:1===d,message:FormValidation.Helper.format(i.message||FormValidation.I18n[o].iban.country,FormValidation.I18n[o].iban.countries[s])}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{id:{default:"Please enter a valid identification number",country:"Please enter a valid identification number in %s",countries:{BA:"Bosnia and Herzegovina",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CL:"Chile",CN:"China",CZ:"Czech Republic",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",HR:"Croatia",IE:"Ireland",IS:"Iceland",LT:"Lithuania",LV:"Latvia",ME:"Montenegro",MK:"Macedonia",NL:"Netherlands",PL:"Poland",RO:"Romania",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",TH:"Thailand",TR:"Turkey",ZA:"South Africa"}}}}),FormValidation.Validator.id={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BA","BG","BR","CH","CL","CN","CZ","DK","EE","ES","FI","HR","IE","IS","LT","LV","ME","MK","NL","PL","RO","RS","SE","SI","SK","SM","TH","TR","ZA"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s=e.getLocale(),o=i.country;if(o?("string"!=typeof o||-1===t.inArray(o.toUpperCase(),this.COUNTRY_CODES))&&(o=e.getDynamicOption(a,o)):o=n.substr(0,2),-1===t.inArray(o,this.COUNTRY_CODES))return!0;var l=this[["_",o.toLowerCase()].join("")](n);return l=!0===l||!1===l?{valid:l}:l,l.message=FormValidation.Helper.format(i.message||FormValidation.I18n[s].id.country,FormValidation.I18n[s].id.countries[o.toUpperCase()]),l},_validateJMBG:function(t,e){if(!/^\d{13}$/.test(t))return!1;var a=parseInt(t.substr(0,2),10),i=parseInt(t.substr(2,2),10),r=(parseInt(t.substr(4,3),10),parseInt(t.substr(7,2),10)),n=parseInt(t.substr(12,1),10);if(a>31||i>12)return!1;for(var s=0,o=0;6>o;o++)s+=(7-o)*(parseInt(t.charAt(o),10)+parseInt(t.charAt(o+6),10));if((10===(s=11-s%11)||11===s)&&(s=0),s!==n)return!1;switch(e.toUpperCase()){case"BA":return r>=10&&19>=r;case"MK":return r>=41&&49>=r;case"ME":return r>=20&&29>=r;case"RS":return r>=70&&99>=r;case"SI":return r>=50&&59>=r;default:return!0}},_ba:function(t){return this._validateJMBG(t,"BA")},_mk:function(t){return this._validateJMBG(t,"MK")},_me:function(t){return this._validateJMBG(t,"ME")},_rs:function(t){return this._validateJMBG(t,"RS")},_si:function(t){return this._validateJMBG(t,"SI")},_bg:function(t){if(!/^\d{10}$/.test(t)&&!/^\d{6}\s\d{3}\s\d{1}$/.test(t))return!1;t=t.replace(/\s/g,"");var e=parseInt(t.substr(0,2),10)+1900,a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(a>40?(e+=100,a-=40):a>20&&(e-=100,a-=20),!FormValidation.Helper.date(e,a,i))return!1;for(var r=0,n=[2,4,8,5,10,9,7,3,6],s=0;9>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return(r=r%11%10)+""===t.substr(9,1)},_br:function(t){if(t=t.replace(/\D/g,""),!/^\d{11}$/.test(t)||/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t))return!1;for(var e=0,a=0;9>a;a++)e+=(10-a)*parseInt(t.charAt(a),10);if((10===(e=11-e%11)||11===e)&&(e=0),e+""!==t.charAt(9))return!1;var i=0;for(a=0;10>a;a++)i+=(11-a)*parseInt(t.charAt(a),10);return(10===(i=11-i%11)||11===i)&&(i=0),i+""===t.charAt(10)},_ch:function(t){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t))return!1;for(var e=(t=t.replace(/\D/g,"").substr(3)).length,a=0,i=8===e?[3,1]:[1,3],r=0;e-1>r;r++)a+=parseInt(t.charAt(r),10)*i[r%2];return(a=10-a%10)+""===t.charAt(e-1)},_cl:function(t){if(!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t))return!1;for(t=t.replace(/\-/g,"");t.length<9;)t="0"+t;for(var e=0,a=[3,2,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e=11-e%11,11===e?e=0:10===e&&(e="K"),e+""===t.charAt(8).toUpperCase()},_cn:function(e){if(e=e.trim(),!/^\d{15}$/.test(e)&&!/^\d{17}[\dXx]{1}$/.test(e))return!1;var a={11:{0:[0],1:[[0,9],[11,17]],2:[0,28,29]},12:{0:[0],1:[[0,16]],2:[0,21,23,25]},13:{0:[0],1:[[0,5],7,8,21,[23,33],[81,85]],2:[[0,5],[7,9],[23,25],27,29,30,81,83],3:[[0,4],[21,24]],4:[[0,4],6,21,[23,35],81],5:[[0,3],[21,35],81,82],6:[[0,4],[21,38],[81,84]],7:[[0,3],5,6,[21,33]],8:[[0,4],[21,28]],9:[[0,3],[21,30],[81,84]],10:[[0,3],[22,26],28,81,82],11:[[0,2],[21,28],81,82]},14:{0:[0],1:[0,1,[5,10],[21,23],81],2:[[0,3],11,12,[21,27]],3:[[0,3],11,21,22],4:[[0,2],11,21,[23,31],81],5:[[0,2],21,22,24,25,81],6:[[0,3],[21,24]],7:[[0,2],[21,29],81],8:[[0,2],[21,30],81,82],9:[[0,2],[21,32],81],10:[[0,2],[21,34],81,82],11:[[0,2],[21,30],81,82],23:[[0,3],22,23,[25,30],32,33]},15:{0:[0],1:[[0,5],[21,25]],2:[[0,7],[21,23]],3:[[0,4]],4:[[0,4],[21,26],[28,30]],5:[[0,2],[21,26],81],6:[[0,2],[21,27]],7:[[0,3],[21,27],[81,85]],8:[[0,2],[21,26]],9:[[0,2],[21,29],81],22:[[0,2],[21,24]],25:[[0,2],[22,31]],26:[[0,2],[24,27],[29,32],34],28:[0,1,[22,27]],29:[0,[21,23]]},21:{0:[0],1:[[0,6],[11,14],[22,24],81],2:[[0,4],[11,13],24,[81,83]],3:[[0,4],11,21,23,81],4:[[0,4],11,[21,23]],5:[[0,5],21,22],6:[[0,4],24,81,82],7:[[0,3],11,26,27,81,82],8:[[0,4],11,81,82],9:[[0,5],11,21,22],10:[[0,5],11,21,81],11:[[0,3],21,22],12:[[0,2],4,21,23,24,81,82],13:[[0,3],21,22,24,81,82],14:[[0,4],21,22,81]},22:{0:[0],1:[[0,6],12,22,[81,83]],2:[[0,4],11,21,[81,84]],3:[[0,3],22,23,81,82],4:[[0,3],21,22],5:[[0,3],21,23,24,81,82],6:[[0,2],4,5,[21,23],25,81],7:[[0,2],[21,24],81],8:[[0,2],21,22,81,82],24:[[0,6],24,26]},23:{0:[0],1:[[0,12],21,[23,29],[81,84]],2:[[0,8],21,[23,25],27,[29,31],81],3:[[0,7],21,81,82],4:[[0,7],21,22],5:[[0,3],5,6,[21,24]],6:[[0,6],[21,24]],7:[[0,16],22,81],8:[[0,5],11,22,26,28,33,81,82],9:[[0,4],21],10:[[0,5],24,25,81,[83,85]],11:[[0,2],21,23,24,81,82],12:[[0,2],[21,26],[81,83]],27:[[0,4],[21,23]]},31:{0:[0],1:[0,1,[3,10],[12,20]],2:[0,30]},32:{0:[0],1:[[0,7],11,[13,18],24,25],2:[[0,6],11,81,82],3:[[0,5],11,12,[21,24],81,82],4:[[0,2],4,5,11,12,81,82],5:[[0,9],[81,85]],6:[[0,2],11,12,21,23,[81,84]],7:[0,1,3,5,6,[21,24]],8:[[0,4],11,26,[29,31]],9:[[0,3],[21,25],28,81,82],10:[[0,3],11,12,23,81,84,88],11:[[0,2],11,12,[81,83]],12:[[0,4],[81,84]],13:[[0,2],11,[21,24]]},33:{0:[0],1:[[0,6],[8,10],22,27,82,83,85],2:[0,1,[3,6],11,12,25,26,[81,83]],3:[[0,4],22,24,[26,29],81,82],4:[[0,2],11,21,24,[81,83]],5:[[0,3],[21,23]],6:[[0,2],21,24,[81,83]],7:[[0,3],23,26,27,[81,84]],8:[[0,3],22,24,25,81],9:[[0,3],21,22],10:[[0,4],[21,24],81,82],11:[[0,2],[21,27],81]},34:{0:[0],1:[[0,4],11,[21,24],81],2:[[0,4],7,8,[21,23],25],3:[[0,4],11,[21,23]],4:[[0,6],21],5:[[0,4],6,[21,23]],6:[[0,4],21],7:[[0,3],11,21],8:[[0,3],11,[22,28],81],10:[[0,4],[21,24]],11:[[0,3],22,[24,26],81,82],12:[[0,4],21,22,25,26,82],13:[[0,2],[21,24]],14:[[0,2],[21,24]],15:[[0,3],[21,25]],16:[[0,2],[21,23]],17:[[0,2],[21,23]],18:[[0,2],[21,25],81]},35:{0:[0],1:[[0,5],11,[21,25],28,81,82],2:[[0,6],[11,13]],3:[[0,5],22],4:[[0,3],21,[23,30],81],5:[[0,5],21,[24,27],[81,83]],6:[[0,3],[22,29],81],7:[[0,2],[21,25],[81,84]],8:[[0,2],[21,25],81],9:[[0,2],[21,26],81,82]},36:{0:[0],1:[[0,5],11,[21,24]],2:[[0,3],22,81],3:[[0,2],13,[21,23]],4:[[0,3],21,[23,30],81,82],5:[[0,2],21],6:[[0,2],22,81],7:[[0,2],[21,35],81,82],8:[[0,3],[21,30],81],9:[[0,2],[21,26],[81,83]],10:[[0,2],[21,30]],11:[[0,2],[21,30],81]},37:{0:[0],1:[[0,5],12,13,[24,26],81],2:[[0,3],5,[11,14],[81,85]],3:[[0,6],[21,23]],4:[[0,6],81],5:[[0,3],[21,23]],6:[[0,2],[11,13],34,[81,87]],7:[[0,5],24,25,[81,86]],8:[[0,2],11,[26,32],[81,83]],9:[[0,3],11,21,23,82,83],10:[[0,2],[81,83]],11:[[0,3],21,22],12:[[0,3]],13:[[0,2],11,12,[21,29]],14:[[0,2],[21,28],81,82],15:[[0,2],[21,26],81],16:[[0,2],[21,26]],17:[[0,2],[21,28]]},41:{0:[0],1:[[0,6],8,22,[81,85]],2:[[0,5],11,[21,25]],3:[[0,7],11,[22,29],81],4:[[0,4],11,[21,23],25,81,82],5:[[0,3],5,6,22,23,26,27,81],6:[[0,3],11,21,22],7:[[0,4],11,21,[24,28],81,82],8:[[0,4],11,[21,23],25,[81,83]],9:[[0,2],22,23,[26,28]],10:[[0,2],[23,25],81,82],11:[[0,4],[21,23]],12:[[0,2],21,22,24,81,82],13:[[0,3],[21,30],81],14:[[0,3],[21,26],81],15:[[0,3],[21,28]],16:[[0,2],[21,28],81],17:[[0,2],[21,29]],90:[0,1]},42:{0:[0],1:[[0,7],[11,17]],2:[[0,5],22,81],3:[[0,3],[21,25],81],5:[[0,6],[25,29],[81,83]],6:[[0,2],6,7,[24,26],[82,84]],7:[[0,4]],8:[[0,2],4,21,22,81],9:[[0,2],[21,23],81,82,84],10:[[0,3],[22,24],81,83,87],11:[[0,2],[21,27],81,82],12:[[0,2],[21,24],81],13:[[0,3],21,81],28:[[0,2],22,23,[25,28]],90:[0,[4,6],21]},43:{0:[0],1:[[0,5],11,12,21,22,24,81],2:[[0,4],11,21,[23,25],81],3:[[0,2],4,21,81,82],4:[0,1,[5,8],12,[21,24],26,81,82],5:[[0,3],11,[21,25],[27,29],81],6:[[0,3],11,21,23,24,26,81,82],7:[[0,3],[21,26],81],8:[[0,2],11,21,22],9:[[0,3],[21,23],81],10:[[0,3],[21,28],81],11:[[0,3],[21,29]],12:[[0,2],[21,30],81],13:[[0,2],21,22,81,82],31:[0,1,[22,27],30]},44:{0:[0],1:[[0,7],[11,16],83,84],2:[[0,5],21,22,24,29,32,33,81,82],3:[0,1,[3,8]],4:[[0,4]],5:[0,1,[6,15],23,82,83],6:[0,1,[4,8]],7:[0,1,[3,5],81,[83,85]],8:[[0,4],11,23,25,[81,83]],9:[[0,3],23,[81,83]],12:[[0,3],[23,26],83,84],13:[[0,3],[22,24],81],14:[[0,2],[21,24],26,27,81],15:[[0,2],21,23,81],16:[[0,2],[21,25]],17:[[0,2],21,23,81],18:[[0,3],21,23,[25,27],81,82],19:[0],20:[0],51:[[0,3],21,22],52:[[0,3],21,22,24,81],53:[[0,2],[21,23],81]},45:{0:[0],1:[[0,9],[21,27]],2:[[0,5],[21,26]],3:[[0,5],11,12,[21,32]],4:[0,1,[3,6],11,[21,23],81],5:[[0,3],12,21],6:[[0,3],21,81],7:[[0,3],21,22],8:[[0,4],21,81],9:[[0,3],[21,24],81],10:[[0,2],[21,31]],11:[[0,2],[21,23]],12:[[0,2],[21,29],81],13:[[0,2],[21,24],81],14:[[0,2],[21,25],81]},46:{0:[0],1:[0,1,[5,8]],2:[0,1],3:[0,[21,23]],90:[[0,3],[5,7],[21,39]]},50:{0:[0],1:[[0,19]],2:[0,[22,38],[40,43]],3:[0,[81,84]]},51:{0:[0],1:[0,1,[4,8],[12,15],[21,24],29,31,32,[81,84]],3:[[0,4],11,21,22],4:[[0,3],11,21,22],5:[[0,4],21,22,24,25],6:[0,1,3,23,26,[81,83]],7:[0,1,3,4,[22,27],81],8:[[0,2],11,12,[21,24]],9:[[0,4],[21,23]],10:[[0,2],11,24,25,28],11:[[0,2],[11,13],23,24,26,29,32,33,81],13:[[0,4],[21,25],81],14:[[0,2],[21,25]],15:[[0,3],[21,29]],16:[[0,3],[21,23],81],17:[[0,3],[21,25],81],18:[[0,3],[21,27]],19:[[0,3],[21,23]],20:[[0,2],21,22,81],32:[0,[21,33]],33:[0,[21,38]],34:[0,1,[22,37]]},52:{0:[0],1:[[0,3],[11,15],[21,23],81],2:[0,1,3,21,22],3:[[0,3],[21,30],81,82],4:[[0,2],[21,25]],5:[[0,2],[21,27]],6:[[0,3],[21,28]],22:[0,1,[22,30]],23:[0,1,[22,28]],24:[0,1,[22,28]],26:[0,1,[22,36]],27:[[0,2],22,23,[25,32]]},53:{0:[0],1:[[0,3],[11,14],21,22,[24,29],81],3:[[0,2],[21,26],28,81],4:[[0,2],[21,28]],5:[[0,2],[21,24]],6:[[0,2],[21,30]],7:[[0,2],[21,24]],8:[[0,2],[21,29]],9:[[0,2],[21,27]],23:[0,1,[22,29],31],25:[[0,4],[22,32]],26:[0,1,[21,28]],27:[0,1,[22,30]],28:[0,1,22,23],29:[0,1,[22,32]],31:[0,2,3,[22,24]],34:[0,[21,23]],33:[0,21,[23,25]],35:[0,[21,28]]},54:{0:[0],1:[[0,2],[21,27]],21:[0,[21,29],32,33],22:[0,[21,29],[31,33]],23:[0,1,[22,38]],24:[0,[21,31]],25:[0,[21,27]],26:[0,[21,27]]},61:{0:[0],1:[[0,4],[11,16],22,[24,26]],2:[[0,4],22],3:[[0,4],[21,24],[26,31]],4:[[0,4],[22,31],81],5:[[0,2],[21,28],81,82],6:[[0,2],[21,32]],7:[[0,2],[21,30]],8:[[0,2],[21,31]],9:[[0,2],[21,29]],10:[[0,2],[21,26]]},62:{0:[0],1:[[0,5],11,[21,23]],2:[0,1],3:[[0,2],21],4:[[0,3],[21,23]],5:[[0,3],[21,25]],6:[[0,2],[21,23]],7:[[0,2],[21,25]],8:[[0,2],[21,26]],9:[[0,2],[21,24],81,82],10:[[0,2],[21,27]],11:[[0,2],[21,26]],12:[[0,2],[21,28]],24:[0,21,[24,29]],26:[0,21,[23,30]],29:[0,1,[21,27]],30:[0,1,[21,27]]},63:{0:[0],1:[[0,5],[21,23]],2:[0,2,[21,25]],21:[0,[21,23],[26,28]],22:[0,[21,24]],23:[0,[21,24]],25:[0,[21,25]],26:[0,[21,26]],27:[0,1,[21,26]],28:[[0,2],[21,23]]},64:{0:[0],1:[0,1,[4,6],21,22,81],2:[[0,3],5,[21,23]],3:[[0,3],[21,24],81],4:[[0,2],[21,25]],5:[[0,2],21,22]},65:{0:[0],1:[[0,9],21],2:[[0,5]],21:[0,1,22,23],22:[0,1,22,23],23:[[0,3],[23,25],27,28],28:[0,1,[22,29]],29:[0,1,[22,29]],30:[0,1,[22,24]],31:[0,1,[21,31]],32:[0,1,[21,27]],40:[0,2,3,[21,28]],42:[[0,2],21,[23,26]],43:[0,1,[21,26]],90:[[0,4]],27:[[0,2],22,23]},71:{0:[0]},81:{0:[0]},82:{0:[0]}},i=parseInt(e.substr(0,2),10),r=parseInt(e.substr(2,2),10),n=parseInt(e.substr(4,2),10);if(!a[i]||!a[i][r])return!1;for(var s=!1,o=a[i][r],l=0;l<o.length;l++)
if(t.isArray(o[l])&&o[l][0]<=n&&n<=o[l][1]||!t.isArray(o[l])&&n===o[l]){s=!0;break}
if(!s)return!1;var d;d=18===e.length?e.substr(6,8):"19"+e.substr(6,6);var u=parseInt(d.substr(0,4),10),f=parseInt(d.substr(4,2),10),c=parseInt(d.substr(6,2),10);if(!FormValidation.Helper.date(u,f,c))return!1;if(18===e.length){var h=0,p=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];for(l=0;17>l;l++)h+=parseInt(e.charAt(l),10)*p[l];return h=(12-h%11)%11,("X"!==e.charAt(17).toUpperCase()?parseInt(e.charAt(17),10):10)===h}
return!0},_cz:function(t){if(!/^\d{9,10}$/.test(t))return!1;var e=1900+parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10)%50%20,i=parseInt(t.substr(4,2),10);if(9===t.length){if(e>=1980&&(e-=100),e>1953)return!1}else 1954>e&&(e+=100);if(!FormValidation.Helper.date(e,a,i))return!1;if(10===t.length){var r=parseInt(t.substr(0,9),10)%11;return 1985>e&&(r%=10),r+""===t.substr(9,1)}
return!0},_dk:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t))return!1;t=t.replace(/-/g,"");var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);switch(!0){case-1!=="5678".indexOf(t.charAt(6))&&i>=58:i+=1800;break;case-1!=="0123".indexOf(t.charAt(6)):case-1!=="49".indexOf(t.charAt(6))&&i>=37:i+=1900;break;default:i+=2e3}
return FormValidation.Helper.date(i,a,e)},_ee:function(t){return this._lt(t)},_es:function(t){var e=/^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),a=/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),i=/^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(t);if(!e&&!a&&!i)return!1;t=t.replace(/-/g,"");var r,n,s=!0;if(e||a){n="DNI";var o="XYZ".indexOf(t.charAt(0));return-1!==o&&(t=o+t.substr(1)+"",n="NIE"),r=parseInt(t.substr(0,8),10),r="TRWAGMYFPDXBNJZSQVHLCKE"[r%23],{valid:r===t.substr(8,1),type:n}}
r=t.substr(1,7),n="CIF";for(var l=t[0],d=t.substr(-1),u=0,f=0;f<r.length;f++)
if(f%2!=0)u+=parseInt(r[f],10);else{var c=""+2*parseInt(r[f],10);u+=parseInt(c[0],10),2===c.length&&(u+=parseInt(c[1],10))}
var h=u-10*Math.floor(u/10);return 0!==h&&(h=10-h),s=-1!=="KQS".indexOf(l)?d==="JABCDEFGHI"[h]:-1!=="ABEH".indexOf(l)?d===""+h:d===""+h||d==="JABCDEFGHI"[h],{valid:s,type:n}},_fi:function(t){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(t))return!1;var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(i={"+":1800,"-":1900,A:2e3}[t.charAt(6)]+i,!FormValidation.Helper.date(i,a,e))return!1;if(2>parseInt(t.substr(7,3),10))return!1;var r=t.substr(0,6)+t.substr(7,3)+"";return r=parseInt(r,10),"0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(r%31)===t.charAt(10)},_hr:function(t){return!!/^[0-9]{11}$/.test(t)&&FormValidation.Helper.mod11And10(t)},_ie:function(t){if(!/^\d{7}[A-W][AHWTX]?$/.test(t))return!1;var e=function(t){for(;t.length<7;)t="0"+t;for(var e="WABCDEFGHIJKLMNOPQRSTUV",a=0,i=0;7>i;i++)a+=parseInt(t.charAt(i),10)*(8-i);return a+=9*e.indexOf(t.substr(7)),e[a%23]};return 9!==t.length||"A"!==t.charAt(8)&&"H"!==t.charAt(8)?t.charAt(7)===e(t.substr(0,7)):t.charAt(7)===e(t.substr(0,7)+t.substr(8)+"")},_is:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t))return!1;t=t.replace(/-/g,"");var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10),r=parseInt(t.charAt(9),10);if(i=9===r?1900+i:100*(20+r)+i,!FormValidation.Helper.date(i,a,e,!0))return!1;for(var n=0,s=[3,2,7,6,5,4,3,2],o=0;8>o;o++)n+=parseInt(t.charAt(o),10)*s[o];return(n=11-n%11)+""===t.charAt(8)},_lt:function(t){if(!/^[0-9]{11}$/.test(t))return!1;var e=parseInt(t.charAt(0),10),a=parseInt(t.substr(1,2),10),i=parseInt(t.substr(3,2),10),r=parseInt(t.substr(5,2),10);if(a=100*(e%2==0?17+e/2:17+(e+1)/2)+a,!FormValidation.Helper.date(a,i,r,!0))return!1;for(var n=0,s=[1,2,3,4,5,6,7,8,9,1],o=0;10>o;o++)n+=parseInt(t.charAt(o),10)*s[o];if(10!==(n%=11))return n+""===t.charAt(10);for(n=0,s=[3,4,5,6,7,8,9,1,2,3],o=0;10>o;o++)n+=parseInt(t.charAt(o),10)*s[o];return 10===(n%=11)&&(n=0),n+""===t.charAt(10)},_lv:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(t))return!1;t=t.replace(/\D/g,"");var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(i=i+1800+100*parseInt(t.charAt(6),10),!FormValidation.Helper.date(i,a,e,!0))return!1;for(var r=0,n=[10,5,8,4,2,1,6,3,7,9],s=0;10>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return(r=(r+1)%11%10)+""===t.charAt(10)},_nl:function(t){if(t.length<8)return!1;if(8===t.length&&(t="0"+t),!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))return!1;if(t=t.replace(/\./g,""),0===parseInt(t,10))return!1;for(var e=0,a=t.length,i=0;a-1>i;i++)e+=(9-i)*parseInt(t.charAt(i),10);return 10===(e%=11)&&(e=0),e+""===t.charAt(a-1)},_pl:function(t){if(!/^[0-9]{11}$/.test(t))return!1;for(var e=0,a=t.length,i=[1,3,7,9,1,3,7,9,1,3,7],r=0;a-1>r;r++)e+=i[r]*parseInt(t.charAt(r),10);return 0===(e%=10)&&(e=10),(e=10-e)+""===t.charAt(a-1)},_ro:function(t){if(!/^[0-9]{13}$/.test(t))return!1;var e=parseInt(t.charAt(0),10);if(0===e||7===e||8===e)return!1;var a=parseInt(t.substr(1,2),10),i=parseInt(t.substr(3,2),10),r=parseInt(t.substr(5,2),10),n={1:1900,2:1900,3:1800,4:1800,5:2e3,6:2e3};if(r>31&&i>12)return!1;if(9!==e&&(a=n[e+""]+a,!FormValidation.Helper.date(a,i,r)))return!1;for(var s=0,o=[2,7,9,1,4,6,3,5,8,2,7,9],l=t.length,d=0;l-1>d;d++)s+=parseInt(t.charAt(d),10)*o[d];return 10===(s%=11)&&(s=1),s+""===t.charAt(l-1)},_se:function(t){if(!/^[0-9]{10}$/.test(t)&&!/^[0-9]{6}[-|+][0-9]{4}$/.test(t))return!1;t=t.replace(/[^0-9]/g,"");var e=parseInt(t.substr(0,2),10)+1900,a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);return!!FormValidation.Helper.date(e,a,i)&&FormValidation.Helper.luhn(t)},_sk:function(t){return this._cz(t)},_sm:function(t){return/^\d{5}$/.test(t)},_th:function(t){if(13!==t.length)return!1;for(var e=0,a=0;12>a;a++)e+=parseInt(t.charAt(a),10)*(13-a);return(11-e%11)%10===parseInt(t.charAt(12),10)},_tr:function(t){if(11!==t.length)return!1;for(var e=0,a=0;10>a;a++)e+=parseInt(t.charAt(a),10);return e%10===parseInt(t.charAt(10),10)},_za:function(t){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(t))return!1;var e=parseInt(t.substr(0,2),10),a=(new Date).getFullYear()%100,i=parseInt(t.substr(2,2),10),r=parseInt(t.substr(4,2),10);return e=e>=a?e+1900:e+2e3,!!FormValidation.Helper.date(e,i,r)&&FormValidation.Helper.luhn(t)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{identical:{default:"Please enter the same value"}}}),FormValidation.Validator.identical={html5Attributes:{message:"message",field:"field"},init:function(t,e,a,i){var r=t.getFieldElements(a.field);t.onLiveChange(r,"live_"+i,function(){t.getStatus(e,i)!==t.STATUS_NOT_VALIDATED&&t.revalidateField(e)})},destroy:function(t,e,a,i){var r=t.getFieldElements(a.field);t.offLiveChange(r,"live_"+i)},validate:function(t,e,a,i){var r=t.getFieldValue(e,i),n=t.getFieldElements(a.field);return null===n||0===n.length||!n.val()||!e.val()||r===t.getFieldValue(n,i)&&(t.updateStatus(n,t.STATUS_VALID,i),!0)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{imei:{default:"Please enter a valid IMEI number"}}}),FormValidation.Validator.imei={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;switch(!0){case/^\d{15}$/.test(r):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(r):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(r):return r=r.replace(/[^0-9]/g,""),FormValidation.Helper.luhn(r);case/^\d{14}$/.test(r):case/^\d{16}$/.test(r):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(r):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(r):return!0;default:return!1}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{imo:{default:"Please enter a valid IMO number"}}}),FormValidation.Validator.imo={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^IMO \d{7}$/i.test(r))return!1;for(var n=0,s=r.replace(/^.*(\d{7})$/,"$1"),o=6;o>=1;o--)n+=s.slice(6-o,-o)*(o+1);return n%10===parseInt(s.charAt(6),10)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{integer:{default:"Please enter a valid number"}}}),FormValidation.Validator.integer={html5Attributes:{message:"message",thousandsseparator:"thousandsSeparator",decimalseparator:"decimalSeparator"},enableByHtml5:function(t){return"number"===t.attr("type")&&(void 0===t.attr("step")||t.attr("step")%1==0)},validate:function(t,e,a,i){if(this.enableByHtml5(e)&&e.get(0).validity&&!0===e.get(0).validity.badInput)return!1;var r=t.getFieldValue(e,i);if(""===r)return!0;var n=a.decimalSeparator||".",s=a.thousandsSeparator||"";n="."===n?"\\.":n,s="."===s?"\\.":s;var o=new RegExp("^-?[0-9]{1,3}("+s+"[0-9]{3})*("+n+"[0-9]+)?$"),l=new RegExp(s,"g");return!!o.test(r)&&(s&&(r=r.replace(l,"")),n&&(r=r.replace(n,".")),!(isNaN(r)||!isFinite(r))&&(r=parseFloat(r),Math.floor(r)===r))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ip:{default:"Please enter a valid IP address",ipv4:"Please enter a valid IPv4 address",ipv6:"Please enter a valid IPv6 address"}}}),FormValidation.Validator.ip={html5Attributes:{message:"message",ipv4:"ipv4",ipv6:"ipv6"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;i=t.extend({},{ipv4:!0,ipv6:!0},i);var s,o=e.getLocale(),l=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,d=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/,u=!1;switch(!0){case i.ipv4&&!i.ipv6:u=l.test(n),s=i.message||FormValidation.I18n[o].ip.ipv4;break;case!i.ipv4&&i.ipv6:u=d.test(n),s=i.message||FormValidation.I18n[o].ip.ipv6;break;case i.ipv4&&i.ipv6:default:u=l.test(n)||d.test(n),s=i.message||FormValidation.I18n[o].ip.default}
return{valid:u,message:s}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{isbn:{default:"Please enter a valid ISBN number"}}}),FormValidation.Validator.isbn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n;switch(!0){case/^\d{9}[\dX]$/.test(r):case 13===r.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):case 13===r.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):n="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(r):case 17===r.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):case 17===r.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):n="ISBN13";break;default:return!1}
var s,o,l=(r=r.replace(/[^0-9X]/gi,"")).split(""),d=l.length,u=0;switch(n){case"ISBN10":for(u=0,s=0;d-1>s;s++)u+=parseInt(l[s],10)*(10-s);return o=11-u%11,11===o?o=0:10===o&&(o="X"),{type:n,valid:o+""===l[d-1]};case"ISBN13":for(u=0,s=0;d-1>s;s++)u+=s%2==0?parseInt(l[s],10):3*parseInt(l[s],10);return 10===(o=10-u%10)&&(o="0"),{type:n,valid:o+""===l[d-1]};default:return!1}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{isin:{default:"Please enter a valid ISIN number"}}}),FormValidation.Validator.isin={COUNTRY_CODES:"AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(r=r.toUpperCase(),!new RegExp("^("+this.COUNTRY_CODES+")[0-9A-Z]{10}$").test(r))return!1;for(var n="",s=r.length,o=0;s-1>o;o++){var l=r.charCodeAt(o);n+=l>57?(l-55).toString():r.charAt(o)}
var d="",u=n.length,f=u%2!=0?0:1;for(o=0;u>o;o++)d+=parseInt(n[o],10)*(o%2===f?2:1)+"";var c=0;for(o=0;o<d.length;o++)c+=parseInt(d.charAt(o),10);return(c=(10-c%10)%10)+""===r.charAt(s-1)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ismn:{default:"Please enter a valid ISMN number"}}}),FormValidation.Validator.ismn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n;switch(!0){case/^M\d{9}$/.test(r):case/^M-\d{4}-\d{4}-\d{1}$/.test(r):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(r):n="ISMN10";break;case/^9790\d{9}$/.test(r):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(r):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(r):n="ISMN13";break;default:return!1}"ISMN10"===n&&(r="9790"+r.substr(1));for(var s=(r=r.replace(/[^0-9]/gi,"")).length,o=0,l=[1,3],d=0;s-1>d;d++)o+=parseInt(r.charAt(d),10)*l[d%2];return o=10-o%10,{type:n,valid:o+""===r.charAt(s-1)}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{issn:{default:"Please enter a valid ISSN number"}}}),FormValidation.Validator.issn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^\d{4}\-\d{3}[\dX]$/.test(r))return!1;var n=(r=r.replace(/[^0-9X]/gi,"")).split(""),s=n.length,o=0;"X"===n[7]&&(n[7]=10);for(var l=0;s>l;l++)o+=parseInt(n[l],10)*(8-l);return o%11==0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{lessThan:{default:"Please enter a value less than or equal to %s",notInclusive:"Please enter a value less than %s"}}}),FormValidation.Validator.lessThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(t){var e=t.attr("type"),a=t.attr("max");return!(!a||"date"===e)&&{value:a}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=this._format(n);var s=e.getLocale(),o=t.isNumeric(i.value)?i.value:e.getDynamicOption(a,i.value),l=this._format(o);return!0===i.inclusive||void 0===i.inclusive?{valid:t.isNumeric(n)&&parseFloat(n)<=l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].lessThan.default,o)}:{valid:t.isNumeric(n)&&parseFloat(n)<l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].lessThan.notInclusive,o)}},_format:function(t){return(t+"").replace(",",".")}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{mac:{default:"Please enter a valid MAC address"}}}),FormValidation.Validator.mac={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(r)||/^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(r))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{meid:{default:"Please enter a valid MEID number"}}}),FormValidation.Validator.meid={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;switch(!0){case/^[0-9A-F]{15}$/i.test(r):case/^[0-9A-F]{2}[-][0-9A-F]{6}[-][0-9A-F]{6}[-][0-9A-F]$/i.test(r):case/^\d{19}$/.test(r):case/^\d{5}[-]\d{5}[-]\d{4}[-]\d{4}[-]\d$/.test(r):var n=r.charAt(r.length-1);if((r=r.replace(/[- ]/g,"")).match(/^\d*$/i))return FormValidation.Helper.luhn(r);r=r.slice(0,-1);for(var s="",o=1;13>=o;o+=2)s+=(2*parseInt(r.charAt(o),16)).toString(16);var l=0;for(o=0;o<s.length;o++)l+=parseInt(s.charAt(o),16);return l%10==0?"0"===n:n===(2*(10*Math.floor((l+10)/10)-l)).toString(16);case/^[0-9A-F]{14}$/i.test(r):case/^[0-9A-F]{2}[-][0-9A-F]{6}[-][0-9A-F]{6}$/i.test(r):case/^\d{18}$/.test(r):case/^\d{5}[-]\d{5}[-]\d{4}[-]\d{4}$/.test(r):return!0;default:return!1}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{notEmpty:{default:"Please enter a value"}}}),FormValidation.Validator.notEmpty={enableByHtml5:function(t){var e=t.attr("required")+"";return"required"===e||"true"===e},validate:function(e,a,i,r){var n=a.attr("type");if("radio"===n||"checkbox"===n){var s=e.getNamespace();return e.getFieldElements(a.attr("data-"+s+"-field")).filter(":checked").length>0}
if("number"===n&&a.get(0).validity&&!0===a.get(0).validity.badInput)return!0;var o=e.getFieldValue(a,r);return""!==t.trim(o)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{numeric:{default:"Please enter a valid float number"}}}),FormValidation.Validator.numeric={html5Attributes:{message:"message",separator:"separator",thousandsseparator:"thousandsSeparator",decimalseparator:"decimalSeparator"},enableByHtml5:function(t){return"number"===t.attr("type")&&void 0!==t.attr("step")&&t.attr("step")%1!=0},validate:function(t,e,a,i){if(this.enableByHtml5(e)&&e.get(0).validity&&!0===e.get(0).validity.badInput)return!1;var r=t.getFieldValue(e,i);if(""===r)return!0;var n=a.separator||a.decimalSeparator||".",s=a.thousandsSeparator||"";r.substr(0,1)===n?r="0"+n+r.substr(1):r.substr(0,2)==="-"+n&&(r="-0"+n+r.substr(2)),n="."===n?"\\.":n,s="."===s?"\\.":s;var o=new RegExp("^-?[0-9]{1,3}("+s+"[0-9]{3})*("+n+"[0-9]+)?$"),l=new RegExp(s,"g");return!!o.test(r)&&(s&&(r=r.replace(l,"")),n&&(r=r.replace(n,".")),!isNaN(parseFloat(r))&&isFinite(r))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{phone:{default:'请输入有效的电话号码',country:'请输入有效的 %s 国家或地区的电话号码',countries:{AE:'阿联酋',BG:'保加利亚',BR:'巴西',CN:'中国',CZ:'捷克共和国',DE:'德国',DK:'丹麦',ES:'西班牙',FR:'法国',GB:'英国',IN:'印度',MA:'摩洛哥',NL:'荷兰',PK:'巴基斯坦',RO:'罗马尼亚',RU:'俄罗斯',SK:'斯洛伐克',TH:'泰国',US:'美国',VE:'委内瑞拉'}}}}),FormValidation.Validator.phone={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AE","BG","BR","CN","CZ","DE","DK","ES","FR","GB","IN","MA","NL","PK","RO","RU","SK","TH","US","VE"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s=e.getLocale(),o=i.country||'';var l=!0;switch(o.toUpperCase()){case"AE":n=t.trim(n),l=/^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(n);break;case"BG":n=n.replace(/\+|\s|-|\/|\(|\)/gi,""),l=/^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(n);break;case"BR":n=t.trim(n),l=/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(n);break;case"CN":n=t.trim(n),l=/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(n);break;case"CZ":l=/^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(n);break;case"DE":n=t.trim(n),l=/^(((((((00|\+)49[ \-\/]?)|0)[1-9][0-9]{1,4})[\-\/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[\-\/]?))[0-9]{1,7}([\-\/]?[0-9]{1,5})?)$/.test(n);break;case"DK":n=t.trim(n),l=/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(n);break;case"ES":n=t.trim(n),l=/^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(n);break;case"FR":n=t.trim(n),l=/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(n);break;case"GB":n=t.trim(n),l=/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(n);break;case"IN":n=t.trim(n),l=/((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(n);break;case"MA":n=t.trim(n),l=/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(n);break;case"NL":n=t.trim(n),l=/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(n);break;case"PK":n=t.trim(n),l=/^0?3[0-9]{2}[0-9]{7}$/.test(n);break;case"RO":l=/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(n);break;case"RU":l=/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(n);break;case"SK":l=/^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(n);break;case"TH":l=/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(n);break;case"VE":n=t.trim(n),l=/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(n);break;case"US":default:l=/^\s*\+?\s*(\(\s*\d+\s*\)|\d+)(\s*-?\s*(\(\s*\d+\s*\)|\s*\d+\s*))*\s*$/.test(n)}return{valid:l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].phone.country,FormValidation.I18n[s].phone.countries[o])}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{promise:{default:"Please enter a valid value"}}}),FormValidation.Validator.promise={priority:999,html5Attributes:{message:"message",promise:"promise"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r),s=new t.Deferred;return FormValidation.Helper.call(i.promise,[n,e,a]).done(function(t){s.resolve(a,r,t)}).fail(function(t){(t=t||{}).valid=!1,s.resolve(a,r,t)}),s}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{regexp:{default:"Please enter a value matching the pattern"}}}),FormValidation.Validator.regexp={html5Attributes:{message:"message",flags:"flags",regexp:"regexp"},enableByHtml5:function(t){var e=t.attr("pattern");return!!e&&{regexp:e}},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||("string"==typeof a.regexp?a.flags?new RegExp(a.regexp,a.flags):new RegExp(a.regexp):a.regexp).test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{remote:{default:"Please enter a valid value"}}}),FormValidation.Validator.remote={priority:1e3,html5Attributes:{async:"async",crossdomain:"crossDomain",data:"data",datatype:"dataType",delay:"delay",message:"message",name:"name",type:"type",url:"url",validkey:"validKey"},destroy:function(t,e,a,i){var r=t.getNamespace(),n=e.data(r+"."+i+".timer");n&&(clearTimeout(n),e.removeData(r+"."+i+".timer"))},validate:function(e,a,i,r){function n(){var e=t.ajax(h);return e.success(function(t){t.valid=!0===t[c]||"true"===t[c]||!1!==t[c]&&"false"!==t[c]&&null,l.resolve(a,r,t)}).error(function(t){l.resolve(a,r,{valid:!1})}),l.fail(function(){e.abort()}),l}
var s=e.getNamespace(),o=e.getFieldValue(a,r),l=new t.Deferred;if(""===o)return l.resolve(a,r,{valid:!0}),l;var d=a.attr("data-"+s+"-field"),u=i.data||{},f=i.url,c=i.validKey||"valid";"function"==typeof u&&(u=u.call(this,e,a,o)),"string"==typeof u&&(u=JSON.parse(u)),"function"==typeof f&&(f=f.call(this,e,a,o)),u[i.name||d]=o;var h={async:null===i.async||!0===i.async||"true"===i.async,data:u,dataType:i.dataType||"json",headers:i.headers||{},type:i.type||"GET",url:f};return null!==i.crossDomain&&(h.crossDomain=!0===i.crossDomain||"true"===i.crossDomain),i.delay?(a.data(s+"."+r+".timer")&&clearTimeout(a.data(s+"."+r+".timer")),a.data(s+"."+r+".timer",setTimeout(n,i.delay)),l):n()}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{rtn:{default:"Please enter a valid RTN number"}}}),FormValidation.Validator.rtn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^\d{9}$/.test(r))return!1;for(var n=0,s=0;s<r.length;s+=3)n+=3*parseInt(r.charAt(s),10)+7*parseInt(r.charAt(s+1),10)+parseInt(r.charAt(s+2),10);return 0!==n&&n%10==0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{sedol:{default:"Please enter a valid SEDOL number"}}}),FormValidation.Validator.sedol={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(r=r.toUpperCase(),!/^[0-9A-Z]{7}$/.test(r))return!1;for(var n=0,s=[1,3,1,7,3,9,1],o=r.length,l=0;o-1>l;l++)n+=s[l]*parseInt(r.charAt(l),36);return(n=(10-n%10)%10)+""===r.charAt(o-1)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{siren:{default:"Please enter a valid SIREN number"}}}),FormValidation.Validator.siren={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||!!/^\d{9}$/.test(r)&&FormValidation.Helper.luhn(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{siret:{default:"Please enter a valid SIRET number"}}}),FormValidation.Validator.siret={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;for(var n,s=0,o=r.length,l=0;o>l;l++)n=parseInt(r.charAt(l),10),l%2==0&&(n*=2)>9&&(n-=9),s+=n;return s%10==0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{step:{default:"Please enter a valid step of %s"}}}),FormValidation.Validator.step={html5Attributes:{message:"message",base:"baseValue",step:"step"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(i=t.extend({},{baseValue:0,step:1},i),n=parseFloat(n),!t.isNumeric(n))return!1;var s=function(t,e){var a=Math.pow(10,e),i=(t*=a)>0|-(0>t);return t%1==.5*i?(Math.floor(t)+(i>0))/a:Math.round(t)/a},o=e.getLocale(),l=function(t,e){if(0===e)return 1;var a=(t+"").split("."),i=(e+"").split("."),r=(1===a.length?0:a[1].length)+(1===i.length?0:i[1].length);return s(t-e*Math.floor(t/e),r)}(n-i.baseValue,i.step);return{valid:0===l||l===i.step,message:FormValidation.Helper.format(i.message||FormValidation.I18n[o].step.default,[i.step])}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{stringCase:{default:"Please enter only lowercase characters",upper:"Please enter only uppercase characters"}}}),FormValidation.Validator.stringCase={html5Attributes:{message:"message",case:"case"},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=t.getLocale(),s=(a.case||"lower").toLowerCase();return{valid:"upper"===s?r===r.toUpperCase():r===r.toLowerCase(),message:a.message||("upper"===s?FormValidation.I18n[n].stringCase.upper:FormValidation.I18n[n].stringCase.default)}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{stringLength:{default:"Please enter a value with valid length",less:"Please enter less than %s characters",more:"Please enter more than %s characters",between:"Please enter value between %s and %s characters long"}}}),FormValidation.Validator.stringLength={html5Attributes:{message:"message",min:"min",max:"max",trim:"trim",utf8bytes:"utf8Bytes"},enableByHtml5:function(e){var a={},i=e.attr("maxlength"),r=e.attr("minlength");return i&&(a.max=parseInt(i,10)),r&&(a.min=parseInt(r,10)),!t.isEmptyObject(a)&&a},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if((!0===i.trim||"true"===i.trim)&&(n=t.trim(n)),""===n)return!0;var s=e.getLocale(),o=t.isNumeric(i.min)?i.min:e.getDynamicOption(a,i.min),l=t.isNumeric(i.max)?i.max:e.getDynamicOption(a,i.max),d=i.utf8Bytes?function(t){for(var e=t.length,a=t.length-1;a>=0;a--){var i=t.charCodeAt(a);i>127&&2047>=i?e++:i>2047&&65535>=i&&(e+=2),i>=56320&&57343>=i&&a--}
return e}(n):n.length,u=!0,f=i.message||FormValidation.I18n[s].stringLength.default;switch((o&&d<parseInt(o,10)||l&&d>parseInt(l,10))&&(u=!1),!0){case!!o&&!!l:f=FormValidation.Helper.format(i.message||FormValidation.I18n[s].stringLength.between,[parseInt(o,10),parseInt(l,10)]);break;case!!o:f=FormValidation.Helper.format(i.message||FormValidation.I18n[s].stringLength.more,parseInt(o,10)-1);break;case!!l:f=FormValidation.Helper.format(i.message||FormValidation.I18n[s].stringLength.less,parseInt(l,10)+1)}
return{valid:u,message:f}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{uri:{default:"Please enter a valid URI"}}}),FormValidation.Validator.uri={html5Attributes:{message:"message",allowlocal:"allowLocal",allowemptyprotocol:"allowEmptyProtocol",protocol:"protocol"},enableByHtml5:function(t){return"url"===t.attr("type")},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=!0===a.allowLocal||"true"===a.allowLocal,s=!0===a.allowEmptyProtocol||"true"===a.allowEmptyProtocol,o=(a.protocol||"http, https, ftp").split(",").join("|").replace(/\s/g,"");return new RegExp("^(?:(?:"+o+")://)"+(s?"?":"")+"(?:\\S+(?::\\S*)?@)?(?:"+(n?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(n?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{uuid:{default:"Please enter a valid UUID number",version:"Please enter a valid UUID version %s number"}}}),FormValidation.Validator.uuid={html5Attributes:{message:"message",version:"version"},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=t.getLocale(),s={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},o=a.version?a.version+"":"all";return{valid:null===s[o]||s[o].test(r),message:a.version?FormValidation.Helper.format(a.message||FormValidation.I18n[n].uuid.version,a.version):a.message||FormValidation.I18n[n].uuid.default}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{vat:{default:"Please enter a valid VAT number",country:"Please enter a valid VAT number in %s",countries:{AT:"Austria",BE:"Belgium",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",FR:"France",GB:"United Kingdom",GR:"Greek",EL:"Greek",HU:"Hungary",HR:"Croatia",IE:"Ireland",IS:"Iceland",IT:"Italy",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MT:"Malta",NL:"Netherlands",NO:"Norway",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russia",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",VE:"Venezuela",ZA:"South Africa"}}}}),FormValidation.Validator.vat={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BE","BG","BR","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LT","LU","LV","MT","NL","NO","PL","PT","RO","RU","RS","SE","SK","SI","VE","ZA"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s=e.getLocale(),o=i.country;if(o?("string"!=typeof o||-1===t.inArray(o.toUpperCase(),this.COUNTRY_CODES))&&(o=e.getDynamicOption(a,o)):o=n.substr(0,2),-1===t.inArray(o,this.COUNTRY_CODES))return!0;var l=this[["_",o.toLowerCase()].join("")](n);return l=!0===l||!1===l?{valid:l}:l,l.message=FormValidation.Helper.format(i.message||FormValidation.I18n[s].vat.country,FormValidation.I18n[s].vat.countries[o.toUpperCase()]),l},_at:function(t){if(/^ATU[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^U[0-9]{8}$/.test(t))return!1;t=t.substr(1);for(var e=0,a=[1,2,1,2,1,2,1],i=0,r=0;7>r;r++)(i=parseInt(t.charAt(r),10)*a[r])>9&&(i=Math.floor(i/10)+i%10),e+=i;return 10===(e=10-(e+4)%10)&&(e=0),e+""===t.substr(7,1)},_be:function(t){return/^BE[0]{0,1}[0-9]{9}$/.test(t)&&(t=t.substr(2)),!!/^[0]{0,1}[0-9]{9}$/.test(t)&&(9===t.length&&(t="0"+t),"0"!==t.substr(1,1)&&(parseInt(t.substr(0,8),10)+parseInt(t.substr(8,2),10))%97==0)},_bg:function(t){if(/^BG[0-9]{9,10}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9,10}$/.test(t))return!1;var e=0,a=0;if(9===t.length){for(a=0;8>a;a++)e+=parseInt(t.charAt(a),10)*(a+1);if(10===(e%=11))
for(e=0,a=0;8>a;a++)e+=parseInt(t.charAt(a),10)*(a+3);return(e%=10)+""===t.substr(8)}
if(10===t.length){return function(t){var e=parseInt(t.substr(0,2),10)+1900,a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(a>40?(e+=100,a-=40):a>20&&(e-=100,a-=20),!FormValidation.Helper.date(e,a,i))return!1;for(var r=0,n=[2,4,8,5,10,9,7,3,6],s=0;9>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return(r=r%11%10)+""===t.substr(9,1)}(t)||function(t){for(var e=0,a=[21,19,17,13,11,9,7,3,1],i=0;9>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e%=10)+""===t.substr(9,1)}(t)||function(t){for(var e=0,a=[4,3,2,7,6,5,4,3,2],i=0;9>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return 10!==(e=11-e%11)&&(11===e&&(e=0),e+""===t.substr(9,1))}(t)}
return!1},_br:function(t){if(""===t)return!0;var e=t.replace(/[^\d]+/g,"");if(""===e||14!==e.length)return!1;if("00000000000000"===e||"11111111111111"===e||"22222222222222"===e||"33333333333333"===e||"44444444444444"===e||"55555555555555"===e||"66666666666666"===e||"77777777777777"===e||"88888888888888"===e||"99999999999999"===e)return!1;for(var a=e.length-2,i=e.substring(0,a),r=e.substring(a),n=0,s=a-7,o=a;o>=1;o--)n+=parseInt(i.charAt(a-o),10)*s--,2>s&&(s=9);var l=2>n%11?0:11-n%11;if(l!==parseInt(r.charAt(0),10))return!1;for(a+=1,i=e.substring(0,a),n=0,s=a-7,o=a;o>=1;o--)n+=parseInt(i.charAt(a-o),10)*s--,2>s&&(s=9);return(l=2>n%11?0:11-n%11)===parseInt(r.charAt(1),10)},_ch:function(t){if(/^CHE[0-9]{9}(MWST)?$/.test(t)&&(t=t.substr(2)),!/^E[0-9]{9}(MWST)?$/.test(t))return!1;t=t.substr(1);for(var e=0,a=[5,4,3,2,7,6,5,4],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return 10!==(e=11-e%11)&&(11===e&&(e=0),e+""===t.substr(8,1))},_cy:function(t){if(/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t)&&(t=t.substr(2)),!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t))return!1;if("12"===t.substr(0,2))return!1;for(var e=0,a={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21},i=0;8>i;i++){var r=parseInt(t.charAt(i),10);i%2==0&&(r=a[r+""]),e+=r}
return(e="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e%26])+""===t.substr(8,1)},_cz:function(t){if(/^CZ[0-9]{8,10}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8,10}$/.test(t))return!1;var e=0,a=0;if(8===t.length){if(t.charAt(0)+""=="9")return!1;for(e=0,a=0;7>a;a++)e+=parseInt(t.charAt(a),10)*(8-a);return 10===(e=11-e%11)&&(e=0),11===e&&(e=1),e+""===t.substr(7,1)}
if(9===t.length&&t.charAt(0)+""=="6"){for(e=0,a=0;7>a;a++)e+=parseInt(t.charAt(a+1),10)*(8-a);return 10===(e=11-e%11)&&(e=0),11===e&&(e=1),(e=[8,7,6,5,4,3,2,1,0,9,10][e-1])+""===t.substr(8,1)}
if(9===t.length||10===t.length){var i=1900+parseInt(t.substr(0,2),10),r=parseInt(t.substr(2,2),10)%50%20,n=parseInt(t.substr(4,2),10);if(9===t.length){if(i>=1980&&(i-=100),i>1953)return!1}else 1954>i&&(i+=100);if(!FormValidation.Helper.date(i,r,n))return!1;if(10===t.length){var s=parseInt(t.substr(0,9),10)%11;return 1985>i&&(s%=10),s+""===t.substr(9,1)}
return!0}
return!1},_de:function(t){return/^DE[0-9]{9}$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{9}$/.test(t)&&FormValidation.Helper.mod11And10(t)},_dk:function(t){if(/^DK[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[2,7,6,5,4,3,2,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%11==0},_ee:function(t){if(/^EE[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=0,a=[3,7,1,3,7,1,3,7,1],i=0;9>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%10==0},_es:function(t){if(/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)&&(t=t.substr(2)),!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t))return!1;var e=t.charAt(0);return/^[0-9]$/.test(e)?{valid:function(t){var e=parseInt(t.substr(0,8),10);return(e="TRWAGMYFPDXBNJZSQVHLCKE"[e%23])+""===t.substr(8,1)}(t),type:"DNI"}:/^[XYZ]$/.test(e)?{valid:function(t){var e=["XYZ".indexOf(t.charAt(0)),t.substr(1)].join("");return e=parseInt(e,10),(e="TRWAGMYFPDXBNJZSQVHLCKE"[e%23])+""===t.substr(8,1)}(t),type:"NIE"}:{valid:function(t){var e,a=t.charAt(0);if(-1!=="KLM".indexOf(a))return e=parseInt(t.substr(1,8),10),(e="TRWAGMYFPDXBNJZSQVHLCKE"[e%23])+""===t.substr(8,1);if(-1!=="ABCDEFGHJNPQRSUVW".indexOf(a)){for(var i=0,r=[2,1,2,1,2,1,2],n=0,s=0;7>s;s++)(n=parseInt(t.charAt(s+1),10)*r[s])>9&&(n=Math.floor(n/10)+n%10),i+=n;return 10===(i=10-i%10)&&(i=0),i+""===t.substr(8,1)||"JABCDEFGHI"[i]===t.substr(8,1)}
return!1}(t),type:"CIF"}},_fi:function(t){if(/^FI[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[7,9,10,5,8,4,2,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%11==0},_fr:function(t){if(/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9A-Z]{2}[0-9]{9}$/.test(t))return!1;if(!FormValidation.Helper.luhn(t.substr(2)))return!1;if(/^[0-9]{2}$/.test(t.substr(0,2)))return t.substr(0,2)===parseInt(t.substr(2)+"12",10)%97+"";var e,a="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";return e=/^[0-9]{1}$/.test(t.charAt(0))?24*a.indexOf(t.charAt(0))+a.indexOf(t.charAt(1))-10:34*a.indexOf(t.charAt(0))+a.indexOf(t.charAt(1))-100,(parseInt(t.substr(2),10)+1+Math.floor(e/11))%11==e%11},_gb:function(t){if((/^GB[0-9]{9}$/.test(t)||/^GB[0-9]{12}$/.test(t)||/^GBGD[0-9]{3}$/.test(t)||/^GBHA[0-9]{3}$/.test(t)||/^GB(GD|HA)8888[0-9]{5}$/.test(t))&&(t=t.substr(2)),!(/^[0-9]{9}$/.test(t)||/^[0-9]{12}$/.test(t)||/^GD[0-9]{3}$/.test(t)||/^HA[0-9]{3}$/.test(t)||/^(GD|HA)8888[0-9]{5}$/.test(t)))return!1;var e=t.length;if(5===e){var a=t.substr(0,2),i=parseInt(t.substr(2),10);return"GD"===a&&500>i||"HA"===a&&i>=500}
if(11===e&&("GD8888"===t.substr(0,6)||"HA8888"===t.substr(0,6)))return!("GD"===t.substr(0,2)&&parseInt(t.substr(6,3),10)>=500||"HA"===t.substr(0,2)&&parseInt(t.substr(6,3),10)<500)&&parseInt(t.substr(6,3),10)%97===parseInt(t.substr(9,2),10);if(9===e||12===e){for(var r=0,n=[8,7,6,5,4,3,2,10,1],s=0;9>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return r%=97,parseInt(t.substr(0,3),10)>=100?0===r||42===r||55===r:0===r}
return!0},_gr:function(t){if(/^(GR|EL)[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;8===t.length&&(t="0"+t);for(var e=0,a=[256,128,64,32,16,8,4,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e=e%11%10)+""===t.substr(8,1)},_el:function(t){return this._gr(t)},_hu:function(t){if(/^HU[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[9,7,3,1,9,7,3,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%10==0},_hr:function(t){return/^HR[0-9]{11}$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{11}$/.test(t)&&FormValidation.Helper.mod11And10(t)},_ie:function(t){if(/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t))return!1;var e=function(t){for(;t.length<7;)t="0"+t;for(var e="WABCDEFGHIJKLMNOPQRSTUV",a=0,i=0;7>i;i++)a+=parseInt(t.charAt(i),10)*(8-i);return a+=9*e.indexOf(t.substr(7)),e[a%23]};return/^[0-9]+$/.test(t.substr(0,7))?t.charAt(7)===e(t.substr(0,7)+t.substr(8)+""):-1==="ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1))||t.charAt(7)===e(t.substr(2,5)+t.substr(0,1)+"")},_is:function(t){return/^IS[0-9]{5,6}$/.test(t)&&(t=t.substr(2)),/^[0-9]{5,6}$/.test(t)},_it:function(t){if(/^IT[0-9]{11}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{11}$/.test(t))return!1;if(0===parseInt(t.substr(0,7),10))return!1;var e=parseInt(t.substr(7,3),10);return!(1>e||e>201&&999!==e&&888!==e)&&FormValidation.Helper.luhn(t)},_lt:function(t){if(/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t)&&(t=t.substr(2)),!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t))return!1;var e,a=t.length,i=0;for(e=0;a-1>e;e++)i+=parseInt(t.charAt(e),10)*(1+e%9);var r=i%11;if(10===r)
for(i=0,e=0;a-1>e;e++)i+=parseInt(t.charAt(e),10)*(1+(e+2)%9);return(r=r%11%10)+""===t.charAt(a-1)},_lu:function(t){return/^LU[0-9]{8}$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{8}$/.test(t)&&parseInt(t.substr(0,6),10)%89+""===t.substr(6,2)},_lv:function(t){if(/^LV[0-9]{11}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{11}$/.test(t))return!1;var e,a=parseInt(t.charAt(0),10),i=0,r=[],n=t.length;if(a>3){for(i=0,r=[9,1,4,8,3,10,2,5,7,6,1],e=0;n>e;e++)i+=parseInt(t.charAt(e),10)*r[e];return 3===(i%=11)}
var s=parseInt(t.substr(0,2),10),o=parseInt(t.substr(2,2),10),l=parseInt(t.substr(4,2),10);if(l=l+1800+100*parseInt(t.charAt(6),10),!FormValidation.Helper.date(l,o,s))return!1;for(i=0,r=[10,5,8,4,2,1,6,3,7,9],e=0;n-1>e;e++)i+=parseInt(t.charAt(e),10)*r[e];return(i=(i+1)%11%10)+""===t.charAt(n-1)},_mt:function(t){if(/^MT[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[3,4,6,7,8,9,10,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%37==0},_nl:function(t){if(/^NL[0-9]{9}B[0-9]{2}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}B[0-9]{2}$/.test(t))return!1;for(var e=0,a=[9,8,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e%=11)>9&&(e=0),e+""===t.substr(8,1)},_no:function(t){if(/^NO[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=0,a=[3,2,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return 11===(e=11-e%11)&&(e=0),e+""===t.substr(8,1)},_pl:function(t){if(/^PL[0-9]{10}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{10}$/.test(t))return!1;for(var e=0,a=[6,5,7,2,3,4,5,6,7,-1],i=0;10>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%11==0},_pt:function(t){if(/^PT[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=0,a=[9,8,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e=11-e%11)>9&&(e=0),e+""===t.substr(8,1)},_ro:function(t){if(/^RO[1-9][0-9]{1,9}$/.test(t)&&(t=t.substr(2)),!/^[1-9][0-9]{1,9}$/.test(t))return!1;for(var e=t.length,a=[7,5,3,2,1,7,5,3,2].slice(10-e),i=0,r=0;e-1>r;r++)i+=parseInt(t.charAt(r),10)*a[r];return(i=10*i%11%10)+""===t.substr(e-1,1)},_ru:function(t){if(/^RU([0-9]{10}|[0-9]{12})$/.test(t)&&(t=t.substr(2)),!/^([0-9]{10}|[0-9]{12})$/.test(t))return!1;var e=0;if(10===t.length){var a=0,i=[2,4,10,3,5,9,4,6,8,0];for(e=0;10>e;e++)a+=parseInt(t.charAt(e),10)*i[e];return(a%=11)>9&&(a%=10),a+""===t.substr(9,1)}
if(12===t.length){var r=0,n=[7,2,4,10,3,5,9,4,6,8,0],s=0,o=[3,7,2,4,10,3,5,9,4,6,8,0];for(e=0;11>e;e++)r+=parseInt(t.charAt(e),10)*n[e],s+=parseInt(t.charAt(e),10)*o[e];return(r%=11)>9&&(r%=10),(s%=11)>9&&(s%=10),r+""===t.substr(10,1)&&s+""===t.substr(11,1)}
return!1},_rs:function(t){if(/^RS[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=10,a=0,i=0;8>i;i++)0===(a=(parseInt(t.charAt(i),10)+e)%10)&&(a=10),e=2*a%11;return(e+parseInt(t.substr(8,1),10))%10==1},_se:function(t){return/^SE[0-9]{10}01$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{10}01$/.test(t)&&(t=t.substr(0,10),FormValidation.Helper.luhn(t))},_si:function(t){var e=t.match(/^(SI)?([1-9][0-9]{7})$/);if(!e)return!1;e[1]&&(t=t.substr(2));for(var a=0,i=[8,7,6,5,4,3,2],r=0;7>r;r++)a+=parseInt(t.charAt(r),10)*i[r];return 10===(a=11-a%11)&&(a=0),a+""===t.substr(7,1)},_sk:function(t){return/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)&&(t=t.substr(2)),!!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)&&parseInt(t,10)%11==0},_ve:function(t){if(/^VE[VEJPG][0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[VEJPG][0-9]{9}$/.test(t))return!1;for(var e={V:4,E:8,J:12,P:16,G:20}[t.charAt(0)],a=[3,2,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i+1),10)*a[i];return(11===(e=11-e%11)||10===e)&&(e=0),e+""===t.substr(9,1)},_za:function(t){return/^ZA4[0-9]{9}$/.test(t)&&(t=t.substr(2)),/^4[0-9]{9}$/.test(t)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{vin:{default:"Please enter a valid VIN number"}}}),FormValidation.Validator.vin={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(r))return!1;for(var n={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},s=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],o=0,l=(r=r.toUpperCase()).length,d=0;l>d;d++)o+=n[r.charAt(d)+""]*s[d];var u=o%11;return 10===u&&(u="X"),u+""===r.charAt(8)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{zipCode:{default:"Please enter a valid postal code",country:"Please enter a valid postal code in %s",countries:{AT:"Austria",BG:"Bulgaria",BR:"Brazil",CA:"Canada",CH:"Switzerland",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",ES:"Spain",FR:"France",GB:"United Kingdom",IE:"Ireland",IN:"India",IT:"Italy",MA:"Morocco",NL:"Netherlands",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russia",SE:"Sweden",SG:"Singapore",SK:"Slovakia",US:"USA"}}}}),FormValidation.Validator.zipCode={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BG","BR","CA","CH","CZ","DE","DK","ES","FR","GB","IE","IN","IT","MA","NL","PL","PT","RO","RU","SE","SG","SK","US"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n||!i.country)return!0;var s=e.getLocale(),o=i.country;if(("string"!=typeof o||-1===t.inArray(o,this.COUNTRY_CODES))&&(o=e.getDynamicOption(a,o)),!o||-1===t.inArray(o.toUpperCase(),this.COUNTRY_CODES))return!0;var l=!1;switch(o=o.toUpperCase()){case"AT":l=/^([1-9]{1})(\d{3})$/.test(n);break;case"BG":l=/^([1-9]{1}[0-9]{3})$/.test(t.trim(n));break;case"BR":l=/^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(n);break;case"CA":l=/^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(n);break;case"CH":l=/^([1-9]{1})(\d{3})$/.test(n);break;case"CZ":l=/^(\d{3})([ ]?)(\d{2})$/.test(n);break;case"DE":l=/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(n);break;case"DK":l=/^(DK(-|\s)?)?\d{4}$/i.test(n);break;case"ES":l=/^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(n);break;case"FR":l=/^[0-9]{5}$/i.test(n);break;case"GB":l=this._gb(n);break;case"IN":l=/^\d{3}\s?\d{3}$/.test(n);break;case"IE":l=/^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(n);break;case"IT":l=/^(I-|IT-)?\d{5}$/i.test(n);break;case"MA":l=/^[1-9][0-9]{4}$/i.test(n);break;case"NL":l=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(n);break;case"PL":l=/^[0-9]{2}\-[0-9]{3}$/.test(n);break;case"PT":l=/^[1-9]\d{3}-\d{3}$/.test(n);break;case"RO":l=/^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(n);break;case"RU":l=/^[0-9]{6}$/i.test(n);break;case"SE":l=/^(S-)?\d{3}\s?\d{2}$/i.test(n);break;case"SG":l=/^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(n);break;case"SK":l=/^(\d{3})([ ]?)(\d{2})$/.test(n);break;case"US":default:l=/^\d{4,5}([\-]?\d{4})?$/.test(n)}
return{valid:l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].zipCode.country,FormValidation.I18n[s].zipCode.countries[o])}},_gb:function(t){for(var e="[ABCDEFGHIJKLMNOPRSTUWYZ]",a="[ABCDEFGHKLMNOPQRSTUVWXY]",i="[ABDEFGHJLNPQRSTUWXYZ]",r=[new RegExp("^("+e+"{1}"+a+"?[0-9]{1,2})(\\s*)([0-9]{1}"+i+"{2})$","i"),new RegExp("^("+e+"{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}"+i+"{2})$","i"),new RegExp("^("+e+"{1}"+a+"{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}"+i+"{2})$","i"),new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"),/^(GIR)(\s*)(0AA)$/i,/^(BFPO)(\s*)([0-9]{1,4})$/i,/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,/^([A-Z]{4})(\s*)(1ZZ)$/i,/^(AI-2640)$/i],n=0;n<r.length;n++)
if(r[n].test(t))return!0;return!1}}}(jQuery);
(function($){FormValidation.I18n=$.extend(true,FormValidation.I18n,{'zh_CN':{base64:{'default':'请输入有效的Base64编码'},between:{'default':'请输入在 %s 和 %s 之间的数值',notInclusive:'请输入在 %s 和 %s 之间(不含两端)的数值'},bic:{'default':'请输入有效的BIC商品编码'},callback:{'default':'请输入有效的值'},choice:{'default':'请输入有效的值',less:'请至少选中 %s 个选项',more:'最多只能选中 %s 个选项',between:'请选择 %s 至 %s 个选项'},color:{'default':'请输入有效的颜色值'},creditCard:{'default':'请输入有效的信用卡号码'},cusip:{'default':'请输入有效的美国CUSIP代码'},cvv:{'default':'请输入有效的CVV代码'},date:{'default':'请输入有效的日期',min:'请输入 %s 或之后的日期',max:'请输入 %s 或以前的日期',range:'请输入 %s 和 %s 之间的日期'},different:{'default':'请输入不同的值'},digits:{'default':'请输入有效的数字'},ean:{'default':'请输入有效的EAN商品编码'},ein:{'default':'请输入有效的EIN商品编码'},emailAddress:{'default':'请输入有效的邮件地址'},file:{'default':'请选择有效的文件'},greaterThan:{'default':'请输入大于等于 %s 的数值',notInclusive:'请输入大于 %s 的数值'},grid:{'default':'请输入有效的GRId编码'},hex:{'default':'请输入有效的16进制数'},iban:{'default':'请输入有效的IBAN(国际银行账户)号码',country:'请输入有效的 %s 国家或地区的IBAN(国际银行账户)号码',countries:{AD:'安道​​尔',AE:'阿联酋',AL:'阿尔巴尼亚',AO:'安哥拉',AT:'奥地利',AZ:'阿塞拜疆',BA:'波斯尼亚和黑塞哥维那',BE:'比利时',BF:'布基纳法索',BG:'保加利亚',BH:'巴林',BI:'布隆迪',BJ:'贝宁',BR:'巴西',CH:'瑞士',CI:'科特迪瓦',CM:'喀麦隆',CR:'哥斯达黎加',CV:'佛得角',CY:'塞浦路斯',CZ:'捷克共和国',DE:'德国',DK:'丹麦',DO:'多米尼加共和国',DZ:'阿尔及利亚',EE:'爱沙尼亚',ES:'西班牙',FI:'芬兰',FO:'法罗群岛',FR:'法国',GB:'英国',GE:'格鲁吉亚',GI:'直布罗陀',GL:'格陵兰岛',GR:'希腊',GT:'危地马拉',HR:'克罗地亚',HU:'匈牙利',IE:'爱尔兰',IL:'以色列',IR:'伊朗',IS:'冰岛',IT:'意大利',JO:'约旦',KW:'科威特',KZ:'哈萨克斯坦',LB:'黎巴嫩',LI:'列支敦士登',LT:'立陶宛',LU:'卢森堡',LV:'拉脱维亚',MC:'摩纳哥',MD:'摩尔多瓦',ME:'黑山',MG:'马达加斯加',MK:'马其顿',ML:'马里',MR:'毛里塔尼亚',MT:'马耳他',MU:'毛里求斯',MZ:'莫桑比克',NL:'荷兰',NO:'挪威',PK:'巴基斯坦',PL:'波兰',PS:'巴勒斯坦',PT:'葡萄牙',QA:'卡塔尔',RO:'罗马尼亚',RS:'塞尔维亚',SA:'沙特阿拉伯',SE:'瑞典',SI:'斯洛文尼亚',SK:'斯洛伐克',SM:'圣马力诺',SN:'塞内加尔',TL:'东帝汶',TN:'突尼斯',TR:'土耳其',VG:'英属维尔京群岛',XK:'科索沃共和国'}},id:{'default':'请输入有效的身份证件号码',country:'请输入有效的 %s 国家或地区的身份证件号码',countries:{BA:'波黑',BG:'保加利亚',BR:'巴西',CH:'瑞士',CL:'智利',CN:'中国',CZ:'捷克共和国',DK:'丹麦',EE:'爱沙尼亚',ES:'西班牙',FI:'芬兰',HR:'克罗地亚',IE:'爱尔兰',IS:'冰岛',LT:'立陶宛',LV:'拉脱维亚',ME:'黑山',MK:'马其顿',NL:'荷兰',PL:'波兰',RO:'罗马尼亚',RS:'塞尔维亚',SE:'瑞典',SI:'斯洛文尼亚',SK:'斯洛伐克',SM:'圣马力诺',TH:'泰国',TR:'土耳其',ZA:'南非'}},identical:{'default':'请输入相同的值'},imei:{'default':'请输入有效的IMEI(手机串号)'},imo:{'default':'请输入有效的国际海事组织(IMO)号码'},integer:{'default':'请输入有效的整数值'},ip:{'default':'请输入有效的IP地址',ipv4:'请输入有效的IPv4地址',ipv6:'请输入有效的IPv6地址'},isbn:{'default':'请输入有效的ISBN(国际标准书号)'},isin:{'default':'请输入有效的ISIN(国际证券编码)'},ismn:{'default':'请输入有效的ISMN(印刷音乐作品编码)'},issn:{'default':'请输入有效的ISSN(国际标准杂志书号)'},lessThan:{'default':'请输入小于等于 %s 的数值',notInclusive:'请输入小于 %s 的数值'},mac:{'default':'请输入有效的MAC物理地址'},meid:{'default':'请输入有效的MEID(移动设备识别码)'},notEmpty:{'default':'请填写必填项目'},numeric:{'default':'请输入有效的数值，允许小数'},phone:{'default':'请输入有效的电话号码',country:'请输入有效的 %s 国家或地区的电话号码',countries:{AE:'阿联酋',BG:'保加利亚',BR:'巴西',CN:'中国',CZ:'捷克共和国',DE:'德国',DK:'丹麦',ES:'西班牙',FR:'法国',GB:'英国',IN:'印度',MA:'摩洛哥',NL:'荷兰',PK:'巴基斯坦',RO:'罗马尼亚',RU:'俄罗斯',SK:'斯洛伐克',TH:'泰国',US:'美国',VE:'委内瑞拉'}},promise:{'default':'请输入有效的值'},regexp:{'default':'请输入符合正则表达式限制的值'},remote:{'default':'请输入有效的值'},rtn:{'default':'请输入有效的RTN号码'},sedol:{'default':'请输入有效的SEDOL代码'},siren:{'default':'请输入有效的SIREN号码'},siret:{'default':'请输入有效的SIRET号码'},step:{'default':'请输入在基础值上，增加 %s 的整数倍的数值'},stringCase:{'default':'只能输入小写字母',upper:'只能输入大写字母'},stringLength:{'default':'请输入符合长度限制的值',less:'最多只能输入 %s 个字符',more:'需要输入至少 %s 个字符',between:'请输入 %s 至 %s 个字符'},uri:{'default':'请输入一个有效的URL地址'},uuid:{'default':'请输入有效的UUID',version:'请输入版本 %s 的UUID'},vat:{'default':'请输入有效的VAT(税号)',country:'请输入有效的 %s 国家或地区的VAT(税号)',countries:{AT:'奥地利',BE:'比利时',BG:'保加利亚',BR:'巴西',CH:'瑞士',CY:'塞浦路斯',CZ:'捷克共和国',DE:'德国',DK:'丹麦',EE:'爱沙尼亚',ES:'西班牙',FI:'芬兰',FR:'法语',GB:'英国',GR:'希腊',EL:'希腊',HU:'匈牙利',HR:'克罗地亚',IE:'爱尔兰',IS:'冰岛',IT:'意大利',LT:'立陶宛',LU:'卢森堡',LV:'拉脱维亚',MT:'马耳他',NL:'荷兰',NO:'挪威',PL:'波兰',PT:'葡萄牙',RO:'罗马尼亚',RU:'俄罗斯',RS:'塞尔维亚',SE:'瑞典',SI:'斯洛文尼亚',SK:'斯洛伐克',VE:'委内瑞拉',ZA:'南非'}},vin:{'default':'请输入有效的VIN(美国车辆识别号码)'},zipCode:{'default':'请输入有效的邮政编码',country:'请输入有效的 %s 国家或地区的邮政编码',countries:{AT:'奥地利',BG:'保加利亚',BR:'巴西',CA:'加拿大',CH:'瑞士',CZ:'捷克共和国',DE:'德国',DK:'丹麦',ES:'西班牙',FR:'法国',GB:'英国',IE:'爱尔兰',IN:'印度',IT:'意大利',MA:'摩洛哥',NL:'荷兰',PL:'波兰',PT:'葡萄牙',RO:'罗马尼亚',RU:'俄罗斯',SE:'瑞典',SG:'新加坡',SK:'斯洛伐克',US:'美国'}}}});}(jQuery));
!function(a){FormValidation.Framework.Bootstrap4=function(b,c,d){c=a.extend(!0,{button:{selector:'[type="submit"]:not([formnovalidate])',disabled:"disabled"},err:{clazz:"form-control-label",parent:"^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$"},icon:{valid:null,invalid:null,validating:null,feedback:"fv-control-feedback"},row:{selector:".form-group",valid:"has-success",invalid:"has-danger",feedback:"fv-has-feedback"}},c),FormValidation.Base.apply(this,[b,c,d])},FormValidation.Framework.Bootstrap4.prototype=a.extend({},FormValidation.Base.prototype,{_fixIcon:function(a,b){var c=this._namespace,d=a.attr("type"),e=a.attr("data-"+c+"-field"),f=this.options.fields[e].row||this.options.row.selector,g=a.closest(f);if("checkbox"===d||"radio"===d){var h=a.parent();h.hasClass("form-check")?b.insertAfter(h):h.parent().hasClass("form-check")&&b.insertAfter(h.parent())}0!==g.find(".input-group").length&&b.addClass("fv-bootstrap-icon-input-group").insertAfter(g.find(".input-group").eq(0))},_createTooltip:function(a,b,c){var d=this._namespace,e=a.data(d+".icon");if(e)switch(c){case"popover":e.css({cursor:"pointer","pointer-events":"auto"}).popover("destroy").popover({container:"body",content:b,html:!0,placement:"top",trigger:"hover click"});break;case"tooltip":default:e.css({cursor:"pointer","pointer-events":"auto"}).tooltip("dispose").tooltip({container:"body",html:!0,placement:"top",title:b})}},_destroyTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.css({cursor:"","pointer-events":"none"}).popover("destroy");break;case"tooltip":default:d.css({cursor:"","pointer-events":"none"}).tooltip("dispose")}},_hideTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.popover("hide");break;case"tooltip":default:d.tooltip("hide")}},_showTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.popover("show");break;case"tooltip":default:d.tooltip("show")}}})}(jQuery);
;(function($){$.fn.extend({"placeholder":function(options){options=$.extend({placeholderColor:'#999',isUseSpan:true},options);$(this).each(function(){var _this=this;var supportPlaceholder='placeholder'in document.createElement('input');if(!supportPlaceholder){var defaultValue=$(_this).attr('placeholder');var defaultColor=$(_this).css('color');if(options.isUseSpan==false){$(_this).focus(function(){var pattern=new RegExp("^"+defaultValue+"$|^$");pattern.test($(_this).val())&&$(_this).val('').css('color',defaultColor);}).blur(function(){if($(_this).val()==defaultValue){$(_this).css('color',defaultColor);}else if($(_this).val().length==0){$(_this).val(defaultValue).css('color',options.placeholderColor)}}).trigger('blur');}else{var $imitate=$('<span class="wrap-placeholder" style="position:absolute; display:block; overflow:hidden;z-index: 10; color:'+options.placeholderColor+'; width:'+$(_this).outerWidth()+'px; height:inherit;'+'">'+defaultValue+'</span>');$imitate.css({'margin-left':$(_this).css('margin-left'),'margin-top':$(_this).css('margin-top'),'font-size':$(_this).css('font-size'),'font-family':$(_this).css('font-family'),'font-weight':$(_this).css('font-weight'),'padding-left':$(_this).css('padding-left'),'line-height':$(_this).css('line-height'),'padding-top':$(_this).css('padding-top')});$(_this).before($imitate.click(function(){$(_this).trigger('focus');}));$(_this).val().length&&$imitate.hide();var inputChangeEvent=typeof(_this.oninput)=='object'?'input':'propertychange';$(_this).bind(inputChangeEvent,function(){if($(_this).val().length){$imitate.hide();}else{$imitate.show();}});$(_this).focus(function(){$imitate.hide();}).blur(function(){/^$/.test($(_this).val())&&$imitate.show();});}}});return this;}});})(jQuery);if($('input[placeholder],textarea[placeholder]').length)$('input[placeholder],textarea[placeholder]').placeholder();
$(function(){
$(document).on('click', 'form [type="submit"]:not(.fv-hidden-submit)', function() {
$(this).formSubmitSet($(this).parents('form'));
});
$(document).on('submit', 'form', function() {
$(this).formSubmitSet();
});
$(document).on('change keyup','.input-group-file input[type="file"]',function(){
if(!$(this).parents('.input-group-btn').find('.file-input').length){
var $text=$(this).parents('.input-group-file').find('input[type="text"]'),
value='';
if(M['is_lteie9']){
value=$(this).val();
}else{
var $input_group_file=$(this).parents('.input-group-file');
if($(this)[0].files.length>10){
if(!$input_group_file.next('small.form-control-label').length) $input_group_file.after('<small class="form-control-label"></small>');
$input_group_file.next('small.form-control-label').text('一次只能提交最多10张图片！');
$input_group_file.parents('.form-group').removeClass('has-success').addClass('has-danger');
}else{
$.each($(this)[0].files,function(i,file){
value +=value?','+file.name:file.name;
});
$input_group_file.next('small.form-control-label').html('');
$input_group_file.parents('.form-group').removeClass('has-danger');
}
}
if(value) $text.val(value).trigger('change');
}
});
$(document).on('click',"#getcode,.met-getcode",function(){
var data_src=$(this).attr("data-src");
if(!data_src){
data_src=$(this).prop("src")+'&random=';
$(this).attr({'data-src':data_src});
}
if(data_src.indexOf('&random=')<0) data_src+='&random=';
$(this).attr({src:data_src+Math.floor(Math.random()*9999+1)});
});
});
$.fn.extend({
validation:function(){
var $self=$(this),
self_validation=$(this).formValidation({
locale:M['validation_locale'],
framework:'bootstrap4'
});
function success(fun,afterajax_ok){
self_validation.on('success.form.fv', function(e) {
e.preventDefault();
if($self.find('[name="submit_type"]').length && $self.find('[name="submit_type"]').val()=='delet' && $self.find('[name="all_id"]').val()=='') return false;
var ajax_ok=typeof afterajax_ok != "undefined" ?afterajax_ok:true;
if(ajax_ok){
formDataAjax(e,fun);
}else{
$self.data('formValidation').resetForm();
if (typeof fun==="function") window.form_data_ajax=fun(e,$self);
setTimeout(function(){
if(typeof form_data_ajax =='undefined') $self.data('formValidation').defaultSubmit();
},100)
}
})
}
function formDataAjax(e,fun){
window.form_data_ajax=false;
var $form    = $(e.target),
type=($form.attr('method')||'POST').toUpperCase(),
url=$form.attr('action');
if(type!='POST') url+=(url.indexOf('?')>0?'&':'?')+$form.serialize(e.target);
if(M['is_lteie9']){
var formData = $form.serializeArray(e.target),
contentType='application/x-www-form-urlencoded',
processData=true;
}else{
var formData = new FormData(e.target),
params   = $form.serializeArray(),
contentType=false,
processData=false;
}
$.ajax({
url: url,
data: formData,
cache: false,
contentType: contentType,
processData: processData,
type: type,
dataType:'json',
success: function(result) {
$form.data('formValidation').resetForm();
if (typeof fun==="function") return fun(result,$form);
}
});
}
return {success:success,formDataAjax:formDataAjax};
},
formSubmitSet:function(form){
var checkbox_val={},
$form=form||$(this);
$form.find('input[type="checkbox"][name]').each(function(index, el) {
var name=$(this).attr('name'),
val=$(this).val(),
delimiter=$(this).data('delimiter')||'#@met@#';
if(typeof checkbox_val[name] =='undefined') checkbox_val[name]='';
if($(this).prop('checked') || $(this).data('plugin')=='switchery') checkbox_val[name]+=checkbox_val[name]!=''?(delimiter+val):val;
});
$.each(checkbox_val, function(index, val) {
if(!$form.find('[name="'+index+'"][type="hidden"]').length) $form.append('<input type="hidden" name="'+index+'"/>');
$form.find('[name="'+index+'"][type="hidden"]').val(val);
});
}
});
M['validation_locale']='';
if("undefined" != typeof M){
M['validation_locale']=M['synchronous']+'_';
switch(M['synchronous']){
case 'sq':M['validation_locale']+='AL';break;
case 'ar':M['validation_locale']+='MA';break;
case 'be':M['validation_locale']+='BE';break;
case 'bg':M['validation_locale']+='BG';break;
case 'pl':M['validation_locale']+='PL';break;
case 'fa':M['validation_locale']+='IR';break;
case 'da':M['validation_locale']+='DK';break;
case 'de':M['validation_locale']+='DE';break;
case 'ru':M['validation_locale']+='RU';break;
case 'fr':M['validation_locale']+='FR';break;
case 'fi':M['validation_locale']+='FI';break;
case 'nl':M['validation_locale']+='NL';break;
case 'ca':M['validation_locale']+='ES';break;
case 'cs':M['validation_locale']+='CZ';break;
case 'ro':M['validation_locale']+='RO';break;
case 'no':M['validation_locale']+='NO';break;
case 'pt':M['validation_locale']+='PT';break;
case 'ja':M['validation_locale']+='JP';break;
case 'sv':M['validation_locale']+='SE';break;
case 'sr':M['validation_locale']+='RS';break;
case 'sk':M['validation_locale']+='SK';break;
case 'th':M['validation_locale']+='TH';break;
case 'el':M['validation_locale']+='GR';break;
case 'eu':M['validation_locale']+='ES';break;
case 'es':M['validation_locale']+='ES';break;
case 'hu':M['validation_locale']+='HU';break;
case 'it':M['validation_locale']+='IT';break;
case 'id':M['validation_locale']+='ID';break;
case 'en':M['validation_locale']+='US';break;
case 'vi':M['validation_locale']+='VN';break;
case 'zh':M['validation_locale']='zh_TW';break;
case 'cn':M['validation_locale']='zh_CN';break;
}
}else{
M['validation_locale']='zh_CN';
}
$.fn.metValidate=function(){
$('form',this).addClass('met-form-validation');
if(typeof validate =='undefined') window.validate=[];
$('form',this).each(function(index, el) {
var order=$(this).index('form');
$(this).attr({'data-validate_order':order});
validate[order]=$(this).validation();
});
}
$(document).metValidate();
(function(){
$(function(){
$(".met-job-cvbtn").click(function(){
var $job_modal=$($(this).data('target'));
$job_modal.find('form input[name="jobid"]').val($(this).data('jobid'));
});
});
})();
if(typeof Tablesaw==="undefined"){Tablesaw={i18n:{modes:['Stack','Swipe','Toggle'],columns:'Col<span class=\"a11y-sm\">umn</span>s',columnBtnText:'Columns',columnsDialogError:'No eligible columns.',sort:'Sort'}, mustard:'querySelector'in document&&(!window.blackberry||window.WebKitPoint)&&!window.operamini};}if(!Tablesaw.config){Tablesaw.config={};}if(Tablesaw.mustard){jQuery(document.documentElement).addClass('tablesaw-enhanced');};(function($){var pluginName="table",classes={toolbar:"tablesaw-bar"},events={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh"},defaultMode="stack",initSelector="table[data-tablesaw-mode],table[data-tablesaw-sortable]";var Table=function(element){if(!element){throw new Error("Tablesaw requires an element.");}this.table=element;this.$table=$(element);this.mode=this.$table.attr("data-tablesaw-mode")||defaultMode;this.init();};Table.prototype.init=function(){ if(!this.$table.attr("id")){this.$table.attr("id",pluginName+"-"+Math.round(Math.random()*10000));}this.createToolbar();var colstart=this._initCells();this.$table.trigger(events.create,[this,colstart]);};Table.prototype._initCells=function(){var colstart,thrs=this.table.querySelectorAll("thead tr"),self=this;$(thrs).each(function(){var coltally=0;$(this).children().each(function(){var span=parseInt(this.getAttribute("colspan"),10),sel=":nth-child("+(coltally+1)+")";colstart=coltally+1;if(span){for(var k=0;k<span-1;k++){coltally++;sel+=", :nth-child("+(coltally+1)+")";}} this.cells=self.$table.find("tr").not(thrs[0]).not(this).children().filter(sel);coltally++;});});return colstart;};Table.prototype.refresh=function(){this._initCells();this.$table.trigger(events.refresh);};Table.prototype.createToolbar=function(){var $toolbar=this.$table.prev().filter('.'+classes.toolbar);if(!$toolbar.length){$toolbar=$('<div>').addClass(classes.toolbar).insertBefore(this.$table);}this.$toolbar=$toolbar;if(this.mode){this.$toolbar.addClass('mode-'+this.mode);}};Table.prototype.destroy=function(){this.$table.prev().filter('.'+classes.toolbar).each(function(){this.className=this.className.replace(/\bmode\-\w*\b/gi,'');});var tableId=this.$table.attr('id');$(document).unbind("."+tableId);$(window).unbind("."+tableId); this.$table.trigger(events.destroy,[this]);this.$table.removeAttr('data-tablesaw-mode');this.$table.removeData(pluginName);};$.fn[pluginName]=function(){return this.each(function(){var $t=$(this);if($t.data(pluginName)){return;}var table=new Table(this);$t.data(pluginName,table);});};$(document).on("enhance.tablesaw",function(e){ if(Tablesaw.mustard){$(e.target).find(initSelector)[pluginName]();}});}(jQuery));;(function(win,$,undefined){var classes={stackTable:'tablesaw-stack',cellLabels:'tablesaw-cell-label',cellContentLabels:'tablesaw-cell-content'};var data={obj:'tablesaw-stack'};var attrs={labelless:'data-tablesaw-no-labels',hideempty:'data-tablesaw-hide-empty'};var Stack=function(element){this.$table=$(element);this.labelless=this.$table.is('['+attrs.labelless+']');this.hideempty=this.$table.is('['+attrs.hideempty+']');if(!this.labelless){ this.allHeaders=this.$table.find("th");}this.$table.data(data.obj,this);};Stack.prototype.init=function(colstart){this.$table.addClass(classes.stackTable);if(this.labelless){return;} var reverseHeaders=$(this.allHeaders);var hideempty=this.hideempty; reverseHeaders.each(function(){var $t=$(this),$cells=$(this.cells).filter(function(){return!$(this).parent().is("["+attrs.labelless+"]")&&(!hideempty||!$(this).is(":empty"));}),hierarchyClass=$cells.not(this).filter("thead th").length&&" tablesaw-cell-label-top", $sortableButton=$t.find(".tablesaw-sortable-btn"),html=$sortableButton.length?$sortableButton.html():$t.html();if(html!==""){if(hierarchyClass){var iteration=parseInt($(this).attr("colspan"),10),filter="";if(iteration){filter="td:nth-child("+iteration+"n + "+(colstart)+")";}$cells.filter(filter).prepend("<b class='"+classes.cellLabels+hierarchyClass+"'>"+html+"</b>");}else{$cells.wrapInner("<span class='"+classes.cellContentLabels+"'></span>");$cells.prepend("<b class='"+classes.cellLabels+"'>"+html+"</b>");}}});};Stack.prototype.destroy=function(){this.$table.removeClass(classes.stackTable);this.$table.find('.'+classes.cellLabels).remove();this.$table.find('.'+classes.cellContentLabels).each(function(){$(this).replaceWith(this.childNodes);});}; $(document).on("tablesawcreate",function(e,Tablesaw,colstart){if(Tablesaw.mode==='stack'){var table=new Stack(Tablesaw.table);table.init(colstart);}});$(document).on("tablesawdestroy",function(e,Tablesaw){if(Tablesaw.mode==='stack'){$(Tablesaw.table).data(data.obj).destroy();}});}(this,jQuery));;(function($){var pluginName="tablesawbtn",methods={_create:function(){return $(this).each(function(){$(this).trigger("beforecreate."+pluginName)[pluginName]("_init").trigger("create."+pluginName);});},_init:function(){var oEl=$(this),sel=this.getElementsByTagName("select")[0];if(sel){$(this).addClass("btn-select")[pluginName]("_select",sel);}return oEl;},_select:function(sel){var update=function(oEl,sel){var opts=$(sel).find("option"),label,el,children;opts.each(function(){var opt=this;if(opt.selected){label=document.createTextNode(opt.text);}});children=oEl.childNodes;if(opts.length>0){for(var i=0,l=children.length;i<l;i++){el=children[i];if(el&&el.nodeType===3){oEl.replaceChild(label,el);}}}};update(this,sel);$(this).bind("change refresh",function(){update(this,sel);});}};$.fn[pluginName]=function(arrg,a,b,c){return this.each(function(){ if(arrg&&typeof(arrg)==="string"){return $.fn[pluginName].prototype[arrg].call(this,a,b,c);} if($(this).data(pluginName+"active")){return $(this);} $(this).data(pluginName+"active",true);$.fn[pluginName].prototype._create.call(this);});}; $.extend($.fn[pluginName].prototype,methods);}(jQuery));;(function(win,$,undefined){var ColumnToggle=function(element){this.$table=$(element);this.classes={columnToggleTable:'tablesaw-columntoggle',columnBtnContain:'tablesaw-columntoggle-btnwrap tablesaw-advance',columnBtn:'tablesaw-columntoggle-btn tablesaw-nav-btn down',popup:'tablesaw-columntoggle-popup',priorityPrefix:'tablesaw-priority-', toolbar:'tablesaw-bar'};this.headers=this.$table.find('tr:first > th');this.$table.data('tablesaw-coltoggle',this);};ColumnToggle.prototype.init=function(){var tableId,id,$menuButton,$popup,$menu,$btnContain,self=this;this.$table.addClass(this.classes.columnToggleTable);tableId=this.$table.attr("id");id=tableId+"-popup";$btnContain=$("<div class='"+this.classes.columnBtnContain+"'></div>");$menuButton=$("<a href='#"+id+"' class='btn btn-micro "+this.classes.columnBtn+"' data-popup-link>"+"<span>"+Tablesaw.i18n.columnBtnText+"</span></a>");$popup=$("<div class='dialog-table-coltoggle "+this.classes.popup+"' id='"+id+"'></div>");$menu=$("<div class='btn-group'></div>");var hasNonPersistentHeaders=false;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=self.$getCells(this);if(priority&&priority!=="persist"){$cells.addClass(self.classes.priorityPrefix+priority);$("<label><input type='checkbox' checked>"+$this.text()+"</label>").appendTo($menu).children(0).data("tablesaw-header",this);hasNonPersistentHeaders=true;}});if(!hasNonPersistentHeaders){$menu.append('<label>'+Tablesaw.i18n.columnsDialogError+'</label>');}$menu.appendTo($popup);$menu.find('input[type="checkbox"]').on("change",function(e){var checked=e.target.checked;self.$getCellsFromCheckbox(e.target).toggleClass("tablesaw-cell-hidden",!checked).toggleClass("tablesaw-cell-visible",checked);self.$table.trigger('tablesawcolumns');});$menuButton.appendTo($btnContain);$btnContain.appendTo(this.$table.prev().filter('.'+this.classes.toolbar));var closeTimeout;function openPopup(){$btnContain.addClass('visible');$menuButton.removeClass('down').addClass('up');$(document).unbind('click.'+tableId,closePopup);window.clearTimeout(closeTimeout);closeTimeout=window.setTimeout(function(){$(document).one('click.'+tableId,closePopup);},15);}function closePopup(event){if(event&&$(event.target).closest("."+self.classes.popup).length){return;}$(document).unbind('click.'+tableId);$menuButton.removeClass('up').addClass('down');$btnContain.removeClass('visible');}$menuButton.on("click.tablesaw",function(event){event.preventDefault();if(!$btnContain.is(".visible")){openPopup();}else{closePopup();}});$popup.appendTo($btnContain);this.$menu=$menu;$(window).on("resize."+tableId,function(){self.refreshToggle();});this.refreshToggle();};ColumnToggle.prototype.$getCells=function(th){return $(th).add(th.cells);};ColumnToggle.prototype.$getCellsFromCheckbox=function(checkbox){var th=$(checkbox).data("tablesaw-header");return this.$getCells(th);};ColumnToggle.prototype.refreshToggle=function(){var self=this;this.$menu.find("input").each(function(){this.checked=self.$getCellsFromCheckbox(this).eq(0).css("display")==="table-cell";});};ColumnToggle.prototype.refreshPriority=function(){var self=this;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=$this.add(this.cells);if(priority&&priority!=="persist"){$cells.addClass(self.classes.priorityPrefix+priority);}});};ColumnToggle.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable);this.$table.find('th, td').each(function(){var $cell=$(this);$cell.removeClass('tablesaw-cell-hidden').removeClass('tablesaw-cell-visible');this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,'');});}; $(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.mode==='columntoggle'){var table=new ColumnToggle(Tablesaw.table);table.init();}});$(document).on("tablesawdestroy",function(e,Tablesaw){if(Tablesaw.mode==='columntoggle'){$(Tablesaw.table).data('tablesaw-coltoggle').destroy();}});}(this,jQuery));;(function(win,$,undefined){$.extend(Tablesaw.config,{swipe:{horizontalThreshold:15,verticalThreshold:30}});function isIE8(){var div=document.createElement('div'),all=div.getElementsByTagName('i');div.innerHTML='<!--[if lte IE 8]><i></i><![endif]-->';return!!all.length;}function createSwipeTable($table){var $btns=$("<div class='tablesaw-advance'></div>"),$prevBtn=$("<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>").appendTo($btns),$nextBtn=$("<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>").appendTo($btns),hideBtn='disabled',persistWidths='tablesaw-fix-persist',$headerCells=$table.find("thead th"),$headerCellsNoPersist=$headerCells.not('[data-tablesaw-priority="persist"]'),headerWidths=[],$head=$(document.head||'head'),tableId=$table.attr('id'), supportsNthChild=!isIE8();if(!$headerCells.length){throw new Error("tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?");} $table.css('width','auto');$headerCells.each(function(){headerWidths.push($(this).outerWidth());});$table.css('width','');$btns.appendTo($table.prev().filter('.tablesaw-bar'));$table.addClass("tablesaw-swipe");if(!tableId){tableId='tableswipe-'+Math.round(Math.random()*10000);$table.attr('id',tableId);}function $getCells(headerCell){return $(headerCell.cells).add(headerCell);}function showColumn(headerCell){$getCells(headerCell).removeClass('tablesaw-cell-hidden');}function hideColumn(headerCell){$getCells(headerCell).addClass('tablesaw-cell-hidden');}function persistColumn(headerCell){$getCells(headerCell).addClass('tablesaw-cell-persist');}function isPersistent(headerCell){return $(headerCell).is('[data-tablesaw-priority="persist"]');}function unmaintainWidths(){$table.removeClass(persistWidths);$('#'+tableId+'-persist').remove();}function maintainWidths(){var prefix='#'+tableId+'.tablesaw-swipe ',styles=[],tableWidth=$table.width(),hash=[],newHash;$headerCells.each(function(index){var width;if(isPersistent(this)){width=$(this).outerWidth();if(width<tableWidth*0.75){hash.push(index+'-'+width);styles.push(prefix+' .tablesaw-cell-persist:nth-child('+(index+1)+') { width: '+width+'px; }');}}});newHash=hash.join('_');$table.addClass(persistWidths);var $style=$('#'+tableId+'-persist'); if(!$style.length||$style.data('hash')!==newHash){ $style.remove();if(styles.length){$('<style>'+styles.join("\n")+'</style>').attr('id',tableId+'-persist').data('hash',newHash).appendTo($head);}}}function getNext(){var next=[],checkFound;$headerCellsNoPersist.each(function(i){var $t=$(this),isHidden=$t.css("display")==="none"||$t.is(".tablesaw-cell-hidden");if(!isHidden&&!checkFound){checkFound=true;next[0]=i;}else if(isHidden&&checkFound){next[1]=i;return false;}});return next;}function getPrev(){var next=getNext();return[next[1]-1,next[0]-1];}function nextpair(fwd){return fwd?getNext():getPrev();}function canAdvance(pair){return pair[1]>-1&&pair[1]<$headerCellsNoPersist.length;}function matchesMedia(){var matchMedia=$table.attr("data-tablesaw-swipe-media");return!matchMedia||("matchMedia"in win)&&win.matchMedia(matchMedia).matches;}function fakeBreakpoints(){if(!matchesMedia()){return;}var extraPaddingPixels=20,containerWidth=$table.parent().width(),persist=[],sum=0,sums=[],visibleNonPersistantCount=$headerCells.length;$headerCells.each(function(index){var $t=$(this),isPersist=$t.is('[data-tablesaw-priority="persist"]');persist.push(isPersist);sum+=headerWidths[index]+(isPersist?0:extraPaddingPixels);sums.push(sum); if(isPersist||sum>containerWidth){visibleNonPersistantCount--;}});var needsNonPersistentColumn=visibleNonPersistantCount===0;$headerCells.each(function(index){if(persist[index]){ persistColumn(this);return;}if(sums[index]<=containerWidth||needsNonPersistentColumn){needsNonPersistentColumn=false;showColumn(this);}else{hideColumn(this);}});if(supportsNthChild){unmaintainWidths();}$table.trigger('tablesawcolumns');}function advance(fwd){var pair=nextpair(fwd);if(canAdvance(pair)){if(isNaN(pair[0])){if(fwd){pair[0]=0;}else{pair[0]=$headerCellsNoPersist.length-1;}}if(supportsNthChild){maintainWidths();}hideColumn($headerCellsNoPersist.get(pair[0]));showColumn($headerCellsNoPersist.get(pair[1]));$table.trigger('tablesawcolumns');}}$prevBtn.add($nextBtn).click(function(e){advance(!!$(e.target).closest($nextBtn).length);e.preventDefault();});function getCoord(event,key){return(event.touches||event.originalEvent.touches)[0][key];}$table.bind("touchstart.swipetoggle",function(e){var originX=getCoord(e,'pageX'),originY=getCoord(e,'pageY'),x,y;$(win).off("resize",fakeBreakpoints);$(this).bind("touchmove",function(e){x=getCoord(e,'pageX');y=getCoord(e,'pageY');var cfg=Tablesaw.config.swipe;if(Math.abs(x-originX)>cfg.horizontalThreshold&&Math.abs(y-originY)<cfg.verticalThreshold){e.preventDefault();}}).bind("touchend.swipetoggle",function(){var cfg=Tablesaw.config.swipe;if(Math.abs(y-originY)<cfg.verticalThreshold){if(x-originX<-1*cfg.horizontalThreshold){advance(true);}if(x-originX>cfg.horizontalThreshold){advance(false);}}window.setTimeout(function(){$(win).on("resize",fakeBreakpoints);},300);$(this).unbind("touchmove touchend");});}).bind("tablesawcolumns.swipetoggle",function(){$prevBtn[canAdvance(getPrev())?"removeClass":"addClass"](hideBtn);$nextBtn[canAdvance(getNext())?"removeClass":"addClass"](hideBtn);}).bind("tablesawnext.swipetoggle",function(){advance(true);}).bind("tablesawprev.swipetoggle",function(){advance(false);}).bind("tablesawdestroy.swipetoggle",function(){var $t=$(this);$t.removeClass('tablesaw-swipe');$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();$(win).off("resize",fakeBreakpoints);$t.unbind(".swipetoggle");});fakeBreakpoints();$(win).on("resize",fakeBreakpoints);} $(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.mode==='swipe'){createSwipeTable(Tablesaw.$table);}});}(this,jQuery));;(function($){function getSortValue(cell){return $.map(cell.childNodes,function(el){var $el=$(el);if($el.is('input, select')){return $el.val();}else if($el.hasClass('tablesaw-cell-label')){return;}return $.trim($el.text());}).join('');}var pluginName="tablesaw-sortable",initSelector="table[data-"+pluginName+"]",sortableSwitchSelector="[data-"+pluginName+"-switch]",attrs={defaultCol:"data-tablesaw-sortable-default-col",numericCol:"data-tablesaw-sortable-numeric"},classes={head:pluginName+"-head",ascend:pluginName+"-ascending",descend:pluginName+"-descending",switcher:pluginName+"-switch",tableToolbar:'tablesaw-toolbar',sortButton:pluginName+"-btn"},methods={_create:function(o){return $(this).each(function(){var init=$(this).data("init"+pluginName);if(init){return false;}$(this).data("init"+pluginName,true).trigger("beforecreate."+pluginName)[pluginName]("_init",o).trigger("create."+pluginName);});},_init:function(){var el=$(this),heads,$switcher;var addClassToTable=function(){el.addClass(pluginName);},addClassToHeads=function(h){$.each(h,function(i,v){$(v).addClass(classes.head);});},makeHeadsActionable=function(h,fn){$.each(h,function(i,v){var b=$("<button class='"+classes.sortButton+"'/>");b.bind("click",{col:v},fn);$(v).wrapInner(b);});},clearOthers=function(sibs){$.each(sibs,function(i,v){var col=$(v);col.removeAttr(attrs.defaultCol);col.removeClass(classes.ascend);col.removeClass(classes.descend);});},headsOnAction=function(e){if($(e.target).is('a[href]')){return;}e.stopPropagation();var head=$(this).parent(),v=e.data.col,newSortValue=heads.index(head);clearOthers(head.siblings());if(head.hasClass(classes.descend)){el[pluginName]("sortBy",v,true);newSortValue+='_asc';}else{el[pluginName]("sortBy",v);newSortValue+='_desc';}if($switcher){$switcher.find('select').val(newSortValue).trigger('refresh');}e.preventDefault();},handleDefault=function(heads){$.each(heads,function(idx,el){var $el=$(el);if($el.is("["+attrs.defaultCol+"]")){if(!$el.hasClass(classes.descend)){$el.addClass(classes.ascend);}}});},addSwitcher=function(heads){$switcher=$('<div>').addClass(classes.switcher).addClass(classes.tableToolbar).html(function(){var html=['<label>'+Tablesaw.i18n.sort+':'];html.push('<span class="btn btn-small">&#160;<select>');heads.each(function(j){var $t=$(this);var isDefaultCol=$t.is("["+attrs.defaultCol+"]");var isDescending=$t.hasClass(classes.descend);var hasNumericAttribute=$t.is('[data-sortable-numeric]');var numericCount=0;var numericCountMax=5;$(this.cells).slice(0,numericCountMax).each(function(){if(!isNaN(parseInt(getSortValue(this),10))){numericCount++;}});var isNumeric=numericCount===numericCountMax;if(!hasNumericAttribute){$t.attr("data-sortable-numeric",isNumeric?"":"false");}html.push('<option'+(isDefaultCol&&!isDescending?' selected':'')+' value="'+j+'_asc">'+$t.text()+' '+(isNumeric?'&#x2191;':'(A-Z)')+'</option>');html.push('<option'+(isDefaultCol&&isDescending?' selected':'')+' value="'+j+'_desc">'+$t.text()+' '+(isNumeric?'&#x2193;':'(Z-A)')+'</option>');});html.push('</select></span></label>');return html.join('');});var $toolbar=el.prev().filter('.tablesaw-bar'),$firstChild=$toolbar.children().eq(0);if($firstChild.length){$switcher.insertBefore($firstChild);}else{$switcher.appendTo($toolbar);}$switcher.find('.btn').tablesawbtn();$switcher.find('select').on('change',function(){var val=$(this).val().split('_'),head=heads.eq(val[0]);clearOthers(head.siblings());el[pluginName]('sortBy',head.get(0),val[1]==='asc');});};addClassToTable();heads=el.find("thead th[data-"+pluginName+"-col]");addClassToHeads(heads);makeHeadsActionable(heads,headsOnAction);handleDefault(heads);if(el.is(sortableSwitchSelector)){addSwitcher(heads,el.find('tbody tr:nth-child(-n+3)'));}},getColumnNumber:function(col){return $(col).prevAll().length;},getTableRows:function(){return $(this).find("tbody tr");},sortRows:function(rows,colNum,ascending,col){var cells,fn,sorted;var getCells=function(rows){var cells=[];$.each(rows,function(i,r){var element=$(r).children().get(colNum);cells.push({element:element,cell:getSortValue(element),rowNum:i});});return cells;},getSortFxn=function(ascending,forceNumeric){var fn,regex=/[^\-\+\d\.]/g;if(ascending){fn=function(a,b){if(forceNumeric){return parseFloat(a.cell.replace(regex,''))-parseFloat(b.cell.replace(regex,''));}else{return a.cell.toLowerCase()>b.cell.toLowerCase()?1:-1;}};}else{fn=function(a,b){if(forceNumeric){return parseFloat(b.cell.replace(regex,''))-parseFloat(a.cell.replace(regex,''));}else{return a.cell.toLowerCase()<b.cell.toLowerCase()?1:-1;}};}return fn;},applyToRows=function(sorted,rows){var newRows=[],i,l,cur;for(i=0,l=sorted.length;i<l;i++){cur=sorted[i].rowNum;newRows.push(rows[cur]);}return newRows;};cells=getCells(rows);var customFn=$(col).data('tablesaw-sort');fn=(customFn&&typeof customFn==="function"?customFn(ascending):false)||getSortFxn(ascending,$(col).is('[data-sortable-numeric]')&&!$(col).is('[data-sortable-numeric="false"]'));sorted=cells.sort(fn);rows=applyToRows(sorted,rows);return rows;},replaceTableRows:function(rows){var el=$(this),body=el.find("tbody");body.html(rows);},makeColDefault:function(col,a){var c=$(col);c.attr(attrs.defaultCol,"true");if(a){c.removeClass(classes.descend);c.addClass(classes.ascend);}else{c.removeClass(classes.ascend);c.addClass(classes.descend);}},sortBy:function(col,ascending){var el=$(this),colNum,rows;colNum=el[pluginName]("getColumnNumber",col);rows=el[pluginName]("getTableRows");rows=el[pluginName]("sortRows",rows,colNum,ascending,col);el[pluginName]("replaceTableRows",rows);el[pluginName]("makeColDefault",col,ascending);}};$.fn[pluginName]=function(arrg){var args=Array.prototype.slice.call(arguments,1),returnVal; if(arrg&&typeof(arrg)==="string"){returnVal=$.fn[pluginName].prototype[arrg].apply(this[0],args);return(typeof returnVal!=="undefined")?returnVal:$(this);} if(!$(this).data(pluginName+"data")){$(this).data(pluginName+"active",true);$.fn[pluginName].prototype._create.call(this,arrg);}return $(this);}; $.extend($.fn[pluginName].prototype,methods);$(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.$table.is(initSelector)){Tablesaw.$table[pluginName]();}});}(jQuery));;(function(win,$,undefined){var MM={attr:{init:'data-tablesaw-minimap'}};function createMiniMap($table){var $btns=$('<div class="tablesaw-advance minimap">'),$dotNav=$('<ul class="tablesaw-advance-dots">').appendTo($btns),hideDot='tablesaw-advance-dots-hide',$headerCells=$table.find('thead th'); $headerCells.each(function(){$dotNav.append('<li><i></i></li>');});$btns.appendTo($table.prev().filter('.tablesaw-bar'));function showMinimap($table){var mq=$table.attr(MM.attr.init);return!mq||win.matchMedia&&win.matchMedia(mq).matches;}function showHideNav(){if(!showMinimap($table)){$btns.hide();return;}$btns.show(); var dots=$dotNav.find("li").removeClass(hideDot);$table.find("thead th").each(function(i){if($(this).css("display")==="none"){dots.eq(i).addClass(hideDot);}});}showHideNav();$(win).on("resize",showHideNav);$table.bind("tablesawcolumns.minimap",function(){showHideNav();}).bind("tablesawdestroy.minimap",function(){var $t=$(this);$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();$(win).off("resize",showHideNav);$t.unbind(".minimap");});} $(document).on("tablesawcreate",function(e,Tablesaw){if((Tablesaw.mode==='swipe'||Tablesaw.mode==='columntoggle')&&Tablesaw.$table.is('[ '+MM.attr.init+']')){createMiniMap(Tablesaw.$table);}});}(this,jQuery));;(function(win,$){var S={selectors:{init:'table[data-tablesaw-mode-switch]'},attributes:{excludeMode:'data-tablesaw-mode-exclude'},classes:{main:'tablesaw-modeswitch',toolbar:'tablesaw-toolbar'},modes:['stack','swipe','columntoggle'],init:function(table){var $table=$(table),ignoreMode=$table.attr(S.attributes.excludeMode),$toolbar=$table.prev().filter('.tablesaw-bar'),modeVal='',$switcher=$('<div>').addClass(S.classes.main+' '+S.classes.toolbar).html(function(){var html=['<label>'+Tablesaw.i18n.columns+':'],dataMode=$table.attr('data-tablesaw-mode'),isSelected;html.push('<span class="btn btn-small">&#160;<select>');for(var j=0,k=S.modes.length;j<k;j++){if(ignoreMode&&ignoreMode.toLowerCase()===S.modes[j]){continue;}isSelected=dataMode===S.modes[j];if(isSelected){modeVal=S.modes[j];}html.push('<option'+(isSelected?' selected':'')+' value="'+S.modes[j]+'">'+Tablesaw.i18n.modes[j]+'</option>');}html.push('</select></span></label>');return html.join('');});var $otherToolbarItems=$toolbar.find('.tablesaw-advance').eq(0);if($otherToolbarItems.length){$switcher.insertBefore($otherToolbarItems);}else{$switcher.appendTo($toolbar);}$switcher.find('.btn').tablesawbtn();$switcher.find('select').bind('change',S.onModeChange);},onModeChange:function(){var $t=$(this),$switcher=$t.closest('.'+S.classes.main),$table=$t.closest('.tablesaw-bar').nextUntil($table).eq(0),val=$t.val();$switcher.remove();$table.data('table').destroy();$table.attr('data-tablesaw-mode',val);$table.table();}};$(win.document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.$table.is(S.selectors.init)){S.init(Tablesaw.table);}});})(this,jQuery);
;(function($){ $(function(){$(document).trigger("enhance.tablesaw");});})(jQuery);
(function (root, factory) {
if (typeof define === 'function' && define.amd) {
define(factory);
} else if (typeof exports === 'object') {
module.exports = factory();
} else {
root.PhotoSwipe = factory();
}
})(this, function () {
'use strict';
var PhotoSwipe = function(template, UiClass, items, options){
var framework = {
features: null,
bind: function(target, type, listener, unbind) {
var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
type = type.split(' ');
for(var i = 0; i < type.length; i++) {
if(type[i]) {
target[methodName]( type[i], listener, false);
}
}
},
isArray: function(obj) {
return (obj instanceof Array);
},
createEl: function(classes, tag) {
var el = document.createElement(tag || 'div');
if(classes) {
el.className = classes;
}
return el;
},
getScrollY: function() {
var yOffset = window.pageYOffset;
return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
},
unbind: function(target, type, listener) {
framework.bind(target,type,listener,true);
},
removeClass: function(el, className) {
var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
},
addClass: function(el, className) {
if( !framework.hasClass(el,className) ) {
el.className += (el.className ? ' ' : '') + className;
}
},
hasClass: function(el, className) {
return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
},
getChildByClass: function(parentEl, childClassName) {
var node = parentEl.firstChild;
while(node) {
if( framework.hasClass(node, childClassName) ) {
return node;
}
node = node.nextSibling;
}
},
arraySearch: function(array, value, key) {
var i = array.length;
while(i--) {
if(array[i][key] === value) {
return i;
}
}
return -1;
},
extend: function(o1, o2, preventOverwrite) {
for (var prop in o2) {
if (o2.hasOwnProperty(prop)) {
if(preventOverwrite && o1.hasOwnProperty(prop)) {
continue;
}
o1[prop] = o2[prop];
}
}
},
easing: {
sine: {
out: function(k) {
return Math.sin(k * (Math.PI / 2));
},
inOut: function(k) {
return - (Math.cos(Math.PI * k) - 1) / 2;
}
},
cubic: {
out: function(k) {
return --k * k * k + 1;
}
}
},
detectFeatures: function() {
if(framework.features) {
return framework.features;
}
var helperEl = framework.createEl(),
helperStyle = helperEl.style,
vendor = '',
features = {};
features.oldIE = document.all && !document.addEventListener;
features.touch = 'ontouchstart' in window;
if(window.requestAnimationFrame) {
features.raf = window.requestAnimationFrame;
features.caf = window.cancelAnimationFrame;
}
features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;
if(!features.pointerEvent) {
var ua = navigator.userAgent;
if (/iP(hone|od)/.test(navigator.platform)) {
var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
if(v && v.length > 0) {
v = parseInt(v[1], 10);
if(v >= 1 && v < 8 ) {
features.isOldIOSPhone = true;
}
}
}
var match = ua.match(/Android\s([0-9\.]*)/);
var androidversion =  match ? match[1] : 0;
androidversion = parseFloat(androidversion);
if(androidversion >= 1 ) {
if(androidversion < 4.4) {
features.isOldAndroid = true; 
}
features.androidVersion = androidversion; 
}
features.isMobileOpera = /opera mini|opera mobi/i.test(ua);
}
var styleChecks = ['transform', 'perspective', 'animationName'],
vendors = ['', 'webkit','Moz','ms','O'],
styleCheckItem,
styleName;
for(var i = 0; i < 4; i++) {
vendor = vendors[i];
for(var a = 0; a < 3; a++) {
styleCheckItem = styleChecks[a];
styleName = vendor + (vendor ?
styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
styleCheckItem);
if(!features[styleCheckItem] && styleName in helperStyle ) {
features[styleCheckItem] = styleName;
}
}
if(vendor && !features.raf) {
vendor = vendor.toLowerCase();
features.raf = window[vendor+'RequestAnimationFrame'];
if(features.raf) {
features.caf = window[vendor+'CancelAnimationFrame'] ||
window[vendor+'CancelRequestAnimationFrame'];
}
}
}
if(!features.raf) {
var lastTime = 0;
features.raf = function(fn) {
var currTime = new Date().getTime();
var timeToCall = Math.max(0, 16 - (currTime - lastTime));
var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
lastTime = currTime + timeToCall;
return id;
};
features.caf = function(id) { clearTimeout(id); };
}
features.svg = !!document.createElementNS &&
!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
framework.features = features;
return features;
}
};
framework.detectFeatures();
if(framework.features.oldIE) {
framework.bind = function(target, type, listener, unbind) {
type = type.split(' ');
var methodName = (unbind ? 'detach' : 'attach') + 'Event',
evName,
_handleEv = function() {
listener.handleEvent.call(listener);
};
for(var i = 0; i < type.length; i++) {
evName = type[i];
if(evName) {
if(typeof listener === 'object' && listener.handleEvent) {
if(!unbind) {
listener['oldIE' + evName] = _handleEv;
} else {
if(!listener['oldIE' + evName]) {
return false;
}
}
target[methodName]( 'on' + evName, listener['oldIE' + evName]);
} else {
target[methodName]( 'on' + evName, listener);
}
}
}
};
}
var self = this;
var DOUBLE_TAP_RADIUS = 25,
NUM_HOLDERS = 3;
var _options = {
allowPanToNext:true,
spacing: 0.05,
bgOpacity: 1,
mouseUsed: false,
loop: false,
pinchToClose: true,
closeOnScroll: true,
closeOnVerticalDrag: true,
verticalDragRange: 0.75,
hideAnimationDuration: 333,
showAnimationDuration: 333,
showHideOpacity: false,
focus: true,
escKey: true,
arrowKeys: true,
mainScrollEndFriction: 0.35,
panEndFriction: 0.35,
isClickableElement: function(el) {
return el.tagName === 'A';
},
getDoubleTapZoom: function(isMouseClick, item) {
if(isMouseClick) {
return 1;
} else {
return item.initialZoomLevel < 0.7 ? 1 : 1.33;
}
},
maxSpreadZoom: 1.33,
modal: true,
scaleMode: 'fit' 
};
framework.extend(_options, options);
var _getEmptyPoint = function() {
return {x:0,y:0};
};
var _isOpen,
_isDestroying,
_closedByScroll,
_currentItemIndex,
_containerStyle,
_containerShiftIndex,
_currPanDist = _getEmptyPoint(),
_startPanOffset = _getEmptyPoint(),
_panOffset = _getEmptyPoint(),
_upMoveEvents, 
_downEvents, 
_globalEventHandlers,
_viewportSize = {},
_currZoomLevel,
_startZoomLevel,
_translatePrefix,
_translateSufix,
_updateSizeInterval,
_itemsNeedUpdate,
_currPositionIndex = 0,
_offset = {},
_slideSize = _getEmptyPoint(), 
_itemHolders,
_prevItemIndex,
_indexDiff = 0, 
_dragStartEvent,
_dragMoveEvent,
_dragEndEvent,
_dragCancelEvent,
_transformKey,
_pointerEventEnabled,
_isFixedPosition = true,
_likelyTouchDevice,
_modules = [],
_requestAF,
_cancelAF,
_initalClassName,
_initalWindowScrollY,
_oldIE,
_currentWindowScrollY,
_features,
_windowVisibleSize = {},
_renderMaxResolution = false,
_orientationChangeTimeout,
_registerModule = function(name, module) {
framework.extend(self, module.publicMethods);
_modules.push(name);
},
_getLoopedId = function(index) {
var numSlides = _getNumItems();
if(index > numSlides - 1) {
return index - numSlides;
} else  if(index < 0) {
return numSlides + index;
}
return index;
},
_listeners = {},
_listen = function(name, fn) {
if(!_listeners[name]) {
_listeners[name] = [];
}
return _listeners[name].push(fn);
},
_shout = function(name) {
var listeners = _listeners[name];
if(listeners) {
var args = Array.prototype.slice.call(arguments);
args.shift();
for(var i = 0; i < listeners.length; i++) {
listeners[i].apply(self, args);
}
}
},
_getCurrentTime = function() {
return new Date().getTime();
},
_applyBgOpacity = function(opacity) {
_bgOpacity = opacity;
if(opacity){
$(self.bg).stop().animate({opacity:opacity}, 0);
}else{
setTimeout(function() {
$(self.bg).stop().animate({opacity:opacity}, 100);
},300)
}
},
_applyZoomTransform = function(styleObj,x,y,zoom,item) {
if(!_renderMaxResolution || (item && item !== self.currItem) ) {
zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
}
styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
},
_applyCurrentZoomPan = function( allowRenderResolution ) {
if(_currZoomElementStyle) {
if(allowRenderResolution) {
if(_currZoomLevel > self.currItem.fitRatio) {
if(!_renderMaxResolution) {
_setImageSize(self.currItem, false, true);
_renderMaxResolution = true;
}
} else {
if(_renderMaxResolution) {
_setImageSize(self.currItem);
_renderMaxResolution = false;
}
}
}
_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
}
},
_applyZoomPanToItem = function(item) {
if(item.container) {
_applyZoomTransform(item.container.style,
item.initialPosition.x,
item.initialPosition.y,
item.initialZoomLevel,
item);
}
},
_setTranslateX = function(x, elStyle) {
elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
},
_moveMainScroll = function(x, dragging) {
if(!_options.loop && dragging) {
var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
delta = Math.round(x - _mainScrollPos.x);
if( (newSlideIndexOffset < 0 && delta > 0) ||
(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
}
}
_mainScrollPos.x = x;
_setTranslateX(x, _containerStyle);
},
_calculatePanOffset = function(axis, zoomLevel) {
var m = _midZoomPoint[axis] - _offset[axis];
return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
},
_equalizePoints = function(p1, p2) {
p1.x = p2.x;
p1.y = p2.y;
if(p2.id) {
p1.id = p2.id;
}
},
_roundPoint = function(p) {
p.x = Math.round(p.x);
p.y = Math.round(p.y);
},
_mouseMoveTimeout = null,
_onFirstMouseMove = function() {
if(_mouseMoveTimeout ) {
framework.unbind(document, 'mousemove', _onFirstMouseMove);
framework.addClass(template, 'pswp--has_mouse');
_options.mouseUsed = true;
_shout('mouseUsed');
}
_mouseMoveTimeout = setTimeout(function() {
_mouseMoveTimeout = null;
}, 100);
},
_bindEvents = function() {
framework.bind(document, 'keydown', self);
if(_features.transform) {
framework.bind(self.scrollWrap, 'click', self);
}
if(!_options.mouseUsed) {
framework.bind(document, 'mousemove', _onFirstMouseMove);
}
framework.bind(window, 'resize scroll orientationchange', self);
_shout('bindEvents');
},
_unbindEvents = function() {
framework.unbind(window, 'resize scroll orientationchange', self);
framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
framework.unbind(document, 'keydown', self);
framework.unbind(document, 'mousemove', _onFirstMouseMove);
if(_features.transform) {
framework.unbind(self.scrollWrap, 'click', self);
}
if(_isDragging) {
framework.unbind(window, _upMoveEvents, self);
}
clearTimeout(_orientationChangeTimeout);
_shout('unbindEvents');
},
_calculatePanBounds = function(zoomLevel, update) {
var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
if(update) {
_currPanBounds = bounds;
}
return bounds;
},
_getMinZoomLevel = function(item) {
if(!item) {
item = self.currItem;
}
return item.initialZoomLevel;
},
_getMaxZoomLevel = function(item) {
if(!item) {
item = self.currItem;
}
return item.w > 0 ? _options.maxSpreadZoom : 1;
},
_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
if(destZoomLevel === self.currItem.initialZoomLevel) {
destPanOffset[axis] = self.currItem.initialPosition[axis];
return true;
} else {
destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);
if(destPanOffset[axis] > destPanBounds.min[axis]) {
destPanOffset[axis] = destPanBounds.min[axis];
return true;
} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
destPanOffset[axis] = destPanBounds.max[axis];
return true;
}
}
return false;
},
_setupTransforms = function() {
if(_transformKey) {
var allow3dTransform = _features.perspective && !_likelyTouchDevice;
_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
_translateSufix = _features.perspective ? ', 0px)' : ')';
return;
}
_transformKey = 'left';
framework.addClass(template, 'pswp--ie');
_setTranslateX = function(x, elStyle) {
elStyle.left = x + 'px';
};
_applyZoomPanToItem = function(item) {
var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
s = item.container.style,
w = zoomRatio * item.w,
h = zoomRatio * item.h;
s.width = w + 'px';
s.height = h + 'px';
s.left = item.initialPosition.x + 'px';
s.top = item.initialPosition.y + 'px';
};
_applyCurrentZoomPan = function() {
if(_currZoomElementStyle) {
var s = _currZoomElementStyle,
item = self.currItem,
zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
w = zoomRatio * item.w,
h = zoomRatio * item.h;
s.width = w + 'px';
s.height = h + 'px';
s.left = _panOffset.x + 'px';
s.top = _panOffset.y + 'px';
}
};
},
_onKeyDown = function(e) {
var keydownAction = '';
if(_options.escKey && e.keyCode === 27) {
keydownAction = 'close';
} else if(_options.arrowKeys) {
if(e.keyCode === 37) {
keydownAction = 'prev';
} else if(e.keyCode === 39) {
keydownAction = 'next';
}
}
if(keydownAction) {
if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
if(e.preventDefault) {
e.preventDefault();
} else {
e.returnValue = false;
}
self[keydownAction]();
}
}
},
_onGlobalClick = function(e) {
if(!e) {
return;
}
if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
e.preventDefault();
e.stopPropagation();
}
},
_updatePageScrollOffset = function() {
self.setScrollOffset(0, framework.getScrollY());
}
var _animations = {},
_numAnimations = 0,
_stopAnimation = function(name) {
if(_animations[name]) {
if(_animations[name].raf) {
_cancelAF( _animations[name].raf );
}
_numAnimations--;
delete _animations[name];
}
},
_registerStartAnimation = function(name) {
if(_animations[name]) {
_stopAnimation(name);
}
if(!_animations[name]) {
_numAnimations++;
_animations[name] = {};
}
},
_stopAllAnimations = function() {
for (var prop in _animations) {
if( _animations.hasOwnProperty( prop ) ) {
_stopAnimation(prop);
}
}
},
_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
var startAnimTime = _getCurrentTime(), t;
_registerStartAnimation(name);
var animloop = function(){
if ( _animations[name] ) {
t = _getCurrentTime() - startAnimTime; 
if ( t >= d ) {
_stopAnimation(name);
onUpdate(endProp);
if(onComplete) {
onComplete();
}
return;
}
onUpdate( (endProp - b) * easingFn(t/d) + b );
_animations[name].raf = _requestAF(animloop);
}
};
animloop();
};
var publicMethods = {
shout: _shout,
listen: _listen,
viewportSize: _viewportSize,
options: _options,
isMainScrollAnimating: function() {
return _mainScrollAnimating;
},
getZoomLevel: function() {
return _currZoomLevel;
},
getCurrentIndex: function() {
return _currentItemIndex;
},
isDragging: function() {
return _isDragging;
},
isZooming: function() {
return _isZooming;
},
setScrollOffset: function(x,y) {
_offset.x = x;
_currentWindowScrollY = _offset.y = y;
_shout('updateScrollOffset', _offset);
},
applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
_panOffset.x = panX;
_panOffset.y = panY;
_currZoomLevel = zoomLevel;
_applyCurrentZoomPan( allowRenderResolution );
},
init: function() {
if(_isOpen || _isDestroying) {
return;
}
var i;
self.framework = framework; 
self.template = template; 
self.bg = framework.getChildByClass(template, 'pswp__bg');
_initalClassName = template.className;
_isOpen = true;
_features = framework.detectFeatures();
_requestAF = _features.raf;
_cancelAF = _features.caf;
_transformKey = _features.transform;
_oldIE = _features.oldIE;
self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');
_containerStyle = self.container.style; 
self.itemHolders = _itemHolders = [
{el:self.container.children[0] , wrap:0, index: -1},
{el:self.container.children[1] , wrap:0, index: -1},
{el:self.container.children[2] , wrap:0, index: -1}
];
_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';
_setupTransforms();
_globalEventHandlers = {
resize: self.updateSize,
orientationchange: function() {
clearTimeout(_orientationChangeTimeout);
_orientationChangeTimeout = setTimeout(function() {
if(_viewportSize.x !== self.scrollWrap.clientWidth) {
self.updateSize();
}
}, 500);
},
scroll: _updatePageScrollOffset,
keydown: _onKeyDown,
click: _onGlobalClick
};
var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
if(!_features.animationName || !_features.transform || oldPhone) {
_options.showAnimationDuration = _options.hideAnimationDuration = 0;
}
for(i = 0; i < _modules.length; i++) {
self['init' + _modules[i]]();
}
if(UiClass) {
var ui = self.ui = new UiClass(self, framework);
ui.init();
}
_shout('firstUpdate');
_currentItemIndex = _currentItemIndex || _options.index || 0;
if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
_currentItemIndex = 0;
}
self.currItem = _getItemAt( _currentItemIndex );
if(_features.isOldIOSPhone || _features.isOldAndroid) {
_isFixedPosition = false;
}
template.setAttribute('aria-hidden', 'false');
if(_options.modal) {
if(!_isFixedPosition) {
template.style.position = 'absolute';
template.style.top = framework.getScrollY() + 'px';
} else {
template.style.position = 'fixed';
}
}
if(_currentWindowScrollY === undefined) {
_shout('initialLayout');
_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
}
var rootClasses = 'pswp--open ';
if(_options.mainClass) {
rootClasses += _options.mainClass + ' ';
}
if(_options.showHideOpacity) {
rootClasses += 'pswp--animate_opacity ';
}
rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
rootClasses += _features.animationName ? ' pswp--css_animation' : '';
rootClasses += _features.svg ? ' pswp--svg' : '';
framework.addClass(template, rootClasses);
self.updateSize();
_containerShiftIndex = -1;
_indexDiff = null;
for(i = 0; i < NUM_HOLDERS; i++) {
_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
}
if(!_oldIE) {
framework.bind(self.scrollWrap, _downEvents, self); 
}
_listen('initialZoomInEnd', function() {
self.setContent(_itemHolders[0], _currentItemIndex-1);
self.setContent(_itemHolders[2], _currentItemIndex+1);
_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';
if(_options.focus) {
template.focus();
}
_bindEvents();
});
self.setContent(_itemHolders[1], _currentItemIndex);
self.updateCurrItem();
_shout('afterInit');
if(!_isFixedPosition) {
_updateSizeInterval = setInterval(function() {
if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
self.updateSize();
}
}, 1000);
}
framework.addClass(template, 'pswp--visible');
setTimeout(function(){
$('html').css({overflow:'hidden',height:'100%'});
},300);
},
close: function() {
if(!_isOpen) {
return;
}
$('html').css({overflow:'',height:''});
_isOpen = false;
_isDestroying = true;
_shout('close');
_unbindEvents();
_showOrHide(self.currItem, null, true, self.destroy);
},
destroy: function() {
_shout('destroy');
if(_showOrHideTimeout) {
clearTimeout(_showOrHideTimeout);
}
template.setAttribute('aria-hidden', 'true');
template.className = _initalClassName;
if(_updateSizeInterval) {
clearInterval(_updateSizeInterval);
}
framework.unbind(self.scrollWrap, _downEvents, self);
framework.unbind(window, 'scroll', self);
_stopDragUpdateLoop();
_stopAllAnimations();
_listeners = null;
},
panTo: function(x,y,force) {
if(!force) {
if(x > _currPanBounds.min.x) {
x = _currPanBounds.min.x;
} else if(x < _currPanBounds.max.x) {
x = _currPanBounds.max.x;
}
if(y > _currPanBounds.min.y) {
y = _currPanBounds.min.y;
} else if(y < _currPanBounds.max.y) {
y = _currPanBounds.max.y;
}
}
_panOffset.x = x;
_panOffset.y = y;
_applyCurrentZoomPan();
},
handleEvent: function (e) {
e = e || window.event;
if(_globalEventHandlers[e.type]) {
_globalEventHandlers[e.type](e);
}
},
goTo: function(index) {
var $container=$(self.container);
$container.addClass('transition500');
setTimeout(function(){
$container.removeClass('transition500');
},500)
index = _getLoopedId(index);
var diff = index - _currentItemIndex;
_indexDiff = diff;
_currentItemIndex = index;
self.currItem = _getItemAt( _currentItemIndex );
_currPositionIndex -= diff;
_moveMainScroll(_slideSize.x * _currPositionIndex);
_stopAllAnimations();
_mainScrollAnimating = false;
self.updateCurrItem();
},
next: function() {
self.goTo( _currentItemIndex + 1);
},
prev: function() {
self.goTo( _currentItemIndex - 1);
},
updateCurrZoomItem: function(emulateSetContent) {
if(emulateSetContent) {
_shout('beforeChange', 0);
}
if(_itemHolders[1].el.children.length) {
var zoomElement = _itemHolders[1].el.children[0];
if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
_currZoomElementStyle = zoomElement.style;
} else {
_currZoomElementStyle = null;
}
} else {
_currZoomElementStyle = null;
}
_currPanBounds = self.currItem.bounds;
_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
_panOffset.x = _currPanBounds.center.x;
_panOffset.y = _currPanBounds.center.y;
if(emulateSetContent) {
_shout('afterChange');
}
},
invalidateCurrItems: function() {
_itemsNeedUpdate = true;
for(var i = 0; i < NUM_HOLDERS; i++) {
if( _itemHolders[i].item ) {
_itemHolders[i].item.needsUpdate = true;
}
}
},
updateCurrItem: function(beforeAnimation) {
if(_indexDiff === 0) {
return;
}
var diffAbs = Math.abs(_indexDiff),
tempHolder;
if(beforeAnimation && diffAbs < 2) {
return;
}
self.currItem = _getItemAt( _currentItemIndex );
_renderMaxResolution = false;
_shout('beforeChange', _indexDiff);
if(diffAbs >= NUM_HOLDERS) {
_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
diffAbs = NUM_HOLDERS;
}
for(var i = 0; i < diffAbs; i++) {
if(_indexDiff > 0) {
tempHolder = _itemHolders.shift();
_itemHolders[NUM_HOLDERS-1] = tempHolder; 
_containerShiftIndex++;
_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
} else {
tempHolder = _itemHolders.pop();
_itemHolders.unshift( tempHolder ); 
_containerShiftIndex--;
_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
}
}
if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
var prevItem = _getItemAt(_prevItemIndex);
if(prevItem.initialZoomLevel !== _currZoomLevel) {
_calculateItemSize(prevItem , _viewportSize );
_setImageSize(prevItem);
_applyZoomPanToItem( prevItem );
}
}
_indexDiff = 0;
self.updateCurrZoomItem();
_prevItemIndex = _currentItemIndex;
_shout('afterChange');
},
updateSize: function(force) {
if(!_isFixedPosition && _options.modal) {
var windowScrollY = framework.getScrollY();
if(_currentWindowScrollY !== windowScrollY) {
template.style.top = windowScrollY + 'px';
_currentWindowScrollY = windowScrollY;
}
if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
return;
}
_windowVisibleSize.x = window.innerWidth;
_windowVisibleSize.y = window.innerHeight;
template.style.height = _windowVisibleSize.y + 'px';
}
_viewportSize.x = self.scrollWrap.clientWidth;
_viewportSize.y = self.scrollWrap.clientHeight;
_updatePageScrollOffset();
_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
_slideSize.y = _viewportSize.y;
_moveMainScroll(_slideSize.x * _currPositionIndex);
_shout('beforeResize'); 
if(_containerShiftIndex !== undefined) {
var holder,
item,
hIndex;
for(var i = 0; i < NUM_HOLDERS; i++) {
holder = _itemHolders[i];
_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);
hIndex = _currentItemIndex+i-1;
if(_options.loop && _getNumItems() > 2) {
hIndex = _getLoopedId(hIndex);
}
item = _getItemAt( hIndex );
if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {
self.cleanSlide( item );
self.setContent( holder, hIndex );
if(i === 1) {
self.currItem = item;
self.updateCurrZoomItem(true);
}
item.needsUpdate = false;
} else if(holder.index === -1 && hIndex >= 0) {
self.setContent( holder, hIndex );
}
if(item && item.container) {
_calculateItemSize(item, _viewportSize);
_setImageSize(item);
_applyZoomPanToItem( item );
}
}
_itemsNeedUpdate = false;
}
_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
_currPanBounds = self.currItem.bounds;
if(_currPanBounds) {
_panOffset.x = _currPanBounds.center.x;
_panOffset.y = _currPanBounds.center.y;
_applyCurrentZoomPan( true );
}
_shout('resize');
},
zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
if(centerPoint) {
_startZoomLevel = _currZoomLevel;
_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
_equalizePoints(_startPanOffset, _panOffset);
}
var destPanBounds = _calculatePanBounds(destZoomLevel, false),
destPanOffset = {};
_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);
var initialZoomLevel = _currZoomLevel;
var initialPanOffset = {
x: _panOffset.x,
y: _panOffset.y
};
_roundPoint(destPanOffset);
var onUpdate = function(now) {
if(now === 1) {
_currZoomLevel = destZoomLevel;
_panOffset.x = destPanOffset.x;
_panOffset.y = destPanOffset.y;
} else {
_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
}
if(updateFn) {
updateFn(now);
}
_applyCurrentZoomPan( now === 1 );
};
if(speed) {
_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
} else {
onUpdate(1);
}
},
};
var MIN_SWIPE_DISTANCE = 30,
DIRECTION_CHECK_OFFSET = 10; 
var _gestureStartTime,
_gestureCheckSpeedTime,
p = {}, 
p2 = {}, 
delta = {},
_currPoint = {},
_startPoint = {},
_currPointers = [],
_startMainScrollPos = {},
_releaseAnimData,
_posPoints = [], 
_tempPoint = {},
_isZoomingIn,
_verticalDragInitiated,
_oldAndroidTouchEndTimeout,
_currZoomedItemIndex = 0,
_centerPoint = _getEmptyPoint(),
_lastReleaseTime = 0,
_isDragging, 
_isMultitouch, 
_zoomStarted, 
_moved,
_dragAnimFrame,
_mainScrollShifted,
_currentPoints, 
_isZooming,
_currPointsDistance,
_startPointsDistance,
_currPanBounds,
_mainScrollPos = _getEmptyPoint(),
_currZoomElementStyle,
_mainScrollAnimating, 
_midZoomPoint = _getEmptyPoint(),
_currCenterPoint = _getEmptyPoint(),
_direction,
_isFirstMove,
_opacityChanged,
_bgOpacity,
_wasOverInitialZoom,
_isEqualPoints = function(p1, p2) {
return p1.x === p2.x && p1.y === p2.y;
},
_isNearbyPoints = function(touch0, touch1) {
return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
},
_calculatePointsDistance = function(p1, p2) {
_tempPoint.x = Math.abs( p1.x - p2.x );
_tempPoint.y = Math.abs( p1.y - p2.y );
return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
},
_stopDragUpdateLoop = function() {
if(_dragAnimFrame) {
_cancelAF(_dragAnimFrame);
_dragAnimFrame = null;
}
},
_dragUpdateLoop = function() {
if(_isDragging) {
_dragAnimFrame = _requestAF(_dragUpdateLoop);
_renderMovement();
}
},
_canPan = function() {
return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
},
_closestElement = function(el, fn) {
if(!el || el === document) {
return false;
}
if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
return false;
}
if( fn(el) ) {
return el;
}
return _closestElement(el.parentNode, fn);
},
_preventObj = {},
_preventDefaultEventBehaviour = function(e, isDown) {
_preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);
_shout('preventDragEvent', e, isDown, _preventObj);
return _preventObj.prevent;
},
_convertTouchToPoint = function(touch, p) {
p.x = touch.pageX;
p.y = touch.pageY;
p.id = touch.identifier;
return p;
},
_findCenterOfPoints = function(p1, p2, pCenter) {
pCenter.x = (p1.x + p2.x) * 0.5;
pCenter.y = (p1.y + p2.y) * 0.5;
},
_pushPosPoint = function(time, x, y) {
if(time - _gestureCheckSpeedTime > 50) {
var o = _posPoints.length > 2 ? _posPoints.shift() : {};
o.x = x;
o.y = y;
_posPoints.push(o);
_gestureCheckSpeedTime = time;
}
},
_calculateVerticalDragOpacityRatio = function() {
var yOffset = _panOffset.y - self.currItem.initialPosition.y; 
return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
},
_ePoint1 = {},
_ePoint2 = {},
_tempPointsArr = [],
_tempCounter,
_getTouchPoints = function(e) {
while(_tempPointsArr.length > 0) {
_tempPointsArr.pop();
}
if(!_pointerEventEnabled) {
if(e.type.indexOf('touch') > -1) {
if(e.touches && e.touches.length > 0) {
_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
if(e.touches.length > 1) {
_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
}
}
} else {
_ePoint1.x = e.pageX;
_ePoint1.y = e.pageY;
_ePoint1.id = '';
_tempPointsArr[0] = _ePoint1;//_ePoint1;
}
} else {
_tempCounter = 0;
_currPointers.forEach(function(p) {
if(_tempCounter === 0) {
_tempPointsArr[0] = p;
} else if(_tempCounter === 1) {
_tempPointsArr[1] = p;
}
_tempCounter++;
});
}
return _tempPointsArr;
},
_panOrMoveMainScroll = function(axis, delta) {
var panFriction,
overDiff = 0,
newOffset = _panOffset[axis] + delta[axis],
startOverDiff,
dir = delta[axis] > 0,
newMainScrollPosition = _mainScrollPos.x + delta.x,
mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
newPanPos,
newMainScrollPos;
if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
panFriction = _options.panEndFriction;
} else {
panFriction = 1;
}
newOffset = _panOffset[axis] + delta[axis] * panFriction;
if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
if(!_currZoomElementStyle) {
newMainScrollPos = newMainScrollPosition;
} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
if(dir) {
if(newOffset > _currPanBounds.min[axis]) {
panFriction = _options.panEndFriction;
overDiff = _currPanBounds.min[axis] - newOffset;
startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
}
if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
newMainScrollPos = newMainScrollPosition;
if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
newMainScrollPos = _startMainScrollPos.x;
}
} else {
if(_currPanBounds.min.x !== _currPanBounds.max.x) {
newPanPos = newOffset;
}
}
} else {
if(newOffset < _currPanBounds.max[axis] ) {
panFriction =_options.panEndFriction;
overDiff = newOffset - _currPanBounds.max[axis];
startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
}
if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
newMainScrollPos = newMainScrollPosition;
if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
newMainScrollPos = _startMainScrollPos.x;
}
} else {
if(_currPanBounds.min.x !== _currPanBounds.max.x) {
newPanPos = newOffset;
}
}
}
}
if(axis === 'x') {
if(newMainScrollPos !== undefined) {
_moveMainScroll(newMainScrollPos, true);
if(newMainScrollPos === _startMainScrollPos.x) {
_mainScrollShifted = false;
} else {
_mainScrollShifted = true;
}
}
if(_currPanBounds.min.x !== _currPanBounds.max.x) {
if(newPanPos !== undefined) {
_panOffset.x = newPanPos;
} else if(!_mainScrollShifted) {
_panOffset.x += delta.x * panFriction;
}
}
return newMainScrollPos !== undefined;
}
}
if(!_mainScrollAnimating) {
if(!_mainScrollShifted) {
if(_currZoomLevel > self.currItem.fitRatio) {
_panOffset[axis] += delta[axis] * panFriction;
}
}
}
},
_onDragStart = function(e) {
if(e.type === 'mousedown' && e.button > 0  ) {
return;
}
if(_initialZoomRunning) {
e.preventDefault();
return;
}
if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
return;
}
if(_preventDefaultEventBehaviour(e, true)) {
e.preventDefault();
}
_shout('pointerDown');
if(_pointerEventEnabled) {
var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
if(pointerIndex < 0) {
pointerIndex = _currPointers.length;
}
_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
}
var startPointsList = _getTouchPoints(e),
numPoints = startPointsList.length;
_currentPoints = null;
_stopAllAnimations();
if(!_isDragging || numPoints === 1) {
_isDragging = _isFirstMove = true;
framework.bind(window, _upMoveEvents, self);
_isZoomingIn =
_wasOverInitialZoom =
_opacityChanged =
_verticalDragInitiated =
_mainScrollShifted =
_moved =
_isMultitouch =
_zoomStarted = false;
_direction = null;
_shout('firstTouchStart', startPointsList);
_equalizePoints(_startPanOffset, _panOffset);
_currPanDist.x = _currPanDist.y = 0;
_equalizePoints(_currPoint, startPointsList[0]);
_equalizePoints(_startPoint, _currPoint);
_startMainScrollPos.x = _slideSize.x * _currPositionIndex;
_posPoints = [{
x: _currPoint.x,
y: _currPoint.y
}];
_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();
_calculatePanBounds( _currZoomLevel, true );
_stopDragUpdateLoop();
_dragUpdateLoop();
}
if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
_startZoomLevel = _currZoomLevel;
_zoomStarted = false; 
_isZooming = _isMultitouch = true;
_currPanDist.y = _currPanDist.x = 0;
_equalizePoints(_startPanOffset, _panOffset);
_equalizePoints(p, startPointsList[0]);
_equalizePoints(p2, startPointsList[1]);
_findCenterOfPoints(p, p2, _currCenterPoint);
_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
}
},
_onDragMove = function(e) {
e.preventDefault();
if(_pointerEventEnabled) {
var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
if(pointerIndex > -1) {
var p = _currPointers[pointerIndex];
p.x = e.pageX;
p.y = e.pageY;
}
}
if(_isDragging) {
var touchesList = _getTouchPoints(e);
if(!_direction && !_moved && !_isZooming) {
if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
_direction = 'h';
} else {
var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
_direction = diff > 0 ? 'h' : 'v';
_currentPoints = touchesList;
}
}
} else {
_currentPoints = touchesList;
}
}
},
_renderMovement =  function() {
if(!_currentPoints) {
return;
}
var numPoints = _currentPoints.length;
if(numPoints === 0) {
return;
}
_equalizePoints(p, _currentPoints[0]);
delta.x = p.x - _currPoint.x;
delta.y = p.y - _currPoint.y;
if(_isZooming && numPoints > 1) {
_currPoint.x = p.x;
_currPoint.y = p.y;
if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
return;
}
_equalizePoints(p2, _currentPoints[1]);
if(!_zoomStarted) {
_zoomStarted = true;
_shout('zoomGestureStarted');
}
var pointsDistance = _calculatePointsDistance(p,p2);
var zoomLevel = _calculateZoomLevel(pointsDistance);
if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
_wasOverInitialZoom = true;
}
var zoomFriction = 1,
minZoomLevel = _getMinZoomLevel(),
maxZoomLevel = _getMaxZoomLevel();
if ( zoomLevel < minZoomLevel ) {
if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
var minusDiff = minZoomLevel - zoomLevel;
var percent = 1 - minusDiff / (minZoomLevel / 1.2);
_applyBgOpacity(percent);
_shout('onPinchClose', percent);
_opacityChanged = true;
} else {
zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
if(zoomFriction > 1) {
zoomFriction = 1;
}
zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
}
} else if ( zoomLevel > maxZoomLevel ) {
zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
if(zoomFriction > 1) {
zoomFriction = 1;
}
zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
}
if(zoomFriction < 0) {
zoomFriction = 0;
}
_currPointsDistance = pointsDistance;
_findCenterOfPoints(p, p2, _centerPoint);
_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
_equalizePoints(_currCenterPoint, _centerPoint);
_panOffset.x = _calculatePanOffset('x', zoomLevel);
_panOffset.y = _calculatePanOffset('y', zoomLevel);
_isZoomingIn = zoomLevel > _currZoomLevel;
_currZoomLevel = zoomLevel;
_applyCurrentZoomPan();
} else {
if(!_direction) {
return;
}
if(_isFirstMove) {
_isFirstMove = false;
if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
delta.x -= _currentPoints[0].x - _startPoint.x;
}
if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
delta.y -= _currentPoints[0].y - _startPoint.y;
}
}
_currPoint.x = p.x;
_currPoint.y = p.y;
if(delta.x === 0 && delta.y === 0) {
return;
}
if(_direction === 'v' && _options.closeOnVerticalDrag) {
if(!_canPan()) {
_currPanDist.y += delta.y;
_panOffset.y += delta.y;
var opacityRatio = _calculateVerticalDragOpacityRatio();
_verticalDragInitiated = true;
_shout('onVerticalDrag', opacityRatio);
_applyBgOpacity(opacityRatio);
_applyCurrentZoomPan();
return ;
}
}
_pushPosPoint(_getCurrentTime(), p.x, p.y);
_moved = true;
_currPanBounds = self.currItem.bounds;
var mainScrollChanged = _panOrMoveMainScroll('x', delta);
if(!mainScrollChanged) {
_panOrMoveMainScroll('y', delta);
_roundPoint(_panOffset);
_applyCurrentZoomPan();
}
}
},
_onDragRelease = function(e) {
if(_features.isOldAndroid ) {
if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
return;
}
if( e.type.indexOf('touch') > -1 ) {
clearTimeout(_oldAndroidTouchEndTimeout);
_oldAndroidTouchEndTimeout = setTimeout(function() {
_oldAndroidTouchEndTimeout = 0;
}, 600);
}
}
_shout('pointerUp');
if(_preventDefaultEventBehaviour(e, false)) {
e.preventDefault();
}
var releasePoint;
if(_pointerEventEnabled) {
var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
if(pointerIndex > -1) {
releasePoint = _currPointers.splice(pointerIndex, 1)[0];
if(navigator.pointerEnabled) {
releasePoint.type = e.pointerType || 'mouse';
} else {
var MSPOINTER_TYPES = {
4: 'mouse', 
2: 'touch', 
3: 'pen' 
};
releasePoint.type = MSPOINTER_TYPES[e.pointerType];
if(!releasePoint.type) {
releasePoint.type = e.pointerType || 'mouse';
}
}
}
}
var touchList = _getTouchPoints(e),
gestureType,
numPoints = touchList.length;
if(e.type === 'mouseup') {
numPoints = 0;
}
if(numPoints === 2) {
_currentPoints = null;
return true;
}
if(numPoints === 1) {
_equalizePoints(_startPoint, touchList[0]);
}
if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
if(!releasePoint) {
if(e.type === 'mouseup') {
releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
} else if(e.changedTouches && e.changedTouches[0]) {
releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
}
}
_shout('touchRelease', e, releasePoint);
}
var releaseTimeDiff = -1;
if(numPoints === 0) {
_isDragging = false;
framework.unbind(window, _upMoveEvents, self);
_stopDragUpdateLoop();
if(_isZooming) {
releaseTimeDiff = 0;
} else if(_lastReleaseTime !== -1) {
releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
}
}
_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
gestureType = 'zoom';
} else {
gestureType = 'swipe';
}
if(_isZooming && numPoints < 2) {
_isZooming = false;
if(numPoints === 1) {
gestureType = 'zoomPointerUp';
}
_shout('zoomGestureEnded');
}
_currentPoints = null;
if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
return;
}
_stopAllAnimations();
if(!_releaseAnimData) {
_releaseAnimData = _initDragReleaseAnimationData();
}
_releaseAnimData.calculateSwipeSpeed('x');
if(_verticalDragInitiated) {
var opacityRatio = _calculateVerticalDragOpacityRatio();
if(opacityRatio < _options.verticalDragRange) {
self.close();
} else {
var initalPanY = _panOffset.y,
initialBgOpacity = _bgOpacity;
_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;
_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
_applyCurrentZoomPan();
});
_shout('onVerticalDrag', 1);
}
return;
}
if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
if(itemChanged) {
return;
}
gestureType = 'zoomPointerUp';
}
if(_mainScrollAnimating) {
return;
}
if(gestureType !== 'swipe') {
_completeZoomGesture();
return;
}
if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
_completePanGesture(_releaseAnimData);
}
},
_initDragReleaseAnimationData  = function() {
var lastFlickDuration,
tempReleasePos;
var s = {
lastFlickOffset: {},
lastFlickDist: {},
lastFlickSpeed: {},
slowDownRatio:  {},
slowDownRatioReverse:  {},
speedDecelerationRatio:  {},
speedDecelerationRatioAbs:  {},
distanceOffset:  {},
backAnimDestination: {},
backAnimStarted: {},
calculateSwipeSpeed: function(axis) {
if( _posPoints.length > 1) {
lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
tempReleasePos = _posPoints[_posPoints.length-2][axis];
} else {
lastFlickDuration = _getCurrentTime() - _gestureStartTime; 
tempReleasePos = _startPoint[axis];
}
s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
if(s.lastFlickDist[axis] > 20) {
s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
} else {
s.lastFlickSpeed[axis] = 0;
}
if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
s.lastFlickSpeed[axis] = 0;
}
s.slowDownRatio[axis] = 0.95;
s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
s.speedDecelerationRatio[axis] = 1;
},
calculateOverBoundsAnimOffset: function(axis, speed) {
if(!s.backAnimStarted[axis]) {
if(_panOffset[axis] > _currPanBounds.min[axis]) {
s.backAnimDestination[axis] = _currPanBounds.min[axis];
} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
s.backAnimDestination[axis] = _currPanBounds.max[axis];
}
if(s.backAnimDestination[axis] !== undefined) {
s.slowDownRatio[axis] = 0.7;
s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
if(s.speedDecelerationRatioAbs[axis] < 0.05) {
s.lastFlickSpeed[axis] = 0;
s.backAnimStarted[axis] = true;
_animateProp('bounceZoomPan'+axis,_panOffset[axis],
s.backAnimDestination[axis],
speed || 300,
framework.easing.sine.out,
function(pos) {
_panOffset[axis] = pos;
_applyCurrentZoomPan();
}
);
}
}
}
},
calculateAnimOffset: function(axis) {
if(!s.backAnimStarted[axis]) {
s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
s.slowDownRatioReverse[axis] -
s.slowDownRatioReverse[axis] * s.timeDiff / 10);
s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
_panOffset[axis] += s.distanceOffset[axis];
}
},
panAnimLoop: function() {
if ( _animations.zoomPan ) {
_animations.zoomPan.raf = _requestAF(s.panAnimLoop);
s.now = _getCurrentTime();
s.timeDiff = s.now - s.lastNow;
s.lastNow = s.now;
s.calculateAnimOffset('x');
s.calculateAnimOffset('y');
_applyCurrentZoomPan();
s.calculateOverBoundsAnimOffset('x');
s.calculateOverBoundsAnimOffset('y');
if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
_panOffset.x = Math.round(_panOffset.x);
_panOffset.y = Math.round(_panOffset.y);
_applyCurrentZoomPan();
_stopAnimation('zoomPan');
return;
}
}
}
};
return s;
},
_completePanGesture = function(animData) {
animData.calculateSwipeSpeed('y');
_currPanBounds = self.currItem.bounds;
animData.backAnimDestination = {};
animData.backAnimStarted = {};
if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;
animData.calculateOverBoundsAnimOffset('x');
animData.calculateOverBoundsAnimOffset('y');
return true;
}
_registerStartAnimation('zoomPan');
animData.lastNow = _getCurrentTime();
animData.panAnimLoop();
},
_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
var itemChanged;
if(!_mainScrollAnimating) {
_currZoomedItemIndex = _currentItemIndex;
}
var itemsDiff;
if(gestureType === 'swipe') {
var totalShiftDist = _currPoint.x - _startPoint.x,
isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;
if(totalShiftDist > MIN_SWIPE_DISTANCE &&
(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
itemsDiff = -1;
} else if(totalShiftDist < -MIN_SWIPE_DISTANCE &&
(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
itemsDiff = 1;
}
}
var nextCircle;
if(itemsDiff) {
_currentItemIndex += itemsDiff;
if(_currentItemIndex < 0) {
_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
nextCircle = true;
} else if(_currentItemIndex >= _getNumItems()) {
_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
nextCircle = true;
}
if(!nextCircle || _options.loop) {
_indexDiff += itemsDiff;
_currPositionIndex -= itemsDiff;
itemChanged = true;
}
}
var animateToX = _slideSize.x * _currPositionIndex;
var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
var finishAnimDuration;
if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
finishAnimDuration = 333;
} else {
finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
333;
finishAnimDuration = Math.min(finishAnimDuration, 400);
finishAnimDuration = Math.max(finishAnimDuration, 250);
}
if(_currZoomedItemIndex === _currentItemIndex) {
itemChanged = false;
}
_mainScrollAnimating = true;
_shout('mainScrollAnimStart');
_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
_moveMainScroll,
function() {
_stopAllAnimations();
_mainScrollAnimating = false;
_currZoomedItemIndex = -1;
if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
self.updateCurrItem();
}
_shout('mainScrollAnimComplete');
}
);
if(itemChanged) {
self.updateCurrItem(true);
}
return itemChanged;
},
_calculateZoomLevel = function(touchesDistance) {
return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
},
_completeZoomGesture = function() {
var destZoomLevel = _currZoomLevel,
minZoomLevel = _getMinZoomLevel(),
maxZoomLevel = _getMaxZoomLevel();
if ( _currZoomLevel < minZoomLevel ) {
destZoomLevel = minZoomLevel;
} else if ( _currZoomLevel > maxZoomLevel ) {
destZoomLevel = maxZoomLevel;
}
var destOpacity = 1,
onUpdate,
initialOpacity = _bgOpacity;
if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
self.close();
return true;
}
if(_opacityChanged) {
onUpdate = function(now) {
_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
};
}
self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
return true;
};
_registerModule('Gestures', {
publicMethods: {
initGestures: function() {
var addEventNames = function(pref, down, move, up, cancel) {
_dragStartEvent = pref + down;
_dragMoveEvent = pref + move;
_dragEndEvent = pref + up;
if(cancel) {
_dragCancelEvent = pref + cancel;
} else {
_dragCancelEvent = '';
}
};
_pointerEventEnabled = _features.pointerEvent;
if(_pointerEventEnabled && _features.touch) {
_features.touch = false;
}
if(_pointerEventEnabled) {
if(navigator.pointerEnabled) {
addEventNames('pointer', 'down', 'move', 'up', 'cancel');
} else {
addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
}
} else if(_features.touch) {
addEventNames('touch', 'start', 'move', 'end', 'cancel');
_likelyTouchDevice = true;
} else {
addEventNames('mouse', 'down', 'move', 'up');
}
_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
_downEvents = _dragStartEvent;
if(_pointerEventEnabled && !_likelyTouchDevice) {
_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
}
self.likelyTouchDevice = _likelyTouchDevice;
_globalEventHandlers[_dragStartEvent] = _onDragStart;
_globalEventHandlers[_dragMoveEvent] = _onDragMove;
_globalEventHandlers[_dragEndEvent] = _onDragRelease; 
if(_dragCancelEvent) {
_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
}
if(_features.touch) {
_downEvents += ' mousedown';
_upMoveEvents += ' mousemove mouseup';
_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
}
if(!_likelyTouchDevice) {
_options.allowPanToNext = false;
}
}
}
});
var _showOrHideTimeout,
_showOrHide = function(item, img, out, completeFn) {
if(_showOrHideTimeout) {
clearTimeout(_showOrHideTimeout);
}
_initialZoomRunning = true;
_initialContentSet = true;
var thumbBounds;
if(item.initialLayout) {
thumbBounds = item.initialLayout;
item.initialLayout = null;
} else {
thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
}
var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;
var onComplete = function() {
_stopAnimation('initialZoom');
if(!out) {
_applyBgOpacity(1);
if(img) {
img.style.display = 'block';
}
framework.addClass(template, 'pswp--animated-in');
_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
} else {
self.template.removeAttribute('style');
self.bg.removeAttribute('style');
}
if(completeFn) {
completeFn();
}
_initialZoomRunning = false;
};
if(!duration || !thumbBounds || thumbBounds.x === undefined) {
_shout('initialZoom' + (out ? 'Out' : 'In') );
_currZoomLevel = item.initialZoomLevel;
_equalizePoints(_panOffset,  item.initialPosition );
_applyCurrentZoomPan();
template.style.opacity = out ? 0 : 1;
_applyBgOpacity(1);
if(duration) {
setTimeout(function() {
onComplete();
}, duration);
} else {
onComplete();
}
return;
}
var startAnimation = function() {
var closeWithRaf = _closedByScroll,
fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
if(item.miniImg) {
item.miniImg.style.webkitBackfaceVisibility = 'hidden';
}
if(!out) {
_currZoomLevel = thumbBounds.w / item.w;
_panOffset.x = thumbBounds.x;
_panOffset.y = thumbBounds.y - _initalWindowScrollY;
self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
_applyCurrentZoomPan();
}
_registerStartAnimation('initialZoom');
if(out && !closeWithRaf) {
framework.removeClass(template, 'pswp--animated-in');
}
if(fadeEverything) {
if(out) {
framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
} else {
setTimeout(function() {
framework.addClass(template, 'pswp--animate_opacity');
}, 30);
}
}
_showOrHideTimeout = setTimeout(function() {
_shout('initialZoom' + (out ? 'Out' : 'In') );
if(!out) {
_currZoomLevel = item.initialZoomLevel;
_equalizePoints(_panOffset,  item.initialPosition );
_applyCurrentZoomPan();
_applyBgOpacity(1);
if(fadeEverything) {
template.style.opacity = 1;
} else {
_applyBgOpacity(1);
}
_showOrHideTimeout = setTimeout(onComplete, duration + 20);
} else {
var destZoomLevel = thumbBounds.w / item.w,
initialPanOffset = {
x: _panOffset.x,
y: _panOffset.y
},
initialZoomLevel = _currZoomLevel,
initalBgOpacity = _bgOpacity,
onUpdate = function(now) {
if(now === 1) {
_currZoomLevel = destZoomLevel;
_panOffset.x = thumbBounds.x;
_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
} else {
_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
}
_applyCurrentZoomPan();
if(fadeEverything) {
template.style.opacity = 1 - now;
} else {
_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
}
};
if(closeWithRaf) {
_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
} else {
onUpdate(1);
_showOrHideTimeout = setTimeout(onComplete, duration + 20);
}
}
}, out ? 25 : 90); 
};
startAnimation();
};
var _items,
_tempPanAreaSize = {},
_imagesToAppendPool = [],
_initialContentSet,
_initialZoomRunning,
_controllerDefaultOptions = {
index: 0,
errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
forceProgressiveLoading: false, 
preload: [1,1],
getNumItemsFn: function() {
return _items.length;
}
};
var _getItemAt,
_getNumItems,
_initialIsLoop,
_getZeroBounds = function() {
return {
center:{x:0,y:0},
max:{x:0,y:0},
min:{x:0,y:0}
};
},
_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
var bounds = item.bounds;
bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;
bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
Math.round(_tempPanAreaSize.x - realPanElementW) :
bounds.center.x;
bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
bounds.center.y;
bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
},
_calculateItemSize = function(item, viewportSize, zoomLevel) {
if (item.src && !item.loadError) {
var isInitial = !zoomLevel;
if(isInitial) {
if(!item.vGap) {
item.vGap = {top:0,bottom:0};
}
_shout('parseVerticalMargin', item);
}
_tempPanAreaSize.x = viewportSize.x;
_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;
if (isInitial) {
var hRatio = _tempPanAreaSize.x / item.w;
var vRatio = _tempPanAreaSize.y / item.h;
item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
var scaleMode = _options.scaleMode;
if (scaleMode === 'orig') {
zoomLevel = 1;
} else if (scaleMode === 'fit') {
zoomLevel = item.fitRatio;
}
if (zoomLevel > 1) {
zoomLevel = 1;
}
item.initialZoomLevel = zoomLevel;
if(!item.bounds) {
item.bounds = _getZeroBounds();
}
}
if(!zoomLevel) {
return;
}
_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);
if (isInitial && zoomLevel === item.initialZoomLevel) {
item.initialPosition = item.bounds.center;
}
return item.bounds;
} else {
item.w = item.h = 0;
item.initialZoomLevel = item.fitRatio = 1;
item.bounds = _getZeroBounds();
item.initialPosition = item.bounds.center;
return item.bounds;
}
},
_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
if(item.loadError) {
return;
}
if(img) {
item.imageAppended = true;
_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
baseDiv.appendChild(img);
if(keepPlaceholder) {
setTimeout(function() {
if(item && item.loaded && item.placeholder) {
item.placeholder.style.display = 'none';
item.placeholder = null;
}
}, 500);
}
}
},
_preloadImage = function(item) {
item.loading = true;
item.loaded = false;
var img = item.img = framework.createEl('pswp__img', 'img');
var onComplete = function() {
item.loading = false;
item.loaded = true;
if(item.loadComplete) {
item.loadComplete(item);
} else {
item.img = null; 
}
img.onload = img.onerror = null;
img = null;
};
img.onload = onComplete;
img.onerror = function() {
item.loadError = true;
onComplete();
};
img.src = item.src;
return img;
},
_checkForError = function(item, cleanUp) {
if(item.src && item.loadError && item.container) {
if(cleanUp) {
item.container.innerHTML = '';
}
item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
return true;
}
},
_setImageSize = function(item, img, maxRes) {
if(!item.src) {
return;
}
if(!img) {
img = item.container.lastChild;
}
var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
if(item.placeholder && !item.loaded) {
item.placeholder.style.width = w + 'px';
item.placeholder.style.height = h + 'px';
}
img.style.width = w + 'px';
img.style.height = h + 'px';
},
_appendImagesPool = function() {
if(_imagesToAppendPool.length) {
var poolItem;
for(var i = 0; i < _imagesToAppendPool.length; i++) {
poolItem = _imagesToAppendPool[i];
if( poolItem.holder.index === poolItem.index ) {
_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
}
}
_imagesToAppendPool = [];
}
};
_registerModule('Controller', {
publicMethods: {
lazyLoadItem: function(index) {
index = _getLoopedId(index);
var item = _getItemAt(index);
if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
return;
}
_shout('gettingData', index, item);
if (!item.src) {
return;
}
_preloadImage(item);
},
initController: function() {
framework.extend(_options, _controllerDefaultOptions, true);
self.items = _items = items;
_getItemAt = self.getItemAt;
_getNumItems = _options.getNumItemsFn; //self.getNumItems;
_initialIsLoop = _options.loop;
if(_getNumItems() < 3) {
_options.loop = false; 
}
_listen('beforeChange', function(diff) {
var p = _options.preload,
isNext = diff === null ? true : (diff >= 0),
preloadBefore = Math.min(p[0], _getNumItems() ),
preloadAfter = Math.min(p[1], _getNumItems() ),
i;
for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
self.lazyLoadItem(_currentItemIndex+i);
}
for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
self.lazyLoadItem(_currentItemIndex-i);
}
});
_listen('initialLayout', function() {
self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
});
_listen('mainScrollAnimComplete', _appendImagesPool);
_listen('initialZoomInEnd', _appendImagesPool);
_listen('destroy', function() {
var item;
for(var i = 0; i < _items.length; i++) {
item = _items[i];
if(item.container) {
item.container = null;
}
if(item.placeholder) {
item.placeholder = null;
}
if(item.img) {
item.img = null;
}
if(item.preloader) {
item.preloader = null;
}
if(item.loadError) {
item.loaded = item.loadError = false;
}
}
_imagesToAppendPool = null;
});
},
getItemAt: function(index) {
if (index >= 0) {
return _items[index] !== undefined ? _items[index] : false;
}
return false;
},
allowProgressiveImg: function() {
return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
},
setContent: function(holder, index) {
if(_options.loop) {
index = _getLoopedId(index);
}
var prevItem = self.getItemAt(holder.index);
if(prevItem) {
prevItem.container = null;
}
var item = self.getItemAt(index),
img;
if(!item) {
holder.el.innerHTML = '';
return;
}
_shout('gettingData', index, item);
holder.index = index;
holder.item = item;
var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');
if(!item.src && item.html) {
if(item.html.tagName) {
baseDiv.appendChild(item.html);
} else {
baseDiv.innerHTML = item.html;
}
}
_checkForError(item);
_calculateItemSize(item, _viewportSize);
if(item.src && !item.loadError && !item.loaded) {
item.loadComplete = function(item) {
if(!_isOpen) {
return;
}
if(holder && holder.index === index ) {
if( _checkForError(item, true) ) {
item.loadComplete = item.img = null;
_calculateItemSize(item, _viewportSize);
_applyZoomPanToItem(item);
if(holder.index === _currentItemIndex) {
self.updateCurrZoomItem();
}
return;
}
if( !item.imageAppended ) {
if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
_imagesToAppendPool.push({
item:item,
baseDiv:baseDiv,
img:item.img,
index:index,
holder:holder,
clearPlaceholder:true
});
} else {
_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
}
} else {
if(!_initialZoomRunning && item.placeholder) {
item.placeholder.style.display = 'none';
item.placeholder = null;
}
}
}
item.loadComplete = null;
item.img = null; 
_shout('imageLoadComplete', index, item);
};
if(framework.features.transform) {
var placeholderClassName = 'pswp__img pswp__img--placeholder';
placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');
var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
if(item.src) {
placeholder.src = item.src;
placeholder.style.display='none';
}
_setImageSize(item, placeholder);
baseDiv.appendChild(placeholder);
setTimeout(function(){
$('.pswp__img--placeholder').fadeIn();
},100)
item.placeholder = placeholder;
}
if(!item.loading) {
_preloadImage(item);
}
if( self.allowProgressiveImg() ) {
if(!_initialContentSet && _features.transform) {
_imagesToAppendPool.push({
item:item,
baseDiv:baseDiv,
img:item.img,
index:index,
holder:holder
});
} else {
_appendImage(index, item, baseDiv, item.img, true, true);
}
}
} else if(item.src && !item.loadError) {
img = framework.createEl('pswp__img', 'img');
img.style.opacity = 1;
img.src = item.src;
_setImageSize(item, img);
_appendImage(index, item, baseDiv, img, true);
}
if(!_initialContentSet && index === _currentItemIndex) {
_currZoomElementStyle = baseDiv.style;
_showOrHide(item, (img ||item.img) );
} else {
_applyZoomPanToItem(item);
}
holder.el.innerHTML = '';
holder.el.appendChild(baseDiv);
},
cleanSlide: function( item ) {
if(item.img ) {
item.img.onload = item.img.onerror = null;
}
item.loaded = item.loading = item.img = item.imageAppended = false;
}
}
});
var tapTimer,
tapReleasePoint = {},
_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
var e = document.createEvent( 'CustomEvent' ),
eDetail = {
origEvent:origEvent,
target:origEvent.target,
releasePoint: releasePoint,
pointerType:pointerType || 'touch'
};
e.initCustomEvent( 'pswpTap', true, true, eDetail );
origEvent.target.dispatchEvent(e);
};
_registerModule('Tap', {
publicMethods: {
initTap: function() {
_listen('firstTouchStart', self.onTapStart);
_listen('touchRelease', self.onTapRelease);
_listen('destroy', function() {
tapReleasePoint = {};
tapTimer = null;
});
},
onTapStart: function(touchList) {
if(touchList.length > 1) {
clearTimeout(tapTimer);
tapTimer = null;
}
},
onTapRelease: function(e, releasePoint) {
if(!releasePoint) {
return;
}
if(!_moved && !_isMultitouch && !_numAnimations) {
var p0 = releasePoint;
if(tapTimer) {
clearTimeout(tapTimer);
tapTimer = null;
if ( _isNearbyPoints(p0, tapReleasePoint) ) {
_shout('doubleTap', p0);
return;
}
}
if(releasePoint.type === 'mouse') {
_dispatchTapEvent(e, releasePoint, 'mouse');
return;
}
var clickedTagName = e.target.tagName.toUpperCase();
if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
_dispatchTapEvent(e, releasePoint);
return;
}
_equalizePoints(tapReleasePoint, p0);
tapTimer = setTimeout(function() {
_dispatchTapEvent(e, releasePoint);
tapTimer = null;
}, 300);
}
}
}
});
var _wheelDelta;
_registerModule('DesktopZoom', {
publicMethods: {
initDesktopZoom: function() {
if(_oldIE) {
return;
}
if(_likelyTouchDevice) {
_listen('mouseUsed', function() {
self.setupDesktopZoom();
});
} else {
self.setupDesktopZoom(true);
}
},
setupDesktopZoom: function(onInit) {
_wheelDelta = {};
var events = 'wheel mousewheel DOMMouseScroll';
_listen('bindEvents', function() {
framework.bind(template, events,  self.handleMouseWheel);
});
_listen('unbindEvents', function() {
if(_wheelDelta) {
framework.unbind(template, events, self.handleMouseWheel);
}
});
self.mouseZoomedIn = false;
var hasDraggingClass,
updateZoomable = function() {
if(self.mouseZoomedIn) {
framework.removeClass(template, 'pswp--zoomed-in');
self.mouseZoomedIn = false;
}
framework.addClass(template, 'pswp--zoom-allowed');
removeDraggingClass();
},
removeDraggingClass = function() {
if(hasDraggingClass) {
framework.removeClass(template, 'pswp--dragging');
hasDraggingClass = false;
}
};
_listen('resize' , updateZoomable);
_listen('afterChange' , updateZoomable);
_listen('pointerDown', function() {
if(self.mouseZoomedIn) {
hasDraggingClass = true;
framework.addClass(template, 'pswp--dragging');
}
});
_listen('pointerUp', removeDraggingClass);
if(!onInit) {
updateZoomable();
}
},
handleMouseWheel: function(e) {
if(_currZoomLevel <= self.currItem.fitRatio) {
if( _options.modal ) {
if (!_options.closeOnScroll || _numAnimations || _isDragging) {
e.preventDefault();
} else if(_transformKey && Math.abs(e.deltaY) > 2) {
_closedByScroll = true;
self.close();
}
}
return true;
}
e.stopPropagation();
_wheelDelta.x = 0;
if('deltaX' in e) {
if(e.deltaMode === 1 ) {
_wheelDelta.x = e.deltaX * 18;
_wheelDelta.y = e.deltaY * 18;
} else {
_wheelDelta.x = e.deltaX;
_wheelDelta.y = e.deltaY;
}
} else if('wheelDelta' in e) {
if(e.wheelDeltaX) {
_wheelDelta.x = -0.16 * e.wheelDeltaX;
}
if(e.wheelDeltaY) {
_wheelDelta.y = -0.16 * e.wheelDeltaY;
} else {
_wheelDelta.y = -0.16 * e.wheelDelta;
}
} else if('detail' in e) {
_wheelDelta.y = e.detail;
} else {
return;
}
_calculatePanBounds(_currZoomLevel, true);
var newPanX = _panOffset.x - _wheelDelta.x,
newPanY = _panOffset.y - _wheelDelta.y;
if (_options.modal ||
(
newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
) ) {
e.preventDefault();
}
self.panTo(newPanX, newPanY);
},
toggleDesktopZoom: function(centerPoint) {
centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };
var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
var zoomOut = _currZoomLevel === doubleTapZoomLevel;
self.mouseZoomedIn = !zoomOut;
self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
}
}
});
var _historyDefaultOptions = {
history: true,
galleryUID: 1
};
var _historyUpdateTimeout,
_hashChangeTimeout,
_hashAnimCheckTimeout,
_hashChangedByScript,
_hashChangedByHistory,
_hashReseted,
_initialHash,
_historyChanged,
_closedFromURL,
_urlChangedOnce,
_windowLoc,
_supportsPushState,
_getHash = function() {
return _windowLoc.hash.substring(1);
},
_cleanHistoryTimeouts = function() {
if(_historyUpdateTimeout) {
clearTimeout(_historyUpdateTimeout);
}
if(_hashAnimCheckTimeout) {
clearTimeout(_hashAnimCheckTimeout);
}
},
_parseItemIndexFromURL = function() {
var hash = _getHash(),
params = {};
if(hash.length < 5) { 
return params;
}
var i, vars = hash.split('&');
for (i = 0; i < vars.length; i++) {
if(!vars[i]) {
continue;
}
var pair = vars[i].split('=');
if(pair.length < 2) {
continue;
}
params[pair[0]] = pair[1];
}
if(_options.galleryPIDs) {
var searchfor = params.pid;
params.pid = 0; 
for(i = 0; i < _items.length; i++) {
if(_items[i].pid === searchfor) {
params.pid = i;
break;
}
}
} else {
params.pid = parseInt(params.pid,10)-1;
}
if( params.pid < 0 ) {
params.pid = 0;
}
return params;
},
_updateHash = function() {
if(_hashAnimCheckTimeout) {
clearTimeout(_hashAnimCheckTimeout);
}
if(_numAnimations || _isDragging) {
_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
return;
}
if(_hashChangedByScript) {
clearTimeout(_hashChangeTimeout);
} else {
_hashChangedByScript = true;
}
var pid = (_currentItemIndex + 1);
var item = _getItemAt( _currentItemIndex );
if(item.hasOwnProperty('pid')) {
pid = item.pid;
}
var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;
if(!_historyChanged) {
if(_windowLoc.hash.indexOf(newHash) === -1) {
_urlChangedOnce = true;
}
}
var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;
if( _supportsPushState ) {
if('#' + newHash !== window.location.hash) {
history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
}
} else {
if(_historyChanged) {
_windowLoc.replace( newURL );
} else {
_windowLoc.hash = newHash;
}
}
_historyChanged = true;
_hashChangeTimeout = setTimeout(function() {
_hashChangedByScript = false;
}, 60);
};
_registerModule('History', {
publicMethods: {
initHistory: function() {
framework.extend(_options, _historyDefaultOptions, true);
if( !_options.history ) {
return;
}
_windowLoc = window.location;
_urlChangedOnce = false;
_closedFromURL = false;
_historyChanged = false;
_initialHash = _getHash();
_supportsPushState = ('pushState' in history);
if(_initialHash.indexOf('gid=') > -1) {
_initialHash = _initialHash.split('&gid=')[0];
_initialHash = _initialHash.split('?gid=')[0];
}
_listen('afterChange', self.updateURL);
_listen('unbindEvents', function() {
framework.unbind(window, 'hashchange', self.onHashChange);
});
var returnToOriginal = function() {
_hashReseted = true;
if(!_closedFromURL) {
if(_urlChangedOnce) {
history.back();
} else {
if(_initialHash) {
_windowLoc.hash = _initialHash;
} else {
if (_supportsPushState) {
history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
} else {
_windowLoc.hash = '';
}
}
}
}
_cleanHistoryTimeouts();
};
_listen('unbindEvents', function() {
if(_closedByScroll) {
returnToOriginal();
}
});
_listen('destroy', function() {
if(!_hashReseted) {
returnToOriginal();
}
});
_listen('firstUpdate', function() {
_currentItemIndex = _parseItemIndexFromURL().pid;
});
var index = _initialHash.indexOf('pid=');
if(index > -1) {
_initialHash = _initialHash.substring(0, index);
if(_initialHash.slice(-1) === '&') {
_initialHash = _initialHash.slice(0, -1);
}
}
setTimeout(function() {
if(_isOpen) { 
framework.bind(window, 'hashchange', self.onHashChange);
}
}, 40);
},
onHashChange: function() {
if(_getHash() === _initialHash) {
_closedFromURL = true;
self.close();
return;
}
if(!_hashChangedByScript) {
_hashChangedByHistory = true;
self.goTo( _parseItemIndexFromURL().pid );
_hashChangedByHistory = false;
}
},
updateURL: function() {
_cleanHistoryTimeouts();
if(_hashChangedByHistory) {
return;
}
if(!_historyChanged) {
_updateHash(); 
} else {
_historyUpdateTimeout = setTimeout(_updateHash, 50);
}
}
}
});
framework.extend(self, publicMethods); };
return PhotoSwipe;
});
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / "},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.className,g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>1200},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.className&&a.type.indexOf("mouse")>-1&&(d.className.indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
$.initPhotoSwipeFromDOM = function(gallerySelector,medDom) {
var parseThumbnailElements = function(el) {
var thumbElements = $(medDom,el),
numNodes = thumbElements.length,
items = [],
el,
childElements,
thumbnailEl,
size,
item;
for (var i = 0; i < numNodes; i++) {
el = thumbElements[i];
if (el.nodeType !== 1) {
continue;
}
childElements = el.children;
size = el.getAttribute('data-size').split('x');
item = {
src: el.getAttribute('href'),
w: parseInt(size[0], 10),
h: parseInt(size[1], 10),
author: el.getAttribute('data-author')
};
item.el = el; 
if (childElements.length > 0) {
item.msrc = childElements[0].getAttribute('src'); 
if (childElements.length > 1) {
item.title = childElements[1].innerHTML; 
}
}
var mediumSrc = el.getAttribute('data-med');
if (mediumSrc) {
size = el.getAttribute('data-med-size').split('x');
item.m = {
src: mediumSrc,
w: parseInt(size[0], 10),
h: parseInt(size[1], 10)
};
}
item.o = {
src: item.src,
w: item.w,
h: item.h
};
items.push(item);
}
return items;
};
var closest = function closest(el, fn) {
return el && (fn(el) ? el : closest(el.parentNode, fn));
};
var onThumbnailsClick = function(e,parents) {
e = e || window.event;
if($(e.target).closest('a').attr('data-med')) e.preventDefault ? e.preventDefault() : e.returnValue = false;
var eTarget = e.target || e.srcElement;
var clickedListItem = closest(eTarget, function(el) {
return el.tagName === 'A';
});
if (!clickedListItem) {
return;
}
var clickedGallery = parents,
clickedListItemMed=$(clickedListItem).data('med'),
index;
$(medDom,parents).each(function(i, el) {
if($(this).data('med')==clickedListItemMed){
index=i;
return false;
}
});
if (index >= 0) {
openPhotoSwipe(index, clickedGallery);
}
return false;
};
var photoswipeParseHash = function() {
var hash = window.location.hash.substring(1),
params = {};
if (hash.length < 5) { 
return params;
}
var vars = hash.split('&');
for (var i = 0; i < vars.length; i++) {
if (!vars[i]) {
continue;
}
var pair = vars[i].split('=');
if (pair.length < 2) {
continue;
}
params[pair[0]] = pair[1];
}
if (params.gid) {
params.gid = parseInt(params.gid, 10);
}
return params;
};
var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
if(!$('.pswp').length){
var pswp_html='<div id="photoswipe-gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'
+'<div class="pswp__bg"></div>'
+'<div class="pswp__scroll-wrap">'
+'<div class="pswp__container">'
+'<div class="pswp__item"></div>'
+'<div class="pswp__item"></div>'
+'<div class="pswp__item"></div>'
+'</div>'
+'<div class="pswp__ui pswp__ui--hidden">'
+'<div class="pswp__top-bar">'
+'<div class="pswp__counter"></div>'
+'<button class="pswp__button pswp__button--close" title="退出画廊"></button>'
+'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'
+'<button class="pswp__button pswp__button--zoom" title="放大 / 缩小"></button>'
+'<div class="pswp__preloader">'
+'<div class="pswp__preloader__icn">'
+'<div class="pswp__preloader__cut">'
+'<div class="pswp__preloader__donut"></div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'<div class="pswp__loading-indicator">'
+'<div class="pswp__loading-indicator__line"></div>'
+'</div>'
+'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>'
+'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>'
+'<div class="pswp__caption">'
+'<div class="pswp__caption__center"></div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
$('body').append(pswp_html);
}
var pswpElement = document.querySelectorAll('.pswp')[0],
gallery,
options,
items;
items = parseThumbnailElements(galleryElement);
options = {
galleryUID: galleryElement.getAttribute('data-pswp-uid'),
getThumbBoundsFn: function(index) {
var thumbnail = items[index].el.children[0],
pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
rect = thumbnail.getBoundingClientRect();
return {
x: rect.left,
y: rect.top + pageYScroll,
w: rect.width
};
},
addCaptionHTMLFn: function(item, captionEl, isFake) {
if (!item.title) {
captionEl.children[0].innerText = '';
return false;
}
captionEl.children[0].innerHTML = item.title;
return true;
},
closeOnScroll:false,
tapToClose:true,
tapToToggleControls:false,
fullscreenEl:false,
shareEl:false,
errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">图片</a> 加载失败</div>'
};
if (fromURL) {
if (options.galleryPIDs) {
for (var j = 0; j < items.length; j++) {
if (items[j].pid == index) {
options.index = j;
break;
}
}
} else {
options.index = parseInt(index, 10) - 1;
}
} else {
options.index = parseInt(index, 10);
}
if (isNaN(options.index)) {
return;
}
if (disableAnimation) {
options.showAnimationDuration = 0;
}
gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
var realViewportWidth,
useLargeImages = false,
firstResize = true,
imageSrcWillChange;
gallery.listen('beforeResize', function() {
var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
dpiRatio = Math.min(dpiRatio, 2.5);
realViewportWidth = gallery.viewportSize.x * dpiRatio;
if (realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200) {
if (!useLargeImages) {
useLargeImages = true;
imageSrcWillChange = true;
}
} else {
if (useLargeImages) {
useLargeImages = false;
imageSrcWillChange = true;
}
}
if (imageSrcWillChange && !firstResize) {
gallery.invalidateCurrItems();
}
if (firstResize) {
firstResize = false;
}
imageSrcWillChange = false;
});
gallery.listen('gettingData', function(index, item) {
if (useLargeImages) {
item.src = item.o.src;
item.w = item.o.w;
item.h = item.o.h;
} else {
item.src = item.m.src;
item.w = item.m.w;
item.h = item.m.h;
}
});
gallery.init();
};
var galleryElements = $(gallerySelector),
medDom=medDom||'[data-med]';
$(gallerySelector).each(function(index, el) {
$(this).attr({'data-pswp-uid':index + 1}).click(function(e) {
onThumbnailsClick(e,this);
});
});
var hashData = photoswipeParseHash();
if (hashData.pid && hashData.gid) {
openPhotoSwipe(hashData.pid, galleryElements.eq(hashData.gid - 1), true, true);
}
};
if(location.hash.indexOf('#&gid=')>=0 && location.hash.indexOf('&pid=')>=0) window.history.back();
(function($){var selectors=[];var check_binded=false;var check_lock=false;var defaults={interval:250,force_process:false};var $window=$(window);var $prior_appeared=[];function process(){check_lock=false;for(var index=0,selectorsLength=selectors.length;index<selectorsLength;index++){var $appeared=$(selectors[index]).filter(function(){return $(this).is(':appeared');});$appeared.trigger('appear',[$appeared]);if($prior_appeared[index]){var $disappeared=$prior_appeared[index].not($appeared);$disappeared.trigger('disappear',[$disappeared]);}$prior_appeared[index]=$appeared;}};function add_selector(selector){selectors.push(selector);$prior_appeared.push();} $.expr[':']['appeared']=function(element){var $element=$(element);if(!$element.is(':visible')){return false;}var window_left=$window.scrollLeft();var window_top=$window.scrollTop();var offset=$element.offset();var left=offset.left;var top=offset.top;if(top+$element.height()>=window_top&&top-($element.data('appear-top-offset')||0)<=window_top+$window.height()&&left+$element.width()>=window_left&&left-($element.data('appear-left-offset')||0)<=window_left+$window.width()){return true;}else{return false;}};$.fn.extend({ appear:function(options){var opts=$.extend({},defaults,options||{});var selector=this.selector||this;if(!check_binded){var on_check=function(){if(check_lock){return;}check_lock=true;setTimeout(process,opts.interval);};$(window).scroll(on_check).resize(on_check);check_binded=true;}if(opts.force_process){setTimeout(process,opts.interval);}add_selector(selector);return $(selector);}});$.extend({ force_appear:function(){if(check_binded){process();return true;}return false;}});})(function(){if(typeof module!=='undefined'){ return require('jquery');}else{return jQuery;}}());
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/jquery-appear",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginJqueryAppear=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="appear",Appear=function(_Plugin){function Appear(){return babelHelpers.classCallCheck(this,Appear),babelHelpers.possibleConstructorReturn(this,(Appear.__proto__||Object.getPrototypeOf(Appear)).apply(this,arguments))}return babelHelpers.inherits(Appear,_Plugin),babelHelpers.createClass(Appear,[{key:"getName",value:function(){return NAME}},{key:"bind",value:function(){var _this2=this;this.$el.on("appear",function(){_this2.$el.hasClass("appear-no-repeat")||(_this2.$el.removeClass("invisible").addClass("animation-"+_this2.options.animate),_this2.$el.data("repeat")===!1&&_this2.$el.addClass("appear-no-repeat"))}),(0,_jquery2.default)(document).on("disappear",function(){_this2.$el.hasClass("appear-no-repeat")||_this2.$el.addClass("invisible").removeClass("animation-"+_this2.options.animate)})}},{key:"render",value:function(){_jquery2.default.fn.appear&&(this.$el.appear(this.options),this.$el.not(":appeared").addClass("invisible"),this.bind())}}]),Appear}(_Plugin3.default);_Plugin3.default.register(NAME,Appear),exports.default=Appear});
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width;if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});
!function(a,b){"object"==typeof exports?module.exports=b(require("spin.js")):"function"==typeof define&&define.amd?define(["spin"],b):a.Ladda=b(a.Spinner)}(this,function(a){"use strict";function b(a){if("undefined"==typeof a)return void console.warn("Ladda button target must be defined.");if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var b=document.createElement("span");b.className="ladda-label",i(a,b)}var c,d=a.querySelector(".ladda-spinner");d||(d=document.createElement("span"),d.className="ladda-spinner"),a.appendChild(d);var e,f={start:function(){return c||(c=g(a)),a.setAttribute("disabled",""),a.setAttribute("data-loading",""),clearTimeout(e),c.spin(d),this.setProgress(0),this},startAfter:function(a){return clearTimeout(e),e=setTimeout(function(){f.start()},a),this},stop:function(){return a.removeAttribute("disabled"),a.removeAttribute("data-loading"),clearTimeout(e),c&&(e=setTimeout(function(){c.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(b){b=Math.max(Math.min(b,1),0);var c=a.querySelector(".ladda-progress");0===b&&c&&c.parentNode?c.parentNode.removeChild(c):(c||(c=document.createElement("div"),c.className="ladda-progress",a.appendChild(c)),c.style.width=(b||0)*a.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),a.setAttribute("disabled",""),this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(e),a.removeAttribute("disabled",""),a.removeAttribute("data-loading",""),c&&(c.stop(),c=null);for(var b=0,d=j.length;d>b;b++)if(f===j[b]){j.splice(b,1);break}}};return j.push(f),f}function c(a,b){for(;a.parentNode&&a.tagName!==b;)a=a.parentNode;return b===a.tagName?a:void 0}function d(a){for(var b=["input","textarea","select"],c=[],d=0;d<b.length;d++)for(var e=a.getElementsByTagName(b[d]),f=0;f<e.length;f++)e[f].hasAttribute("required")&&c.push(e[f]);return c}function e(a,e){e=e||{};var f=[];"string"==typeof a?f=h(document.querySelectorAll(a)):"object"==typeof a&&"string"==typeof a.nodeName&&(f=[a]);for(var g=0,i=f.length;i>g;g++)!function(){var a=f[g];if("function"==typeof a.addEventListener){var h=b(a),i=-1;a.addEventListener("click",function(b){var f=!0,g=c(a,"FORM");if("undefined"!=typeof g)if("function"==typeof g.checkValidity)f=g.checkValidity();else for(var j=d(g),k=0;k<j.length;k++)""===j[k].value.replace(/^\s+|\s+$/g,"")&&(f=!1),"checkbox"!==j[k].type&&"radio"!==j[k].type||j[k].checked||(f=!1),"email"===j[k].type&&(f=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(j[k].value));f&&(h.startAfter(1),"number"==typeof e.timeout&&(clearTimeout(i),i=setTimeout(h.stop,e.timeout)),"function"==typeof e.callback&&e.callback.apply(null,[h]))},!1)}}()}function f(){for(var a=0,b=j.length;b>a;a++)j[a].stop()}function g(b){var c,d,e=b.offsetHeight;0===e&&(e=parseFloat(window.getComputedStyle(b).height)),e>32&&(e*=.8),b.hasAttribute("data-spinner-size")&&(e=parseInt(b.getAttribute("data-spinner-size"),10)),b.hasAttribute("data-spinner-color")&&(c=b.getAttribute("data-spinner-color")),b.hasAttribute("data-spinner-lines")&&(d=parseInt(b.getAttribute("data-spinner-lines"),10));var f=.2*e,g=.6*f,h=7>f?2:3;return new a({color:c||"#fff",lines:d||12,radius:f,length:g,width:h,zIndex:"auto",top:"auto",left:"auto",className:""})}function h(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}function i(a,b){var c=document.createRange();c.selectNodeContents(a),c.surroundContents(b),a.appendChild(b)}var j=[];return{bind:e,create:b,stopAll:f}});
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/ladda",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginLadda=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="ladda",LaddaPlugin=function(_Plugin){function LaddaPlugin(){return babelHelpers.classCallCheck(this,LaddaPlugin),babelHelpers.possibleConstructorReturn(this,(LaddaPlugin.__proto__||Object.getPrototypeOf(LaddaPlugin)).apply(this,arguments))}return babelHelpers.inherits(LaddaPlugin,_Plugin),babelHelpers.createClass(LaddaPlugin,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){"undefined"!=typeof Ladda&&("progress"===this.options.type&&(this.options.callback=function(instance){var progress=0,interval=setInterval(function(){progress=Math.min(progress+.1*Math.random(),1),instance.setProgress(progress),1===progress&&(instance.stop(),clearInterval(interval))},200)}),Ladda.bind(this.$el[0],this.options))}}],[{key:"getDefaults",value:function(){return{type:"normal",timeout:2e3}}}]),LaddaPlugin}(_Plugin3.default);_Plugin3.default.register(NAME,LaddaPlugin),exports.default=LaddaPlugin});
(function(){
$(function(){
if($(".met-pager-ajax,.met-page-ajax").length && $('#metPageT').length){
var $met_pager=$('.met_pager'),
$metpagerajax_link=$(".met-pager-ajax-link");
if($met_pager.length){
if($metpagerajax_link.hasClass("hidden-md-up")){
Breakpoints.on('xs',{
enter:function(){
metpagerajax();
}
});
}else{
metpagerajax();
}
setTimeout(function(){
$metpagerajax_link.scrollFun(function(val){
val.appearDiy();
});
},0)
}
}else $('.met_pager').remove();
});
function metpagerajax(){
var $metpagerbtn=$("#met-pager-btn"),
$metpaget=$('#metPageT'),
$metpagerajax=$(".met-pager-ajax,.met-page-ajax"),
$Ahover=$('.met_pager .Ahover'),
pageurl_str=$Ahover.next().attr('href'),
pagemax=$metpaget.data('pageurl')?parseInt($metpaget.data('pageurl').split('|')[2]):1,
page=parseInt($metpaget.val()),
metpagerbtnText=function(){
$metpagerbtn.removeClass('disabled').find('.fa-refresh').remove();
$metpagerbtn.find('.wb-chevron-down').show();
if(pagemax){
if(pagemax==page) $metpagerbtn.attr({hidden:''});
}else{
$metpagerbtn.attr({hidden:''});
}
};
metpagerbtnText();
!pageurl_str && (pageurl_str=$Ahover.prev().attr('href'));
!pageurl_str && (pageurl_str=$Ahover.attr('href'));
pageurl_str.indexOf('.php')>0 && (pageurl_str+=(pageurl_str.indexOf('.php?')>0?'&':'?')+'page=');
$metpagerbtn.click(function(){
if(!$metpagerbtn.hasClass('disabled')){
$(this).addClass('disabled').prepend('<i class="icon fa-refresh fa-spin"></i>').find('.wb-chevron-down').hide();
page++;
if(pageurl_str.indexOf('.php')>0){
var pageurl=pageurl_str+page;
}else{
var fielename=pageurl_str.split('/').slice(-1)[0],
fielename_name=fielename.split('.')[0];
fielename_name=fielename_name.split(fielename_name.indexOf('_')>0?'_':'-').slice(-1)[0];
var new_fielename=fielename.replace(fielename_name+'.',page+'.'),
pageurl=pageurl_str.replace(fielename,new_fielename);
}
$.ajax({
url:pageurl,
type:'GET',
success:function(data){
var $data=$(data).find('.met-pager-ajax,.met-page-ajax');
if(!$data.length){
data='<div class="met-pager-ajax">'+data+'</div>';
$data=$(data);
}
$data.find('>').addClass('page'+page).removeClass('shown');
data=$data.html();
$metpagerajax.append(data);
metpagerajaxFun(page);
metpagerbtnText();
}
});
}
});
}
function metpagerajaxFun(page){
var $metpagerajax=$('.met-pager-ajax,.met-page-ajax'),
metpager_original='.page'+page+' [data-original]'
$data_appear=$metpagerajax.find('.page'+page+' [data-plugin="appear"]');
if($metpagerajax.find(metpager_original).length){
$metpagerajax.imageSize(metpager_original);
if($metpagerajax.find(metpager_original).length) $metpagerajax.find(metpager_original).lazyload();
setTimeout(function(){
$('html,body').stop().animate({scrollTop:$(window).scrollTop()+2},0);
},300)
}
if($data_appear.length) $data_appear.trigger('appear');
if($('#met-grid').length){
setTimeout(function(){
if(typeof metAnimOnScroll != 'undefined') metAnimOnScroll('met-grid');
},100)
}
if($metpagerajax.find('.page'+page+' .met_hits').length){
$metpagerajax.find('.page'+page+' .met_hits').each(function(index, el) {
var $self=$(this);
if($(this).data('src')){
$.ajax({
url:$(this).data('src'),
type:'POST',
success:function(result){
if(result!='') $self.after(parseInt(result));
}
});
}
});
}
}
})();
(function(){
$(function(){
var $meteditor_table=$(".met-editor table");
if($meteditor_table.length) $meteditor_table.tablexys();
if(M.device_type=='m'){
var editorimg_gallery_open=true;
$(".met-editor").each(function(){
if($("img",this).length && !$(this).hasClass('no-gallery')){
var $self=$(this),
imgsizeset=true;
$("img",this).one('click',function(){
var $img=$(this);
if(imgsizeset){
$self.find('img').each(function(){
var src=$(this).attr('src'),
size='';
if($(this).data('width')){
size=$(this).data('width')+'x'+$(this).data('height');
}else if($(this).attr('width') && $(this).attr('height')){
size=$(this).attr('width')+'x'+$(this).attr('height');
}
if(!($(this).parents('a').length && $(this).parents('a').find('img').length==1)) $(this).wrapAll('<a class="photoswipe-a"></a>');
var $this_photoswipe_a=$(this).parents('.photoswipe-a');
$this_photoswipe_a.attr({href:src,'data-med':src});
if(size){
$this_photoswipe_a.attr({'data-size':size,'data-med-size':size});
}else{
if($(this).data('original') && $(this).data('original')==$(this).attr('src')){
var sizes=$(this)[0].naturalWidth+'x'+$(this)[0].naturalHeight;
$this_photoswipe_a.attr({'data-size':sizes,'data-med-size':sizes});
}
$(this).imageloadFunAlone(function(imgs){
var sizes=imgs.width+'x'+imgs.height;
$this_photoswipe_a.attr({'data-size':sizes,'data-med-size':sizes});
})
}
});
imgsizeset=false;
}
if(editorimg_gallery_open){
setTimeout(function(){
$.initPhotoSwipeFromDOM('.met-editor','.photoswipe-a');//（需调用PhotoSwipe插件）
editorimg_gallery_open=false;
$img.click();
},300);
}
});
}
});
}
});
})();
var mapRegister=function() {
var script = document.createElement("script"),
coordinate = $('#map').attr('coordinate') || '105,25',
logo = $('#map').attr('logo'),
title = $('#map').attr('title'),
img=$('#map').attr('img'),
desc = $('#map').attr('description');
script.src = "//api.map.baidu.com/api?v=2.0&ak=aL2Gwp389Kxj3bFhSMq7cf9w&callback=map_func";
document.body.appendChild(script);
map_func = function() {
var coo = coordinate && coordinate.split(',');
var map = new BMap.Map("map");
map.centerAndZoom(new BMap.Point(coo[0] * 1, coo[1] * 1), 19);
var Icon = new BMap.Icon(img, new BMap.Size(20, 27));
var marker = new BMap.Marker(new BMap.Point(coo[0] * 1, coo[1] * 1), {
icon: Icon
});
var content =
"<div class='mapTip' style='overflow:hidden;'>" +
"<div style='float:left;'><img id='map-logo' src=" + logo + " style='width:60px;height:60px;'></div>" +
"<div style='float:left;padding-top:10px;padding-left:15px;max-width:145px;'><h3 style='margin:0;font-size:15px;line-height:1.2;max-height: 20px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>" + title + "</h3>" +
"<p style='margin:0;color:#7d7d7d;font-size:12px;padding-top:5px;max-height:20px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;'>" + desc + "</p></div></div>";
var infoWindow = new BMap.InfoWindow(content);
map.addOverlay(marker);
if (device_type=='t') {
map.panBy(0, -100);
}
if(device_type=='m') {
map.panBy(0, -200);
}
if(device_type=='d') {
map.panBy(-300, 0);
}
marker.openInfoWindow(infoWindow);
map.setMapStyle({
style: 'grayscale'
});
marker.addEventListener("click", function() {
this.openInfoWindow(infoWindow);
document.getElementById('map-logo').onload = function() {
infoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
}
});
}
}
METUI_FUN['head_nav_met_11_6_1'] = {
name: 'head_nav_met_11_6_1',
init: function() {
var head = $('.met-head');
if (head.data('scroll') && M['classnow'] == 10001 && IEVersion()>9) {
$('body').height('100%');
$('.banner_met_11_6').height('100%');
var hash = $('[data-hash]');
hash.removeClass('swiper-slide-active').addClass('met-page');
var page = $('.met-page');
page.last().append('</div></div>');
var mapInit=true;
page.each(function(index, element) {
data_hash = $(this).attr('data-hash');
data_hash = data_hash ? 'data-hash="' + data_hash + '"' : '';
data_title = $(this).attr('data-title');
data_title = data_title ? '<a title="' + data_title + '"  href="javascript:void(0);"><b>' + data_title + '</b></a>' : '';
$('.nav-ul').append('<li class="nav-li ' + (index ? '' : 'active') + '" ' + data_hash + '>' + data_title + '</li>');
});
nav_width();
M['nav'].on('tap', function(swiper) {
$('.nav-li').removeClass('active').eq(swiper.clickedIndex).addClass('active');
M['metbox'].slideTo(swiper.clickedIndex);
})
M['metbox'] = new Swiper('.met-box', {
wrapperClass: 'met-wrapper',
slideClass: 'met-page',
direction: 'vertical',
speed: 500,
hashnav: true,
lazyLoading: true,
lazyLoadingOnTransitionStart: true,
roundLengths: true,
keyboardControl: true,
slidesPerView: 'auto',
mousewheelControl: true,
simulateTouch: false,
longSwipesRatio: 0.3,
touchAngle: 30,
nextButton: '.banner-next',
uniqueNavElements: false,
onSlideChangeStart: function(swiper, src) {
var nav = $('.met-head'),
side = $('.nav-side');
if (swiper.activeIndex > 0) {
nav.addClass('nav-bg');
side.addClass('side-bg');
} else {
nav.removeClass('nav-bg');
side.removeClass('side-bg');
}
},
onSlideChangeEnd: function(swiper) {
if(mapInit){mapRegister();mapInit=false;}
$('.nav-li').removeClass('active').eq(swiper.activeIndex).addClass('active');
M['nav'].slideTo(swiper.activeIndex);
}
})
} else if (!head.data('scroll') && M['classnow'] == 10001) {
$('.swiper-lazy').each(function(index, el) {
if($(this).attr('data-background')){
$(this).css('backgroundImage', 'url('+$(this).attr('data-background')+')');
}
if($(this).attr('data-src')){
$(this).attr('src', $(this).attr('data-src'));
}
});
nav_width();
var nav = $('.met-head'),
side = $('.nav-side');
$(window).scroll(function() {
if (head.offset().top > 1) {
head.addClass("nav-bg");
side.addClass('side-bg');
} else {
head.removeClass("nav-bg");
side.removeClass('side-bg');
}
});
} else {
nav_width();
var nav = $('.met-head'),
side = $('.nav-side');
head.addClass("nav-bg");
side.addClass('side-bg');
}
},
load:function(){
var loader=$('.load');
if(loader.length>0){
$(window).load(function() {
loader.fadeOut(500);
});
}
},
side: function() {
if ($('.nav-side').length > 0) {
$('.nav-side,.side-shadow,.side-close').click(function() {
if ($('body').hasClass('open')) {
$('body').removeClass('open');
} else {
$('body').addClass('open');
}
});
var i = 0;
$('.side-box .nav-item').each(function(index, el) {
$(this).css('transitionDelay', i + 'ms');
i = i + 100;
});
$('.navlist2').on('show.bs.collapse', function() {
$(this).parent().addClass('open');
})
$('.navlist2').on('hide.bs.collapse', function() {
$(this).parent().removeClass('open');
})
var shop_cart = $('.shop_cart'),
sidenav = $('.side-nav'),
sideshadow = $('side-shadow');
if (shop_cart.length > 0) {
shop_cart.on('click', function(event) {
if ($(this).hasClass('open')) {
sidenav.removeClass('overflow-visible');
} else {
sidenav.addClass('overflow-visible');
}
});
}
}
},
cntotc: function() {
var b = $('.side-box .btn-cntotc');
b.on('click', function(event) {
var lang = $(this).attr('data-tolang');
if (lang == 'tc') {
$('body').s2t();
$(this).attr('data-tolang', 'cn');
$(this).text('简体');
} else if (lang == 'cn') {
$('body').t2s();
$(this).attr('data-tolang', 'tc');
$(this).text('繁體');
}
});
},
bg: function() {
$('[data-bg]').each(function(index, el) {
var background = $(this).attr('data-bg'),
hex = background.split('|')[0],
opacity = background.split('|')[1],
bgcolor = rgb2color(hex, opacity);
$(this).css('background', bgcolor);
});
function rgb2color(hex, opacity) {
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var c = hex.toLowerCase();
if (c && reg.test(c)) {
if (c.length === 4) {
var a = '#';
for (var i = 1; i < 4; i++) {
a += c.slice(i, i + 1).concat(c.slice(i, i + 1));
}
c = a;
}
var b = [];
for (var i = 1; i < 7; i += 2) {
b.push(parseInt('0x' + c.slice(i, i + 2)));
}
return "rgba(" + b.join(',') + ',' + opacity + ')';
} else {
return c
}
}
},
hover: function(){
var m=METUI['head_nav_met_11_6_1'];//此处对应的最外层的那个css类名
var id = 0;
if(device_type != 'd')return false;
console.log('a');
m.find(".J-nav-ul li").hover(function(){
var $this = $(this),
left = $this.offset().left,
width = $this.width();
id = $this.attr('data-id');
m.find(".J-select-wrap ul[data-id="+ id +"]").css({
'left': left+'px',
'width': width+'px'
}).slideDown(300);
}, function(){
m.find(".J-select-wrap ul[data-id="+ id +"]").hide();
});
}
};
var x = new metui(METUI_FUN['head_nav_met_11_6_1']);
function nav_width() {
var signWidth = [],
sign_all_width = 0,
sign_width = 0,
sign_num_width = 0;
$('.nav-li').each(function(index) {
signWidth[index] = $(this).width();
sign_all_width += signWidth[index];
});
var sign_width = $('.head_nav_met_11_6_1').width() - $('.nav-logo').width();
sign_width = sign_width > sign_all_width ? sign_all_width : sign_width;
$('.nav-box').width(sign_width);
sign_num_width = 0;
for (var i = 0; i < 30; i++) {
if (sign_num_width + signWidth[i] <= sign_width) {
sign_num_width += signWidth[i];
}
}
M['nav'] = new Swiper('.nav-box', {
wrapperClass: 'nav-ul',
slideClass: 'nav-li',
slidesPerView: 'auto',
mousewheelControl: true,
slidesOffsetBefore: sign_width - sign_num_width,
preventClicks: false
});
}
function IEVersion() {
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
if(isIE) {
var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
reIE.test(userAgent);
var fIEVersion = parseFloat(RegExp["$1"]);
if(fIEVersion == 7) {
return 7;
} else if(fIEVersion == 8) {
return 8;
} else if(fIEVersion == 9) {
return 9;
} else if(fIEVersion == 10) {
return 10;
} else {
return 6;//IE版本<=7
}
} else if(isEdge) {
return '12';//edge
} else if(isIE11) {
return 11; //IE11
}else{
return 13;//不是ie浏览器
}
}
﻿//本插件由www.swiper.com.cn提供
function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}
METUI_FUN['banner_met_11_6_2'] = {
name: 'banner_met_11_6_2',
bannerInit: function() {
if (METUI['banner_met_11_6_2'].length) {
var item = $('.banner_met_11_6_2 .banner-item'),
ctrl = $('.banner_met_11_6_2 .banner-ctrl'),
prev = $('.banner_met_11_6_2 .banner-ctrl .left'),
next = $('.banner_met_11_6_2 .banner-ctrl .right'),
ny = $('.banner-ny-h');
if (item.length < 2) {
ctrl.addClass('hide');
}
if (item.length > 0) {
bh = item.data('height').split('|'),
autoplayspeed = item.data('autoplayspeed'),
speed = item.data('speed');
for (var i = 0; i < bh.length; i++) {
if (bh[i] == 0) {
bh[i] = '100%';
}
}
Breakpoints.on('md lg', {
enter: function() {
ny.height(bh[0]);
item.height(bh[0]);
}
})
Breakpoints.on('sm', {
enter: function() {
ny.height(bh[1]);
item.height(bh[1]);
}
})
Breakpoints.on('xs', {
enter: function() {
ny.height(bh[2]);
item.height(bh[2]);
}
})
if (item.length > 1) {
var text = $('.banner-text');
$('.banner').addClass('isSwiper')
M['banner'] = new Swiper('.banner', {
wrapperClass: 'banner-warpper',
slideClass: 'banner-item',
speed: speed,
loop : true,
autoplay: autoplayspeed,
autoplayDisableOnInteraction: true,
keyboardControl: true,
slidesPerView: 1,
simulateTouch: false,
paginationClickable: true,
onInit: function(swiper) {
swiperAnimateCache(swiper);
swiperAnimate(swiper);
},
onSlideChangeEnd: function(swiper) {
swiperAnimate(swiper);
}
});
prev.click(function() {
M['banner'].slidePrev();
});
next.click(function() {
M['banner'].slideNext();
});
}
}
}
},
video: function() {
function bgResize(img, width, height, bg_width, bg_height) {
var w = width,
h = width / bg_width * bg_height;
if (h < height) {
h = height;
w = height / bg_height * bg_width;
}
img.css({
height: h,
width: w,
marginTop: -(h - height) / 2,
marginLeft: -(w - width) / 2,
'visibility': 'visible'
});
}
var v = $('.banner_met_11_6_2-video .hide video'),
src=v.attr('src'),
m = $('#media'),
w = $(window).width(),
h = $(window).height();
if (device_type == 'd' && src) {
v.remove();
m.attr("src", src).trigger('play');
$('.banner-ctrl').addClass('hide');
bgResize(m, w, h, 1920, 1080);
$(window).resize(function() {
bgResize(video, w, h, 1920, 1080);
})
}
}
};
var banner = metui(METUI_FUN['banner_met_11_6_2']);
METUI_FUN['foot_info_met_11_4_4'] = {
name: 'foot_info_met_11_4_4',
cntotc: function() {
var b = $('.foot_info_met_11_4_4 .btn-cntotc');
b.on('click', function(event) {
var lang = $(this).attr('data-tolang');
if (lang == 'tc') {
$('body').s2t();
$(this).attr('data-tolang', 'cn');
$(this).text('简');
} else if (lang == 'cn') {
$('body').t2s();
$(this).attr('data-tolang', 'tc');
$(this).text('繁');
}
});
},
bg: function() {
$('.foot_info_met_11_4_4_bottom[data-bg]').each(function(index, el) {
var background = $(this).attr('data-bg'),
hex = background.split('|')[0],
hextwo = background.split('|')[1],
opacity = background.split('|')[2],
bgcolor = rgb2color(hex, opacity),
bgcolortwo = rgb2color(hextwo, opacity),
ifbotc = $('.foot_info_met_11_4_4_bottom').data('ifbotc');
if(ifbotc){
$(this).css('background', bgcolor);
}else{
$(this).css('background', bgcolortwo);
}
});
function rgb2color(hex, opacity) {
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var c = hex.toLowerCase();
if (c && reg.test(c)) {
if (c.length === 4) {
var a = '#';
for (var i = 1; i < 4; i++) {
a += c.slice(i, i + 1).concat(c.slice(i, i + 1));
}
c = a;
}
var b = [];
for (var i = 1; i < 7; i += 2) {
b.push(parseInt('0x' + c.slice(i, i + 2)));
}
return "rgba(" + b.join(',') + ',' + opacity + ')';
} else {
return c
}
}
},
padding:function(){
if(METUI['foot_info_met_11_4_4'].length){
var h_m=$('.foot_info_met_11_4_4_bottom').height();
$(window).resize(function(){
pd();
})
function pd(){
if($('.foot_info_met_11_4_4_bottom').hasClass('iskeshi') || $(window).width()<768){
METUI['foot_info_met_11_4_4'].css("padding-bottom",h_m);
$(".shop-product-intro .cart-favorite").css("bottom",h_m);
}
}
pd();
}
if ($('.met-box>.met-wrapper').length) {
var $one_li = $(".met-box>.met-wrapper");
    var $two_li = $(".foot_info_met_11_4_4_bottom");
    $two_li.insertBefore($one_li);
}
},
qq:function(){
$(".foot_info_met_11_4_4_bottom .item").each(function(){
var href=$(this).attr("href");
if(href.indexOf("http://wpa.qq.com/")>=0){
var patt1 = /uin=\d+&/;
var qq=href.match(patt1);
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {
$(this).attr("href","mqqwpa://im/chat?chat_type=wpa&"+qq[0]+"version=1&src_type=web&web_src=oicqzone.com");
}
}
});
}
};
var foot_info = new metui(METUI_FUN['foot_info_met_11_4_4']);
METUI_FUN['back_top_met_16_1_28'] = {
name:'back_top_met_16_1_28',
totop: function() {
$(".met-scroll-top").click(function(){
$('html,body').animate({'scrollTop':0},300);
});
$(window).scroll(function(){
if($(this).scrollTop()>$(this).height()){
$(".met-scroll-top").removeAttr('hidden').addClass("animation-slide-bottom");
}else{
$(".met-scroll-top").attr({hidden:''}).removeClass('animation-slide-bottom');
}
});
}
};
var banner=metui(METUI_FUN['back_top_met_16_1_28']);
METUI_FUN['subcolumn_nav_met_11_4_36'] = {
name: 'subcolumn_nav_met_11_4_36',
init: function() {
var m = METUI['subcolumn_nav_met_11_4_36'];//此处对应的最外层的那个css类名
if(device_type!='d') $('body').wrapInner('<div class="cover"></div>');
var nav = METUI['subcolumn_nav_met_11_4_36'].find('.subcolumn-nav'),
ul = METUI['subcolumn_nav_met_11_4_36'].find('ul'),
li=ul.find('li'),
dropdown = ul.find('.dropdown'),
w=li.parentWidth(),
uw=ul.width();
if (ul.length && w>uw) {
ul.navtabSwiper();
if (dropdown.length) {
nav.css('width', '100%');
$(".swiper-navtab").addClass("overflow-visible");
}
}
if( device_type == 'd' ){
m.find(".subcolumn-nav a").on("click", function(event){
var url = $(this).attr('href');
var type = $(this).attr('target');
window.open(url, type);
event.stopPropagation();
});
}
}
};
var x = new metui(METUI_FUN['subcolumn_nav_met_11_4_36']);
METUI_FUN['job_list_page_met_16_1_10'] = {
name:'job_list_page_met_16_1_10',
map_width:function(){
$("iframe").load(function(){
var dom=$("iframe").contents().find("#dituContent");
dom.css({
"width":"100%",
"box-sizing": "border-box"
});
})
}
};
var x = new metui(METUI_FUN['job_list_page_met_16_1_10']);