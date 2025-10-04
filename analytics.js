(() => {
    const DEMO_MODE = true;
    const SAMPLE_LABEL = 'Sample Analytics';

    const sampleData = {
        visitorsTrend: [120, 180, 220, 260, 310, 360, 324],
        visitorsTotal: 3240,
        visitorsChange: 28,
        clicks: [
            { label: 'Contact Form', value: 640 },
            { label: 'Shop Preview', value: 410 },
            { label: 'Dashboard Demo', value: 295 },
            { label: 'Case Studies', value: 180 }
        ],
        timeOnSite: {
            average: '2m 47s',
            segments: [
                { label: '0-1 minute', value: 36 },
                { label: '1-3 minutes', value: 34 },
                { label: '3-5 minutes', value: 18 },
                { label: '5+ minutes', value: 12 }
            ]
        }
    };

    const tap = (message, payload) => {
        if (DEMO_MODE) {
            console.info(`[${SAMPLE_LABEL}] ${message}`, payload ?? '');
        }
    };

    const analytics = {
        init({ renderSamples = DEMO_MODE } = {}) {
            tap('analytics.init called', { renderSamples });
            if (renderSamples) {
                document.addEventListener('DOMContentLoaded', () => {
                    renderSampleMeta();
                    renderSampleCharts();
                });
            }
        },
        initGA({ measurementId, transport = 'beacon' } = {}) {
            tap('Google Analytics placeholder init', { measurementId, transport });
            // Production: Load GA script and start tracking here.
        },
        initHotjar({ id, hjsv } = {}) {
            tap('Hotjar placeholder init', { id, hjsv });
            // Production: Inject Hotjar snippet here.
        },
        registerCustomTracker(handler) {
            tap('Custom tracker registered');
            this._customTracker = handler;
        },
        track(eventName, payload = {}) {
            const enriched = { ...payload, source: SAMPLE_LABEL };
            tap(`Event tracked: ${eventName}`, enriched);
            if (!DEMO_MODE && typeof this._customTracker === 'function') {
                this._customTracker(eventName, enriched);
            }
        },
        getSampleData() {
            tap('Sample data requested', sampleData);
            return structuredClone ? structuredClone(sampleData) : JSON.parse(JSON.stringify(sampleData));
        }
    };

    function renderSampleMeta() {
        document.querySelectorAll('[data-sample-label]').forEach((node) => {
            node.textContent = SAMPLE_LABEL;
        });

        const changeTag = document.querySelector('[data-sample-change]');
        if (changeTag) {
            changeTag.textContent = `+${sampleData.visitorsChange}% week over week`;
        }

        const visitors = document.querySelector('[data-sample-visitors]');
        if (visitors) {
            visitors.textContent = sampleData.visitorsTotal.toLocaleString();
        }

        const timeAverage = document.querySelector('[data-sample-time]');
        if (timeAverage) {
            timeAverage.textContent = sampleData.timeOnSite.average;
        }

        const clickList = document.querySelector('[data-sample-clicks]');
        if (clickList) {
            clickList.innerHTML = sampleData.clicks
                .map((item) => `<li><span>${item.label}</span><span>${item.value}</span></li>`)
                .join('');
        }
    }

    function renderSampleCharts() {
        drawLineChart(document.querySelector('[data-chart="visitors-trend"]'), sampleData.visitorsTrend);
        drawBarChart(document.querySelector('[data-chart="clicks"]'), sampleData.clicks);
        drawDonutChart(
            document.querySelector('[data-chart="time-on-site"]'),
            sampleData.timeOnSite.segments,
            sampleData.timeOnSite.average
        );
    }

    function drawLineChart(container, points = []) {
        if (!container || !points.length) return;

        const max = Math.max(...points);
        const normalized = points
            .map((value, index) => {
                const x = (index / (points.length - 1)) * 100;
                const y = 100 - (value / max) * 100;
                return `${x},${y}`;
            })
            .join(' ');

        container.innerHTML = `
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation" aria-hidden="true">
                <defs>
                    <linearGradient id="sampleLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="rgba(59,130,246,0.85)" />
                        <stop offset="100%" stop-color="rgba(59,130,246,0.05)" />
                    </linearGradient>
                </defs>
                <polygon points="${normalized} 100,100 0,100" fill="url(#sampleLineGradient)" opacity="0.45"></polygon>
                <polyline points="${normalized}" fill="none" stroke="rgba(59,130,246,0.95)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></polyline>
            </svg>
        `;
    }

    function drawBarChart(container, items = []) {
        if (!container || !items.length) return;
        const max = Math.max(...items.map((item) => item.value));
        container.innerHTML = `
            <div class="analytics-bar-chart">
                ${items
                    .map((item) => {
                        const height = (item.value / max) * 100;
                        return `
                            <div class="analytics-bar">
                                <span class="analytics-bar__value">${item.value}</span>
                                <div class="analytics-bar__fill" style="height:${height}%"></div>
                                <span class="analytics-bar__label">${item.label}</span>
                            </div>
                        `;
                    })
                    .join('')}
            </div>
        `;
    }

    function drawDonutChart(container, segments = [], average = '') {
        if (!container || !segments.length) return;
        const colors = [
            'rgba(59,130,246,0.85)',
            'rgba(168,85,247,0.8)',
            'rgba(14,165,233,0.85)',
            'rgba(244,114,182,0.8)'
        ];
        let cumulative = 0;
        const gradientStops = segments
            .map((segment, index) => {
                const start = cumulative;
                cumulative += segment.value;
                return `${colors[index % colors.length]} ${start}% ${cumulative}%`;
            })
            .join(', ');

        container.innerHTML = `
            <div class="analytics-donut" style="background: conic-gradient(${gradientStops});">
                <div class="analytics-donut__center">
                    <span>${average}</span>
                    <span>avg session</span>
                </div>
            </div>
            <ul class="analytics-donut-legend">
                ${segments
                    .map(
                        (segment, index) => `
                            <li>
                                <span class="legend-swatch" style="background:${colors[index % colors.length]}"></span>
                                ${segment.label}
                                <span>${segment.value}%</span>
                            </li>
                        `
                    )
                    .join('')}
            </ul>
        `;
    }

    analytics.init();

    window.analytics = analytics;
})();
