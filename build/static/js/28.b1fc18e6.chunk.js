(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[28],{220:function(e,t,a){"use strict";var n,l=a(31),r=a(21),o=a(22),c=a(24),i=a(23),s=a(1),m=a.n(s),d=a(426),u=a(399),p=a(6),h=a(10),f=a(109),E=a.n(f),b=a(185),g=a(218),j=a(219),O=a(194),v=a(214),N=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],w={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function C(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=w[e];return a+parseInt(Object(b.a)(t,n[0]),10)+parseInt(Object(b.a)(t,n[1]),10)}var y=((n={})[g.c]="collapse",n[g.d]="collapsing",n[g.b]="collapsing",n[g.a]="collapse show",n),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:C},I=m.a.forwardRef((function(e,t){var a=e.onEnter,n=e.onEntering,l=e.onEntered,r=e.onExit,o=e.onExiting,c=e.className,i=e.children,d=e.dimension,u=void 0===d?"height":d,f=e.getDimensionValue,b=void 0===f?C:f,w=Object(h.a)(e,N),x="function"===typeof u?u():u,I=Object(s.useMemo)((function(){return Object(O.a)((function(e){e.style[x]="0"}),a)}),[x,a]),R=Object(s.useMemo)((function(){return Object(O.a)((function(e){var t="scroll"+x[0].toUpperCase()+x.slice(1);e.style[x]=e[t]+"px"}),n)}),[x,n]),k=Object(s.useMemo)((function(){return Object(O.a)((function(e){e.style[x]=null}),l)}),[x,l]),L=Object(s.useMemo)((function(){return Object(O.a)((function(e){e.style[x]=b(x,e)+"px",Object(v.a)(e)}),r)}),[r,b,x]),K=Object(s.useMemo)((function(){return Object(O.a)((function(e){e.style[x]=null}),o)}),[x,o]);return m.a.createElement(g.e,Object(p.a)({ref:t,addEndListener:j.a},w,{"aria-expanded":w.role?w.in:null,onEnter:I,onEntering:R,onEntered:k,onExit:L,onExiting:K}),(function(e,t){return m.a.cloneElement(i,Object(p.a)({},t,{className:E()(c,i.props.className,y[e],"width"===x&&"width")}))}))}));I.defaultProps=x;var R=I,k=a(138),L=a.n(k),K=a(40),B=a(127),M=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={isOption:e.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},e.cardReloadHandler=function(){e.setState({loadCard:!0}),setInterval((function(){e.setState({loadCard:!1})}),3e3)},e.cardRemoveHandler=function(){e.setState({cardRemove:!0})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,n,r,o=this,c=[];return this.state.isOption&&(a=m.a.createElement("div",{className:"card-header-right"},m.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},m.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},m.a.createElement("i",{className:"feather icon-more-horizontal"})),m.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState((function(e){return{fullCard:!e.fullCard}}))}},m.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),m.a.createElement("a",{href:B.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState((function(e){return{collapseCard:!e.collapseCard}}))}},m.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),m.a.createElement("a",{href:B.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},m.a.createElement("i",{className:"feather icon-refresh-cw"}),m.a.createElement("a",{href:B.a.BLANK_LINK}," Reload ")),m.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},m.a.createElement("i",{className:"feather icon-trash"}),m.a.createElement("a",{href:B.a.BLANK_LINK}," Remove ")))))),n=m.a.createElement(u.a.Header,null,m.a.createElement(u.a.Title,{as:"h5"},this.props.title),a),this.state.fullCard&&(c=[].concat(Object(l.a)(c),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(c=[].concat(Object(l.a)(c),["card-load"]),t=m.a.createElement("div",{className:"card-loader"},m.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(c=[].concat(Object(l.a)(c),["d-none"])),this.props.cardClass&&(c=[].concat(Object(l.a)(c),[this.props.cardClass])),r=m.a.createElement(u.a,{className:c.join(" "),style:e},n,m.a.createElement(R,{in:!this.state.collapseCard},m.a.createElement("div",null,m.a.createElement(u.a.Body,null,this.props.children))),t),m.a.createElement(K.a,null,r)}}]),a}(s.Component);t.a=L()(M)},376:function(e,t,a){"use strict";a.r(t);var n=a(21),l=a(22),r=a(24),o=a(23),c=a(1),i=a.n(c),s=a(370),m=a(371),d=a(40),u=a(220),p=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(s.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{title:"Quick Installation",isOption:!0},i.a.createElement("p",null," - First of all it's required to install latest Node and npm - ",i.a.createElement("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"nodejs")),i.a.createElement("p",null," - Unzip ",i.a.createElement("code",null,"datta-able-react-lite.zip")," file, Inside that directory you will find the ",i.a.createElement("code",null,"datta-able-react-lite/")," folder"),i.a.createElement("p",null," - Open your terminal/cmd then navigate to project directory ",i.a.createElement("code",null,"datta-able-react-lite/")),i.a.createElement("p",null," - Install npm packages using command ",i.a.createElement("code",null,"'npm install'"),",  this will install required node.js third-party plugins into the ",i.a.createElement("code",null,"node_modules/")," folder."),i.a.createElement("p",null," - Compile/Run project using  command  ",i.a.createElement("code",null,"'npm start'"),", this will compile app in development mode."),i.a.createElement("p",null," - Open ",i.a.createElement("a",{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},"http://localhost:3000")," to view it on browser."),i.a.createElement("p",null," - Now, You can use Dance Sport React Admin Template for your application development. "),i.a.createElement("div",{className:"theme-bg2 text-white p-3"},i.a.createElement("p",null,"The project was built assuming it is hosted at the server root folder of domain/platform i.e http://demo.com."),i.a.createElement("p",null,"You can control this with the homepage field in your package.json."),i.a.createElement("p",null,'To deploy build for sub-folder i.e http://demo.com/project-folder-name/ than "homepage" : "http://demo.com/project-folder-name/".'),i.a.createElement("p",null,"You  also need to set basename in ../src/config.js file."),i.a.createElement("p",null,"like, basename: '/project-folder-name'")),i.a.createElement("p",null," - Build project using command ",i.a.createElement("code",null,"'npm run build'"),", It will create ",i.a.createElement("code",null,"build/")," folder inside datta-able-react-lite/ folder. "),i.a.createElement("p",null," - Your app is ready to be deployed. ")))))}}]),a}(c.Component);t.default=p}}]);
//# sourceMappingURL=28.b1fc18e6.chunk.js.map