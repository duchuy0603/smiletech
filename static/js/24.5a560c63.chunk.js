(this["webpackJsonpdance-sport"]=this["webpackJsonpdance-sport"]||[]).push([[24],{266:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(122),c=a(1),i=a.n(c),l=a(47),o=a(21),m=a(431),d=a(432),s=a(434),u=a(142),f=a(435),b=a(433),h=a(427),p=a(135),E=a.n(p),g=a(280),O=a(437),j=a(438),y=a(416),S=(a(266),a(272)),v=a(41),w=(a(42),function(e){var t=e.onFinish,a=e.form,n=e.idEdit,l=d.a.TextArea,s=S.a.Option,f=Object(o.useDispatch)(),b=Object(o.useSelector)((function(e){return e.ecommerceReducer})).ecommercelist,h=Object(c.useState)(!1),p=Object(r.a)(h,2),E=(p[0],p[1],Object(c.useState)(!1)),g=Object(r.a)(E,2);g[0],g[1];Object(c.useEffect)((function(){f(Object(v.e)())}),[]);var O=Object(c.useState)(!1),j=Object(r.a)(O,2),y=(j[0],j[1],Object(c.useState)([])),w=Object(r.a)(y,2);w[0],w[1];return i.a.createElement("div",null,i.a.createElement(m.a,{className:"ecommerce-form",validateMessages:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng !",types:{string:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !",number:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"},string:{max:"${label} t\u1ed1i \u0111a 255 k\xfd t\u1ef1 !"},number:{range:"${label} trong kho\u1ea3ng 1-100 !"},pattern:{mismatch:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"}},onFinish:t,form:a,method:"POST",encType:"multipart/form-data"},n&&i.a.createElement(m.a.Item,{name:"id",hidden:!0},i.a.createElement(d.a,null)),i.a.createElement(m.a.Item,{name:"name",label:"T\xean",required:!0,rules:[{required:!0,whitespace:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(d.a,{placeholder:"V\xed d\u1ee5: Eplaza"})),i.a.createElement(m.a.Item,{name:"des",label:"Description",required:!0,rules:[{required:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(l,null)),i.a.createElement(m.a.Item,{name:"ecommerce_id",label:"EcommerceId",required:!0,rules:[{required:!0}],style:{width:"50%"}},i.a.createElement(S.a,{showSearch:!0,style:{width:200},placeholder:"ecommerceId",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())}},b.map((function(e,t){return i.a.createElement(s,{key:t,value:e.id},e.name)})))),i.a.createElement(m.a.Item,{style:{width:"90%"}}),i.a.createElement(m.a.Item,{className:"button"},i.a.createElement(u.a,{htmlType:"submit",type:"primary"},"L\u01b0u l\u1ea1i"))))});t.default=function(){var e=Object(o.useSelector)((function(e){return e.featureReducer})),t=e.featurelist,a=e.loadingfeature,p=Object(o.useDispatch)();Object(c.useEffect)((function(){p(Object(l.e)())}),[p]);var S=Object(c.useState)(""),v=Object(r.a)(S,2),k=v[0],C=v[1],x=Object(c.useState)(""),F=Object(r.a)(x,2),I=F[0],T=F[1],q=Object(c.useState)(!1),L=Object(r.a)(q,2),z=L[0],D=L[1],N=Object(c.useState)(!1),R=Object(r.a)(N,2),_=R[0],P=R[1],$=m.a.useForm(),B=Object(r.a)($,1)[0],K=m.a.useForm(),A=Object(r.a)(K,1)[0],H=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,n=t.selectedKeys,r=t.confirm,c=t.clearFilters;return i.a.createElement("div",{style:{padding:12}},i.a.createElement(d.a,{placeholder:"Search ".concat(e),value:n[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return J(n,r,e)},style:{marginBottom:8,display:"block"}}),i.a.createElement(s.b,null,i.a.createElement(u.a,{type:"primary",onClick:function(){return J(n,r,e)},icon:i.a.createElement(g.a,null),size:"small",style:{width:90}},"Search"),i.a.createElement(u.a,{onClick:function(){return V(c)},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return i.a.createElement(g.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e]?a[e].toString().toLowerCase().includes(t.toLowerCase()):""},render:function(t){return I===e?i.a.createElement(E.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[k],autoEscape:!0,textToHighlight:t?t.toString():""}):"ecommerce"===e?null===t||void 0===t?void 0:t.name:t}}},J=function(e,t,a){t(),C(e[0]),T(a)},V=function(e){e(),C("")},M=[Object(n.a)({title:"Name",dataIndex:"name",key:"name",width:"20%"},H("name")),Object(n.a)({title:"EcomerceId",dataIndex:"ecommerce",key:"ecommerce",width:"20%",sorter:function(e,t){return e.ecommerce-t.ecommerce},sortDirections:["descend","ascend"]},H("ecommerce")),Object(n.a)({title:"Description",dataIndex:"des",key:"des",width:"20%"},H("des")),{key:"Action",title:i.a.createElement(O.a,{onClick:function(){return p(Object(l.e)())}}),align:"center",width:"10%",render:function(e,t,a){return i.a.createElement(s.b,{size:"middle"},i.a.createElement(j.a,{style:{color:"blue"},onClick:function(){return W(t)}}),i.a.createElement(f.a,{placement:"bottomRight",title:"B\u1ea1n mu\u1ed1n x\xf3a ".concat(t.name," ?"),onConfirm:function(){return X(t.id)},okText:"X\xf3a",cancelText:"H\u1ee7y"},i.a.createElement(y.a,{style:{color:"red"}})))}}],W=Object(c.useCallback)((function(e){var t={id:e.id,name:e.name,ecommerce_id:e.ecommerce.id,des:e.des};A.setFieldsValue(t),P(!0)}),[A]),X=function(e){p(Object(l.c)(e))};return i.a.createElement("div",null,i.a.createElement("div",{className:"addecommerce"},i.a.createElement(u.a,{type:"primary",onClick:function(){return D(!0)}},"Th\xeam Feature")),i.a.createElement("br",null),i.a.createElement(b.a,{className:"modal-add",title:"Th\xeam Brand",visible:z,footer:"",centered:!0,onCancel:function(){return D(!1)}},i.a.createElement(w,{onFinish:function(e){var t={name:e.name,des:e.des,ecommerce_id:e.ecommerce_id};p(Object(l.b)(t)),D(!1),B.resetFields(),console.log(t)},form:B})),i.a.createElement(b.a,{className:"modal-edit",title:"S\u1eeda Brand",visible:_,onCancel:function(){return P(!1)},centered:!0,footer:""},i.a.createElement(w,{onFinish:function(e){var t={id:e.id,name:e.name,des:e.des,ecommerce_id:e.ecommerce_id};p(Object(l.d)(t)),P(!1),B.resetFields(),console.log(t)},form:A,idEdit:!0})),i.a.createElement(h.a,{scroll:{x:900},pagination:{defaultCurrent:30,defaultPageSize:10,hideOnSinglePage:!0,pageSizeOptions:[10,30,50,100]},loading:a,columns:M,dataSource:t,rowKey:function(e){return e.id},bordered:!0}))}}}]);
//# sourceMappingURL=24.5a560c63.chunk.js.map