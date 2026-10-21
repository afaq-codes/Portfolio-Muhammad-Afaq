(function () {
    function pageFile() {
        var path = (window.location.pathname || '').replace(/\\/g, '/');
        var file = path.split('/').pop() || '';
        try {
            file = decodeURIComponent(file);
        } catch (e) { /* ignore */ }
        if (!file || file === '/') {
            var href = window.location.href || '';
            var match = href.match(/\/([^/?#]+)(?:\?|#|$)/);
            if (match) file = match[1];
        }
        return file;
    }

    var file = pageFile();
    var isHome = !file || file === 'index.html' || file === 'index.htm';

    function pageUrl(hash) {
        var h = hash || '';
        if (h && h.charAt(0) !== '#') h = '#' + h;
        if (isHome) return h || 'index.html';
        return 'index.html' + h;
    }

    var projects = [
        { label: 'CareMD', demo: 'caremd-demo.html', hash: '#project-caremd' },
        { label: 'Nixxe CRM', demo: 'nixxe-crm-demo.html', hash: '#project-nixxe' },
        { label: 'RynoChat', demo: 'rynochat-demo.html', hash: '#project-rynochat' },
        { label: 'RynoDesk', demo: 'rynodesk-demo.html', hash: '#project-rynodesk' },
        { label: 'Orderyfy', demo: 'orderyfy-demo.html', hash: '#project-orderyfy' },
        { label: 'Nyrovi', demo: 'nyrovi-demo.html', hash: '#project-nyrovi' },
        { label: 'StockFlow', demo: 'stockflow-demo.html', hash: '#project-stockflow' },
        { label: 'Carer', demo: 'carer-demo.html', hash: '#project-carer' },
        { label: 'AutoSchedula', demo: 'autoschedula-demo.html', hash: '#project-autoschedula' },
        { label: 'Chiltan Pure ERP', demo: 'chiltan-demo.html', hash: '#project-erp' },
        { label: 'WellnessNow', demo: 'wellness-demo.html', hash: '#project-wellness' },
        { label: 'Chiltan Marketing', demo: 'chiltan-marketing-demo.html', hash: '#project-marketing' }
    ];

    var desktopProjectItems = projects.map(function (p) {
        return '<li><a class="dropdown-item" href="' + pageUrl(p.hash) + '">' + p.label + '</a></li>';
    }).join('');
    desktopProjectItems += '<li><hr class="dropdown-divider border-secondary"></li>';
    desktopProjectItems += '<li><a class="dropdown-item" href="' + pageUrl('#projects') + '">View all on portfolio</a></li>';

    var mobileProjectItems = projects.map(function (p) {
        return '<a class="mobile-nav-sublink" href="' + pageUrl(p.hash) + '">' + p.label + '</a>';
    }).join('');
    mobileProjectItems += '<a class="mobile-nav-sublink" href="' + pageUrl('#projects') + '">View all projects</a>';

    var navHtml =
        '<nav class="navbar navbar-expand-lg site-navbar navbar-dark">' +
            '<div class="container">' +
                '<a class="navbar-brand" href="index.html">' +
                    '<img src="afaq-72.png" alt="Muhammad Afaq" class="site-nav-avatar" width="36" height="36">' +
                    '<span class="brand-text">' +
                        '<span class="brand-name">Muhammad <span class="accent">Afaq</span></span>' +
                        '<span class="brand-subtitle">Full Stack Engineer, CRM and AI</span>' +
                    '</span>' +
                '</a>' +
                '<button class="navbar-toggler border-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-controls="mobileNav" aria-label="Open menu">' +
                    '<span class="navbar-toggler-icon"></span>' +
                '</button>' +
                '<ul class="navbar-nav ms-auto gap-1 d-none d-lg-flex align-items-center">' +
                    '<li class="nav-item"><a class="nav-link" href="' + pageUrl('#about') + '">About</a></li>' +
                    '<li class="nav-item"><a class="nav-link" href="' + pageUrl('#expertise') + '">Expertise</a></li>' +
                    '<li class="nav-item"><a class="nav-link" href="' + pageUrl('#experience') + '">Experience</a></li>' +
                    '<li class="nav-item dropdown dropdown-hover">' +
                        '<a class="nav-link dropdown-toggle" href="' + pageUrl('#projects') + '" role="button" aria-expanded="false">Projects</a>' +
                        '<ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">' + desktopProjectItems + '</ul>' +
                    '</li>' +
                    '<li class="nav-item"><a class="nav-link" href="' + pageUrl('#skills') + '">Skills</a></li>' +
                    '<li class="nav-item"><a class="nav-link" href="' + pageUrl('#contact') + '">Contact</a></li>' +
                '</ul>' +
            '</div>' +
        '</nav>';

    var offcanvasHtml =
        '<div class="offcanvas offcanvas-end offcanvas-mobile-nav" tabindex="-1" id="mobileNav" aria-labelledby="mobileNavLabel">' +
            '<div class="offcanvas-header">' +
                '<h5 class="offcanvas-title text-white" id="mobileNavLabel">Menu</h5>' +
                '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>' +
            '</div>' +
            '<div class="offcanvas-body">' +
                '<nav class="d-flex flex-column gap-1">' +
                    '<a class="mobile-nav-link" href="' + pageUrl('#about') + '"><i class="fas fa-user"></i> About</a>' +
                    '<a class="mobile-nav-link" href="' + pageUrl('#expertise') + '"><i class="fas fa-bullseye"></i> Expertise</a>' +
                    '<a class="mobile-nav-link" href="' + pageUrl('#experience') + '"><i class="fas fa-briefcase"></i> Experience</a>' +
                    '<div class="mobile-nav-submenu">' +
                        '<button class="mobile-nav-link mobile-nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#mobileProjectsMenu" aria-expanded="false" aria-controls="mobileProjectsMenu">' +
                            '<i class="fas fa-folder-open"></i> Projects <i class="fas fa-chevron-down chevron"></i>' +
                        '</button>' +
                        '<div class="collapse" id="mobileProjectsMenu">' + mobileProjectItems + '</div>' +
                    '</div>' +
                    '<a class="mobile-nav-link" href="' + pageUrl('#skills') + '"><i class="fas fa-code"></i> Skills</a>' +
                    '<a class="mobile-nav-link" href="' + pageUrl('#contact') + '"><i class="fas fa-envelope"></i> Contact</a>' +
                '</nav>' +
                '<a href="tel:+923021005535" class="mobile-nav-phone">' +
                    '<i class="fas fa-phone"></i><span>+92 302 1005535</span>' +
                '</a>' +
            '</div>' +
        '</div>';

    var mount = document.getElementById('site-nav');
    if (!mount) return;
    mount.outerHTML = navHtml;

    var existingOffcanvas = document.getElementById('mobileNav');
    if (existingOffcanvas) existingOffcanvas.remove();
    document.body.insertAdjacentHTML('beforeend', offcanvasHtml);

    var nav = document.querySelector('.site-navbar');
    var darkHero = document.querySelector('.hero-section, .hero-demo');
    var scrollThreshold = 28;

    document.body.classList.add('has-site-nav');
    if (darkHero) document.body.classList.add('has-dark-hero');

    function setNavHeight() {
        if (!nav) return;
        document.documentElement.style.setProperty('--site-nav-h', nav.offsetHeight + 'px');
    }

    function updateNavbarScroll() {
        if (!nav) return;
        var useGlass = window.scrollY > scrollThreshold || !darkHero;
        nav.classList.toggle('scrolled', useGlass);
    }

    function scrollToHash(hash) {
        if (!hash || hash.charAt(0) !== '#') return false;
        var target = document.querySelector(hash);
        if (!target) return false;
        var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        if (history.replaceState) {
            history.replaceState(null, '', hash);
        } else {
            window.location.hash = hash;
        }
        return true;
    }

    function navigateFromNav(href) {
        if (!href || href === '#') return;

        var hashIndex = href.indexOf('#');
        var hashPart = hashIndex >= 0 ? href.slice(hashIndex) : '';

        if (isHome && hashPart && document.querySelector(hashPart)) {
            scrollToHash(hashPart);
            return;
        }

        window.location.href = href;
    }

    function initMobileNav() {
        var offcanvasEl = document.getElementById('mobileNav');
        if (!offcanvasEl || typeof bootstrap === 'undefined') return;

        var offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

        offcanvasEl.querySelectorAll('a.mobile-nav-link, a.mobile-nav-sublink').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var href = link.getAttribute('href');
                if (!href) return;

                e.preventDefault();
                offcanvas.hide();
                offcanvasEl.addEventListener('hidden.bs.offcanvas', function onHidden() {
                    offcanvasEl.removeEventListener('hidden.bs.offcanvas', onHidden);
                    navigateFromNav(href);
                }, { once: true });
            });
        });
    }

    function initDesktopAnchors() {
        if (!isHome) return;
        document.querySelectorAll('.site-navbar a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var hash = link.getAttribute('href');
                if (!hash || hash.charAt(0) !== '#' || !document.querySelector(hash)) return;
                e.preventDefault();
                scrollToHash(hash);
            });
        });
    }

    setNavHeight();
    updateNavbarScroll();
    window.addEventListener('scroll', updateNavbarScroll, { passive: true });
    window.addEventListener('resize', function () {
        setNavHeight();
        updateNavbarScroll();
    }, { passive: true });

    if (isHome && window.location.hash) {
        window.addEventListener('load', function () {
            scrollToHash(window.location.hash);
        });
    }

    initMobileNav();
    initDesktopAnchors();
})();
