(this["webpackJsonpdance-sport"]=this["webpackJsonpdance-sport"]||[]).push([[21],{389:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(122),i=a(1),c=a.n(i),o=a(63),l=a(21),d=a(272),s=a(431),u=a(432),m=a(434),p=a(142),f=a(435),h=a(433),g=a(427),b=a(135),E=a.n(b),y=a(280),O=a(437),_=a(438),S=a(416),w=(a(389),a(429)),j=a(397),C=a(418),v=(a(42),a(44)),I=a(46),P=function(e){var t=e.onFinish,a=e.form,r=e.idEdit,o=u.a.TextArea,m=w.a.Dragger,f=d.a.Option,h=Object(l.useDispatch)(),g=Object(l.useSelector)((function(e){return e.categoriesReducer})).categorieslist,b=Object(l.useSelector)((function(e){return e.storeReducer})).storelist,E=Object(i.useState)(!1),y=Object(n.a)(E,2),O=(y[0],y[1],Object(i.useState)(!1)),_=Object(n.a)(O,2),S=(_[0],_[1],Object(i.useState)(!1)),P=Object(n.a)(S,2),T=(P[0],P[1],Object(i.useState)([])),x=Object(n.a)(T,2),k=(x[0],x[1],Object(i.useState)("")),L=Object(n.a)(k,2),R=(L[0],L[1]);Object(i.useEffect)((function(){if(r){var e=a.getFieldValue("image");R(e[0]),console.log(e)}h(Object(I.d)()),h(Object(v.e)())}),[a,r]);var D={name:"files",multiple:!0,action:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/deploy-github",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ENV:"production",REACT_APP_TITLE:"System"}).REACT_APP_API_URL,"/upload/upload-array"),onChange:function(e){var t=e.file.status;if("uploading"!==t&&console.log(e.file,e.fileList),"done"===t){var r=e.fileList.map((function(e){return encodeURI(e.name)}));console.log(r),a.setFieldsValue({image:r}),R(e.list),j.b.success("".concat(e.file.name," file uploaded successfully."))}else"error"===t&&(a.setFieldsValue({image:""}),R(""),j.b.error("".concat(e.file.name," file upload failed.")))},onDrop:function(e){console.log("Dropped files",e.dataTransfer.files)}};return c.a.createElement("div",null,c.a.createElement(s.a,{className:"ecommerce-form",validateMessages:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng !",types:{string:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !",number:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"},string:{max:"${label} t\u1ed1i \u0111a 255 k\xfd t\u1ef1 !"},number:{range:"${label} trong kho\u1ea3ng 1-100 !"},pattern:{mismatch:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"}},onFinish:t,form:a,method:"POST",encType:"multipart/form-data"},r&&c.a.createElement(s.a.Item,{name:"id",hidden:!0},c.a.createElement(u.a,null)),c.a.createElement(s.a.Item,{name:"name",label:"T\xean",required:!0,rules:[{required:!0,whitespace:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},c.a.createElement(u.a,{placeholder:"V\xed d\u1ee5: Eplaza"})),c.a.createElement(s.a.Item,{name:"price",label:"Price",required:!0,rules:[{required:!0},{type:"string"}],style:{width:"50%",paddingRight:"10px"}},c.a.createElement(u.a,{placeholder:"100.000$"})),c.a.createElement(s.a.Item,{name:"content",label:"Content",required:!0,rules:[{required:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},c.a.createElement(u.a,{placeholder:""})),c.a.createElement(s.a.Item,{name:"des",label:"Description",required:!0,rules:[{required:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"}},c.a.createElement(o,null)),c.a.createElement(s.a.Item,{name:"category_id",label:"categoryId",required:!0,rules:[{required:!0}],style:{width:"50%"}},c.a.createElement(d.a,{showSearch:!0,style:{width:200},placeholder:"categoryId",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())}},g.map((function(e,t){return c.a.createElement(f,{key:t,value:e.id},e.name)})))),c.a.createElement(s.a.Item,{name:"store_id",label:"storeId",required:!0,rules:[{required:!0}],style:{width:"50%"}},c.a.createElement(d.a,{showSearch:!0,style:{width:200},placeholder:"storeId",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())}},b.map((function(e,t){return c.a.createElement(f,{key:t,value:e.id},e.name)})))),c.a.createElement(s.a.Item,{name:"parent_id",label:"parentId",required:!0,rules:[{required:!0}],style:{width:"50%"}},c.a.createElement(d.a,{showSearch:!0,style:{width:200},placeholder:"parentId",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())}},c.a.createElement(f,{value:1},"Ho\u1ea1t \u0110\u1ed9ng"),c.a.createElement(f,{value:0},"T\u1ea1m D\u1eebng"))),c.a.createElement(s.a.Item,{name:"new_img",label:"\u1ea2nh tin t\u1ee9c",valuePropName:"file",getValueFromEvent:function(e){return e&&e.file},style:{width:"50%"}},c.a.createElement(m,D,c.a.createElement("p",{className:"ant-upload-drag-icon"},c.a.createElement(C.a,null)),c.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),c.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),","),c.a.createElement(s.a.Item,{name:"image",hidden:!0},c.a.createElement(u.a,null)),c.a.createElement(s.a.Item,{style:{width:"90%"}}),c.a.createElement(s.a.Item,{className:"button"},c.a.createElement(p.a,{htmlType:"submit",type:"primary"},"L\u01b0u l\u1ea1i"))))};t.default=function(){var e=Object(l.useSelector)((function(e){return e.productReducer})),t=e.productlist,a=e.loadingproduct;console.log(t);d.a.Option;var b=Object(l.useDispatch)();Object(i.useEffect)((function(){b(Object(o.e)())}),[b,z]);var w=Object(i.useState)(""),j=Object(n.a)(w,2),C=j[0],v=j[1],I=Object(i.useState)(""),T=Object(n.a)(I,2),x=T[0],k=T[1],L=Object(i.useState)(!1),R=Object(n.a)(L,2),D=R[0],A=R[1],F=Object(i.useState)(!1),N=Object(n.a)(F,2),q=N[0],V=N[1],H=Object(i.useState)(0),K=Object(n.a)(H,2),z=K[0],U=(K[1],s.a.useForm()),W=Object(n.a)(U,1)[0],$=s.a.useForm(),B=Object(n.a)($,1)[0],J=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,r=t.selectedKeys,n=t.confirm,i=t.clearFilters;return c.a.createElement("div",{style:{padding:12}},c.a.createElement(u.a,{placeholder:"Search ".concat(e),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return M(r,n,e)},style:{marginBottom:8,display:"block"}}),c.a.createElement(m.b,null,c.a.createElement(p.a,{type:"primary",onClick:function(){return M(r,n,e)},icon:c.a.createElement(y.a,null),size:"small",style:{width:90}},"Search"),c.a.createElement(p.a,{onClick:function(){return X(i)},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return c.a.createElement(y.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e]?a[e].toString().toLowerCase().includes(t.toLowerCase()):""},render:function(t){return x===e?c.a.createElement(E.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[C],autoEscape:!0,textToHighlight:t?t.toString():""}):"store"===e||"category"===e?null===t||void 0===t?void 0:t.name:t}}},M=function(e,t,a){t(),v(e[0]),k(a)},X=function(e){e(),v("")},G=[Object(r.a)({title:"Name",dataIndex:"name",key:"name",width:"20%"},J("name")),{title:"Image",dataIndex:"image_url",key:"image_url",width:"20%",render:function(e){return c.a.createElement("img",{src:(t=e,null===t?void 0:Object({NODE_ENV:"production",PUBLIC_URL:"/deploy-github",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ENV:"production",REACT_APP_TITLE:"System"}).REACT_APP_API_URL+t[0].url),style:{width:"100%",height:"100%"},alt:""});var t}},Object(r.a)({title:"Price",dataIndex:"price",key:"price",width:"20%",sorter:function(e,t){return e.price-t.price},sortDirections:["descend","ascend"]},J("price")),Object(r.a)({title:"Content",dataIndex:"content",key:"content",width:"20%"},J("content")),Object(r.a)({title:"Description",dataIndex:"des",key:"des",width:"20%"},J("des")),Object(r.a)({title:"Category",dataIndex:"category",key:"category",width:"20%",sorter:function(e,t){return e.category_id-t.category_id},sortDirections:["descend","ascend"]},J("category")),Object(r.a)({title:"Store",dataIndex:"store",key:"store",width:"20%",sorter:function(e,t){return e.store-t.store},sortDirections:["descend","ascend"]},J("store")),Object(r.a)({title:"ParentId",dataIndex:"parent_id",key:"parent_id",width:"20%",sorter:function(e,t){return e.parent_id-t.parent_id},sortDirections:["descend","ascend"]},J("parent_id")),{key:"Action",title:c.a.createElement(O.a,{onClick:function(){return b(Object(o.e)())}}),align:"center",width:"10%",render:function(e,t,a){return c.a.createElement(m.b,{size:"middle"},c.a.createElement(_.a,{style:{color:"blue"},onClick:function(){return Q(t)}}),c.a.createElement(f.a,{placement:"bottomRight",title:"B\u1ea1n mu\u1ed1n x\xf3a ".concat(t.name," ?"),onConfirm:function(){return Y(t.id)},okText:"X\xf3a",cancelText:"H\u1ee7y"},c.a.createElement(S.a,{style:{color:"red"}})))}}],Q=function(e){var t={id:e.id,name:e.name,price:e.price,des:e.des,content:e.content,store_id:e.store.id,category_id:e.category.id,parent_id:e.parent_id,image:e.image_url};B.setFieldsValue(t),V(!0)},Y=function(e){b(Object(o.c)(e))};return c.a.createElement("div",null,c.a.createElement("div",{className:"addecommerce"},c.a.createElement(p.a,{type:"primary",onClick:function(){return A(!0)}},"Th\xeam Product")),c.a.createElement("br",null),c.a.createElement(h.a,{className:"modal-add",title:"Th\xeam Product",visible:D,footer:"",centered:!0,onCancel:function(){return A(!1)}},c.a.createElement(P,{onFinish:function(e){var t={name:e.name,price:e.price,des:e.des,content:e.content,store_id:e.store_id,category_id:e.category_id,parent_id:e.parent_id,image_url:e.image};b(Object(o.b)(t)),W.resetFields(),A(!1)},form:W})),c.a.createElement(h.a,{className:"modal-edit",title:"S\u1eeda Product",visible:q,onCancel:function(){return V(!1)},centered:!0,footer:""},c.a.createElement(P,{onFinish:function(e){var t={id:e.id,name:e.name,price:e.price,des:e.des,store_id:e.store_id,category_id:e.category_id,parent_id:e.parent_id,image_url:e.image};b(Object(o.d)(t)),V(!1),W.resetFields(),console.log("edit",e)},form:B,idEdit:!0})),c.a.createElement(g.a,{scroll:{x:900},pagination:{defaultCurrent:30,defaultPageSize:10,hideOnSinglePage:!0,pageSizeOptions:[10,30,50,100]},loading:a,columns:G,dataSource:t,rowKey:function(e){return e.id},bordered:!0}))}},418:function(e,t,a){"use strict";var r=a(29),n=a(1),i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},c=a(113),o=function(e,t){return n.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:i}))};o.displayName="InboxOutlined";t.a=n.forwardRef(o)}}]);
//# sourceMappingURL=21.d9105a7c.chunk.js.map