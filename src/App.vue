<script setup lang="ts">
import {getStream} from './app.ts'
import {vMarkdown} from "./utils";

const {str,useStrTemp} = getStream()


</script>

<template>
    <div class="box" v-markdown="{
        data: str,
        type:'stream'
    }"></div>
    <div class="box2">
        {{ useStrTemp }}
    </div>
</template>

<style lang="scss">
.box {
    width: 50vw;
    height: 50vh;
    margin: auto;
    overflow: auto;

    pre {
        margin: 10px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #333;
    }

}

.box2{
    width: 50vw;
    height: 10vh;
}
</style>
