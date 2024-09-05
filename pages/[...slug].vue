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
  <UContainer>
    <UPage>
      <UPageBody prose>
        <div class="page-content">
          <ContentDoc>
            <template #v-slot="{ data }">
              <ContentRenderer
                :data="data"
              />
            </template>
            <template #not-found>
              <ULandingHero
                title="Page not found"
                :links="notFoundLinks"
              />
            </template>
          </ContentDoc>
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<style scoped>
.page-content {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
