"use strict";(self.webpackChunkbime=self.webpackChunkbime||[]).push([[883],{8883:(H,C,o)=>{o.r(C),o.d(C,{ThirdPartyInsuranceModule:()=>R});var l=o(9808),s=o(4100),e=o(5e3),g=o(9646),f=o(8505),v=o(520),_=o(6518);let c=(()=>{class u{constructor(t,n,i){this.http=t,this.router=n,this.authService=i,this.thirdPartyInsuranceData={insurance:"\u0628\u06cc\u0645\u0647 \u0634\u062e\u0635 \u062b\u0627\u0644\u062b"},this.user$=this.authService.user$}getVehiclesData(){return this.vehicleResponse?(0,g.of)(this.vehicleResponse):this.http.get("assets/data/vehicles-data.json").pipe((0,f.b)(t=>this.vehicleResponse=t))}getInsuranceCompanies(){return this.insuranceCompanies?(0,g.of)(this.insuranceCompanies):this.http.get("assets/data/insurance-companies.json").pipe((0,f.b)(t=>this.insuranceCompanies=t))}}return u.\u0275fac=function(t){return new(t||u)(e.LFG(v.eN),e.LFG(s.F0),e.LFG(_.e))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac}),u})();const d=function(u){return{"select--active":u}},Z=function(u){return{"btn--disabled":u}};let b=(()=>{class u{constructor(t,n){this.thirdPartyService=t,this.router=n,this.plaqueChange=null,this.hadDamage=null;const i=t.thirdPartyInsuranceData.plaqueChange,r=t.thirdPartyInsuranceData.hadDamage;"boolean"==typeof i&&"boolean"==typeof r&&(this.plaqueChange=i,this.hadDamage=r)}ngOnInit(){}submit(){null!==this.plaqueChange&&null!==this.hadDamage&&(this.thirdPartyService.thirdPartyInsuranceData.plaqueChange=this.plaqueChange,this.thirdPartyService.thirdPartyInsuranceData.hadDamage=this.hadDamage);const t=JSON.stringify(this.thirdPartyService.thirdPartyInsuranceData);this.router.navigate(["/insurance-comparison"],{queryParams:{data:t}})}isValid(){return null!==this.plaqueChange&&null!==this.hadDamage}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(c),e.Y36(s.F0))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-tp-damage-history"]],decls:21,vars:16,consts:[[1,"mb-3","text-gray-500"],[1,"flex","flex-col","items-end","gap-4","mt-5","mr-3"],[1,"select",3,"ngClass","click"],[1,"mb-3","text-gray-500","mt-5"],[1,"block","mt-7","mr-3"],[1,"btn","bg-blue-500",3,"ngClass","disabled","click"],["routerLink","/insurance/third-party-insurance/previous-company",1,"btn","bg-red-400","ml-2"]],template:function(t,n){1&t&&(e.ynx(0),e.TgZ(1,"p",0),e._uU(2," \u0622\u06cc\u0627 \u062f\u0631 \u0645\u062f\u062a \u0628\u06cc\u0645\u0647 \u0646\u0627\u0645\u0647 \u0642\u0628\u0644\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0627\u0644\u06a9\u06cc\u062a \u062e\u0648\u062f\u0631\u0648 ( \u062a\u0639\u0648\u06cc\u0636 \u067e\u0644\u0627\u06a9 ) \u062f\u0627\u0634\u062a\u0647 \u0627\u06cc\u062f \u061f "),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"button",2),e.NdJ("click",function(){return n.plaqueChange=!0}),e._uU(5," \u0628\u0644\u0647 "),e.qZA(),e.TgZ(6,"button",2),e.NdJ("click",function(){return n.plaqueChange=!1}),e._uU(7," \u062e\u06cc\u0631\u060c \u0628\u062f\u0648\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0627\u0644\u06a9\u06cc\u062a "),e.qZA(),e.qZA(),e.BQk(),e.ynx(8),e.TgZ(9,"p",3),e._uU(10," \u0622\u06cc\u0627 \u0627\u0632 \u0628\u06cc\u0645\u0647\u200c\u0646\u0627\u0645\u0647 \u0642\u0628\u0644\u06cc \u062e\u0648\u062f \u062e\u0633\u0627\u0631\u062a \u06af\u0631\u0641\u062a\u0647\u200c\u0627\u06cc\u062f \u061f "),e.qZA(),e.TgZ(11,"div",1),e.TgZ(12,"button",2),e.NdJ("click",function(){return n.hadDamage=!0}),e._uU(13," \u0628\u0644\u0647\u060c \u062e\u0633\u0627\u0631\u062a \u06af\u0631\u0641\u062a\u0647\u200c\u0627\u0645 "),e.qZA(),e.TgZ(14,"button",2),e.NdJ("click",function(){return n.hadDamage=!1}),e._uU(15," \u062e\u06cc\u0631\u060c \u0647\u06cc\u0686 \u062e\u0633\u0627\u0631\u062a\u06cc \u0646\u062f\u0627\u0634\u062a\u0647\u200c\u0627\u0645 "),e.qZA(),e.qZA(),e.BQk(),e.TgZ(16,"div",4),e.TgZ(17,"button",5),e.NdJ("click",function(){return n.submit()}),e._uU(18," \u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0642\u06cc\u0645\u062a "),e.qZA(),e.TgZ(19,"button",6),e._uU(20," \u0645\u0631\u062d\u0644\u0647 \u0642\u0628\u0644 "),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngClass",e.VKq(6,d,!0===n.plaqueChange)),e.xp6(2),e.Q6J("ngClass",e.VKq(8,d,!1===n.plaqueChange)),e.xp6(6),e.Q6J("ngClass",e.VKq(10,d,!0===n.hadDamage)),e.xp6(2),e.Q6J("ngClass",e.VKq(12,d,!1===n.hadDamage)),e.xp6(3),e.Q6J("ngClass",e.VKq(14,Z,!n.isValid()))("disabled",!n.isValid()))},directives:[l.mk,s.rH],styles:[".select[_ngcontent-%COMP%]{border-radius:.125rem;--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity));padding:.5rem 1.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.select[_ngcontent-%COMP%]:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.select--active[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}"]}),u})();var p=o(4106),m=o(8750),h=o(508);function A(u,a){if(1&u&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&u){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}const F=function(u){return{"btn--disabled":u}};let D=(()=>{class u{constructor(t,n,i){this.thirdPartyService=n,this.router=i,this.selectedCompany=n.thirdPartyInsuranceData.previousCompany,this.insuranceCompanies=t.snapshot.data.insuranceCompanies}submit(){!this.selectedCompany||(this.thirdPartyService.thirdPartyInsuranceData.previousCompany=this.selectedCompany,this.router.navigateByUrl("/insurance/third-party-insurance/damage-history"))}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(s.gz),e.Y36(c),e.Y36(s.F0))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-tp-previous-company"]],decls:14,vars:6,consts:[[1,"mb-3","text-gray-500"],["appearance","fill"],[1,"font-display"],[1,"text-right","font-display",3,"value","valueChange"],["value","\u0641\u0627\u0642\u062f \u0628\u06cc\u0645\u0647",1,"font-display"],["class","font-display",3,"value",4,"ngFor","ngForOf"],[1,"block","mt-40"],[1,"btn","bg-blue-500",3,"disabled","ngClass","click"],["routerLink","/insurance/third-party-insurance/year-of-construction",1,"btn","bg-red-400","ml-2"],[1,"font-display",3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"p",0),e._uU(1,".\u0634\u0631\u06a9\u062a \u0628\u06cc\u0645\u0647\u200c\u06af\u0631 \u0642\u0628\u0644\u06cc \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),e.qZA(),e.TgZ(2,"mat-form-field",1),e.TgZ(3,"mat-label",2),e._uU(4,"\u0628\u06cc\u0645\u0647\u200c\u06af\u0631 \u0642\u0628\u0644\u06cc"),e.qZA(),e.TgZ(5,"mat-select",3),e.NdJ("valueChange",function(r){return n.selectedCompany=r}),e.TgZ(6,"mat-option",4),e._uU(7,"\u0641\u0627\u0642\u062f \u0628\u06cc\u0645\u0647"),e.qZA(),e.YNc(8,A,2,2,"mat-option",5),e.qZA(),e.qZA(),e.TgZ(9,"div",6),e.TgZ(10,"button",7),e.NdJ("click",function(){return n.submit()}),e._uU(11," \u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f "),e.qZA(),e.TgZ(12,"button",8),e._uU(13," \u0645\u0631\u062d\u0644\u0647 \u0642\u0628\u0644 "),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("value",n.selectedCompany),e.xp6(3),e.Q6J("ngForOf",n.insuranceCompanies),e.xp6(2),e.Q6J("disabled",!n.selectedCompany)("ngClass",e.VKq(4,F,!n.selectedCompany)))},directives:[p.KE,p.hX,m.gD,h.ey,l.sg,l.mk,s.rH],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}@media (min-width: 1024px){.mat-form-field[_ngcontent-%COMP%]{width:66.666667%}}"]}),u})();function q(u,a){if(1&u&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&u){const t=a.$implicit;e.Q6J("value",t.type),e.xp6(1),e.Oqu(t.type)}}function V(u,a){if(1&u&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&u){const t=a.$implicit;e.Q6J("value",t.name),e.xp6(1),e.Oqu(t.name)}}function P(u,a){if(1&u&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&u){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function x(u,a){if(1&u&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&u){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}const J=function(u){return{"btn--disabled":u}};let w=(()=>{class u{constructor(t,n,i){this.route=t,this.router=n,this.thirdPartyService=i,this.selectedVehicle={type:"",brand:"",usage:"",model:""},this.vehiclesData=t.snapshot.data.vehiclesData;const r=i.thirdPartyInsuranceData.vehicle;r&&(this.selectedVehicle=r)}submit(){this.thirdPartyService.thirdPartyInsuranceData.vehicle=this.selectedVehicle,this.router.navigateByUrl("/insurance/third-party-insurance/year-of-construction")}findBrands(t){var n;return null===(n=this.vehiclesData.vehicles.find(i=>i.type===t))||void 0===n?void 0:n.brands}findModels(t){var n;const i=this.findBrands(this.selectedVehicle.type);return null===(n=null==i?void 0:i.find(r=>r.name===t))||void 0===n?void 0:n.models}findUsages(t){var n;return null===(n=this.vehiclesData.vehicles.find(i=>i.type===t))||void 0===n?void 0:n.usage}resetVehicleProperties(){this.selectedVehicle.brand="",this.selectedVehicle.usage="",this.selectedVehicle.model=""}isValid(){const{brand:t,type:n,usage:i,model:r}=this.selectedVehicle;return t&&n&&i&&r}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(s.gz),e.Y36(s.F0),e.Y36(c))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-tp-vehicle-detail"]],decls:25,vars:15,consts:[[1,"mb-2","text-gray-500"],["appearance","fill"],[1,"font-display"],[1,"text-right","font-display",3,"value","valueChange","selectionChange"],["class","font-display",3,"value",4,"ngFor","ngForOf"],[1,"text-right","font-display",3,"value","disabled","valueChange","selectionChange"],[1,"text-right","font-display",3,"value","disabled","valueChange"],[1,"block"],[1,"btn","bg-blue-500",3,"ngClass","disabled","click"],[1,"font-display",3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"p",0),e._uU(1," .\u0646\u0648\u0639 \u060c \u0628\u0631\u0646\u062f \u060c \u0645\u062f\u0644 \u0648 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f\u0631\u0648\u06cc \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f\n"),e.qZA(),e.TgZ(2,"mat-form-field",1),e.TgZ(3,"mat-label",2),e._uU(4,"\u0646\u0648\u0639 \u0648\u0633\u06cc\u0644\u0647 \u0646\u0642\u0644\u06cc\u0647"),e.qZA(),e.TgZ(5,"mat-select",3),e.NdJ("valueChange",function(r){return n.selectedVehicle.type=r})("selectionChange",function(){return n.resetVehicleProperties()}),e.YNc(6,q,2,2,"mat-option",4),e.qZA(),e.qZA(),e.TgZ(7,"mat-form-field",1),e.TgZ(8,"mat-label",2),e._uU(9,"\u0628\u0631\u0646\u062f \u062e\u0648\u062f\u0631\u0648"),e.qZA(),e.TgZ(10,"mat-select",5),e.NdJ("valueChange",function(r){return n.selectedVehicle.brand=r})("selectionChange",function(){return n.selectedVehicle.model=""}),e.YNc(11,V,2,2,"mat-option",4),e.qZA(),e.qZA(),e.TgZ(12,"mat-form-field",1),e.TgZ(13,"mat-label",2),e._uU(14,"\u0645\u062f\u0644 \u062e\u0648\u062f\u0631\u0648"),e.qZA(),e.TgZ(15,"mat-select",6),e.NdJ("valueChange",function(r){return n.selectedVehicle.model=r}),e.YNc(16,P,2,2,"mat-option",4),e.qZA(),e.qZA(),e.TgZ(17,"mat-form-field",1),e.TgZ(18,"mat-label",2),e._uU(19,"\u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f\u0631\u0648"),e.qZA(),e.TgZ(20,"mat-select",6),e.NdJ("valueChange",function(r){return n.selectedVehicle.usage=r}),e.YNc(21,x,2,2,"mat-option",4),e.qZA(),e.qZA(),e.TgZ(22,"div",7),e.TgZ(23,"button",8),e.NdJ("click",function(){return n.submit()}),e._uU(24," \u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f "),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("value",n.selectedVehicle.type),e.xp6(1),e.Q6J("ngForOf",n.vehiclesData.vehicles),e.xp6(4),e.Q6J("value",n.selectedVehicle.brand)("disabled",!n.selectedVehicle.type),e.xp6(1),e.Q6J("ngForOf",n.findBrands(n.selectedVehicle.type)),e.xp6(4),e.Q6J("value",n.selectedVehicle.model)("disabled",!n.selectedVehicle.brand),e.xp6(1),e.Q6J("ngForOf",n.findModels(n.selectedVehicle.brand)),e.xp6(4),e.Q6J("value",n.selectedVehicle.usage)("disabled",!n.selectedVehicle.type),e.xp6(1),e.Q6J("ngForOf",n.findUsages(n.selectedVehicle.type)),e.xp6(2),e.Q6J("ngClass",e.VKq(13,J,!n.isValid()))("disabled",!n.isValid()))},directives:[p.KE,p.hX,m.gD,l.sg,h.ey,l.mk],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}@media (min-width: 1024px){.mat-form-field[_ngcontent-%COMP%]{width:66.666667%}}"]}),u})();function U(u,a){if(1&u&&(e.TgZ(0,"mat-option",8),e._uU(1),e.qZA()),2&u){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}const O=function(u){return{"btn--disabled":u}};let E=(()=>{class u{constructor(t,n){this.router=t,this.thirdPartyService=n,this.yearRange=this.range(1367,1400).reverse(),this.selectedYear=n.thirdPartyInsuranceData.yearOfConstruction}submit(){!this.selectedYear||(this.thirdPartyService.thirdPartyInsuranceData.yearOfConstruction=this.selectedYear,this.router.navigateByUrl("/insurance/third-party-insurance/previous-company"))}range(t,n){return t===n?[t]:[t,...this.range(t+1,n)]}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(s.F0),e.Y36(c))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-year-of-construction"]],decls:12,vars:6,consts:[[1,"mb-3","text-gray-500"],["appearance","fill"],[1,"font-display"],[1,"text-right","font-display",3,"value","valueChange"],["class","font-display",3,"value",4,"ngFor","ngForOf"],[1,"block","mt-40"],[1,"btn","bg-blue-500",3,"disabled","ngClass","click"],["routerLink","/insurance/third-party-insurance",1,"btn","bg-red-400","ml-2"],[1,"font-display",3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"p",0),e._uU(1," .\u0633\u0627\u0644 \u0633\u0627\u062e\u062a \u062e\u0648\u062f\u0631\u0648\u06cc \u062e\u0648\u062f \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u06a9\u0627\u0631\u062a \u062e\u0648\u062f\u0631\u0648 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f\n"),e.qZA(),e.TgZ(2,"mat-form-field",1),e.TgZ(3,"mat-label",2),e._uU(4,"\u0633\u0627\u0644 \u0633\u0627\u062e\u062a"),e.qZA(),e.TgZ(5,"mat-select",3),e.NdJ("valueChange",function(r){return n.selectedYear=r}),e.YNc(6,U,2,2,"mat-option",4),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"button",6),e.NdJ("click",function(){return n.submit()}),e._uU(9," \u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f "),e.qZA(),e.TgZ(10,"button",7),e._uU(11," \u0645\u0631\u062d\u0644\u0647 \u0642\u0628\u0644 "),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("value",n.selectedYear),e.xp6(1),e.Q6J("ngForOf",n.yearRange),e.xp6(2),e.Q6J("disabled",!n.selectedYear)("ngClass",e.VKq(4,O,!n.selectedYear)))},directives:[p.KE,p.hX,m.gD,l.sg,h.ey,l.mk,s.rH],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}@media (min-width: 1024px){.mat-form-field[_ngcontent-%COMP%]{width:66.666667%}}"]}),u})(),y=(()=>{class u{constructor(t){this.thirdPartyService=t}resolve(t,n){return this.thirdPartyService.getInsuranceCompanies()}}return u.\u0275fac=function(t){return new(t||u)(e.LFG(c))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac}),u})(),T=(()=>{class u{constructor(t){this.thirdPartyInsurance=t}resolve(t,n){return this.thirdPartyInsurance.getVehiclesData()}}return u.\u0275fac=function(t){return new(t||u)(e.LFG(c))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac}),u})();var I=o(4696),Y=o(197),Q=o(5227);const k=[{path:"",component:(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-third-party-insurance"]],decls:17,vars:0,consts:[[1,"h-screen","flex","flex-col"],[1,"relative","bg-gray-50","flex-1"],[1,"h-full","py-6","px-14","text-center","lg:text-right"],[1,"text-xl","font-bold","mb-4"],[1,"mt-8","mr-5"],[1,"bg-blue-400","flex","flex-col","lg:flex-row-reverse","items-center","justify-center","px-10","lg:px-20","py-10"],["src","assets/images/third-party.jpg","alt","Bicycle Crash",1,"w-full","lg:w-3/5","flex-1","rounded-sm","overflow-hidden","shadow-lg"],[1,"flex-1","text-center","text-gray-50","mt-7","lg:mt0"],[1,"text-xl","lg:text-2xl"],[1,"mt-5","lg:text-lg","text-gray-100","px-16",2,"line-height","2.3"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-navbar"),e.TgZ(2,"div",1),e.TgZ(3,"app-car-insurance-card"),e.TgZ(4,"div",2),e.TgZ(5,"h2",3),e._uU(6,"\u0628\u06cc\u0645\u0647 \u0634\u062e\u0635 \u062b\u0627\u0644\u062b"),e.qZA(),e.TgZ(7,"div",4),e._UZ(8,"router-outlet"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"img",6),e.TgZ(11,"div",7),e.TgZ(12,"h2",8),e._uU(13,"\u0628\u06cc\u0645\u0647 \u0634\u062e\u0635 \u062b\u0627\u0644\u062b \u062f\u06cc\u06af\u0647 \u0686\u06cc\u0647\u061f"),e.qZA(),e.TgZ(14,"p",9),e._uU(15," \u0647\u0631\u06af\u0648\u0646\u0647 \u062e\u0633\u0627\u0631\u062a \u0645\u0627\u0644\u06cc \u0648 \u062c\u0627\u0646\u06cc \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0628\u0647 \u0627\u0634\u062e\u0627\u0635 \u062b\u0627\u0644\u062b \u062f\u0631 \u062d\u0648\u0627\u062f\u062b \u0631\u0627\u0646\u0646\u062f\u06af\u06cc \u0628\u0647 \u0639\u0647\u062f\u0647 \u0628\u06cc\u0645\u0647 \u0634\u062e\u0635 \u062b\u0627\u0644\u062b \u0627\u0633\u062a. \u062e\u0631\u06cc\u062f \u0628\u06cc\u0645\u0647 \u0634\u062e\u0635 \u062b\u0627\u0644\u062b \u0628\u0631\u0627\u06cc \u062a\u0645\u0627\u0645 \u0648\u0633\u0627\u06cc\u0644 \u0646\u0642\u0644\u06cc\u0647 \u0627\u062c\u0628\u0627\u0631\u06cc \u0627\u0633\u062a \u0648 \u0646\u062f\u0627\u0634\u062a\u0646 \u0627\u06cc\u0646 \u0628\u06cc\u0645\u0647 \u0639\u0648\u0627\u0642\u0628 \u062c\u0628\u0631\u0627\u0646 \u0646\u0627\u067e\u0630\u06cc\u0631\u06cc \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u062e\u0648\u0627\u0647\u062f \u062f\u0627\u0634\u062a "),e.qZA(),e.qZA(),e.qZA(),e._UZ(16,"app-footer"))},directives:[I.S,Y.b,s.lC,Q.c],styles:[""]}),u})(),children:[{path:"",component:w,resolve:{vehiclesData:T}},{path:"year-of-construction",component:E},{path:"previous-company",component:D,resolve:{insuranceCompanies:y}},{path:"damage-history",component:b}]}];let B=(()=>{class u{}return u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[[s.Bz.forChild(k)],s.Bz]}),u})();var N=o(4466),M=o(3075),S=o(7531);let R=(()=>{class u{}return u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({providers:[c,T,y],imports:[[l.ez,B,N.m,m.LD,v.JF,S.c,M.u5]]}),u})()}}]);