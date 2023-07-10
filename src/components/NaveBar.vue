<script setup>
import ChartIcon from './icons/Chart.vue'
import CoursesIcon from './icons/Learn.vue'
import CommentIcon from './icons/Comment.vue'
import ToolIcon from './icons/Tool.vue'
import ResourcesIcon from './icons/Server.vue'
</script>
<template>
  <nav class="flex flex-y-down flex-x-between">
    <section class="logo-container flex flex-y-center no-select">
      <div class="logo">
        <img class="image no-drag" src="../assets/image/Course.png" alt="Course" />
      </div>
      <h3>Course</h3>
    </section>

    <!-- Navigation container -->
    <section class="navigation font-bold">
      <div class="list cursor-point flex flex-y-center no-select">
        <div class="icon">
          <ChartIcon />
        </div>
        <span class="ML-10px">Performance</span>
      </div>

      <div class="list cursor-point flex flex-y-center no-select">
        <div class="icon">
          <CoursesIcon />
        </div>
        <span class="ML-10px">Courses</span>
      </div>

      <div class="list cursor-point flex flex-y-center no-select">
        <div class="icon">
          <CommentIcon />
        </div>
        <span class="ML-10px">Comment</span>
      </div>

      <div class="list cursor-point flex flex-y-center no-select">
        <div class="icon">
          <ToolIcon />
        </div>
        <span class="ML-10px">Tools</span>
      </div>

      <div class="list cursor-point flex flex-y-center no-select">
        <div class="icon">
          <ResourcesIcon />
        </div>
        <span class="ML-10px">Resources</span>
      </div>
    </section>

    <section class="bottom card round-25px">
      <span>Upgrade your plan. <a href="#">Pro Plan</a></span>
      <div class="icon-L">💎</div>
    </section>
  </nav>
</template>
<style scoped>
.navigation {
  max-height: 80vh;
  overflow: hidden;
  overflow-y: auto;
}

.logo-container {
  margin: 100px 0;
}
</style>
