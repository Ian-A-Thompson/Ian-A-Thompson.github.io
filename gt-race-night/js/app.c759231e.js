(function(){"use strict";var e={306:function(e,r,a){var o=a(5130),t=a(6768);function n(e,r,a,o,n,i){const s=(0,t.g2)("RaceNight");return(0,t.uX)(),(0,t.Wv)(s)}var i=a(4232),s=a.p+"img/GTRaceNightLogo.a5b8ba87.webp";const u=e=>((0,t.Qi)("data-v-5bc79243"),e=e(),(0,t.jt)(),e),l={class:"container"},c=u((()=>(0,t.Lk)("button",{class:"menu-toggle"},"☰",-1))),d={class:"sidebar"},g=u((()=>(0,t.Lk)("h2",null,"Race Options",-1))),h=u((()=>(0,t.Lk)("h3",null,"Performance Points:",-1))),y=u((()=>(0,t.Lk)("p",null,"Min",-1))),p=u((()=>(0,t.Lk)("p",null,"Max",-1))),C=u((()=>(0,t.Lk)("h3",null,"Year Range:",-1))),v=u((()=>(0,t.Lk)("p",null,"Min",-1))),k=u((()=>(0,t.Lk)("p",null,"Max",-1))),m=u((()=>(0,t.Lk)("p",null,"Radius",-1))),R={key:0},f={class:"main-content"},M=u((()=>(0,t.Lk)("div",{class:"content-header"},[(0,t.Lk)("img",{id:"gt-logo",alt:"GTRaceNight",src:s}),(0,t.Lk)("h1",null,"GT RACE NIGHT!")],-1))),L={key:0},b={key:1,class:"history-table"},S={class:"table-centered"},P=u((()=>(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"Track"),(0,t.Lk)("th",null,"PP"),(0,t.Lk)("th",null,"Year")])],-1)));function w(e,r,a,n,s,u){return(0,t.uX)(),(0,t.CE)("div",l,[c,(0,t.Lk)("div",d,[g,h,y,(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":r[0]||(r[0]=e=>s.performancePointsMin=e)},null,512),[[o.Jo,s.performancePointsMin]]),p,(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=e=>s.performancePointsMax=e)},null,512),[[o.Jo,s.performancePointsMax]]),C,v,(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":r[2]||(r[2]=e=>s.yearMin=e)},null,512),[[o.Jo,s.yearMin]]),k,(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":r[3]||(r[3]=e=>s.yearMax=e)},null,512),[[o.Jo,s.yearMax]]),m,(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":r[4]||(r[4]=e=>s.yearRadius=e)},null,512),[[o.Jo,s.yearRadius]]),(0,t.Lk)("button",{class:"button-race",onClick:r[5]||(r[5]=(...e)=>u.generateRace&&u.generateRace(...e))},"Race!"),s.validationErrors.length?((0,t.uX)(),(0,t.CE)("div",R,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(s.validationErrors,((e,r)=>((0,t.uX)(),(0,t.CE)("p",{key:r},(0,i.v_)(e),1)))),128))])):(0,t.Q3)("",!0)]),(0,t.Lk)("div",f,[M,s.raceGenerated?((0,t.uX)(),(0,t.CE)("div",L,[(0,t.Lk)("h1",null,(0,i.v_)(s.selectedTrack),1),(0,t.Lk)("h1",null,"Performance Points: "+(0,i.v_)(s.selectedPerformancePoint),1),(0,t.Lk)("h1",null,"Year Range ("+(0,i.v_)(s.selectedYear)+"): "+(0,i.v_)(s.selectedYear-s.yearRadius)+" - "+(0,i.v_)(s.selectedYear+s.yearRadius),1)])):(0,t.Q3)("",!0),s.history.length?((0,t.uX)(),(0,t.CE)("div",b,[(0,t.Lk)("table",S,[P,(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(s.history,((e,r)=>((0,t.uX)(),(0,t.CE)("tr",{key:r},[(0,t.Lk)("td",null,(0,i.v_)(e.track),1),(0,t.Lk)("td",null,(0,i.v_)(e.pp),1),(0,t.Lk)("td",null,(0,i.v_)(e.year),1)])))),128))])])])):(0,t.Q3)("",!0)])])}a(4114);var F={name:"RaceNight",data(){return{performancePointsMin:550,performancePointsMax:1e3,yearMin:1965,yearMax:2024,yearRadius:2,raceGenerated:!1,validationErrors:[],selectedTrack:"",selectedPerformancePoint:0,selectedYear:0,history:[],tracks:["24 Heures du Mans Racing Circuit Full Course","24 Heures du Mans Racing Circuit No Chicane","Alsace Test Course","Alsace Test Course Reverse","Alsace Village","Alsace Village Reverse","Autodrome Lago Maggiore Centre","Autodrome Lago Maggiore Centre Reverse","Autodrome Lago Maggiore East","Autodrome Lago Maggiore East End","Autodrome Lago Maggiore East End Reverse","Autodrome Lago Maggiore East Reverse","Autodrome Lago Maggiore Full Course","Autodrome Lago Maggiore Full Course Reverse","Autodrome Lago Maggiore West","Autodrome Lago Maggiore West End","Autodrome Lago Maggiore West End Reverse","Autodrome Lago Maggiore West Reverse","Autodromo de Interlagos Full Course","Autodromo Nazionale Monza Full Course","Autodromo Nazionale Monza No Chicane","Autopolis Full Course","Autopolis Shortcut Circuit","Blue Moon Bay Speedway Full Course","Blue Moon Bay Speedway Full Course Reverse","Blue Moon Bay Speedway Infield A","Blue Moon Bay Speedway Infield A Reverse","Blue Moon Bay Speedway Infield B","Blue Moon Bay Speedway Infield B Reverse","Brands Hatch Grand Prix Circuit","Brands Hatch Indy Circuit","Broad Bean Raceway Full Course","Broad Bean Raceway Full Course Reverse","Circuit de Barcelona-Catalunya Grand Prix Layout","Circuit de Barcelona-Catalunya National Layout","Circuit de Barcelona-Catalunya No Chicane","Circuit de Barcelona-Catalunya Rallycross Layout (Dirt)","Circuit de Sainte-Croix Layout A","Circuit de Sainte-Croix Layout A Reverse","Circuit de Sainte-Croix Layout B","Circuit de Sainte-Croix Layout B Reverse","Circuit de Sainte-Croix Layout C","Circuit de Sainte-Croix Layout C Reverse","Circuit de Spa-Francorchamps 24h Layout","Circuit de Spa-Francorchamps Full Course","Colorado Springs Lake (Dirt)","Colorado Springs Lake Reverse (Dirt)","Daytona International Speedway Road Course","Daytona International Speedway Tri-Oval","Deep Forest Full Course","Deep Forest Full Course Reverse","Dragon Trail Gardens","Dragon Trail Gardens Reverse","Dragon Trail Seaside","Dragon Trail Seaside Reverse","Fishermans Ranch Full Course (Dirt)","Fishermans Ranch Full Course Reverse (Dirt)","Fuji International Speedway Full Course","Fuji International Speedway Short Course","Goodwood Full Course","Grand Valley - Highway 1","Grand Valley - Highway 1 Reverse","Grand Valley - South","Grand Valley - South Reverse","High Speed Ring Full Course","High Speed Ring Full Course Reverse","Kyoto Driving Park Miyabi","Kyoto Driving Park Yamagiwa","Kyoto Driving Park Yamagiwa + Miyabi","Kyoto Driving Park Yamagiwa + Miyabi Reverse","Kyoto Driving Park Yamagiwa Reverse","Michelin Raceway Road Atlanta","Mount Panorama Circuit Full Course","Northern Isle Speedway Full Course","Nurburgring 24h Layout","Nurburgring Grand Prix Track","Nurburgring Nordschleife","Red Bull Ring Full Course","Red Bull Ring Short Track","Sardegna - Road Track Layout A","Sardegna - Road Track Layout A Reverse","Sardegna - Road Track Layout B","Sardegna - Road Track Layout B Reverse","Sardegna - Road Track Layout C","Sardegna - Road Track Layout C Reverse","Sardegna - Windmills Full Course (Dirt)","Sardegna - Windmills Full Course Reverse (Dirt)","Special Stage Route X Full Course","Suzuka Circuit East Course","Suzuka Circuit Full Course","Tokyo Expressway Central Clockwise","Tokyo Expressway Central Counterclockwise","Tokyo Expressway East Clockwise","Tokyo Expressway East Counterclockwise","Tokyo Expressway South Clockwise","Tokyo Expressway South Counterclockwise","Trial Mountain Full Course","Trial Mountain Full Course Reverse","Tsukuba Circuit Full Course","Watkins Glen International Long Course","Watkins Glen International Short Course","WeatherTech Raceway Laguna Seca Full Course","Willow Springs International Big Willow","Willow Springs International Horse Thief Mile","Willow Springs International Horse Thief Mile Reverse","Willow Springs International Streets of Willow Springs","Willow Springs International Streets of Willow Springs Reverse"]}},mounted(){},methods:{getRandomInt(e=0,r=100){return Math.floor(Math.random()*(r-e+1))+e},generateRace(){this.raceGenerated=!1,this.formValidation()&&(this.selectedTrack=this.getTrack(),this.selectedPerformancePoint=this.getPerformancePoint(),this.selectedYear=this.getYear(),this.history.push({track:this.selectedTrack,pp:this.selectedPerformancePoint,year:this.selectedYear}),this.raceGenerated=!0)},formValidation(){return this.validationErrors=[],Number.isInteger(this.performancePointsMin)||this.validationErrors.push("PP Min is not a number!"),Number.isInteger(this.performancePointsMax)||this.validationErrors.push("PP Max is not a number!"),Number.isInteger(this.yearMin)||this.validationErrors.push("Year Min is not a number!"),Number.isInteger(this.yearMax)||this.validationErrors.push("Year Max is not a number!"),Number.isInteger(this.yearRadius)||this.validationErrors.push("Year Radius is not a number!"),this.performancePointsMin>this.performancePointsMax&&this.validationErrors.push("PP Min cannot be greater than PP Max"),this.yearMin>this.yearMax&&this.validationErrors.push("PP Min cannot be greater than PP Max"),!this.validationErrors.length},getTrack(){return this.tracks[this.getRandomInt(0,this.tracks.length)]},getPerformancePoint(){return this.getRandomInt(this.performancePointsMin,this.performancePointsMax)},getYear(){return this.getRandomInt(this.yearMin,this.yearMax)}}},E=a(1241);const T=(0,E.A)(F,[["render",w],["__scopeId","data-v-5bc79243"]]);var x=T,A={name:"App",components:{RaceNight:x}};const B=(0,E.A)(A,[["render",n]]);var I=B;(0,o.Ef)(I).mount("#app")}},r={};function a(o){var t=r[o];if(void 0!==t)return t.exports;var n=r[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(r,o,t,n){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],t=e[c][1],n=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[u])}))?o.splice(u--,1):(s=!1,n<i&&(i=n));if(s){e.splice(c--,1);var l=t();void 0!==l&&(r=l)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,t,n]}}(),function(){a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,{a:r}),r}}(),function(){a.d=function(e,r){for(var o in r)a.o(r,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(r){return 0===e[r]};var r=function(r,o){var t,n,i=o[0],s=o[1],u=o[2],l=0;if(i.some((function(r){return 0!==e[r]}))){for(t in s)a.o(s,t)&&(a.m[t]=s[t]);if(u)var c=u(a)}for(r&&r(o);l<i.length;l++)n=i[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},o=self["webpackChunkgt_race_night"]=self["webpackChunkgt_race_night"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(306)}));o=a.O(o)})();
//# sourceMappingURL=app.c759231e.js.map