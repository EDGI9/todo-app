<template>
    <Card data-testid="qa-item-form" class="c-item-form">
        <textarea data-testid="qa-item-form__textarea" class="c-item-form__textarea" v-model="text" cols="30" rows="10"></textarea>
        <Button data-testid="qa-item-form__button" text="Add" @click="submit"></Button>
    </Card>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    import Button from "../Button/Button.vue";
    import Card from "../Card/Card.vue";
    const emit = defineEmits(['submit'])


    let text = ref("");

    function submit() {
        if (!text.value) {
            return
        }
        emit("submit", text.value)
        text.value=""
    }
</script>
<style scoped lang="scss">
    .c-item-form{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 10px;

        .c-item-form__textarea{
            width: 100%;
            background-color: rgb(226, 241, 241);
            color: rgb(41, 41, 41);
        }
    }
</style>