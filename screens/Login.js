import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
// UI Components
import CustomText from "../components/UI/CustomText";
import Button from "../components/UI/Button";
import TextField from "../components/UI/TextField";
// Images
import Logo from "../assets/logo.png";

function Login() {
  const [errors, setErrors] = useState({
    email: { error: "", validated: false },
    password: { error: "", validated: false },
  });
  const [formDisabled, setFormDisabled] = useState(true);

  // Email Validation
  const validateEmail = (email) => {
    let newErrors = Object.assign({}, errors);
    newErrors.email.validated = false;

    if (email == "") {
      newErrors.email.error = "Hey you left me empty!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email.error = "This is not an email.";
    } else {
      newErrors.email.error = "";
      newErrors.email.validated = true;
    }

    setErrors(newErrors);
  };

  // Password Validation
  const validatePassword = (password) => {
    let newErrors = Object.assign({}, errors);
    newErrors.password.validated = false;

    if (password == "") {
      newErrors.password.error = "Hey you left me empty!";
    } else {
      newErrors.password.error = "";
      newErrors.password.validated = true;
    }

    setErrors(newErrors);
  };

  // Enable the form when everything is validated
  useEffect(() => {
    let validated = true;
    for (const field in errors) {
      if (!errors[field].validated) {
        validated = false;
      }
    }
    validated ? setFormDisabled(false) : setFormDisabled(true);
  }, [errors]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={{ flex: 1, backgroundColor: "red" }}
        onPress={Keyboard.dismiss}
      >
        <View style={{ flex: 1 }}>
          {/* Logo */}
          <Image
            source={Logo}
            style={{ width: 173, height: 130, alignSelf: "center" }}
          />
          {/* Email */}
          <CustomText style={styles.errorMessage}>
            {errors.email.error}
          </CustomText>
          <TextField
            onBlur={(e) => {
              validateEmail(e.nativeEvent.text);
            }}
            placeholder="Email"
            customStyles={{ marginVertical: 0 }}
          />
          {/* Password */}
          <CustomText style={styles.errorMessage}>
            {errors.password.error}
          </CustomText>
          <TextField
            onBlur={(e) => {
              validatePassword(e.nativeEvent.text);
            }}
            placeholder="Password"
            customStyles={{ marginVertical: 0 }}
            secureTextEntry
          />
          {/* Login Button */}
          <Button customStyles={{ marginTop: 20 }} disabled={formDisabled}>
            Login
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },
  errorMessage: {
    color: "#bf6262",
    paddingLeft: 5,
    paddingVertical: 5,
  },
});

export default Login;
