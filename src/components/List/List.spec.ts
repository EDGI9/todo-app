import {afterAll, beforeAll, describe, expect, it} from "vitest";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/vue";
import List  from "./List.vue";
import { mockItems } from "../../__mock__/items";

describe('List tests', () => {

    var component: RenderResult;
    let list: HTMLButtonElement;
    let listItems: HTMLLIElement[];
    let firstListItemCheckBox: HTMLElement;

    beforeAll(() => {
        component = render(List);
    });

    it('List should render properly', () => {
        list = component.getByTestId('qa-list');

        expect(list).toBeTruthy();
    });


    it('List should render list items', async () => {

        await component.rerender({
            items: mockItems
        });
         
        listItems = component.getAllByTestId('qa-list__item');
        firstListItemCheckBox = component.getAllByTestId('qa-list__item__checkbox')[0];

        expect(list).toBeTruthy()
        expect(listItems).toBeTruthy()
        //@ts-ignore
        expect(listItems.children.length).toEqual(2);

        await fireEvent.click(firstListItemCheckBox);
        expect(firstListItemCheckBox.checked).toBeTruthy();
    });


    afterAll(() => {
        component.unmount();
        cleanup();
    });
});