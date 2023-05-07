<template>
    <div class="c-card">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    .c-card{
        width: 100%;
        max-width: 500px;
        min-height: 100px;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: white;
        margin: 10px 0;
        display: flex;
        align-items: center;
        /* .c-card__content{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 10px;
            flex: 1;
        }
        .c-card__actions {
            min-width: 50px;
        } */
    }
</style>