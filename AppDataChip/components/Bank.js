import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { List, Title, Divider, Caption, Avatar, Button, Subheading } from 'react-native-paper';
import axios from '../lib/axios'
export default class Profile extends React.Component {

  //construtor para uso do props
  constructor(props) {
    super(props);
    this.getBankData()
  }
  state = {
    bankData: '',
    listExtract: []
  }
  
  getBankData = () => {
   axios.get(`bank/${'user_jh23i4uhi141hiu12h'}`)
      .then(res => {
        this.setState({ bankData: res.data })
      })
  }
  render() {
    const listExtract = ({item}) => (
          <List.Item
            title={formatBalance(item.value)}
            description={item.establishmentName}
          />
        )
    const formatBalance = (balance) => {
      return Number(balance).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
    }
    const keyExtract = (item, index) => index.toString()

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Title>Banco</Title>
          </View>
          <Caption>Saldo</Caption>
          <View style={styles.balanceRow}>
            <Subheading>{formatBalance(this.state.bankData.balance)}</Subheading>
            <Button
              type="text"
              icon="refresh"
              onPress={() => this.getBankData()}
            />
          </View>

          <Divider/>
          <Caption>Extrato</Caption>
          <FlatList
            keyExtractor={keyExtract}
            data={this.state.bankData.extract}
            renderItem={listExtract}
          />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    marginTop: 0,
    padding:10
  },
  header: {
    marginBottom: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});