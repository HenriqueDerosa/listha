import React from 'react';
import {View, Text} from 'react-native';

import {Container, Header, HeaderTitle} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import MyList from '../../components/mylist';

const Lists: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Minhas listas</HeaderTitle>
      </Header>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <MyList title="Mercado" />
        <MyList title="Farmácia" />
        <MyList title="Compras da semana" />
        <MyList title="Minhas ideias malucas" />
      </ScrollView>
    </Container>
  );
};

export default Lists;
