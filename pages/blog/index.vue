<script setup>
  const { data: blogNav } = await useAsyncData('blog-navigation', () => {
    return fetchContentNavigation()
  })
  useHead({
    title: 'blog',
  })
</script>

<template>
  <div>
    <div class="container mx-auto px-4 py-12">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-12">
        <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
          <h2 class="font-medium mb-2 text-primary-600 uppercase">
            Get Involved
          </h2>
          <h3 class="capitalize font-bold mb-4 text-4xl text-gray-800">
            Small gesture for a big impact
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div class="min-h-screen">
      <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <template v-for="(b, i) in blogNav" :key="`blogNavItem-${b._path}-${i}`">
            <div class="px-7 py-5 rounded-lg border-2">
              <h2 class="text-lg font-semibold rainbow-text">
                {{ b.title }}
              </h2>
              <ul v-if="b.children" class="list-disc list-inside mt-4 pl-2 space-y-3">
                <template v-for="(child, k) in b.children" :key="`childNav-${child._path}-${k}-${i}`">
                  <li class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all">
                    <NuxtLink :to="`/blog${child._path}`">
                      {{ child.title }}
                    </NuxtLink>
                  </li>
                </template>
              </ul>
              <ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
                <li class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all">
                  <NuxtLink :to="`/blog${b._path}`"> Get Started </NuxtLink>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>
