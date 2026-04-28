<script setup>
import rectangle14Url from '../../assets/concept1/rectangle14.webp'
import de14Url from '../../assets/concept1/de14.webp'
import sashimiUrl from '../../assets/concept1/sashimi.webp'
</script>

<template>
  <div class="absolute left-[-3px] top-[1259px] h-[332px] w-[407px]">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        :src="rectangle14Url"
        alt=""
        class="absolute left-[-114.16%] top-[-124.04%] h-[563.96%] w-[328.6%] max-w-none object-cover"
      />
    </div>
  </div>

  <button
    type="button"
    class="absolute left-[37px] top-[1293px] flex w-[327px] items-center justify-center rounded-[12px] bg-[#260000] px-[16px] py-[12px]"
  >
    <span class="font-inter text-[16px] font-semibold tracking-[-0.08px] text-[#fffdf7]">RÉSERVER UNE TABLE</span>
  </button>

  <div class="absolute left-[-58px] top-[1242.0348px] flex h-[475.535px] w-[462.938px] items-center justify-center">
    <div class="rotate-[-30.52deg]">
      <div class="relative h-[360.498px] w-[324.876px]">
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <img :src="sashimiUrl" alt="" class="absolute left-0 top-0 h-[135.18%] w-full max-w-none object-cover" />
        </div>
      </div>
    </div>
  </div>

  <div class="absolute left-[-3px] top-[1575px] h-[510px] w-[408px]">
    <img :src="de14Url" alt="" class="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover" />
  </div>

  <p
    class="absolute left-[18px] top-[1597px] h-[108px] w-[316px] font-display text-[64px] leading-[0.81] tracking-[-2.56px] text-white"
  >
    NOS MENUS
  </p>

  <button type="button" class="absolute left-[18px] top-[1711px] h-[32px] w-[90px] bg-[#fffdf7]">
    <span
      class="block pt-[8px] text-center font-inter text-[14px] font-medium tracking-[-0.56px] text-[#260000] underline"
    >
      À manger
    </span>
  </button>

  <button type="button" class="absolute left-[133px] top-[1711px] h-[32px] w-[90px] bg-[#fffdf7]">
    <span
      class="block pt-[8px] text-center font-inter text-[14px] font-medium tracking-[-0.56px] text-[#260000] underline"
    >
      À boire
    </span>
  </button>

  <p
    class="absolute left-[193px] top-[2066px] h-[14px] w-[202px] text-right font-inter text-[11px] font-medium italic tracking-[-0.44px] text-[#fffdf7]"
  >
    *Nos menus peuvent varier sans préavis.
  </p>
</template>

