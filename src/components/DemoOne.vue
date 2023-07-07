<template>
    <h1>Main Demo1</h1>
    <el-button type="primary" @click="click">跳转至demo2</el-button>
</template>

<script>
//import DemoTwo from "./DemoTwo.vue"
export default {

    created() {
        console.log(this)

    },
    methods: {
        click() {
            console.log("click")
        },
    }
};
</script>