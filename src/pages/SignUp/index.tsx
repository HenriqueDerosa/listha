import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  View,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../../assets/logo.png';
import LogoImage from '../../components/styled/LogoImage';
import Title from '../../components/styled/Title';

import {Container, BackToSignInButton, BackToSignInText} from './styles';
import colors from '../../../colors';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const InputEmailRef = useRef<TextInput>(null);
  const InputPasswordRef = useRef<TextInput>(null);
  const [showCreateAccount, setShowCreateAccount] = useState(true);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      return;
    }
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowCreateAccount(false);
  };

  const _keyboardDidHide = () => {
    setShowCreateAccount(true);
  };

  const handleSignUp = useCallback((data: object) => {
    console.log(data);
  }, []);
  const handlePressCreate = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <LogoImage source={Logo} />
            <View>
              <Title>Vem criar a sua lista</Title>
            </View>

            <Form onSubmit={handleSignUp} ref={formRef} style={{width: '100%'}}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  InputEmailRef.current?.focus();
                }}
              />
              <Input
                ref={InputEmailRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  InputPasswordRef.current?.focus();
                }}
              />
              <Input
                ref={InputPasswordRef}
                name="password"
                icon="lock"
                placeholder="Sua senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
              />
              <Button onPress={handlePressCreate}>Criar conta</Button>
            </Form>
          </Container>
        </ScrollView>

        {showCreateAccount && (
          <BackToSignInButton onPress={() => navigation.navigate('SignIn')}>
            <Icon name="log-in" size={20} color={colors.primary} />
            <BackToSignInText>Já tenho uma conta</BackToSignInText>
          </BackToSignInButton>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
