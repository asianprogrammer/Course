<script setup>
import LeftArrow from './icons/LeftArrow.vue'
import Notification from './icons/Notification.vue'
</script>
<template>
  <main class="flex flex-y-center flex-x-between">
    <section class="right flex flex-y-center cursor-point">
      <div class="box-icon flex flex-center T-gray">
        <LeftArrow />
      </div>
      <div class="icon Icon_This flex flex-center ML-40px">
        <Notification />
        <div class="red-dot"></div>
      </div>
    </section>

    <section class="flex flex-y-center student">
      <header>
        <h3>Ali Azgar</h3>
        <strong>Student</strong>
      </header>
      <div class="profile cursor-point">
        <img width="100" class="no-select no-drag" src="../assets/image/student.jpg" alt="" />
      </div>
    </section>
  </main>
</template>
<style>
.box-icon {
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 10px;
  border: solid 1px var(--disable-color);
}

header strong {
  color: var(--blue);
}

.profile {
  margin-left: 30px;
}

.Icon_This svg path {
  stroke: #a8a8a8;
}

.red-dot {
  margin-top: -18px;
  margin-left: 8px;
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  background: var(--red);
}
</style>
