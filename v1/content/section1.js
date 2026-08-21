// Section 1: Introducing Yourself & The Alphabet
window.section1 = {
    id: 1,
    title: "Introducing Yourself & The Alphabet",
    frenchTitle: "Se présenter - L'alphabet",
    duration: "55 minutes",
    level: "A0",
    content: `
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-seedling"></i>
                <span>Foundation Level A0</span>
            </div>
            <h1>Introducing Yourself & The Alphabet</h1>
            <p class="french-title">Se présenter - L'alphabet</p>
            <div class="section-meta">
                <span><i class="fas fa-clock"></i> 55 minutes</span>
                <span><i class="fas fa-signal"></i> Absolute Beginner</span>
                <span><i class="fas fa-book"></i> 5 lessons</span>
            </div>
        </div>

        <div class="learning-objectives">
            <h3><i class="fas fa-target"></i> What You'll Learn in This Section</h3>
            <ul>
                <li>How to introduce yourself confidently in French</li>
                <li>The complete French alphabet with proper pronunciation</li>
                <li>How to say your name using the verb "s'appeler"</li>
                <li>Essential classroom expressions for learning</li>
                <li>The difference between formal (vous) and informal (tu) address</li>
            </ul>
        </div>

        <!-- LESSON 1: WHY LEARN FRENCH -->
        <div class="content-card">
            <h2><i class="fas fa-globe-europe"></i> Welcome to French!</h2>

            <div class="image-vocabulary">
                <div class="vocab-image-card">
                    <div class="image-placeholder">🇫🇷</div>
                    <div class="vocab-info">
                        <div class="vocab-french">France</div>
                        <div class="vocab-english">67 million speakers</div>
                    </div>
                </div>
                <div class="vocab-image-card">
                    <div class="image-placeholder">🇨🇦</div>
                    <div class="vocab-info">
                        <div class="vocab-french">Canada</div>
                        <div class="vocab-english">Quebec & more</div>
                    </div>
                </div>
                <div class="vocab-image-card">
                    <div class="image-placeholder">🇧🇪</div>
                    <div class="vocab-info">
                        <div class="vocab-french">Belgique</div>
                        <div class="vocab-english">Belgium</div>
                    </div>
                </div>
                <div class="vocab-image-card">
                    <div class="image-placeholder">🇨🇭</div>
                    <div class="vocab-info">
                        <div class="vocab-french">Suisse</div>
                        <div class="vocab-english">Switzerland</div>
                    </div>
                </div>
                <div class="vocab-image-card">
                    <div class="image-placeholder">🌍</div>
                    <div class="vocab-info">
                        <div class="vocab-french">Afrique</div>
                        <div class="vocab-english">29 African countries</div>
                    </div>
                </div>
            </div>

            <p style="font-size: 1.1rem; margin-top: 20px;">
                <strong>French is spoken by over 300 million people worldwide!</strong> It's an official language in 29 countries across 5 continents. By learning French, you're opening doors to rich culture, literature, cuisine, and business opportunities.
            </p>

            <div class="cultural-note">
                <div class="icon">💡</div>
                <div>
                    <h4>Did You Know?</h4>
                    <p>French was the international language of diplomacy for centuries. Even today, it's one of the official languages of the United Nations, European Union, NATO, and the International Olympic Committee!</p>
                </div>
            </div>
        </div>

        <!-- LESSON 2: BASIC GREETINGS & INTRODUCTIONS -->
        <div class="content-card">
            <h2><i class="fas fa-handshake"></i> Lesson 1: Your First French Words</h2>

            <p>Let's start with the most essential phrases you'll need from day one. These are the building blocks of every French conversation!</p>

            <h3 style="margin-top: 25px; color: var(--primary-blue);"><i class="fas fa-hand-wave"></i> Greeting Someone</h3>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">
                        <img src="https://em-content.zobj.net/source/apple/391/waving-hand_1f44b.png" alt="waving hand" style="width: 60px; height: 60px;" onerror="this.parentElement.innerHTML='👋'">
                    </div>
                    <div class="french">Bonjour !</div>
                    <div class="pronunciation">[bohn-ZHOOR]</div>
                    <div class="english">Hello! / Good day!</div>
                    <button class="audio-btn" onclick="speak('Bonjour')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">
                        <img src="https://em-content.zobj.net/source/apple/391/sun_2600-fe0f.png" alt="sun" style="width: 60px; height: 60px;" onerror="this.parentElement.innerHTML='☀️'">
                    </div>
                    <div class="french">Bonsoir !</div>
                    <div class="pronunciation">[bohn-SWAHR]</div>
                    <div class="english">Good evening!</div>
                    <button class="audio-btn" onclick="speak('Bonsoir')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">
                        <img src="https://em-content.zobj.net/source/apple/391/victory-hand_270c-fe0f.png" alt="peace sign" style="width: 60px; height: 60px;" onerror="this.parentElement.innerHTML='✌️'">
                    </div>
                    <div class="french">Salut !</div>
                    <div class="pronunciation">[sah-LOO]</div>
                    <div class="english">Hi! (informal)</div>
                    <button class="audio-btn" onclick="speak('Salut')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>

            <div class="grammar-box">
                <h4><i class="fas fa-clock"></i> When to Use Each Greeting</h4>
                <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
                    <tr style="background: #374151;">
                        <td><strong>Bonjour</strong></td>
                        <td>Morning until ~6 PM</td>
                        <td>Anyone, anywhere - always safe!</td>
                    </tr>
                    <tr>
                        <td><strong>Bonsoir</strong></td>
                        <td>Evening (~6 PM onwards)</td>
                        <td>Formal & informal situations</td>
                    </tr>
                    <tr style="background: #374151;">
                        <td><strong>Salut</strong></td>
                        <td>Any time</td>
                        <td>Friends, family, peers only!</td>
                    </tr>
                </table>
            </div>

            <h3 style="margin-top: 30px; color: var(--primary-blue);"><i class="fas fa-user"></i> Saying Your Name</h3>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">
                        <img src="https://em-content.zobj.net/source/apple/391/bust-in-silhouette_1f464.png" alt="person" style="width: 60px; height: 60px;" onerror="this.parentElement.innerHTML='👤'">
                    </div>
                    <div class="french">Je m'appelle...</div>
                    <div class="pronunciation">[zhuh mah-PEL]</div>
                    <div class="english">My name is... (lit: "I call myself...")</div>
                    <button class="audio-btn" onclick="speak('Je m\\'appelle')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">
                        <img src="https://em-content.zobj.net/source/apple/391/speech-balloon_1f4ac.png" alt="speech" style="width: 60px; height: 60px;" onerror="this.parentElement.innerHTML='💬'">
                    </div>
                    <div class="french">Je suis...</div>
                    <div class="pronunciation">[zhuh SWEE]</div>
                    <div class="english">I am...</div>
                    <button class="audio-btn" onclick="speak('Je suis')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">
                        <img src="https://em-content.zobj.net/source/apple/391/handshake_1f91d.png" alt="handshake" style="width: 60px; height: 60px;" onerror="this.parentElement.innerHTML='🤝'">
                    </div>
                    <div class="french">Enchanté(e) !</div>
                    <div class="pronunciation">[ahn-shahn-TAY]</div>
                    <div class="english">Nice to meet you!</div>
                    <button class="audio-btn" onclick="speak('Enchanté')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-venus-mars"></i>
                <div>
                    <h4>Gender Agreement: Enchanté vs Enchantée</h4>
                    <p>In French, adjectives change based on the speaker's gender:</p>
                    <ul style="margin-top: 10px;">
                        <li>👨 Male speaker: <strong>Enchanté</strong> (no extra 'e')</li>
                        <li>👩 Female speaker: <strong>Enchantée</strong> (add 'e' at the end)</li>
                    </ul>
                    <p style="margin-top: 10px;">Both are pronounced the same way: [ahn-shahn-TAY]</p>
                </div>
            </div>
        </div>

        <!-- LESSON 3: TU VS VOUS -->
        <div class="content-card">
            <h2><i class="fas fa-users"></i> Lesson 2: Tu vs Vous - The Crucial Distinction</h2>

            <p>One of the most important concepts in French! Unlike English, French has <strong>two words for "you"</strong> - and using the wrong one can be a social faux pas!</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 25px 0;">
                <div style="background: #1F2937; border-radius: 12px; padding: 20px; border: 2px solid var(--primary-blue);">
                    <h3 style="color: #93C5FD; margin-bottom: 15px;">
                        <span style="font-size: 2rem;">👫</span> TU
                    </h3>
                    <p style="font-size: 1.3rem; font-weight: bold; color: #93C5FD;">[too]</p>
                    <p style="color: #93C5FD;"><strong>Informal "you"</strong></p>
                    <ul style="margin-top: 15px; margin-left: 20px; color: #F3F4F6;">
                        <li>Friends</li>
                        <li>Family members</li>
                        <li>Children</li>
                        <li>Classmates / Peers</li>
                        <li>People your age in casual settings</li>
                    </ul>
                    <div style="margin-top: 15px; padding: 10px; background: #374151; border-radius: 8px; color: #F3F4F6;">
                        <strong>Example:</strong><br>
                        <span style="color: #93C5FD; font-weight: 600;">Comment tu t'appelles ?</span><br>
                        <em style="color: #D1D5DB;">What's your name? (casual)</em>
                    </div>
                </div>

                <div style="background: #1F2937; border-radius: 12px; padding: 20px; border: 2px solid var(--primary-red);">
                    <h3 style="color: #FCA5A5; margin-bottom: 15px;">
                        <span style="font-size: 2rem;">👔</span> VOUS
                    </h3>
                    <p style="font-size: 1.3rem; font-weight: bold; color: #FCA5A5;">[voo]</p>
                    <p style="color: #FCA5A5;"><strong>Formal "you" OR plural "you"</strong></p>
                    <ul style="margin-top: 15px; margin-left: 20px; color: #F3F4F6;">
                        <li>Strangers</li>
                        <li>Elders / Seniors</li>
                        <li>Bosses / Superiors</li>
                        <li>Customers / Service staff</li>
                        <li>Multiple people (always!)</li>
                    </ul>
                    <div style="margin-top: 15px; padding: 10px; background: #374151; border-radius: 8px; color: #F3F4F6;">
                        <strong>Example:</strong><br>
                        <span style="color: #FCA5A5; font-weight: 600;">Comment vous appelez-vous ?</span><br>
                        <em style="color: #D1D5DB;">What is your name? (formal)</em>
                    </div>
                </div>
            </div>

            <div class="cultural-note">
                <div class="icon">🇫🇷</div>
                <div>
                    <h4>Cultural Insight: When in Doubt, Use "Vous"!</h4>
                    <p>It's much better to be overly polite than accidentally rude. If someone wants you to use "tu," they'll say <strong>"On peut se tutoyer"</strong> (We can use tu with each other). In professional settings, always start with "vous" and wait for permission to switch.</p>
                </div>
            </div>

            <h3 style="margin-top: 30px; color: var(--primary-blue);"><i class="fas fa-question-circle"></i> Asking Someone's Name</h3>

            <div class="phrase-grid">
                <div class="phrase-card" style="border-left: 4px solid var(--primary-blue);">
                    <div class="illustration">👫</div>
                    <div class="french">Comment tu t'appelles ?</div>
                    <div class="pronunciation">[koh-MAHN too tah-PEL]</div>
                    <div class="english">What's your name? (informal)</div>
                    <button class="audio-btn" onclick="speak('Comment tu t\\'appelles')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card" style="border-left: 4px solid var(--primary-red);">
                    <div class="illustration">👔</div>
                    <div class="french">Comment vous appelez-vous ?</div>
                    <div class="pronunciation">[koh-MAHN voo zah-play VOO]</div>
                    <div class="english">What is your name? (formal)</div>
                    <button class="audio-btn" onclick="speak('Comment vous appelez-vous')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>
        </div>

        <!-- LESSON 4: THE VERB S'APPELER -->
        <div class="content-card">
            <h2><i class="fas fa-book"></i> Lesson 3: The Verb S'APPELER (To Call Oneself)</h2>

            <p>This is a <strong>reflexive verb</strong> - it literally means "to call oneself." Let's learn all its forms!</p>

            <div class="pattern-box">
                <h4><i class="fas fa-star"></i> Pattern Discovery: Reflexive Pronouns</h4>
                <p style="margin-top: 10px;">Notice how each subject has its own reflexive pronoun:</p>
                <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 15px;">
                    <div style="padding: 10px 15px; background: #374151; border-radius: 8px;">Je → <strong>me</strong></div>
                    <div style="padding: 10px 15px; background: #374151; border-radius: 8px;">Tu → <strong>te</strong></div>
                    <div style="padding: 10px 15px; background: #374151; border-radius: 8px;">Il/Elle → <strong>se</strong></div>
                    <div style="padding: 10px 15px; background: #374151; border-radius: 8px;">Nous → <strong>nous</strong></div>
                    <div style="padding: 10px 15px; background: #374151; border-radius: 8px;">Vous → <strong>vous</strong></div>
                    <div style="padding: 10px 15px; background: #374151; border-radius: 8px;">Ils/Elles → <strong>se</strong></div>
                </div>
            </div>

            <table class="conjugation-table" style="margin-top: 25px;">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>S'appeler</th>
                        <th>Pronunciation</th>
                        <th>English</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="pronoun">Je</span></td>
                        <td><span class="verb">m'appelle</span></td>
                        <td>[mah-PEL]</td>
                        <td>I am called / My name is</td>
                    </tr>
                    <tr>
                        <td><span class="pronoun">Tu</span></td>
                        <td><span class="verb">t'appelles</span></td>
                        <td>[tah-PEL]</td>
                        <td>You are called (informal)</td>
                    </tr>
                    <tr>
                        <td><span class="pronoun">Il / Elle</span></td>
                        <td><span class="verb">s'appelle</span></td>
                        <td>[sah-PEL]</td>
                        <td>He/She is called</td>
                    </tr>
                    <tr>
                        <td><span class="pronoun">Nous</span></td>
                        <td><span class="verb">nous appelons</span></td>
                        <td>[noo zah-plohn]</td>
                        <td>We are called</td>
                    </tr>
                    <tr>
                        <td><span class="pronoun">Vous</span></td>
                        <td><span class="verb">vous appelez</span></td>
                        <td>[voo zah-play]</td>
                        <td>You are called (formal/plural)</td>
                    </tr>
                    <tr>
                        <td><span class="pronoun">Ils / Elles</span></td>
                        <td><span class="verb">s'appellent</span></td>
                        <td>[sah-PEL]</td>
                        <td>They are called</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <i class="fas fa-headphones"></i>
                <div>
                    <h4>Pronunciation Pattern: Silent Endings!</h4>
                    <p>Notice something amazing? These all sound the SAME:</p>
                    <ul style="margin-top: 10px; margin-left: 20px;">
                        <li>je m'appell<strong>e</strong> → [mah-PEL]</li>
                        <li>tu t'appell<strong>es</strong> → [tah-PEL]</li>
                        <li>il/elle s'appell<strong>e</strong> → [sah-PEL]</li>
                        <li>ils/elles s'appell<strong>ent</strong> → [sah-PEL]</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>The endings -e, -es, -ent are SILENT!</strong> Only -ons and -ez are pronounced.</p>
                </div>
            </div>

            <div class="dialogue-box">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-comments"></i> Practice Dialogue: Meeting Someone</h4>
                <div class="dialogue-line person-a">
                    <div class="dialogue-avatar">👨</div>
                    <div class="dialogue-content">
                        <div class="french-text">Bonjour ! Je m'appelle Pierre. Et vous, comment vous appelez-vous ?</div>
                        <div class="english-text">Hello! My name is Pierre. And you, what is your name?</div>
                    </div>
                </div>
                <div class="dialogue-line person-b">
                    <div class="dialogue-avatar">👩</div>
                    <div class="dialogue-content">
                        <div class="french-text">Bonjour Pierre ! Je m'appelle Marie. Enchantée !</div>
                        <div class="english-text">Hello Pierre! My name is Marie. Nice to meet you!</div>
                    </div>
                </div>
                <div class="dialogue-line person-a">
                    <div class="dialogue-avatar">👨</div>
                    <div class="dialogue-content">
                        <div class="french-text">Enchanté, Marie ! Vous êtes française ?</div>
                        <div class="english-text">Nice to meet you, Marie! Are you French?</div>
                    </div>
                </div>
                <div class="dialogue-line person-b">
                    <div class="dialogue-avatar">👩</div>
                    <div class="dialogue-content">
                        <div class="french-text">Oui, je suis française, de Paris !</div>
                        <div class="english-text">Yes, I'm French, from Paris!</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- LESSON 5: THE FRENCH ALPHABET -->
        <div class="content-card">
            <h2><i class="fas fa-font"></i> Lesson 4: The French Alphabet (L'alphabet)</h2>

            <p>The French alphabet has <strong>26 letters</strong>, just like English - but the pronunciation is completely different! Click each letter to hear it.</p>

            <div class="tip-box">
                <i class="fas fa-lightbulb"></i>
                <div>
                    <h4>Key Difference from English</h4>
                    <p style="margin-top: 10px;">Most French letter names end in a vowel sound, giving them a musical, flowing quality. Pay special attention to: <strong>E, G, H, J, R, W, Y</strong> - they're very different from English!</p>
                </div>
            </div>

            <h3 style="margin-top: 25px; color: var(--primary-red);"><i class="fas fa-heart"></i> Vowels (Les voyelles)</h3>
            <p>Vowels are the heart of French pronunciation. They're shown in red below.</p>

            <div class="alphabet-grid" style="margin: 20px 0;">
                <div class="letter-card vowel" onclick="speak('A')">
                    <span class="letter">A</span>
                    <span class="name">[ah]</span>
                </div>
                <div class="letter-card vowel" onclick="speak('E')">
                    <span class="letter">E</span>
                    <span class="name">[uh]</span>
                </div>
                <div class="letter-card vowel" onclick="speak('I')">
                    <span class="letter">I</span>
                    <span class="name">[ee]</span>
                </div>
                <div class="letter-card vowel" onclick="speak('O')">
                    <span class="letter">O</span>
                    <span class="name">[oh]</span>
                </div>
                <div class="letter-card vowel" onclick="speak('U')">
                    <span class="letter">U</span>
                    <span class="name">[oo]*</span>
                </div>
                <div class="letter-card vowel" onclick="speak('Y')">
                    <span class="letter">Y</span>
                    <span class="name">[ee-grek]</span>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-exclamation-circle"></i>
                <div>
                    <h4>The Infamous French "U" Sound</h4>
                    <p>The French <strong>U</strong> doesn't exist in English! It's NOT like "oo" in "moon."</p>
                    <p style="margin-top: 10px;"><strong>How to make it:</strong> Say "ee" but round your lips like you're saying "oo" at the same time. Practice with: <em>tu, rue, salut</em></p>
                </div>
            </div>

            <h3 style="margin-top: 25px; color: var(--primary-blue);"><i class="fas fa-cube"></i> Consonants (Les consonnes)</h3>

            <div class="alphabet-grid" style="margin: 20px 0;">
                <div class="letter-card" onclick="speak('B')">
                    <span class="letter">B</span>
                    <span class="name">[bay]</span>
                </div>
                <div class="letter-card" onclick="speak('C')">
                    <span class="letter">C</span>
                    <span class="name">[say]</span>
                </div>
                <div class="letter-card" onclick="speak('D')">
                    <span class="letter">D</span>
                    <span class="name">[day]</span>
                </div>
                <div class="letter-card" onclick="speak('F')">
                    <span class="letter">F</span>
                    <span class="name">[ef]</span>
                </div>
                <div class="letter-card" onclick="speak('G')">
                    <span class="letter">G</span>
                    <span class="name">[zhay]</span>
                </div>
                <div class="letter-card" onclick="speak('H')">
                    <span class="letter">H</span>
                    <span class="name">[ahsh]</span>
                </div>
                <div class="letter-card" onclick="speak('J')">
                    <span class="letter">J</span>
                    <span class="name">[zhee]</span>
                </div>
                <div class="letter-card" onclick="speak('K')">
                    <span class="letter">K</span>
                    <span class="name">[kah]</span>
                </div>
                <div class="letter-card" onclick="speak('L')">
                    <span class="letter">L</span>
                    <span class="name">[el]</span>
                </div>
                <div class="letter-card" onclick="speak('M')">
                    <span class="letter">M</span>
                    <span class="name">[em]</span>
                </div>
                <div class="letter-card" onclick="speak('N')">
                    <span class="letter">N</span>
                    <span class="name">[en]</span>
                </div>
                <div class="letter-card" onclick="speak('P')">
                    <span class="letter">P</span>
                    <span class="name">[pay]</span>
                </div>
                <div class="letter-card" onclick="speak('Q')">
                    <span class="letter">Q</span>
                    <span class="name">[koo]</span>
                </div>
                <div class="letter-card" onclick="speak('R')">
                    <span class="letter">R</span>
                    <span class="name">[air]</span>
                </div>
                <div class="letter-card" onclick="speak('S')">
                    <span class="letter">S</span>
                    <span class="name">[ess]</span>
                </div>
                <div class="letter-card" onclick="speak('T')">
                    <span class="letter">T</span>
                    <span class="name">[tay]</span>
                </div>
                <div class="letter-card" onclick="speak('V')">
                    <span class="letter">V</span>
                    <span class="name">[vay]</span>
                </div>
                <div class="letter-card" onclick="speak('W')">
                    <span class="letter">W</span>
                    <span class="name">[doo-bluh-vay]</span>
                </div>
                <div class="letter-card" onclick="speak('X')">
                    <span class="letter">X</span>
                    <span class="name">[eeks]</span>
                </div>
                <div class="letter-card" onclick="speak('Z')">
                    <span class="letter">Z</span>
                    <span class="name">[zed]</span>
                </div>
            </div>

            <div class="pattern-box">
                <h4><i class="fas fa-star"></i> Pattern Discovery: Letter Name Endings</h4>
                <p style="margin-top: 10px;">Most French consonants follow predictable patterns:</p>
                <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
                    <tr>
                        <td><strong>Ending in [ay]</strong></td>
                        <td>B, C, D, G, P, T, V, W</td>
                        <td>bay, say, day, zhay, pay, tay, vay, doo-bluh-vay</td>
                    </tr>
                    <tr>
                        <td><strong>Ending in [e] sound</strong></td>
                        <td>F, L, M, N, R, S</td>
                        <td>ef, el, em, en, air, ess</td>
                    </tr>
                    <tr>
                        <td><strong>Unique</strong></td>
                        <td>H, J, K, Q, X, Z</td>
                        <td>ahsh, zhee, kah, koo, eeks, zed</td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- LESSON 6: FRENCH ACCENTS -->
        <div class="content-card">
            <h2><i class="fas fa-pen-fancy"></i> Lesson 5: French Accents (Les accents)</h2>

            <p>French uses <strong>5 accent marks</strong> that change pronunciation or meaning. These are NOT optional decorations - they're essential parts of spelling!</p>

            <div class="image-vocabulary">
                <div class="vocab-image-card" style="border: 2px solid var(--primary-blue);">
                    <div class="image-placeholder" style="font-size: 4rem;">é</div>
                    <div class="vocab-info">
                        <div class="vocab-french">L'accent aigu</div>
                        <div class="vocab-english">Sounds like "ay" in "say"</div>
                        <div style="margin-top: 5px; font-size: 0.9rem; color: #6B7280;">café, été, répéter</div>
                    </div>
                </div>

                <div class="vocab-image-card" style="border: 2px solid var(--primary-red);">
                    <div class="image-placeholder" style="font-size: 4rem;">è</div>
                    <div class="vocab-info">
                        <div class="vocab-french">L'accent grave</div>
                        <div class="vocab-english">Sounds like "eh" in "bed"</div>
                        <div style="margin-top: 5px; font-size: 0.9rem; color: #6B7280;">mère, père, très</div>
                    </div>
                </div>

                <div class="vocab-image-card" style="border: 2px solid var(--success);">
                    <div class="image-placeholder" style="font-size: 4rem;">ê</div>
                    <div class="vocab-info">
                        <div class="vocab-french">L'accent circonflexe</div>
                        <div class="vocab-english">Also sounds like "eh"</div>
                        <div style="margin-top: 5px; font-size: 0.9rem; color: #6B7280;">tête, fête, forêt</div>
                    </div>
                </div>

                <div class="vocab-image-card" style="border: 2px solid var(--warning);">
                    <div class="image-placeholder" style="font-size: 4rem;">ë</div>
                    <div class="vocab-info">
                        <div class="vocab-french">Le tréma</div>
                        <div class="vocab-english">Pronounce vowels separately</div>
                        <div style="margin-top: 5px; font-size: 0.9rem; color: #6B7280;">Noël, naïf</div>
                    </div>
                </div>

                <div class="vocab-image-card" style="border: 2px solid var(--info);">
                    <div class="image-placeholder" style="font-size: 4rem;">ç</div>
                    <div class="vocab-info">
                        <div class="vocab-french">La cédille</div>
                        <div class="vocab-english">Makes C sound like "s"</div>
                        <div style="margin-top: 5px; font-size: 0.9rem; color: #6B7280;">français, garçon, ça</div>
                    </div>
                </div>
            </div>

            <div class="grammar-box">
                <h4><i class="fas fa-lightbulb"></i> Quick Rule: É vs È</h4>
                <table style="width: 100%; margin-top: 15px;">
                    <tr>
                        <td style="padding: 10px; width: 50%;"><strong>É (accent aigu)</strong> = "ay" sound<br>Open mouth, smile slightly<br><em>café = kah-FAY</em></td>
                        <td style="padding: 10px;"><strong>È (accent grave)</strong> = "eh" sound<br>More open mouth<br><em>mère = MEHR</em></td>
                    </tr>
                </table>
            </div>

            <div class="cultural-note">
                <div class="icon">📱</div>
                <div>
                    <h4>Typing French Accents</h4>
                    <p><strong>On Mac:</strong> Hold the letter key, then select the accent from the popup</p>
                    <p><strong>On Windows:</strong> Use Alt codes or install a French keyboard</p>
                    <p><strong>On Phone:</strong> Hold the letter to see accent options</p>
                </div>
            </div>
        </div>

        <!-- LESSON 7: CLASSROOM EXPRESSIONS -->
        <div class="content-card">
            <h2><i class="fas fa-chalkboard-teacher"></i> Lesson 6: Classroom Expressions</h2>

            <p>These phrases will help you navigate any French learning environment. Use them to ask for help, clarification, or repetition!</p>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">🙋‍♂️</div>
                    <div class="french">Je ne comprends pas</div>
                    <div class="pronunciation">[zhuh nuh kohm-PRAHN pah]</div>
                    <div class="english">I don't understand</div>
                    <button class="audio-btn" onclick="speak('Je ne comprends pas')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🔄</div>
                    <div class="french">Répétez, s'il vous plaît</div>
                    <div class="pronunciation">[ray-pay-TAY seel voo PLEH]</div>
                    <div class="english">Please repeat</div>
                    <button class="audio-btn" onclick="speak('Répétez, s\\'il vous plaît')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🐌</div>
                    <div class="french">Plus lentement, s'il vous plaît</div>
                    <div class="pronunciation">[ploo lahnt-MAHN seel voo PLEH]</div>
                    <div class="english">More slowly, please</div>
                    <button class="audio-btn" onclick="speak('Plus lentement, s\\'il vous plaît')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">❓</div>
                    <div class="french">Comment dit-on "..." en français ?</div>
                    <div class="pronunciation">[koh-MAHN dee-TOHN ... ahn frahn-SEH]</div>
                    <div class="english">How do you say "..." in French?</div>
                    <button class="audio-btn" onclick="speak('Comment dit-on en français')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📝</div>
                    <div class="french">Comment ça s'écrit ?</div>
                    <div class="pronunciation">[koh-MAHN sah say-KREE]</div>
                    <div class="english">How is it spelled?</div>
                    <button class="audio-btn" onclick="speak('Comment ça s\\'écrit')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🤔</div>
                    <div class="french">Qu'est-ce que ça veut dire ?</div>
                    <div class="pronunciation">[kess kuh sah vuh DEER]</div>
                    <div class="english">What does that mean?</div>
                    <button class="audio-btn" onclick="speak('Qu\\'est-ce que ça veut dire')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">✅</div>
                    <div class="french">J'ai compris !</div>
                    <div class="pronunciation">[zhay kohm-PREE]</div>
                    <div class="english">I understand! / I got it!</div>
                    <button class="audio-btn" onclick="speak('J\\'ai compris')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🙏</div>
                    <div class="french">Merci beaucoup !</div>
                    <div class="pronunciation">[mair-SEE boh-KOO]</div>
                    <div class="english">Thank you very much!</div>
                    <button class="audio-btn" onclick="speak('Merci beaucoup')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>
        </div>

        <!-- PRACTICE EXERCISES -->
        <div class="exercise-section">
            <h3><i class="fas fa-pencil-alt"></i> Practice Exercises</h3>

            <div class="exercise" data-correct="b">
                <p class="exercise-question"><strong>1.</strong> You meet your friend's grandmother for the first time. Should you use TU or VOUS?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Tu - because she's related to your friend</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>Vous - because she's an elder you've just met</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>Either is fine</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Don't use any - just wave!</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="b">
                <p class="exercise-question"><strong>2.</strong> How do you say "My name is..." in French?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Je suis appelle...</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>Je m'appelle...</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>Mon nom est...</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Je t'appelle...</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="d">
                <p class="exercise-question"><strong>3.</strong> Which French letter is called "double-vé" (doo-bluh-vay)?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>V</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>U</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>M</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>W</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="a">
                <p class="exercise-question"><strong>4.</strong> What does the accent on "ç" (cédille) do?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Makes C sound like "s"</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>Makes C sound like "k"</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>Makes C silent</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Makes C sound like "ch"</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="c">
                <p class="exercise-question"><strong>5.</strong> Complete the sentence: "Elle ___" (Her name is Marie)</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>m'appelle Marie</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>t'appelle Marie</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>s'appelle Marie</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>vous appelle Marie</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>
        </div>

        <!-- SECTION SUMMARY -->
        <div class="content-card">
            <h2><i class="fas fa-check-circle"></i> Section 1 Summary</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
                <div style="background: #1F2937; padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary-blue); color: #F3F4F6;">
                    <h4 style="color: #93C5FD;">Greetings</h4>
                    <ul style="margin-left: 15px; margin-top: 10px;">
                        <li>Bonjour (Hello/Good day)</li>
                        <li>Bonsoir (Good evening)</li>
                        <li>Salut (Hi - informal)</li>
                    </ul>
                </div>

                <div style="background: #1F2937; padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary-red); color: #F3F4F6;">
                    <h4 style="color: #FCA5A5;">Introductions</h4>
                    <ul style="margin-left: 15px; margin-top: 10px;">
                        <li>Je m'appelle... (My name is...)</li>
                        <li>Enchanté(e) (Nice to meet you)</li>
                        <li>Tu vs Vous distinction</li>
                    </ul>
                </div>

                <div style="background: #1F2937; padding: 15px; border-radius: 8px; border-left: 4px solid var(--success); color: #F3F4F6;">
                    <h4 style="color: #6EE7B7;">Alphabet & Accents</h4>
                    <ul style="margin-left: 15px; margin-top: 10px;">
                        <li>26 letters with French pronunciation</li>
                        <li>5 accent marks: é è ê ë ç</li>
                        <li>Silent endings pattern</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- NAVIGATION -->
        <div class="section-navigation">
            <button class="nav-btn" disabled>
                <i class="fas fa-arrow-left"></i>
                <span>Previous Section</span>
            </button>
            <button class="nav-btn primary" onclick="goToSection(2)">
                <span>Next: Nationalities & Être</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = section1;
}
