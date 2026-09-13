// VMugdha company site — shared behavior (carousels + service tabs).
// Plain JS, no build step, no framework — mirrors the Lovable/TanStack source's behavior.

(function () {
  function initCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
      var track = carousel.querySelector('.carousel-track');
      var prev = carousel.querySelector('.carousel-nav.prev');
      var next = carousel.querySelector('.carousel-nav.next');
      if (!track) return;

      function scrollByAmount(direction) {
        var item = track.querySelector('.carousel-item');
        var step = item ? item.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
        track.scrollBy({ left: direction * step, behavior: 'smooth' });
      }

      if (prev) prev.addEventListener('click', function () { scrollByAmount(-1); });
      if (next) next.addEventListener('click', function () { scrollByAmount(1); });
    });
  }

  function initServiceTabs() {
    var tabsRoot = document.querySelector('[data-tabs]');
    if (!tabsRoot) return;

    var triggers = Array.prototype.slice.call(tabsRoot.querySelectorAll('.tab-trigger'));
    var panels = Array.prototype.slice.call(tabsRoot.querySelectorAll('.tab-panel'));
    var validBookmarks = triggers.map(function (t) { return t.getAttribute('data-bookmark'); });

    function activate(bookmark, updateHash) {
      if (validBookmarks.indexOf(bookmark) === -1) bookmark = validBookmarks[0];

      triggers.forEach(function (t) {
        t.classList.toggle('active', t.getAttribute('data-bookmark') === bookmark);
      });
      panels.forEach(function (p) {
        p.classList.toggle('active', p.getAttribute('data-panel') === bookmark);
      });

      if (updateHash) {
        window.history.pushState(null, '', '#' + bookmark);
      }
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        activate(trigger.getAttribute('data-bookmark'), true);
      });
    });

    window.addEventListener('hashchange', function () {
      activate(window.location.hash.slice(1), false);
    });

    activate(window.location.hash.slice(1), false);
  }

  function highlightActiveNavLink() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a[data-page]').forEach(function (link) {
      if (link.getAttribute('data-page') === current) {
        link.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCarousels();
    initServiceTabs();
    highlightActiveNavLink();
  });
})();
