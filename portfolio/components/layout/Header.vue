<template>
    <UHeader>
      <template #right>
        <UColorModeButton />
        <UButton to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
      </template>

      <template #center>
          <LayoutHeaderLinks />
      </template>
    </UHeader>
</template>

<script setup lang="ts">
const links = [{
  label: 'Docs',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: '/releases'
}]

</script>