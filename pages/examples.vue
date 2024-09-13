<script setup lang="ts">
const { data: examples } = await useAsyncData('examples', () => queryContent('/examples').findOne())

useSeoMeta({
  title: examples.value.title,
  ogTitle: examples.value.title,
  description: examples.value.description,
  ogDescription: examples.value.description
})
</script>

<template>
  <ULandingSection>
    <div
      v-for="(category, index) in examples.categories"
      :key="index"
    >
      <ULandingHero
        :title="category.title"
        :description="category.description"
      />

      <ULandingGrid>
        <ULandingCard
          v-for="(project, index) in category.projects"
          :key="index"
          :class="'col-span-3 row-span-2'"
          :icon="project.icon"
          :title="project.title"
          :description="project.description"
          :to="project.to"
          target="_blank"
        />
      </ULandingGrid>
    </div>
  </ULandingSection>
</template>
