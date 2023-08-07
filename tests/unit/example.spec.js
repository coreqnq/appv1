describe('Example Component', () => {
    test('Debe de ser mayor a 10', () => {
        //Arreglar
        let value = 9;

        //Estímulo
        value += 2

        // //Observar el resultado
        // if (value > 10) {
        //     // all is good
        // } else {
        //     throw `${value} no es mayor a 10`
        // }

        expect(value).toBeGreaterThan(10);

    })

})