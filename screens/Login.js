import React, {useState} from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import { colors } from "../constants/theme";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Login({navigation}) {

  const [loginFailed, setLoginFailed] = useState(false)
  const handleSubmit = ({email, password}) => {
    if (email==='arya@starks.com' && password==='NotToday') {
      return navigation.navigate('Home')
    } else {
      setLoginFailed(true)
    }
  }

  return (
    <AppScreen style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('Welcome')}>
        <AppIcon
          name='keyboard-backspace'
          backgroundColor={colors.appBackGround}
          iconColor={colors.black}
          size={52}
        />
      </TouchableOpacity>
      <AppText style={styles.loginText}>Login</AppText>

      <Form 
        initialValues={{ email: "arya@starks.com", password: "NotToday" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" style={styles.loginButton}/>
      </Form>
      <AppText style={styles.forgotPassword}>Forgot your password?</AppText>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '5%'
  },
  loginText: {
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 30
  },
  backIcon: {
    marginLeft: -15,
    marginBottom: 15
  },
  loginButton: {
    width: '100%',
    marginTop: 20
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    color: colors.gray
  }
});

export default Login;