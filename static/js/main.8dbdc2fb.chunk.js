(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/myAvatar.c219eb07.svg"},22:function(e,a,t){e.exports=t(50)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(11),r=t.n(s),c=(t(27),t(1)),m=t(2),i=t(4),o=t(3),d=(t(28),t(29),t(5)),u=(t(39),function(e){return l.a.createElement("button",{className:"toggle-button",onClick:e.click},l.a.createElement("div",{className:"toggle-button_line"}),l.a.createElement("div",{className:"toggle-button_line"}),l.a.createElement("div",{className:"toggle-button_line"}))}),E=function(e){return l.a.createElement("header",{className:"toolbar"},l.a.createElement("nav",{className:"toolbar_navigation"},l.a.createElement("div",{className:"toolbar_name"},l.a.createElement("span",{className:"name"},"SAYAK GHOSH"),l.a.createElement("span",{className:"profession"},"Software Engineer")),l.a.createElement("div",{className:"spacer"}),l.a.createElement("div",{className:"toolbar_navigation-items"},l.a.createElement("ul",null,l.a.createElement(d.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:1e3},l.a.createElement("li",null,l.a.createElement("span",null,"Home"))),l.a.createElement(d.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:1e3},l.a.createElement("li",null,l.a.createElement("span",null,"About Me"))),l.a.createElement(d.Link,{activeClass:"active",to:"academics",spy:!0,smooth:!0,offset:-70,duration:1e3},l.a.createElement("li",null,l.a.createElement("span",null,"Academics"))),l.a.createElement(d.Link,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:1e3},l.a.createElement("li",null,l.a.createElement("span",null,"Experiences"))),l.a.createElement(d.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:-70,duration:1e3},l.a.createElement("li",null,l.a.createElement("span",null,"Skills"))),l.a.createElement(d.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:1e3},l.a.createElement("li",null,l.a.createElement("span",null,"Contact Me"))))),l.a.createElement("div",{className:"toolbar__toggle-button"},l.a.createElement(u,{click:e.drawerClickhandler}))))},p=(t(40),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e="side-drawer";return this.props.show&&(e="side-drawer open"),l.a.createElement("nav",{className:e},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},l.a.createElement("span",null,"About Me"))),l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"academics",spy:!0,smooth:!0,offset:-70,duration:500},l.a.createElement("span",null,"Academics "))),l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},l.a.createElement("span",null,"Experiences"))),l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:-70,duration:500},l.a.createElement("span",null,"Skills"))),l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},l.a.createElement("span",null,"Contact Me")))))}}]),t}(l.a.Component)),N=(t(41),function(e){return l.a.createElement("div",{className:"backdrop",onClick:e.click})}),h=(t(42),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).drawerToggleClickHandler=function(){n.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},n.backdropClickHandler=function(){n.setState({sideDrawerOpen:!1})},n.handleScroll=function(){n.setState({show:window.scrollY>500,sideDrawerOpen:!1})},n.state={sideDrawerOpen:!1,show:!1},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=l.a.createElement(N,{click:this.backdropClickHandler})),l.a.createElement("div",{className:this.state.show?"main-toolbar":"main-toolbar-none"},l.a.createElement(E,{drawerClickhandler:this.drawerToggleClickHandler}),l.a.createElement(p,{show:this.state.sideDrawerOpen}),e)}}]),t}(n.Component));t(43);var v=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("ul",{className:"ul"},l.a.createElement("li",{className:"li"},l.a.createElement("a",{className:"a",href:"https://www.facebook.com/profile.php?id=100008158302121",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("span",{className:"span"}))),l.a.createElement("li",{className:"li"},l.a.createElement("a",{className:"a",href:"https://twitter.com/SayakGh27477453?s=08",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("span",{className:"span"}))),l.a.createElement("li",{className:"li"},l.a.createElement("a",{className:"a",href:"https://github.com/sayak231",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("span",{className:"span"}))),l.a.createElement("li",{className:"li"},l.a.createElement("a",{className:"a",href:"https://www.linkedin.com/in/sayak-g-b4434ba0/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("span",{className:"span"}))),l.a.createElement("li",{className:"li"},l.a.createElement("a",{className:"a",href:"https://www.instagram.com/shaky_sayak/?hl=en",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("span",{className:"span"})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"footer-details"},l.a.createElement("span",{className:"footer-name"},"SAYAK GHOSH",l.a.createElement("br",null)),l.a.createElement("span",{className:"footer-copyright"},l.a.createElement("i",{className:"fa fa-copyright","aria-hidden":"true"}),"\xa0Copyright. All rights reserved.")))},k=t(6),f=t.n(k),b=(t(10),t(44),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e,n){var l;return Object(c.a)(this,t),l=a.call(this,e,n),f.a.init({duration:2e3}),l}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about",className:"about-main-container"},l.a.createElement("div",{className:"about-left-container"},l.a.createElement("h1",{className:"description-about-me"},l.a.createElement("p",{"data-aos":"fade-right","data-aos-mirror":"true","data-aos-once":"true",className:"underlined"},"A Software Engineer and Developer, enthusiastic about Full Stack Development and implementation of Machine Learning in Web and Mobile Applications..."),l.a.createElement("p",{"data-aos":"fade-in","data-aos-mirror":"true","data-aos-once":"true",className:"underlined underlined--gradient"},"...Currently working as a Programmer Analyst Trainee at Cognizant Technology Solutions."),l.a.createElement("p",{"data-aos":"fade-left","data-aos-mirror":"true","data-aos-once":"true",className:"underlined underlined--reverse"},"A smart engineer and a hard worker, trying to better the world of Software Development !!!"))),l.a.createElement("div",{className:"about-right-container"},l.a.createElement("div",{className:"neons"},l.a.createElement("h1",{className:"about-me"},l.a.createElement("em",null,"ABOUT",l.a.createElement("br",null),"ME")))))}}]),t}(l.a.Component)),g=(t(45),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e,n){var l;return Object(c.a)(this,t),l=a.call(this,e,n),f.a.init({duration:2e3}),l}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"academics",className:"academics-main-cont"},l.a.createElement("div",{className:"academics-left-container"},l.a.createElement("span",{"data-aos":"fade-out","data-aos-mirror":"true","data-aos-once":"true",className:"aca-header"},"EDUCATION",l.a.createElement("br",null))),l.a.createElement("div",{className:"academics-right-container"},l.a.createElement("div",{"data-aos":"fade-down","data-aos-delay":"40","data-aos-mirror":"true","data-aos-once":"true",className:"courses-container"},l.a.createElement("div",{className:"course"},l.a.createElement("div",{className:"course-preview"},l.a.createElement("h6",null,"Course"),l.a.createElement("h2",null,"Bachelor in Technology"),l.a.createElement("h5",null,"2016 - 2020")),l.a.createElement("div",{className:"course-info"},l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress"}),l.a.createElement("span",{className:"progress-text"},"Completed")),l.a.createElement("h6",null,"INSTITUTION"),l.a.createElement("h2",null,"SRM INSTITUTE OF SCIENCE AND TECHNOLOGY"),l.a.createElement("h5",null," Major:- Information Technology"),l.a.createElement("h5",null,"Marks:- 75.46 %")))),l.a.createElement("div",{"data-aos":"fade-in","data-aos-delay":"40","data-aos-mirror":"true","data-aos-once":"true",className:"courses-container"},l.a.createElement("div",{className:"course"},l.a.createElement("div",{className:"course-info"},l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress"}),l.a.createElement("span",{className:"progress-text"},"Completed")),l.a.createElement("h6",null,"INSTITUTION"),l.a.createElement("h2",null,"DON BOSCO SCHOOL, LILUAH"),l.a.createElement("h5",null,"Major:- Science"),l.a.createElement("h5",null,"Marks:- 92.75 %")),l.a.createElement("div",{className:"course-preview"},l.a.createElement("h6",null,"Course"),l.a.createElement("h2",null,"ISC / 12",l.a.createElement("sup",null,"th")," Standard"),l.a.createElement("h5",null,"2016")))),l.a.createElement("div",{"data-aos":"slide-up","data-aos-delay":"40","data-aos-mirror":"true","data-aos-once":"true",className:"courses-container"},l.a.createElement("div",{className:"course"},l.a.createElement("div",{className:"course-preview"},l.a.createElement("h6",null,"Course"),l.a.createElement("h2",null,"ICSE / 10",l.a.createElement("sup",null,"th")," Standard"),l.a.createElement("h5",null,"2014")),l.a.createElement("div",{className:"course-info"},l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress"}),l.a.createElement("span",{className:"progress-text"},"Completed")),l.a.createElement("h6",null,"INSTITUTION"),l.a.createElement("h2",null,"DON BOSCO SCHOOL, LILUAH"),l.a.createElement("h5",null,"Marks:- 88.20 %"))))))}}]),t}(n.Component)),y=(t(46),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e,n){var l;return Object(c.a)(this,t),(l=a.call(this,e,n)).curlyStart=function(){return"{"},l.curlyEnd=function(){return"}"},f.a.init({duration:1e3}),l}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"work",className:"work-main-container"},l.a.createElement("div",{className:"work-left-container"},l.a.createElement("div",{className:"work-left-cont"},l.a.createElement("div",{className:"work-text-box"},l.a.createElement("h1",{"data-aos":"slide-right","data-aos-delay":"200","data-aos-mirror":"true","data-aos-once":"true",className:"work-h1"},"Work Experiences"),l.a.createElement("h1",{"data-aos":"slide-right","data-aos-delay":"100","data-aos-mirror":"true","data-aos-once":"true",className:"work-h1"},"Work Experiences")))),l.a.createElement("div",{className:"work-right-containerr"},l.a.createElement("div",{className:"workk-content"},l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"40","data-aos-mirror":"true","data-aos-once":"true",className:"workk-card"},l.a.createElement("div",{className:"workk-card__side workk-card__side--front"},l.a.createElement("div",{className:"workk-card__cont"},l.a.createElement("span",{className:"blue"},l.a.createElement("code",null,"<h1>")),l.a.createElement("span",null,l.a.createElement("span",{className:"green"},"PROGRAMMER ANALYST TRAINEE"),l.a.createElement("span",{className:"blue"},l.a.createElement("code",null,"</h1>"))))),l.a.createElement("div",{className:"workk-card__side workk-card__side--back"},l.a.createElement("div",{className:"workk-card__cta"},l.a.createElement("p",null,l.a.createElement("span",{className:"purple"},"const")," description ",l.a.createElement("span",{className:"cyan"},"=")," ",this.curlyStart(),l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Company"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Cognizant Technology Solutions'"),",",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Location"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Chennai, Tamil Nadu"),"',",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Duration"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Aug, 2020 - Current'"),",",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"E-mail"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Sayak.Ghosh@cognizant.com'"),l.a.createElement("br",null)," ",this.curlyEnd(),";")))),l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"70","data-aos-mirror":"true","data-aos-once":"true",className:"workk-card"},l.a.createElement("div",{className:"workk-card__side workk-card__side--front"},l.a.createElement("div",{className:"workk-card__cont"},l.a.createElement("span",{className:"blue"},l.a.createElement("code",null,"<h1>")),l.a.createElement("span",null,l.a.createElement("span",{className:"green"},"SAP REVIEW INTERN"),l.a.createElement("span",{className:"blue"},l.a.createElement("code",null,"</h1>"))))),l.a.createElement("div",{className:"workk-card__side workk-card__side--back"},l.a.createElement("div",{className:"workk-card__cta"},l.a.createElement("p",null,l.a.createElement("span",{className:"purple"},"const")," description ",l.a.createElement("span",{className:"cyan"},"=")," ",this.curlyStart(),l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Company"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'ITC Limited'"),",",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Location"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Kolkata, West BEngal"),"',",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Duration"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Dec, 2018 - Jan, 2019'"),",",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Brief"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Knowledge on various aspects of SAP and ERP business was acquired and review on SAP codes and their uses by employees was carried out.'"),l.a.createElement("br",null)," ",this.curlyEnd(),";")))),l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-mirror":"true","data-aos-once":"true",className:"workk-card"},l.a.createElement("div",{className:"workk-card__side workk-card__side--front"},l.a.createElement("div",{className:"workk-card__cont"},l.a.createElement("span",{className:"blue"},l.a.createElement("code",null,"<h1>")),l.a.createElement("span",null,l.a.createElement("span",{className:"green"},"WEB DEVELOPMENT TRAINEE"),l.a.createElement("span",{className:"blue"},l.a.createElement("code",null,"</h1>"))))),l.a.createElement("div",{className:"workk-card__side workk-card__side--back"},l.a.createElement("div",{className:"workk-card__cta"},l.a.createElement("p",null,l.a.createElement("span",{className:"purple"},"const")," description ",l.a.createElement("span",{className:"cyan"},"=")," ",this.curlyStart(),l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Company"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Globsyn Technologies'"),",",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Location"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Kolkata, West BEngal"),"',",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Duration"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'May, 2018'"),",",l.a.createElement("br",null),l.a.createElement("span",{className:"space red"},"Brief"),l.a.createElement("span",{className:"cyan"},":")," ",l.a.createElement("span",{className:"green"},"'Training was given on HTML, CSS, PHP and MySQL. Using the above technologies and JavaScript, an Online Food Delivery Web Application was made.'"),l.a.createElement("br",null)," ",this.curlyEnd(),";")))))))}}]),t}(n.Component)),w=(t(47),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e,n){var l;return Object(c.a)(this,t),l=a.call(this,e,n),f.a.init({duration:2e3}),l}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"skills",className:"skills-main-container"},l.a.createElement("div",{className:"skills-bars-container"},l.a.createElement("h2",{className:"skills-head"},"Technical \xa0Skills"),l.a.createElement("div",{className:"skills-skills"},l.a.createElement("span",{className:"skills-Name"},"java"),l.a.createElement("div",{className:"skills-percent"},l.a.createElement("div",{"data-aos":"slide-right","data-aos-mirror":"true","data-aos-once":"true",style:{width:"70%"},className:"skills-progress"})),l.a.createElement("span",{className:"skills-Value"},"70%")),l.a.createElement("div",{className:"skills-skills"},l.a.createElement("span",{className:"skills-Name"},"JavaScript"),l.a.createElement("div",{className:"skills-percent"},l.a.createElement("div",{"data-aos":"slide-right","data-aos-mirror":"true","data-aos-once":"true",style:{width:"85%"},className:"skills-progress"})),l.a.createElement("span",{className:"skills-Value"},"85%")),l.a.createElement("div",{className:"skills-skills"},l.a.createElement("span",{className:"skills-Name"},"Node js"),l.a.createElement("div",{className:"skills-percent"},l.a.createElement("div",{"data-aos":"slide-right","data-aos-mirror":"true","data-aos-once":"true",style:{width:"70%"},className:"skills-progress"})),l.a.createElement("span",{className:"skills-Value"},"70%")),l.a.createElement("div",{className:"skills-skills"},l.a.createElement("span",{className:"skills-Name"},"React JS"),l.a.createElement("div",{className:"skills-percent"},l.a.createElement("div",{"data-aos":"slide-right","data-aos-mirror":"true","data-aos-once":"true",style:{width:"75%"},className:"skills-progress"})),l.a.createElement("span",{className:"skills-Value"},"75%")),l.a.createElement("div",{className:"skills-skills"},l.a.createElement("span",{className:"skills-Name"},"mongo db"),l.a.createElement("div",{className:"skills-percent"},l.a.createElement("div",{"data-aos":"slide-right","data-aos-mirror":"true","data-aos-once":"true",style:{width:"60%"},className:"skills-progress"})),l.a.createElement("span",{className:"skills-Value"},"60%")),l.a.createElement("div",{className:"skills-skills"},l.a.createElement("span",{className:"skills-Name"},"My sql"),l.a.createElement("div",{className:"skills-percent"},l.a.createElement("div",{"data-aos":"slide-right","data-aos-mirror":"true","data-aos-once":"true",style:{width:"70%"},className:"skills-progress"})),l.a.createElement("span",{className:"skills-Value"},"70%")),l.a.createElement("div",{className:"skills-skills"},l.a.createElement("span",{className:"skills-Name"},"HTML/CSS"),l.a.createElement("div",{className:"skills-percent"},l.a.createElement("div",{"data-aos":"slide-right","data-aos-mirror":"true","data-aos-once":"true","data-aos-offset":"-100",style:{width:"90%"},className:"skills-progress"})),l.a.createElement("span",{className:"skills-Value"},"90%"))))}}]),t}(l.a.Component)),O=(t(48),t(21)),S=t.n(O),C=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-avatar"},l.a.createElement("img",{className:"avatar",src:S.a,alt:"Avatar"})),l.a.createElement("div",{className:"card-text"},l.a.createElement("div",{className:"portada"}),l.a.createElement("div",{className:"title-total"},l.a.createElement("div",{className:"title"},"Software Engineer"),l.a.createElement("br",null),l.a.createElement("span",{className:"card-name"},"SAYAK GHOSH"),l.a.createElement("span",{className:"card-degree"},"Bachelor in Technology | Information Technology"),l.a.createElement("div",{className:"sp"}),l.a.createElement("a",{href:"./Sayak's Resume.pdf",download:!0,className:"resume"},"Download Resume")))),l.a.createElement(d.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:1e3},l.a.createElement("div",{className:"continue-buttons"},l.a.createElement("div",{className:"continue-container"},l.a.createElement("span",{className:"btn effect04","data-sm-link-text":"LET'S GO..."},l.a.createElement("span",null,"CONTINUE"))))))}}]),t}(n.Component),_=(t(49),{firstname:"",lastname:"",mobile:"",email:"",message:"",errorFirstname:"",errorLastname:"",errorEmail:"",errorMobile:"",errorMessage:"",showThanks:!1}),M=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleFirstName=function(e){n.setState({firstname:e.target.value})},n.handleLastName=function(e){n.setState({lastname:e.target.value})},n.handleMobile=function(e){n.setState({mobile:e.target.value})},n.handleEmail=function(e){n.setState({email:e.target.value})},n.handleMessage=function(e){n.setState({message:e.target.value})},n.validate=function(){var e="",a="",t="",l="",s="",r=new RegExp(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/),c=new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),m=new RegExp(/^[\w'\-,.][^0-9_!\xa1?\xf7?\xbf/\\+=@#$%\u02c6&*(){}|~<>;:[\]]{1,}$/);return n.state.firstname||(e="! Kindly enter your Firstname"),n.state.lastname||(a="!Kindly enter your Lastname"),n.state.mobile||(l="! Kindly enter your Mobile Number"),n.state.email||(t="! Kindly enter your E-mail Address"),n.state.message||(s="! Kindly enter your Message for me"),m.test(n.state.firstname)||(e="! Kindly enter a valid First Name"),m.test(n.state.lastname)||(a="! Kindly enter a valid Last Name"),r.test(n.state.mobile)||(l="! Please enter a valid Mobile Number"),c.test(n.state.email)||(t="! Please enter a valid E-mail Address"),!(e||l||t||a||s)||(n.setState({errorFirstname:e,errorLastname:a,errorEmail:t,errorMobile:l,errorMessage:s}),!1)},n.handleSubmit=function(e){e.preventDefault(),n.validate()&&(console.log(n.state),n.setState(_),n.setState({showThanks:!0}))},n.state=_,n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"contact",className:"contact-main-container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact-container"},l.a.createElement("h2",null,"-- Keep in Touch --"),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:"",value:this.state.firstname,onChange:this.handleFirstName,required:!0}),l.a.createElement("span",{className:"text"},"First Name"),l.a.createElement("span",{className:"line"})),this.state.errorFirstname?l.a.createElement("span",{className:"errorMees"},this.state.errorFirstname):null),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:"",value:this.state.lastname,onChange:this.handleLastName,required:!0}),l.a.createElement("span",{className:"text"},"Last Name"),l.a.createElement("span",{className:"line"})),this.state.errorLastname?l.a.createElement("span",{className:"errorMees"},this.state.errorLastname):null)),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:"",value:this.state.email,onChange:this.handleEmail,required:!0}),l.a.createElement("span",{className:"text"},"E-mail"),l.a.createElement("span",{className:"line"})),this.state.errorEmail?l.a.createElement("span",{className:"errorMees"},this.state.errorEmail):null),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:"",value:this.state.mobile,onChange:this.handleMobile,required:!0}),l.a.createElement("span",{className:"text"},"Mobile"),l.a.createElement("span",{className:"line"})),this.state.errorMobile?l.a.createElement("span",{className:"errorMees"},this.state.errorMobile):null)),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox textarea"},l.a.createElement("textarea",{value:this.state.message,onChange:this.handleMessage,required:!0}),l.a.createElement("span",{className:"text"},"Your message..."),l.a.createElement("span",{className:"line"})),this.state.errorMessage?l.a.createElement("span",{className:"errorMees"},this.state.errorMessage):null)),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{className:"contactmebutton",type:"submit",value:"Contact Me"}),this.state.showThanks?l.a.createElement("span",{className:"contact-thanks"},"Thank you for your Message. Will get back to you soon ",l.a.createElement("span",{role:"img","aria-label":"smiley"},"\ud83d\ude00")):null))))}}]),t}(n.Component),T=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(C,null),l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(w,null),l.a.createElement(M,null),l.a.createElement(v,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.8dbdc2fb.chunk.js.map