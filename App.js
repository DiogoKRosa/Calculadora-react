import React, { useEffect } from 'react'
import { StyleSheet, SwitchComponent, Text, View } from 'react-native';
import { useState } from 'react';
import { HStack } from '@react-native-material/core';

import CustomNumberInput from './assets/components/customTextField'
import CustomOperationButton from './assets/components/customButton'


export default function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)

  function calcularValor(op){
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if(isNaN(n1) || isNaN(n2)){
      setResult('Erro: Valores Inválidos, preencha os campos corretamente')
      return
    }

    let res
    switch(op){
      case 'add':
        res = n1 + n2
        break
      case 'sub':
        res = n1 - n2
        break
      case 'mult':
        res = n1 * n2
        break
      case 'div':
        if(n2==0){
          setResult('Erro: Valor não divisível por 0')
          return
        }
        res = n1 / n2
        break
      default:
        return
    }
    setResult(`O resultado da operação é: ${res}`)
  }

  return (
    <View style={styles.container}>
      <CustomNumberInput label = "Número 1" value={num1} onChangeText={setNum1}/>
      <CustomNumberInput label = "Número 2" value={num2} onChangeText={setNum2}/>
      <HStack justify='evenly' spacing={4}>
        <CustomOperationButton name="plus" onPress={() => calcularValor('add')}/>
        <CustomOperationButton name="minus" onPress={() => calcularValor('sub')}/>
        <CustomOperationButton name="multiplication" onPress={() => calcularValor('mult')}/>
            <CustomOperationButton name="division" onPress={() => calcularValor('div')}/>
      </HStack>
      <Text style={styles.paragraph}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
