<script setup lang="ts">
const { data: page } = await useAsyncData('learn', () => queryContent('/learn').findOne())

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
      :title="page.swiftonserver.title"
      :description="page.swiftonserver.description"
    >
      <ULandingGrid>
        <NuxtLink
          v-for="(item, index) in page.swiftonserver.items"
          :key="index"
          :to="item.to"
          :class="item.class || 'col-span-4'"
          target="_blank"
          class="group rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 shadow overflow-hidden flex flex-col transition-all hover:ring-primary-500 hover:shadow-md"
        >
          <div class="relative pb-[56.25%] overflow-hidden bg-gray-100 dark:bg-gray-800">
            <NuxtImg
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <UIcon
              v-else
              name="i-heroicons-document-text"
              class="absolute inset-0 m-auto w-10 h-10 text-gray-400"
            />
          </div>
          <div class="p-4 flex flex-col gap-1 flex-1">
            <p class="font-bold text-gray-900 dark:text-white text-sm leading-snug">{{ item.title }}</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">{{ item.description }}</p>
          </div>
        </NuxtLink>
      </ULandingGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.whynotestflight.title"
      :description="page.whynotestflight.description"
    >
      <ULandingGrid>
        <NuxtLink
          v-for="(item, index) in page.whynotestflight.items"
          :key="index"
          :to="item.to"
          :class="item.class || 'col-span-4'"
          target="_blank"
          class="group rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 shadow overflow-hidden flex flex-col transition-all hover:ring-primary-500 hover:shadow-md"
        >
          <div class="relative pb-[56.25%] overflow-hidden bg-gray-100 dark:bg-gray-800">
            <NuxtImg
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <UIcon
              v-else
              name="i-heroicons-document-text"
              class="absolute inset-0 m-auto w-10 h-10 text-gray-400"
            />
          </div>
          <div class="p-4 flex flex-col gap-1 flex-1">
            <p class="font-bold text-gray-900 dark:text-white text-sm leading-snug">{{ item.title }}</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">{{ item.description }}</p>
          </div>
        </NuxtLink>
      </ULandingGrid>
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
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            :to="item.to"
            target="_blank"
          />
        </div>
      </ULandingGrid>
    </ULandingSection>
  </div>
</template>
