// French Learning Textbook - Main Application Logic

// ============================================
// State Management
// ============================================

let currentSection = 1;
let completedSections = new Set();
let darkMode = false;

// Load saved state from localStorage
function loadState() {
    const saved = localStorage.getItem('frenchLearningState');
    if (saved) {
        const state = JSON.parse(saved);
        currentSection = state.currentSection || 1;
        completedSections = new Set(state.completedSections || []);
        darkMode = state.darkMode || false;
    }
}

// Save state to localStorage
function saveState() {
    const state = {
        currentSection,
        completedSections: Array.from(completedSections),
        darkMode
    };
    localStorage.setItem('frenchLearningState', JSON.stringify(state));
}

// ============================================
// Navigation
// ============================================

function goToSection(sectionId) {
    if (sectionId < 1 || sectionId > 33) return;

    // Mark previous section as completed if moving forward
    if (sectionId > currentSection) {
        completedSections.add(currentSection);
    }

    currentSection = sectionId;
    saveState();
    loadSection(sectionId);
    updateSidebar();
    updateProgress();

    // Scroll to top
    document.getElementById('mainContent').scrollTo(0, 0);
    window.scrollTo(0, 0);

    // Close mobile menu and backdrop
    document.getElementById('sidebar').classList.remove('active');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (backdrop) {
        backdrop.classList.remove('active');
    }
}

function loadSection(sectionId) {
    const contentArea = document.getElementById('mainContent');

    // Try to get content from loaded section file
    let content;

    // Check if section module is loaded
    const sectionVar = window['section' + sectionId];
    if (sectionVar && sectionVar.content) {
        content = sectionVar.content;
    } else {
        // Use placeholder
        content = getSectionContent(sectionId);
    }

    contentArea.innerHTML = content;

    // Initialize exercises in the section
    initializeExercises();
}

// ============================================
// Sidebar Updates
// ============================================

function updateSidebar() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const sectionId = parseInt(item.dataset.section);

        // Remove all state classes
        item.classList.remove('active', 'completed');

        // Add appropriate class
        if (sectionId === currentSection) {
            item.classList.add('active');
        } else if (completedSections.has(sectionId)) {
            item.classList.add('completed');
        }
    });
}

function updateProgress() {
    const total = 33;
    const completed = completedSections.size;
    const percentage = Math.round((completed / total) * 100);

    const progressFill = document.getElementById('overallProgress');
    const progressText = document.querySelector('.progress-text');

    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    if (progressText) {
        progressText.textContent = percentage + '% Complete';
    }
}

// ============================================
// Theme Toggle
// ============================================

function toggleTheme() {
    darkMode = !darkMode;
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.innerHTML = darkMode
            ? '<i class="fas fa-sun"></i> Light Mode'
            : '<i class="fas fa-moon"></i> Dark Mode';
    }

    saveState();
}

// ============================================
// Text-to-Speech
// ============================================

let voicesLoaded = false;
let cachedVoices = [];
let frenchVoice = null;

function loadVoices() {
    cachedVoices = speechSynthesis.getVoices();

    if (cachedVoices.length > 0) {
        voicesLoaded = true;
        // Find and cache French voice
        frenchVoice = cachedVoices.find(voice => voice.lang === 'fr-FR')
            || cachedVoices.find(voice => voice.lang.startsWith('fr'))
            || cachedVoices.find(voice => voice.lang.includes('fr'));

        console.log('Voices loaded:', cachedVoices.length, 'French voice:', frenchVoice?.name || 'none');
    }
    return cachedVoices;
}

function speak(text) {
    if (!('speechSynthesis' in window)) {
        alert('Text-to-speech is not supported in your browser.');
        return;
    }

    // Make sure voices are loaded
    if (!voicesLoaded || cachedVoices.length === 0) {
        loadVoices();
    }

    // Chrome bug: cancel any pending speech first
    speechSynthesis.cancel();

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Use cached French voice if available
    if (frenchVoice) {
        utterance.voice = frenchVoice;
    }

    // Debug logging
    utterance.onstart = () => {
        console.log('Speaking:', text);
    };

    utterance.onerror = (event) => {
        console.error('Speech error:', event.error);
        // Try to recover by reloading voices
        loadVoices();
    };

    utterance.onend = () => {
        console.log('Speech ended');
    };

    // Chrome on Mac fix: use a small delay and resume if paused
    setTimeout(() => {
        // Chrome sometimes pauses speech synthesis randomly
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
        }
        speechSynthesis.speak(utterance);
    }, 50);
}

// Initialize voices
if ('speechSynthesis' in window) {
    // Load voices immediately
    loadVoices();

    // Chrome loads voices asynchronously, so listen for changes
    speechSynthesis.onvoiceschanged = () => {
        loadVoices();
    };

    // Some browsers need user interaction first
    document.addEventListener('click', () => {
        if (!voicesLoaded) {
            loadVoices();
        }
        // Chrome fix: "wake up" the speech synthesis
        speechSynthesis.cancel();
    }, { once: true });
}

// ============================================
// Exercise Handling
// ============================================

function initializeExercises() {
    const exercises = document.querySelectorAll('.exercise');

    exercises.forEach(exercise => {
        const options = exercise.querySelectorAll('.exercise-option');
        const feedback = exercise.querySelector('.exercise-feedback');
        const correctAnswer = exercise.dataset.correct;

        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove previous selections
                options.forEach(opt => {
                    opt.classList.remove('correct', 'incorrect');
                });

                const selectedAnswer = option.dataset.option;

                if (selectedAnswer === correctAnswer) {
                    option.classList.add('correct');
                    feedback.className = 'exercise-feedback show correct';
                    feedback.innerHTML = '<i class="fas fa-check-circle"></i> Correct! Excellent work!';
                } else {
                    option.classList.add('incorrect');
                    // Highlight the correct answer
                    options.forEach(opt => {
                        if (opt.dataset.option === correctAnswer) {
                            opt.classList.add('correct');
                        }
                    });
                    feedback.className = 'exercise-feedback show incorrect';
                    feedback.innerHTML = '<i class="fas fa-times-circle"></i> Not quite. The correct answer is highlighted.';
                }
            });
        });
    });
}

// ============================================
// Fill in the Blank Exercises
// ============================================

function checkFillBlank(input, correctAnswer) {
    const userAnswer = input.value.trim().toLowerCase();
    const correct = correctAnswer.toLowerCase();

    if (userAnswer === correct) {
        input.style.borderBottomColor = 'var(--success)';
        input.style.color = 'var(--success)';
    } else {
        input.style.borderBottomColor = 'var(--error)';
        input.style.color = 'var(--error)';
    }
}

// ============================================
// Mobile Menu
// ============================================

function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');

    if (menuToggle && sidebar) {
        // Toggle menu
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (backdrop) {
                backdrop.classList.toggle('active');
            }
        });

        // Close menu when clicking backdrop
        if (backdrop) {
            backdrop.addEventListener('click', () => {
                sidebar.classList.remove('active');
                backdrop.classList.remove('active');
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                if (backdrop) {
                    backdrop.classList.remove('active');
                }
            }
        });
    }
}

// ============================================
// Keyboard Navigation
// ============================================

function setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Arrow keys for navigation
        if (e.key === 'ArrowRight' && e.ctrlKey) {
            goToSection(currentSection + 1);
        } else if (e.key === 'ArrowLeft' && e.ctrlKey) {
            goToSection(currentSection - 1);
        }
    });
}

// ============================================
// Sidebar Click Handlers
// ============================================

function setupSidebarClicks() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = parseInt(item.dataset.section);
            goToSection(sectionId);
        });
    });
}

// ============================================
// Letter/Alphabet Card Clicks
// ============================================

function setupLetterCards() {
    // This will be called after section loads if needed
    const letterCards = document.querySelectorAll('.letter-card');
    letterCards.forEach(card => {
        card.style.cursor = 'pointer';
    });
}

// ============================================
// Quiz Modal (for section completion)
// ============================================

function showQuizResults(score, total) {
    const modal = document.createElement('div');
    modal.className = 'quiz-modal active';
    modal.innerHTML = `
        <div class="quiz-content">
            <div class="quiz-score">${score}/${total}</div>
            <div class="quiz-message">
                ${score === total ? 'Perfect score! 🎉' :
            score >= total * 0.7 ? 'Great job! Keep practicing! 👍' :
                'Keep practicing! You\'ll improve! 💪'}
            </div>
            <button class="nav-btn primary" onclick="this.closest('.quiz-modal').remove()">
                Continue
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

// ============================================
// Category Collapse/Expand
// ============================================

function setupCategoryToggles() {
    const categories = document.querySelectorAll('.nav-category h3');

    categories.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            const ul = header.nextElementSibling;
            if (ul) {
                ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
                header.classList.toggle('collapsed');
            }
        });
    });
}

// ============================================
// Initialize Application
// ============================================

function init() {
    loadState();

    // Apply saved theme
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    }

    // Setup event listeners
    setupMobileMenu();
    setupKeyboardNav();
    setupSidebarClicks();

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Load initial section
    loadSection(currentSection);
    updateSidebar();
    updateProgress();

    console.log('🇫🇷 French Learning Textbook initialized!');
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally
window.goToSection = goToSection;
window.speak = speak;
window.checkFillBlank = checkFillBlank;
window.showQuizResults = showQuizResults;
