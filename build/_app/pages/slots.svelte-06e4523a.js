import{S as ue,i as fe,s as pe,e as c,k as _,t as B,c as m,a as f,d as i,m as w,h as N,K as me,b as n,g as le,G as t,M as ge,j as se,n as re,x as F,L as $e,y as j,z,r as A,p as K,C as O}from"../chunks/index-a83666ae.js";class ae{constructor(e,a,l,r,p,g){this.slotName=e,this.commonSlot=a,this.uncommonSlot=l,this.rareSlot=r,this.multiplier=p,this.description=g}GetRandomSlot(){let e=Math.floor(Math.random()*11);return e<5?this.commonSlot:e<9?this.uncommonSlot:this.rareSlot}GetRandomRow(){return[this.GetRandomSlot(),this.GetRandomSlot(),this.GetRandomSlot()]}Calculate(e){return e[0]==e[1]&&e[1]==e[2]?e[0]==this.commonSlot?2*this.multiplier:e[0]==this.uncommonSlot?3*this.multiplier:4*this.multiplier:0}}function ve(o){let e,a,l,r,p,g,u,h,M=o[0].slotName+"",d,S,$,b,V=5-o[0].multiplier+"",v,T,s,k,y=o[0].description+"",E,D,C,R,W,X,H,Y,Z,L,ee,te,oe;return{c(){e=c("a"),a=c("div"),l=c("figure"),r=c("img"),g=_(),u=c("div"),h=c("h2"),d=B(M),S=_(),$=c("div"),b=B("Edge "),v=B(V),T=B(".5%"),s=_(),k=c("p"),E=B(y),D=_(),C=c("div"),R=c("div"),W=B("Slot"),X=_(),H=c("div"),Y=B("Profitable"),Z=_(),L=c("div"),ee=B("Cappin'"),this.h()},l(I){e=m(I,"A",{href:!0});var G=f(e);a=m(G,"DIV",{class:!0});var x=f(a);l=m(x,"FIGURE",{});var ie=f(l);r=m(ie,"IMG",{src:!0,alt:!0,width:!0,height:!0}),ie.forEach(i),g=w(x),u=m(x,"DIV",{class:!0});var P=f(u);h=m(P,"H2",{class:!0});var J=f(h);d=N(J,M),S=w(J),$=m(J,"DIV",{class:!0});var Q=f($);b=N(Q,"Edge "),v=N(Q,V),T=N(Q,".5%"),Q.forEach(i),J.forEach(i),s=w(P),k=m(P,"P",{});var ne=f(k);E=N(ne,y),ne.forEach(i),D=w(P),C=m(P,"DIV",{class:!0});var q=f(C);R=m(q,"DIV",{class:!0});var he=f(R);W=N(he,"Slot"),he.forEach(i),X=w(q),H=m(q,"DIV",{class:!0});var de=f(H);Y=N(de,"Profitable"),de.forEach(i),Z=w(q),L=m(q,"DIV",{class:!0});var ce=f(L);ee=N(ce,"Cappin'"),ce.forEach(i),q.forEach(i),P.forEach(i),x.forEach(i),G.forEach(i),this.h()},h(){me(r.src,p=o[0].rareSlot)||n(r,"src",p),n(r,"alt",""),n(r,"width","200px"),n(r,"height","200px"),n($,"class","badge badge-secondary"),n(h,"class","card-title"),n(R,"class","badge badge-outline"),n(H,"class","badge badge-outline"),n(L,"class","badge badge-outline"),n(C,"class","card-actions justify-end"),n(u,"class","card-body"),n(a,"class","card w-96 bg-base-100 shadow-xl"),n(e,"href","/slot")},m(I,G){le(I,e,G),t(e,a),t(a,l),t(l,r),t(a,g),t(a,u),t(u,h),t(h,d),t(h,S),t(h,$),t($,b),t($,v),t($,T),t(u,s),t(u,k),t(k,E),t(u,D),t(u,C),t(C,R),t(R,W),t(C,X),t(C,H),t(H,Y),t(C,Z),t(C,L),t(L,ee),te||(oe=ge(e,"click",o[1]),te=!0)},p(I,[G]){G&1&&!me(r.src,p=I[0].rareSlot)&&n(r,"src",p),G&1&&M!==(M=I[0].slotName+"")&&se(d,M),G&1&&V!==(V=5-I[0].multiplier+"")&&se(v,V),G&1&&y!==(y=I[0].description+"")&&se(E,y)},i:re,o:re,d(I){I&&i(e),te=!1,oe()}}}function _e(o,e,a){let{slots:l}=e;const r=()=>{window.slotGame=l};return o.$$set=p=>{"slots"in p&&a(0,l=p.slots)},[l,r]}class U extends ue{constructor(e){super(),fe(this,e,_e,ve,pe,{slots:0})}}function we(o){let e,a,l,r,p,g,u,h,M,d,S,$,b,V,v,T;return r=new U({props:{slots:o[0][0]}}),g=new U({props:{slots:o[0][1]}}),h=new U({props:{slots:o[0][2]}}),S=new U({props:{slots:o[0][Math.floor(Math.random()*o[0].length)]}}),b=new U({props:{slots:o[0][Math.floor(Math.random()*o[0].length)]}}),v=new U({props:{slots:o[0][Math.floor(Math.random()*o[0].length)]}}),{c(){e=_(),a=c("div"),l=c("div"),F(r.$$.fragment),p=_(),F(g.$$.fragment),u=_(),F(h.$$.fragment),M=_(),d=c("div"),F(S.$$.fragment),$=_(),F(b.$$.fragment),V=_(),F(v.$$.fragment),this.h()},l(s){$e('[data-svelte="svelte-1eb4wcw"]',document.head).forEach(i),e=w(s),a=m(s,"DIV",{class:!0});var y=f(a);l=m(y,"DIV",{class:!0});var E=f(l);j(r.$$.fragment,E),p=w(E),j(g.$$.fragment,E),u=w(E),j(h.$$.fragment,E),E.forEach(i),M=w(y),d=m(y,"DIV",{class:!0});var D=f(d);j(S.$$.fragment,D),$=w(D),j(b.$$.fragment,D),V=w(D),j(v.$$.fragment,D),D.forEach(i),y.forEach(i),this.h()},h(){document.title="Slots",n(l,"class","flex flex-row w-full gap-4"),n(d,"class","flex flex-row w-full gap-4"),n(a,"class","flex flex-col gap-4 p-6")},m(s,k){le(s,e,k),le(s,a,k),t(a,l),z(r,l,null),t(l,p),z(g,l,null),t(l,u),z(h,l,null),t(a,M),t(a,d),z(S,d,null),t(d,$),z(b,d,null),t(d,V),z(v,d,null),T=!0},p:re,i(s){T||(A(r.$$.fragment,s),A(g.$$.fragment,s),A(h.$$.fragment,s),A(S.$$.fragment,s),A(b.$$.fragment,s),A(v.$$.fragment,s),T=!0)},o(s){K(r.$$.fragment,s),K(g.$$.fragment,s),K(h.$$.fragment,s),K(S.$$.fragment,s),K(b.$$.fragment,s),K(v.$$.fragment,s),T=!1},d(s){s&&i(e),s&&i(a),O(r),O(g),O(h),O(S),O(b),O(v)}}}function Se(o){return[[new ae("Degen Candy","https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png","https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png","https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png",3,"The candy of Degens, do you dear to eat it?"),new ae("Shoe Craze","https://api.lorem.space/image/shoes?w=200&h=200&hash=8B7BCDC2","https://api.lorem.space/image/shoes?w=200&h=200&hash=BDC01094","https://api.lorem.space/image/shoes?w=200&h=200&hash=2D297A22",2,"New Shiny shoes for your collection!"),new ae("Turbo Twister","https://api.lorem.space/image/car?w=200&h=200&hash=8B7BCDC2","https://api.lorem.space/image/car?w=200&h=200&hash=225E6693","https://api.lorem.space/image/car?w=200&h=150&hash=4F32C4CF",4,"Cars that will blow your mind, not litteraly...")]]}class Ee extends ue{constructor(e){super(),fe(this,e,Se,we,pe,{})}}export{Ee as default};