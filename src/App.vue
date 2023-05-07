<template>
  <div>
      <Button v-if="itemsStore.checkedItems.length > 0" class="o-delete-button" text="Delete" @click="deleteItems" />
      <Form @submit="addItem" />
      <List :items="itemsStore.items" @check="updateCheckedItems"/>
  </div>
</template>

<script setup lang="ts" >
  import { onBeforeMount } from "vue";
  import Store from "./store/index";
  import List from "./components/List/List.vue";
  import Form from "./components/Form/Form.vue";
  import Button from "./components/Button/Button.vue";
  import { Item } from "./interfaces/item";

  const itemsStore = Store.useItemsStore();
  
  onBeforeMount(async () => {
    await itemsStore.getAllItems();
  });

  function updateCheckedItems(items:Item[]): void {
     itemsStore.updateCheckedItems(items)
  }
  
  function deleteItems(): void {
    itemsStore.deleteItems(itemsStore.checkedItems)
  }

  function addItem(newItem : string): void {
    itemsStore.addNewItem(newItem);
  }
</script>

<style>
  body {
    background-color: aliceblue;
    color: rgb(41, 41, 41);
  }

  .o-delete-button{
    position: fixed;
    top: 5%;
    right: 5%;
  }
</style>