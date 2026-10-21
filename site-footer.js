(function () {
    if (document.getElementById('global-contact')) return;

    var EMAIL = 'afaqch5535@gmail.com';
    var WHATSAPP = 'https://wa.me/923021005535';
    var LINKEDIN = 'https://www.linkedin.com/in/afaq-springboot-angular';
    var GITHUB = 'https://github.com/afaq-codes';

    var contactHtml =
        '<section id="contact" class="contact-band contact-band-light" aria-labelledby="contact-title">' +
            '<div class="container">' +
                '<div class="contact-band-grid">' +
                    '<div class="contact-band-copy">' +
                        '<p class="contact-avail"><span class="contact-avail-dot" aria-hidden="true"></span>Open to remote projects · Lahore, Pakistan (UTC+5)</p>' +
                        '<h2 id="contact-title" class="contact-heading">Have a CRM or AI project? Let<span class="contact-apos">\'</span>s build it.</h2>' +
                        '<p class="contact-desc">I build CRM systems, AI chatbots and multi-tenant SaaS on Spring Boot and Angular. Tell me what you need and let\'s plan it.</p>' +
                    '</div>' +
                    '<div class="contact-panel">' +
                        '<p class="contact-label">Email</p>' +
                        '<div class="contact-email">' +
                            '<span class="contact-email-text" id="contact-email-text">' + EMAIL + '</span>' +
                            '<button type="button" class="contact-copy" data-copy="' + EMAIL + '" data-copy-source="contact-email-text">' +
                                '<i class="far fa-copy" aria-hidden="true"></i><span class="contact-copy-label">Copy</span><span class="visually-hidden"> email address</span>' +
                            '</button>' +
                        '</div>' +
                        '<p class="contact-copy-status" role="status" aria-live="polite"></p>' +
                        '<div class="contact-btns">' +
                            '<a href="mailto:' + EMAIL + '" class="btn-cta btn-cta-email"><i class="fas fa-envelope" aria-hidden="true"></i> Email me</a>' +
                            '<a href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer" class="btn-cta btn-cta-whatsapp" title="Chat on WhatsApp"><i class="fab fa-whatsapp" aria-hidden="true"></i> +92 302 1005535</a>' +
                            '<a href="' + LINKEDIN + '" target="_blank" rel="noopener noreferrer" class="btn-cta btn-cta-linkedin"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a>' +
                            '<a href="' + GITHUB + '" target="_blank" rel="noopener noreferrer" class="btn-cta btn-cta-github"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</section>';

    var footerHtml =
        '<footer class="footer site-footer">' +
            '<div class="container">' +
                '<div class="footer-social">' +
                    '<a href="' + GITHUB + '" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>' +
                    '<a href="' + LINKEDIN + '" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a>' +
                    '<a href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer" title="WhatsApp: +92 302 1005535" aria-label="WhatsApp"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>' +
                    '<a href="mailto:' + EMAIL + '" title="Email" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a>' +
                '</div>' +
                '<p class="mb-0"><strong>Muhammad Afaq</strong> · Full Stack Engineer, CRM and AI · &copy; 2026</p>' +
            '</div>' +
        '</footer>';

    var hasPageContact = document.getElementById('contact') || document.querySelector('.cta-band');
    var html = (hasPageContact ? '' : contactHtml) + footerHtml;

    var mount = document.getElementById('site-footer');
    if (mount) {
        mount.outerHTML = html;
    } else {
        document.body.insertAdjacentHTML('beforeend', html);
    }

    function legacyCopy(text) {
        var area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.top = '0';
        area.style.left = '0';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.focus();
        area.select();
        area.setSelectionRange(0, text.length);
        var ok = false;
        try {
            ok = document.execCommand('copy');
        } catch (e) {
            ok = false;
        }
        document.body.removeChild(area);
        return ok;
    }

    function selectSource(id) {
        var node = id && document.getElementById(id);
        if (!node || !window.getSelection) return;
        var range = document.createRange();
        range.selectNodeContents(node);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function bindCopy(button) {
        var label = button.querySelector('.contact-copy-label');
        var icon = button.querySelector('i');
        var panel = button.closest('.contact-panel');
        var status = panel ? panel.querySelector('.contact-copy-status') : null;
        var timer = null;

        function report(ok) {
            if (ok) {
                button.classList.add('is-copied');
                if (label) label.textContent = 'Copied';
                if (icon) icon.className = 'fas fa-check';
                if (status) status.textContent = 'Email address copied.';
            } else {
                selectSource(button.getAttribute('data-copy-source'));
                if (status) status.textContent = 'Email selected. Press Ctrl+C or Cmd+C to copy.';
            }
            clearTimeout(timer);
            timer = setTimeout(function () {
                button.classList.remove('is-copied');
                if (label) label.textContent = 'Copy';
                if (icon) icon.className = 'far fa-copy';
                if (status) status.textContent = '';
            }, 2400);
        }

        button.addEventListener('click', function () {
            var text = button.getAttribute('data-copy') || '';
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(function () {
                    report(true);
                }, function () {
                    report(legacyCopy(text));
                });
            } else {
                report(legacyCopy(text));
            }
        });
    }

    Array.prototype.forEach.call(document.querySelectorAll('[data-copy]'), bindCopy);
})();
