(() => {
  const url = new URL(window.location.href);
  const allowed = ['page', 'slug', 'id'];
  [...url.searchParams.keys()].forEach(key => { if (!allowed.includes(key)) url.searchParams.delete(key); });
  url.hash = '';
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
  canonical.href = url.href;
  const ogUrl = document.querySelector('meta[property="og:url"]') || Object.assign(document.createElement('meta'), {property:'og:url'});
  ogUrl.content = url.href; if (!ogUrl.parentNode) document.head.append(ogUrl);
  const image = document.querySelector('meta[property="og:image"]');
  if (image && image.content) image.content = new URL(image.content, window.location.href).href;
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage && twitterImage.content) twitterImage.content = new URL(twitterImage.content, window.location.href).href;
  const schema = {'@context':'https://schema.org','@type':'WebSite','name':"Zarafa Kenya",'description':"A private wilderness sanctuary in Kenya.",'url':window.location.origin + '/'};
  const ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.textContent = JSON.stringify(schema); document.head.append(ld);
})();
