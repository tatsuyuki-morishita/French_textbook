// Section 14: Hotel Booking
window.section14 = {
    id: 14,
    title: "Hotel Booking",
    frenchTitle: "Réserver un hébergement",
    duration: "39 minutes",
    level: "A1",
    content: `
        <div class="section-header">
            <div class="section-badge"><i class="fas fa-map-signs"></i><span>Practical Topics A1</span></div>
            <h1>Hotel Booking</h1>
            <p class="french-title">Réserver un hébergement</p>
            <div class="section-meta"><span><i class="fas fa-clock"></i> 39 minutes</span></div>
        </div>

        <div class="content-card">
            <h2><i class="fas fa-bed"></i> Hotel Vocabulary</h2>
            <div class="image-vocabulary">
                <div class="vocab-image-card"><div class="image-placeholder">🏨</div><div class="vocab-info"><div class="vocab-french">l'hôtel (m)</div><div class="vocab-english">hotel</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🛏️</div><div class="vocab-info"><div class="vocab-french">une chambre</div><div class="vocab-english">a room</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">👤</div><div class="vocab-info"><div class="vocab-french">une chambre simple</div><div class="vocab-english">single room</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">👥</div><div class="vocab-info"><div class="vocab-french">une chambre double</div><div class="vocab-english">double room</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🔑</div><div class="vocab-info"><div class="vocab-french">la clé</div><div class="vocab-english">key</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">📋</div><div class="vocab-info"><div class="vocab-french">la réception</div><div class="vocab-english">reception</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🍳</div><div class="vocab-info"><div class="vocab-french">le petit-déjeuner</div><div class="vocab-english">breakfast</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">📶</div><div class="vocab-info"><div class="vocab-french">le wifi</div><div class="vocab-english">wifi</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🅿️</div><div class="vocab-info"><div class="vocab-french">le parking</div><div class="vocab-english">parking</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🛁</div><div class="vocab-info"><div class="vocab-french">la salle de bains</div><div class="vocab-english">bathroom</div></div></div>
            </div>
        </div>

        <div class="content-card">
            <h2><i class="fas fa-calendar-check"></i> Making a Reservation</h2>
            <div class="pattern-box">
                <h4>🔍 Pattern Discovery: Polite Requests with "Je voudrais"</h4>
                <p><strong>Je voudrais</strong> (I would like) is the polite form of "Je veux" (I want). Always use this in formal situations!</p>
                <ul style="margin-top: 10px;">
                    <li><strong>Je voudrais</strong> + noun: Je voudrais <em>une chambre</em></li>
                    <li><strong>Je voudrais</strong> + infinitive: Je voudrais <em>réserver</em></li>
                    <li>Other polite patterns:
                        <ul style="margin-left: 20px;">
                            <li><strong>Pourriez-vous...?</strong> = Could you...?</li>
                            <li><strong>Est-ce que je pourrais...?</strong> = Could I...?</li>
                            <li><strong>Auriez-vous...?</strong> = Would you have...?</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="phrase-grid">
                <div class="phrase-card"><div class="french">Je voudrais réserver une chambre</div><div class="english">I would like to book a room</div></div>
                <div class="phrase-card"><div class="french">Pour combien de nuits ?</div><div class="english">For how many nights?</div></div>
                <div class="phrase-card"><div class="french">Du ... au ...</div><div class="english">From ... to ...</div></div>
                <div class="phrase-card"><div class="french">C'est combien par nuit ?</div><div class="english">How much per night?</div></div>
                <div class="phrase-card"><div class="french">Le petit-déjeuner est compris ?</div><div class="english">Is breakfast included?</div></div>
                <div class="phrase-card"><div class="french">À quelle heure est le check-in ?</div><div class="english">What time is check-in?</div></div>
            </div>
            <div class="dialogue-box">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-comments"></i> Booking Dialogue</h4>
                <div class="dialogue-line person-a"><div class="dialogue-avatar">🧑</div><div class="dialogue-content"><div class="french-text">Bonjour, je voudrais réserver une chambre double, s'il vous plaît.</div><div class="english-text">Hello, I would like to book a double room, please.</div></div></div>
                <div class="dialogue-line person-b"><div class="dialogue-avatar">👩‍💼</div><div class="dialogue-content"><div class="french-text">Bien sûr. Pour quelles dates ?</div><div class="english-text">Of course. For which dates?</div></div></div>
                <div class="dialogue-line person-a"><div class="dialogue-avatar">🧑</div><div class="dialogue-content"><div class="french-text">Du 15 au 18 juillet.</div><div class="english-text">From July 15th to 18th.</div></div></div>
                <div class="dialogue-line person-b"><div class="dialogue-avatar">👩‍💼</div><div class="dialogue-content"><div class="french-text">Très bien. C'est 85 euros par nuit, petit-déjeuner compris.</div><div class="english-text">Very good. It's 85 euros per night, breakfast included.</div></div></div>
            </div>
        </div>

        <div class="exercise-section">
            <h3><i class="fas fa-pencil-alt"></i> Practice</h3>
            <div class="exercise" data-correct="c">
                <p class="exercise-question">1. "I would like to book" in French:</p>
                <div class="exercise-options">
                    <div class="exercise-option" data-option="a"><span class="option-letter">A</span><span>Je veux réserver</span></div>
                    <div class="exercise-option" data-option="b"><span class="option-letter">B</span><span>J'aime réserver</span></div>
                    <div class="exercise-option" data-option="c"><span class="option-letter">C</span><span>Je voudrais réserver</span></div>
                    <div class="exercise-option" data-option="d"><span class="option-letter">D</span><span>Je réserve</span></div>
                </div>
                <div class="exercise-feedback"></div>
            </div>
        </div>

        <div class="section-navigation">
            <button class="nav-btn" onclick="goToSection(13)"><i class="fas fa-arrow-left"></i><span>Previous</span></button>
            <button class="nav-btn primary" onclick="goToSection(15)"><span>Next: Review</span><i class="fas fa-arrow-right"></i></button>
        </div>
    `
};
