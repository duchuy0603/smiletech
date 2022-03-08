"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[610],{2166:function(e,r,t){t.r(r),t.d(r,{default:function(){return Y}});var n=t(1413),c=t(9439),i=t(2791),d=t(7367),a=t(364),s=t(9930),o=t(2425),l=t(3099),u=t(7309),m=t(8183),h=t(7545),p=t(174),x=t(6263),f=t.n(x),_=t(1730),g=t(4057),Z=t(1752),j=t(2622),y=t(5064),w=t(2949),v=t(281),b=t(4354),k=t(3506),S=t(2426),C=t.n(S),I=(t(4569),t(184)),D=(k.Z.RangePicker,function(e){var r=e.onFinish,t=e.form,n=e.idEdit,d=((0,b.nk)(),o.Z.TextArea),l=(y.Z.Dragger,(0,i.useState)(!1)),m=(0,c.Z)(l,2),h=(m[0],m[1],(0,i.useState)([])),p=(0,c.Z)(h,2),x=(p[0],p[1],(0,i.useState)("")),f=(0,c.Z)(x,2),_=(f[0],f[1],w.Z.Option),g=(0,a.useDispatch)(),Z=(0,a.useSelector)((function(e){return e.ecommerceReducer})).ecommercelist;(0,i.useEffect)((function(){g((0,v.A4)())}),[]);return(0,I.jsx)("div",{children:(0,I.jsxs)(s.Z,{className:"ecommerce-form",validateMessages:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng !",types:{string:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !",number:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"},string:{max:"${label} t\u1ed1i \u0111a 255 k\xfd t\u1ef1 !"},number:{range:"${label} trong kho\u1ea3ng 1-100 !"},pattern:{mismatch:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"}},onFinish:r,form:t,method:"POST",encType:"multipart/form-data",children:[n&&(0,I.jsx)(s.Z.Item,{name:"id",hidden:!0,children:(0,I.jsx)(o.Z,{})}),(0,I.jsx)(s.Z.Item,{name:"name",label:"T\xean",required:!0,rules:[{required:!0,whitespace:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"},children:(0,I.jsx)(o.Z,{placeholder:"V\xed d\u1ee5: Eplaza"})}),(0,I.jsx)(s.Z.Item,{name:"decrease_percent",label:"decrease_percent",required:!0,rules:[{required:!0}],style:{width:"50%",paddingRight:"10px"},children:(0,I.jsx)(o.Z,{placeholder:"V\xed d\u1ee5:10.000$"})}),(0,I.jsx)(s.Z.Item,{name:"decrease_price",label:"decrease_price",required:!0,rules:[{required:!0}],style:{width:"50%",paddingRight:"10px"},children:(0,I.jsx)(o.Z,{placeholder:"V\xed d\u1ee5: 20"})}),(0,I.jsx)(s.Z.Item,{name:"max_decrease_price",label:"max_decrease_price",required:!0,rules:[{required:!0}],style:{width:"50%",paddingRight:"10px"},children:(0,I.jsx)(o.Z,{placeholder:"V\xed d\u1ee5: 20"})}),(0,I.jsx)(s.Z.Item,{name:"voucher_type",label:"Type",required:!0,rules:[{required:!0}],style:{width:"50%",paddingRight:"10px"},children:(0,I.jsxs)(w.Z,{showSearch:!0,style:{width:"100%"},placeholder:"type",optionFilterProp:"children",filterOption:function(e,r){return r.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,r){return e.children.toLowerCase().localeCompare(r.children.toLowerCase())},children:[(0,I.jsx)(_,{value:1,children:"Ho\u1ea1t \u0110\u1ed9ng"}),(0,I.jsx)(_,{value:0,children:"T\u1ea1m D\u1eebng"})]})}),(0,I.jsx)(s.Z.Item,{name:"date",label:"Date",style:{width:"50%",paddingRight:"10px"},children:(0,I.jsx)(k.Z,{renderExtraFooter:function(){return""},format:"HH:mm:ss DD-MM-YYYY",showTime:!0})}),(0,I.jsx)(s.Z.Item,{name:"des",label:"Description",required:!0,rules:[{required:!0},{type:"string"}],style:{width:"50%",paddingRight:"10px"},children:(0,I.jsx)(d,{})}),(0,I.jsx)(s.Z.Item,{name:"ecommerce_id",label:"EcommerceId",required:!0,rules:[{required:!0}],style:{width:"50%",paddingRight:"10px"},children:(0,I.jsx)(w.Z,{showSearch:!0,style:{width:200},placeholder:"EcommerceId",optionFilterProp:"children",filterOption:function(e,r){return r.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,r){return e.children.toLowerCase().localeCompare(r.children.toLowerCase())},children:Z.map((function(e,r){return(0,I.jsx)(_,{value:e.id,children:e.name},r)}))})}),(0,I.jsx)(s.Z.Item,{name:"image",hidden:!0,children:(0,I.jsx)(o.Z,{})}),(0,I.jsx)(s.Z.Item,{style:{width:"90%"}}),(0,I.jsx)(s.Z.Item,{className:"button",children:(0,I.jsx)(u.Z,{htmlType:"submit",type:"primary ",children:"L\u01b0u l\u1ea1i"})})]})})}),Y=function(){var e=(0,a.useSelector)((function(e){return e.voucherReducer})),r=e.voucherlist,t=e.loadingvoucher,x=(0,a.useDispatch)();(0,i.useEffect)((function(){x((0,d.Rc)())}),[x]);var y=(0,i.useState)(""),w=(0,c.Z)(y,2),v=w[0],b=w[1],k=(0,i.useState)(""),S=(0,c.Z)(k,2),Y=S[0],q=S[1],R=(0,i.useState)(0),F=(0,c.Z)(R,2),T=F[0],E=F[1],H=(0,i.useState)(!1),L=(0,c.Z)(H,2),M=L[0],O=L[1],P=(0,i.useState)(!1),V=(0,c.Z)(P,2),z=V[0],N=V[1],$=s.Z.useForm(),K=(0,c.Z)($,1)[0],A=s.Z.useForm(),B=(0,c.Z)(A,1)[0],X=function(e){return{filterDropdown:function(r){var t=r.setSelectedKeys,n=r.selectedKeys,c=r.confirm,i=r.clearFilters;return(0,I.jsxs)("div",{style:{padding:12},children:[(0,I.jsx)(o.Z,{placeholder:"Search ".concat(e),value:n[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},onPressEnter:function(){return W(n,c,e)},style:{marginBottom:8,display:"block"}}),(0,I.jsxs)(l.Z,{children:[(0,I.jsx)(u.Z,{type:"primary",onClick:function(){return W(n,c,e)},icon:(0,I.jsx)(_.Z,{}),size:"small",style:{width:90},children:"Search"}),(0,I.jsx)(u.Z,{onClick:function(){return G(i)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(e){return(0,I.jsx)(_.Z,{style:{color:e?"#1890ff":void 0}})},onFilter:function(r,t){return t[e]?t[e].toString().toLowerCase().includes(r.toLowerCase()):""},render:function(r){return Y===e?(0,I.jsx)(f(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[v],autoEscape:!0,textToHighlight:r?r.toString():""}):"ecommerce"===e?null===r||void 0===r?void 0:r.name:r}}},W=function(e,r,t){r(),b(e[0]),q(t)},G=function(e){e(),b("")},J=[(0,n.Z)({title:"Name",dataIndex:"name",key:"name",width:"20%"},X("name")),(0,n.Z)({title:"decrease_price",dataIndex:"decrease_price",key:"decrease_price",width:"20%",sorter:function(e,r){return e.decrease_price-r.decrease_price},sortDirections:["descend","ascend"]},X("decrease_price")),(0,n.Z)({title:"decrease_percent",dataIndex:"decrease_percent",key:"decrease_percent",width:"20%",sorter:function(e,r){return e.decrease_percent-r.decrease_percent},sortDirections:["descend","ascend"]},X("decrease_percent")),(0,n.Z)({title:"max_decrease_price",dataIndex:"max_decrease_price",key:"max_decrease_price",width:"20%",sorter:function(e,r){return e.max_decrease_price-r.max_decrease_price},sortDirections:["descend","ascend"]},X("max_decrease_price")),(0,n.Z)({title:"created_date",dataIndex:"created_date",key:"created_date",width:"20%",sorter:function(e,r){return e.created_date-r.created_date},sortDirections:["descend","ascend"]},X("created_date")),(0,n.Z)((0,n.Z)({title:"EcomerceId",dataIndex:"ecommerce",key:"ecommerce",width:"20%"},X("ecommerce")),{},{sorter:function(e,r){return e.ecommerce.length-r.ecommerce.length},sortDirections:["descend","ascend"]}),(0,n.Z)({title:"Description",dataIndex:"des",key:"des",width:"20%"},X("des")),{key:"Action",title:(0,I.jsx)(g.Z,{onClick:function(){return x((0,d.Rc)())}}),align:"center",width:"10%",render:function(e,r,t){return(0,I.jsxs)(l.Z,{size:"middle",children:[(0,I.jsx)(Z.Z,{style:{color:"blue"},onClick:function(){return Q(r)}}),(0,I.jsx)(m.Z,{placement:"bottomRight",title:"B\u1ea1n mu\u1ed1n x\xf3a ".concat(r.name," ?"),onConfirm:function(){return U(r.id)},okText:"X\xf3a",cancelText:"H\u1ee7y",children:(0,I.jsx)(j.Z,{style:{color:"red"}})})]})}}],Q=function(e){var r={id:e.id,name:e.name,date:[C()(e.created_date,"HH-mm DD-MM-YYYY"),C()(e.updated_date,"HH-mm DD-MM-YYYY")],decrease_price:e.decrease_price,ecommerce_id:e.ecommerce.id,max_decrease_price:e.max_decrease_price,des:e.des,decrease_percent:e.decrease_percent};E(e.id),B.setFieldsValue(r),N(!0)},U=function(e){x((0,d.s)(e))};return(0,I.jsxs)("div",{children:[(0,I.jsx)("div",{className:"addecommerce",children:(0,I.jsx)(u.Z,{type:"primary",onClick:function(){return O(!0)},children:"Th\xeam Voucher"})}),(0,I.jsx)("br",{}),(0,I.jsx)(h.Z,{className:"modal-add",title:"Th\xeam Voucher",visible:M,footer:"",centered:!0,onCancel:function(){return O(!1)},children:(0,I.jsx)(D,{onFinish:function(e){var r={name:e.name,decrease_percent:e.decrease_percent,decrease_price:e.decrease_price,ecommerce_id:e.ecommerce_id,des:e.des,max_decrease_price:e.max_decrease_price,created_date:e.date};x((0,d.PX)(r)),K.resetFields(),O(!1),console.log("date555",e.date),console.log(e)},form:K})}),(0,I.jsx)(h.Z,{className:"modal-edit",title:"S\u1eeda Voucher",visible:z,onCancel:function(){return N(!1)},centered:!0,footer:"",children:(0,I.jsx)(D,{onFinish:function(e){var r={id:e.id,name:e.name,decrease_percent:e.decrease_percent,decrease_price:e.decrease_price,ecommerce_id:e.ecommerce_id,des:e.des,max_decrease_price:e.max_decrease_price,created_date:e.date[0].format("HH:mm DD-MM-YYYY")};x((0,d.c4)(r)),N(!1),console.log(r)},form:B,idEdit:T})}),(0,I.jsx)(p.Z,{scroll:{x:900},pagination:{defaultCurrent:1,defaultPageSize:10,hideOnSinglePage:!0,pageSizeOptions:[10,30,50,100]},loading:t,columns:J,dataSource:r,rowKey:function(e){return e.id},bordered:!0})]})}}}]);
//# sourceMappingURL=610.2035b3fc.chunk.js.map