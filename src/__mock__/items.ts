
import { faker } from "@faker-js/faker";
import { Item } from "../interfaces/item";

export const mockItems: Item[] = [
    {id: faker.random.alphaNumeric(7), title: 'Title 1'}, 
    {id: faker.random.alphaNumeric(7), title: 'Title 2'}, 
    {id: faker.random.alphaNumeric(7), title: 'Title 3'},
]