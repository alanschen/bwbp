import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '@assets/Colors';

const win = Dimensions.get('window');

export const ImageContainer = styled.View`
  align-items: center;
  flex: 0.95;
`;

export const LoginImg = styled.Image`
  width: ${win.height * 1.5};
  height: ${win.width * 1.0};
  aspect-ratio: 1
`;

export const LoginHeader = styled.Text`
  font-size: 40px;
  font-family: source-sans-pro-bold;
  margin: 12.5% 0 5% 10%;
`;

export const LoginInput = styled.TextInput`
  border-color: ${Colors.brandBlue};
  border-radius: 5;
  border-width: 2;
  padding-horizontal: 5%;
  align-items: stretch;
  font-size: 20;
  height: 8%;
  margin: 0 10% 5% 10%;
`;

export const LoginButton = styled.TouchableOpacity`
  border-radius: 5;
  background-color: ${Colors.brandBlue};
  height: 8%;
  align-items: center;
  justify-content: center;
  margin: 0 10% 0 10%;
`;

export const LoginButtonText = styled.Text`
  font-size: 20;
`;

export const LoginText = styled.Text`
  margin: 0 10% 0 10%;
  font-size: 20;
`;

export const GuestButtonText = styled.Text`
  font-size: 18;
  text-decoration-line: underline;
`;

export const GuestButton = styled.TouchableOpacity`
  border-radius: 5;
  background-color: transparent;
  height: 7%;
  align-items: center;
  justify-content: center;
  margin: 0 10% 0 10%;
`;
