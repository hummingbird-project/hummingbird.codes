<script setup lang="ts">
const { data: page } = await useAsyncData('news', () => queryContent('/news').findOne())
const { data: authors } = await useAsyncData('authors', () => queryContent('/authors').findOne())

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
    >
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

    <ULandingSection>
      <UBlogList orientation="horizontal">
        <UBlogPost
          v-for="(post, index) in page.posts"
          :key="index"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="post.date"
          :badge="post.badge"
          :authors="(post.authors as Array<string>).map(author => authors.authors[author])"
          :to="post.to"
          orientation="horizontal"
          class="hb-blog-post bg-white dark:bg-gray-800"
        />
      </UBlogList>
    </ULandingSection>
  </div>
</template>

<style scoped>
.hb-blog-post {
  align-content: start;
  border-width: 1px;
  border-radius: 1em;
  padding: 1.5em;
}
</style>
