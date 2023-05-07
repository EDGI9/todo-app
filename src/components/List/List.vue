<template>
  <ul data-testid="qa-list" class="c-list">
    <li data-testid="qa-list__item" class="c-list__item" v-for="(item, index) in items" :key="index" >
      <Card>
          <input data-testid="qa-list__item__checkbox" class="c-list__item__checkbox" type="checkbox" :checked="checkedItems.includes(item)" @change="toggleItem(item)">
          <p class="c-list__item__text">{{ item.title }}</p>
      </Card>  
    </li>
  </ul>
</template>

<script setup lang="ts">
    import {ref, defineProps } from 'vue';
    import { Item } from "../../interfaces/item";
    import Card from '../Card/Card.vue'
    const emit = defineEmits(['check'])
    //@ts-ignore
    const props = defineProps({
        items: {
            type: Array<Item>,
            default: () => []
        },
    })

  
    let checkedItems = ref(<Item[]>[])

    function toggleItem(item: Item): void {
      const index = checkedItems.value.findIndex((checkedItem) => checkedItem.id === item.id)
      if (index === -1) {
        checkedItems.value.push(item);
      } else {
        checkedItems.value.splice(index, 1);
      }
      emit('check', checkedItems.value)
    };
</script>

<style scoped lang="scss">
  .c-list {
    width: 500px;
    padding: 0;
    .c-list__item{
      list-style: none;
    }
    .c-list__item__checkbox{
      min-width: 50px;
    }
    .c-list__item__text{
      text-align: start;
    }
  }
</style>