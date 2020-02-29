(this.webpackJsonpwellcome=this.webpackJsonpwellcome||[]).push([[0],{102:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getRandomPhoto",(function(){return L})),a.d(n,"getWeather",(function(){return U}));var r=a(0),i=a.n(r),o=a(86),u=a.n(o),s=(a(102),a(6)),c=a(11),l=a(14),m=a(12),d=a(15),p=a(212),h=a(213),f=a(13),g=a(90),b=a(91),v=a(3),w=a(96),E=a(27),O={randomPhoto:{}};var j={weather:{}};var y=Object(v.c)({homeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat("GET_RANDOM_PHOTO","_FULFILLED"):return Object(E.a)({},e,{randomPhoto:{loaciton:Object(E.a)({},t.payload.location),urls:Object(E.a)({},t.payload.urls)}});default:return e}},weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat("GET_WEATHER","_FULFILLED"):return Object(E.a)({},e,{weather:t.payload});default:return e}}}),x=Object(b.createLogger)(),q=Object(v.d)(y,Object(v.a)(Object(w.a)(),g.a,x)),S=a(92),P=a.n(S),N=a(37),T=a.n(N),C=(a(203),function(e){var t=e.imageUrl,a={backgroundImage:"url(".concat(t,")")};return i.a.createElement((function(){return t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:a,className:"imgCover"})):i.a.createElement(T.a,{top:0,left:0,status:"loading"})}),null)}),k=a(93),D=a.n(k),R=(a(204),function(e){var t=e.title;D.a.load({google:{families:["Holtwood+One+SC","Roboto"]}});return i.a.createElement((function(){return t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"super-title"},t)):i.a.createElement(T.a,{top:0,left:0,status:"loading"})}),null)}),F=function e(){Object(s.a)(this,e)};F.getRandomPhoto=function(){return fetch("https://api.unsplash.com/photos/random/?client_id=7bb44829ebfb671742ab6f123c6581e0eca237754773b58d64940a82c82065f9").then((function(e){return e.json()})).catch((function(e){return console.log("Error happened during fetching!",e),e}))},F.getWeather=function(e,t){return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=89b5e7279338d44e816ac45c030ac220")).then((function(e){return e.json()})).catch((function(e){return console.log("Error happened during fetching!",e)}))};var I=F,L=function(){return function(e){return e({type:"GET_RANDOM_PHOTO",payload:I.getRandomPhoto()})}},U=function(e,t){return function(a){return a({type:"GET_WEATHER",payload:I.getWeather(e,t)})}},G=(a(205),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getDescription=function(e){a.props.weather.weather!==e.weather.weather&&a.setState({main:a.props.weather.weather[0].main,description:a.props.weather.weather[0].description})},a.getTemp=function(e){a.props.weather.main!==e.weather.main&&a.setState({temp:(Number(a.props.weather.main.temp)/10).toFixed(1)})},a.getIconUrl=function(e){a.props.weather.weather!==e.weather.weather&&a.setState({imageUrl:"https://openweathermap.org/img/wn/".concat(a.props.weather.weather[0].icon,".png")})},a.getName=function(e){a.props.weather.name!==e.weather.name&&a.setState({name:a.props.weather.name})},a.getCountry=function(e){a.props.weather.sys!==e.weather.sys&&(console.log("### getCountry opa"),a.setState({country:a.props.weather.sys.country}))},a.getGeolocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){a.props.actions.getWeather(e.coords.latitude,e.coords.longitude)})):console.log("$$$ Geolocation is not supported by this browser.")},a.state={iconCode:"",imageUrl:"",name:"",country:"",temp:0,main:"",description:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getGeolocation()}},{key:"componentDidUpdate",value:function(e,t,a){this.getIconUrl(e),this.getName(e),this.getCountry(e),this.getTemp(e),this.getDescription(e)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"weather-icon"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"text"},i.a.createElement("h2",null,this.state.name,", ",this.state.country),i.a.createElement("h3",null,this.state.temp,"\xb0"),i.a.createElement("h4",null,this.state.description),i.a.createElement("h5",null,this.state.main)),i.a.createElement("img",{src:this.state.imageUrl,alt:"weather icon"}),i.a.createElement("div",{style:{clear:"both"}}))))}}]),t}(i.a.Component)),W=Object(f.b)((function(e){return{weather:e.weatherReducer.weather}}),(function(e){return{actions:Object(v.b)(n,e)}}))(G),_=(a(206),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).animateText=function(){var e=Number(a.state.textStyle.left);e>Number(-1*a.weatherText.current.offsetWidth/2)?a.setState({textStyle:{left:e-2}}):a.setState({textStyle:{left:0}})},a.state={fakeText:"In hac habitasse platea dictumst. Cras congue, libero sed porttitor tristique, libero elit maximus velit, ut facilisis ipsum mi ac sem. Nulla nec arcu at odio gravida pulvinar. Donec rutrum ex id dolor ultricies, ut tempor dolor aliquam. Mauris et interdum neque, at tincidunt metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tempus egestas mi, nec elementum libero sodales et. In hac habitasse platea dictumst. Phasellus consectetur augue quis ante condimentum rhoncus. Cras at nunc gravida, accumsan diam quis, vehicula tortor. Curabitur fringilla, purus vitae scelerisque auctor, ante nulla mattis ex, id malesuada turpis erat quis odio.",textStyle:{left:0}},a.weatherText=i.a.createRef(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.animateText,12)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-bar"},i.a.createElement("p",{style:this.state.textStyle,ref:this.weatherText},this.state.fakeText,this.state.fakeText)))}}]),t}(i.a.Component)),M=Object(f.b)((function(e){return{}}),(function(e){return{actions:Object(v.b)(n,e)}}))(_),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).textStyle={fontSize:16,lineHeight:"26px",padding:50,fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.actions.getRandomPhoto()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,{title:"THIAGO COLEN"}),i.a.createElement(C,{imageUrl:this.props.randomPhoto.urls&&this.props.randomPhoto.urls.regular}),i.a.createElement(W,null),i.a.createElement(M,null),i.a.createElement("div",{style:this.textStyle},"Phasellus turpis quam, lacinia in tincidunt quis, rhoncus vitae augue. Vivamus porttitor imperdiet enim ut mattis. Proin id sagittis arcu, at fringilla lectus. Donec iaculis, arcu et dapibus dignissim, ipsum lectus auctor sem, non condimentum odio ipsum a neque. Vestibulum facilisis lacus id enim fringilla, quis placerat augue eleifend. Donec gravida leo tempor, pharetra tortor dapibus, consequat ipsum. Sed facilisis porta nulla non dapibus. Curabitur eu mattis felis, non auctor augue. Nullam efficitur quam et consectetur mollis. Sed hendrerit sollicitudin pharetra. Pellentesque sit amet ligula id enim aliquam rhoncus et nec arcu. Aenean sed vehicula ipsum. Suspendisse sodales hendrerit purus eu porta. Nullam et consequat enim. Sed justo ligula, tempor eu massa eget, fermentum imperdiet nisl. Nam commodo nisi ac erat condimentum, sed pharetra velit dignissim.",i.a.createElement("br",null),"Vivamus viverra tortor nisi, ac facilisis risus pulvinar sed. Pellentesque volutpat lorem vel aliquam cursus. Phasellus hendrerit, odio in euismod pulvinar, sapien tellus faucibus velit, at sodales justo leo pretium purus. Donec mollis, orci et posuere ullamcorper, mauris sapien feugiat dolor, eget luctus mauris erat at elit. Donec eget sem ac erat porta malesuada. Etiam eu ante id justo laoreet consequat quis sed ex. Praesent porttitor, odio sed ornare pellentesque, ex odio blandit metus, a bibendum risus justo ut ligula. Proin sodales sodales nisi, ut efficitur arcu iaculis at. Cras tincidunt efficitur ex, quis ultricies lectus convallis et. Suspendisse maximus dictum accumsan. Nam luctus risus lorem, eget faucibus est placerat at. Etiam posuere nec orci ac dignissim. Vivamus sed cursus tellus. Fusce at sem nisi.",i.a.createElement("br",null),"Nullam volutpat cursus libero, ac accumsan sapien hendrerit sed. Cras justo est, tincidunt at nulla vitae, aliquam malesuada arcu. Nunc ultrices accumsan leo, ut pharetra arcu dapibus sit amet. Proin sit amet ex tempor, vestibulum mauris vel, tincidunt augue. In ac cursus eros, facilisis tristique metus. Maecenas ornare suscipit metus et lacinia. Quisque mollis lorem rutrum, cursus nisi eu, tempor magna."))}}]),t}(i.a.Component),H=Object(f.b)((function(e){return{randomPhoto:e.homeReducer.randomPhoto}}),(function(e){return{actions:Object(v.b)(n,e)}}))(A),V=(a(207),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{store:q},i.a.createElement(P.a,null,i.a.createElement(p.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{exact:!0,path:"/",component:H}),i.a.createElement(h.a,{exact:!0,path:"/wellcome",component:H})))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(209)}},[[97,1,2]]]);
//# sourceMappingURL=main.e6c5ab81.chunk.js.map