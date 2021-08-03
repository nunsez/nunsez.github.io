import{v as s,d as e,S as t}from"./vendor.a22d9cfd.js";var a={firstName:"Alexander",lastName:"Mandrikov",profession:"Frontend Developer",avatar:{src:"avatar.jpg",alt:"Avatar"},socialMedia:[{name:"GitHub",src:"logo_github.png",url:"https://github.com/nunsez"},{name:"LinkedIn",src:"logo_linkedin.png",url:"https://www.linkedin.com/in/alex-mandrikov"},{name:"HabrCareer",src:"logo_habrCareer.png",url:"https://career.habr.com/nunsez"},{name:"HakerRank",src:"logo_hakerRank.png",url:"https://www.hackerrank.com/nunsez"}],contacts:[{name:"Location",content:"Krasnoyarsk, Russia",url:"#"},{name:"Web",content:"nunsez.github.io",url:"https://nunsez.github.io/"},{name:"Email",content:"mad.nunsez@gmail.com",url:"mailto:mad.nunsez@gmail.com"}]};const n=()=>{const{firstName:e,lastName:t,profession:n,avatar:l,socialMedia:r,contacts:i}=a;return s("section",null,s("div",{class:"container grid-2"},s("div",{class:"avatar p-5"},s("img",{src:l.src,alt:"Avatar",width:"200",height:"200"})),s("div",{class:"p-5 mt-auto content"},s("h1",{class:"name"},s("span",{class:"first-name"},e),s("br",null),s("span",{class:"last-name"},t)),s("div",{class:"d-flex justify-between align-center flex-wrap"},s("p",{class:"mr-3"},n),s("div",{class:"d-flex gap-x-2"},r.map((e=>s("a",{href:e.url,target:"_blank",key:e.name},s("img",{src:e.src,width:"30",height:"30",class:"rounded"})))))),s("div",{class:"contacts d-flex justify-between align-center flex-wrap gap-x-3"},i.map((e=>s("div",{key:e.name},s("p",{class:"text-bold"},e.name),s("p",{class:"fs-90"},s("a",{href:e.url},e.content)))))))))};var l={header:"Intro",description:"A few lines about me",content:["В процессе разработки применяю стандарт ECMAScript 2015+, придерживаюсь функционального стиля.","Прошел обучение по профессии Фронтенд-программист на образовательном портале Хекслет.",'Помогаю новичкам осваивать профессию программиста, отвечая на вопросы в сообществе Хекслета. В настоящее время читаю книгу С. Макконнелла "Совершенный код". Принимаю участие в Open Source разработке.']};const r=()=>{const{header:e,description:t,content:a}=l;return s("section",null,s("div",{class:"container grid-2"},s("div",{class:"p-5 text-end"},s("p",{class:"text-bold"},e.toUpperCase()),s("p",{class:"fs-90"},t)),s("div",{class:"p-5"},a.map((e=>s("p",{key:e},e))))))};var i={header:"Skills",description:"What I am using",skillsList:[{name:"JavaScript",ico:"skills/js.png",url:"https://262.ecma-international.org/"},{name:"TypeScript",ico:"skills/ts.png",url:"https://www.typescriptlang.org"},{name:"NodeJS",ico:"skills/node.png",url:"https://nodejs.dev/"},{name:"Git",ico:"skills/git.png",url:"https://git-scm.com/"},{name:"Yarn",ico:"skills/yarn.png",url:"https://yarnpkg.com/"},{name:"HTML5",ico:"skills/html5.png",url:"https://html.spec.whatwg.org/"},{name:"CSS",ico:"skills/css3.png",url:"https://www.w3.org/Style/CSS/"},{name:"SCSS",ico:"skills/scss.png",url:"https://sass-lang.com/"},{name:"ReactJS",ico:"skills/react.png",url:"https://reactjs.org"},{name:"Preact",ico:"skills/preact.png",url:"https://preactjs.com/"},{name:"Redux Toolkit",ico:"skills/redux.png",url:"https://redux-toolkit.js.org/"},{name:"Bootstrap",ico:"skills/bootstrap.png",url:"https://getbootstrap.com/"},{name:"ViteJS",ico:"skills/vite.svg",url:"https://vitejs.dev/"},{name:"RegExp",ico:"skills/regexp.png",url:"https://en.wikipedia.org/wiki/Regular_expression"}]};const c=()=>{const{header:e,description:t,skillsList:a}=i;return s("section",null,s("div",{class:"container grid-2"},s("div",{class:"p-5 text-end"},s("p",{class:"text-bold"},e.toUpperCase()),s("p",{class:"fs-90"},t)),s("div",{class:"p-5 skills-grid"},a.map((e=>{const{name:t,ico:a,url:n}=e;return s("a",{href:n,title:`${t} source link`,class:"skills-item"},s("img",{class:"mr-2 rounded",src:a,alt:"ico",height:"25"}),s("span",{class:"text-primary"},t))})))))},o=()=>s("section",null,s("div",{class:"container"},s("h1",null,"Projects Section")));t(s((()=>s(e,null,s("header",null,s(n,null)),s("main",null,s(r,null),s(c,null),s(o,null)))),null),document.body);
