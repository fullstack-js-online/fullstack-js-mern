(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{120:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(1),l=t.n(r),o=t(20),s=t.n(o),m=t(34),d=function(e){var a=e.type,t=void 0===a?"button":a,n=e.children,r=e.disabled,l=e.loading;return i.a.createElement("button",{type:t,disabled:r||l,className:s()("focus:outline-none rounded-sm hover:bg-emerald-light px-4 py-5 w-full text-white text-xl",{"bg-emerald":!r,"bg-emerald-light cursor-not-allowed":r})},l&&i.a.createElement(m.a,{dark:!1}),!l&&n)};d.propTypes={type:l.a.string,loading:l.a.bool,disabled:l.a.bool,children:l.a.any.isRequired},a.a=d},121:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(1),l=t.n(r),i=function(e){var a=e.onChange,t=e.placeholder,n=e.onBlur,r=e.value,l=e.type,i=e.error,o=e.name;return s.a.createElement("div",{className:"mb-5"},s.a.createElement("input",{name:o,type:l,onChange:a,placeholder:t,onBlur:n,value:r,className:"focus:outline-none w-full p-6 bg-brown-lightest text-brown"}),i&&s.a.createElement("span",{className:"text-sm text-red-light mt-2 block"},i))};i.propTypes={type:l.a.string,onBlur:l.a.func,value:l.a.string,name:l.a.string,error:l.a.string,onChange:l.a.func.isRequired,placeholder:l.a.string.isRequired},a.a=i},343:function(e,a,t){"use strict";t.r(a);var r=t(143),n=t(1),l=t.n(n),i=t(0),s=t.n(i),m=t(120),d=t(121),o=function(e){var a=e.initialValues,t=e.onSubmit,n=e.validationSchema;return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"container mx-auto flex justify-center"},s.a.createElement("div",{className:"max-w-md-1/2 mx-3 my-12 w-full"},s.a.createElement("h1",{className:"text-center font-primary font-semibold text-gold"},"Register"),s.a.createElement("div",{className:"bg-white shadow-md my-12 p-16 rounded w-full"},s.a.createElement(r.a,{onSubmit:t,initialValues:a,validationSchema:n},function(e){var a=e.values,t=e.errors,n=e.touched,r=(e.isValid,e.isSubmitting),l=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return s.a.createElement("form",{onSubmit:o},s.a.createElement(d.a,{type:"name",name:"name",onBlur:i,value:a.name,onChange:l,"data-testid":"name-field",placeholder:"Enter your name",error:n.name&&t.name}),s.a.createElement(d.a,{type:"email",name:"email",onBlur:i,value:a.email,onChange:l,"data-testid":"email-field",placeholder:"Enter your email",error:n.email&&t.email}),s.a.createElement(d.a,{type:"password",name:"password",onBlur:i,value:a.password,onChange:l,"data-testid":"password-field",placeholder:"Enter your password",error:n.password&&t.password}),s.a.createElement(m.a,{type:"submit",loading:r,"data-testid":"submit-button"},"Submit"))})))))};o.propTypes={initialValues:l.a.shape({name:l.a.string,email:l.a.string,password:l.a.string}).isRequired,validationSchema:l.a.object,onSubmit:l.a.func.isRequired},a.default=o}}]);