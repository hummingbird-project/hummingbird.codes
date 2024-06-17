<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Features',
  to: '/',
  icon: 'i-heroicons-cube-transparent'
}, {
  label: 'Ecosystem',
  to: '/ecosystem',
  icon: 'i-heroicons-rectangle-group'
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ])
})
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
