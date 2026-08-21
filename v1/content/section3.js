// Section 3: Greeting & Saying Goodbye (Saluer & dire au revoir)
window.section3 = {
    id: 3,
    title: "Greeting & Saying Goodbye",
    frenchTitle: "Saluer & dire au revoir",
    duration: "21 minutes",
    level: "A0",
    objectives: [
        "Learn various ways to greet people",
        "Master different goodbye expressions",
        "Understand formal vs informal greetings",
        "Practice time-appropriate greetings"
    ],
    content: `
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-seedling"></i>
                <span>Foundation Level A0</span>
            </div>
            <h1>Greeting & Saying Goodbye</h1>
            <p class="french-title">Saluer & dire au revoir</p>
            <div class="section-meta">
                <span><i class="fas fa-clock"></i> 21 minutes</span>
                <span><i class="fas fa-signal"></i> Beginner</span>
                <span><i class="fas fa-book"></i> 3 lessons</span>
            </div>
        </div>

        <div class="learning-objectives">
            <h3><i class="fas fa-target"></i> What You'll Learn</h3>
            <ul>
                <li>Greet people at any time of day</li>
                <li>Say goodbye in various situations</li>
                <li>Use formal and informal greetings appropriately</li>
                <li>Express well-wishes and polite phrases</li>
            </ul>
        </div>

        <!-- Lesson 1: Greetings -->
        <div class="content-card">
            <h2><i class="fas fa-sun"></i> Lesson 1: Greetings (Les salutations)</h2>

            <p>French greetings vary depending on the time of day and your relationship with the person. Let's learn the essential ones!</p>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">☀️</div>
                    <div class="french">Bonjour</div>
                    <div class="pronunciation">[bohn-ZHOOR]</div>
                    <div class="english">Good morning / Good day / Hello</div>
                    <button class="audio-btn" onclick="speak('Bonjour')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🌅</div>
                    <div class="french">Bonsoir</div>
                    <div class="pronunciation">[bohn-SWAHR]</div>
                    <div class="english">Good evening</div>
                    <button class="audio-btn" onclick="speak('Bonsoir')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🌙</div>
                    <div class="french">Bonne nuit</div>
                    <div class="pronunciation">[bun NWEE]</div>
                    <div class="english">Good night (when going to bed)</div>
                    <button class="audio-btn" onclick="speak('Bonne nuit')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">👋</div>
                    <div class="french">Salut !</div>
                    <div class="pronunciation">[sah-LOO]</div>
                    <div class="english">Hi! / Hey! (informal)</div>
                    <button class="audio-btn" onclick="speak('Salut')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🤗</div>
                    <div class="french">Coucou !</div>
                    <div class="pronunciation">[koo-KOO]</div>
                    <div class="english">Hey there! (very informal)</div>
                    <button class="audio-btn" onclick="speak('Coucou')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📞</div>
                    <div class="french">Allô ?</div>
                    <div class="pronunciation">[ah-LOH]</div>
                    <div class="english">Hello? (on the phone only)</div>
                    <button class="audio-btn" onclick="speak('Allô')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>

            <div class="grammar-box">
                <h4><i class="fas fa-lightbulb"></i> When to Use Each Greeting</h4>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    <li><strong>Bonjour</strong> - Use from morning until about 6 PM. It's always polite!</li>
                    <li><strong>Bonsoir</strong> - Use from late afternoon/evening onwards</li>
                    <li><strong>Bonne nuit</strong> - Only use when someone is going to sleep, not as "good evening"</li>
                    <li><strong>Salut</strong> - Use with friends, family, people your age</li>
                    <li><strong>Coucou</strong> - Very casual, use with close friends or children</li>
                </ul>
            </div>

            <div class="cultural-note">
                <div class="icon">🇫🇷</div>
                <div>
                    <h4>Cultural Insight: Always Greet!</h4>
                    <p>In France, it's considered rude to start a conversation or enter a shop without first saying "Bonjour." Always greet the shopkeeper when entering a store and say "Au revoir" when leaving. This simple courtesy is very important in French culture!</p>
                </div>
            </div>
        </div>

        <!-- Lesson 2: Asking How Someone Is -->
        <div class="content-card">
            <h2><i class="fas fa-heart"></i> Lesson 2: How Are You? (Comment allez-vous ?)</h2>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">😊</div>
                    <div class="french">Comment allez-vous ?</div>
                    <div class="pronunciation">[koh-MAHN tah-lay VOO]</div>
                    <div class="english">How are you? (formal)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🙂</div>
                    <div class="french">Comment vas-tu ?</div>
                    <div class="pronunciation">[koh-MAHN vah TOO]</div>
                    <div class="english">How are you? (informal)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">👍</div>
                    <div class="french">Ça va ?</div>
                    <div class="pronunciation">[sah VAH]</div>
                    <div class="english">How's it going? (casual)</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🌟</div>
                    <div class="french">Je vais très bien, merci !</div>
                    <div class="pronunciation">[zhuh veh treh bee-EN mair-SEE]</div>
                    <div class="english">I'm doing very well, thanks!</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😌</div>
                    <div class="french">Ça va bien</div>
                    <div class="pronunciation">[sah vah bee-EN]</div>
                    <div class="english">I'm fine / It's going well</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😐</div>
                    <div class="french">Comme ci, comme ça</div>
                    <div class="pronunciation">[kuhm SEE kuhm SAH]</div>
                    <div class="english">So-so</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😔</div>
                    <div class="french">Pas très bien</div>
                    <div class="pronunciation">[pah treh bee-EN]</div>
                    <div class="english">Not very well</div>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🔄</div>
                    <div class="french">Et vous ? / Et toi ?</div>
                    <div class="pronunciation">[ay VOO / ay TWAH]</div>
                    <div class="english">And you? (formal/informal)</div>
                </div>
            </div>

            <div class="dialogue-box">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-comments"></i> Example Dialogue: At a Café</h4>
                <div class="dialogue-line person-a">
                    <div class="dialogue-avatar">👨‍💼</div>
                    <div class="dialogue-content">
                        <div class="french-text">Bonjour, Madame !</div>
                        <div class="english-text">Good morning, Madam!</div>
                    </div>
                </div>
                <div class="dialogue-line person-b">
                    <div class="dialogue-avatar">👩</div>
                    <div class="dialogue-content">
                        <div class="french-text">Bonjour, Monsieur ! Comment allez-vous ?</div>
                        <div class="english-text">Good morning, Sir! How are you?</div>
                    </div>
                </div>
                <div class="dialogue-line person-a">
                    <div class="dialogue-avatar">👨‍💼</div>
                    <div class="dialogue-content">
                        <div class="french-text">Je vais très bien, merci. Et vous ?</div>
                        <div class="english-text">I'm doing very well, thank you. And you?</div>
                    </div>
                </div>
                <div class="dialogue-line person-b">
                    <div class="dialogue-avatar">👩</div>
                    <div class="dialogue-content">
                        <div class="french-text">Ça va bien, merci !</div>
                        <div class="english-text">I'm doing well, thank you!</div>
                    </div>
                </div>
            </div>

            <div class="tip-box">
                <i class="fas fa-info-circle"></i>
                <div>
                    <h4>Quick Response Tip</h4>
                    <p>The quickest response to "Ça va ?" is simply "Ça va !" (with a falling intonation). This means "I'm fine." You can also just say "Bien, merci !" (Fine, thanks!) for a polite, brief response.</p>
                </div>
            </div>
        </div>

        <!-- Lesson 3: Saying Goodbye -->
        <div class="content-card">
            <h2><i class="fas fa-door-open"></i> Lesson 3: Saying Goodbye (Dire au revoir)</h2>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">👋</div>
                    <div class="french">Au revoir</div>
                    <div class="pronunciation">[oh ruh-VWAHR]</div>
                    <div class="english">Goodbye</div>
                    <button class="audio-btn" onclick="speak('Au revoir')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🔜</div>
                    <div class="french">À bientôt</div>
                    <div class="pronunciation">[ah bee-en-TOH]</div>
                    <div class="english">See you soon</div>
                    <button class="audio-btn" onclick="speak('À bientôt')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📅</div>
                    <div class="french">À demain</div>
                    <div class="pronunciation">[ah duh-MAN]</div>
                    <div class="english">See you tomorrow</div>
                    <button class="audio-btn" onclick="speak('À demain')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">👀</div>
                    <div class="french">À tout à l'heure</div>
                    <div class="pronunciation">[ah too tah LUHR]</div>
                    <div class="english">See you later (same day)</div>
                    <button class="audio-btn" onclick="speak('À tout à l\\'heure')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">✌️</div>
                    <div class="french">À plus (tard)</div>
                    <div class="pronunciation">[ah PLOOS (tar)]</div>
                    <div class="english">See you later (casual)</div>
                    <button class="audio-btn" onclick="speak('À plus tard')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🤙</div>
                    <div class="french">Salut !</div>
                    <div class="pronunciation">[sah-LOO]</div>
                    <div class="english">Bye! (informal - also means hi!)</div>
                    <button class="audio-btn" onclick="speak('Salut')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😢</div>
                    <div class="french">Adieu</div>
                    <div class="pronunciation">[ah-DYUH]</div>
                    <div class="english">Farewell (permanent goodbye)</div>
                    <button class="audio-btn" onclick="speak('Adieu')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🌟</div>
                    <div class="french">Bonne journée !</div>
                    <div class="pronunciation">[bun zhoor-NAY]</div>
                    <div class="english">Have a good day!</div>
                    <button class="audio-btn" onclick="speak('Bonne journée')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🌙</div>
                    <div class="french">Bonne soirée !</div>
                    <div class="pronunciation">[bun swah-RAY]</div>
                    <div class="english">Have a good evening!</div>
                    <button class="audio-btn" onclick="speak('Bonne soirée')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📅</div>
                    <div class="french">Bon week-end !</div>
                    <div class="pronunciation">[bohn wee-KEND]</div>
                    <div class="english">Have a good weekend!</div>
                    <button class="audio-btn" onclick="speak('Bon week-end')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>

            <div class="grammar-box">
                <h4><i class="fas fa-lightbulb"></i> "À" Expressions for Future Meetings</h4>
                <p>The preposition <strong>à</strong> (at, to) is used in many goodbye expressions to indicate when you'll meet again:</p>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    <li><strong>À + time</strong> = See you at [time] → "À lundi" (See you Monday)</li>
                    <li><strong>À la prochaine</strong> = Until next time</li>
                    <li><strong>À ce soir</strong> = See you this evening</li>
                    <li><strong>À la semaine prochaine</strong> = See you next week</li>
                </ul>
            </div>

            <div class="cultural-note">
                <div class="icon">⚠️</div>
                <div>
                    <h4>Be Careful with "Adieu"!</h4>
                    <p>"Adieu" literally means "to God" and is used for permanent goodbyes or when you don't expect to see someone again. Using it casually can sound dramatic or even ominous! In southern France, however, "adieu" is sometimes used as a casual greeting. Context is key!</p>
                </div>
            </div>
        </div>

        <!-- Polite Expressions -->
        <div class="content-card">
            <h2><i class="fas fa-gem"></i> Bonus: Polite Expressions</h2>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">🙏</div>
                    <div class="french">S'il vous plaît</div>
                    <div class="pronunciation">[seel voo PLEH]</div>
                    <div class="english">Please (formal)</div>
                    <button class="audio-btn" onclick="speak('S\\'il vous plaît')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🙏</div>
                    <div class="french">S'il te plaît</div>
                    <div class="pronunciation">[seel tuh PLEH]</div>
                    <div class="english">Please (informal)</div>
                    <button class="audio-btn" onclick="speak('S\\'il te plaît')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">💝</div>
                    <div class="french">Merci</div>
                    <div class="pronunciation">[mair-SEE]</div>
                    <div class="english">Thank you</div>
                    <button class="audio-btn" onclick="speak('Merci')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">💖</div>
                    <div class="french">Merci beaucoup</div>
                    <div class="pronunciation">[mair-SEE boh-KOO]</div>
                    <div class="english">Thank you very much</div>
                    <button class="audio-btn" onclick="speak('Merci beaucoup')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😊</div>
                    <div class="french">De rien</div>
                    <div class="pronunciation">[duh ree-EN]</div>
                    <div class="english">You're welcome</div>
                    <button class="audio-btn" onclick="speak('De rien')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🤝</div>
                    <div class="french">Je vous en prie</div>
                    <div class="pronunciation">[zhuh voo zahn PREE]</div>
                    <div class="english">You're welcome (formal)</div>
                    <button class="audio-btn" onclick="speak('Je vous en prie')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😅</div>
                    <div class="french">Excusez-moi</div>
                    <div class="pronunciation">[eks-koo-zay MWAH]</div>
                    <div class="english">Excuse me (formal)</div>
                    <button class="audio-btn" onclick="speak('Excusez-moi')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😓</div>
                    <div class="french">Pardon</div>
                    <div class="pronunciation">[par-DOHN]</div>
                    <div class="english">Sorry / Pardon</div>
                    <button class="audio-btn" onclick="speak('Pardon')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>
        </div>

        <!-- Useful Daily Phrases -->
        <div class="content-card">
            <h2><i class="fas fa-comment-dots"></i> Bonus: Useful Daily Phrases</h2>

            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">🤔</div>
                    <div class="french">Je ne comprends pas</div>
                    <div class="pronunciation">[zhuh nuh kohm-PRAHN pah]</div>
                    <div class="english">I don't understand</div>
                    <button class="audio-btn" onclick="speak('Je ne comprends pas')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🔄</div>
                    <div class="french">Vous pouvez répéter ?</div>
                    <div class="pronunciation">[voo poo-VAY ray-pay-TAY]</div>
                    <div class="english">Can you repeat? (formal)</div>
                    <button class="audio-btn" onclick="speak('Vous pouvez répéter')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🐢</div>
                    <div class="french">Parlez plus lentement</div>
                    <div class="pronunciation">[par-LAY ploo lahnt-MAHN]</div>
                    <div class="english">Speak more slowly</div>
                    <button class="audio-btn" onclick="speak('Parlez plus lentement')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">😅</div>
                    <div class="french">Je ne parle pas bien français</div>
                    <div class="pronunciation">[zhuh nuh parl pah byahn frahn-SEH]</div>
                    <div class="english">I don't speak French well</div>
                    <button class="audio-btn" onclick="speak('Je ne parle pas bien français')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">📚</div>
                    <div class="french">J'apprends le français</div>
                    <div class="pronunciation">[zhah-PRAHN luh frahn-SEH]</div>
                    <div class="english">I'm learning French</div>
                    <button class="audio-btn" onclick="speak('J\\'apprends le français')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🇯🇵</div>
                    <div class="french">Je suis japonais(e)</div>
                    <div class="pronunciation">[zhuh swee zhah-poh-NEH(Z)]</div>
                    <div class="english">I'm Japanese</div>
                    <button class="audio-btn" onclick="speak('Je suis japonais')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">👍</div>
                    <div class="french">Oui / Non</div>
                    <div class="pronunciation">[wee / nohn]</div>
                    <div class="english">Yes / No</div>
                    <button class="audio-btn" onclick="speak('Oui. Non.')"><i class="fas fa-volume-up"></i></button>
                </div>

                <div class="phrase-card">
                    <div class="illustration">🤗</div>
                    <div class="french">Enchanté(e)</div>
                    <div class="pronunciation">[ahn-shahn-TAY]</div>
                    <div class="english">Nice to meet you</div>
                    <button class="audio-btn" onclick="speak('Enchanté')"><i class="fas fa-volume-up"></i></button>
                </div>
            </div>
        </div>

        <!-- Practice Exercises -->
        <div class="exercise-section">
            <h3><i class="fas fa-pencil-alt"></i> Practice Exercises</h3>

            <div class="exercise" data-correct="b">
                <p class="exercise-question">1. It's 8 PM. How do you greet someone?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Bonjour</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>Bonsoir</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>Bonne nuit</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Allô</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="c">
                <p class="exercise-question">2. How do you say "See you tomorrow"?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>À bientôt</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>À tout à l'heure</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>À demain</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Adieu</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="a">
                <p class="exercise-question">3. What is a casual way to ask "How are you?"</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Ça va ?</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>Comment allez-vous ?</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>Bonjour</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Enchanté</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="d">
                <p class="exercise-question">4. What does "Salut" mean?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Good morning only</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>Goodbye only</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>Excuse me</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Hi or Bye (informal)</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>

            <div class="exercise" data-correct="b">
                <p class="exercise-question">5. How do you say "You're welcome" in French (casual)?</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a">
                        <span class="option-letter">A</span>
                        <span>Merci</span>
                    </div>
                    <div class="exercise-option" data-option="b">
                        <span class="option-letter">B</span>
                        <span>De rien</span>
                    </div>
                    <div class="exercise-option" data-option="c">
                        <span class="option-letter">C</span>
                        <span>S'il vous plaît</span>
                    </div>
                    <div class="exercise-option" data-option="d">
                        <span class="option-letter">D</span>
                        <span>Pardon</span>
                    </div>
                </div>
                <div class="exercise-feedback"></div>
            </div>
        </div>

        <!-- Section Navigation -->
        <div class="section-navigation">
            <button class="nav-btn" onclick="goToSection(2)">
                <i class="fas fa-arrow-left"></i>
                <span>Previous: Nationalities</span>
            </button>
            <button class="nav-btn primary" onclick="goToSection(4)">
                <span>Next: Numbers Part 1</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = section3;
}
