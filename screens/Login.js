import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
// UI Components
import CustomText from "../components/UI/CustomText";
import Button from "../components/UI/Button";
import TextField from "../components/UI/TextField";

function Login() {
  const [errors, setErrors] = useState({
    email: { error: "", validated: false },
    password: { error: "", validated: false },
  });
  const [formDisabled, setFormDisabled] = useState(true);

  // Email Validation
  const validateEmail = (email) => {
    let newErrors = Object.assign({}, errors);

    if (email == "") {
      newErrors.email.error = "Hey you left me empty!";
      newErrors.email.validated = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email.error = "This is not an email.";
      newErrors.email.validated = false;
    } else {
      newErrors.email.error = "";
      newErrors.email.validated = true;
    }

    setErrors(newErrors);
  };

  // Email Validation
  const validatePassword = (password) => {
    let newErrors = Object.assign({}, errors);

    if (password == "") {
      newErrors.password.error = "Hey you left me empty!";
      newErrors.password.validated = false;
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
