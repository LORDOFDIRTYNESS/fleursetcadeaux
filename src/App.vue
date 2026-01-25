<template>
  <div class="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 text-slate-900">
    <header class="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
      <div class="text-lg font-semibold tracking-wide">Fleurs & Cadeaux</div>
      <nav class="hidden items-center gap-6 text-sm font-medium md:flex">
        <a class="transition hover:text-rose-600" href="#">Collections</a>
        <a class="transition hover:text-rose-600" href="#">Occasions</a>
        <a class="transition hover:text-rose-600" href="#">Gifting</a>
      </nav>
      <button
        class="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-500"
        type="button"
      >
        Order now
      </button>
    </header>

    <main class="mx-auto grid max-w-5xl items-center gap-10 px-6 pb-20 pt-8 md:grid-cols-2">
      <section class="space-y-6">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
          Parisian-inspired florist
        </p>
        <h1 class="text-4xl font-semibold leading-tight sm:text-5xl">
          Artful bouquets and thoughtful gifts, delivered with care.
        </h1>
        <p class="text-base text-slate-600 sm:text-lg">
          Curate moments with seasonal blooms, handcrafted pairings, and curated notes for every
          celebration.
        </p>
        <div class="flex flex-wrap gap-3">
          <button
            class="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            type="button"
          >
            Build a bouquet
          </button>
          <button
            class="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-600"
            type="button"
          >
            Send a gift
          </button>
        </div>
        <div class="flex items-center gap-6 text-sm text-slate-500">
          <div>
            <div class="text-lg font-semibold text-slate-900">150+</div>
            Weekly arrangements
          </div>
          <div>
            <div class="text-lg font-semibold text-slate-900">24h</div>
            Express delivery
          </div>
          <div>
            <div class="text-lg font-semibold text-slate-900">4.9</div>
            Client rating
          </div>
        </div>
      </section>

      <section class="relative">
        <div class="absolute -left-8 top-12 h-40 w-40 rounded-full bg-rose-200 blur-3xl"></div>
        <div class="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-amber-200 blur-3xl"></div>
        <div class="relative rounded-3xl border border-rose-100 bg-white p-6 shadow-lg">
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-rose-500">
              <span>Featured</span>
              <span>Limited</span>
            </div>
            <div class="space-y-2">
              <h2 class="text-2xl font-semibold">Lavender Dawn</h2>
              <p class="text-sm text-slate-600">
                Lilac roses, ranunculus, and a touch of citrus zest with a handwritten note.
              </p>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="font-semibold text-slate-900">$78</span>
              <span class="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
                Ships today
              </span>
            </div>
            <button
              class="w-full rounded-2xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
              type="button"
            >
              Add to cart
            </button>
          </div>
          <div class="mt-6 grid grid-cols-3 gap-3 text-xs text-slate-500">
            <div class="rounded-2xl bg-slate-50 px-3 py-4 text-center">
              <div class="text-sm font-semibold text-slate-900">9</div>
              Stems
            </div>
            <div class="rounded-2xl bg-slate-50 px-3 py-4 text-center">
              <div class="text-sm font-semibold text-slate-900">3</div>
              Notes
            </div>
            <div class="rounded-2xl bg-slate-50 px-3 py-4 text-center">
              <div class="text-sm font-semibold text-slate-900">12</div>
              Gifts
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
