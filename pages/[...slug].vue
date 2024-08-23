<script setup lang="ts">
import type { Button } from '#ui/types'

const { data: page } = await useAsyncData('news', () => queryContent('/news').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const notFoundLinks: [Button] = [{
  to: '/',
  label: 'Go back to home',
  icon: 'i-heroicons-arrow-left-20-solid',
  size: 'xl'
}]
</script>

<template>
  <ULandingSection>
    <UPage>
      <UPageBody prose>
        <ContentDoc>
          <template #v-slot="{ data }">
            <ContentRenderer :data="data" />
          </template>
          <template #not-found>
            <ULandingHero
              title="Page not found"
              :links="notFoundLinks"
            />
          </template>
        </ContentDoc>
      </UPageBody>
    </UPage>
  </ULandingSection>
</template>
