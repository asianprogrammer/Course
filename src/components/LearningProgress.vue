<script setup>
import Target from "./icons/Target.vue";
import WebDev from "./icons/WebDev.vue";
import DataBase from "./icons/DataBase.vue";
</script>

<template>
    <section>

        <h3 class="T-gray">My Learning</h3>

        <main>
            <div class="flex flex-x-between">
                <div class="flex flex-center">
                    <div class="logo-L">
                        <Target />
                    </div>
                    <div class="info ML-40px">
                        <h2>Target Audience Training</h2>
                        <span>Save time and make your business more effective by promoting...</span>
                    </div>
                </div>

                <div class="progress">
                    <span>53%</span>
                </div>
            </div>
            <div class="flex flex-x-between">
                <div class="flex flex-center">
                    <div class="logo-L">
                        <WebDev />
                    </div>
                    <div class="info ML-40px">
                        <h2>The Complete WebDevelopment</h2>
                        <span>Learn Web Development by building 25 websites...</span>
                    </div>
                </div>

                <div class="progress">
                    <span>75%</span>
                </div>
            </div>
            <div class="flex flex-x-between">
                <div class="flex flex-center">
                    <div class="logo-L">
                        <DataBase />
                    </div>
                    <div class="info ML-40px">
                        <h2>Grow your Community</h2>
                        <span>Follow these easy and simple steps</span>
                    </div>
                </div>

                <div class="progress">
                    <span>15%</span>
                </div>
            </div>
        </main>
    </section>
</template>
<style scoped>

.T-gray {
    margin: 40px 0;
    font-weight: 500;
    color: var(--text-gray);
}
.info span {
    color: var(--text-gray);
}
</style>