<script setup lang="ts">
const { data: page } = await useAsyncData('learn', () => queryContent('/learn').findOne())

const favicon = (url: string) => `https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`

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
    />

    <ULandingSection
      :title="page.blogs.title"
      :description="page.blogs.description"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.blogs.items"
          :key="index"
          :title="item.title"
          :description="item.description"
          :to="item.to"
          target="_blank"
        >
          <template #icon>
            <img
              :src="favicon(item.to)"
              :alt="item.title"
              class="w-8 h-8 rounded"
            />
          </template>
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.talks.title"
      :description="page.talks.description"
    >
      <ULandingGrid>
        <div
          v-for="(item, index) in page.talks.items"
          :key="index"
          :class="item.class || 'col-span-3 row-span-2'"
        >
          <div
            v-if="item.embedUrl"
            class="w-full rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 shadow"
          >
            <div class="relative pb-[56.25%]">
              <iframe
                :src="item.embedUrl"
                :title="item.title"
                class="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <ULandingCard
            v-else
            class="h-full"
            :title="item.title"
            :description="item.description"
            :to="item.to"
            target="_blank"
          >
            <template #icon>
              <img
                :src="favicon(item.to)"
                :alt="item.title"
                class="w-8 h-8 rounded"
              />
            </template>
          </ULandingCard>
        </div>
      </ULandingGrid>
    </ULandingSection>
  </div>
</template>
