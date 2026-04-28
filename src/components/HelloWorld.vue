<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const quickLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#story' },
  { label: 'Contact', href: '#visit' },
  { label: 'Reservations', href: '#book' },
  { label: 'Shop Gifts', href: '#' },
  { label: 'Order Online', href: '#' },
  { label: 'Order Catering', href: '#' },
]

const menuSections = [
  {
    title: 'Cold Cuts & Crudo',
    items: [
      { name: 'Bluefin Tataki', desc: 'ponzu, chrysanthemum, sesame smoke', price: '$24' },
      { name: 'Hamachi Rose', desc: 'yuzu kosho, pickled pear, shiso oil', price: '$21' },
      { name: 'Garden Sashimi Plate', desc: 'chef selection, market garnish', price: '$36' },
    ],
  },
  {
    title: 'Noodles & Fire',
    items: [
      { name: 'Sans Soleil Udon', desc: 'chili broth, pork ragu, garlic chips', price: '$27' },
      { name: 'Miso Butter Ramen', desc: 'corn, shiitake, marinated egg', price: '$23' },
      { name: 'Yaki Udon Carbonara', desc: 'cured yolk, pepper, smoked pancetta', price: '$26' },
    ],
  },
  {
    title: 'Sake & Pairings',
    items: [
      { name: 'Hanatohie Junmai', desc: 'melon rind, white flowers', price: '$14/glass' },
      { name: 'Umeshu Highball', desc: 'plum liqueur, sparkling soda, mint', price: '$13' },
      { name: 'Sommelier Flight', desc: 'three pours matched to the menu', price: '$32' },
    ],
  },
]

const highlights = [
  'Open 7 days a week',
  'Reservations recommended',
  'Late seating until 22:30',
  'Private dining available',
]
</script>

<template>
  <div class="page">
    <div class="ambient ambient-left"></div>
    <div class="ambient ambient-right"></div>

    <section class="left-column">
      <header class="floating-shell">
        <div class="topbar frame">
          <button class="menu-toggle" type="button" :aria-expanded="isMenuOpen" @click="isMenuOpen = !isMenuOpen">
            <span :class="{ open: isMenuOpen }"></span>
            <span :class="{ open: isMenuOpen }"></span>
          </button>

          <div class="brand-mini">FLEURS ET CADEAUX</div>
          <a class="nav-cta" href="#book">Reserve</a>
        </div>

        <nav v-if="isMenuOpen" class="menu-panel frame">
          <a
            v-for="item in quickLinks"
            :key="item.label"
            :href="item.href"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </nav>
      </header>

      <main class="layout">
        <section class="hero-left frame">
          <p class="eyebrow">MONTREAL | CUISINE JAPONAISE</p>
          <h1>
            Fleurs et Cadeaux<br />
            <span class="hero-sub">sake x vin x cuisine de nuit</span>
          </h1>

          <div class="hero-actions">
            <a class="btn btn-primary" href="#menu">View Menu</a>
            <a class="btn btn-ghost" href="#book">Book a Table</a>
          </div>

          <div class="ticker" aria-label="house highlights">
            <span v-for="item in highlights" :key="item">{{ item }}</span>
          </div>
        </section>

        <section class="split">
          <article class="card frame visual-card">
            <div class="badge">Chef pick</div>
            <h2>Udon au Soleil Rouge</h2>
            <p>
              Rich chili-butter broth, garlic crunch, and handmade noodles. Intense, warm, and built
              for long evenings.
            </p>
            <div class="price-row">
              <span>$27</span>
              <button type="button">Add to booking notes</button>
            </div>
          </article>

          <article class="card frame contact-card" id="visit">
            <h2>Open every evening</h2>
            <p class="hours">17:00 - 22:30</p>
            <p>1002 Rue Saint-Urbain<br />Montreal, Quebec</p>
            <a href="mailto:info@fleursetcadeaux.com">info@fleursetcadeaux.com</a>
          </article>
        </section>

        <section class="menu frame" id="menu">
          <div class="menu-head">
            <p>Seasonal selection</p>
            <h2>Menu</h2>
          </div>

          <div class="menu-grid">
            <article class="menu-section" v-for="section in menuSections" :key="section.title">
              <h3>{{ section.title }}</h3>
              <ul>
                <li v-for="item in section.items" :key="item.name">
                  <div class="menu-line">
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.price }}</span>
                  </div>
                  <small>{{ item.desc }}</small>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section class="story split" id="story">
          <article class="card frame story-copy">
            <p class="eyebrow">ABOUT THE ROOM</p>
            <h2>Classic facade, midnight energy.</h2>
            <p>
              Fleurs et Cadeaux blends a nostalgic Montreal address with a vibrant Japanese kitchen.
              The room moves from calm to electric as the night goes on, anchored by a deep sake
              cellar and playful plates to share.
            </p>
            <p>
              Come for the sashimi, stay for the soundtrack, and leave with one more pour than you
              planned.
            </p>
          </article>

          <article class="card frame reserve" id="book">
            <h2>Reservations</h2>
            <p>Walk-ins welcome, but the best seats fill fast.</p>
            <div class="reserve-actions">
              <a class="btn btn-primary" href="#">Reserve on OpenTable</a>
              <a class="btn btn-ghost" href="#">Call +1 (514) 555-0142</a>
            </div>
          </article>
        </section>
      </main>

      <footer class="footer frame">
        <span>Instagram @fleursetcadeauxmtl</span>
        <span>7 jours sur 7</span>
        <span>Sake bar + late kitchen</span>
      </footer>
    </section>

    <aside class="right-column frame" aria-label="Fleurs et Cadeaux facade image">
      <div class="right-image"></div>
      <div class="right-info">
        <p>1002 Rue Saint-Urbain</p>
        <p>Montreal, Quebec</p>
      </div>
    </aside>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Syne:wght@400;600;700&display=swap');

:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
}

.page {
  --cream: #f4f0e3;
  --berry: #7e2248;
  --berry-dark: #611634;
  --teal: #2ec8c8;
  --ink: #1d1a1b;
  min-height: 100vh;
  background: radial-gradient(circle at 10% 10%, #fff8f2 0%, var(--cream) 38%, #eee4d3 100%);
  color: var(--ink);
  font-family: 'Syne', 'Trebuchet MS', sans-serif;
  padding: 0.85rem;
  position: relative;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) minmax(300px, 1fr);
  gap: 0.9rem;
  align-items: start;
}

.ambient {
  position: fixed;
  width: 22rem;
  height: 22rem;
  border-radius: 999px;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}

.ambient-left {
  background: color-mix(in srgb, var(--teal), white 60%);
  top: -7rem;
  left: -6rem;
}

.ambient-right {
  background: color-mix(in srgb, var(--berry), white 72%);
  right: -7rem;
  top: 28rem;
}

.left-column,
.right-column {
  position: relative;
  z-index: 1;
}

.floating-shell {
  position: sticky;
  top: 0.75rem;
  z-index: 20;
}

.frame {
  border: 2px solid color-mix(in srgb, var(--teal), white 45%);
  border-radius: 18px;
  background: color-mix(in srgb, var(--cream), white 16%);
}

.topbar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 0.78rem 1rem;
  backdrop-filter: blur(8px);
}

.menu-toggle {
  border: none;
  background: transparent;
  width: 2rem;
  height: 2rem;
  display: grid;
  align-content: center;
  gap: 0.33rem;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 2px;
  width: 1.35rem;
  background: var(--teal);
  border-radius: 999px;
  transition: transform 0.2s ease;
}

.menu-toggle span.open:first-child {
  transform: translateY(3.5px) rotate(30deg);
}

.menu-toggle span.open:last-child {
  transform: translateY(-3.5px) rotate(-30deg);
}

.brand-mini {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 800;
  font-size: clamp(1.1rem, 2.2vw, 2rem);
  letter-spacing: 0.02em;
  color: var(--teal);
  text-align: center;
}

.nav-cta {
  text-decoration: none;
  color: var(--teal);
  border: 1px solid color-mix(in srgb, var(--teal), white 35%);
  border-radius: 999px;
  padding: 0.48rem 0.86rem;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.menu-panel {
  margin-top: 0.5rem;
  padding: 1.15rem;
  display: grid;
  gap: 0.4rem;
}

.menu-panel a {
  text-decoration: none;
  font-family: 'Fraunces', Georgia, serif;
  color: var(--teal);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: clamp(1.5rem, 3.2vw, 3.6rem);
  line-height: 1;
}

.layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.hero-left {
  padding: 2.6rem 1.8rem 1.3rem;
}

.eyebrow {
  margin: 0;
  color: var(--teal);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  font-size: 0.74rem;
}

h1,
h2,
h3 {
  font-family: 'Fraunces', Georgia, serif;
  margin: 0;
}

h1 {
  margin-top: 3rem;
  font-size: clamp(2rem, 5vw, 4.8rem);
  line-height: 0.95;
  color: var(--berry-dark);
}

.hero-sub {
  display: inline-block;
  margin-top: 0.8rem;
  font-size: clamp(0.95rem, 1.9vw, 2rem);
  color: var(--teal);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.72rem;
  margin-top: 6rem;
}

.btn {
  text-decoration: none;
  border-radius: 12px;
  padding: 0.76rem 1.06rem;
  font-weight: 700;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--berry);
  color: var(--cream);
}

.btn-ghost {
  border-color: color-mix(in srgb, var(--teal), black 5%);
  color: color-mix(in srgb, var(--teal), black 26%);
}

.ticker {
  margin-top: 5rem;
  display: flex;
  overflow: auto hidden;
  gap: 2.2rem;
  padding: 0.7rem 0.3rem;
  white-space: nowrap;
  border-top: 1px dashed color-mix(in srgb, var(--teal), white 30%);
  border-bottom: 1px dashed color-mix(in srgb, var(--teal), white 30%);
}

.ticker span {
  color: var(--teal);
  text-transform: uppercase;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.card {
  padding: 1.4rem;
}

.visual-card {
  background:
    radial-gradient(circle at 95% 8%, color-mix(in srgb, var(--berry), white 60%) 0, transparent 32%),
    radial-gradient(circle at 15% 80%, color-mix(in srgb, var(--teal), white 70%) 0, transparent 40%),
    color-mix(in srgb, var(--cream), white 16%);
}

.badge {
  width: fit-content;
  background: color-mix(in srgb, var(--teal), white 80%);
  color: color-mix(in srgb, var(--teal), black 40%);
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  text-transform: uppercase;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.visual-card h2,
.contact-card h2,
.reserve h2,
.story-copy h2 {
  font-size: clamp(1.6rem, 3vw, 2.45rem);
  color: var(--berry-dark);
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
}

.visual-card p,
.contact-card p,
.story-copy p,
.reserve p {
  margin: 0;
  line-height: 1.5;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
}

.price-row span {
  font-size: 1.9rem;
  font-family: 'Fraunces', Georgia, serif;
  color: var(--berry);
}

.price-row button {
  border: none;
  border-radius: 999px;
  padding: 0.58rem 0.92rem;
  background: var(--berry-dark);
  color: var(--cream);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
}

.contact-card {
  display: grid;
  align-content: center;
  justify-items: start;
  gap: 0.5rem;
}

.contact-card .hours {
  color: var(--teal);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.contact-card a {
  color: var(--berry);
  text-decoration: none;
  font-weight: 700;
}

.menu {
  padding: 1.2rem;
}

.menu-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0.4rem 0.4rem 0.9rem;
}

.menu-head p {
  margin: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--teal);
  font-weight: 700;
}

.menu-head h2 {
  font-size: clamp(2rem, 7vw, 5.8rem);
  color: var(--berry-dark);
  line-height: 0.9;
  text-transform: uppercase;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
}

.menu-section {
  border: 1px solid color-mix(in srgb, var(--teal), white 48%);
  border-radius: 12px;
  padding: 0.9rem;
  background: color-mix(in srgb, var(--cream), white 22%);
}

.menu-section h3 {
  font-size: 1.28rem;
  color: var(--berry);
  margin-bottom: 0.72rem;
}

.menu-section ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.8rem;
}

.menu-line {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  border-bottom: 1px dotted color-mix(in srgb, var(--berry), white 45%);
  padding-bottom: 0.25rem;
}

.menu-line strong {
  font-size: 0.9rem;
  color: var(--berry-dark);
}

.menu-line span {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--teal);
}

.menu-section small {
  display: block;
  margin-top: 0.3rem;
  color: color-mix(in srgb, var(--ink), white 22%);
  font-size: 0.76rem;
  line-height: 1.3;
}

.story-copy {
  display: grid;
  gap: 0.85rem;
}

.reserve {
  display: grid;
  gap: 0.72rem;
  align-content: center;
}

.reserve-actions {
  margin-top: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.footer {
  margin-top: 1rem;
  padding: 0.95rem 1.05rem;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.72rem;
  color: var(--berry-dark);
  font-weight: 700;
}

.right-column {
  position: sticky;
  top: 0.85rem;
  height: calc(100vh - 1.7rem);
  padding: 0.5rem;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 0.7rem;
}

.right-image {
  border-radius: 12px;
  min-height: 0;
  background-image:
    linear-gradient(155deg, rgba(46, 200, 200, 0.15), rgba(126, 34, 72, 0.22)),
    url('/fleurs-house.jpg');
  background-size: cover;
  background-position: center;
}

.right-info {
  border: 1px solid color-mix(in srgb, var(--teal), white 35%);
  border-radius: 10px;
  padding: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--teal);
  line-height: 1.45;
}

.right-info p {
  margin: 0;
}

@media (max-width: 1120px) {
  .page {
    grid-template-columns: 1fr;
  }

  .right-column {
    display: none;
  }

  .split,
  .menu-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .ticker,
  h1 {
    margin-top: 1.4rem;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 0.6rem;
  }

  .menu-head {
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-cta {
    padding: 0.43rem 0.65rem;
    font-size: 0.69rem;
  }

  .brand-mini {
    font-size: 1rem;
  }
}
</style>
