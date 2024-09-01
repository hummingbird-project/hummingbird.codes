<script setup lang="ts">
const { data: packages } = await useAsyncData('packages', () => queryContent('/packages').findOne())

useSeoMeta({
  title: packages.value.title,
  ogTitle: packages.value.title,
  description: packages.value.description,
  ogDescription: packages.value.description
})
</script>

<template>
  <div>
    <ULandingHero
      :title="packages.hero.title"
      :description="packages.hero.description"
      :links="packages.hero.links"
    />

    <ULandingSection
      :title="packages.extensions.title"
      :description="packages.extensions.description"
    >
      <ULandingGrid>
        <ULandingCard
          v-for="(item, index) in packages.extensions.items"
          :key="index"
          :class="item.class || 'col-span-3 row-span-2'"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :to="item.to"
          target="_blank"
        />
      </ULandingGrid>
    </ULandingSection>

    <ULandingSection
      :title="packages.databases.title"
      :description="packages.databases.description"
    >
      <ULandingGrid>
        <ULandingCard
          v-for="(item, index) in packages.databases.items"
          :key="index"
          :class="item.class || 'col-span-3 row-span-2'"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :to="item.to"
          target="_blank"
        />
      </ULandingGrid>
    </ULandingSection>

    <ULandingSection
      :title="packages.observability.title"
      :description="packages.observability.description"
    >
      <ULandingGrid>
        <ULandingCard
          v-for="(item, index) in packages.observability.items"
          :key="index"
          :class="item.class || 'col-span-3 row-span-2'"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :to="item.to"
          target="_blank"
        />
      </ULandingGrid>
    </ULandingSection>

    <ULandingSection
      :title="packages.misc.title"
      :description="packages.misc.description"
    >
      <ULandingGrid>
        <ULandingCard
          v-for="(item, index) in packages.misc.items"
          :key="index"
          :class="item.class || 'col-span-3 row-span-2'"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :to="item.to"
          target="_blank"
        />
      </ULandingGrid>
    </ULandingSection>
  </div>
</template>
