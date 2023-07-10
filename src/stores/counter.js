import {defineStore} from "pinia";

export const useCourses = defineStore('course', {
    state: ()=> ({
        courses: [
            {
                title: "How to grow your Facebook Page",
                steps: 12,
                progress: 6,
                status: 'Enrolled',
                bg: '--blue',
                color: '--background',
                image: 'src/assets/image/course/FB.png'
            },
            {
                title: "Grow your Community",
                steps: 7,
                progress: 1,
                status: 'Enrolled',
                bg: '--off-pink',
                color: '--background',
                image: 'src/assets/image/course/GP.png'
            },
            {
                title: "How to grow your Facebook Page",
                steps: 17,
                progress: 15,
                status: 'Full',
                color: '--dark-blue',
                bg: '--off-yellow',
                image: 'src/assets/image/course/DS.png'
            },
            {
                title: "How to grow your Facebook Page",
                steps: 21,
                progress: 20,
                status: 'Full',
                color: '--background',
                bg: '--off-orange',
                image: 'src/assets/image/course/TA.png'
            }
        ]
    })
})