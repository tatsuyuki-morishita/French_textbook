// Main content aggregator file
// This file combines all section content for the French learning textbook

const sections = {
    1: {
        id: 1,
        title: "Introducing Yourself & The Alphabet",
        frenchTitle: "Se présenter - L'alphabet",
        duration: "55 minutes",
        level: "A0"
    },
    2: {
        id: 2,
        title: "Making Acquaintance & Nationalities",
        frenchTitle: "Faire connaissance - Les nationalités",
        duration: "26 minutes",
        level: "A0"
    },
    3: {
        id: 3,
        title: "Greeting & Saying Goodbye",
        frenchTitle: "Saluer & dire au revoir",
        duration: "21 minutes",
        level: "A0"
    },
    4: {
        id: 4,
        title: "Numbers Part 1",
        frenchTitle: "Les nombres (1/2)",
        duration: "23 minutes",
        level: "A0-A1"
    },
    5: {
        id: 5,
        title: "Talking About Yourself Part 1",
        frenchTitle: "Parler de soi (1/2)",
        duration: "28 minutes",
        level: "A0-A1"
    },
    6: {
        id: 6,
        title: "Talking About Yourself Part 2",
        frenchTitle: "Parler de soi (2/2)",
        duration: "24 minutes",
        level: "A0-A1"
    },
    7: {
        id: 7,
        title: "Articles",
        frenchTitle: "Les articles",
        duration: "22 minutes",
        level: "A0-A1"
    },
    8: {
        id: 8,
        title: "Talking About Your Family",
        frenchTitle: "Parler de sa famille",
        duration: "41 minutes",
        level: "A1"
    },
    9: {
        id: 9,
        title: "Asking Questions",
        frenchTitle: "Questionner",
        duration: "26 minutes",
        level: "A1"
    },
    10: {
        id: 10,
        title: "Numbers Part 2",
        frenchTitle: "Les nombres (2/2)",
        duration: "27 minutes",
        level: "A1"
    },
    11: {
        id: 11,
        title: "Describing Your City",
        frenchTitle: "Décrire sa ville",
        duration: "30 minutes",
        level: "A1"
    },
    12: {
        id: 12,
        title: "Understanding Directions",
        frenchTitle: "Comprendre un itinéraire",
        duration: "34 minutes",
        level: "A1"
    },
    13: {
        id: 13,
        title: "Preferences & Activities",
        frenchTitle: "Parler de ses goûts et de ses activités",
        duration: "39 minutes",
        level: "A1"
    },
    14: {
        id: 14,
        title: "Hotel Booking",
        frenchTitle: "Réserver un hébergement",
        duration: "39 minutes",
        level: "A1"
    },
    15: {
        id: 15,
        title: "Comprehensive Review",
        frenchTitle: "Révisions !",
        duration: "50 minutes",
        level: "A1"
    },
    16: {
        id: 16,
        title: "Suggesting an Outing Part 1",
        frenchTitle: "Proposer une sortie (1/2)",
        duration: "51 minutes",
        level: "A1-A2"
    },
    17: {
        id: 17,
        title: "Suggesting an Outing Part 2",
        frenchTitle: "Proposer une sortie (2/2)",
        duration: "40 minutes",
        level: "A1-A2"
    },
    18: {
        id: 18,
        title: "Personality & Appearance",
        frenchTitle: "Décrire la personnalité et le physique",
        duration: "34 minutes",
        level: "A1-A2"
    },
    19: {
        id: 19,
        title: "Shopping",
        frenchTitle: "Faire du shopping",
        duration: "42 minutes",
        level: "A1-A2"
    },
    20: {
        id: 20,
        title: "Daily Routine Part 1",
        frenchTitle: "Parler de son quotidien (1/2)",
        duration: "35 minutes",
        level: "A1-A2"
    },
    21: {
        id: 21,
        title: "Daily Routine Part 2",
        frenchTitle: "Parler de son quotidien (2/2)",
        duration: "39 minutes",
        level: "A1-A2"
    },
    22: {
        id: 22,
        title: "Holidays",
        frenchTitle: "Parler de ses vacances",
        duration: "39 minutes",
        level: "A1-A2"
    },
    23: {
        id: 23,
        title: "At the Doctor's",
        frenchTitle: "Chez le docteur",
        duration: "28 minutes",
        level: "A1-A2"
    },
    24: {
        id: 24,
        title: "Food & Dining",
        frenchTitle: "Parler de son alimentation",
        duration: "48 minutes",
        level: "A1-A2"
    },
    25: {
        id: 25,
        title: "Giving Advice",
        frenchTitle: "Donner des conseils",
        duration: "25 minutes",
        level: "A2"
    },
    26: {
        id: 26,
        title: "Question Forms",
        frenchTitle: "Les 3 formes du questionnement",
        duration: "25 minutes",
        level: "A2"
    },
    27: {
        id: 27,
        title: "Future Tense",
        frenchTitle: "Parler de ses projets - le futur",
        duration: "25 minutes",
        level: "A2"
    },
    28: {
        id: 28,
        title: "Tense Review",
        frenchTitle: "Révision des temps",
        duration: "30 minutes",
        level: "A2"
    },
    29: {
        id: 29,
        title: "Sentence Construction",
        frenchTitle: "La construction de la phrase",
        duration: "40 minutes",
        level: "A2"
    },
    30: {
        id: 30,
        title: "Next Steps",
        frenchTitle: "Et maintenant ?",
        duration: "10 minutes",
        level: "A2"
    }
};

// Function to get section content
function getSectionContent(sectionId) {
    // This will be populated by the individual section files
    // For now, return a placeholder for sections not yet created

    if (typeof window !== 'undefined') {
        // Check if section is loaded
        const sectionVar = window['section' + sectionId];
        if (sectionVar && sectionVar.content) {
            return sectionVar.content;
        }
    }

    // Placeholder for sections not yet loaded
    return generatePlaceholderContent(sectionId);
}

function generatePlaceholderContent(sectionId) {
    const section = sections[sectionId];
    if (!section) return '<p>Section not found</p>';

    return `
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-book"></i>
                <span>Level ${section.level}</span>
            </div>
            <h1>${section.title}</h1>
            <p class="french-title">${section.frenchTitle}</p>
            <div class="section-meta">
                <span><i class="fas fa-clock"></i> ${section.duration}</span>
                <span><i class="fas fa-signal"></i> ${section.level}</span>
            </div>
        </div>

        <div class="content-card">
            <h2><i class="fas fa-hammer"></i> Coming Soon!</h2>
            <p>This section is currently under development. Check back soon for the complete lesson content!</p>

            <div class="tip-box" style="margin-top: 20px;">
                <i class="fas fa-info-circle"></i>
                <div>
                    <h4>What you'll learn in this section:</h4>
                    <p>This lesson covers "${section.frenchTitle}" and will include vocabulary, grammar explanations, dialogues, and practice exercises.</p>
                </div>
            </div>
        </div>

        <div class="section-navigation">
            <button class="nav-btn" onclick="goToSection(${sectionId - 1})" ${sectionId === 1 ? 'disabled' : ''}>
                <i class="fas fa-arrow-left"></i>
                <span>Previous Section</span>
            </button>
            <button class="nav-btn primary" onclick="goToSection(${sectionId + 1})" ${sectionId === 30 ? 'disabled' : ''}>
                <span>Next Section</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
}

// Export sections info
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sections, getSectionContent };
}
