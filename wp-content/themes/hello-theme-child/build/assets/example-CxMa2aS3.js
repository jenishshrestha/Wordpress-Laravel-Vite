class n extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{exampleTarget:".example"}}}onElementChange(e){}onInit(){this.selectors=this.getSettings("selectors"),console.log("Example Widget Init"),this.setupEventListeners()}setupEventListeners(){this.$element.find(this.selectors.exampleTarget).on("click",e=>{e.preventDefault(),console.log("Click Event Handling")})}}window.addEventListener("elementor/frontend/init",()=>{const t=e=>{elementorFrontend.elementsHandler.addHandler(n,{$element:e})};elementorFrontend.hooks.addAction("frontend/element_ready/example.default",t)});