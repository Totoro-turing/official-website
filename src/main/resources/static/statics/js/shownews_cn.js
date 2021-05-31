!function(){"use strict";var e,a=function(t,s){function r(e){return Math.floor(e)}function i(){var e=x.params.autoplay,a=x.slides.eq(x.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?s.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}function n(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),x.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===a||!x.isHorizontal()&&40===a))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===a||!x.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(x.container.parents("."+x.params.slideClass).length>0&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=x.container.offset();x.rtl&&(n.left=n.left-x.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+x.width,n.top],[n.left,n.top+x.height],[n.left+x.width,n.top+x.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}x.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!x.rtl||37===a&&x.rtl)&&x.slideNext(),(37===a&&!x.rtl||39===a&&x.rtl)&&x.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&x.slideNext(),38===a&&x.slidePrev()),x.emit("onKeyPress",x,a)}}function p(e){var a=0,t=0,s=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||r)&&e.deltaMode&&(1===e.deltaMode?(s*=40,r*=40):(s*=800,r*=800)),s&&!a&&(a=s<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:r}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=x.rtl?-1:1,s=p(e);if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(x.params.mousewheelInvert&&(a=-a),x.params.freeMode){var r=x.getWrapperTranslate()+a*x.params.mousewheelSensitivity,i=x.isBeginning,n=x.isEnd;if(r>=x.minTranslate()&&(r=x.minTranslate()),r<=x.maxTranslate()&&(r=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(r),x.updateProgress(),x.updateActiveIndex(),(!i&&x.isBeginning||!n&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),x.emit("onScroll",x,e),x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===r||r===x.maxTranslate())return}else{if((new window.Date).getTime()-x.mousewheel.lastScrollTime>60)if(a<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(a,t){a=e(a);var s,r,i,n=x.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",r=a.attr("data-swiper-parallax-x"),i=a.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):x.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",a.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=s&&s.virtualTranslate;s=s||{};var h={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))h[v]=s[v];else{h[v]={};for(var f in s[v])h[v][f]=s[v][f]}for(var w in c)if(void 0===s[w])s[w]=c[w];else if("object"==typeof s[w])for(var y in c[w])void 0===s[w][y]&&(s[w][y]=c[w][y]);var x=this;if(x.params=s,x.originalParams=h,x.classNames=[],void 0!==e&&"undefined"!=typeof Dom7&&(e=Dom7),(void 0!==e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(x.$=e,x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){if(!x.params.breakpoints)return!1;var e,a=!1,t=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},x.setBreakpoint=function(){var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var a=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,t=x.params.loop&&a.slidesPerView!==x.params.slidesPerView;for(var s in a)x.params[s]=a[s];x.currentBreakpoint=e,t&&x.destroyLoop&&x.reLoop(!0)}},x.params.breakpoints&&x.setBreakpoint(),x.container=e(t),0!==x.container.length)){if(x.container.length>1){var T=[];return x.container.each(function(){T.push(new a(this,s))}),T}x.container[0].swiper=x,x.container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(x.params.effect)>=0&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,x.params.spaceBetween=0,void 0===g&&(x.params.virtualTranslate=!0)),x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),x.wrapper=x.container.children("."+x.params.wrapperClass),x.params.pagination&&(x.paginationContainer=e(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&x.paginationContainer.length>1&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=e(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&x.nextButton.length>1&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=e(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&x.prevButton.length>1&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),x.isHorizontal=function(){return"horizontal"===x.params.direction},x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),x.params.slidesPerColumn>1&&x.classNames.push(x.params.containerModifierClass+"multirow"),x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),x.container.addClass(x.classNames.join(" ")),x.translate=0,x.progress=0,x.velocity=0,x.lockSwipeToNext=function(){x.params.allowSwipeToNext=!1,x.params.allowSwipeToPrev===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){x.params.allowSwipeToPrev=!1,x.params.allowSwipeToNext===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){x.params.allowSwipeToNext=!0,x.params.allowSwipeToPrev===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){x.params.allowSwipeToPrev=!0,x.params.allowSwipeToNext===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor(),x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},x.preloadImages=function(){function e(){void 0!==x&&null!==x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var a=0;a<x.imagesToLoad.length;a++)x.loadImage(x.imagesToLoad[a],x.imagesToLoad[a].currentSrc||x.imagesToLoad[a].getAttribute("src"),x.imagesToLoad[a].srcset||x.imagesToLoad[a].getAttribute("srcset"),x.imagesToLoad[a].sizes||x.imagesToLoad[a].getAttribute("sizes"),!0,e)},x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void i())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,i()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?i():x.stopAutoplay())}))},x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},x.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==x.params.slidesPerView&&x.params.slidesPerView>1)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var s=x.activeIndex+e;if(s>x.slides.length)break;a.push(x.slides.eq(s)[0])}else a.push(x.slides.eq(x.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&x.wrapper.css("height",t+"px")},x.updateContainerSize=function(){var e,a;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,a=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===a&&!x.isHorizontal()||(e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),a=a-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),x.width=e,x.height=a,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,a=x.params.spaceBetween,t=-x.params.slidesOffsetBefore,s=0,i=0;if(void 0!==x.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*x.size),x.virtualSize=-a,x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""});var n;x.params.slidesPerColumn>1&&(n=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(n=Math.max(n,x.params.slidesPerView*x.params.slidesPerColumn)));var o,l=x.params.slidesPerColumn,p=n/l,d=p-(x.params.slidesPerColumn*p-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var m=x.slides.eq(e);if(x.params.slidesPerColumn>1){var u,c,g;"column"===x.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),u=c+g*n/l,m.css({"-webkit-box-ordinal-group":u,"-moz-box-ordinal-group":u,"-ms-flex-order":u,"-webkit-order":u,order:u})):(g=Math.floor(e/p),c=e-g*p),m.css("margin-"+(x.isHorizontal()?"top":"left"),0!==g&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==m.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),x.params.roundLengths&&(o=r(o))):(o=(x.size-(x.params.slidesPerView-1)*a)/x.params.slidesPerView,x.params.roundLengths&&(o=r(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-x.size/2-a),0===e&&(t=t-x.size/2-a),Math.abs(t)<.001&&(t=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t),t=t+o+a),x.virtualSize+=o+a,s=o,i++)}x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter;var h;if(x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),x.params.slidesPerColumn>1&&(x.virtualSize=(o+x.params.spaceBetween)*n,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&h.push(x.snapGrid[e]);x.snapGrid=h}if(!x.params.centeredSlides){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&h.push(x.snapGrid[e]);x.snapGrid=h,Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])>1&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:a+"px"}):x.slides.css({marginRight:a+"px"}):x.slides.css({marginBottom:a+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},x.currentSlidesPerView=function(){var e,a,t=1;if(x.params.centeredSlides){var s,r=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!s&&(r+=x.slides[e].swiperSlideSize,t++,r>x.size&&(s=!0));for(a=x.activeIndex-1;a>=0;a--)x.slides[a]&&!s&&(r+=x.slides[a].swiperSlideSize,t++,r>x.size&&(s=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&t++;return t},x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var a=-e;x.rtl&&(a=e),x.slides.removeClass(x.params.slideVisibleClass);for(var t=0;t<x.slides.length;t++){var s=x.slides[t],r=(a+(x.params.centeredSlides?x.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+x.slidesSizesGrid[t];(i>=0&&i<x.size||n>0&&n<=x.size||i<=0&&n>=x.size)&&x.slides.eq(t).addClass(x.params.slideVisibleClass)}s.progress=x.rtl?-r:r}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var a=x.maxTranslate()-x.minTranslate(),t=x.isBeginning,s=x.isEnd;0===a?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/a,x.isBeginning=x.progress<=0,x.isEnd=x.progress>=1),x.isBeginning&&!t&&x.emit("onReachBeginning",x),x.isEnd&&!s&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,a,t,s=x.rtl?x.translate:-x.translate;for(a=0;a<x.slidesGrid.length;a++)void 0!==x.slidesGrid[a+1]?s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]-(x.slidesGrid[a+1]-x.slidesGrid[a])/2?e=a:s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]&&(e=a+1):s>=x.slidesGrid[a]&&(e=a);x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/x.params.slidesPerGroup),t>=x.snapGrid.length&&(t=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=t,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var a=x.slides.eq(x.activeIndex);a.addClass(x.params.slideActiveClass),s.loop&&(a.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));var t=a.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0),t.addClass(x.params.slideNextClass));var r=a.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);if(x.params.loop&&0===r.length&&(r=x.slides.eq(-1),r.addClass(x.params.slidePrevClass)),s.loop&&(t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),r.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&x.paginationContainer.length>0){var i,n=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?(i=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup),i>x.slides.length-1-2*x.loopedSlides&&(i-=x.slides.length-2*x.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==x.params.paginationType&&(i=n+i)):i=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,"bullets"===x.params.paginationType&&x.bullets&&x.bullets.length>0&&(x.bullets.removeClass(x.params.bulletActiveClass),x.paginationContainer.length>1?x.bullets.each(function(){e(this).index()===i&&e(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(i).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(i+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(n)),"progress"===x.params.paginationType){var o=(i+1)/n,l=o,p=1;x.isHorizontal()||(p=o,l=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,i+1,n)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}x.params.loop||(x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&x.paginationContainer.length>0){var e="";if("bullets"===x.params.paginationType){for(var a=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,t=0;t<a;t++)e+=x.params.paginationBulletRender?x.params.paginationBulletRender(x,t,x.params.bulletClass):"<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},x.update=function(e){function a(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}if(x){x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set();var t;if(e){x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(a(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||a()}else x.params.autoHeight&&x.updateAutoHeight()}},x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),x.params.breakpoints&&x.setBreakpoint();var a=x.params.allowSwipeToPrev,t=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var s=!1;if(x.params.freeMode){var r=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(r),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),s=("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!s&&x.lazy&&x.lazy.load(),x.params.allowSwipeToPrev=a,x.params.allowSwipeToNext=t,x.params.onAfterResize&&x.params.onAfterResize(x)},x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),x.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?r:document,n=!!x.params.nested;if(x.browser.ie)r[t](x.touchEvents.start,x.onTouchStart,!1),i[t](x.touchEvents.move,x.onTouchMove,n),i[t](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};r[t](x.touchEvents.start,x.onTouchStart,o),r[t](x.touchEvents.move,x.onTouchMove,n),r[t](x.touchEvents.end,x.onTouchEnd,o)}(s.simulateTouch&&!x.device.ios&&!x.device.android||s.simulateTouch&&!x.support.touch&&x.device.ios)&&(r[t]("mousedown",x.onTouchStart,!1),document[t]("mousemove",x.onTouchMove,n),document[t]("mouseup",x.onTouchEnd,!1))}window[t]("resize",x.onResize),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.nextButton[a]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[a]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.prevButton[a]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[a]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[a]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[a]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),(x.params.preventClicks||x.params.preventClicksPropagation)&&r[t]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*x.params.slidesPerGroup
;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(a){var t=n(a,"."+x.params.slideClass),s=!1;if(t)for(var r=0;r<x.slides.length;r++)x.slides[r]===t&&(s=!0);if(!t||!s)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=e(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,o=x.clickedIndex,l="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?o<x.loopedSlides-l/2||o>x.slides.length-x.loopedSlides+l/2?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o):o>x.slides.length-l?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o)}else x.slideTo(o)}};var b,C,S,z,M,P,E,I,k,D,L="input, select, textarea, button, video",B=Date.now(),H=[];x.animating=!1,x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,X;x.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(G="touchstart"===a.type)||!("which"in a)||3!==a.which){if(x.params.noSwiping&&n(a,"."+x.params.noSwipingClass))return void(x.allowClick=!0);if(!x.params.swipeHandler||n(a,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=x.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(b=!0,C=!1,S=!0,M=void 0,X=void 0,x.touches.startX=t,x.touches.startY=s,z=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,x.params.threshold>0&&(I=!1),"touchstart"!==a.type){var r=!0;e(a.target).is(L)&&(r=!1),document.activeElement&&e(document.activeElement).is(L)&&document.activeElement.blur(),r&&a.preventDefault()}x.emit("onTouchStart",x,a)}}}},x.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!G||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return x.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(x.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(x.params.onlyExternal)return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.startY=x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,z=Date.now()));if(G&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(G&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(L))return C=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,a),!(a.targetTouches&&a.targetTouches.length>1)){if(x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===M){var t;x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX?M=!1:(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,M=x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle)}if(M&&x.emit("onTouchMoveOpposite",x,a),void 0===X&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(X=!0)),b){if(M)return void(b=!1);if(X){x.allowClick=!1,x.emit("onSliderMove",x,a),a.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&a.stopPropagation(),C||(s.loop&&x.fixLoop(),E=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),D=!1,!x.params.grabCursor||x.params.allowSwipeToNext!==!0&&x.params.allowSwipeToPrev!==!0||x.setGrabCursor(!0)),C=!0;var r=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;r*=x.params.touchRatio,x.rtl&&(r=-r),x.swipeDirection=r>0?"prev":"next",P=r+E;var i=!0;if(r>0&&P>x.minTranslate()?(i=!1,x.params.resistance&&(P=x.minTranslate()-1+Math.pow(-x.minTranslate()+E+r,x.params.resistanceRatio))):r<0&&P<x.maxTranslate()&&(i=!1,x.params.resistance&&(P=x.maxTranslate()+1-Math.pow(x.maxTranslate()-E-r,x.params.resistanceRatio))),i&&(a.preventedByNestedSwiper=!0),!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&P<E&&(P=E),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&P>E&&(P=E),x.params.threshold>0){if(!(Math.abs(r)>x.params.threshold||I))return void(P=E);if(!I)return I=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,P=E,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&((x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(0===H.length&&H.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:z}),H.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),x.updateProgress(P),x.setWrapperTranslate(P))}}}}},x.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),S&&x.emit("onTouchEnd",x,a),S=!1,b){x.params.grabCursor&&C&&b&&(x.params.allowSwipeToNext===!0||x.params.allowSwipeToPrev===!0)&&x.setGrabCursor(!1);var t=Date.now(),s=t-z;if(x.allowClick&&(x.updateClickedSlide(a),x.emit("onTap",x,a),s<300&&t-B>300&&(k&&clearTimeout(k),k=setTimeout(function(){x&&(x.params.paginationHide&&x.paginationContainer.length>0&&!e(a.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,a))},300)),s<300&&t-B<300&&(k&&clearTimeout(k),x.emit("onDoubleTap",x,a))),B=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),!b||!C||!x.swipeDirection||0===x.touches.diff||P===E)return void(b=C=!1);b=C=!1;var r;if(r=x.params.followFinger?x.rtl?x.translate:-x.translate:-P,x.params.freeMode){if(r<-x.minTranslate())return void x.slideTo(x.activeIndex);if(r>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;x.velocity=o/l,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,H.length=0;var p=1e3*x.params.freeModeMomentumRatio,d=x.velocity*p,m=x.translate+d;x.rtl&&(m=-m);var u,c=!1,g=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(m<x.maxTranslate())x.params.freeModeMomentumBounce?(m+x.maxTranslate()<-g&&(m=x.maxTranslate()-g),u=x.maxTranslate(),c=!0,D=!0):m=x.maxTranslate();else if(m>x.minTranslate())x.params.freeModeMomentumBounce?(m-x.minTranslate()>g&&(m=x.minTranslate()+g),u=x.minTranslate(),c=!0,D=!0):m=x.minTranslate();else if(x.params.freeModeSticky){var h,v=0;for(v=0;v<x.snapGrid.length;v+=1)if(x.snapGrid[v]>-m){h=v;break}m=Math.abs(x.snapGrid[h]-m)<Math.abs(x.snapGrid[h-1]-m)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(m=-m)}if(0!==x.velocity)p=x.rtl?Math.abs((-m-x.translate)/x.velocity):Math.abs((m-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(u),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&D&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(u),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(m),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(m),x.updateActiveIndex()}return void((!x.params.freeModeMomentum||s>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex()))}var f,w=0,y=x.slidesSizesGrid[0];for(f=0;f<x.slidesGrid.length;f+=x.params.slidesPerGroup)void 0!==x.slidesGrid[f+x.params.slidesPerGroup]?r>=x.slidesGrid[f]&&r<x.slidesGrid[f+x.params.slidesPerGroup]&&(w=f,y=x.slidesGrid[f+x.params.slidesPerGroup]-x.slidesGrid[f]):r>=x.slidesGrid[f]&&(w=f,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);var T=(r-x.slidesGrid[w])/y;if(s>x.params.longSwipesMs){if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(T>=x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w)),"prev"===x.swipeDirection&&(T>1-x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w))}else{if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(w+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(w)}}},x._slideTo=function(e,a){return x.slideTo(e,a,!0,!0)},x.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var r=-x.snapGrid[x.snapIndex];if(x.params.autoplay&&x.autoplaying&&(s||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(a):x.stopAutoplay()),x.updateProgress(r),x.params.normalizeSlideIndex)for(var i=0;i<x.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*x.slidesGrid[i])&&(e=i);return!(!x.params.allowSwipeToNext&&r<x.translate&&r<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&r>x.translate&&r>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(void 0===a&&(a=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-r===x.translate||!x.rtl&&r===x.translate?(x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(r),!1):(x.updateClasses(),x.onTransitionStart(t),0===a||x.browser.lteIE9?(x.setWrapperTranslate(r),x.setWrapperTransition(0),x.onTransitionEnd(t)):(x.setWrapperTranslate(r),x.setWrapperTransition(a),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(t)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,a,e,t)}return x.slideTo(x.activeIndex-1,a,e,t)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,a,t){return x.slideTo(x.activeIndex,a,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0,!0},x.enableTouchControl=function(){return x.params.onlyExternal=!1,!0},x.setWrapperTransition=function(e,a){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,a),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,a,t){var s=0,i=0;x.isHorizontal()?s=x.rtl?-e:e:i=e,x.params.roundLengths&&(s=r(s),i=r(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+s+"px, "+i+"px)")),x.translate=x.isHorizontal()?s:i;var n,o=x.maxTranslate()-x.minTranslate();n=0===o?0:(e-x.minTranslate())/o,n!==x.progress&&x.updateProgress(e),a&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,t),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,a){var t,s,r,i;return void 0===a&&(a="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),x.rtl&&s&&(s=-s),s||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),a=0;a<e.length;a++)o(e[a]);o(x.container[0],{childList:!1}),o(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},x.createLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var t,s=[],r=[];for(a.each(function(t,i){var n=e(this);t<x.loopedSlides&&r.push(i),t<a.length&&t>=a.length-x.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var a=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(a+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&x.wrapper.append(e[a]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var a=x.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&x.wrapper.prepend(e[t]);a=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(a,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var a,t=x.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(t+x.loopedSlides,0,!1):x.slideTo(t,0,!1)},x.removeAllSlides=function(){for(var e=[],a=0;a<x.slides.length;a++)e.push(a);x.removeSlide(e)},x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var a=x.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;x.params.virtualTranslate||(s-=x.translate);var r=0;x.isHorizontal()||(r=s,s=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var a=!1;x.slides.transitionEnd(function(){if(!a&&x){a=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<x.slides.length;a++){var t=x.slides.eq(a),s=t[0].progress;x.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(x.isHorizontal()?x.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+x.slides.length,x.params.flip.slideShadows){var d=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),m=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(m)),d.length&&(d[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),x.params.virtualTranslate&&0!==a){var t=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!t&&x&&e(this).hasClass(x.params.slideActiveClass)){t=!0,x.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)x.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;x.params.cube.shadow&&(x.isHorizontal()?(a=x.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(a)),a.css({height:x.width+"px"})):(a=x.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.container.append(a))));for(var s=0;s<x.slides.length;s++){var r=x.slides.eq(s),i=90*s,n=Math.floor(i/360);x.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*x.size,d=0):(s-1)%4==0?(l=0,d=4*-n*x.size):(s-2)%4==0?(l=x.size+4*n*x.size,d=x.size):(s-3)%4==0&&(l=-x.size,d=3*x.size+4*x.size*n),x.rtl&&(l=-l),x.isHorizontal()||(p=l,l=0);var m="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,x.rtl&&(t=90*-s-90*o)),r.transform(m),x.params.cube.slideShadows){var u=x.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),r.append(u)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),u.length&&(u[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())a.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),v=x.params.cube.shadowScale,f=x.params.cube.shadowScale/h,w=x.params.cube.shadowOffset;a.transform("scale3d("+v+", 1, "+f+") translate3d(0px, "+(x.height/2+w)+"px, "+-x.height/2/f+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=x.translate,t=x.isHorizontal()?-a+x.width/2:-a+x.height/2,s=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,r=x.params.coverflow.depth,i=0,n=x.slides.length;i<n;i++){var o=x.slides.eq(i),l=x.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*x.params.coverflow.modifier,m=x.isHorizontal()?s*d:0,u=x.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=x.isHorizontal()?0:x.params.coverflow.stretch*d,h=x.isHorizontal()?x.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0);var v="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+u+"deg) rotateY("+m+"deg)";if(o.transform(v),o[0].style.zIndex=1-Math.abs(Math.round(d)),x.params.coverflow.slideShadows){var f=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(f)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),f.length&&(f[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(x.browser.ie){x.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},x.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==x.slides.length)){var s=x.slides.eq(a),r=s.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!s.hasClass(x.params.lazyLoadingClass)||s.hasClass(x.params.lazyStatusLoadedClass)||s.hasClass(x.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var a=e(this);a.addClass(x.params.lazyStatusLoadingClass);var r=a.attr("data-background"),i=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");x.loadImage(a[0],i||r,n,o,!1,function(){if(void 0!==x&&null!==x&&x){if(r?(a.css("background-image",'url("'+r+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),i&&(a.attr("src",i),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),s.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(x.params.slideDuplicateClass)){var l=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(l.index(),!1)}else{var p=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(p.index(),!1)}}x.emit("onLazyImageReady",x,s[0],a[0])}}),x.emit("onLazyImageLoad",x,s[0],a[0])})}},load:function(){var a,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=x.activeIndex;a<x.activeIndex+t;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(t>1||x.params.lazyLoadingInPrevNextAmount&&x.params.lazyLoadingInPrevNextAmount>1){var s=x.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(x.activeIndex+r+Math.max(s,r),x.slides.length),n=Math.max(x.activeIndex-Math.max(r,s),0);for(a=x.activeIndex+t;a<i;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);for(a=n;a<x.activeIndex;a++)x.slides[a]&&x.lazy.loadImageInSlide(a)}else{var o=x.wrapper.children("."+x.params.slideNextClass);o.length>0&&x.lazy.loadImageInSlide(o.index());var l=x.wrapper.children("."+x.params.slidePrevClass);l.length>0&&x.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},x.scrollbar={isTouched:!1,setDragPosition:function(e){var a=x.scrollbar,t=x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[x.isHorizontal()?"left":"top"]-a.dragSize/2,r=-x.minTranslate()*a.moveDivider,i=-x.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,x.updateProgress(s),x.setWrapperTranslate(s,!0)},dragStart:function(e){var a=x.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),x.params.scrollbarHide&&a.track.css("opacity",1),x.wrapper.transition(100),a.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var a=x.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),x.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var a=x.scrollbar;a.isTouched&&(a.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:function(){return x.params.simulateTouch!==!1||x.support.touch?x.touchEvents:x.touchEventsDesktop}(),enableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(x.params.scrollbar){var a=x.scrollbar;a.track=e(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&a.track.length>1&&1===x.container.find(x.params.scrollbar).length&&(a.track=x.container.find(x.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=x.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=x.size/x.virtualSize,a.moveDivider=a.divider*(a.trackSize/x.size),a.dragSize=a.trackSize*a.divider,x.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",x.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,a=x.scrollbar,t=(x.translate,a.dragSize);e=(a.trackSize-a.dragSize)*x.progress,x.rtl&&x.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),x.isHorizontal()?(x.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(x.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),x.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},x.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,r;this.x.length;this.interpolate=function(e){return e?(r=t(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(a),i=-x.controller.spline.interpolate(-e)),i&&"container"!==x.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(x.maxTranslate()-x.minTranslate()),i=(e-x.minTranslate())*r+a.minTranslate()),x.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,x),a.updateActiveIndex()}var r,i,n=x.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,x),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===x.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=x.params.control;if(Array.isArray(i))for(r=0;r<i.length;r++)i[r]!==t&&i[r]instanceof a&&s(i[r]);else i instanceof a&&t!==i&&s(i)}},x.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){
if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=x.slides.length;a<t;a++){var s=x.slides.eq(a),r=s.attr("data-hash")||s.attr("data-history");if(r===e&&!s.hasClass(x.params.slideDuplicateClass)){var i=s.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(x.history.initialized&&x.params.history){var t=x.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),x.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=x.slides.length;s<r;s++){var i=x.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(x.params.slideDuplicateClass)){var o=i.index();x.slideTo(o,e,t)}}else x.slideTo(0,e,t)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,e(document).off("keydown",l)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,e(document).on("keydown",l)},x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(x.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.off(x.mousewheel.event,d),x.params.mousewheelControl=!1,!0},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.on(x.mousewheel.event,d),x.params.mousewheelControl=!0,!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,x.progress)}),x.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},x.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2))},onGestureStart:function(a){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(x.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<x.params.zoomMin&&(a.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),x.params.zoomMin),a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=x.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(x.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=x.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=x.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),x.rtl&&(a.image.startX=-a.image.startX),x.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(x.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,m=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-m/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,m,u,c,g,h,v,f,w,y,x,T;void 0===s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,u=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=u*s.scale,h=c*s.scale,v=Math.min(x/2-g/2,0),f=Math.min(T/2-h/2,0),w=-v,y=-f,d=l*s.scale,m=p*s.scale,d<v&&(d=v),d>w&&(d=w),m<f&&(m=f),m>y&&(m=y)):(d=0,m=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+m+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(x.params.zoom){var s=(x.slides,!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1});x.support.gestures?(x.slides[t]("gesturestart",x.zoom.onGestureStart,s),x.slides[t]("gesturechange",x.zoom.onGestureChange,s),x.slides[t]("gestureend",x.zoom.onGestureEnd,s)):"touchstart"===x.touchEvents.start&&(x.slides[t](x.touchEvents.start,x.zoom.onGestureStart,s),x.slides[t](x.touchEvents.move,x.zoom.onGestureChange,s),x.slides[t](x.touchEvents.end,x.zoom.onGestureEnd,s)),x[t]("touchStart",x.zoom.onTouchStart),x.slides.each(function(a,s){e(s).find("."+x.params.zoomContainerClass).length>0&&e(s)[t](x.touchEvents.move,x.zoom.onTouchMove)}),x[t]("touchEnd",x.zoom.onTouchEnd),x[t]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},x._plugins=[];for(var Y in x.plugins){var A=x.plugins[Y](x,x.params[Y]);A&&x._plugins.push(A)}return x.callPlugins=function(e){for(var a=0;a<x._plugins.length;a++)e in x._plugins[a]&&x._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(x.emitterEventListeners[e])for(a=0;a<x.emitterEventListeners[e].length;a++)x.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,a){return e=u(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(a),x},x.off=function(e,a){var t;if(e=u(e),void 0===a)return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t]===a&&x.emitterEventListeners[e].splice(t,1);return x}},x.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(e,t)};return x.on(e,t),x},x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(x.params.nextButton)?(x.onClickNext(a),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):e(a.target).is(x.params.prevButton)&&(x.onClickPrev(a),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),e(a.target).is("."+x.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=x.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),e(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var a=e(this);x.a11y.makeFocusable(a),x.a11y.addRole(a,"button"),x.a11y.addLabel(a,x.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){x.a11y.liveRegion&&x.a11y.liveRegion.length>0&&x.a11y.liveRegion.remove()}},x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},x.cleanupStyles=function(){x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),x.wrapper.removeAttr("style"),x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),x.params.prevButton&&e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},x.destroy=function(e,a){x.detachEvents(),x.stopAutoplay(),x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),x.params.loop&&x.destroyLoop(),a&&x.cleanupStyles(),x.disconnectObservers(),x.params.zoom&&x.zoom&&x.zoom.destroy(),x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),x.params.a11y&&x.a11y&&x.a11y.destroy(),x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),x.emit("onDestroy"),e!==!1&&(x=null)},x.init(),x}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=["jQuery","Zepto","Dom7"],s=0;s<t.length;s++)window[t[s]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[t[s]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
(function($){var S=new String('万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤呼啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲尽脏拼');var T=new String('萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒儘臟拚');function tranStr(str,toT){var i;var letter;var code;var isChinese;var index;var src,des;var result='';if(toT){src=S;des=T}else{src=T;des=S}if(typeof str!=="string"){return str}for(i=0;i<str.length;i++){letter=str.charAt(i);code=str.charCodeAt(i);isChinese=(code>0x3400&&code<0x9FC3)||(code>0xF900&&code<0xFA6A);if(!isChinese){result+=letter;continue}index=src.indexOf(letter);if(index!==-1){result+=des.charAt(index)}else{result+=letter}}return result}function tranAttr(element,attr,toT){var i,attrValue;if(attr instanceof Array){for(i=0;i<attr.length;i++){tranAttr(element,attr[i],toT)}}else{attrValue=element.getAttribute(attr);if(attrValue!==""&&attrValue!==null){element.setAttribute(attr,tranStr(attrValue,toT))}}}function tranElement(element,toT){var i;var childNodes;if(element.nodeType!==1){return}childNodes=element.childNodes;for(i=0;i<childNodes.length;i++){var childNode=childNodes.item(i);if(childNode.nodeType===1){if("|BR|HR|TEXTAREA|SCRIPT|OBJECT|EMBED|".indexOf("|"+childNode.tagName+"|")!==-1){continue}tranAttr(childNode,['title','data-original-title','alt','placeholder'],toT);if(childNode.tagName==="INPUT"&&childNode.value!==""&&childNode.type!=="text"&&childNode.type!=="hidden"){childNode.value=tranStr(childNode.value,toT)}tranElement(childNode,toT)}else if(childNode.nodeType===3){childNode.data=tranStr(childNode.data,toT)}}}$.extend({s2t:function(str){return tranStr(str,true)},t2s:function(str){return tranStr(str,false)}});$.fn.extend({s2t:function(){return this.each(function(){tranElement(this,true)})},t2s:function(){return this.each(function(){tranElement(this,false)})}})})(jQuery);
!function(a,b,c){"use strict";!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(function(d){function e(a,b){return this.$element=d(a),b&&("string"===d.type(b.delay)||"number"===d.type(b.delay))&&(b.delay={show:b.delay,hide:b.delay}),this.options=d.extend({},i,b),this._defaults=i,this._name=f,this._targetclick=!1,this.init(),k.push(this.$element),this}var f="webuiPopover",g="webui-popover",h="webui.popover",i={placement:"auto",container:null,width:"auto",height:"auto",trigger:"click",style:"",selector:!1,delay:{show:null,hide:300},async:{type:"GET",before:null,success:null,error:null},cache:!0,multi:!1,arrow:!0,title:"",content:"",closeable:!1,padding:!0,url:"",type:"html",direction:"",animation:null,template:'<div class="webui-popover"><div class="webui-arrow"></div><div class="webui-popover-inner"><a href="#" class="close"></a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',backdrop:!1,dismissible:!0,onShow:null,onHide:null,abortXHR:!0,autoHide:!1,offsetTop:0,offsetLeft:0,iframeOptions:{frameborder:"0",allowtransparency:"true",id:"",name:"",scrolling:"",onload:"",height:"",width:""},hideEmpty:!1},j=g+"-rtl",k=[],l=d('<div class="webui-popover-backdrop"></div>'),m=0,n=!1,o=-2e3,p=d(b),q=function(a,b){return isNaN(a)?b||0:Number(a)},r=function(a){return a.data("plugin_"+f)},s=function(){for(var a=null,b=0;b<k.length;b++)a=r(k[b]),a&&a.hide(!0);p.trigger("hiddenAll."+h)},t=function(a){for(var b=null,c=0;c<k.length;c++)b=r(k[c]),b&&b.id!==a.id&&b.hide(!0);p.trigger("hiddenAll."+h)},u="ontouchstart"in b.documentElement&&/Mobi/.test(navigator.userAgent),v=function(a){var b={x:0,y:0};if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type){var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];b.x=c.pageX,b.y=c.pageY}else("mousedown"===a.type||"mouseup"===a.type||"click"===a.type)&&(b.x=a.pageX,b.y=a.pageY);return b};e.prototype={init:function(){if(this.$element[0]instanceof b.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");"manual"!==this.getTrigger()&&(u?this.$element.off("touchend",this.options.selector).on("touchend",this.options.selector,d.proxy(this.toggle,this)):"click"===this.getTrigger()?this.$element.off("click",this.options.selector).on("click",this.options.selector,d.proxy(this.toggle,this)):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave click",this.options.selector).on("mouseenter",this.options.selector,d.proxy(this.mouseenterHandler,this)).on("mouseleave",this.options.selector,d.proxy(this.mouseleaveHandler,this))),this._poped=!1,this._inited=!0,this._opened=!1,this._idSeed=m,this.id=f+this._idSeed,this.options.container=d(this.options.container||b.body).first(),this.options.backdrop&&l.appendTo(this.options.container).hide(),m++,"sticky"===this.getTrigger()&&this.show(),this.options.selector&&(this._options=d.extend({},this.options,{selector:""}))},destroy:function(){for(var a=-1,b=0;b<k.length;b++)if(k[b]===this.$element){a=b;break}k.splice(a,1),this.hide(),this.$element.data("plugin_"+f,null),"click"===this.getTrigger()?this.$element.off("click"):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave"),this.$target&&this.$target.remove()},getDelegateOptions:function(){var a={};return this._options&&d.each(this._options,function(b,c){i[b]!==c&&(a[b]=c)}),a},hide:function(a,b){if((a||"sticky"!==this.getTrigger())&&this._opened){b&&(b.preventDefault(),b.stopPropagation()),this.xhr&&this.options.abortXHR===!0&&(this.xhr.abort(),this.xhr=null);var c=d.Event("hide."+h);if(this.$element.trigger(c,[this.$target]),this.$target){this.$target.removeClass("in").addClass(this.getHideAnimation());var e=this;setTimeout(function(){e.$target.hide(),e.getCache()||e.$target.remove()},e.getHideDelay())}this.options.backdrop&&l.hide(),this._opened=!1,this.$element.trigger("hidden."+h,[this.$target]),this.options.onHide&&this.options.onHide(this.$target)}},resetAutoHide:function(){var a=this,b=a.getAutoHide();b&&(a.autoHideHandler&&clearTimeout(a.autoHideHandler),a.autoHideHandler=setTimeout(function(){a.hide()},b))},delegate:function(a){var b=d(a).data("plugin_"+f);return b||(b=new e(a,this.getDelegateOptions()),d(a).data("plugin_"+f,b)),b},toggle:function(a){var b=this;a&&(a.preventDefault(),a.stopPropagation(),this.options.selector&&(b=this.delegate(a.currentTarget))),b[b.getTarget().hasClass("in")?"hide":"show"]()},hideAll:function(){s()},hideOthers:function(){t(this)},show:function(){if(!this._opened){var a=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass);if(this.options.multi||this.hideOthers(),!this.getCache()||!this._poped||""===this.content){if(this.content="",this.setTitle(this.getTitle()),this.options.closeable||a.find(".close").off("click").remove(),this.isAsync()?this.setContentASync(this.options.content):this.setContent(this.getContent()),this.canEmptyHide()&&""===this.content)return;a.show()}this.displayContent(),this.options.onShow&&this.options.onShow(a),this.bindBodyEvents(),this.options.backdrop&&l.show(),this._opened=!0,this.resetAutoHide()}},displayContent:function(){var a=this.getElementPosition(),b=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass),c=this.getContentElement(),e=b[0].offsetWidth,f=b[0].offsetHeight,i="bottom",k=d.Event("show."+h);if(this.canEmptyHide()){var l=c.children().html();if(null!==l&&0===l.trim().length)return}this.$element.trigger(k,[b]);var m=this.$element.data("width")||this.options.width;""===m&&(m=this._defaults.width),"auto"!==m&&b.width(m);var n=this.$element.data("height")||this.options.height;""===n&&(n=this._defaults.height),"auto"!==n&&c.height(n),this.options.style&&this.$target.addClass(g+"-"+this.options.style),"rtl"!==this.options.direction||c.hasClass(j)||c.addClass(j),this.options.arrow||b.find(".webui-arrow").remove(),b.detach().css({top:o,left:o,display:"block"}),this.getAnimation()&&b.addClass(this.getAnimation()),b.appendTo(this.options.container),i=this.getPlacement(a),this.$element.trigger("added."+h),this.initTargetEvents(),this.options.padding||("auto"!==this.options.height&&c.css("height",c.outerHeight()),this.$target.addClass("webui-no-padding")),this.options.maxHeight&&c.css("maxHeight",this.options.maxHeight),this.options.maxWidth&&c.css("maxWidth",this.options.maxWidth),e=b[0].offsetWidth,f=b[0].offsetHeight;var p=this.getTargetPositin(a,i,e,f);if(this.$target.css(p.position).addClass(i).addClass("in"),"iframe"===this.options.type){var q=b.find("iframe"),r=b.width(),s=q.parent().height();""!==this.options.iframeOptions.width&&"auto"!==this.options.iframeOptions.width&&(r=this.options.iframeOptions.width),""!==this.options.iframeOptions.height&&"auto"!==this.options.iframeOptions.height&&(s=this.options.iframeOptions.height),q.width(r).height(s)}if(this.options.arrow||this.$target.css({margin:0}),this.options.arrow){var t=this.$target.find(".webui-arrow");t.removeAttr("style"),"left"===i||"right"===i?t.css({top:this.$target.height()/2}):("top"===i||"bottom"===i)&&t.css({left:this.$target.width()/2}),p.arrowOffset&&(-1===p.arrowOffset.left||-1===p.arrowOffset.top?t.hide():t.css(p.arrowOffset))}this._poped=!0,this.$element.trigger("shown."+h,[this.$target])},isTargetLoaded:function(){return 0===this.getTarget().find("i.glyphicon-refresh").length},getTriggerElement:function(){return this.$element},getTarget:function(){if(!this.$target){var a=f+this._idSeed;this.$target=d(this.options.template).attr("id",a),this._customTargetClass=this.$target.attr("class")!==g?this.$target.attr("class"):null,this.getTriggerElement().attr("data-target",a)}return this.$target.data("trigger-element")||this.$target.data("trigger-element",this.getTriggerElement()),this.$target},removeTarget:function(){this.$target.remove(),this.$target=null,this.$contentElement=null},getTitleElement:function(){return this.getTarget().find("."+g+"-title")},getContentElement:function(){return this.$contentElement||(this.$contentElement=this.getTarget().find("."+g+"-content")),this.$contentElement},getTitle:function(){return this.$element.attr("data-title")||this.options.title||this.$element.attr("title")},getUrl:function(){return this.$element.attr("data-url")||this.options.url},getAutoHide:function(){return this.$element.attr("data-auto-hide")||this.options.autoHide},getOffsetTop:function(){return q(this.$element.attr("data-offset-top"))||this.options.offsetTop},getOffsetLeft:function(){return q(this.$element.attr("data-offset-left"))||this.options.offsetLeft},getCache:function(){var a=this.$element.attr("data-cache");if("undefined"!=typeof a)switch(a.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":return!1}return this.options.cache},getTrigger:function(){return this.$element.attr("data-trigger")||this.options.trigger},getDelayShow:function(){var a=this.$element.attr("data-delay-show");return"undefined"!=typeof a?a:0===this.options.delay.show?0:this.options.delay.show||100},getHideDelay:function(){var a=this.$element.attr("data-delay-hide");return"undefined"!=typeof a?a:0===this.options.delay.hide?0:this.options.delay.hide||100},getAnimation:function(){var a=this.$element.attr("data-animation");return a||this.options.animation},getHideAnimation:function(){var a=this.getAnimation();return a?a+"-out":"out"},setTitle:function(a){var b=this.getTitleElement();a?("rtl"!==this.options.direction||b.hasClass(j)||b.addClass(j),b.html(a)):b.remove()},hasContent:function(){return this.getContent()},canEmptyHide:function(){return this.options.hideEmpty&&"html"===this.options.type},getIframe:function(){var a=d("<iframe></iframe>").attr("src",this.getUrl()),b=this;return d.each(this._defaults.iframeOptions,function(c){"undefined"!=typeof b.options.iframeOptions[c]&&a.attr(c,b.options.iframeOptions[c])}),a},getContent:function(){if(this.getUrl())switch(this.options.type){case"iframe":this.content=this.getIframe();break;case"html":try{this.content=d(this.getUrl()),this.content.is(":visible")||this.content.show()}catch(a){throw new Error("Unable to get popover content. Invalid selector specified.")}}else if(!this.content){var b="";if(b=d.isFunction(this.options.content)?this.options.content.apply(this.$element[0],[this]):this.options.content,this.content=this.$element.attr("data-content")||b,!this.content){var c=this.$element.next();c&&c.hasClass(g+"-content")&&(this.content=c)}}return this.content},setContent:function(a){var b=this.getTarget(),c=this.getContentElement();"string"==typeof a?c.html(a):a instanceof d&&(c.html(""),this.options.cache?a.removeClass(g+"-content").appendTo(c):a.clone(!0,!0).removeClass(g+"-content").appendTo(c)),this.$target=b},isAsync:function(){return"async"===this.options.type},setContentASync:function(a){var b=this;this.xhr||(this.xhr=d.ajax({url:this.getUrl(),type:this.options.async.type,cache:this.getCache(),beforeSend:function(a,c){b.options.async.before&&b.options.async.before(b,a,c)},success:function(c){b.bindBodyEvents(),a&&d.isFunction(a)?b.content=a.apply(b.$element[0],[c]):b.content=c,b.setContent(b.content);var e=b.getContentElement();e.removeAttr("style"),b.displayContent(),b.options.async.success&&b.options.async.success(b,c)},complete:function(){b.xhr=null},error:function(a,c){b.options.async.error&&b.options.async.error(b,a,c)}}))},bindBodyEvents:function(){n||(this.options.dismissible&&"click"===this.getTrigger()?u?p.off("touchstart.webui-popover").on("touchstart.webui-popover",d.proxy(this.bodyTouchStartHandler,this)):(p.off("keyup.webui-popover").on("keyup.webui-popover",d.proxy(this.escapeHandler,this)),p.off("click.webui-popover").on("click.webui-popover",d.proxy(this.bodyClickHandler,this))):"hover"===this.getTrigger()&&p.off("touchend.webui-popover").on("touchend.webui-popover",d.proxy(this.bodyClickHandler,this)))},mouseenterHandler:function(a){var b=this;a&&this.options.selector&&(b=this.delegate(a.currentTarget)),b._timeout&&clearTimeout(b._timeout),b._enterTimeout=setTimeout(function(){b.getTarget().is(":visible")||b.show()},this.getDelayShow())},mouseleaveHandler:function(){var a=this;clearTimeout(a._enterTimeout),a._timeout=setTimeout(function(){a.hide()},this.getHideDelay())},escapeHandler:function(a){27===a.keyCode&&this.hideAll()},bodyTouchStartHandler:function(a){var b=this,c=d(a.currentTarget);c.on("touchend",function(a){b.bodyClickHandler(a),c.off("touchend")}),c.on("touchmove",function(){c.off("touchend")})},bodyClickHandler:function(a){n=!0;for(var b=!0,c=0;c<k.length;c++){var d=r(k[c]);if(d&&d._opened){var e=d.getTarget().offset(),f=e.left,g=e.top,h=e.left+d.getTarget().width(),i=e.top+d.getTarget().height(),j=v(a),l=j.x>=f&&j.x<=h&&j.y>=g&&j.y<=i;if(l){b=!1;break}}}b&&s()},initTargetEvents:function(){"hover"===this.getTrigger()&&this.$target.off("mouseenter mouseleave").on("mouseenter",d.proxy(this.mouseenterHandler,this)).on("mouseleave",d.proxy(this.mouseleaveHandler,this)),this.$target.find(".close").off("click").on("click",d.proxy(this.hide,this,!0))},getPlacement:function(a){var b,c=this.options.container,d=c.innerWidth(),e=c.innerHeight(),f=c.scrollTop(),g=c.scrollLeft(),h=Math.max(0,a.left-g),i=Math.max(0,a.top-f);b="function"==typeof this.options.placement?this.options.placement.call(this,this.getTarget()[0],this.$element[0]):this.$element.data("placement")||this.options.placement;var j="horizontal"===b,k="vertical"===b,l="auto"===b||j||k;return l?b=d/3>h?e/3>i?j?"right-bottom":"bottom-right":2*e/3>i?k?e/2>=i?"bottom-right":"top-right":"right":j?"right-top":"top-right":2*d/3>h?e/3>i?j?d/2>=h?"right-bottom":"left-bottom":"bottom":2*e/3>i?j?d/2>=h?"right":"left":e/2>=i?"bottom":"top":j?d/2>=h?"right-top":"left-top":"top":e/3>i?j?"left-bottom":"bottom-left":2*e/3>i?k?e/2>=i?"bottom-left":"top-left":"left":j?"left-top":"top-left":"auto-top"===b?b=d/3>h?"top-right":2*d/3>h?"top":"top-left":"auto-bottom"===b?b=d/3>h?"bottom-right":2*d/3>h?"bottom":"bottom-left":"auto-left"===b?b=e/3>i?"left-top":2*e/3>i?"left":"left-bottom":"auto-right"===b&&(b=e/3>i?"right-bottom":2*e/3>i?"right":"right-top"),b},getElementPosition:function(){var a=this.$element[0].getBoundingClientRect(),c=this.options.container,e=c.css("position");if(c.is(b.body)||"static"===e)return d.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height});if("fixed"===e){var f=c[0].getBoundingClientRect();return{top:a.top-f.top+c.scrollTop(),left:a.left-f.left+c.scrollLeft(),width:a.width,height:a.height}}return"relative"===e?{top:this.$element.offset().top-c.offset().top,left:this.$element.offset().left-c.offset().left,width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height}:void 0},getTargetPositin:function(a,c,d,e){var f=a,g=this.options.container,h=this.$element.outerWidth(),i=this.$element.outerHeight(),j=b.documentElement.scrollTop+g.scrollTop(),k=b.documentElement.scrollLeft+g.scrollLeft(),l={},m=null,n=this.options.arrow?20:0,p=10,q=n+p>h?n:0,r=n+p>i?n:0,s=0,t=b.documentElement.clientHeight+j,u=b.documentElement.clientWidth+k,v=f.left+f.width/2-q>0,w=f.left+f.width/2+q<u,x=f.top+f.height/2-r>0,y=f.top+f.height/2+r<t;switch(c){case"bottom":l={top:f.top+f.height,left:f.left+f.width/2-d/2};break;case"top":l={top:f.top-e,left:f.left+f.width/2-d/2};break;case"left":l={top:f.top+f.height/2-e/2,left:f.left-d};break;case"right":l={top:f.top+f.height/2-e/2,left:f.left+f.width};break;case"top-right":l={top:f.top-e,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"top-left":s=w?q:-p,l={top:f.top-e,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"bottom-right":l={top:f.top+f.height,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"bottom-left":s=w?q:-p,l={top:f.top+f.height,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"right-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left+f.width},m={top:y?e-Math.min(i,e)/2-r:o};break;case"right-bottom":l={top:x?f.top-r:p,left:f.left+f.width},m={top:x?Math.min(i,e)/2+r:o};break;case"left-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left-d},m={top:y?e-Math.min(i,e)/2-r:o};break;case"left-bottom":l={top:x?f.top-r:p,left:f.left-d},m={top:x?Math.min(i,e)/2+r:o}}return l.top+=this.getOffsetTop(),l.left+=this.getOffsetLeft(),{position:l,arrowOffset:m}}},d.fn[f]=function(a,b){var c=[],g=this.each(function(){var g=d.data(this,"plugin_"+f);g?"destroy"===a?g.destroy():"string"==typeof a&&c.push(g[a]()):(a?"string"==typeof a?"destroy"!==a&&(b||(g=new e(this,null),c.push(g[a]()))):"object"==typeof a&&(g=new e(this,a)):g=new e(this,null),d.data(this,"plugin_"+f,g))});return c.length?c:g};var w=function(){var a=function(){s()},b=function(a,b){b=b||{},d(a).webuiPopover(b)},e=function(a){var b=!0;return d(a).each(function(a,e){b=b&&d(e).data("plugin_"+f)!==c}),b},g=function(a,b){b?d(a).webuiPopover(b).webuiPopover("show"):d(a).webuiPopover("show")},h=function(a){d(a).webuiPopover("hide")},j=function(a){i=d.extend({},i,a)},k=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache();c.options.cache=!1,c.options.content=b,c._opened?(c._opened=!1,c.show()):c.isAsync()?c.setContentASync(b):c.setContent(b),c.options.cache=e}},l=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache(),g=c.options.type;c.options.cache=!1,c.options.url=b,c._opened?(c._opened=!1,c.show()):(c.options.type="async",c.setContentASync(c.content)),c.options.cache=e,c.options.type=g}};return{show:g,hide:h,create:b,isCreated:e,hideAll:a,updateContent:k,updateContentAsync:l,setDefaultOptions:j}}();a.WebuiPopovers=w})}(window,document);
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/webui-popover",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginWebuiPopover=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="webuiPopover",WebuiPopover=function(_Plugin){function WebuiPopover(){return babelHelpers.classCallCheck(this,WebuiPopover),babelHelpers.possibleConstructorReturn(this,(WebuiPopover.__proto__||Object.getPrototypeOf(WebuiPopover)).apply(this,arguments))}return babelHelpers.inherits(WebuiPopover,_Plugin),babelHelpers.createClass(WebuiPopover,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}}}]),WebuiPopover}(_Plugin3.default);_Plugin3.default.register(NAME,WebuiPopover),exports.default=WebuiPopover});
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
(function($, window, document, undefined) {
var $window = $(window),
placeholder_base64='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC';
$.fn.lazyload = function(options) {
var elements = this;
var $container;
var settings = {
threshold       : 30,
failure_limit   : 1000,
event           : "scroll",
effect          : "fadeIn",
effect_speed    : null,
container       : window,
data_attribute  : "original",
data_srcset     : 'srcset',
skip_invisible  : true,
appear          : null,
load            : null,
placeholder     : met_lazyloadbg,
};
function update() {
var counter = 0;
elements.each(function() {
var $this = $(this);
if (settings.skip_invisible && !$this.is(":visible")) {
return;
}
if ($.abovethetop(this, settings) ||
$.leftofbegin(this, settings)) {
} else if (!$.belowthefold(this, settings) &&
!$.rightoffold(this, settings)) {
$this.trigger("appear");
counter = 0;
} else {
if (++counter > settings.failure_limit) {
return false;
}
}
});
}
if(options) {
if (undefined !== options.failurelimit) {
options.failure_limit = options.failurelimit;
delete options.failurelimit;
}
if (undefined !== options.effectspeed) {
options.effect_speed = options.effectspeed;
delete options.effectspeed;
}
$.extend(settings, options);
}
$container = (settings.container === undefined ||
settings.container === window) ? $window : $(settings.container);
if (0 === settings.event.indexOf("scroll")) {
$container.on(settings.event, function() {
return update();
});
}
if(settings.placeholder=='base64') settings.placeholder=placeholder_base64;
this.attr({'data-lazyload':true});
this.each(function(index) {
var self = this,
$self = $(self),
original = $self.attr("data-" + settings.data_attribute),
placeholder=settings.placeholder,
placeholder_ok=placeholder!=placeholder_base64?true:false;
if (original) {
if($self.is("img")){
if($self.attr("src") && $self.attr("src")==original){
return true;
}else{
self.loaded = false;
$self.attr("src", placeholder);
if(placeholder_ok && !$self.hasClass('imgloading')) $self.addClass('imgloading');
}
}else{
self.loaded = false;
}
}
$self.one("appear", function() {
if (!this.loaded) {
if (settings.appear) {
var elements_left = elements.length;
settings.appear.call(self, elements_left, settings);
}
var srcset = $self.attr("data-" + settings.data_srcset);
$("<img />")
.one("load", function() {
$self.hide();
if ($self.is("img")) {
if(srcset) $self.attr("srcset", srcset);
$self.attr("src", original);
} else {
$self.css("background-image", "url('" + original + "')");
if(srcset) $self.css("background-image", "-webkit-image-set(" + srcset + ")");
}
$self[settings.effect](settings.effect_speed);
$self.one('load', function() {
$self.removeClass('imgloading');
$self.next('canvas').fadeOut("normal",function(){
$self.next('canvas').remove();
});
});
self.loaded = true;
var temp = $.grep(elements, function(element) {
return !element.loaded;
});
elements = $(temp);
if (settings.load) {
var elements_left = elements.length;
settings.load.call(self, elements_left, settings);
}
}).attr({srcset:srcset,src:original}).removeClass('imgloading').next('canvas').fadeOut("normal",function(){
$("<img />").next('canvas').remove();
});
}
});
if (0 !== settings.event.indexOf("scroll")) {
$self.on(settings.event, function() {
if (!self.loaded) {
$self.trigger("appear");
}
});
}
});
$window.on("resize", function() {
update();
});
if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
$window.on("pageshow", function(event) {
if (event.originalEvent && event.originalEvent.persisted) {
elements.each(function() {
$(this).trigger("appear");
});
}
});
}
$(document).ready(function() {
update();
});
return this;
};
$.belowthefold = function(element, settings) {
var fold;
if (settings.container === undefined || settings.container === window) {
fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
} else {
fold = $(settings.container).offset().top + $(settings.container).height();
}
return fold <= $(element).offset().top - settings.threshold;
};
$.rightoffold = function(element, settings) {
var fold;
if (settings.container === undefined || settings.container === window) {
fold = $window.width() + $window.scrollLeft();
} else {
fold = $(settings.container).offset().left + $(settings.container).width();
}
return fold <= $(element).offset().left - settings.threshold;
};
$.abovethetop = function(element, settings) {
var fold;
if (settings.container === undefined || settings.container === window) {
fold = $window.scrollTop();
} else {
fold = $(settings.container).offset().top;
}
return fold >= $(element).offset().top + settings.threshold  + $(element).height();
};
$.leftofbegin = function(element, settings) {
var fold;
if (settings.container === undefined || settings.container === window) {
fold = $window.scrollLeft();
} else {
fold = $(settings.container).offset().left;
}
return fold >= $(element).offset().left + settings.threshold + $(element).width();
};
$.inviewport = function(element, settings) {
return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
!$.belowthefold(element, settings) && !$.abovethetop(element, settings);
};
$.extend($.expr[":"], {
"below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
"above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
"right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
"left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
"in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
"above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
"right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
"left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
});
})(jQuery, window, document);
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
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
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
METUI_FUN['sidebar_met_16_2_39'] = {
name: 'sidebar_met_16_2_39',
init: function(){
var $sidebar_piclist=METUI['sidebar_met_16_2_39'].find('.sidebar-piclist-ul');
if($sidebar_piclist.find('.masonry-child').length>1){
Breakpoints.on('xs sm',{
enter:function(){
setTimeout(function(){
$sidebar_piclist.masonry({itemSelector:".masonry-child"});
},500)
}
});
}
METUI['sidebar_met_16_2_39'].find('.sidebar-search form input[type="text"]').attr({placeholder:METUI['sidebar_met_16_2_39'].find('.sidebar-search').data('placeholder')});
}
};
var banner = metui(METUI_FUN['sidebar_met_16_2_39']);