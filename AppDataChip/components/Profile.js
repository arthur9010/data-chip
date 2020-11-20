import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { List, Title, Divider, Caption, Avatar, Button, Subheading } from 'react-native-paper';
import axios from '../lib/axios'
export default class Bank extends React.Component {

  //construtor para uso do props
  constructor(props) {
    super(props);
    this.getuserData()
  }
  state = {
    userData: '',
  }
  
  getuserData = () => {
   axios.get(`user/${'user_jh23i4uhi141hiu12h'}`)
      .then(res => {
        let healthProblems = res.data.healthProblems.map(problem => `${problem.toUpperCase()}, `)
        let allergies = res.data.allergies.map(problem => `${problem.toUpperCase()}, `)
        this.setState({
          userData: {
            ...res.data,
            healthProblems,
            allergies,
          }
        })
      })
  }
  render() {
    const {
      civilName,
      socialName,
      career,
      birthDate,
      cpf,
      rg,
      biologicalSex,
      bloodGroup,
      weight,
      healthProblems,
      allergies,
    } = this.state.userData

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerProfile}>
            <Avatar.Icon style={{marginRight: 17}} size={65} icon="account" color="black"/>
            <View>
              <Subheading>{socialName}</Subheading>
              <Subheading>{birthDate}</Subheading>
            </View>
          </View>
          <List.Section>
            <Title style={styles.headerList}>Dados Pessoais</Title>
            <List.Item
              title="Nome Civil"
              description={civilName}
            />
            <List.Item
              title="Profissão"
              description={career}
            />
            <List.Item
              title="CPF"
              description={cpf}
            />
            <List.Item
              title="RG"
              description={rg}
            />
            <List.Item
              title="Sexo Biológico"
              description={biologicalSex}
            />
          </List.Section>
          <List.Section>
            <Title style={styles.headerList}>Dados Médicos</Title>
            <List.Item
              title="Grupo Sanguíneo"
              description={bloodGroup}
            />
            <List.Item
              title="Peso"
              description={weight}
            />
            <List.Item
              title="Problemas de Sáude"
              description={healthProblems}
            />
            <List.Item
              title="Alergias"
              description={allergies}
            />
          </List.Section>
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
  headerList: {
    fontSize: 20,
  },
  headerProfile: {
    flexDirection: 'row',
  }
});