(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{141:function(e,t,c){"use strict";var r=c(2),s=c(4),n=c(6),a=c.n(n),i=c(0),d=c(8),o=c(1),l=i.forwardRef((function(e,t){var c=e.bsPrefix,n=e.className,i=e.striped,l=e.bordered,j=e.borderless,b=e.hover,O=e.size,h=e.variant,u=e.responsive,v=Object(s.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),x=Object(d.a)(c,"table"),f=a()(n,x,h&&"".concat(x,"-").concat(h),O&&"".concat(x,"-").concat(O),i&&"".concat(x,"-striped"),l&&"".concat(x,"-bordered"),j&&"".concat(x,"-borderless"),b&&"".concat(x,"-hover")),m=Object(o.jsx)("table",Object(r.a)(Object(r.a)({},v),{},{className:f,ref:t}));if(u){var p="".concat(x,"-responsive");return"string"===typeof u&&(p="".concat(p,"-").concat(u)),Object(o.jsx)("div",{className:p,children:m})}return m}));t.a=l},158:function(e,t,c){"use strict";c.r(t);var r=c(7),s=c.n(r),n=c(10),a=c(0),i=c(5),d=c(129),o=c(86),l=c(32),j=c(35),b=c(55),O=c(141),h=c(1),u=function(e){var t=e.orders;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"All Orders"}),Object(h.jsxs)(O.a,{className:"mt-2 text-center",striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"ID"}),Object(h.jsx)("th",{children:"Total Price GH\u20b5"}),Object(h.jsx)("th",{children:"Payment"}),Object(h.jsx)("th",{children:"Order Status"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"".concat(e._id)}),Object(h.jsx)("td",{children:e.totalPrice}),Object(h.jsx)("td",{children:"mobileMoney"===(null===e||void 0===e?void 0:e.paymentMethod)?"MoMo":"COD"}),Object(h.jsx)("td",{className:(null===e||void 0===e?void 0:e.isDelivered)?"text-success":"text-danger",children:(null===e||void 0===e?void 0:e.isDelivered)?Object(h.jsx)("i",{className:"fas fa-check"}):Object(h.jsx)("i",{className:"fas fa-times"})}),Object(h.jsx)("td",{children:Object(h.jsx)(j.NavLink,{to:"/v1/user/profile/order/".concat(e._id),children:Object(h.jsx)(o.a,{variant:"outline-dark",size:"sm",children:"Details"})})})]},t)}))})]})]})},v=c(82);t.default=function(){var e=Object(l.c)((function(e){return e.allOrders})),t=e.status,c=e.allOrders,r=Object(l.b)();return Object(a.useEffect)((function(){(function(){var e=Object(n.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(v.c)());case 2:t=e.sent,200===(c=Object(i.d)(t)).status&&r(Object(v.b)(c));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(h.jsx)("div",{children:Object(h.jsxs)(d.a,{children:["success"===t&&0!==(null===c||void 0===c?void 0:c.orders.length)&&Object(h.jsx)(j.NavLink,{to:"/",children:Object(h.jsx)(o.a,{variant:"outline-dark",className:"mb-2",children:Object(h.jsx)("i",{className:"fas fa-arrow-left",children:" Go Back "})})}),"loading"===t&&Object(h.jsx)(j.NavLink,{to:"/",children:Object(h.jsx)(o.a,{variant:"outline-dark",className:"mb-2",children:Object(h.jsx)("i",{className:"fas fa-arrow-left",children:" Go Back "})})}),"loading"===t&&Object(h.jsx)(b.a,{}),"success"===t&&Object(h.jsx)(u,{orders:null===c||void 0===c?void 0:c.orders})]})})}}}]);
//# sourceMappingURL=13.34709f80.chunk.js.map