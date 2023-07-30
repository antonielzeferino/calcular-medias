//soma tudo e divide pela quantidade de valores
function mediaSimples(...numbers) {
   const result = numbers.reduce((acount, num) => acount += num, 0)
   return result / numbers.length
}    //feita


//multiplica número pelo peso e divide o número final pela soma dos pesos
function mediaPonderada(...numbers) {
   const soma = numbers.reduce((acount, {number , weight}) => acount + (number * (weight ?? 1)),0)
   const weightSum = numbers.reduce(( acount, num) => acount + (num.weight ?? 1), 0)
   return soma / weightSum
}     //feito 


//pega o numero do meio da lista
function mediana(...numbers) {
   const orderedNumbers = numbers.sort((a,b) => a-b)
   const middle = Math.floor(orderedNumbers.length / 2)
   if(orderedNumbers % 2 !== 0){
      return orderedNumbers[middle]
   }
   const firstMedian = orderedNumbers[middle - 1]
   const secondMedian = orderedNumbers[middle]
   return average(firstMedian, secondMedian)
}     //feito


//devolv o numero que mais se repete
function moda (...numbers) {
   const quantities = numbers.map(num => [
      num,
      numbers.filter(n => num === n).length
   ])
   quantities.sort((a,b) => b[1] - a[1])
   return quantities[0][0]
}     //feito
