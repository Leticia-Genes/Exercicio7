/** Classe com métodos estáticos imperativos */
var ClasseImperativa = /** @class */ (function () {
    function ClasseImperativa() {
    }
    /**
     * Verifica se a lista é numérica, e se for, cria uma nova lista onde insere:
     * seu maior valor, seu menor valor e seu valor médio
     * @param lista - passa por verificação de tipo e é usada como base para os cálculos dos valores da nova lista
     * @returns um array vazio caso a lista não seja numérica, ou a nova lista criada caso contrário
     */
    ClasseImperativa.retornaValores = function (lista) {
        //percorre a lista mostrando mensagem de erro caso algum item não seja numérico
        for (var j = 0; j < lista.length; j++) {
            if (!(typeof lista[j] === 'number')) {
                console.log('Um ou mais itens da lista não são do tipo number');
                return [];
            }
        }
        var novaLista;
        var maior = Number.MIN_VALUE;
        var menor = Number.MAX_VALUE;
        var soma = 0;
        //percorre a lista comparando cada item com o maior, menor, e acumulando a soma dos valores
        for (var i = 0; i < lista.length; i++) {
            if (lista[i] > maior)
                maior = lista[i];
            if (lista[i] < menor)
                menor = lista[i];
            soma += lista[i];
        }
        novaLista = [maior, menor, (soma / lista.length)];
        return novaLista;
    };
    return ClasseImperativa;
}());
/** Classe com métodos estáticos imperativos */
var ClasseFuncional = /** @class */ (function () {
    function ClasseFuncional() {
    }
    /**
     * Verifica se a lista é numérica
     * @param lista - array que passa por verificação de tipo em seus itens
     * @returns true caso a lista seja numérica, false caso algum item da lista não seja do tipo number
     */
    ClasseFuncional.verifica = function (lista) {
        return lista.some(function (item) { return !(typeof item === "number"); }) ? false : true;
    };
    /**
     * Se a lista for numérica, monta uma lista de retorno onde insere:
     * seu maior valor, seu menor valor e seu valor médio
     * @param lista - é usada como base para os cálculos dos valores da lista de retorno
     * @returns  - um array vazio caso a lista não seja numérica, ou a lista de retorno montada, caso contrário
     */
    ClasseFuncional.retornaValores = function (lista) {
        if (this.verifica(lista)) {
            return [
                lista.reduce(function (acumulador, item) {
                    return Math.max(acumulador, item);
                }),
                lista.reduce(function (acumulador, item) {
                    return Math.min(acumulador, item);
                }),
                (lista.reduce(function (acumulador, item) {
                    return acumulador + item;
                }) / lista.length)
            ];
        }
        else {
            console.log('Um ou mais itens da lista não são do tipo number');
            return [];
        }
    };
    return ClasseFuncional;
}());
var lista1 = [3, 7, 1, 9, 5, -1];
var lista2 = [3, 7, 1, 9, 5, 'r'];
console.log(ClasseImperativa.retornaValores(lista1));
console.log(ClasseFuncional.retornaValores(lista2));
//# sourceMappingURL=ex7.js.map