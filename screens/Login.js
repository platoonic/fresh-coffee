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
// Components
import Header from "../components/Header";
// Images
import Logo from "../assets/logo.png";
// Redux
import { connect } from "react-redux";
import { login } from "../redux/actions/user";

function Login({ login, showHeader, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: { error: "", validated: false },
    password: { error: "", validated: false },
  });
  const [formDisabled, setFormDisabled] = useState(true);

  // Email Validation
  const validateEmail = () => {
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
  const validatePassword = () => {
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
    <>
      {/* Header (only when showHeader == true) */}
      {showHeader && <Header showControls navigation={navigation} />}
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={Keyboard.dismiss}
        >
          <View style={{ flex: 1 }}>
            {/* Logo */}
            {!showHeader && (
              <Image
                source={Logo}
                style={{ width: 173, height: 130, alignSelf: "center" }}
              />
            )}
            {/* Email */}
            <CustomText style={styles.errorMessage}>
              {errors.email.error}
            </CustomText>
            <TextField
              onBlur={(e) => {
                validateEmail();
              }}
              onChangeText={(email) => {
                setEmail(email);
                validateEmail();
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
                validatePassword();
              }}
              onChangeText={(password) => {
                setPassword(password);
                validatePassword();
              }}
              placeholder="Password"
              customStyles={{ marginVertical: 0 }}
              secureTextEntry
            />
            {/* Login Button */}
            <Button
              customStyles={{ marginTop: 20 }}
              disabled={formDisabled}
              onPress={() => {
                // This data should come from the backend!
                const user = {
                  email,
                  name: "Khalid Magdy Khalil",
                  address: {
                    governate: "Alexandria",
                    area: "Al Labban",
                    addressLine1: "Add. Line 1",
                    addressLine2: "Add. Line 2",
                    phoneNumber: "1149050646",
                  },
                };
                login(user);
              }}
            >
              Login
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
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

const mapDispatchToProps = (dispatch) => ({
  login: (user) => {
    dispatch(login(user));
  },
});

export default connect(null, mapDispatchToProps)(Login);
