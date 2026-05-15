<script setup lang="ts">
const { data: page } = await useAsyncData('features', () => queryContent('/features').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingSection>
      <ULandingHero
        :title="page.hero.title"
        :description="page.hero.description"
      />
    </ULandingSection>

    <ULandingSection
      :headline="page.concurrency.headline"
      :title="page.concurrency.title"
      :description="page.concurrency.description"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.concurrency.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :headline="page.performance.headline"
      :title="page.performance.title"
      :description="page.performance.description"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.performance.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :headline="page.dx.headline"
      :title="page.dx.title"
      :description="page.dx.description"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.dx.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
