/* Add Umami event attributes before the deferred tracker initializes. */
(function () {
  document.querySelectorAll('a[href]').forEach(function (link) {
    var url;
    try { url = new URL(link.href, window.location.href); } catch (_) { return; }
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return;
    if (url.origin === window.location.origin && url.pathname === '/files/CV.pdf') {
      link.setAttribute('data-umami-event', 'cv_download');
      link.setAttribute('data-umami-event-file', 'CV.pdf');
    } else if (url.hostname === 'doi.org' || url.hostname === 'dx.doi.org') {
      link.setAttribute('data-umami-event', 'doi_click');
      link.setAttribute('data-umami-event-doi', decodeURI(url.pathname.slice(1)));
      link.setAttribute('data-umami-event-url', url.origin + url.pathname);
    } else {
      return;
    }
    link.setAttribute('data-umami-event-source', window.location.pathname);
  });
})();
