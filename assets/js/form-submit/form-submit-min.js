!function(e){"use strict";function t(e){let t=e.replace(/</g,"").replace(/>/g,"");return t=t.replace(/'/g,"").replace(/"/g,""),t}document.querySelectorAll(".phone").forEach((e=>{e.addEventListener("input",(function(e){var t=e.target.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);e.target.value=t[2]?"("+t[1]+") "+t[2]+(t[3]?"-"+t[3]:""):t[1]}))})),document.querySelectorAll(".main-contact-form").forEach((e=>{e.addEventListener("submit",(function(t){t.preventDefault();const a=window?.location?.href,r=new FormData(e),n=new URLSearchParams(new URL(a).search);var c={websource:"New Data Breach Landing page",URL:a};n.forEach(((e,t)=>{c[t]=e})),r.forEach(((e,t)=>{c[t]=e})),fetch("https://hooks.zapier.com/hooks/catch/2375177/2arxgem/",{method:"POST",body:JSON.stringify(c)}).then((e=>{e.text()})).then((t=>{e.reset(),window.location.href="/thank-you"})).catch((e=>{}))}))}));const a=document.querySelectorAll("input"),r=document.querySelectorAll("textarea");a.forEach((e=>{e.addEventListener("input",(function(e){e.target.value=t(e.target.value)}))})),r.forEach((e=>{e.addEventListener("input",(function(e){e.target.value=t(e.target.value)}))}))}(window.jQuery);