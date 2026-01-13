const delays = {
    short: 150,
    medium: 300,
    long: 500
}

document.addEventListener("DOMContentLoaded", function() {
    // 1. Reveal hero elements on load
    const loadReveals = document.querySelectorAll('.reveal[data-reveal="load"]');

    loadReveals.forEach((el) => {
    const delay = delays[el.dataset.delay] ?? 0;

    setTimeout(() => {
        el.classList.add("is-visible");
    }, delay);
    });


    // 2. Scroll-based reveals for everything else
    // If IntersectionObserver is unavailable, reveal all elements immediately
    const scrollReveals = document.querySelectorAll('.reveal:not([data-reveal="load"])');

    if (!('IntersectionObserver' in window)) {
        scrollReveals.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = delays[el.dataset.delay] ?? 0;

                    setTimeout(() => {
                        el.classList.add('is-visible');
                    }, delay);

                    observerInstance.unobserve(el);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -10% 0px'
        }
    );

    scrollReveals.forEach(el => {
        // Skip hero elements as they are handled on load
        // if (!el.closest('#hero')) {
        observer.observe(el);
        // }
    });
});