<template>
  <div class="page">
    <h1 class="header">Doctrines of Grace Conference on 10/07/2023</h1>
    <ul>
    <h2 v-for="(item,index) in conferenceItems">
    {{index + 1}}. {{ item }}
      </h2>
    </ul>
  </div>
</template>

<script setup>
const conferenceItems = [
  'Coffee/Donut Fellowship Saturday Morning {8:30-9:30}',
  '(Howard) MC The Conference - Opening Prayer - {9:45}',
  '(Issac) Lead Congregation in 2 Hymns',
  '(Mike) Radical Depravity – {10:00-10:45}',
  '(Bruce) Sovereign Election – {11:00-11:45}',
  '(Pizza Lunch/Aaron) – {11:45-12:45}',
  '(Issac) Lead Congregation in 2 Hymns',
  '(Andrew) Definite Atonement – {1:00-1:45}',
  '(Paul) Efficacious Grace – {2:00-2:45}',
  '(Dean) Persevering Grace – {3:00-3:45}',
  '(Howard) Question and Answer Session – {4:00-4:30}',
  '(Howard) MC The Conference - Closing Prayer'
]
</script>
<style scoped>

  
.header {
  text-decoration: underline;
  margin-bottom: 20px;
}
</style>
