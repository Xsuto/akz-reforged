<script setup lang="ts">
import type Course from '@/interfaces/Course'
interface Props {
  course: Course
}
const { course } = defineProps<Props>()
</script>

<template>
  <p>Name: {{ course.name }}</p>
</template>
