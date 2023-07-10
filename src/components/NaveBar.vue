<script setup>
import { RouterLink } from 'vue-router'
import ChartIcon from './icons/Chart.vue'
import CoursesIcon from './icons/Learn.vue'
import CommentIcon from './icons/Comment.vue'
import ToolIcon from './icons/Tool.vue'
import ResourcesIcon from './icons/Server.vue'
</script>
<template>
  <nav>
    <section class="logo-container flex flex-y-center no-select">
      <div class="logo">
        <img class="image no-drag" src="../assets/image/Course.png" alt="Course" />
      </div>
      <h3>Course</h3>
    </section>

    <!-- Navigation container -->
    <section class="navigation font-bold">
      <RouterLink to="#">
        <div class="list cursor-point flex flex-y-center no-select">
          <div class="icon">
            <ChartIcon />
          </div>
          <span class="ML-10px">Performance</span>
        </div>
      </RouterLink>

      <RouterLink to="#">
        <div class="list cursor-point flex flex-y-center no-select">
          <div class="icon">
            <CoursesIcon />
          </div>
          <span class="ML-10px">Courses</span>
        </div>
      </RouterLink>

      <RouterLink to="#">
        <div class="list cursor-point flex flex-y-center no-select">
          <div class="icon">
            <CommentIcon />
          </div>
          <span class="ML-10px">Comment</span>
        </div>
      </RouterLink>

      <RouterLink to="#">
        <div class="list cursor-point flex flex-y-center no-select">
          <div class="icon">
            <ToolIcon />
          </div>
          <span class="ML-10px">Tools</span>
        </div>
      </RouterLink>

      <RouterLink to="#">
        <div class="list cursor-point flex flex-y-center no-select">
          <div class="icon">
            <ResourcesIcon />
          </div>
          <span class="ML-10px">Resources</span>
        </div>
      </RouterLink>
    </section>

    <section class="bottom card round-25px">
      <span>Upgrade your plan. <a href="#">Pro Plan</a></span>
      <div class="icon-L">💎</div>
    </section>
  </nav>
</template>
