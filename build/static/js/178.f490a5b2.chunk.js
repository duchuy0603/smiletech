"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[178],{8178:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(1413),i=n(9439),c=n(2791),o=n(9355),s=n(364),l=n(9930),a=n(2425),d=n(3099),u=n(7309),m=n(8183),h=n(7545),f=n(174),x=n(6263),p=n.n(x),Z=n(1730),g=n(4057),j=n(1752),y=n(2622),S=n(2949),b=n(281),v=(n(4569),n(184)),w=function(e){var t=e.onFinish,n=e.form,r=e.idEdit,o=a.Z.TextArea,d=S.Z.Option,m=(0,s.useDispatch)(),h=(0,s.useSelector)((function(e){return e.ecommerceReducer})).ecommercelist,f=(0,c.useState)(!1),x=(0,i.Z)(f,2),p=(x[0],x[1],(0,c.useState)(!1)),Z=(0,i.Z)(p,2);Z[0],Z[1];(0,c.useEffect)((function(){m((0,b.A4)())}),[]);var g=(0,c.useState)(!1),j=(0,i.Z)(g,2),y=(j[0],j[1],(0,c.useState)([])),w=(0,i.Z)(y,2);w[0],w[1];return(0,v.jsx)("div",{children:(0,v.jsxs)(l.Z,{className:"ecommerce-form",validateMessages:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng !",types:{string:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !",number:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"},string:{max:"${label} t\u1ed1i \u0111a 255 k\xfd t\u1ef1 !"},number:{range:"${label} trong kho\u1ea3ng 1-100 !"},pattern:{mismatch:"${label} kh\xf4ng h\u1ee3p l\u1ec7 !"}},onFinish:t,form:n,method:"POST",encType:"multipart/form-data",children:[r&&(0,v.jsx)(l.Z.Item,{name:"id",hidden:!0,children:(0,v.jsx)(a.Z,{})}),(0,v.jsx)(l.Z.Item,{name:"name",label:"T\xean",required:!0,rules:[{required:!0,whitespace:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"},children:(0,v.jsx)(a.Z,{placeholder:"V\xed d\u1ee5: Eplaza"})}),(0,v.jsx)(l.Z.Item,{name:"des",label:"Description",required:!0,rules:[{required:!0},{type:"string",max:255}],style:{width:"50%",paddingRight:"10px"},children:(0,v.jsx)(o,{})}),(0,v.jsx)(l.Z.Item,{name:"ecommerce_id",label:"EcommerceId",required:!0,rules:[{required:!0}],style:{width:"50%"},children:(0,v.jsx)(S.Z,{showSearch:!0,style:{width:200},placeholder:"ecommerceId",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())},children:h.map((function(e,t){return(0,v.jsx)(d,{value:e.id,children:e.name},t)}))})}),(0,v.jsx)(l.Z.Item,{style:{width:"90%"}}),(0,v.jsx)(l.Z.Item,{className:"button",children:(0,v.jsx)(u.Z,{htmlType:"submit",type:"primary",children:"L\u01b0u l\u1ea1i"})})]})})},k=function(){var e=(0,s.useSelector)((function(e){return e.featureReducer})),t=e.featurelist,n=e.loadingfeature,x=(0,s.useDispatch)();(0,c.useEffect)((function(){x((0,o.SG)())}),[x]);var S=(0,c.useState)(""),b=(0,i.Z)(S,2),k=b[0],C=b[1],I=(0,c.useState)(""),F=(0,i.Z)(I,2),T=F[0],E=F[1],q=(0,c.useState)(!1),L=(0,i.Z)(q,2),N=L[0],z=L[1],D=(0,c.useState)(!1),O=(0,i.Z)(D,2),R=O[0],_=O[1],P=l.Z.useForm(),$=(0,i.Z)(P,1)[0],B=l.Z.useForm(),K=(0,i.Z)(B,1)[0],A=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,r=t.selectedKeys,i=t.confirm,c=t.clearFilters;return(0,v.jsxs)("div",{style:{padding:12},children:[(0,v.jsx)(a.Z,{placeholder:"Search ".concat(e),value:r[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return G(r,i,e)},style:{marginBottom:8,display:"block"}}),(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(u.Z,{type:"primary",onClick:function(){return G(r,i,e)},icon:(0,v.jsx)(Z.Z,{}),size:"small",style:{width:90},children:"Search"}),(0,v.jsx)(u.Z,{onClick:function(){return H(c)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(e){return(0,v.jsx)(Z.Z,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},render:function(t){return T===e?(0,v.jsx)(p(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[k],autoEscape:!0,textToHighlight:t?t.toString():""}):"ecommerce"===e?null===t||void 0===t?void 0:t.name:t}}},G=function(e,t,n){t(),C(e[0]),E(n)},H=function(e){e(),C("")},V=[(0,r.Z)({title:"Name",dataIndex:"name",key:"name",width:"20%"},A("name")),(0,r.Z)({title:"EcomerceId",dataIndex:"ecommerce",key:"ecommerce",width:"20%",sorter:function(e,t){return e.ecommerce-t.ecommerce},sortDirections:["descend","ascend"]},A("ecommerce")),(0,r.Z)({title:"Description",dataIndex:"des",key:"des",width:"20%"},A("des")),{key:"Action",title:(0,v.jsx)(g.Z,{onClick:function(){return x((0,o.SG)())}}),align:"center",width:"10%",render:function(e,t,n){return(0,v.jsxs)(d.Z,{size:"middle",children:[(0,v.jsx)(j.Z,{style:{color:"blue"},onClick:function(){return M(t)}}),(0,v.jsx)(m.Z,{placement:"bottomRight",title:"B\u1ea1n mu\u1ed1n x\xf3a ".concat(t.name," ?"),onConfirm:function(){return W(t.id)},okText:"X\xf3a",cancelText:"H\u1ee7y",children:(0,v.jsx)(y.Z,{style:{color:"red"}})})]})}}],M=(0,c.useCallback)((function(e){var t={id:e.id,name:e.name,ecommerce_id:e.ecommerce.id,des:e.des};K.setFieldsValue(t),_(!0)}),[K]),W=function(e){x((0,o.IS)(e))};return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"addecommerce",children:(0,v.jsx)(u.Z,{type:"primary",onClick:function(){return z(!0)},children:"Th\xeam Feature"})}),(0,v.jsx)("br",{}),(0,v.jsx)(h.Z,{className:"modal-add",title:"Th\xeam Brand",visible:N,footer:"",centered:!0,onCancel:function(){return z(!1)},children:(0,v.jsx)(w,{onFinish:function(e){var t={name:e.name,des:e.des,ecommerce_id:e.ecommerce_id};x((0,o.Nc)(t)),z(!1),$.resetFields(),console.log(t)},form:$})}),(0,v.jsx)(h.Z,{className:"modal-edit",title:"S\u1eeda Brand",visible:R,onCancel:function(){return _(!1)},centered:!0,footer:"",children:(0,v.jsx)(w,{onFinish:function(e){var t={id:e.id,name:e.name,des:e.des,ecommerce_id:e.ecommerce_id};x((0,o.pm)(t)),_(!1),$.resetFields(),console.log(t)},form:K,idEdit:!0})}),(0,v.jsx)(f.Z,{scroll:{x:900},pagination:{defaultCurrent:30,defaultPageSize:10,hideOnSinglePage:!0,pageSizeOptions:[10,30,50,100]},loading:n,columns:V,dataSource:t,rowKey:function(e){return e.id},bordered:!0})]})}}}]);
//# sourceMappingURL=178.f490a5b2.chunk.js.map