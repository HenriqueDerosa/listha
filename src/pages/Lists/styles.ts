import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../../colors';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
`;

export const Header = styled.View`
  padding: 22px;
  border-bottom-color: ${colors.primary};
  border-bottom-width: 1px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.text};
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;
