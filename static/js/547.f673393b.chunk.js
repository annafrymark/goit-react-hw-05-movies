"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[547],{547:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,a=t(861),s=t(439),i=t(757),c=t.n(i),o=t(791),u=t(87),l=t(689),p=t(209),v=t(168),d=t(444),f=t(184),h=(0,d.ZP)(u.rU)(r||(r=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transformation: uppercase;\n  margin-left: 10px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),x=function(e){var n=e.to,t=e.children;return(0,f.jsx)(h,{to:n,children:t})},m={container:"MovieDetails_container__uHDv9",movieDetails:"MovieDetails_movieDetails__YUgVh",poster:"MovieDetails_poster__ZcBYj",genres:"MovieDetails_genres__Xta9S"},g=function(){var e,n,t=(0,o.useState)({title:"",release_date:"",vote_average:"",overview:"",genres:[]}),r=(0,s.Z)(t,2),i=r[0],v=r[1],d=(0,o.useState)(""),h=(0,s.Z)(d,2),g=h[0],_=h[1],w=(0,l.UO)().movieId,j=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Du)(w);case 3:n=e.sent,v(n),_("https://image.tmdb.org/t/p/w300/".concat(n.poster_path)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){j()}));var k=null!==(e=null===(n=(0,l.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/?query=";return(0,f.jsxs)("div",{className:m.container,children:[(0,f.jsx)(x,{to:k,children:"\u2190 Go back"}),(0,f.jsxs)("div",{className:m.movieDetails,children:[(0,f.jsx)("img",{className:m.poster,src:g,alt:"movie poster"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h3",{children:[i.title," (",i.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",i.vote_average]}),(0,f.jsx)("h4",{children:"Overview"}),(0,f.jsx)("p",{children:i.overview}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("p",{className:m.genres,children:i.genres.map((function(e){return(0,f.jsx)("span",{children:e.name},e.id)}))})]})]}),(0,f.jsxs)("div",{className:m.additionalInfo,children:[(0,f.jsx)("h4",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"cast",state:{from:k},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"reviews",state:{from:k},children:"Reviews"})})]}),(0,f.jsx)(l.j3,{})]})]})}},209:function(e,n,t){t.d(n,{Du:function(){return l},NO:function(){return v},h6:function(){return o},vM:function(){return p},wr:function(){return u}});var r=t(861),a=t(757),s=t.n(a),i=t(243),c="ede5208378a65a6fc273c11c764d424b";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n){e.next=7;break}return e.next=3,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"?&api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=547.f673393b.chunk.js.map