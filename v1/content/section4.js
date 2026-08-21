// Section 4: Numbers Part 1 (Les nombres 1/2)
window.section4 = {
    id: 4,
    title: "Numbers Part 1",
    frenchTitle: "Les nombres (1/2)",
    duration: "23 minutes",
    level: "A0-A1",
    objectives: [
        "Learn numbers from 0 to 100",
        "Practice counting in French",
        "Understand number patterns",
        "Use numbers in real contexts"
    ],
    content: `
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-cubes"></i>
                <span>Building Blocks A0-A1</span>
            </div>
            <h1>Numbers Part 1</h1>
            <p class="french-title">Les nombres (1/2)</p>
            <div class="section-meta">
                <span><i class="fas fa-clock"></i> 23 minutes</span>
                <span><i class="fas fa-signal"></i> Beginner</span>
                <span><i class="fas fa-book"></i> 4 lessons</span>
            </div>
        </div>

        <div class="learning-objectives">
            <h3><i class="fas fa-target"></i> What You'll Learn</h3>
            <ul>
                <li>Count from 0 to 100 in French</li>
                <li>Recognize number patterns for easier memorization</li>
                <li>Use numbers in everyday situations</li>
                <li>Say your age and phone numbers</li>
            </ul>
        </div>

        <!-- Lesson 1: Numbers 0-20 -->
        <div class="content-card">
            <h2><i class="fas fa-sort-numeric-up"></i> Lesson 1: Numbers 0-20</h2>

            <p>These are the foundation numbers you must memorize. They don't follow a pattern, so practice them until they're automatic!</p>

            <div class="number-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px; margin: 20px 0;">
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">0</div>
                    <div class="french">zéro</div>
                    <div class="pronunciation">[zay-ROH]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">1</div>
                    <div class="french">un</div>
                    <div class="pronunciation">[UHN]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">2</div>
                    <div class="french">deux</div>
                    <div class="pronunciation">[DUH]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">3</div>
                    <div class="french">trois</div>
                    <div class="pronunciation">[TRWAH]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">4</div>
                    <div class="french">quatre</div>
                    <div class="pronunciation">[KAH-truh]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">5</div>
                    <div class="french">cinq</div>
                    <div class="pronunciation">[SANK]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">6</div>
                    <div class="french">six</div>
                    <div class="pronunciation">[SEES]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">7</div>
                    <div class="french">sept</div>
                    <div class="pronunciation">[SET]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">8</div>
                    <div class="french">huit</div>
                    <div class="pronunciation">[WEET]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">9</div>
                    <div class="french">neuf</div>
                    <div class="pronunciation">[NUHF]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">10</div>
                    <div class="french">dix</div>
                    <div class="pronunciation">[DEES]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">11</div>
                    <div class="french">onze</div>
                    <div class="pronunciation">[OHNZ]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">12</div>
                    <div class="french">douze</div>
                    <div class="pronunciation">[DOOZ]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">13</div>
                    <div class="french">treize</div>
                    <div class="pronunciation">[TREHZ]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">14</div>
                    <div class="french">quatorze</div>
                    <div class="pronunciation">[kah-TOHRZ]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">15</div>
                    <div class="french">quinze</div>
                    <div class="pronunciation">[KANZ]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">16</div>
                    <div class="french">seize</div>
                    <div class="pronunciation">[SEHZ]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">17</div>
                    <div class="french">dix-sept</div>
                    <div class="pronunciation">[dee-SET]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">18</div>
                    <div class="french">dix-huit</div>
                    <div class="pronunciation">[deez-WEET]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">19</div>
                    <div class="french">dix-neuf</div>
                    <div class="pronunciation">[deez-NUHF]</div>
                </div>
                <div class="phrase-card" style="text-align: center;">
                    <div class="french" style="font-size: 2rem; color: var(--primary-blue);">20</div>
                    <div class="french">vingt</div>
                    <div class="pronunciation">[VAN]</div>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-info-circle"></i>
                <div>
                    <h4>Pattern Alert!</h4>
                    <p>Notice that 17, 18, and 19 are formed by combining "dix" (10) with "sept" (7), "huit" (8), and "neuf" (9). This pattern continues throughout French numbers!</p>
                </div>
            </div>
        </div>

        <!-- Lesson 2: Numbers 21-69 -->
        <div class="content-card">
            <h2><i class="fas fa-calculator"></i> Lesson 2: Numbers 21-69</h2>

            <p>Now it gets more predictable! Learn the tens and add the units.</p>

            <div class="grammar-box">
                <h4><i class="fas fa-lightbulb"></i> The Tens (Les dizaines)</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; margin-top: 15px;">
                    <div><strong>20</strong> - vingt [VAN]</div>
                    <div><strong>30</strong> - trente [TRAHNT]</div>
                    <div><strong>40</strong> - quarante [kah-RAHNT]</div>
                    <div><strong>50</strong> - cinquante [san-KAHNT]</div>
                    <div><strong>60</strong> - soixante [swah-SAHNT]</div>
                </div>
            </div>

            <div class="grammar-box" style="margin-top: 20px;">
                <h4><i class="fas fa-plus"></i> How to Build Numbers 21-69</h4>
                <p style="margin-top: 10px;">Simply combine the ten + unit with a hyphen:</p>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    <li><strong>21</strong> = vingt-et-un (the only one with "et")</li>
                    <li><strong>22</strong> = vingt-deux</li>
                    <li><strong>23</strong> = vingt-trois</li>
                    <li><strong>31</strong> = trente-et-un</li>
                    <li><strong>45</strong> = quarante-cinq</li>
                    <li><strong>58</strong> = cinquante-huit</li>
                    <li><strong>69</strong> = soixante-neuf</li>
                </ul>
            </div>

            <div class="image-vocabulary" style="margin-top: 20px;">
                <div class="vocab-image-card">
                    <div class="image-placeholder">2️⃣1️⃣</div>
                    <div class="vocab-info">
                        <div class="vocab-french">vingt-et-un</div>
                        <div class="vocab-english">twenty-one</div>
                    </div>
                </div>
                <div class="vocab-image-card">
                    <div class="image-placeholder">3️⃣2️⃣</div>
                    <div class="vocab-info">
                        <div class="vocab-french">trente-deux</div>
                        <div class="vocab-english">thirty-two</div>
                    </div>
                </div>
                <div class="vocab-image-card">
                    <div class="image-placeholder">4️⃣5️⃣</div>
                    <div class="vocab-info">
                        <div class="vocab-french">quarante-cinq</div>
                        <div class="vocab-english">forty-five</div>
                    </div>
                </div>
                <div class="vocab-image-card">
                    <div class="image-placeholder">5️⃣7️⃣</div>
                    <div class="vocab-info">
                        <div class="vocab-french">cinquante-sept</div>
                        <div class="vocab-english">fifty-seven</div>
                    </div>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-info-circle"></i>
                <div>
                    <h4>The "Et" Exception</h4>
                    <p>Only 21, 31, 41, 51, and 61 use "et" (and): <strong>vingt-et-un</strong>, <strong>trente-et-un</strong>, etc. All other numbers just use a hyphen: vingt-deux, vingt-trois...</p>
                </div>
            </div>
        </div>

        <!-- Lesson 3: Numbers 70-100 (The Tricky Part!) -->
        <div class="content-card">
            <h2><i class="fas fa-brain"></i> Lesson 3: Numbers 70-100 (The Unique French System!)</h2>

            <p>Here's where French gets interesting! Instead of having words for 70, 80, and 90, French uses a mathematical approach.</p>

            <div class="cultural-note">
                <div class="icon">🧮</div>
                <div>
                    <h4>Why So Complicated?</h4>
                    <p>This system comes from an old Celtic counting method based on 20 (vigesimal). Belgium and Switzerland actually use simpler words: <strong>septante</strong> (70), <strong>huitante/octante</strong> (80), and <strong>nonante</strong> (90)!</p>
                </div>
            </div>

            <div class="grammar-box">
                <h4><i class="fas fa-calculator"></i> 70s: Soixante + (10-19)</h4>
                <p>70 = soixante-dix (60 + 10)</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin-top: 15px;">
                    <div><strong>70</strong> - soixante-dix (60+10)</div>
                    <div><strong>71</strong> - soixante-et-onze (60+11)</div>
                    <div><strong>72</strong> - soixante-douze (60+12)</div>
                    <div><strong>73</strong> - soixante-treize (60+13)</div>
                    <div><strong>74</strong> - soixante-quatorze (60+14)</div>
                    <div><strong>75</strong> - soixante-quinze (60+15)</div>
                    <div><strong>76</strong> - soixante-seize (60+16)</div>
                    <div><strong>77</strong> - soixante-dix-sept (60+17)</div>
                    <div><strong>78</strong> - soixante-dix-huit (60+18)</div>
                    <div><strong>79</strong> - soixante-dix-neuf (60+19)</div>
                </div>
            </div>

            <div class="grammar-box" style="margin-top: 20px;">
                <h4><i class="fas fa-calculator"></i> 80s: Quatre-vingts (4 × 20)</h4>
                <p>80 = quatre-vingts (4 × 20) - Note the "s" on vingts!</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin-top: 15px;">
                    <div><strong>80</strong> - quatre-vingts (4×20)</div>
                    <div><strong>81</strong> - quatre-vingt-un (no "s"!)</div>
                    <div><strong>82</strong> - quatre-vingt-deux</div>
                    <div><strong>83</strong> - quatre-vingt-trois</div>
                    <div><strong>85</strong> - quatre-vingt-cinq</div>
                    <div><strong>89</strong> - quatre-vingt-neuf</div>
                </div>
            </div>

            <div class="grammar-box" style="margin-top: 20px;">
                <h4><i class="fas fa-calculator"></i> 90s: Quatre-vingt + (10-19)</h4>
                <p>90 = quatre-vingt-dix (4 × 20 + 10)</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin-top: 15px;">
                    <div><strong>90</strong> - quatre-vingt-dix (80+10)</div>
                    <div><strong>91</strong> - quatre-vingt-onze (80+11)</div>
                    <div><strong>92</strong> - quatre-vingt-douze (80+12)</div>
                    <div><strong>95</strong> - quatre-vingt-quinze (80+15)</div>
                    <div><strong>99</strong> - quatre-vingt-dix-neuf (80+19)</div>
                    <div><strong>100</strong> - cent</div>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <h4>Important: The "S" Rule for 80</h4>
                    <p><strong>Quatre-vingts</strong> (80) has an "s" when it's alone or at the end of a number. But when followed by another number, the "s" disappears: <strong>quatre-vingt-un</strong> (81), <strong>quatre-vingt-dix</strong> (90).</p>
                </div>
            </div>
        </div>

        <!-- Lesson 4: Using Numbers in Context -->
        <div class="content-card">
            <h2><i class="fas fa-birthday-cake"></i> Lesson 4: Numbers in Real Life</h2>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">🎂</div>
                    <div class="french">J'ai vingt-cinq ans</div>
                    <div class="pronunciation">[zhay van-SANK ahn]</div>
                    <div class="english">I am 25 years old</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">❓</div>
                    <div class="french">Quel âge avez-vous ?</div>
                    <div class="pronunciation">[kel AHzh ah-vay VOO]</div>
                    <div class="english">How old are you? (formal)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">❓</div>
                    <div class="french">Tu as quel âge ?</div>
                    <div class="pronunciation">[too ah kel AHzh]</div>
                    <div class="english">How old are you? (informal)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📞</div>
                    <div class="french">Mon numéro est le...</div>
                    <div class="pronunciation">[mohn noo-may-ROH eh luh]</div>
                    <div class="english">My number is...</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">💰</div>
                    <div class="french">Ça coûte quinze euros</div>
                    <div class="pronunciation">[sah KOOT kanz uh-ROH]</div>
                    <div class="english">It costs 15 euros</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🏠</div>
                    <div class="french">J'habite au numéro 42</div>
                    <div class="pronunciation">[zhah-BEET oh noo-may-ROH kah-RAHNT-duh]</div>
                    <div class="english">I live at number 42</div>
                </div>
            </div>

            <div class="grammar-box">
                <h4><i class="fas fa-lightbulb"></i> Saying Your Age in French</h4>
                <p>In French, you "have" years, you don't "are" years old:</p>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    <li>✅ <strong>J'ai 25 ans</strong> (I have 25 years)</li>
                    <li>❌ <em>Je suis 25 ans</em> (WRONG!)</li>
                </ul>
                <p style="margin-top: 10px;">This uses the verb <strong>avoir</strong> (to have), which we'll learn in the next section!</p>
            </div>

            <div class="cultural-note">
                <div class="icon">📱</div>
                <div>
                    <h4>Phone Numbers in France</h4>
                    <p>French phone numbers are 10 digits, typically said in pairs: 06 12 34 56 78 = "zéro-six, douze, trente-quatre, cinquante-six, soixante-dix-huit." Mobile numbers start with 06 or 07. Landlines start with 01-05 depending on region.</p>
                </div>
            </div>
        </div>

        <!-- Practice Exercises -->
        <div class="exercise-section">
            <h3><i class="fas fa-pencil-alt"></i> Practice Exercises</h3>

            <div class="exercise" data-correct="b">
                <p class="exercise-question">1. How do you say 17 in French?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>sept-dix</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>dix-sept</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>seize-un</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>dixsept</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="c">
                <p class="exercise-question">2. What is 75 in French?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>septante-cinq</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>soixante-cinq</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>soixante-quinze</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>soixante-et-quinze</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="a">
                <p class="exercise-question">3. How do you say 80 in French?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>quatre-vingts</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>huitante</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>quatre-vingt</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>soixante-vingt</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="d">
                <p class="exercise-question">4. What is 91 in French?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>nonante-un</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>quatre-vingts-onze</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>neuf-dix-un</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>quatre-vingt-onze</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="b">
                <p class="exercise-question">5. How do you say "I am 30 years old"?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Je suis trente ans</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>J'ai trente ans</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>J'ai trente années</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Je suis trente années</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>
        </div>

        <!-- Section Navigation -->
        <div class="section-navigation">
            <button class="nav-btn" onclick="goToSection(3)">
                <i class="fas fa-arrow-left"></i>
                <span>Previous: Greetings</span>
            </button>
            <button class="nav-btn primary" onclick="goToSection(5)">
                <span>Next: Talking About Yourself 1</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = section4;
}
