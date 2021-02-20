(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(17),i=a.n(s),r=a(9),o=a(2),l=(a(23),a(4)),d=(a(24),a(11)),j=a(0),b=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("light"))||!1),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){localStorage.setItem("light",JSON.stringify(a))}),[a]),a?document.body.classList.add("light"):document.body.classList.remove("light"),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("li",{className:"nav-text nav-menu-toggle",children:Object(j.jsx)("button",{onClick:function(){return n((function(e){return!e}))},children:a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.f,{})," ",Object(j.jsx)("span",{children:"Dark"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.g,{})," ",Object(j.jsx)("span",{children:"Light"})]})})})})};var p=function(){return Object(j.jsx)("aside",{children:Object(j.jsx)("nav",{className:"nav-menu",children:Object(j.jsxs)("ul",{className:"nav-menu-items",children:[Object(j.jsx)("li",{className:"nav-text ",children:Object(j.jsxs)(r.b,{to:"/",exact:!0,children:[Object(j.jsx)(l.h,{}),Object(j.jsx)("span",{children:"Sobre"})]})}),Object(j.jsx)("li",{className:"nav-text ",children:Object(j.jsxs)(r.b,{to:"projects",children:[Object(j.jsx)(l.b,{}),Object(j.jsx)("span",{children:"Projetos"})]})}),Object(j.jsx)("li",{className:"nav-text ",children:Object(j.jsxs)(r.b,{to:"contact",children:[Object(j.jsx)(l.e,{}),Object(j.jsx)("span",{children:"Contato"})]})}),Object(j.jsx)(b,{})]})})})},m=(a(31),a.p+"static/media/icon.abe6e24d.jpeg"),u=function(e){return Object(c.useEffect)((function(){document.title="Luciane Santos | ".concat(e.title),document.querySelector('meta[name="description"]').setAttribute("content",e.description)}),[e]),Object(j.jsx)(j.Fragment,{})};var h=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{title:"Sobre",description:"Desenvolvedora front-end e UI Designer"}),Object(j.jsx)("main",{className:"about animeLeft",children:Object(j.jsxs)("div",{className:"about-content",children:[Object(j.jsx)("div",{className:"about-content-item",children:Object(j.jsx)("img",{src:m,alt:"",className:"about-image"})}),Object(j.jsxs)("div",{className:"about-content-item",children:[Object(j.jsx)("h1",{children:"Luciane Santos"}),Object(j.jsxs)("h3",{children:["Front-End developer & ","\n","UI Designer"]}),Object(j.jsxs)("p",{children:["Amante de tecnologia e design, autodidata na programa\xe7\xe3o e estou sempre querendo aprender mais sobre o assunto. Possuo conhecimento em"," ",Object(j.jsx)("u",{className:"underline",children:"HTML5, CSS3 e JavaScript"}),". No momento estou estudando"," ",Object(j.jsx)("u",{className:"underline",children:"ReactJS"}),", tamb\xe9m conhe\xe7o um pouco de"," ",Object(j.jsx)("u",{className:"underline",children:"VueJS"}),". Meu foco \xe9 apenas no front-end e na linguagem"," ",Object(j.jsx)("u",{className:"underline",children:"JavaScript"}),", mas tenho interesse em"," ",Object(j.jsx)("u",{className:"underline",children:"UI Design"})," e uso ",Object(j.jsx)("u",{className:"underline",children:"Figma"})," para cria\xe7\xe3o de interfaces, tamb\xe9m tenho familiaridade com"," ",Object(j.jsx)("u",{className:"underline",children:"Adobe Photoshop"}),", para edi\xe7\xe3o de imagens e um pouco de cria\xe7\xe3o de interfaces."]})]}),Object(j.jsx)("nav",{className:"about-content-item",children:Object(j.jsxs)("ul",{className:"about-social",children:[Object(j.jsx)("li",{"data-tooltip":"Github",children:Object(j.jsx)("a",{href:"https://github.com/lucianesantcs",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(l.c,{})})}),Object(j.jsx)("li",{"data-tooltip":"Linkedin",children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/lucianesantcs/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(l.d,{})})}),Object(j.jsx)("li",{"data-tooltip":"Dribbble",children:Object(j.jsx)("a",{href:"https://dribbble.com/lucianesantos",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(l.a,{})})}),Object(j.jsx)("li",{"data-tooltip":"Email",children:Object(j.jsx)("a",{href:"mailto:lucianesantcs@gmail.com",children:Object(j.jsx)(l.e,{})})})]})})]})})]})},g=(a(32),function(e){var t=e.projectImage,a=e.name,c=e.previewURL,n=e.githubURL,s=e.figmaURL,i=e.tags,r=e.description;return Object(j.jsxs)("article",{className:"projects-content-item",children:[Object(j.jsx)("div",{className:"projects-image",children:Object(j.jsx)("img",{src:t,alt:a})}),Object(j.jsxs)("div",{className:"projects-info",children:[Object(j.jsx)("div",{className:"projects-info-text",children:Object(j.jsx)("span",{children:void 0===c?a:Object(j.jsx)("a",{href:c,target:"_blank",rel:"noreferrer","data-tooltip":"Preview",children:a})})}),Object(j.jsx)("div",{className:"projects-info-horizontal-divider"}),Object(j.jsx)("div",{className:"projects-info-text",children:Object(j.jsxs)("span",{children:[void 0!==s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("a",{href:s,target:"_blank",rel:"noreferrer","data-tooltip":"Design",children:"figma"})," ",Object(j.jsx)("span",{children:" / "})," "]}):"",void 0!==n?Object(j.jsx)("a",{href:n,target:"_blank",rel:"noreferrer","data-tooltip":"C\xf3digo",children:"github"}):""]})})]}),Object(j.jsxs)("div",{className:"projects-info",children:[Object(j.jsx)("div",{className:"projects-info-tags",children:Object(j.jsx)("span",{children:i})}),Object(j.jsx)("div",{className:"projects-info-description",children:Object(j.jsx)("span",{children:r})})]})]})}),x=a.p+"static/media/get-coffee.f5c36374.png",O=a.p+"static/media/selfcare.3812569e.png",f=a.p+"static/media/quizz.ad0124f3.png",v=a.p+"static/media/orcamento.fb12626c.png",L=a.p+"static/media/doe.bc733875.png",N=a.p+"static/media/todo.ec77720b.png",w=a.p+"static/media/amazinggraph.a057ab52.png",R=a.p+"static/media/proffy.17a75d8b.png",U=a.p+"static/media/be-the-hero.abf30391.png",k=a.p+"static/media/work-plin.f2e39f50.png",I=a.p+"static/media/credit-card.f16734e3.png",S=a.p+"static/media/online-library.a7bf889e.png",y=a.p+"static/media/ultra-landing-page.1cbb9a97.png";var z=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],s=[{projectImage:x,name:"get coffee",previewURL:"https://lucianesantcs.github.io/get-coffee-source/",githubURL:"https://github.com/lucianesantcs/get-coffee-source/",figmaURL:"https://www.figma.com/file/lVkh41YvYiMposXwaJXOYO/get-coffee-layout?node-id=0%3A1",tags:["html","css","grid","font-end","mine","ui-design","responsive"],description:"C\xf3digo da landing page Get Coffee do desafio no DevChallenge"},{projectImage:O,name:"selfcare landing page",previewURL:"https://lucianesantcs.github.io/selfcare/",githubURL:"https://github.com/lucianesantcs/selfcare/",tags:["html","css","flexbox","font-end","mine","responsive"],description:"Landing page de uma loja online para produtos de beleza"},{projectImage:w,name:"amazing-graph",previewURL:"https://lucianesantcs.github.io/amazing-graph/",githubURL:"https://github.com/lucianesantcs/amazing-graph/",tags:["html","css","sass","flexbox","font-end","mine","responsive"],description:"Landing page para site de cria\xe7\xe3o de gr\xe1ficos"},{projectImage:L,name:"doe",githubURL:"https://github.com/lucianesantcs/doe/",tags:["javascript","nodejs","font-end","back-end","postgresql","nunjucks","contributed"],description:"Sistema de cadastro para doadores de sangue, desenvolvido na Maratona Dev"},{projectImage:y,name:"ultra landing page",githubURL:"https://github.com/lucianesantcs/ultra-landing-page",previewURL:"https://ultra-landing-page.vercel.app/",tags:["javascript","reactjs","font-end","contributed","responsive","styled-components","react-hooks"],description:"Landing page de uma ag\xeancia de marketing"},{projectImage:R,name:"proffy",githubURL:"https://github.com/lucianesantcs/proffy/",tags:["javascript","nodejs","reactjs","font-end","back-end","sqlite","react-native","typescript","express","contributed","responsive"],description:"Aplica\xe7\xe3o que conecta alunos e professores"},{projectImage:U,name:"be-the-hero",githubURL:"https://github.com/lucianesantcs/be-the-hero/",tags:["javascript","nodejs","reactjs","font-end","back-end","sqlite","react-native","express","contributed","responsive"],description:"Aplica\xe7\xe3o que conecta ONG's a pessoas que est\xe3o dispostas a ajud\xe1-los monetariamente nos casos"},{projectImage:N,name:"to-do app",previewURL:"https://christyanbrayan.github.io/to-do/",githubURL:"https://github.com/lucianesantcs/to-do/",tags:["flexbox","javascript","font-end","local-storage","contributed"],description:"Lista de To-Do desenvolvido no curso b\xe1sico da Rocketseat"},{projectImage:f,name:"quiz de programa\xe7\xe3o",previewURL:"https://lucianesantcs.github.io/quizz/",githubURL:"https://github.com/lucianesantcs/quizz/",tags:["javascript","mine","font-end","responsive","contributed"],description:"Simples quiz desenvolvido com html, css, e javascript"},{projectImage:v,name:"or\xe7amento pessoal",previewURL:"https://lucianesantcs.github.io/orcamento-pessoal/",githubURL:"https://github.com/lucianesantcs/orcamento-pessoal/",tags:["javascript","bootstrap","font-end","local-storage","contributed"],description:"Aplicativo que cadastra e permite a consulta de despesas"},{projectImage:k,name:"work plin",previewURL:"https://lucianesantcs.github.io/work-plin/",githubURL:"https://github.com/lucianesantcs/work-plin/",tags:["html","css","flexbox","grid","font-end","mine","responsive"],description:"Landing page de loca\xe7\xe3o de co-work online"},{projectImage:I,name:"credit card checkout",previewURL:"https://dribbble.com/shots/14206123-Credit-Card-Checkout",figmaURL:"https://www.figma.com/file/zzMpg4F3L0n1DwNFjeQr85/credit-card",tags:["ui-design","front-end"],description:"Formul\xe1rio de cart\xe3o de cr\xe9dito de uma loja de roupas"},{projectImage:S,name:"sing up modal",previewURL:"https://dribbble.com/shots/14189122-Online-Library-Modal",figmaURL:"https://www.figma.com/file/CGZvEtvbSiMTJ3wlJA41wR/online-library-modal",tags:["ui-design","front-end"],description:"Modal de sign up de uma livraria online"}];function i(e){var t=e.target.value;n(t)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{title:"Projetos",description:"Lista de Projetos"}),Object(j.jsx)("section",{className:"projects animeLeft",children:Object(j.jsxs)("div",{className:"projects-content",children:[Object(j.jsx)("div",{className:"projects-button",children:[{value:"all",text:"todos os projetos",active:!0},{value:"mine",text:"meu c\xf3digo",active:!1},{value:"contributed",text:"contribui\xe7\xe3o",active:!1},{value:"ui-design",text:"layouts",active:!1},{value:"html",text:"html & css",active:!1},{value:"javascript",text:"javascript",active:!1},{value:"reactjs",text:"reactjs",active:!1},{value:"font-end",text:"font-end",active:!1},{value:"back-end",text:"back-end",active:!1}].map((function(e){return Object(j.jsx)("button",{value:e.value,className:(t=e.value,t===a?"active":null),onClick:i,children:e.text},e.value);var t}))}),s.filter((function(e){return""===a||"all"===a||e.tags.includes(a)?e:null})).map((function(e){return Object(j.jsx)(g,{projectImage:e.projectImage,name:e.name,previewURL:e.previewURL,githubURL:e.githubURL,tags:e.tags.toString().replace(/,/g," #").replace(/\b/,"#"),figmaURL:e.figmaURL,description:e.description},e.name)}))]})})]})},q=(a(33),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{title:"Contato",description:"Onde me encontrar"}),Object(j.jsx)("section",{className:"contact animeLeft",children:Object(j.jsxs)("div",{className:"contact-content",children:[Object(j.jsxs)("div",{className:"contact-content-item",children:[Object(j.jsx)("h2",{children:"Onde me encontrar"}),Object(j.jsxs)("p",{children:["Entre em contato atrav\xe9s das minhas redes sociais ou enviando um e-mail para"," ",Object(j.jsx)("a",{href:"mailto:lucianesantcs@gmail.com",children:Object(j.jsx)("u",{className:"underline",children:Object(j.jsx)("strong",{children:"lucianesantcs@gmail.com"})})})," ","para assuntos sobre contrata\xe7\xe3o em vagas Front-End J\xfanior, freelance em projetos pequenos, colabora\xe7\xf5es, ou at\xe9 mesmo se precisar de ajuda com algum projeto."]})]}),Object(j.jsx)("div",{className:"contact-content-item-horizontal-divider"}),Object(j.jsx)("nav",{className:"contact-content-item",children:Object(j.jsxs)("ul",{className:"contact-social",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)(l.c,{}),Object(j.jsx)("a",{href:"https://github.com/lucianesantcs",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("span",{children:"Github"})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(l.d,{}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/lucianesantcs/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("span",{children:"Linkedin"})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(l.a,{}),Object(j.jsx)("a",{href:"https://dribbble.com/lucianesantos",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("span",{children:"Dribbble"})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(l.e,{}),Object(j.jsx)("a",{href:"mailto:lucianesantcs@gmail.com",children:Object(j.jsx)("span",{children:"Email"})})]})]})})]})})]})});var F=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(p,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",component:h,exact:!0}),Object(j.jsx)(o.a,{path:"/projects",component:z,exact:!0}),Object(j.jsx)(o.a,{path:"/contact",component:q,exact:!0})]})]})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8c8eb620.chunk.js.map