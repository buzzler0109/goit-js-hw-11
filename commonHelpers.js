import{S as p,i as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(r){const o="https://pixabay.com/",i="/api/",s="?key=42127236-8bfdbbfbeed8a2dadaca720e8",e=`&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,t=o+i+s+e;return fetch(t).then(n=>n.json())}function m(){l.warning({title:"Caution",message:"Please type something to search!",position:"topRight"})}function d(){l.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function g(r){l.warning({title:"Caution",message:`Error: ${r}`,position:"topRight"})}function y(r){return r.hits.map(({webformatURL:o,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${s}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${e}</p>
  <p><b>Views</b> ${t}</p>
  <p><b>Comments</b> ${n}</p>
  <p><b>Downloads</b> ${u}</p>
 </div>
</li>`).join(`
`)}function h(r){const o=y(r);a.galleryEl.innerHTML=o}let c=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const a={formEl:document.querySelector(".search-form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.loader.style.display="none";a.formEl.addEventListener("submit",b);function b(r){r.preventDefault();const o=r.target.elements.text.value.trim();if(a.loader.style.display="block",!o){m();return}f(o).then(i=>{i.hits.length===0?(d(),a.galleryEl.innerHTML=""):(h(i),c.on("show.simplelightbox"),c.refresh()),a.loader.style.display="none"}).catch(i=>g(i)),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
