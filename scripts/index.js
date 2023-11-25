(function () {
    window.addEventListener("load", function () {
        const durationElement = document.querySelector(".time-load");
        if (durationElement) {
            const loadTime = performance.now();
            durationElement.textContent = loadTime.toFixed(1) + "mc";
        }
    })
})();
