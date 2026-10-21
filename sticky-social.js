(function () {
    if (document.getElementById('sticky-social')) return;

    var html =
        '<div id="sticky-social" class="sticky-social" aria-label="Quick contact">' +
            '<a href="https://wa.me/923021005535" class="sticky-social-btn sticky-social-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" aria-label="WhatsApp">' +
                '<i class="fab fa-whatsapp" aria-hidden="true"></i>' +
            '</a>' +
            '<a href="https://www.linkedin.com/in/afaq-springboot-angular" class="sticky-social-btn sticky-social-linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn profile" aria-label="LinkedIn">' +
                '<i class="fab fa-linkedin-in" aria-hidden="true"></i>' +
            '</a>' +
        '</div>';

    document.body.insertAdjacentHTML('beforeend', html);

    function hideNearContact() {
        var bar = document.getElementById('sticky-social');
        if (!bar || !('IntersectionObserver' in window)) return;
        var targets = document.querySelectorAll('.hero-section, .hero-demo, #contact, .cta-band, .site-footer');
        if (!targets.length) return;
        var visible = new Set();
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    visible.add(entry.target);
                } else {
                    visible.delete(entry.target);
                }
            });
            bar.classList.toggle('is-hidden', visible.size > 0);
        }, { threshold: 0, rootMargin: '0px 0px -120px 0px' });
        Array.prototype.forEach.call(targets, function (el) {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideNearContact);
    } else {
        hideNearContact();
    }
})();
