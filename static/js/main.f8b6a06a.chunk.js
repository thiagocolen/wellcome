(this.webpackJsonpwellcome=this.webpackJsonpwellcome||[]).push([[0],{102:function(e,t,a){},187:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getNews",(function(){return q})),a.d(n,"getRandomPhoto",(function(){return M})),a.d(n,"getWeather",(function(){return D}));var r=a(0),o=a.n(r),i=a(85),c=a.n(i),u=(a(102),a(4)),s=a(7),l=a(10),m=a(8),d=a(11),h=a(212),p=a(213),f=a(9),g=a(89),b=a(90),v=a(3),w=a(96),E=a(17),y={weather:{}};var O={news:{}};var j={randomPhoto:{}};var N=Object(v.c)({weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat("GET_WEATHER","_FULFILLED"):return Object(E.a)({},e,{weather:t.payload});default:return e}},newsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat("GET_NEWS","_FULFILLED"):return Object(E.a)({},e,{news:t.payload});default:return e}},bgImageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat("GET_RANDOM_PHOTO","_FULFILLED"):return Object(E.a)({},e,{randomPhoto:{loaciton:Object(E.a)({},t.payload.location),urls:Object(E.a)({},t.payload.urls)}});default:return e}}}),S=Object(b.createLogger)(),x=Object(v.d)(N,Object(v.a)(Object(w.a)(),g.a,S)),k=a(91),P=a.n(k),T=function e(){Object(u.a)(this,e)};T.getNews=function(){return fetch(new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=d281384e581d44fda67ca1395c4d904a")).then((function(e){return e.json()})).catch((function(e){return console.log("Error happened during fetching!",e),e}))},T.getRandomPhoto=function(){return fetch("https://api.unsplash.com/photos/random/?client_id=7bb44829ebfb671742ab6f123c6581e0eca237754773b58d64940a82c82065f9").then((function(e){return e.json()})).catch((function(e){return console.log("Error happened during fetching!",e),e}))},T.getWeather=function(e,t){return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=89b5e7279338d44e816ac45c030ac220")).then((function(e){return e.json()})).catch((function(e){return console.log("Error happened during fetching!",e)}))};var C=T,q=function(){return function(e){return e({type:"GET_NEWS",payload:C.getNews()})}},M=function(){return function(e){return e({type:"GET_RANDOM_PHOTO",payload:C.getRandomPhoto()})}},D=function(e,t){return function(a){return a({type:"GET_WEATHER",payload:C.getWeather(e,t)})}},R=(a(187),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).changeBlendMode=function(){var e=Math.floor(Math.random()*Math.floor(a.state.blendModes.length));a.setState({imgCover:{backgroundImage:"url(".concat(a.props.randomPhoto.urls.regular,")"),backgroundBlendMode:a.state.blendModes[e]}})},a.state={imageUrl:"",blendModes:["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],imgCover:{},randomPhoto:{}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.actions.getRandomPhoto()}},{key:"componentDidUpdate",value:function(e,t,a){this.setBgImageUrl(e)}},{key:"setBgImageUrl",value:function(e){if(e.randomPhoto!==this.props.randomPhoto){this.setState({imgCover:{backgroundImage:"url(".concat(this.props.randomPhoto.urls.regular,")"),backgroundBlendMode:this.state.blendModes[10]}})}}},{key:"render",value:function(){var e=this;return o.a.createElement((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:e.changeBlendMode,style:e.state.imgCover,className:"imgCover"}))}),null)}}]),t}(o.a.Component)),F=Object(f.b)((function(e){return{randomPhoto:e.bgImageReducer.randomPhoto}}),(function(e){return{actions:Object(v.b)(n,e)}}))(R),I=a(92),U=a.n(I),L=a(93),_=a.n(L),G=(a(204),function(e){var t=e.title;U.a.load({google:{families:["Holtwood+One+SC","Roboto"]}});return o.a.createElement((function(){return t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"super-title"},t)):o.a.createElement(_.a,{top:0,left:0,status:"loading"})}),null)}),W=(a(205),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getDescription=function(e){a.props.weather.weather!==e.weather.weather&&a.setState({main:a.props.weather.weather[0].main,description:a.props.weather.weather[0].description})},a.getTemp=function(e){a.props.weather.main!==e.weather.main&&a.setState({temp:(Number(a.props.weather.main.temp)/10).toFixed(1)})},a.getIconUrl=function(e){a.props.weather.weather!==e.weather.weather&&a.setState({imageUrl:"https://openweathermap.org/img/wn/".concat(a.props.weather.weather[0].icon,".png")})},a.getName=function(e){a.props.weather.name!==e.weather.name&&a.setState({name:a.props.weather.name})},a.getCountry=function(e){a.props.weather.sys!==e.weather.sys&&a.setState({country:a.props.weather.sys.country})},a.getGeolocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){a.props.actions.getWeather(e.coords.latitude,e.coords.longitude)})):console.log("Geolocation is not supported by this browser.")},a.state={iconCode:"",imageUrl:"",name:"",country:"",temp:0,main:"",description:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getGeolocation()}},{key:"componentDidUpdate",value:function(e,t,a){this.getIconUrl(e),this.getName(e),this.getCountry(e),this.getTemp(e),this.getDescription(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"weather-icon"},o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"text"},o.a.createElement("h2",null,this.state.name,", ",this.state.country),o.a.createElement("h3",null,this.state.temp,"\xb0"),o.a.createElement("h4",null,this.state.description),o.a.createElement("h5",null,this.state.main)),o.a.createElement("img",{src:this.state.imageUrl,alt:"weather icon"}),o.a.createElement("div",{style:{clear:"both"}}))))}}]),t}(o.a.Component)),B=Object(f.b)((function(e){return{weather:e.weatherReducer.weather}}),(function(e){return{actions:Object(v.b)(n,e)}}))(W),A=(a(206),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getNewsTitles=function(e){a.props.articles!==e.articles&&a.setState({articles:a.props.articles})},a.getNews=function(){a.props.actions.getNews()},a.animateText=function(){var e=Number(a.state.textStyle.left);e>Number(-1*a.weatherText.current.offsetWidth/2)?a.setState({textStyle:{left:e-1}}):a.setState({textStyle:{left:0}})},a.state={articles:[],textStyle:{left:0}},a.weatherText=o.a.createRef(),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getNews(),setInterval(this.animateText,10)}},{key:"componentDidUpdate",value:function(e,t,a){this.getNewsTitles(e)}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"text-bar"},o.a.createElement("p",{style:this.state.textStyle,ref:this.weatherText},o.a.createElement((function(){return e.state.articles.map((function(e,t){var a=e.title.split(" - ");return o.a.createElement("span",{key:t},"\xa0\xa0\xa0.\xa0\xa0\xa0",a[0],o.a.createElement("small",null,"\xa0-\xa0",a[1]))}))}),null))))}}]),t}(o.a.Component)),H=Object(f.b)((function(e){return{articles:e.newsReducer.news.articles}}),(function(e){return{actions:Object(v.b)(n,e)}}))(A),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).textStyle={fontSize:16,lineHeight:"26px",padding:50,fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{title:"THIAGO COLEN"}),o.a.createElement(F,null),o.a.createElement(B,null),o.a.createElement(H,null),o.a.createElement("div",{style:this.textStyle},"Phasellus turpis quam, lacinia in tincidunt quis, rhoncus vitae augue. Vivamus porttitor imperdiet enim ut mattis. Proin id sagittis arcu, at fringilla lectus. Donec iaculis, arcu et dapibus dignissim, ipsum lectus auctor sem, non condimentum odio ipsum a neque. Vestibulum facilisis lacus id enim fringilla, quis placerat augue eleifend. Donec gravida leo tempor, pharetra tortor dapibus, consequat ipsum. Sed facilisis porta nulla non dapibus. Curabitur eu mattis felis, non auctor augue. Nullam efficitur quam et consectetur mollis. Sed hendrerit sollicitudin pharetra. Pellentesque sit amet ligula id enim aliquam rhoncus et nec arcu. Aenean sed vehicula ipsum. Suspendisse sodales hendrerit purus eu porta. Nullam et consequat enim. Sed justo ligula, tempor eu massa eget, fermentum imperdiet nisl. Nam commodo nisi ac erat condimentum, sed pharetra velit dignissim.",o.a.createElement("br",null),"Vivamus viverra tortor nisi, ac facilisis risus pulvinar sed. Pellentesque volutpat lorem vel aliquam cursus. Phasellus hendrerit, odio in euismod pulvinar, sapien tellus faucibus velit, at sodales justo leo pretium purus. Donec mollis, orci et posuere ullamcorper, mauris sapien feugiat dolor, eget luctus mauris erat at elit. Donec eget sem ac erat porta malesuada. Etiam eu ante id justo laoreet consequat quis sed ex. Praesent porttitor, odio sed ornare pellentesque, ex odio blandit metus, a bibendum risus justo ut ligula. Proin sodales sodales nisi, ut efficitur arcu iaculis at. Cras tincidunt efficitur ex, quis ultricies lectus convallis et. Suspendisse maximus dictum accumsan. Nam luctus risus lorem, eget faucibus est placerat at. Etiam posuere nec orci ac dignissim. Vivamus sed cursus tellus. Fusce at sem nisi.",o.a.createElement("br",null),"Nullam volutpat cursus libero, ac accumsan sapien hendrerit sed. Cras justo est, tincidunt at nulla vitae, aliquam malesuada arcu. Nunc ultrices accumsan leo, ut pharetra arcu dapibus sit amet. Proin sit amet ex tempor, vestibulum mauris vel, tincidunt augue. In ac cursus eros, facilisis tristique metus. Maecenas ornare suscipit metus et lacinia. Quisque mollis lorem rutrum, cursus nisi eu, tempor magna."))}}]),t}(o.a.Component),J=Object(f.b)((function(e){return{}}),(function(e){return{actions:Object(v.b)(n,e)}}))(V),z=(a(207),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{store:x},o.a.createElement(P.a,null,o.a.createElement(h.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{exact:!0,path:"/",component:J}),o.a.createElement(p.a,{exact:!0,path:"/wellcome",component:J})))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(209)}},[[97,1,2]]]);
//# sourceMappingURL=main.f8b6a06a.chunk.js.map