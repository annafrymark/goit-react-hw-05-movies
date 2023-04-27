"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[793],{793:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(87),o=r(689),p=r(209),l={container:"MovieDetails_container__uHDv9",movieDetails:"MovieDetails_movieDetails__YUgVh",poster:"MovieDetails_poster__ZcBYj"},v=r(184),d=function(){var e=(0,i.useState)({title:"",release_date:"",vote_average:"",overview:"",genres:[]}),t=(0,a.Z)(e,2),r=t[0],s=t[1],d=(0,i.useState)(""),f=(0,a.Z)(d,2),h=f[0],x=f[1],m=(0,o.UO)().movieId,_=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Du)(m);case 3:t=e.sent,s(t),x("https://image.tmdb.org/t/p/w300/".concat(t.poster_path)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){_()})),(0,v.jsxs)("div",{className:l.container,children:[(0,v.jsxs)("div",{className:l.movieDetails,children:[(0,v.jsx)("img",{className:l.poster,src:h,alt:"movie poster"}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h3",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,v.jsxs)("p",{children:["User score: ",r.vote_average]}),(0,v.jsx)("h4",{children:"Overview"}),(0,v.jsx)("p",{children:r.overview}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:r.genres.map((function(e){return(0,v.jsx)("span",{children:e.name},e.id)}))})]})]}),(0,v.jsxs)("div",{className:l.additionalInfo,children:[(0,v.jsx)("h4",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(o.j3,{})]})]})}},209:function(e,t,r){r.d(t,{Du:function(){return p},NO:function(){return v},h6:function(){return u},vM:function(){return l},wr:function(){return o}});var n=r(861),a=r(757),s=r.n(a),c=r(243),i="ede5208378a65a6fc273c11c764d424b";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=7;break}return e.next=3,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?&api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=793.b1d2df10.chunk.js.map