// Section 7: Articles (Les articles)
window.section7 = {
    id: 7,
    title: "Articles",
    frenchTitle: "Les articles",
    duration: "22 minutes",
    level: "A0-A1",
    objectives: [
        "Master definite articles (le, la, les)",
        "Learn indefinite articles (un, une, des)",
        "Understand articles for countries",
        "Apply articles correctly in sentences"
    ],
    content: `
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-cubes"></i>
                <span>Building Blocks A0-A1</span>
            </div>
            <h1>Articles</h1>
            <p class="french-title">Les articles</p>
            <div class="section-meta">
                <span><i class="fas fa-clock"></i> 22 minutes</span>
                <span><i class="fas fa-signal"></i> Beginner</span>
                <span><i class="fas fa-book"></i> 4 lessons</span>
            </div>
        </div>

        <div class="learning-objectives">
            <h3><i class="fas fa-target"></i> What You'll Learn</h3>
            <ul>
                <li>Use definite articles correctly (the)</li>
                <li>Use indefinite articles correctly (a/an, some)</li>
                <li>Know which articles to use with countries</li>
                <li>Understand article contractions</li>
            </ul>
        </div>

        <!-- Lesson 1: Definite Articles -->
        <div class="content-card">
            <h2><i class="fas fa-bookmark"></i> Lesson 1: Definite Articles (The)</h2>

            <p>Definite articles in French refer to specific things - equivalent to "the" in English. They must agree with the <strong>gender</strong> and <strong>number</strong> of the noun.</p>

            <div class="grammar-box">
                <h4><i class="fas fa-table"></i> The Definite Articles</h4>
                <table style="width: 100%; margin-top: 15px; text-align: center;">
                    <tr>
                        <th></th>
                        <th>Singular</th>
                        <th>Plural</th>
                    </tr>
                    <tr>
                        <td><strong>Masculine</strong></td>
                        <td><span style="font-size: 1.5rem; color: var(--primary-blue);">le</span></td>
                        <td rowspan="2"><span style="font-size: 1.5rem; color: var(--success);">les</span></td>
                    </tr>
                    <tr>
                        <td><strong>Feminine</strong></td>
                        <td><span style="font-size: 1.5rem; color: var(--primary-red);">la</span></td>
                    </tr>
                    <tr>
                        <td><strong>Before vowel/h</strong></td>
                        <td><span style="font-size: 1.5rem; color: var(--warning);">l'</span></td>
                        <td><span style="font-size: 1.5rem; color: var(--success);">les</span></td>
                    </tr>
                </table>
            </div>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">📖</div>
                    <div class="french"><span style="color: var(--primary-blue);">le</span> livre</div>
                    <div class="english">the book (masculine)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🏠</div>
                    <div class="french"><span style="color: var(--primary-red);">la</span> maison</div>
                    <div class="english">the house (feminine)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🏫</div>
                    <div class="french"><span style="color: var(--warning);">l'</span>école</div>
                    <div class="english">the school (f, vowel)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">👨</div>
                    <div class="french"><span style="color: var(--warning);">l'</span>homme</div>
                    <div class="english">the man (m, h)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📚</div>
                    <div class="french"><span style="color: var(--success);">les</span> livres</div>
                    <div class="english">the books (plural)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🏘️</div>
                    <div class="french"><span style="color: var(--success);">les</span> maisons</div>
                    <div class="english">the houses (plural)</div>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-lightbulb"></i>
                <div>
                    <h4>Special Use: General Statements</h4>
                    <p>Unlike English, French uses definite articles when talking about things in general:</p>
                    <ul style="margin-top: 10px;">
                        <li>🇫🇷 <strong>J'aime le chocolat</strong> = I like chocolate (in general)</li>
                        <li>🇬🇧 <em>I like chocolate</em> (no article)</li>
                        <li>🇫🇷 <strong>Les chats sont mignons</strong> = Cats are cute (in general)</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Lesson 2: Indefinite Articles -->
        <div class="content-card">
            <h2><i class="fas fa-question-circle"></i> Lesson 2: Indefinite Articles (A/An, Some)</h2>

            <p>Indefinite articles refer to non-specific things - equivalent to "a/an" (singular) or "some" (plural).</p>

            <div class="grammar-box">
                <h4><i class="fas fa-table"></i> The Indefinite Articles</h4>
                <table style="width: 100%; margin-top: 15px; text-align: center;">
                    <tr>
                        <th></th>
                        <th>Singular</th>
                        <th>Plural</th>
                    </tr>
                    <tr>
                        <td><strong>Masculine</strong></td>
                        <td><span style="font-size: 1.5rem; color: var(--primary-blue);">un</span></td>
                        <td rowspan="2"><span style="font-size: 1.5rem; color: var(--success);">des</span></td>
                    </tr>
                    <tr>
                        <td><strong>Feminine</strong></td>
                        <td><span style="font-size: 1.5rem; color: var(--primary-red);">une</span></td>
                    </tr>
                </table>
            </div>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">📖</div>
                    <div class="french"><span style="color: var(--primary-blue);">un</span> livre</div>
                    <div class="pronunciation">[uhn leevr]</div>
                    <div class="english">a book</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🏠</div>
                    <div class="french"><span style="color: var(--primary-red);">une</span> maison</div>
                    <div class="pronunciation">[oon meh-ZOHN]</div>
                    <div class="english">a house</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🍎</div>
                    <div class="french"><span style="color: var(--primary-red);">une</span> pomme</div>
                    <div class="pronunciation">[oon puhm]</div>
                    <div class="english">an apple</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🚗</div>
                    <div class="french"><span style="color: var(--primary-red);">une</span> voiture</div>
                    <div class="pronunciation">[oon vwah-TOOR]</div>
                    <div class="english">a car</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📚</div>
                    <div class="french"><span style="color: var(--success);">des</span> livres</div>
                    <div class="pronunciation">[day leevr]</div>
                    <div class="english">some books</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🍎🍎</div>
                    <div class="french"><span style="color: var(--success);">des</span> pommes</div>
                    <div class="pronunciation">[day puhm]</div>
                    <div class="english">some apples</div>
                </div>
            </div>

            <div class="grammar-box">
                <h4><i class="fas fa-exclamation-triangle"></i> Important: After Negation</h4>
                <p>After <strong>ne...pas</strong>, the indefinite articles <strong>un, une, des</strong> become <strong>de/d'</strong>:</p>
                <div style="margin-top: 15px;">
                    <p>✅ J'ai <strong>un</strong> chat → ❌ Je n'ai pas <strong>de</strong> chat</p>
                    <p>✅ J'ai <strong>des</strong> amis → ❌ Je n'ai pas <strong>d'</strong>amis</p>
                    <p>✅ Elle a <strong>une</strong> voiture → ❌ Elle n'a pas <strong>de</strong> voiture</p>
                </div>
            </div>
        </div>

        <!-- Lesson 3: Partitive Articles -->
        <div class="content-card">
            <h2><i class="fas fa-pizza-slice"></i> Lesson 3: Partitive Articles (Some/Any)</h2>

            <p>Partitive articles are used with uncountable nouns (things you can't count individually) to express "some" or "any".</p>

            <div class="grammar-box">
                <h4><i class="fas fa-table"></i> The Partitive Articles</h4>
                <table style="width: 100%; margin-top: 15px; text-align: center;">
                    <tr>
                        <th>Masculine</th>
                        <th>Feminine</th>
                        <th>Before vowel/h</th>
                    </tr>
                    <tr>
                        <td><span style="font-size: 1.3rem; color: var(--primary-blue);">du</span> (de + le)</td>
                        <td><span style="font-size: 1.3rem; color: var(--primary-red);">de la</span></td>
                        <td><span style="font-size: 1.3rem; color: var(--warning);">de l'</span></td>
                    </tr>
                </table>
            </div>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">🧀</div>
                    <div class="french">Je mange <span style="color: var(--primary-blue);">du</span> fromage</div>
                    <div class="english">I eat (some) cheese</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🥩</div>
                    <div class="french">Je veux <span style="color: var(--primary-red);">de la</span> viande</div>
                    <div class="english">I want (some) meat</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">💧</div>
                    <div class="french">Je bois <span style="color: var(--warning);">de l'</span>eau</div>
                    <div class="english">I drink (some) water</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🍞</div>
                    <div class="french">Il y a <span style="color: var(--primary-blue);">du</span> pain</div>
                    <div class="english">There is (some) bread</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🎵</div>
                    <div class="french">J'écoute <span style="color: var(--primary-red);">de la</span> musique</div>
                    <div class="english">I listen to (some) music</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">☕</div>
                    <div class="french">Tu veux <span style="color: var(--primary-blue);">du</span> café ?</div>
                    <div class="english">Do you want (some) coffee?</div>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-info-circle"></i>
                <div>
                    <h4>When to Use Partitive vs Definite Articles</h4>
                    <ul style="margin-top: 10px;">
                        <li><strong>J'aime le fromage</strong> = I like cheese (in general, all cheese)</li>
                        <li><strong>Je mange du fromage</strong> = I'm eating (some) cheese (a portion)</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Lesson 4: Articles with Countries -->
        <div class="content-card">
            <h2><i class="fas fa-globe-europe"></i> Lesson 4: Articles with Countries</h2>

            <p>Countries in French have genders, and you need the right article and preposition!</p>

            <div class="grammar-box">
                <h4><i class="fas fa-map"></i> Country Rules</h4>
                <table style="width: 100%; margin-top: 15px;">
                    <tr>
                        <th>Type</th>
                        <th>Article</th>
                        <th>"In/To"</th>
                        <th>"From"</th>
                        <th>Examples</th>
                    </tr>
                    <tr>
                        <td>Feminine (end in -e)</td>
                        <td>la</td>
                        <td><strong>en</strong></td>
                        <td>de</td>
                        <td>la France, l'Italie</td>
                    </tr>
                    <tr>
                        <td>Masculine</td>
                        <td>le</td>
                        <td><strong>au</strong></td>
                        <td>du</td>
                        <td>le Japon, le Canada</td>
                    </tr>
                    <tr>
                        <td>Plural</td>
                        <td>les</td>
                        <td><strong>aux</strong></td>
                        <td>des</td>
                        <td>les États-Unis</td>
                    </tr>
                </table>
            </div>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">🇫🇷</div>
                    <div class="french">J'habite <strong>en</strong> France</div>
                    <div class="english">I live in France</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🇯🇵</div>
                    <div class="french">Je vais <strong>au</strong> Japon</div>
                    <div class="english">I'm going to Japan</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🇺🇸</div>
                    <div class="french">Elle vient <strong>des</strong> États-Unis</div>
                    <div class="english">She comes from the USA</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🇮🇹</div>
                    <div class="french">Nous allons <strong>en</strong> Italie</div>
                    <div class="english">We're going to Italy</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🇧🇷</div>
                    <div class="french">Il vient <strong>du</strong> Brésil</div>
                    <div class="english">He comes from Brazil</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🇩🇪</div>
                    <div class="french">Tu vas <strong>en</strong> Allemagne</div>
                    <div class="english">You're going to Germany</div>
                </div>
            </div>

            <div class="cultural-note">
                <div class="icon">💡</div>
                <div>
                    <h4>Exception: Le Mexique</h4>
                    <p>Although "le Mexique" ends in -e, it's masculine! So we say "au Mexique" (not "en Mexique"). This is one of the few exceptions to remember.</p>
                </div>
            </div>
        </div>

        <!-- Summary Chart -->
        <div class="content-card">
            <h2><i class="fas fa-chart-bar"></i> Summary: All Articles at a Glance</h2>

            <table class="conjugation-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Masculine Sing.</th>
                        <th>Feminine Sing.</th>
                        <th>Before Vowel</th>
                        <th>Plural</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Definite (the)</strong></td>
                        <td>le</td>
                        <td>la</td>
                        <td>l'</td>
                        <td>les</td>
                    </tr>
                    <tr>
                        <td><strong>Indefinite (a/some)</strong></td>
                        <td>un</td>
                        <td>une</td>
                        <td>un/une</td>
                        <td>des</td>
                    </tr>
                    <tr>
                        <td><strong>Partitive (some)</strong></td>
                        <td>du</td>
                        <td>de la</td>
                        <td>de l'</td>
                        <td>des</td>
                    </tr>
                    <tr>
                        <td><strong>After negation</strong></td>
                        <td colspan="4" style="text-align: center;">de / d'</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Practice Exercises -->
        <div class="exercise-section">
            <h3><i class="fas fa-pencil-alt"></i> Practice Exercises</h3>

            <div class="exercise" data-correct="b">
                <p class="exercise-question">1. How do you say "the house" (feminine)?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>le maison</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>la maison</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>l'maison</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>une maison</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="c">
                <p class="exercise-question">2. Fill in: "Je mange ___ pain" (I eat some bread)</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>le</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>de la</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>du</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>un</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="a">
                <p class="exercise-question">3. After "ne...pas", "un chat" becomes:</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>de chat</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>pas chat</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>le chat</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>un chat</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="d">
                <p class="exercise-question">4. "I live in Japan" is:</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>J'habite en Japon</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>J'habite le Japon</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>J'habite aux Japon</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>J'habite au Japon</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="b">
                <p class="exercise-question">5. Which article goes before "eau" (water, feminine)?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>la eau</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>l'eau</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>le eau</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>une eau</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>
        </div>

        <!-- Section Navigation -->
        <div class="section-navigation">
            <button class="nav-btn" onclick="goToSection(6)">
                <i class="fas fa-arrow-left"></i>
                <span>Previous: -ER Verbs</span>
            </button>
            <button class="nav-btn primary" onclick="goToSection(8)">
                <span>Next: Family</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = section7;
}
