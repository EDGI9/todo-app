import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import { render, fireEvent, cleanup } from '@testing-library/vue';
import Form from './Form.vue';
import Button from '../Button/Button.vue';
import Card from '../Card/Card.vue';

describe('Form tests', () => {
    let component: RenderResult;
    let textarea: HTMLTextAreaElement;
    let button: HTMLButtonElement;

    beforeAll(() => {
        component = render(Form, {
            global: {
                components: {
                    Button: Button,
                    Card: Card,
                },
            }
        });
        
    });

    it('Should add new item when submit button is clicked', async () => {
        const addNewItemMock = vi.fn((): void => {});
        component.rerender(Form, {
        global: {
            mocks: {
                $store: {
                    useItemsStore: () => ({
                        addNewItem: addNewItemMock
                    })
                }
            }
        }
        });

        textarea = component.getByTestId('qa-item-form__textarea');
        await fireEvent.update(textarea, 'New item');
        button = component.getByTestId('qa-item-form__button');
        await fireEvent.click(button);

        expect(addNewItemMock).toHaveBeenCalledWith('New item');
        expect(textarea.value).toBe('');
    });

    it('Should not add new item when submit button is clicked with empty text', async () => {
        const addNewItemMock = vi.fn((): void => {});
        component.rerender(Form, {
            global: {
                mocks: {
                    $store: {
                        useItemsStore: () => ({
                            addNewItem: addNewItemMock
                        })
                    }
                }
            }
        });

        button = component.getByTestId('qa-item-form__button');
        await fireEvent.click(button);

        expect(addNewItemMock).not.toHaveBeenCalled();
    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});