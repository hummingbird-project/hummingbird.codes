<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

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
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <template #title>
        <span class="logo-overlay">Hummingbird 2</span>
      </template>
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
          </NuxtLink>
          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>
    </ULandingHero>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA
        v-bind="page.cta"
        :card="false"
      />
    </ULandingSection>
  </div>
</template>

<style scoped>
.logo-overlay::before {
  width: 2em;
  height: 2em;
  margin-left: -1.5em;
  margin-top: -0.5em;
  content: '';
  overlay: auto;
  background-image: url("/logo.png");
  background-size: 2em;
  background-origin: content-box;
  background-repeat: no-repeat;
}
</style>
