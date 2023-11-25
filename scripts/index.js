(function () {
    function calculatePageLoadTime() {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;

        const loadTimeDisplay = document.createElement('p');
        loadTimeDisplay.textContent = `Page load time: ${loadTime} milliseconds`;

        const timingInfo = document.createElement('p');
        timingInfo.textContent = `DNS time: ${timing.domainLookupEnd - timing.domainLookupStart}ms, 
                                  Connect time: ${timing.connectEnd - timing.connectStart}ms,
                                  Request time: ${timing.responseStart - timing.requestStart}ms,
                                  Response time: ${timing.responseEnd - timing.responseStart}ms,
                                  DOM processing time: ${timing.domComplete - timing.domLoading}ms`;

        const footer = document.querySelector('.footer-section');
        footer.appendChild(loadTimeDisplay);
        footer.appendChild(timingInfo);
    }

    window.addEventListener('load', calculatePageLoadTime);
})();
