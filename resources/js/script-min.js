import imageObjectArray from"../js/components/data.js";const swapFigure=()=>{const e=imageObjectArray.map((e=>{let t=document.createElement("figure");t.classList.add("tribute__figure"),t.setAttribute("id",e.id);let r=document.createElement("img");r.setAttribute("src",e.src),r.setAttribute("alt",e.alt);let i=document.createElement("figcaption");return i.innerText=e.alt,t.append(r,i),t})),t=(document.querySelector("header"),[...e]),r=document.querySelectorAll("input"),i=[...r];let c=document.querySelector("#img-div");!function(){for(let e=0;e<i.length;e++)i[e].addEventListener("click",(function(){for(let i=0;i<t.length;i++){t[i].getAttribute("id")===r[e].getAttribute("id").slice(0,6)&&(c.replaceWith(t[i]),console.log(t[i]))}}))}()};swapFigure();