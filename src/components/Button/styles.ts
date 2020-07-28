import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../../colors';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${colors.primary};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  font-family: 'RobotoSlab-Regular';
`;
