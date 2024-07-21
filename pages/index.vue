<script setup lang="ts">
import { Bar } from 'vue-chartjs'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const performanceChartData = ref({
  labels: ['Laravel', 'Rails', 'Vapor', 'Hummingbird', 'Go', 'HB Core'],
  datasets: [
    {
      label: 'Request per second',
      data: [12990, 93140, 115300, 643202, 681653, 708562],
      backgroundColor: [
        'rgba(249, 50, 44, 0.4)',
        'rgba(249, 50, 44, 0.4)',
        'rgba(223, 62, 251, 0.4)',
        'rgba(255, 165, 0, 0.8)',
        'rgba(0, 128, 128, 0.4)',
        'rgba(255, 165, 0, 0.8)'
      ],
      borderRadius: 4
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      display: false
    },
    x: {
      grid: {
        display: false
      },
      // Don't show the x-axis labels
      ticks: {
        font: {
          size: 9,
          weight: 'bold'
        }
      }
    }
  }
})
</script>

<template>
  <div>
    <ULandingSection
      class="md:py-0 sm:py-0"
    >
      <ULandingHero
        :description="page.hero.description"
        :links="page.hero.links"
      >
        <template #title>
          <span class="logo-overlay">Hummingbird 2</span>
        </template>
        <template #bottom>
          <div class="mt-16">
            <ULandingCard class="line-numbered-code">
              <ContentDoc path="/hello-hummingbird" />
            </ULandingCard>
          </div>
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
    </ULandingSection>

    <ULandingSection
      class="md:py-0 sm:py-0"
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

    <ULandingSection
      class="md:py-0 sm:py-0"
    >
      <UPageHero
        :title="page.ecosystem.title"
        :description="page.ecosystem.description"
        :links="page.ecosystem.links"
        align="left"
      >
        <ULandingCard class="line-numbered-code">
          <ContentDoc path="/basic-route" />
        </ULandingCard>
      </UPageHero>
    </ULandingSection>

    <ULandingSection
      class="md:py-0 sm:py-0"
    >
      <UPageHero
        :title="page.performance.title"
        :description="page.performance.description"
        :links="page.performance.links"
        align="right"
      >
        <div class="relative sm-mx-auto hero-chart">
          <Bar
            :data="performanceChartData"
            :options="chartOptions"
          />
        </div>
      </UPageHero>
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

.line-numbered-code {
  max-width: calc(min(90vw, 40em, 100%));
  overflow: hidden;
  margin: 0 auto;
}

.line-numbered-code >>> pre {
  line-height: 1.625;
  counter-reset: lines;
}

.hero-chart {
  max-width: calc(min(100%, 80vw));
  margin: inherit auto;
}

.line-numbered-code >>> pre code {
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
