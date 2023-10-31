"use strict";(self.webpackChunkevent_planner=self.webpackChunkevent_planner||[]).push([[498],{6089:function(n,e,t){t.d(e,{U:function(){return i}});var r=t(184);function i(n){var e=n.value,t="";switch(e){case"High":t="var(--priority-high-text-color)";break;case"Medium":t="var(--priority-medium-text-color)";break;case"Low":t="var(--priority-low-text-color)";break;default:t="var(--input-placeholder-color)"}return(0,r.jsx)("span",{style:{color:t},children:e})}},2830:function(n,e,t){t.d(e,{$:function(){return d}});var r,i=t(168),o=t(5867),a=t.p+"static/media/background.9ec48850da0410ca04b0.jpg",l=o.ZP.section(r||(r=(0,i.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n"])),a),c=t(184),d=function(n){var e=n.children;return(0,c.jsx)(l,{children:e})}},3050:function(n,e,t){t.d(e,{O3:function(){return r},W3:function(){return i},fS:function(){return o}});var r=[{id:11,name:"High"},{id:21,name:"Medium"},{id:31,name:"Low"}],i=[{id:12,name:"Art"},{id:22,name:"Music"},{id:32,name:"Business"},{id:42,name:"Conference"},{id:52,name:"Workshop"},{id:62,name:"Party"},{id:72,name:"Sport"}],o=[{id:13,name:"by name",up:!0},{id:23,name:"by name",up:!1},{id:33,name:"by data",up:!0},{id:43,name:"by data",up:!1},{id:53,name:"by priority",up:!0},{id:63,name:"by priority",up:!1}]},8960:function(n,e,t){t.r(e),t.d(e,{default:function(){return Qn}});var r,i=t(3433),o=t(9439),a=t(2791),l=t(7689),c=t(9414),d=t(2830),s=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function f(n,e){var t=n.title,i=n.titleId,o=u(n,s);return a.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:e,"aria-labelledby":i},o),t?a.createElement("title",{id:i},t):null,r||(r=a.createElement("path",{d:"M12 7L12 17M12 7L16 11M12 7L8 11",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var m,b,h,x,g,y,v,w,j,k,O,Z,P,C,L,S,E,z,M,I,R,W,B,H,A=a.forwardRef(f),D=(t.p,t(168)),N=t(5867),F=N.ZP.div(m||(m=(0,D.Z)(["\n  position: relative;\n  @media screen and (min-width: 1440px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 40px;\n    padding-top: 38px;\n  }\n"]))),Y=N.ZP.h2(b||(b=(0,D.Z)(["\n  color: var(--secondary-text-color);\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  margin-top: 94px;\n  margin-bottom: 24px;\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]))),U=N.ZP.div(h||(h=(0,D.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 24px;\n  padding-top: 20px;\n  padding-bottom: 40px;\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    position: absolute;\n    top: -94px;\n    right: 0;\n    padding-top: 14px;\n  }\n  @media screen and (min-width: 1440px) {\n    justify-content: space-between;\n    margin: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n"]))),V=N.ZP.button(x||(x=(0,D.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  height: 56px;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  background-color: var(--primary-background-color);\n  box-shadow: var(--primary-shadow);\n  outline: none;\n  color: var(--secondary-text-color);\n  font-family: inherit;\n  bottom: -28px;\n  left: 47px;\n  justify-content: space-between;\n  &:hover {\n    border: 1px solid var(--primary-text-color);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:disabled {\n    background-color: var(--btn-disabled-background);\n  }\n  @media screen and (max-width: 767px) {\n    gap: 0;\n    width: 56px;\n  }\n  @media screen and (min-width: 768px) {\n    left: 0;\n  }\n"]))),$=(0,N.ZP)(V)(g||(g=(0,D.Z)(["\n  background-color: var(--primary-text-color);\n  color: var(--btn-accent-color);\n  &:hover {\n    background-color: var(--btn-hover-background);\n    }\n"]))),_=N.ZP.span(y||(y=(0,D.Z)(["\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n"]))),G=N.ZP.svg(v||(v=(0,D.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--secondary-text-color);\n  ",":hover {\n    stroke: var(--primary-text-color);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  \n"])),V),q=N.ZP.div(w||(w=(0,D.Z)(["\n  &.isOpen {\n    position: relative;\n    min-width: 158px;\n    border-radius: 8px;\n    background-color: var(--primary-background-color);\n    box-shadow: var(--primary-shadow);\n  }\n"]))),J=N.ZP.ul(j||(j=(0,D.Z)(["\n  position: absolute;\n  top: 28px;\n  left: 47px;\n  box-shadow: var(--primary-shadow);\n  font-family: 'Poppins';\n  width: 158px;\n  color: var(--secondary-text-color);\n  text-align: start;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  z-index: 100;\n  list-style: none;\n  @media screen and (min-width: 768px){\n    left: 0;\n\n  }\n"]))),K=N.ZP.div(k||(k=(0,D.Z)(["\n  background: repeating-linear-gradient(\n    0deg,\n    var(--primary-background-color),\n    var(--primary-background-color) 29px,\n    var(--border-color) 29px,\n    var(--border-color) 30px\n  );\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n"]))),Q=N.ZP.li(O||(O=(0,D.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n  height: 30px;\n  padding: 8px 24px;\n  color: var(--border-color);\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 14px;\n  &:hover {\n    color: var(--primary-text-color);\n    border-bottom: 1.2px solid var(--primary-text-color);\n  }\n  &:hover svg{\n    stroke: var(--primary-text-color);\n  }\n"]))),T=t(184),X=(0,a.memo)((function(n){var e=n.title,t=n.dropDownList,r=n.onCategoryFilter,i=n.onSort,l=n.icon,c=(0,a.useState)(!1),d=(0,o.Z)(c,2),s=d[0],p=d[1],u=(0,a.useState)({name:e,up:void 0}),f=(0,o.Z)(u,2),m=f[0],b=f[1];return(0,a.useEffect)((function(){m.name!==e&&r&&r(m.name)}),[m.name,e,r]),(0,T.jsxs)(q,{className:s&&"isOpen",children:[(0,T.jsxs)(V,{type:"button",onClick:function(){p(!0)},style:{transition:s&&"transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",width:s&&"158px",position:s&&"absolute",borderBottomRightRadius:s&&0,borderBottomLeftRadius:s&&0},children:[(0,T.jsx)(_,{style:{color:s||m.name!==e?"var(--primary-text-color)":"var(--secondary-text-color)",display:s&&"block"},children:"Sort by"===e&&m.name!==e?"Sort "+m.name:m.name}),(0,T.jsx)(G,{style:{stroke:s||m.name!==e?"var(--primary-text-color)":"var(--secondary-text-color)",rotate:"Sort by"===e&&!m.up&&"180deg"},children:"Sort by"===e&&m.name!==e?(0,T.jsx)(A,{}):l})]}),s&&(0,T.jsx)(J,{children:(0,T.jsxs)(K,{children:["Category"===e&&(0,T.jsx)(Q,{onClick:function(){b({name:e}),r&&r(e),p(!1)},children:"All"},"All"),t.map((function(n){return(0,T.jsxs)(Q,{onClick:function(){b({name:n.name,up:null===n||void 0===n?void 0:n.up}),r&&r(n.name),i&&i(n.name+n.up),p(!1)},children:[(0,T.jsx)("span",{children:n.name}),"Sort by"===e&&(0,T.jsx)(G,{style:{stroke:"var(--border-color)",rotate:!n.up&&"180deg"},children:(0,T.jsx)(A,{})})]},n.id)}))]})})]})})),nn=t(6089),en=t(5451),tn=N.ZP.ul(Z||(Z=(0,D.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 24px;\n  justify-items: center;\n  list-style-type: none;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 24px;\n  }\n  @media screen and (min-width: 1440px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]))),rn=N.ZP.li(P||(P=(0,D.Z)(["\n  position: relative;\n  border-radius: 12px;\n  width: 272px;\n  height: 480px;\n  box-shadow: var(--primary-shadow);\n  background-color: var(--primary-background-color);\n\n  @media screen and (min-width: 768px) {\n    width: 332px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 302px;\n  }\n"]))),on=N.ZP.img(C||(C=(0,D.Z)(["\n  height: 336px;\n  width: 272px;\n  object-fit: cover;\n  border-top-right-radius: 12px;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n\n  @media screen and (min-width: 768px) {\n    width: 332px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 302px;\n  }\n"]))),an=N.ZP.div(L||(L=(0,D.Z)(["\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: flex;\n  gap: 12px;\n"]))),ln=N.ZP.div(S||(S=(0,D.Z)(["\n  padding: 6px 12px;\n  border-radius: 8px;\n  color: var(--primary-text-color);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  background-color: var(--primary-background-color);\n"]))),cn=N.ZP.div(E||(E=(0,D.Z)(["\n  position: absolute;\n  top: 296px;\n  left: 0;\n  right: 0;\n  display: flex;\n  padding: 8px 16px;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--secondary-background-color);\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover &, ",":focus & {\n    transform: translateY(-40px);\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  @media screen and (min-width: 768px) {\n    top: 296px;\n  }\n"])),rn,rn),dn=N.ZP.div(z||(z=(0,D.Z)(["\n  color: var(--primary-text-color);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n"]))),sn=N.ZP.div(M||(M=(0,D.Z)(["\n  padding: 16px;\n  background-color: var(--primary-background-color);\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n\n  ",":hover &, ",":focus & {\n    transform: translateY(-40px);\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"])),rn,rn),pn=N.ZP.h3(I||(I=(0,D.Z)(["\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--title-text-color);\n  margin-bottom: 16px;\n"]))),un=N.ZP.p(R||(R=(0,D.Z)(["\n  height: 60px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--description-text-color);\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]))),fn=N.ZP.div(W||(W=(0,D.Z)(["\n  transform: translateY(100%);\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  justify-content: end;\n  display: none;\n  background-color: transparent;\n  ",":hover &, ",":focus & {\n    display: flex;\n    transform: translateY(0);\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"])),rn,rn),mn=N.ZP.button(B||(B=(0,D.Z)(["\n  cursor: pointer;\n  height: 40px;\n  padding: 10px 24px;\n  border-radius: 8px;\n  background: var(--primary-text-color);\n  margin-top: 16px;\n  margin-right: 0;\n  margin-left: auto;\n  border: none;\n  color: var(--btn-accent-color);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  font-family: inherit;\n\n  &:hover,\n  &:focus {\n    background: var(--btn-hover-background);\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"])));function bn(n){var e=n.data,t=n.onMoreInfoClick,r=n.children,i=(0,l.s0)();return(0,T.jsxs)(tn,{children:[r,e.map((function(n){var e=n.id,r=n.title,o=n.description,a=n.date,l=n.time,c=n.location,d=n.category,s=(n.addPicture,n.priority),p=a.split("").slice(0,5).join("");return(0,T.jsxs)(rn,{children:[(0,T.jsx)(on,{src:en,alt:"A picture of the meeting",loading:"lazy"}),(0,T.jsxs)(an,{children:[(0,T.jsx)(ln,{children:d}),(0,T.jsx)(ln,{children:(0,T.jsx)(nn.U,{value:s,children:s})})]}),(0,T.jsxs)(cn,{children:[(0,T.jsxs)(dn,{children:[p," at ",l]}),(0,T.jsx)(dn,{children:c})]}),(0,T.jsxs)(sn,{children:[(0,T.jsx)(pn,{children:r}),(0,T.jsx)(un,{children:o}),(0,T.jsx)(fn,{children:(0,T.jsx)(mn,{type:"button","aria-label":"Get more information about the event",onClick:function(){return function(n){t(n),i("/info",{replace:!0})}(e)},children:"More info"})})]})]},e)}))]})}var hn=["title","titleId"];function xn(){return xn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},xn.apply(this,arguments)}function gn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function yn(n,e){var t=n.title,r=n.titleId,i=gn(n,hn);return a.createElement("svg",xn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,H||(H=a.createElement("path",{d:"M8.22 12.7199C8.07931 12.5793 8.00018 12.3887 8 12.1899V11.8099C8.0023 11.6114 8.08112 11.4216 8.22 11.2799L13.36 6.14985C13.4539 6.0552 13.5817 6.00195 13.715 6.00195C13.8483 6.00195 13.9761 6.0552 14.07 6.14985L14.78 6.85985C14.8741 6.95202 14.9271 7.07816 14.9271 7.20985C14.9271 7.34154 14.8741 7.46769 14.78 7.55985L10.33 11.9999L14.78 16.4399C14.8747 16.5337 14.9279 16.6615 14.9279 16.7949C14.9279 16.9282 14.8747 17.056 14.78 17.1499L14.07 17.8499C13.9761 17.9445 13.8483 17.9978 13.715 17.9978C13.5817 17.9978 13.4539 17.9445 13.36 17.8499L8.22 12.7199Z"})))}var vn,wn=a.forwardRef(yn),jn=(t.p,["title","titleId"]);function kn(){return kn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},kn.apply(this,arguments)}function On(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Zn(n,e){var t=n.title,r=n.titleId,i=On(n,jn);return a.createElement("svg",kn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,vn||(vn=a.createElement("path",{d:"M15.78 12.7199C15.9207 12.5793 15.9998 12.3887 16 12.1899V11.8099C15.9977 11.6114 15.9189 11.4216 15.78 11.2799L10.64 6.14985C10.5461 6.0552 10.4183 6.00195 10.285 6.00195C10.1517 6.00195 10.0239 6.0552 9.93 6.14985L9.22 6.85985C9.12594 6.95202 9.07293 7.07816 9.07293 7.20985C9.07293 7.34154 9.12594 7.46769 9.22 7.55985L13.67 11.9999L9.22 16.4399C9.12534 16.5337 9.0721 16.6615 9.0721 16.7949C9.0721 16.9282 9.12534 17.056 9.22 17.1499L9.93 17.8499C10.0239 17.9445 10.1517 17.9978 10.285 17.9978C10.4183 17.9978 10.5461 17.9445 10.64 17.8499L15.78 12.7199Z"})))}var Pn,Cn=a.forwardRef(Zn),Ln=(t.p,t(6048)),Sn=t.n(Ln),En=(0,N.ZP)(Sn()).attrs({activeClassName:"active"})(Pn||(Pn=(0,D.Z)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 40px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-background-color);\n  border-radius: 8px;\n  box-shadow: var(--primary-shadow);\n  list-style-type: none;\n\n  li {\n    display: block;\n  }\n  li a {\n    display: block;\n    max-width: 40px;\n    color: var(--divider, #aca7c3);\n    text-align: center;\n    font-size: 18px;\n    font-weight: 800;\n    line-height: normal;\n    cursor: pointer;\n\n    @media screen and (min-width: 768px) {\n      height: 64px;\n      max-width: 64px;\n      padding: 18px;\n    }\n  }\n  li.previous a,\n  li.next a,\n  li.break a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  li.active a {\n    color: var(--primary-text-color);\n    font-weight: 700;\n  }\n  li.disabled a {\n    color: var(--btn-disabled-background);\n  }\n  li.disable,\n  li.disabled a,\n  li.disabled svg {\n    fill: var(--btn-disabled-background);\n    cursor: default;\n  }\n  li svg {\n    fill: var(--primary-text-color);\n  }\n  @media screen and (min-width: 768px) {\n    height: 84px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 588px;\n    margin-left: auto;\n  }\n"])));function zn(n){var e=n.onPageClick,t=n.pageCount,r=window.screen.width;return(0,T.jsx)(T.Fragment,{children:t>1&&(0,T.jsx)(En,{breakLabel:"...",nextLabel:(0,T.jsx)(Cn,{}),onPageChange:function(n){return e(n.selected)},pageRangeDisplayed:r>767?3:1,marginPagesDisplayed:1,pageCount:t,previousLabel:(0,T.jsx)(wn,{}),renderOnZeroPageCount:null})})}var Mn,In=t(3050),Rn=["title","titleId"];function Wn(){return Wn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Wn.apply(this,arguments)}function Bn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Hn(n,e){var t=n.title,r=n.titleId,i=Bn(n,Rn);return a.createElement("svg",Wn({viewBox:"0 0 24 24",width:24,height:24,fill:"none",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,Mn||(Mn=a.createElement("path",{strokeLinecap:"round",strokeWidth:1.5,d:"M14 5a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m4 0h6M10 5H4m12 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0H4m4 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm0 0h12"})))}var An,Dn=a.forwardRef(Hn),Nn=(t.p,["title","titleId"]);function Fn(){return Fn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Fn.apply(this,arguments)}function Yn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Un(n,e){var t=n.title,r=n.titleId,i=Yn(n,Nn);return a.createElement("svg",Fn({width:24,height:24,fill:"none",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,An||(An=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m4 4 5 8v6l6 3v-9l5-8H4Z"})))}var Vn,$n=a.forwardRef(Un),_n=(t.p,["title","titleId"]);function Gn(){return Gn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Gn.apply(this,arguments)}function qn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Jn(n,e){var t=n.title,r=n.titleId,i=qn(n,_n);return a.createElement("svg",Gn({width:24,height:24,fill:"none",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,Vn||(Vn=a.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 4v16m-8-8h16"})))}var Kn=a.forwardRef(Jn),Qn=(t.p,function(n){var e=n.data,t=n.onMoreInfoClick,r=(0,a.useState)(0),s=(0,o.Z)(r,2),p=s[0],u=s[1],f=(0,a.useState)("Category"),m=(0,o.Z)(f,2),b=m[0],h=m[1],x=(0,a.useState)("default"),g=(0,o.Z)(x,2),y=g[0],v=g[1],w=(0,a.useState)([]),j=(0,o.Z)(w,2),k=j[0],O=j[1],Z=(0,l.s0)(),P=window.screen.width,C=P>768?8:6,L=p+C,S=(0,a.useMemo)((function(){return e.slice(p,L)}),[e,L,p]),E=Math.ceil(e.length/C),z=(0,a.useMemo)((function(){return"Category"===b?S:S.filter((function(n){return n.category.includes(b)}))}),[b,S]);(0,a.useMemo)((function(){switch(y){case"default":O(z);break;case"by nametrue":O(z.sort((function(n,e){return n.title.localeCompare(e.title)})));break;case"by namefalse":O(z.sort((function(n,e){return e.title.localeCompare(n.title)})));break;case"by datatrue":O(z.sort((function(n,e){return Number(n.date.split(".").reverse().join(""))-Number(e.date.split(".").reverse().join(""))})));break;case"by datafalse":O(z.sort((function(n,e){return Number(e.date.split(".").reverse().join(""))-Number(n.date.split(".").reverse().join(""))})));break;case"by prioritytrue":O([].concat((0,i.Z)(z.filter((function(n){return"Low"===n.priority}))),(0,i.Z)(z.filter((function(n){return"Medium"===n.priority}))),(0,i.Z)(z.filter((function(n){return"High"===n.priority})))));break;case"by priorityfalse":O([].concat((0,i.Z)(z.filter((function(n){return"High"===n.priority}))),(0,i.Z)(z.filter((function(n){return"Medium"===n.priority}))),(0,i.Z)(z.filter((function(n){return"Low"===n.priority})))));break;default:return void O(z)}}),[y,z]);return(0,T.jsx)("main",{children:(0,T.jsx)(d.$,{children:(0,T.jsxs)(c.W,{children:[(0,T.jsxs)(F,{children:[(0,T.jsx)(Y,{children:"My events"}),(0,T.jsxs)(U,{children:[(0,T.jsx)(X,{title:"Category",dropDownList:In.W3,onCategoryFilter:function(n){return h(n)},icon:(0,T.jsx)($n,{}),"aria-label":"Filter events by category"}),(0,T.jsx)(X,{title:"Sort by",dropDownList:In.fS,onSort:function(n){return v(n)},icon:(0,T.jsx)(Dn,{}),"aria-label":"Choose the type of sorting"}),(0,T.jsxs)($,{type:"button",onClick:function(n){n.preventDefault(),Z("/create",{replace:!0})},children:[(0,T.jsx)(Kn,{"aria-label":"Add new event"}),(0,T.jsx)(_,{children:"Add new event"})]})]})]}),(0,T.jsx)(bn,{data:k,onMoreInfoClick:t}),(0,T.jsx)(zn,{itemsPerPage:P>768?8:6,onPageClick:function(n){var t=n*C%e.length;u(t)},pageCount:E})]})})})})},5451:function(n,e,t){n.exports=t.p+"static/media/Rectangle 347.4e9dd10857c4e9d29926.jpg"}}]);
//# sourceMappingURL=498.808fb28f.chunk.js.map