export function createHomeScreen() {
    return `
        <div class="game-container">

            <div class="background-layer"></div>

            <main class="menu-wrapper">

                <section class="glass-card">

                    <h1 class="game-title">
                        The Last Splat
                    </h1>

                    <p class="game-subtitle">
                        Relax • Tap • Smile
                    </p>

                    <div class="menu-buttons">

                        <button class="neo-btn" id="playBtn">
                            Play
                        </button>

                        <button class="neo-btn">
                            Settings
                        </button>

                        <button class="neo-btn">
                            Achievements
                        </button>

                    </div>

                </section>

            </main>

        </div>
    `;
}
