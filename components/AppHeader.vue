<script setup lang="ts">
const links = computed(() => [{
  label: 'Features',
  to: '/',
  icon: 'i-heroicons-cube-transparent'
}, {
  label: 'Get Started',
  to: '/get-started',
  icon: 'i-heroicons-play'
}, {
  label: 'Ecosystem',
  to: '/ecosystem',
  icon: 'i-heroicons-rectangle-group'
}])
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img
        src="/assets/logo.png"
        class="w-8 h-8 mx-auto"
      >
      Hummingbird 2
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

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="Sign in"
        color="white"
        block
        class="mb-3"
      />
      <UButton
        label="Get started"
        block
      />
    </template>
  </UHeader>
</template>
