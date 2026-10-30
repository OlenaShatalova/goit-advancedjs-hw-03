import{a as u,S as p,i as n}from"./assets/vendor-1e77685b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="45436364-f90a0cfe5f9b13d8d0e95a311";u.defaults.baseURL="https://pixabay.com/api/";function g(i){return u.get("",{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h({webformatURL:i,largeImageURL:s,tags:o,likes:a,views:e,comments:t,downloads:r}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img class="gallery-img" src="${i}" alt="${o}" />
      </a>
      <ul class="img-info-list">
        <li class="img-info-item">
          <p class="img-info-text">Likes</p>
          <p class="img-info-value">${a}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Views</p>
          <p class="img-info-value">${e}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Comments</p>
          <p class="img-info-value">${t}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Downloads</p>
          <p class="img-info-value">${r}</p>
        </li>
      </ul>
    </li>
  `}function L(i){const s=i.map(h).join("");m.insertAdjacentHTML("beforeend",s),y.refresh()}function v(){m.innerHTML=""}function b(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}const S="/goit-advancedjs-hw-03/assets/icon-7962080a.svg",c=document.querySelector(".form"),l={timeout:5e3,position:"topRight",iconUrl:S};c.addEventListener("submit",x);function x(i){i.preventDefault();const s=c.elements["search-text"].value.trim();if(!s){n.show({...l,message:"Please enter a search query!"});return}v(),b(),g(s).then(({hits:o})=>{if(o.length===0){n.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o)}).catch(o=>{n.show({...l,message:`Something went wrong: ${o.message}`})}).finally(()=>{w(),c.reset()})}
//# sourceMappingURL=commonHelpers.js.map
