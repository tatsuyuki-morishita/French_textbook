// Section 30: Next Steps
window.section30 = {
    id: 30, title: "Next Steps", frenchTitle: "Et maintenant ?", duration: "10 minutes", level: "A2",
    content: `
        <div class="section-header">
            <div class="section-badge"><i class="fas fa-graduation-cap"></i><span>Conclusion</span></div>
            <h1>Congratulations! Next Steps</h1>
            <p class="french-title">Félicitations ! Et maintenant ?</p>
        </div>
        <div class="content-card">
            <h2><i class="fas fa-trophy"></i> You Did It!</h2>
            <div style="text-align: center; font-size: 4rem; margin: 30px 0;">🎉🇫🇷🎊</div>
            <p style="font-size: 1.2rem; text-align: center;">
                <strong>Félicitations !</strong> You've completed the A0-A2 French course!
            </p>
            <div class="tip-box" style="margin-top: 30px;">
                <i class="fas fa-star"></i>
                <div>
                    <h4>What You've Accomplished</h4>
                    <ul style="margin-top: 10px;">
                        <li>✅ Mastered essential vocabulary for daily life</li>
                        <li>✅ Learned to conjugate verbs in multiple tenses</li>
                        <li>✅ Can introduce yourself and have basic conversations</li>
                        <li>✅ Understand French sentence structure</li>
                        <li>✅ Can discuss family, work, hobbies, and travel</li>
                        <li>✅ Know how to navigate real-life situations in French</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content-card">
            <h2><i class="fas fa-road"></i> Your Path Forward</h2>
            <div class="phrase-grid">
                <div class="phrase-card">
                    <div class="illustration">📚</div>
                    <div class="french">Continue to B1</div>
                    <div class="english">Intermediate level: complex conversations, past tenses, subjunctive</div>
                </div>
                <div class="phrase-card">
                    <div class="illustration">🎬</div>
                    <div class="french">Watch French Media</div>
                    <div class="english">Movies, TV shows, YouTube in French with subtitles</div>
                </div>
                <div class="phrase-card">
                    <div class="illustration">🗣️</div>
                    <div class="french">Practice Speaking</div>
                    <div class="english">Find language partners, tutors, or conversation groups</div>
                </div>
                <div class="phrase-card">
                    <div class="illustration">📖</div>
                    <div class="french">Read in French</div>
                    <div class="english">Children's books, news articles, graded readers</div>
                </div>
                <div class="phrase-card">
                    <div class="illustration">🎵</div>
                    <div class="french">Listen to Music</div>
                    <div class="english">French songs with lyrics to improve listening</div>
                </div>
                <div class="phrase-card">
                    <div class="illustration">✈️</div>
                    <div class="french">Visit France!</div>
                    <div class="english">Put your skills to the test in real life</div>
                </div>
            </div>
        </div>
        <div class="content-card">
            <h2><i class="fas fa-quote-left"></i> Final Words</h2>
            <div class="cultural-note">
                <div class="icon">💪</div>
                <div>
                    <h4>Remember:</h4>
                    <p style="font-style: italic; font-size: 1.1rem; margin-top: 10px;">
                        "C'est en forgeant qu'on devient forgeron."<br>
                        <span style="color: #D1D5DB;">(Practice makes perfect - literally: "It's by forging that one becomes a blacksmith")</span>
                    </p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <p style="font-size: 1.3rem;"><strong>Bonne continuation et bon courage !</strong></p>
                <p>Good luck on your French journey!</p>
            </div>
        </div>
        <div class="content-card">
            <h2><i class="fas fa-redo"></i> Review Anytime</h2>
            <p>Use the sidebar to revisit any section whenever you need to refresh your memory. Regular review is key to retaining what you've learned!</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                <button class="nav-btn" onclick="goToSection(1)" style="justify-content: center;">
                    <i class="fas fa-home"></i> Start from Beginning
                </button>
                <button class="nav-btn" onclick="goToSection(15)" style="justify-content: center;">
                    <i class="fas fa-clipboard-check"></i> A1 Review
                </button>
            </div>
        </div>
        <div class="section-navigation">
            <button class="nav-btn" onclick="goToSection(29)">
                <i class="fas fa-arrow-left"></i>
                <span>Previous: Sentences</span>
            </button>
            <button class="nav-btn primary" onclick="goToSection(1)">
                <span>Start Over</span>
                <i class="fas fa-redo"></i>
            </button>
        </div>
    `
};
