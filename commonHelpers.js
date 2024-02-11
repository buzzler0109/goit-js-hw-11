import{S as m,i as c}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com/",n="/api/",s="?key=42127236-8bfdbbfbeed8a2dadaca720e8",e=`&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,t=r+n+s+e;return fetch(t).then(i=>i.json())}function f(){c.warning({title:"Caution",message:"Please type something to search!",position:"topRight"})}function d(){c.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function g(o){return o.hits.map(({webformatURL:r,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${s}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${e}</p>
  <p><b>Views</b> ${t}</p>
  <p><b>Comments</b> ${i}</p>
  <p><b>Downloads</b> ${u}</p>
 </div>
</li>`).join(`
`)}function y(o){const r=g(o);l.galleryEl.innerHTML=r}let a=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const l={formEl:document.querySelector(".search-form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.loader.style.display="none";l.formEl.addEventListener("submit",h);function h(o){o.preventDefault();const r=o.target.elements.text.value.trim();if(l.loader.style.display="block",!r){f();return}p(r).then(n=>{n.hits.length===0?(d(),l.galleryEl.innerHTML=""):(y(n),a.on("show.simplelightbox"),a.refresh())}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
