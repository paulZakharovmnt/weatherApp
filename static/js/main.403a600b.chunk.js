(this["webpackJsonpfinal-weather-prj"]=this["webpackJsonpfinal-weather-prj"]||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=(n(20),n(21),n(2)),l=n.n(o),u=n(13),s=n(4),h=n(14),m=n(3),d=n(5),f=n(6),p=function(e){var t=e.toggleShowSettingsOnClick,n=e.toggleChangeTimeFormatOnClick,a=e.toggleChangeDegreesFormatOnClick,r=e.toggleAutoUpdateWeatherWhenChangingCityOnClick,i=e.autoUpdateWeather,o=e.show24hTime,l=e.showFahrenheit;return c.a.createElement("div",{className:"settings-cont"},c.a.createElement("div",{className:"top-block"},c.a.createElement("h2",null,"Settings"),c.a.createElement(d.a,{icon:f.f,onClick:t,className:"close-btn",size:"3x"})),c.a.createElement("div",{className:"check-box-container"},c.a.createElement("h4",null,"Temperature:"),c.a.createElement("div",{className:"temp-change"},c.a.createElement("h5",null,"\xb0C"),c.a.createElement("input",{checked:l,className:"checkbox",type:"checkbox",onChange:a}),c.a.createElement("h5",null,"\xb0F"))),c.a.createElement("div",{className:"check-box-container"},c.a.createElement("h4",null,"Auto Update Weather, when switching the cities:"),c.a.createElement("div",{className:"auto-update"},c.a.createElement("h5",null,"Off"),c.a.createElement("input",{checked:i,className:"checkbox",type:"checkbox",onChange:r}),c.a.createElement("h5",null,"On"))),c.a.createElement("div",{className:"check-box-container"},c.a.createElement("h4",null,"Time format: "),c.a.createElement("div",{className:"time-format"},c.a.createElement("h5",null,"12h"),c.a.createElement("input",{checked:o,className:"checkbox",type:"checkbox",onChange:n}),c.a.createElement("h5",null,"24h"))))},g=function(e){var t=e.list,n=e.submit;return c.a.createElement("div",{className:"listOfCities-box"},c.a.createElement("ul",{className:"city-list"},t.map((function(e){return c.a.createElement("li",{key:e.id,onClick:function(t){return n(e,t)}},c.a.createElement("h4",null,e.city)," ",e.country)}))))},C="https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=",b="f94ea70c7amsh93941eb1918691ep15f1ecjsn783eefb2ee1f",v=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C).concat(t,"&sort=-population"),{method:"GET",headers:{"x-rapidapi-host":"wft-geo-db.p.rapidapi.com","x-rapidapi-key":"".concat(b)}}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.handleAddCityWeatherAndDateOnClick,n=Object(a.useState)(""),r=Object(m.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(null),u=Object(m.a)(l,2),s=u[0],h=u[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){i.length>3&&v(i).then((function(e){h(e.data)}))}),500);return function(){clearTimeout(e)}}),[i]),c.a.createElement("div",{className:"input-box"},c.a.createElement("input",{value:i,placeholder:"e.g. Moscow",onChange:function(e){o(e.target.value)}}),null!==s&&c.a.createElement(g,{list:s,submit:function(e,n){n.preventDefault();var a={city:e.city,country:e.countryCode,lat:e.latitude,long:e.longitude};t(a),o(""),h(null)}}))},E=(n(28),function(e){var t=e.handleAddCityWeatherAndDateOnClick,n=e.toggleChangeTimeFormatOnClick,r=e.toggleChangeDegreesFormatOnClick,i=e.toggleAutoUpdateWeatherWhenChangingCityOnClick,o=e.autoUpdateWeather,l=e.show24hTime,u=e.showFahrenheit,s=Object(a.useState)(!1),h=Object(m.a)(s,2),g=h[0],C=h[1],b=Object(a.useState)(!1),v=Object(m.a)(b,2),E=v[0],O=v[1],y=function(){O(!E)};return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-container"},c.a.createElement(d.a,{className:"add-btn",icon:f.d,size:"3x",onClick:function(){C(!g)}}),g&&c.a.createElement(w,{handleAddCityWeatherAndDateOnClick:t}),c.a.createElement(d.a,{className:"settings-btn",icon:f.c,size:"3x",onClick:y})),E&&c.a.createElement(p,{toggleAutoUpdateWeatherWhenChangingCityOnClick:i,toggleChangeTimeFormatOnClick:n,toggleChangeDegreesFormatOnClick:r,autoUpdateWeather:o,show24hTime:l,showFahrenheit:u,toggleShowSettingsOnClick:y}))}),O=(n(29),"https://api.opencagedata.com/geocode/v1/json?"),y="57362432e5a046ec9f4701c1cc13e47d",k=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"q=").concat(t.lat,"+").concat(t.long,"&language=en&key=").concat(y)).then((function(e){return e.json()})).then((function(e){return{lat:t.lat,long:t.long,city:e.results[0].components.city,country:e.results[0].components.country_code}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j="21de0ba639198264b5c2844b14971f13",x="https://api.openweathermap.org/data/2.5/",N=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"weather?q=").concat(t.city,",").concat(t.country,"&appid=").concat(j)).then((function(e){return e.json()})).then((function(e){return{temp:e.main.temp,description:e.weather[0]}})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){return new Date(1e3*e).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})},S=function(e){var t,n=e.currentCityToShow,a=e.weatherInfo,r=e.showFahrenheit,i=e.show24hTime,o=a[n],l=o.coords.country.toUpperCase(),u=o.weather.description.description,s=o.weather.description.icon,h="http://openweathermap.org/img/wn/".concat(s,"@2x.png"),m=Math.floor(o.weather.temp-273),d="\xb0C",f=o.timeAndDate.time12;return r&&(m=Math.floor(m/5*9+32),d="\xb0F"),i&&(f=o.timeAndDate.time24),void 0!==o.timeAndDate.date&&(t=T(o.timeAndDate.date)),c.a.createElement("div",{className:"full-info"},c.a.createElement("div",{className:"location"},n,", ",l),c.a.createElement("div",{className:"date"},t),c.a.createElement("p",null,"Last update time: ",f," (local)"),c.a.createElement("div",{className:"weather-condition"},c.a.createElement("div",{className:"temp"},m,d),c.a.createElement("div",{className:"weather-description"},u),c.a.createElement("div",{className:"more-info"},c.a.createElement("img",{alt:"",src:h}))))},A=(n(30),function(e){var t=e.currentCityToShow,n=e.cityTimeAndDateInfo,a=e.weatherInfo,r=e.handleShowPreviousCityOnClick,i=e.handleShowNextCityOnClick,o=e.handleUpdateCityWeatherAndTimeOnClick,l=e.handleDeleteCityFromListOnClick,u=e.showFahrenheit,s=e.show24hTime;return c.a.createElement("div",{className:"weather-info"},c.a.createElement("div",{className:"general-info-container"},c.a.createElement(d.a,{className:"nav-btn faChevronLeft",icon:f.a,size:"4x",onClick:r}),c.a.createElement(S,{currentCityToShow:t,cityTimeAndDateInfo:n,weatherInfo:a,showFahrenheit:u,show24hTime:s}),c.a.createElement(d.a,{className:" nav-btn faChevronRight",icon:f.b,size:"4x",onClick:i})),c.a.createElement("div",{className:"deleteUpdate-container"},c.a.createElement(d.a,{className:"delete-btn",icon:f.f,size:"4x",onClick:l}),c.a.createElement(d.a,{className:"update-btn",icon:f.e,size:"3x",onClick:o})))}),D=function(e){return e>"06"&&e<"11"?"morning":e>"11"&&e<"19"?"day":e>"19"&&e<"23"?"evening":"night"},F="cbbe33181e2b4c389ee8303db47d81b0",W="https://api.ipgeolocation.io/timezone?apiKey=",U=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.lat,a=t.long,e.next=3,fetch("".concat(W).concat(F,"&lat=").concat(n,"&long=").concat(a)).then((function(e){return e.json()})).then((function(e){var t=D(e.time_24);return{time24:e.time_24,time12:e.time_12,date:e.date_time_unix,dayTime:t}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),o=Object(m.a)(i,2),d=o[0],f=o[1],p=Object(a.useState)(null),g=Object(m.a)(p,2),C=g[0],b=g[1],v=Object(a.useState)(null),w=Object(m.a)(v,2),O=w[0],y=w[1],j=Object(a.useState)(!1),x=Object(m.a)(j,2),T=x[0],S=x[1],D=Object(a.useState)(!1),F=Object(m.a)(D,2),W=F[0],z=F[1],I=Object(a.useState)(!1),_=Object(m.a)(I,2),L=_[0],M=_[1],P=d.indexOf(O);Object(a.useEffect)((function(){window.navigator.geolocation.getCurrentPosition((function(e){return r({lat:e.coords.latitude,long:e.coords.longitude})}),(function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){n&&k(n).then((function(e){return J(e)}))}),[n]),Object(a.useEffect)((function(){W&&B()}),[O]);var q=function(e,t,n){var a=Object(h.a)({},C);return a[n.city]={weather:e,timeAndDate:t,coords:n},a},J=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:return n=e.sent,e.next=5,U(t);case 5:a=e.sent,d.includes(t.city)||f([].concat(Object(u.a)(d),[t.city])),c=q(n,a,t),b(c),y(t.city);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(C[O].coords);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){P===d.length-1?y(d[0]):y(d[P+1])},K=["main","default"];return null!==O&&(K=["main",C[O].timeAndDate.dayTime]),c.a.createElement("div",{className:K.join(" ")},c.a.createElement(E,{handleAddCityWeatherAndDateOnClick:J,toggleChangeTimeFormatOnClick:function(){M(!L)},toggleChangeDegreesFormatOnClick:function(){S(!T)},toggleAutoUpdateWeatherWhenChangingCityOnClick:function(){z(!W)},showFahrenheit:T,show24hTime:L,autoUpdateWeather:W}),null!==O?c.a.createElement(A,{weatherInfo:C,currentCityToShow:O,showFahrenheit:T,show24hTime:L,handleShowNextCityOnClick:G,handleShowPreviousCityOnClick:function(){O===d[0]?y(d[d.length-1]):y(d[P-1])},handleUpdateCityWeatherAndTimeOnClick:B,handleDeleteCityFromListOnClick:function(){var e=d.filter((function(e){return e!==O}));f(e),d.length>1?G():y(null)}}):c.a.createElement("div",{className:"no-cities-message"},c.a.createElement("h2",null,"There is no cities to show. Try to find some")))};var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(z,null))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.403a600b.chunk.js.map