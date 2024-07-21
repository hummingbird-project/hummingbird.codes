<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());
const { data: helloHumingbird } = await useAsyncData('hello-hummingbird', () => queryContent('/hello-hummingbird').findOne());

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
      <template #bottom>
        <ULandingCard class="line-numbered-code">
          <ContentDoc path="/hello-hummingbird" />
        </ULandingCard>
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
            target="_blanak"
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

    <ULandingCard class="line-numbered-code">
      <ContentDoc path="/basic-route" />
    </ULandingCard>

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

.line-numbered-code {
  max-width: calc(min(40em, 90%));
  margin: 32pt auto;
}

.line-numbered-code >>> pre {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: 1rem;
  line-height: 1.625;
  counter-reset: lines;
}

.line-numbered-code >>> pre code {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.line-numbered-code >>> pre code .line {
  display: inline-table;
  min-height: 1rem;
}

@media (min-width: 500px) {
  .line-numbered-code >>> pre code .line::before {
    counter-increment: lines;
    content: counter(lines);
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: left;
    color: rgba(115, 138, 148, 0.4);
  }
}

.line-numbered-code >>> pre code .highlight {
  background-color: #363b46;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid red;
}
</style>
