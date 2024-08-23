<script setup lang="ts">
const links = computed(() => [{
  label: 'Features',
  to: '/',
  icon: 'i-heroicons-cube-transparent'
}, {
//   label: 'News',
//   to: '/news',
//   icon: 'i-heroicons-light-bulb'
// }, {
  label: 'Ecosystem',
  to: '/ecosystem',
  icon: 'i-heroicons-rectangle-group'
}])
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img
        src="/logo.png"
        class="w-8 h-8 mx-auto"
      >
      Hummingbird
    </template>

    <template #right>
      <UButton
        label="Docs"
        color="white"
        to="https://docs.hummingbird.codes/"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
    </template>
  </UHeader>
</template>
