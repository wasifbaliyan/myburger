(this.webpackJsonpmyburger=this.webpackJsonpmyburger||[]).push([[0],{14:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},19:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},22:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},23:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},26:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},30:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},31:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},32:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},47:function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},48:function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},49:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},51:function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},52:function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},53:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},54:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},55:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},57:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},58:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},59:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},60:function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},62:function(e,t,n){e.exports=n(91)},72:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(24),o=n.n(l),i=n(17),c=n(15),s=n(25),u=(n(72),function(e){return e.children}),d=n(10),m=n(2),p=n(3),h=n(5),g=n(4),v=n(6),f=n(61),b=n(47),E=n.n(b),_=n(14),y=n.n(_),C=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:y.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:y.a.BreadTop},r.a.createElement("div",{className:y.a.Seeds1}),r.a.createElement("div",{className:y.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:y.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:y.a.Cheese});break;case"bacon":t=r.a.createElement("div",{className:y.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:y.a.Salad});break;default:t=null}return t},k=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(f.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(C,{type:t,key:t+n})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients...")),r.a.createElement("div",{className:E.a.Burger},r.a.createElement(C,{type:"bread-top"}),t,r.a.createElement(C,{type:"bread-bottom"}))},O=n(30),N=n.n(O),j=n(22),w=n.n(j),B=function(e){return r.a.createElement("div",{className:w.a.BuildControl},r.a.createElement("div",{className:w.a.Label},e.label),r.a.createElement("button",{onClick:e.removed,disabled:e.disabled,className:w.a.Less},"Less"),r.a.createElement("button",{onClick:e.added,className:w.a.More},"More"))},S=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],I=function(e){return r.a.createElement("div",{className:N.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),S.map((function(t){return r.a.createElement(B,{removed:function(){return e.ingredientRemoved(t.type)},added:function(){return e.ingredientAdded(t.type)},key:t.label,label:t.label,disabled:e.disabled[t.type]})})),r.a.createElement("button",{onClick:e.ordered,disabled:!e.purchasable,className:N.a.OrderButton},"ORDER NOW"))},D=n(48),x=n.n(D),T=n(49),L=n.n(T),H=function(e){return e.show?r.a.createElement("div",{onClick:e.clicked,className:L.a.Backdrop}):null},M=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(H,{clicked:this.props.modalClosed,show:this.props.show}),r.a.createElement("div",{style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},className:x.a.Modal},this.props.children))}}]),t}(a.Component),A=n(31),R=n.n(A),F=function(e){return r.a.createElement("button",{disabled:e.disabled,onClick:e.clicked,className:[R.a.Button,R.a[e.btnType]].join(" ")},e.children)},P=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{syle:{textTransform:"capitalize"}},t)," :"," ",e.ingredients[t])}));return r.a.createElement(u,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(F,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(F,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},V=n(50),q=n.n(V).a.create({baseURL:"https://react-my-burger-d8109.firebaseio.com/"}),Y=n(51),K=n.n(Y),U=function(){return r.a.createElement("div",{className:K.a.Loader},"Loading...")},X=function(e,t){return function(n){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(v.a)(a,n),Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.response.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(M,{modalClosed:this.errorConfirmedHandler,show:this.state.error},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},J=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={purchasing:!1,loading:!1,error:!1},n.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.history.push("/checkout")},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=Object(d.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded..."):r.a.createElement(U,null);return this.props.ings&&(a=r.a.createElement(u,null,r.a.createElement(k,{ingredients:this.props.ings}),r.a.createElement(I,{purchasable:this.updatePurchaseState(this.props.ings),ingredientRemoved:this.props.onIngredientRemoved,ingredientAdded:this.props.onIngredientAdded,disabled:e,price:this.props.price,ordered:this.purchaseHandler})),n=r.a.createElement(P,{price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,ingredients:this.props.ings})),this.state.loading&&(n=r.a.createElement(U,null)),r.a.createElement(u,null,r.a.createElement(M,{modalClosed:this.purchaseCancelHandler,show:this.state.purchasing},n),a)}}]),t}(a.Component),W=Object(c.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})}}}))(X(J,q)),G=n(52),z=n.n(G),Z=n(26),$=n.n(Z),Q=n(53),ee=n.n(Q),te=n(54),ne=n.n(te),ae=function(e){return r.a.createElement("div",{className:ee.a.Logo},r.a.createElement("img",{src:ne.a,alt:"MyBurger"}))},re=n(55),le=n.n(re),oe=n(32),ie=n.n(oe),ce=function(e){return r.a.createElement("li",{className:ie.a.NavigationItem},r.a.createElement(i.b,{exact:e.exact,activeClassName:ie.a.active,to:e.link,basename:"/myburger"},e.children))},se=function(e){return r.a.createElement("ul",{className:le.a.NavigationItems},r.a.createElement(ce,{exact:!0,link:"/"},"Burger Builder"),r.a.createElement(ce,{link:"/orders"},"Orders"))},ue=n(57),de=n.n(ue),me=function(e){return r.a.createElement("div",{className:de.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},pe=function(e){return r.a.createElement("header",{className:$.a.Toolbar},r.a.createElement(me,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:$.a.Logo},r.a.createElement(ae,null)),r.a.createElement("nav",{className:$.a.DesktopOnly},r.a.createElement(se,null)))},he=n(19),ge=n.n(he),ve=function(e){var t=[ge.a.SideDrawer,ge.a.Close];return e.open&&(t=[ge.a.SideDrawer,ge.a.Open]),r.a.createElement(u,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:ge.a.Logo},r.a.createElement(ae,null)),r.a.createElement("nav",null,r.a.createElement(se,null))))},fe=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(pe,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(ve,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:z.a.Content},this.props.children))}}]),t}(a.Component),be=n(16),Ee=n(58),_e=n.n(Ee),ye=function(e){return r.a.createElement("div",{className:_e.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(k,{ingredients:e.ingredients})),r.a.createElement(F,{clicked:e.checkoutCancelled,btnType:"Danger"},"Cancel"),r.a.createElement(F,{clicked:e.checkoutContinued,btnType:"Success"},"Continue"))},Ce=n(59),ke=n.n(Ce),Oe=n(23),Ne=n.n(Oe),je=function(e){var t=null,n=[Ne.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Ne.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({onChange:e.changed,className:n.join(" ")},e.elementConfig,{value:e.value}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({onChange:e.changed,className:n.join(" ")},e.elementConfig,{value:e.value}));break;case"select":t=r.a.createElement("select",Object.assign({onChange:e.changed,className:n.join(" ")},e.elementConfig,{value:e.value}),e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({onChange:e.changed,className:n.join(" ")},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:Ne.a.Input},r.a.createElement("label",{className:Ne.a.Label},e.label),t)},we=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street Name"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"",validation:{required:!1},valid:!0}},loading:!1,formIsValid:!1},n.orderHandler=function(e){e.preventDefault(),n.setState({loading:!0});var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ings,price:n.props.price,orderData:t};q.post("/orders.json",r).then((function(e){n.setState({loading:!1}),n.props.history.push("/")})).catch((function(e){n.setState({loading:!1})}))},n.checkValidity=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n},n.inputChangedHandler=function(e,t){var a=Object(d.a)({},n.state.orderForm),r=Object(d.a)({},a[t]);r.value=e.target.value,r.valid=n.checkValidity(r.value,r.validation),r.touched=!0,a[t]=r;var l=!0;for(var o in a)l=a[o].valid&&l;n.setState({orderForm:a,formIsValid:l})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(je,{touched:t.config.touched,invalid:!t.config.valid,shouldValidate:t.config.validation,changed:function(n){return e.inputChangedHandler(n,t.id)},key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value})})),r.a.createElement(F,{disabled:!this.state.formIsValid,clicked:this.orderHandler,btnType:"Success"},"ORDER"));return this.state.loading&&(a=r.a.createElement(U,null)),r.a.createElement("div",{className:ke.a.ContactData},r.a.createElement("h4",null,"Enter your contact data"),a)}}]),t}(a.Component),Be=Object(c.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}))(we),Se=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ye,{checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler,ingredients:this.props.ings}),r.a.createElement(be.a,{path:this.props.match.path+"/contact-data",component:Be}))}}]),t}(a.Component),Ie=Object(c.b)((function(e){return{ings:e.ingredients}}))(Se),De=n(60),xe=n.n(De),Te=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:xe.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},Le=X(function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;q.get("/orders.json").then((function(t){var n=[];for(var a in t.data)n.push(Object(d.a)({},t.data[a],{id:a}));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(Te,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),t}(a.Component),q);var He=function(){return r.a.createElement(u,null,r.a.createElement(fe,null,r.a.createElement(be.c,null,r.a.createElement(be.a,{path:"/checkout",component:Ie}),r.a.createElement(be.a,{path:"/orders",component:Le}),r.a.createElement(be.a,{path:"/",exact:!0,component:W}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=n(21),Ae={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4},Re={cheese:1.3,bacon:.7,salad:1.5,meat:.6},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(d.a)({},e,{ingredients:Object(d.a)({},e.ingredients,Object(Me.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+Re[t.ingredientName]});case"REMOVE_INGREDIENT":return Object(d.a)({},e,{ingredients:Object(d.a)({},e.ingredients,Object(Me.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-Re[t.ingredientName]});default:return e}},Pe=Object(s.b)(Fe),Ve=r.a.createElement(c.a,{store:Pe},r.a.createElement(i.a,null,r.a.createElement(He,null)));o.a.render(Ve,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.833adeef.chunk.js.map