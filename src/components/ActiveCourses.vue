<script setup>
import { defineProps, watch, watchEffect } from 'vue'
const props = defineProps(['info'])
const infos = props.info
</script>

<template>
  <section>
    <div
      v-for="info in infos"
      class="courses-container"
      :style="`background: var(${info.bg}); color: var(${info.color});`"
      :key="info.status + 'exa'"
    >
      <main class="flex flex-y-center flex-x-between">
        
        <section class="flex flex-y-center">
          <div class="image">
            <img
              class="no-select no-drag"
              width="100"
              height="100"
              :src="info.image"
              alt="Courses Item"
              :srcset="info.image"
            />
          </div>

          <div class="info">
            <h2>{{ info.title }}</h2>
            <span>Follow these easy and simples steps</span>
          </div>
        </section>

        <div class="status flex flex-center">
          <div class="total flex flex-center"><h2>{{ info.steps }}</h2></div>
          <span class="info-status">{{ info.status }}</span>
        </div>
      </main>

      <section class="progress-container flex flex-y-center flex-x-between">
        <div class="progress">
          <div class="progress-bg" :style="`width: ${(info.progress * 100) / info.steps}%;`"></div>
        </div>
        <div class="flex flex-center no-select cursor-point">
          <h3>Enroll &nbsp; ⇀</h3>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped>
.courses-container {
  margin: 20px 0;
  padding: 20px;
  border-radius: 25px;
}

.info {
  margin-left: 20px;
  margin-right: 20px;
}

.image {
  width: 90px;
  height: 90px;
  min-width: 90px;
  min-height: 90px;
}

.status {
  flex-direction: column;
}

.info-status {
  margin-top: 10px;
}

.total {
  width: 45px;
  height: 45px;
  padding: 2px;
  border-radius: 12px;
  color: var(--dark-blue);
  background: white;
}

.image img {
  width: 100% !important;
  height: 100%;
}

/* Progress */

.progress-container {
  margin-top: 10px;
}

.progress {
  width: 60%;
  height: 7px;
  margin-left: 19px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.377);
}

.progress-bg {
  width: 20%;
  height: 7px;
  border-radius: 25px;
  background: var(--background);
}

</style>
