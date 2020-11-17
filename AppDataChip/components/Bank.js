import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default class Profile extends React.Component {

  //construtor para uso do props
  constructor(props) {
    super(props);
  }

  //renderização do componente
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Text>
            teste BANCO
          </Text>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});