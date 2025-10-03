(() => {
    const DEMO_MODE = true;

    const analytics = {
        initGA({ measurementId, demo }) {
            if (demo || DEMO_MODE) {
                console.info('[Sample Analytics] Google Analytics would init here:', measurementId);
                return;
            }
            // Real GA init would live here
        },
        initHotjar({ id, hjsv, demo }) {
            if (demo || DEMO_MODE) {
                console.info('[Sample Analytics] Hotjar placeholder:', id, hjsv);
                return;
            }
            // Real Hotjar init would live here
        },
        track(eventName, payload = {}) {
            if (DEMO_MODE) {
                console.info('[Sample Analytics] Event tracked:', eventName, payload);
                return;
            }
            // Real tracking dispatcher would live here
        }
    };

    window.analytics = analytics;
})();
