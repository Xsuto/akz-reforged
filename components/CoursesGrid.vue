<script setup lang="ts">
const { data } = useFetch('/api/data')
</script>

<template>
  <Course v-for="(course, i) in data" :key="i" :course="course" />
</template>
