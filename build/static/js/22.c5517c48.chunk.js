(this["webpackJsonpdance-sport"]=this["webpackJsonpdance-sport"]||[]).push([[22],{189:function(e,t,a){"use strict";var n=a(29),r=a(1),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=a(113),o=function(e,t){return r.createElement(i.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:l}))};o.displayName="PlusOutlined";t.a=r.forwardRef(o)},207:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(122),l=a(1),i=a.n(l),o=a(45),c=a(21),s=a(431),u=a(432),d=a(434),m=a(142),h=a(435),p=a(433),g=a(427),E=a(135),f=a.n(E),b=a(280),y=a(437),O=a(438),_=a(416),S=(a(207),a(272)),w=a(397),v=a(429),T=a(171),j=a(189),C=(a(42),a(44)),P=function(e){var t=e.onFinish,a=e.form,n=e.idEdit,o=(u.a.TextArea,S.a.Option),d=Object(c.useDispatch)(),h=(Object(c.useSelector)((function(e){return e.categoriesReducer})).categorieslist,Object(c.useSelector)((function(e){return e.storeReducer})).storelist),p=Object(l.useState)(!1),g=Object(r.a)(p,2),E=(g[0],g[1],Object(l.useState)(!1)),f=Object(r.a)(E,2),b=(f[0],f[1],Object(l.useState)(!1)),y=Object(r.a)(b,2),O=y[0],_=y[1],P=Object(l.useState)([]),I=Object(r.a)(P,2),R=(I[0],I[1],Object(l.useState)("")),k=Object(r.a)(R,2),x=k[0],A=k[1];Object(l.useEffect)((function(){if(n){var e=a.getFieldValue("image");A(e),console.log(e)}d(Object(C.e)())}),[a,n]);var N={name:"file",maxCount:1,action:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ENV:"production",REACT_APP_TITLE:"System"}).REACT_APP_API_URL,"/upload/upload-single"),onSuccess:function(e,t){console.log("ok",e),e.success?(a.setFieldsValue({image:e.url}),A(e.url),w.b.success("T\u1ea3i \u1ea3nh l\xean th\xe0nh c\xf4ng !")):(a.setFieldsValue({image:""}),A(""),"File too large"===e.error.message&&w.b.error("Dung l\u01b0\u1ee3ng \u1ea3nh kh\xf4ng qu\xe1 5mb !"),"Images Only!"===e.error.message?w.b.error("Ch\u1ec9 t\u1ea3i l\xean \u0111\u1ecbnh d\u1ea1ng \u1ea3nh .jpg, .png, .jpeg !"):w.b.error("T\u1ea3i \u1ea3nh l\xean th\u1ea5t b\u1ea1i ! H\xe3y th\u1eed l\u1ea1i !")),_(!1)},onError:function(e,t){a.setFieldsValue({image:""}),A(""),w.b.error("T\u1ea3i \u1ea3nh l\xean th\u1ea5t b\u1ea1i ! H\xe3y th\u1eed l\u1ea1i"),_(!1)}};return i.a.createElement("div",null,i.a.createElement(s.a,{className:"ecommerce-form",validateMessages:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng !",types:{string:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !",number:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"},string:{max:"${label} t\u1ed1i \u0111a 255 k\xfd t\u1ef1 !"},number:{range:"${label} trong kho\u1ea3ng 1-100 !"},pattern:{mismatch:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"}},onFinish:t,form:a,method:"POST",encType:"multipart/form-data"},n&&i.a.createElement(s.a.Item,{name:"id",hidden:!0},i.a.createElement(u.a,null)),i.a.createElement(s.a.Item,{name:"user_name",label:"UserName",required:!0,rules:[{required:!0,whitespace:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(u.a,{placeholder:"V\xed d\u1ee5: Eplaza"})),i.a.createElement(s.a.Item,{name:"full_name",label:"FullName",required:!0,rules:[{required:!0,whitespace:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(u.a,{placeholder:"nguyen duc huy"})),i.a.createElement(s.a.Item,{name:"password",label:"Password",required:!0,rules:[{required:!0,whitespace:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(u.a.Password,{placeholder:"nguyen duc huy"})),i.a.createElement(s.a.Item,{name:"email",label:"Email",required:!0,rules:[{required:!0},{type:"email",message:"kh\xf4ng ph\u1ea3i l\xe0 Email",max:255}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(u.a,{placeholder:""})),i.a.createElement(s.a.Item,{name:"phone",label:"Phone",required:!0,rules:[{required:!0},{type:"string"},{pattern:/((09|03|07|08|05)+([0-9]{8})\b)/g}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(u.a,{placeholder:""})),i.a.createElement(s.a.Item,{name:"store_id",label:"storeId",required:!0,rules:[{required:!0}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(S.a,{showSearch:!0,style:{width:"100% "},placeholder:"storeId",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())}},h.map((function(e,t){return i.a.createElement(o,{key:t,value:e.id},e.name)})))),i.a.createElement(s.a.Item,{name:"type",label:"Type",required:!0,rules:[{required:!0}],style:{width:"50%",paddingRight:"10px"}},i.a.createElement(S.a,{showSearch:!0,style:{width:"100%"},placeholder:"type",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())}},i.a.createElement(o,{value:1},"Ho\u1ea1t \u0110\u1ed9ng"),i.a.createElement(o,{value:0},"T\u1ea1m D\u1eebng"))),i.a.createElement(s.a.Item,{name:"new_img",label:"\u1ea2nh \u0110\u1ea1i Di\u1ec7n",valuePropName:"file",getValueFromEvent:function(e){return e&&e.file},style:{width:"50%"}},i.a.createElement(v.a,Object.assign({},N,{listType:"picture-card",className:"avatar-uploader",showUploadList:!1,onChange:function(e){console.log(e.file),"uploading"===e.file.status&&_(!0)}}),x?i.a.createElement("img",{src:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ENV:"production",REACT_APP_TITLE:"System"}).REACT_APP_API_URL,"/").concat(x),alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover"}}):i.a.createElement("div",null,O?i.a.createElement(T.a,null):i.a.createElement(j.a,null),i.a.createElement("div",{style:{marginTop:8}},"Upload")))),i.a.createElement(s.a.Item,{name:"image",hidden:!0},i.a.createElement(u.a,null)),i.a.createElement(s.a.Item,{style:{width:"90%"}}),i.a.createElement(s.a.Item,{className:"button"},i.a.createElement(m.a,{htmlType:"submit",type:"primary"},"L\u01b0u l\u1ea1i"))))};t.default=function(){var e=Object(c.useSelector)((function(e){return e.userReducer})),t=e.userlist,a=e.loadinguser;console.log(t);localStorage.getItem("token");var E=Object(c.useDispatch)();Object(l.useEffect)((function(){E(Object(o.e)())}),[E]);var S=Object(l.useState)(""),w=Object(r.a)(S,2),v=w[0],T=w[1],j=Object(l.useState)(""),C=Object(r.a)(j,2),I=C[0],R=C[1],k=Object(l.useState)(!1),x=Object(r.a)(k,2),A=x[0],N=x[1],q=Object(l.useState)(!1),L=Object(r.a)(q,2),F=L[0],D=L[1],U=s.a.useForm(),V=Object(r.a)(U,1)[0],K=s.a.useForm(),H=Object(r.a)(K,1)[0],W=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,n=t.selectedKeys,r=t.confirm,l=t.clearFilters;return i.a.createElement("div",{style:{padding:12}},i.a.createElement(u.a,{placeholder:"Search ".concat(e),value:n[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return z(n,r,e)},style:{marginBottom:8,display:"block"}}),i.a.createElement(d.b,null,i.a.createElement(m.a,{type:"primary",onClick:function(){return z(n,r,e)},icon:i.a.createElement(b.a,null),size:"small",style:{width:90}},"Search"),i.a.createElement(m.a,{onClick:function(){return B(l)},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return i.a.createElement(b.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e]?a[e].toString().toLowerCase().includes(t.toLowerCase()):""},render:function(t){return I===e?i.a.createElement(f.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[v],autoEscape:!0,textToHighlight:t?t.toString():""}):"store_id"===e||"category"===e?null===t||void 0===t?void 0:t.name:t}}},z=function(e,t,a){t(),T(e[0]),R(a)},B=function(e){e(),T("")},$=[Object(n.a)({title:"UserName",dataIndex:"user_name",key:"user_name",width:"20%"},W("user_name")),Object(n.a)({title:"FullName",dataIndex:"full_name",key:"full_name",width:"20%"},W("full_name")),{title:"Avatar",dataIndex:"avatar",key:"avatar",width:"20%",render:function(e){return i.a.createElement("img",{src:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ENV:"production",REACT_APP_TITLE:"System"}).REACT_APP_API_URL,"/").concat(e),style:{width:"100%",height:"100%"},alt:""})}},Object(n.a)({title:"Phone",dataIndex:"phone",key:"phone",width:"20%",sorter:function(e,t){return e.Phone-t.Phone},sortDirections:["descend","ascend"]},W("Phone")),Object(n.a)({title:"Email",dataIndex:"email",key:"email",width:"20%"},W("email")),Object(n.a)({title:"Store",dataIndex:"store",key:"store",width:"20%",sorter:function(e,t){return e.store_id-t.store_id},sortDirections:["descend","ascend"]},W("store")),Object(n.a)({title:"Type",dataIndex:"type",key:"type",width:"20%",sorter:function(e,t){return e.type-t.type},sortDirections:["descend","ascend"]},W("type")),{key:"Action",title:i.a.createElement(y.a,{onClick:function(){return E(Object(o.e)())}}),align:"center",width:"10%",render:function(e,t,a){return i.a.createElement(d.b,{size:"middle"},i.a.createElement(O.a,{style:{color:"blue"},onClick:function(){return M(t)}}),i.a.createElement(h.a,{placement:"bottomRight",title:"B\u1ea1n mu\u1ed1n x\xf3a ".concat(t.userName," ?"),onConfirm:function(){return J(t.id)},okText:"X\xf3a",cancelText:"H\u1ee7y"},i.a.createElement(_.a,{style:{color:"red"}})))}}],M=Object(l.useCallback)((function(e){var t={id:e.id,user_name:e.user_name,full_name:e.full_name,password:e.password,email:e.email,phone:e.phone,store_id:e.store_id,type:e.type,image:e.avatar};H.setFieldsValue(t),D(!0)}),[H]),J=function(e){E(Object(o.c)(e))};return i.a.createElement("div",null,i.a.createElement("div",{className:"addecommerce"},i.a.createElement(m.a,{type:"primary",onClick:function(){return N(!0)}},"Th\xeam user")),i.a.createElement("br",null),i.a.createElement(p.a,{className:"modal-add",title:"Th\xeam user",visible:A,footer:"",centered:!0,onCancel:function(){return N(!1)}},i.a.createElement(P,{onFinish:function(e){var t={user_name:e.user_name,full_name:e.full_name,password:e.password,email:e.email,phone:e.phone,store_id:e.store_id,type:e.type};E(Object(o.b)(t)),N(!1),V.resetFields()},form:V})),i.a.createElement(p.a,{className:"modal-edit",title:"S\u1eeda user",visible:F,onCancel:function(){return D(!1)},centered:!0,footer:""},i.a.createElement(P,{onFinish:function(e){var t={Id:e.id,UserName:e.userName,FullName:e.fullName,Password:e.password,Email:e.email,Phone:e.phone,StoreId:e.storeId,Type:e.type,image:e.image};E(Object(o.d)(t)),D(!1),V.resetFields()},form:H,idEdit:!0})),i.a.createElement(g.a,{scroll:{x:900},pagination:{defaultCurrent:30,defaultPageSize:10,hideOnSinglePage:!0,pageSizeOptions:[10,30,50,100]},loading:a,columns:$,dataSource:t,rowKey:function(e){return e.id},bordered:!0}))}}}]);
//# sourceMappingURL=22.c5517c48.chunk.js.map