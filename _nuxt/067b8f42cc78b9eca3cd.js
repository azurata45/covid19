(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{358:function(t,e,o){var content=o(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("bb35a8d6",content,!0,{sourceMap:!1})},359:function(t,e,o){(e=o(11)(!1)).push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-footer{align-items:center;display:flex;flex:0 1 auto !important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.v-footer:not([data-booted=true]){transition:none !important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute;width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0px}",""]),t.exports=e},534:function(t,e,o){"use strict";o(14),o(10),o(6),o(5),o(9),o(178);var r=o(2),n=(o(36),o(358),o(141)),c=o(30);var d=o(110),l=o(0).a.extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),h=o(3);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(d.a,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(c.a)(Object(n.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("footer",["height","inset"]),l).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return m({},d.a.options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return m({},d.a.options.computed.styles.call(this),{height:isNaN(t)?t:Object(h.e)(t),left:Object(h.e)(this.computedLeft),right:Object(h.e)(this.computedRight),bottom:Object(h.e)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){return t("footer",this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles}),this.$slots.default)}})},548:function(t,e,o){"use strict";o.r(e);var r=o(310),n=o(393),c=o(394),d=o(400),l=o(395),h=o(396),f=o(401),m=o(402),v=o(403),y=o(398),$=o(397),O={components:{ConfirmedCasesDetailsCard:n.a,TestedCasesDetailsCard:c.a,ConfirmedCasesNumberCard:d.a,ConfirmedCasesAttributesCard:l.a,TestedNumberCard:h.a,InspectionPersonsNumberCard:f.a,TelephoneAdvisoryReportsNumberCard:m.a,ConsultationDeskReportsNumberCard:v.a,MetroCard:y.a,AgencyCard:$.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=r.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),t=r.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=r.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=r.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=r.inspections_summary.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),t=r.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=r.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=r.querents.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),o="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),r="".concat(this.updatedAt," | ").concat(this.$t("当サイトは沖縄県の新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志の仲間が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("沖縄県")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:r},{hid:"og:description",property:"og:description",content:r},{hid:"og:image",property:"og:image",content:o},{hid:"twitter:image",name:"twitter:image",content:o}]}}},w=o(8),component=Object(w.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?e("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-inspection-persons"==this.$route.params.card?e("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);