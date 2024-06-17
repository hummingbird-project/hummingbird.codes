<script setup lang="ts">
const { data: page } = await useAsyncData('get-started', () => queryContent('/get-started').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
    />

    <ULandingHero
      :title="page.swift.title"
      :description="page.swift.description"
      :links="page.swift.links"
    />

    <ULandingHero
      :title="page.editor.title"
      :description="page.editor.description"
      :links="page.editor.links"
    />

    <ULandingHero
      :title="page.template.title"
      :description="page.template.description"
      :links="page.template.links"
    />

    <ULandingHero
      :title="page.run.title"
      :description="page.run.description"
      :links="page.run.links"
    />

    <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
      <ULandingCTA
        v-bind="page.cta"
        :card="false"
      />
    </ULandingSection>
  </div>
</template>
