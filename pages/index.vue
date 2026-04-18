<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import BackgroundIcons from '~/components/BackgroundIcons.vue'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const { data: hello } = await useAsyncData('_hello-hummingbird', () => queryContent('/_hello-hummingbird').findOne())
const { data: basicRoute } = await useAsyncData('_basic-route', () => queryContent('/_basic-route').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const chartLabels = ['NodeJS', 'Spring Boot', 'Hummingbird']
const chartColors = {
  bg:     ['rgba(34,197,94,0.5)', 'rgba(59,130,246,0.5)', 'rgba(251,146,60,0.85)'],
  border: ['rgba(34,197,94,0.8)', 'rgba(59,130,246,0.8)', 'rgba(251,146,60,1)'],
}

const performanceChartData = ref({
  labels: chartLabels,
  datasets: [{
    label: 'Requests per second',
    data: [64700, 179141, 179896],
    backgroundColor: chartColors.bg,
    borderColor: chartColors.border,
    borderWidth: 1,
    borderRadius: 6,
  }]
})

const memoryChartData = ref({
  labels: chartLabels,
  datasets: [{
    label: 'Memory (MB)',
    data: [106.4, 636.5, 20.0],
    backgroundColor: chartColors.bg,
    borderColor: chartColors.border,
    borderWidth: 1,
    borderRadius: 6,
  }]
})

function makeLabelsPlugin(id: string, fmt: (v: number) => string) {
  return {
    id,
    afterDatasetsDraw(chart: any) {
      const { ctx, data } = chart
      chart.getDatasetMeta(0).data.forEach((bar: any, index: number) => {
        const value = data.datasets[0].data[index] as number
        const text = fmt(value)
        ctx.save()
        ctx.font = 'bold 12px DM Sans, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        const w = ctx.measureText(text).width + 10
        const h = 18
        const x = bar.x - w / 2
        const y = bar.y - h - 4
        ctx.fillStyle = 'rgba(0, 0, 0, 0.55)'
        ctx.fillRect(x, y, w, h)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
        ctx.fillText(text, bar.x, y + h / 2)
        ctx.restore()
      })
    }
  }
}

const rpsLabelsPlugin  = makeLabelsPlugin('rpsLabels',  v => v >= 1000 ? `${Math.round(v / 1000)}k` : String(v))
const memLabelsPlugin  = makeLabelsPlugin('memLabels',  v => `${v}MB`)

const baseChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { top: 28 } },
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: { display: false, beginAtZero: true },
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        font: { size: 13, weight: 'bold' },
        color: 'rgba(255, 255, 255, 0.7)'
      }
    }
  }
}

const chartOptions = ref({
  ...baseChartOptions,
  scales: {
    ...baseChartOptions.scales,
    y: { display: false, type: 'logarithmic' },
  },
  plugins: {
    ...baseChartOptions.plugins,
    tooltip: { callbacks: { label: (ctx: any) => ` ${ctx.parsed.y.toLocaleString()} req/s` } }
  }
})

const memoryChartOptions = ref({
  ...baseChartOptions,
  plugins: {
    ...baseChartOptions.plugins,
    tooltip: { callbacks: { label: (ctx: any) => ` ${ctx.parsed.y} MB` } }
  }
})
</script>

<template>
  <div class="display-flex">
    <BackgroundIcons id="icons" />
    <ULandingSection
      class="md:py-0 sm:py-0"
    >
      <ULandingHero
        :description="page.hero.description"
        :links="page.hero.links"
      >
        <template #title>
          <div class="logo-container">
            <span class="logo-overlay">Hummingbird</span>
          </div>
        </template>
        <template #bottom>
          <div class="mt-16">
            <ULandingCard class="line-numbered-code">
              <ContentRenderer :value="hello">
                <ContentRendererMarkdown :value="hello" />
              </ContentRenderer>
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
      <ULandingHero
        :title="page.ecosystem.title"
        :description="page.ecosystem.description"
        :links="page.ecosystem.links"
        align="left"
      >
        <ULandingCard class="line-numbered-code">
          <ContentRenderer :value="basicRoute">
            <ContentRendererMarkdown :value="basicRoute" />
          </ContentRenderer>
        </ULandingCard>
      </ULandingHero>
    </ULandingSection>

    <ULandingSection
      class="md:py-0 sm:py-0 overflow-x-hidden"
    >
      <ULandingHero
        :title="page.performance.title"
        :description="page.performance.description"
        :links="page.performance.links"
        align="right"
      >
        <div class="charts-grid">
          <div>
            <p class="chart-label">Requests / sec ↑</p>
            <div class="hero-chart">
              <Bar :data="performanceChartData" :options="chartOptions" :plugins="[rpsLabelsPlugin]" />
            </div>
          </div>
          <div>
            <p class="chart-label">Memory usage ↓</p>
            <div class="hero-chart">
              <Bar :data="memoryChartData" :options="memoryChartOptions" :plugins="[memLabelsPlugin]" />
            </div>
          </div>
        </div>
      </ULandingHero>
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
#icons {
  position: static;
  width: 100%;
  height: 100%;
  z-index: -1;
}

@media (max-width: 500px) {
  .logo-container {
    font-size: 32pt;
  }

  .line-numbered-code {
    font-size: 9.5pt;
  }
}

.logo-overlay::before {
  width: 2em;
  height: 2em;
  margin-left: -1.7em;
  margin-top: -0.5em;
  position: absolute;
  content: '';
  background-image: url("/logo@400px.png");
  background-size: 2em;
  background-repeat: no-repeat;
}

.logo-overlay {
  margin-left: 1.5em;
}
.line-numbered-code {
  max-width: calc(min(90vw, 40em, 100%));
  overflow: hidden;
  white-space: pre-wrap;
  margin: 0 auto;
}

.line-numbered-code >>> pre {
  line-height: 1.625;
  counter-reset: lines;
}

.charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: min(100%, 80vw);
  overflow: hidden;
}

@media (max-width: 640px) {
  .charts-grid {
    grid-template-columns: 1fr;
    width: 100%;
  }
}

.chart-label {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.5;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-chart {
  height: 220px;
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
