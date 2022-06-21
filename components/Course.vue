<script setup lang="ts">
import type Course from '@/interfaces/Course'
interface Props {
  course: Course
}
const { course } = defineProps<Props>()
</script>

<template>
  <div class="flex gap-2">
    <p>Course ID: {{ course.courseId }}</p>
    <p>Name: {{ course.name }}</p>
    <p>Timeframe {{ course.timeframe }}</p>
  </div>
</template>
