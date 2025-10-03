(function () {
    const SEARCH_HIT_CLASS = 'search-hit';
    const SEARCH_HIDDEN_CLASS = 'search-hidden';
    const SUGGESTION_ACTIVE_CLASS = 'search-suggestion--active';
    const MAX_SUGGESTIONS = 6;
    const DEMO_MESSAGE_DEFAULT = 'Demo Mode - Feature Disabled';

    const SEARCH_INDEX = [
        {
            id: 'custom-websites',
            label: 'Custom Websites',
            url: 'services.html#custom-websites',
            category: 'Service',
            keywords: 'custom websites web development marketing site launch conversion design animation seo analytics hosting strategy'
        },
        {
            id: 'landing-pages',
            label: 'Landing Pages',
            url: 'services.html#landing-pages',
            category: 'Service',
            keywords: 'landing pages funnels campaign conversion paid ads product launch lead magnet'
        },
        {
            id: 'ecommerce-sites',
            label: 'E-commerce Sites',
            url: 'services.html#ecommerce-sites',
            category: 'Service',
            keywords: 'ecommerce store storefront checkout product catalog payments shopify automation online sales'
        },
        {
            id: 'mobile-apps',
            label: 'Mobile Apps',
            url: 'services.html#mobile-apps',
            category: 'Service',
            keywords: 'mobile apps progressive web app pwa cross-platform ios android prototype ux ui'
        },
        {
            id: 'wifi-setup',
            label: 'Wi-Fi Setup',
            url: 'services.html#wifi-setup',
            category: 'Service',
            keywords: 'wifi setup networking mesh routers coverage install troubleshooting'
        },
        {
            id: 'network-as-a-service',
            label: 'Network as a Service',
            url: 'services.html#network-as-a-service',
            category: 'Service',
            keywords: 'network as a service naas monitoring managed network vpn sd-wan uptime alerts security'
        },
        {
            id: 'cybersecurity-basics',
            label: 'Cybersecurity Basics',
            url: 'services.html#cybersecurity-basics',
            category: 'Service',
            keywords: 'cybersecurity security audit backups training incident response passwords hardening'
        },
        {
            id: 'managed-it-support',
            label: 'Managed IT Support',
            url: 'services.html#managed-it-support',
            category: 'Service',
            keywords: 'managed it support helpdesk devices patching maintenance monitoring updates remote assistance'
        },
        {
            id: 'resume-optimizer-service',
            label: 'Resume Optimizer (Service)',
            url: 'services.html#resume-optimizer-service',
            category: 'Service',
            keywords: 'resume optimizer rewrite ai editing branding personal profile bullet metrics career'
        },
        {
            id: 'chatbot-setup',
            label: 'Chatbot Setup',
            url: 'services.html#chatbot-setup',
            category: 'Service',
            keywords: 'chatbot setup ai automation customer support help desk conversational assistant'
        },
        {
            id: 'workflow-automation-scripts',
            label: 'Workflow Automation Scripts',
            url: 'services.html#workflow-automation-scripts',
            category: 'Service',
            keywords: 'workflow automation scripts integrations zaps ai bots operations efficiency repetitive tasks'
        },
        {
            id: 'resume-linkedin-refresh',
            label: 'Resume & LinkedIn Refresh',
            url: 'services.html#resume-linkedin-refresh',
            category: 'Service',
            keywords: 'resume linkedin refresh personal brand profile rewrite cover letter career story'
        },
        {
            id: 'logo-design',
            label: 'Logo Design',
            url: 'services.html#logo-design',
            category: 'Service',
            keywords: 'logo design identity branding mark vector typography icon'
        },
        {
            id: 'marketing-copy',
            label: 'Marketing Copy',
            url: 'services.html#marketing-copy',
            category: 'Service',
            keywords: 'marketing copy email launch product storytelling messaging conversion copywriting'
        },
        {
            id: 'visual-style-guides',
            label: 'Visual Style Guides',
            url: 'services.html#visual-style-guides',
            category: 'Service',
            keywords: 'visual style guides typography palette brand kit documentation design system'
        },
        {
            id: 'pc-builds-service',
            label: 'PC Builds',
            url: 'services.html#pc-builds-service',
            category: 'Service',
            keywords: 'pc builds workstation gaming rig custom hardware assembly cable management burn-in'
        },
        {
            id: 'performance-tuning',
            label: 'Performance Tuning',
            url: 'services.html#performance-tuning',
            category: 'Service',
            keywords: 'performance tuning overclock thermal optimisation cooling bios fan curve benchmarks'
        },
        {
            id: 'hardware-consulting-service',
            label: 'Hardware Consulting',
            url: 'services.html#hardware-consulting-service',
            category: 'Service',
            keywords: 'hardware consulting upgrades planning procurement bom sourcing compatibility'
        },
        {
            id: 'maintenance-plans',
            label: 'Maintenance Plans',
            url: 'services.html#maintenance-plans',
            category: 'Service',
            keywords: 'maintenance plans cleaning support firmware updates monitoring backups preventative care'
        },
        {
            id: 'portfolio-website-demo',
            label: 'Portfolio Website Demo',
            url: 'projects.html#portfolio-website-demo',
            category: 'Project',
            keywords: 'portfolio demo personal brand designer developer case study modular neon'
        },
        {
            id: 'business-landing-page',
            label: 'Business Landing Page',
            url: 'projects.html#business-landing-page',
            category: 'Project',
            keywords: 'business landing page saas startup conversions pricing testimonial launch'
        },
        {
            id: 'restaurant-website',
            label: 'Restaurant Website',
            url: 'projects.html#restaurant-website',
            category: 'Project',
            keywords: 'restaurant website menu reservations food hospitality online ordering'
        },
        {
            id: 'photography-showcase',
            label: 'Photography Showcase',
            url: 'projects.html#photography-showcase',
            category: 'Project',
            keywords: 'photography showcase gallery lightbox storytelling portfolio imagery'
        },
        {
            id: 'resume-personal-site',
            label: 'Resume + Personal Site',
            url: 'projects.html#resume-personal-site',
            category: 'Project',
            keywords: 'resume personal site timeline metrics recruiter career opportunity'
        },
        {
            id: 'ecommerce-storefront',
            label: 'E-Commerce Storefront',
            url: 'projects.html#ecommerce-storefront',
            category: 'Project',
            keywords: 'ecommerce storefront shop cart promotions countdown reviews fulfillment automation'
        },
        {
            id: 'photo-finder-app',
            label: 'Photo Finder App',
            url: 'labs.html#photo-finder-app',
            category: 'Tool',
            keywords: 'photo finder app search tagging ai asset management palette metadata'
        },
        {
            id: 'file-organizer-tool',
            label: 'File Organizer Tool',
            url: 'labs.html#file-organizer-tool',
            category: 'Tool',
            keywords: 'file organizer automation rename sync folder structure rules workflows'
        },
        {
            id: 'resume-optimizer',
            label: 'Resume Optimizer (Tool)',
            url: 'labs.html#resume-optimizer',
            category: 'Tool',
            keywords: 'resume optimizer ai branding rewrite bullet improvements scoring job ready'
        },
        {
            id: 'social-media-planner',
            label: 'Social Media Planner',
            url: 'labs.html#social-media-planner',
            category: 'Tool',
            keywords: 'social media planner scheduler content calendar campaign automation posts'
        },
        {
            id: 'starter-build',
            label: 'Starter Build',
            url: 'labs.html#starter-build',
            category: 'Build',
            keywords: 'starter build pc entry workstation budget build parts list'
        },
        {
            id: 'gaming-build',
            label: 'Gaming Build',
            url: 'labs.html#gaming-build',
            category: 'Build',
            keywords: 'gaming build rgb performance fps overclock esports streaming'
        },
        {
            id: 'creator-build',
            label: 'Creator Build',
            url: 'labs.html#creator-build',
            category: 'Build',
            keywords: 'creator build editing workstation rendering adobe davinci video production'
        },
        {
            id: 'hardware-consulting-labs',
            label: 'Hardware Consulting Lab',
            url: 'labs.html#hardware-consulting-labs',
            category: 'Build',
            keywords: 'hardware consulting lab upgrades part sourcing compatibility roadmap'
        },
        {
            id: 'website-templates',
            label: 'Website Templates',
            url: 'labs.html#website-templates',
            category: 'Kit',
            keywords: 'website templates theme starter kit sections components neon'
        },
        {
            id: 'graphics-packs',
            label: 'Graphics Packs',
            url: 'labs.html#graphics-packs',
            category: 'Kit',
            keywords: 'graphics packs overlays gradients icons branding social media assets'
        },
        {
            id: 'audio-packs',
            label: 'Audio Packs',
            url: 'labs.html#audio-packs',
            category: 'Kit',
            keywords: 'audio packs loops sound design synthwave stingers alerts'
        },
        {
            id: 'quick-website-launch-guide',
            label: 'Quick Website Launch Guide',
            url: 'labs.html#quick-website-launch-guide',
            category: 'Guide',
            keywords: 'quick website launch guide ebook roadmap checklist neon weekend build'
        },
        {
            id: 'resume-mistakes-ebook',
            label: 'Resume Mistakes eBook',
            url: 'labs.html#resume-mistakes-ebook',
            category: 'Guide',
            keywords: 'resume mistakes ebook career tips recruiter insights pitfalls'
        },
        {
            id: 'video-lessons',
            label: 'Video Lessons',
            url: 'labs.html#video-lessons',
            category: 'Course',
            keywords: 'video lessons course automation branding walkthrough tutorials on-demand'
        },
        {
            id: 'home-web-development',
            label: 'Web Development Overview',
            url: 'index.html#home-web-development',
            category: 'Overview',
            keywords: 'home web development overview services custom site landing app'
        },
        {
            id: 'home-ai-tools',
            label: 'AI Tools Overview',
            url: 'index.html#home-ai-tools',
            category: 'Overview',
            keywords: 'home ai tools overview automation resume optimizer chatbot assistant'
        },
        {
            id: 'home-custom-pcs',
            label: 'Custom PCs Overview',
            url: 'index.html#home-custom-pcs',
            category: 'Overview',
            keywords: 'home custom pcs overview hardware builds tuning maintenance rigs'
        },
        {
            id: 'home-photo-finder',
            label: 'Photo Finder Highlight',
            url: 'index.html#home-photo-finder',
            category: 'Overview',
            keywords: 'home photo finder labs highlight asset search tagging'
        },
        {
            id: 'home-custom-pc-builds',
            label: 'Custom PC Builds Highlight',
            url: 'index.html#home-custom-pc-builds',
            category: 'Overview',
            keywords: 'home custom pc builds highlight labs hardware blueprint'
        },
        {
            id: 'about-story',
            label: 'Aftercode Story',
            url: 'about.html#about-story',
            category: 'Overview',
            keywords: 'about aftercode austin franklin story background mission automation neon'
        },
        {
            id: 'tech-stack',
            label: 'Tech Stack',
            url: 'about.html#tech-stack',
            category: 'Overview',
            keywords: 'tech stack html css javascript electron github automation hardware'
        },
        {
            id: 'contact-form',
            label: 'Project Inquiry Form',
            url: 'contact.html#contact-form',
            category: 'Contact',
            keywords: 'contact form project quote message start collaboration'
        },
        {
            id: 'contact-alternatives',
            label: 'Connect Elsewhere',
            url: 'contact.html#contact-alternatives',
            category: 'Contact',
            keywords: 'connect email phone github linkedin text message'
        }
    ];

    const FALLBACK_SUGGESTIONS = [
        {
            label: 'Browse Services Catalog',
            url: 'services.html',
            category: 'Category',
            keywords: 'services catalog offerings web app automation hardware support'
        },
        {
            label: 'See Featured Projects',
            url: 'projects.html',
            category: 'Category',
            keywords: 'projects portfolio demos case studies resume storefront'
        },
        {
            label: 'Explore Labs & Tools',
            url: 'labs.html',
            category: 'Category',
            keywords: 'labs tools apps utilities pc builds guides resources'
        },
        {
            label: 'Learn About Aftercode',
            url: 'about.html#about-story',
            category: 'Category',
            keywords: 'about aftercode story background mission'
        },
        {
            label: 'Contact Aftercode',
            url: 'contact.html#contact-form',
            category: 'Category',
            keywords: 'contact email message quote support text phone'
        }
    ];

    function initSearch() {
        const form = document.querySelector('[data-search-form]:not([data-demo-disabled])');
        if (!form) return;

        const input = form.querySelector('[data-search-input]');
        const suggestionsEl = form.parentElement.querySelector('[data-search-suggestions]');
        const feedback = form.parentElement.querySelector('[data-search-feedback]');
        const targets = Array.from(document.querySelectorAll('[data-search-target]'));

        if (!input || !suggestionsEl) return;

        input.setAttribute('aria-expanded', 'false');

        const currentPath = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';

        const normalizedIndex = SEARCH_INDEX.map((entry, order) => ({
            ...entry,
            order,
            normalizedKeywords: `${entry.label} ${entry.keywords || ''}`.toLowerCase()
        }));

        const normalizedFallback = FALLBACK_SUGGESTIONS.map((entry, order) => ({
            ...entry,
            order,
            normalizedKeywords: `${entry.label} ${entry.keywords || ''}`.toLowerCase()
        }));

        let currentSuggestions = normalizedFallback.slice(0, MAX_SUGGESTIONS);
        let activeIndex = currentSuggestions.length ? 0 : -1;

        const CATEGORY_PRIORITY = {
            Service: 6,
            Project: 5,
            Tool: 4,
            Build: 4,
            Kit: 3,
            Guide: 3,
            Course: 3,
            Overview: 2,
            Contact: 2,
            Category: 1
        };

        const setFeedback = (message) => {
            if (!feedback) return;
            if (message) {
                feedback.textContent = message;
                feedback.classList.add('is-visible');
            } else {
                feedback.textContent = '';
                feedback.classList.remove('is-visible');
            }
        };

        const clearHighlights = () => {
            if (!targets.length) return;
            targets.forEach((target) => {
                target.classList.remove(SEARCH_HIT_CLASS, SEARCH_HIDDEN_CLASS);
            });
        };

        const applyHighlights = (term) => {
            if (!targets.length) return 0;
            const tokens = term.split(/\s+/).filter(Boolean);
            if (!tokens.length) {
                clearHighlights();
                return 0;
            }

            let matches = 0;

            targets.forEach((target) => {
                const keywords = (target.dataset.searchTerms || target.textContent || '').toLowerCase();
                const matched = tokens.every((token) => keywords.includes(token));
                if (matched) {
                    target.classList.add(SEARCH_HIT_CLASS);
                    target.classList.remove(SEARCH_HIDDEN_CLASS);
                    const detailParent = target.closest('details');
                    if (detailParent) detailParent.open = true;
                    matches += 1;
                } else {
                    target.classList.remove(SEARCH_HIT_CLASS);
                    target.classList.add(SEARCH_HIDDEN_CLASS);
                }
            });

            return matches;
        };

        const scoreEntry = (entry, tokens, rawTerm) => {
            if (!tokens.length) {
                return 10 - Math.min(entry.order, 10);
            }

            let score = 0;
            const normalizedLabel = entry.label.toLowerCase();
            const keywords = entry.normalizedKeywords;

            if (normalizedLabel === rawTerm) score += 140;
            if (normalizedLabel.startsWith(rawTerm) && rawTerm.length > 1) score += 80;
            if (normalizedLabel.includes(rawTerm)) score += 50;

            let allTokensFound = true;

            tokens.forEach((token) => {
                if (normalizedLabel.includes(token)) {
                    score += 30;
                } else if (keywords.includes(token)) {
                    score += 22;
                } else {
                    allTokensFound = false;
                }
            });

            if (allTokensFound && tokens.length > 1) {
                score += 20;
            }

            tokens.forEach((token) => {
                if (token.length > 3 && keywords.includes(token.slice(0, 3))) {
                    score += 8;
                }
            });

            score += CATEGORY_PRIORITY[entry.category] || 0;
            score += Math.max(0, 6 - entry.order);

            return score;
        };

        const getSuggestions = (term) => {
            const rawTerm = term.trim().toLowerCase();
            const tokens = rawTerm.split(/\s+/).filter(Boolean);

            if (!tokens.length) {
                return normalizedFallback.slice(0, MAX_SUGGESTIONS);
            }

            const matches = [];

            normalizedIndex.forEach((entry) => {
                const score = scoreEntry(entry, tokens, rawTerm);
                if (score > 0) {
                    matches.push({ ...entry, score });
                }
            });

            matches.sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                if (a.category !== b.category) {
                    return (CATEGORY_PRIORITY[b.category] || 0) - (CATEGORY_PRIORITY[a.category] || 0);
                }
                return a.order - b.order;
            });

            if (matches.length > 0) {
                return matches.slice(0, MAX_SUGGESTIONS);
            }

            const fallbackMatches = normalizedFallback
                .map((entry) => {
                    let score = 0;
                    tokens.forEach((token) => {
                        if (entry.normalizedKeywords.includes(token)) {
                            score += 15;
                        }
                    });
                    return { ...entry, score };
                })
                .filter((entry) => entry.score > 0)
                .sort((a, b) => b.score - a.score || a.order - b.order);

            return (fallbackMatches.length ? fallbackMatches : normalizedFallback).slice(0, MAX_SUGGESTIONS);
        };

        const setActive = (index) => {
            const buttons = Array.from(suggestionsEl.querySelectorAll('.search-suggestion'));
            if (!buttons.length) {
                activeIndex = -1;
                return;
            }

            activeIndex = Math.max(0, Math.min(index, buttons.length - 1));

            buttons.forEach((button, idx) => {
                if (idx === activeIndex) {
                    button.classList.add(SUGGESTION_ACTIVE_CLASS);
                    button.setAttribute('aria-selected', 'true');
                } else {
                    button.classList.remove(SUGGESTION_ACTIVE_CLASS);
                    button.removeAttribute('aria-selected');
                }
            });
        };

        const renderSuggestions = (list) => {
            currentSuggestions = list;
            suggestionsEl.innerHTML = '';

            if (!list || !list.length) {
                suggestionsEl.classList.remove('is-visible');
                input.setAttribute('aria-expanded', 'false');
                activeIndex = -1;
                return;
            }

            const fragment = document.createDocumentFragment();

            list.forEach((item, index) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'search-suggestion';
                button.setAttribute('role', 'option');
                button.setAttribute('data-index', String(index));
                button.innerHTML = `<span class="search-suggestion__label">${item.label}</span><span class="search-suggestion__meta">${item.category}</span>`;

                button.addEventListener('mouseenter', () => setActive(index));
                button.addEventListener('focus', () => setActive(index));
                button.addEventListener('mousedown', (event) => {
                    event.preventDefault();
                    goToSuggestion(item);
                });

                fragment.appendChild(button);
            });

            suggestionsEl.appendChild(fragment);
            suggestionsEl.classList.add('is-visible');
            input.setAttribute('aria-expanded', 'true');
            setActive(0);
        };

        const closeSuggestions = () => {
            suggestionsEl.innerHTML = '';
            suggestionsEl.classList.remove('is-visible');
            input.setAttribute('aria-expanded', 'false');
            activeIndex = -1;
        };

        const splitUrl = (url) => {
            if (!url) return { path: '', hash: '' };
            const [pathPart, hashPart] = url.split('#');
            return {
                path: pathPart || '',
                hash: hashPart || ''
            };
        };

        const isSamePage = (path) => {
            if (!path) return true;
            return path === currentPath || path === `./${currentPath}`;
        };

        const goToSuggestion = (item) => {
            if (!item) return;
            closeSuggestions();
            input.value = item.label;

            const { path, hash } = splitUrl(item.url || '');

            if (isSamePage(path)) {
                if (hash) {
                    if (path && path !== currentPath) {
                        window.location.href = `${path}#${hash}`;
                        return;
                    }

                    history.replaceState(null, '', `#${hash}`);
                    clearHighlights();
                    const anchor = document.getElementById(hash);
                    if (anchor) {
                        anchor.classList.add(SEARCH_HIT_CLASS);
                        anchor.classList.remove(SEARCH_HIDDEN_CLASS);
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setFeedback(`Jumped to ${item.label}.`);
                    }
                    return;
                }

                if (path && path !== currentPath) {
                    window.location.href = path;
                }
                return;
            }

            window.location.href = item.url;
        };

        const handleInput = () => {
            const term = input.value;
            const suggestions = getSuggestions(term);
            renderSuggestions(suggestions);

            if (!term.trim()) {
                clearHighlights();
                setFeedback('Try keywords like "AI tools", "resume", or "custom PC".');
                return;
            }

            const matchCount = applyHighlights(term.toLowerCase());
            const topSuggestion = suggestions[0];

            if (topSuggestion && matchCount > 0) {
                setFeedback(`Found ${matchCount} on this page. Press Enter to open ${topSuggestion.label}.`);
            } else if (topSuggestion) {
                setFeedback(`Press Enter to open ${topSuggestion.label}.`);
            } else if (matchCount > 0) {
                setFeedback(`Found ${matchCount} on this page.`);
            } else {
                setFeedback('No direct matches - press Enter to jump to the closest result.');
            }
        };

        input.addEventListener('input', handleInput);

        input.addEventListener('focus', () => {
            if (!suggestionsEl.childElementCount) {
                renderSuggestions(currentSuggestions);
            }
        });

        input.addEventListener('keydown', (event) => {
            if (!currentSuggestions.length) return;
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                const next = activeIndex < currentSuggestions.length - 1 ? activeIndex + 1 : 0;
                setActive(next);
                const button = suggestionsEl.querySelector(`.search-suggestion[data-index="${next}"]`);
                if (button) button.focus();
            } else if (event.key === 'Enter') {
                event.preventDefault();
                const selected = currentSuggestions[Math.max(activeIndex, 0)] || currentSuggestions[0];
                goToSuggestion(selected);
            } else if (event.key === 'Escape') {
                closeSuggestions();
                clearHighlights();
                setFeedback('');
            }
        });

        suggestionsEl.addEventListener('keydown', (event) => {
            if (!currentSuggestions.length) return;
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                const direction = event.key === 'ArrowDown' ? 1 : -1;
                const next = (activeIndex + direction + currentSuggestions.length) % currentSuggestions.length;
                setActive(next);
                const button = suggestionsEl.querySelector(`.search-suggestion[data-index="${next}"]`);
                if (button) button.focus();
            } else if (event.key === 'Enter') {
                event.preventDefault();
                const selected = currentSuggestions[Math.max(activeIndex, 0)] || currentSuggestions[0];
                goToSuggestion(selected);
            } else if (event.key === 'Escape') {
                event.preventDefault();
                closeSuggestions();
                input.focus();
            }
        });

        document.addEventListener('click', (event) => {
            if (!form.contains(event.target)) {
                closeSuggestions();
            }
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const selected = currentSuggestions[Math.max(activeIndex, 0)] || currentSuggestions[0];
            if (selected) {
                goToSuggestion(selected);
            }
        });

        renderSuggestions(currentSuggestions);
        setFeedback('Try keywords like "AI tools", "resume", or "custom PC".');
    }

    function initExpandables() {
        const buttons = document.querySelectorAll('[data-learn-more]');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const container = button.closest('[data-expandable]') || button.closest('[data-search-target]');
                if (!container) return;
                const content = container.querySelector('[data-expandable-content]');
                if (!content) return;

                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', String(!isExpanded));
                content.hidden = isExpanded;
                button.textContent = isExpanded ? 'Learn More' : 'Show Less';
            });
        });
    }

    function initServiceDemo() {
        const keywordsInput = document.getElementById('demo-keywords');
        const generateBtn = document.getElementById('demo-generate');
        const preview = document.getElementById('demo-preview');

        if (!keywordsInput || !generateBtn || !preview) return;

        const headingEl = preview.querySelector('.demo-heading');
        const cardEl = preview.querySelector('.demo-card');
        const descriptionEl = preview.querySelector('.demo-description');
        const imageEl = preview.querySelector('.demo-image');

        const palettes = ['pulse', 'vertex', 'signal', 'flare'];
        const suggestions = [
            {
                heading: (keyword) => (keyword ? `${keyword} Vision Portal` : 'Electric Launchpad'),
                description: (keyword) => `Immersive hero, bold typography, and interactive callouts tailored for ${keyword || 'modern creators'}.`
            },
            {
                heading: (keyword) => (keyword ? `${keyword} Studio Grid` : 'Hyperdrive Studio Grid'),
                description: (keyword) => `Modular section stack with animated highlights, feature tiles, and glowing metrics for ${keyword || 'your launch'}.`
            },
            {
                heading: (keyword) => (keyword ? `${keyword} Signal Site` : 'Pulse Signal Experience'),
                description: (keyword) => `Split-layout hero, dynamic testimonial loop, and CTA banner styled to propel ${keyword || 'your next release'}.`
            },
            {
                heading: (keyword) => (keyword ? `${keyword} Neon Stage` : 'Neon Stage Presence'),
                description: (keyword) => `Full-screen visuals, marquee headlines, and custom accent palette designed for ${keyword || 'bold storytellers'}.`
            }
        ];

        const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

        const updatePreview = () => {
            const keyword = keywordsInput.value.trim();
            const suggestion = randomItem(suggestions);
            const accent = randomItem(palettes);

            headingEl.textContent = suggestion.heading(keyword);
            descriptionEl.textContent = suggestion.description(keyword);
            cardEl.dataset.accent = accent;
            imageEl.dataset.accent = accent;
        };

        generateBtn.addEventListener('click', updatePreview);
        updatePreview();
    }
    function initTestimonialCarousel() {
        const tracks = document.querySelectorAll('.testimonial-track');
        if (!tracks.length) return;

        const mediaQuery = window.matchMedia('(max-width: 720px)');

        tracks.forEach((track) => {
            if (track.dataset.carouselBound === 'true') return;
            track.dataset.carouselBound = 'true';

            const cards = Array.from(track.querySelectorAll('.testimonial-card'));
            if (cards.length < 2) return;

            const container = track.closest('[data-testimonial-carousel]');
            const prevBtn = container?.querySelector('[data-testimonial-prev]');
            const nextBtn = container?.querySelector('[data-testimonial-next]');

            track.setAttribute('role', 'list');
            cards.forEach((card, index) => {
                card.setAttribute('role', 'listitem');
                card.setAttribute('aria-label', `Testimonial ${index + 1} of ${cards.length}`);
            });

            let activeIndex = 0;

            const updateNavState = () => {
                if (!prevBtn && !nextBtn) return;
                if (!mediaQuery.matches) {
                    prevBtn?.setAttribute('disabled', 'true');
                    nextBtn?.setAttribute('disabled', 'true');
                    return;
                }

                if (activeIndex <= 0) {
                    prevBtn?.setAttribute('disabled', 'true');
                } else {
                    prevBtn?.removeAttribute('disabled');
                }

                if (activeIndex >= cards.length - 1) {
                    nextBtn?.setAttribute('disabled', 'true');
                } else {
                    nextBtn?.removeAttribute('disabled');
                }
            };

            const scrollToIndex = (index) => {
                const nextIndex = Math.max(0, Math.min(index, cards.length - 1));
                activeIndex = nextIndex;
                const target = cards[nextIndex];
                if (!target) return;
                const left = typeof target.offsetLeft === 'number' ? target.offsetLeft : 0;
                if (typeof track.scrollTo === 'function') {
                    track.scrollTo({ left, behavior: 'smooth' });
                } else {
                    track.scrollLeft = left;
                }
                updateNavState();
            };

            const syncFocusState = () => {
                if (mediaQuery.matches) {
                    track.tabIndex = 0;
                    track.setAttribute('aria-live', 'polite');
                    track.setAttribute('aria-roledescription', 'carousel');
                    updateNavState();
                } else {
                    track.tabIndex = -1;
                    track.removeAttribute('aria-live');
                    track.removeAttribute('aria-roledescription');
                    activeIndex = 0;
                    if (typeof track.scrollTo === 'function') {
                        track.scrollTo({ left: 0, behavior: 'auto' });
                    } else {
                        track.scrollLeft = 0;
                    }
                    updateNavState();
                }
            };

            prevBtn?.addEventListener('click', () => {
                scrollToIndex(activeIndex - 1);
            });

            nextBtn?.addEventListener('click', () => {
                scrollToIndex(activeIndex + 1);
            });

            track.addEventListener('keydown', (event) => {
                if (!mediaQuery.matches) return;
                if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    scrollToIndex(activeIndex + 1);
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    scrollToIndex(activeIndex - 1);
                }
            });

            let scrollTimer = null;
            track.addEventListener('scroll', () => {
                if (!mediaQuery.matches) return;
                if (scrollTimer) {
                    window.clearTimeout(scrollTimer);
                }
                scrollTimer = window.setTimeout(() => {
                    let closest = activeIndex;
                    let minDistance = Number.POSITIVE_INFINITY;
                    cards.forEach((card, cardIndex) => {
                        const distance = Math.abs(card.offsetLeft - track.scrollLeft);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closest = cardIndex;
                        }
                    });
                    activeIndex = closest;
                    updateNavState();
                }, 120);
            }, { passive: true });

            const onChange = () => syncFocusState();
            if (typeof mediaQuery.addEventListener === 'function') {
                mediaQuery.addEventListener('change', onChange);
            } else if (typeof mediaQuery.addListener === 'function') {
                mediaQuery.addListener(onChange);
            }

            syncFocusState();
        });
    }

    function initDemoMode() {
        const modal = document.getElementById('demo-modal');
        if (!modal) return;

        const messageEl = modal.querySelector('[data-demo-message]');
        const closeBtn = modal.querySelector('[data-demo-dismiss]');
        let lastFocusedElement = null;

        const setMessage = (source) => {
            if (!messageEl) return;
            const custom = source?.getAttribute('data-demo-message');
            messageEl.textContent = custom && custom.trim() ? custom : DEMO_MESSAGE_DEFAULT;
        };

        const openModal = (source) => {
            setMessage(source);
            lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            modal.hidden = false;
            document.body.style.overflow = 'hidden';
            closeBtn?.focus();
        };

        const closeModal = () => {
            modal.hidden = true;
            document.body.style.overflow = '';
            if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                lastFocusedElement.focus();
            }
        };

        closeBtn?.addEventListener('click', (event) => {
            event.preventDefault();
            closeModal();
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !modal.hidden) {
                closeModal();
            }
        });

        const triggerDemo = (event, source) => {
            event.preventDefault();
            event.stopPropagation();
            openModal(source);
        };

        const disabledForms = document.querySelectorAll('form[data-demo-disabled]');
        disabledForms.forEach((form) => {
            form.setAttribute('aria-disabled', 'true');
            form.addEventListener('submit', (event) => triggerDemo(event, form));
        });

        const disabledActions = document.querySelectorAll('[data-demo-disabled]:not(form)');
        disabledActions.forEach((element) => {
            if (element.tagName === 'A') {
                element.setAttribute('aria-disabled', 'true');
                if (!element.hasAttribute('role')) {
                    element.setAttribute('role', 'button');
                }
            }

            element.addEventListener('click', (event) => triggerDemo(event, element));
        });
    }
    document.addEventListener('DOMContentLoaded', () => {
        initDemoMode();
        initSearch();
        initExpandables();
        initTestimonialCarousel();
        initServiceDemo();
    });
})();
