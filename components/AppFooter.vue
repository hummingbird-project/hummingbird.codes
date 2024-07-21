<script setup lang="ts">
const links = [{
  label: 'Resources',
  children: [{
    label: 'Docs',
    to: 'https://docs.hummingbird.codes/'
  }, {
    label: 'Examples',
    to: 'https://github.com/hummingbird-project/hummingbird-examples'
  }, {
    label: 'Discord',
    to: 'https://discord.gg/7ME3nZ7mP2'
  }]
}, {
  label: 'Contributing',
  children: [{
    label: 'GitHub',
    to: 'https://github.com/hummingbird-project/hummingbird'
  }]
}]
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links" />
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>
