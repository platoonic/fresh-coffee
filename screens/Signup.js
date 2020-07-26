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

function Signup({ login, showHeader, navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({
    fullName: { error: "", validated: false },
    email: { error: "", validated: false },
    password: { error: "", validated: false },
    passwordConfirm: { error: "", validated: false },
  });
  const [formDisabled, setFormDisabled] = useState(true);

  // Fullname Validation
  const validateFullName = () => {
    let newErrors = Object.assign({}, errors);
    newErrors.fullName.validated = false;

    if (fullName == "") {
      newErrors.fullName.error = "Hey you left me empty!";
    } else if (!/^[a-zA-Z\s]*$/.test(fullName)) {
      newErrors.fullName.error =
        "Full name can consist of only Letters and Spaces.";
    } else {
      newErrors.fullName.error = "";
      newErrors.fullName.validated = true;
    }

    setErrors(newErrors);
  };

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
    } else if (password.length < 6) {
      newErrors.password.error = "Password should be atleast 6 characters.";
    } else {
      newErrors.password.error = "";
      newErrors.password.validated = true;
    }

    setErrors(newErrors);
  };

  // Password Validation
  const validatePasswordConfirm = () => {
    let newErrors = Object.assign({}, errors);
    newErrors.passwordConfirm.validated = false;

    if (passwordConfirm != password) {
      newErrors.passwordConfirm.error =
        "Password and Password Confirmation do not match.";
    } else {
      newErrors.passwordConfirm.error = "";
      newErrors.passwordConfirm.validated = true;
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
            {/* Name */}
            <CustomText style={styles.errorMessage}>
              {errors.fullName.error}
            </CustomText>
            <TextField
              onBlur={(e) => {
                validateFullName();
              }}
              onChangeText={(name) => {
                setFullName(name);
                validateFullName();
              }}
              placeholder="Full Name"
              customStyles={{ marginVertical: 0 }}
            />
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
            {/* Password Confirmation */}
            <CustomText style={styles.errorMessage}>
              {errors.passwordConfirm.error}
            </CustomText>
            <TextField
              onBlur={(e) => {
                validatePasswordConfirm();
              }}
              onChangeText={(passwordConfirm) => {
                setPasswordConfirm(passwordConfirm);
                validatePasswordConfirm();
              }}
              placeholder="Password Confirmation"
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
                  name: fullName,
                };
                login(user);
                navigation.navigate("Address Information");
              }}
            >
              Create a new Account
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

export default connect(null, mapDispatchToProps)(Signup);
