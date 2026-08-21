// Section 23: At the Doctor's
window.section23 = {
    id: 23, title: "At the Doctor's", frenchTitle: "Chez le docteur", duration: "28 minutes", level: "A1-A2",
    content: `
        <div class="section-header">
            <div class="section-badge"><i class="fas fa-users"></i><span>Real-Life A1-A2</span></div>
            <h1>At the Doctor's</h1>
            <p class="french-title">Chez le docteur</p>
        </div>
        <div class="content-card">
            <h2><i class="fas fa-user-md"></i> Body Parts (Le corps)</h2>
            <div class="image-vocabulary">
                <div class="vocab-image-card"><div class="image-placeholder">🧠</div><div class="vocab-info"><div class="vocab-french">la tête</div><div class="vocab-english">head</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">👁️</div><div class="vocab-info"><div class="vocab-french">les yeux (m)</div><div class="vocab-english">eyes</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">👂</div><div class="vocab-info"><div class="vocab-french">les oreilles (f)</div><div class="vocab-english">ears</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">👃</div><div class="vocab-info"><div class="vocab-french">le nez</div><div class="vocab-english">nose</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">👄</div><div class="vocab-info"><div class="vocab-french">la bouche</div><div class="vocab-english">mouth</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🦷</div><div class="vocab-info"><div class="vocab-french">les dents (f)</div><div class="vocab-english">teeth</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">💪</div><div class="vocab-info"><div class="vocab-french">le bras</div><div class="vocab-english">arm</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">✋</div><div class="vocab-info"><div class="vocab-french">la main</div><div class="vocab-english">hand</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🦵</div><div class="vocab-info"><div class="vocab-french">la jambe</div><div class="vocab-english">leg</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🦶</div><div class="vocab-info"><div class="vocab-french">le pied</div><div class="vocab-english">foot</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">💚</div><div class="vocab-info"><div class="vocab-french">le ventre / l'estomac</div><div class="vocab-english">stomach</div></div></div>
                <div class="vocab-image-card"><div class="image-placeholder">🫁</div><div class="vocab-info"><div class="vocab-french">le dos</div><div class="vocab-english">back</div></div></div>
            </div>
        </div>
        <div class="content-card">
            <h2><i class="fas fa-thermometer-half"></i> Describing Symptoms</h2>
            <div class="grammar-box">
                <h4>J'ai mal à + body part</h4>
                <p style="margin-top: 10px;">To say something hurts: <strong>J'ai mal à la/au/aux + body part</strong></p>
            </div>
            <div class="phrase-grid">
                <div class="phrase-card"><div class="illustration">🤕</div><div class="french">J'ai mal à la tête</div><div class="english">I have a headache</div></div>
                <div class="phrase-card"><div class="illustration">🤢</div><div class="french">J'ai mal au ventre</div><div class="english">I have a stomachache</div></div>
                <div class="phrase-card"><div class="illustration">😷</div><div class="french">J'ai mal à la gorge</div><div class="english">I have a sore throat</div></div>
                <div class="phrase-card"><div class="illustration">🦷</div><div class="french">J'ai mal aux dents</div><div class="english">I have a toothache</div></div>
                <div class="phrase-card"><div class="illustration">🤒</div><div class="french">J'ai de la fièvre</div><div class="english">I have a fever</div></div>
                <div class="phrase-card"><div class="illustration">🤧</div><div class="french">Je suis enrhumé(e)</div><div class="english">I have a cold</div></div>
                <div class="phrase-card"><div class="illustration">🤮</div><div class="french">J'ai envie de vomir</div><div class="english">I feel like vomiting</div></div>
                <div class="phrase-card"><div class="illustration">😵</div><div class="french">Je suis fatigué(e)</div><div class="english">I'm tired</div></div>
            </div>
        </div>
        <div class="content-card">
            <h2><i class="fas fa-comments"></i> At the Doctor's Office</h2>
            <div class="dialogue-box">
                <div class="dialogue-line person-b"><div class="dialogue-avatar">👨‍⚕️</div><div class="dialogue-content"><div class="french-text">Bonjour, qu'est-ce qui ne va pas ?</div><div class="english-text">Hello, what's wrong?</div></div></div>
                <div class="dialogue-line person-a"><div class="dialogue-avatar">🤒</div><div class="dialogue-content"><div class="french-text">J'ai mal à la tête et j'ai de la fièvre depuis hier.</div><div class="english-text">I have a headache and I've had a fever since yesterday.</div></div></div>
                <div class="dialogue-line person-b"><div class="dialogue-avatar">👨‍⚕️</div><div class="dialogue-content"><div class="french-text">Avez-vous d'autres symptômes ?</div><div class="english-text">Do you have any other symptoms?</div></div></div>
                <div class="dialogue-line person-a"><div class="dialogue-avatar">🤒</div><div class="dialogue-content"><div class="french-text">Oui, j'ai aussi mal à la gorge.</div><div class="english-text">Yes, I also have a sore throat.</div></div></div>
                <div class="dialogue-line person-b"><div class="dialogue-avatar">👨‍⚕️</div><div class="dialogue-content"><div class="french-text">Je vais vous prescrire des médicaments. Prenez-les trois fois par jour.</div><div class="english-text">I'm going to prescribe you some medicine. Take it three times a day.</div></div></div>
            </div>
        </div>
        <div class="section-navigation">
            <button class="nav-btn" onclick="goToSection(22)"><i class="fas fa-arrow-left"></i><span>Previous</span></button>
            <button class="nav-btn primary" onclick="goToSection(24)"><span>Next: Food</span><i class="fas fa-arrow-right"></i></button>
        </div>
    `
};
