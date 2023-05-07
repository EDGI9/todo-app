<template>
    <button data-testid="qa-button">{{text}}</button>
</template>

<script setup lang="ts">
    import {defineProps } from 'vue'
    //@ts-ignore
    const props = defineProps({
        text: {
            type: String,
            default: 'Button'
        },
    })
</script>

<style>

</style>