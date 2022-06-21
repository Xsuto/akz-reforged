<script setup lang="ts">
const { data } = useFetch('/api/data')
</script>

<template>
  <div class="top-2 flex flex-col gap-2">
    <Course v-for="(course, i) in data" :key="i" :course="course" />
  </div>
</template>
