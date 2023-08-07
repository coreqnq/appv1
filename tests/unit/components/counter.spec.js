import { shallowMount } from '@vue/test-utils'
import Counter  from "@/components/Counter";

describe('Counter Componet' , () => {

    let wrapper = shallowMount(Counter)

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    test('debe de hacer match con el snapshot', () => {
        // const wrapper = shallowMount(Counter)

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Section Counter')
    })

    test('p map 2 test', () => {
        // const wrapper = shallowMount(Counter)
        const pTags = wrapper.find('[data-testid="modelID"]').text()
        expect(pTags).toBe('100')

    })

    test('debe de incremetar el 1 el valor del contador', async() => {
        // const wrapper = shallowMount(Counter)

        const [increaseBtn , decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        // await increaseBtn.trigger('click')


        // let bTags = wrapper.find('[data-testid="modelAcctionID"]').text()
        // const value = wrapper.find('[data-testid="modelID"]').text()

        const value = wrapper.find('[data-testid="modelID"]').text()

        // expect(value).toBe('101')
        expect(value).toBe('101')
    })

    test('debe de ser establecer el valor por defecto', () => {
        let {start} = wrapper.props();
        const value = wrapper.find('[data-testid="modelID"]').text()
        expect(Number(value)).toBe(start);
    })

    test('debe de ser establecer el valor por defecto', () => {
        let  wrapper =   shallowMount(Counter);

    })



})