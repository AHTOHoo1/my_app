"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[328],{3484:function(e,n,s){s.d(n,{I:function(){return d},g:function(){return c}});var i=s(1413),r=s(5987),t=s(184),a=["input","meta"],o=function(e){return function(n){var s=n.input,o=n.meta,c=(0,r.Z)(n,a),d=o.touched&&o.error;return(0,t.jsxs)("div",{children:[d&&(0,t.jsx)("span",{children:o.error}),(0,t.jsx)("div",{className:"form__control ".concat(d?"error":""),children:(0,t.jsx)(e,(0,i.Z)((0,i.Z)({},s),c))})]})}},c=o("textarea"),d=o("input")},328:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});var i=s(5546),r=s(3504),t=s(184),a=function(e){var n="/dialogs/"+e.id;return(0,t.jsx)("div",{className:"dialog",children:(0,t.jsx)(r.rU,{to:n,className:"dialog__item",children:e.friend})})},o=function(e){return(0,t.jsx)("div",{className:e.message_class,children:e.text})},c=(s(2791),s(6139)),d=s(704),u=s(7841),l=s(3484),m=(0,u.D)(10),f=(0,d.Z)({form:"dialogAddMessageForm"})((function(e){return(0,t.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,t.jsx)(c.Z,{placeholder:"Enter your message",className:"message_input",component:l.g,name:"newMessageBody",validate:[u.C,m]}),(0,t.jsx)("button",{className:"to_send_button",children:(0,t.jsx)("img",{src:"https://icons-for-free.com/iconfiles/png/512/media+message+send+telegram+icon-1320192980424419632.png",alt:"to_send",className:"to_send_img"})})]})})),g=function(e){var n=e.dialogsPage,s=n.dialogs.map((function(e){return(0,t.jsx)(a,{id:e.id,friend:e.friend},e.id)})),i=n.messages.map((function(e){return(0,t.jsx)(o,{text:e.text,message_class:e.message_class},e.id)}));return(0,t.jsxs)("div",{className:"dialogs",children:[(0,t.jsx)("div",{className:"dialogs__items",children:s}),(0,t.jsxs)("div",{className:"messages",children:[i,(0,t.jsx)(f,{onSubmit:function(n){e.addMessage(n.newMessageBody)}})]})]})},x=s(8687),h=s(1548),p=(0,s(7781).qC)((0,x.$j)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:i.H}),h.D)(g)},7841:function(e,n,s){s.d(n,{C:function(){return i},D:function(){return r}});var i=function(e){if(!e)return"Field is required"},r=function(e){return function(n){if(n.length>e)return["Max length is ",e," simbols"]}}}}]);
//# sourceMappingURL=328.bc17f0cd.chunk.js.map