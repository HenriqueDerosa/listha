import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../../assets/logo.png';
import LogoImage from '../../components/styled/LogoImage';
import Title from '../../components/styled/Title';

import {
  Container,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';
import colors from '../../../colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as auth from '../../services/auth';
import {getError} from '../../config/firebase';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
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

  const handleSignIn = useCallback(async (data: auth.IAuth) => {
    const hasErrors = await auth.signIn(data.email, data.password);

    if (!hasErrors) {
      navigation.navigate('Lists');
    } else {
      Alert.alert('Erro', getError(String(hasErrors)));
    }
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
              <Title>Vem criar a sua lista !</Title>
            </View>

            <Form onSubmit={handleSignIn} ref={formRef} style={{width: '100%'}}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                returnKeyType="next"
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Sua senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                onSubmitEditing={handlePressCreate}
                returnKeyType="send"
              />
              <Button onPress={handlePressCreate}>Entrar</Button>
            </Form>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>

        {showCreateAccount && (
          <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color={colors.primary} />
            <CreateAccountText>Criar conta</CreateAccountText>
          </CreateAccountButton>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
