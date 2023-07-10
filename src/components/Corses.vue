<script setup>
import { useCourses } from "../stores/counter";
import ActiveCourses from "./ActiveCourses.vue";
import RightArrow from "./icons/RightArrow.vue";
import LeftArrow from "./icons/LeftArrow.vue";
import List from "./icons/List.vue";
const courses = useCourses()
</script>

<template>
    <section>
        <nav class="flex flex-y-center flex-x-between">

            <div class="flex flex-y-center">
                <h2 class="T-disable FW-400">Courses</h2>

                <div class="icons ML-10px flex flex-y-center">
                    <div class="icon cursor-point">
                        <LeftArrow />
                    </div>
                    <div class="icon cursor-point">
                        <RightArrow />
                    </div>
                </div>
            </div>

            <div class="flex flex-y-center filter">
                <div class="cursor-point icon Icon_P">

                </div>
                <div class="cursor-point icon flex flex-center Icon_P BG-blue stroke-line-white">
                    <List />
                </div>
            </div>
        </nav>

        <!-- Courses -->
        <section>
            <ActiveCourses :info="courses.courses"></ActiveCourses>
        </section>
    </section>
</template>
<style scoped>

.Icon_P {
    width: 15px;
    height: 15px;
    padding: 10px;
    border-radius: 50%;
}

.Icon_P svg {
    stroke-width: 2;
}

</style>