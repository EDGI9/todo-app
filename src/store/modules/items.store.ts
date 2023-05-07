import { ref } from "vue";
import { faker } from "@faker-js/faker";
import {Item} from "../../interfaces/item";
import { mockItems } from "../../__mock__/items";

export const ItemsStoreIdentifier: string = "transcription-stor" 

export function ItemsStore() {

    let items = ref(<Item[]>[]);
    let checkedItems = ref(<Item[]>[]);

    async function getAllItems(): Promise<Item[]> {
        items.value = mockItems;
        return mockItems
    }

    async function addNewItem(text: string): Promise<void> {
        const newItem: Item = {
            id: faker.random.alphaNumeric(7),
            title: text
        }
        
        //@ts-ignore
        items.value.push(newItem)
    }

    async function updateCheckedItems(itemList: Item[]): Promise<void> {
        checkedItems.value = itemList
    }

    async function deleteItems(itemList: Item[]): Promise<void> {
        for (let index = 0; index < itemList.length; index++) {
            const element = itemList[index];
            items.value = items.value.filter((item) => item.id !== element.id);
            checkedItems.value = checkedItems.value.filter((item) => item.id !== element.id);
        }
    }

    return {
        getAllItems,
        addNewItem,
        updateCheckedItems,
        deleteItems,
        items,
        checkedItems
    };

}