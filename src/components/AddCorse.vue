<script setup>
const date = new Date()
const monthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Agu',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
const month = monthName[date.getMonth()]
const currentDate = date.getDate()
console.log(month)
</script>
<template>
  <section class="flex flex-y-center flex-x-between">
    <header>
      <h1>Course Activity</h1>
      <h4>{{ month }} {{ currentDate }}th, {{ date.getFullYear() }}</h4>
    </header>
    <button class="addBtn cursor-point">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-plus"
      >
        <line stroke="#fff" x1="12" y1="5" x2="12" y2="19"></line>
        <line stroke="#fff" x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  </section>
</template>
<style scoped>
.addBtn {
    width: 40px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 12px;
    margin-left: 30px;
    background: var(--blue);
    box-shadow: 0px 9px 14px hsla(216, 100%, 50%, 0.329);
}

header h4 {
    color: var(--blue);
}

</style>