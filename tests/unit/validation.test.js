// importa a função 
const {normalizeTitle} = require ('../../src/validation');

// agrupa um bloco de testes relacionado para manter a organização
describe('Validação de tarefas', () => {

    test('Remove espaços do início e do fim do título', () => { 
        expect(normalizeTitle(' Teste Unitário ')).toBe('Teste Unitário');
    });


    test('Retorna string vazia se o título for um número', () => {
        expect(normalizeTitle(15487)).toBe('');
    });
    
    test('Retorna string vazia se o título for nulo', () => {
            expect(normalizeTitle(null)).toBe('');
    });

    test('Retorna string vazia se o título for indefinido', () => {
            expect(normalizeTitle(undefined)).toBe('');
    });

    // caso de teste 1: entrada nula
    // caso de teste 2: entrada indefinida
});