"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[719],{9719:function(e,n,t){t.r(n);var s=t(1413),a=t(29439),l=t(72791),r=t(51910),o=t(16856),c=t(65065),i=t(76053),d=t(80184),u=[{title:"Title",dataIndex:"name",render:function(e){return(0,d.jsx)("a",{children:e})}},{title:"Dokumententyp",dataIndex:"age"},{title:"AKTION",dataIndex:"action",render:function(e,n){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Uf_,{}),"\xa0 Bearbeiten \xa0\xa0\xa0",(0,d.jsx)(o.ZkW,{}),"L\xf6schen"]})}}],h=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"},{key:"4",name:"Disabled User",age:99,address:"Sydney No. 1 Lake Park"}],m={onChange:function(e,n){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",n)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}},x=function(){var e=(0,l.useState)("checkbox"),n=(0,a.Z)(e,2),t=n[0],i=(n[1],(0,l.useState)(!1)),x=(0,a.Z)(i,2),j=x[0],b=x[1],k=(0,l.useState)(),p=(0,a.Z)(k,2),f=p[0],g=p[1],y=(0,l.useState)(),N=(0,a.Z)(y,2),v=(N[0],N[1],(0,l.useState)()),w=(0,a.Z)(v,2),_=w[0],Z=w[1],S=function(){return b(!1)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("h5",{className:"mt-3 mx-3",children:"Dokumente"}),(0,d.jsx)("hr",{})]}),(0,d.jsxs)("div",{className:"row",style:{border:"1px solid lightgray",borderRadius:"5px"},children:[(0,d.jsxs)("div",{className:"col-sm-7",children:[(0,d.jsx)("h5",{children:"Dokumente verwalten"}),(0,d.jsx)("p",{children:"Senden Sie anpassbare Angebote, Vorschl\xe4ge und Vertr\xe4ge, um Gesch\xe4fte schneller abzuschlie\xdfen."})]}),(0,d.jsx)("div",{className:"col-sm-2"}),(0,d.jsxs)("div",{className:"col-sm-3 mt-3",children:[(0,d.jsxs)("button",{type:"button",className:"btn btn text-light",style:{background:"#0b5995"},onClick:function(){return b(!0)},children:[(0,d.jsx)(o.x06,{style:{color:"white"}}),"\xa0 Dokument erstellen"]}),(0,d.jsxs)(r.Z,{show:j,onHide:S,centered:!0,children:[(0,d.jsx)(r.Z.Header,{closeButton:!0,children:(0,d.jsx)(r.Z.Title,{children:"Details zum Dokument"})}),(0,d.jsxs)(r.Z.Body,{children:[(0,d.jsx)("label",{htmlFor:"title",children:"Titel"}),(0,d.jsx)("input",{id:"title",required:!0,value:_,onChange:function(e){Z(e.target.value)},type:"text",className:"form-control"}),(0,d.jsx)("label",{htmlFor:"documentType",children:"Dokumenttyp"}),(0,d.jsxs)("select",{id:"documentType",value:f,onChange:function(e){g(e.target.value)},className:"form-control",children:[(0,d.jsx)("option",{children:"--select--"}),(0,d.jsx)("option",{value:"vorschlag",children:"Vorschlag"})]}),(0,d.jsx)("label",{htmlFor:"fileUpload",children:"Datei-Upload"}),(0,d.jsx)("input",{id:"fileUpload",type:"file",className:"form-control"})]}),(0,d.jsx)(r.Z.Footer,{children:(0,d.jsxs)("div",{className:"modal-footer",children:[(0,d.jsxs)("button",{className:"btn btn",onClick:S,style:{background:"#d04545",color:"white"},children:[" ","Abbrechen"]}),"\xa0 \xa0",(0,d.jsx)("button",{className:"btn btn",onClick:function(){var e={document_title:_,document_type:f};console.log(e),fetch("".concat("http://95.217.77.208:4142"))},style:{background:"#0b5995",color:"white"},children:"Speichern"})]})})]})]})]}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-sm-12",children:(0,d.jsx)(c.Z,{rowSelection:(0,s.Z)({type:t},m),columns:u,dataSource:h})})})]})};n.default=l.memo(x)}}]);
//# sourceMappingURL=719.79f32db8.chunk.js.map