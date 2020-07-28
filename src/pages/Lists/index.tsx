import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {Container, Header, HeaderTitle} from './styles';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import MyList from '../../components/mylist';
import {getCollection} from '../../services/lists';

interface IList {
  id: string;
  label: string;
}

const Lists: React.FC = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      const list = await getCollection('users');
      setLists(list);
    };

    getLists();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>Minhas listas</HeaderTitle>
      </Header>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        {lists && (
          <FlatList
            data={lists}
            keyExtractor={(item: IList) => item.id}
            renderItem={({item}) => (
              <Text style={{color: 'white'}}> - {item.name}</Text>
            )}
          />
        )}
        <MyList title="Mercado" />
        <MyList title="Farmácia" />
        <MyList title="Compras da semana" />
        <MyList title="Minhas ideias malucas" />
      </ScrollView>
    </Container>
  );
};

export default Lists;
