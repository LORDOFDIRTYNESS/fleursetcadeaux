<script setup>
import stickerUrl from '../../assets/concept1/sticker.png'
</script>

<template>
  <div class="relative inline-block">
    <img :src="stickerUrl" alt="" class="relative block w-[147px] rotate-[25.99deg]" />
    <img :src="stickerUrl" alt="" class="absolute top-[18px] left-[18px] w-[147px] rotate-[25.99deg]" />
  </div>
</template>
