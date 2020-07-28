import React from 'react';
import {View, Text} from 'react-native';

import {Container, Title} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

interface MyListProps {
  title: string;
}
const MyList: React.FC<MyListProps> = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default MyList;
