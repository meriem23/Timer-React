(this["webpackJsonptimer-react"]=this["webpackJsonptimer-react"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),i=a.n(s),c=(a(13),a(14),a(15),a(3)),o=a(4),m=a(6),l=a(5),u=a(7),h=function(e){var t=e.ms;return r.a.createElement("div",{className:"timerClock"},r.a.createElement("div",{className:"timerBlock"},r.a.createElement("div",{className:"timerNumbers"},function(e){var t=Math.floor(e/36e5),a=e%36e5,n=Math.floor(a/6e4),r=a%6e4,s=Math.floor(r/1e3);return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")+":"+String(s).padStart(2,"0")}(t)),r.a.createElement("div",{className:"timerText"},r.a.createElement("p",{className:"timerTextItems"},"Heures"),r.a.createElement("p",{className:"timerTextItems"},"Minutes"),r.a.createElement("p",{className:"timerTextItems"},"Secondes"))))},d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).start=function(){a.state.inter?a.setState({inter:!1}):a.setState({inter:!0})},a.reset=function(){a.setState({timeMs:0,inter:!1})},a.state={timeMs:0,inter:!1},setInterval((function(){a.state.inter&&a.setState({timeMs:a.state.timeMs+1e3})}),1e3),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"buttons"},r.a.createElement(h,{ms:this.state.timeMs}),r.a.createElement("input",{type:"button",value:this.state.inter?"Pause":"Start",className:"startButton",onClick:this.start}),r.a.createElement("input",{type:"button",value:"Reset",className:"resetButton",onClick:this.reset}))}}]),t}(n.Component),f=function(){return r.a.createElement("div",null,r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.ef496143.chunk.js.map