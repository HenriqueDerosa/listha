import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../../colors';

export const Container = styled.TouchableOpacity`
  background-color: #232323;
  border-radius: 9px;
  margin: 12px;
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${colors.text};
  font-size: 16px;
`;
