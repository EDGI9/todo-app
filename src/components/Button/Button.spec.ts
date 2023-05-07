import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/vue";
import Button from "./Button.vue";

describe('Button tests', () => {

    let component: RenderResult;
    let button: HTMLButtonElement;

    beforeAll(() => {
        component = render(Button);
    });

    it('Button should render properly', () => {
        button = component.getByTestId('qa-button');

        expect(button).toBeTruthy();
    });


    it('Button should handle click event', async () => {

        const clickHandler = vi.fn((): void => {});

        await component.rerender({
            onClick: clickHandler()
        });

        expect(button).toBeTruthy();

        await fireEvent.click(button);
        expect(clickHandler).toHaveBeenCalledOnce();

    });


    afterAll(() => {
        component.unmount();
        cleanup();
    });
});