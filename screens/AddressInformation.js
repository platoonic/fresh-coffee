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
import Dropdown from "../components/UI/Dropdown";
// Redux
import { connect } from "react-redux";
import { addAddress } from "../redux/actions/user";
// Supported Delivery Locations
import supported_locations from "../components/utils/supportedLocations";

function AddressInformation({ navigation, addAddress, user }) {
  let userLoggedIn = true;
  if (Object.keys(user).length == 0) {
    userLoggedIn = false;
  }
  const [fullName, setFullName] = useState("");
  const [governate, setGovernate] = useState("");
  const [area, setArea] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    fullName: { error: "", validated: false },
    addressLine1: { error: "", validated: false },
    addressLine2: { error: "", validated: false },
    phoneNumber: { error: "", validated: false },
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

  // Phone Number Validation
  const validatePhoneNumber = () => {
    let newErrors = Object.assign({}, errors);
    newErrors.phoneNumber.validated = false;

    if (phoneNumber == "") {
      newErrors.phoneNumber.error = "Hey you left me empty!";
    } else if (!/^\d+$/.test(phoneNumber)) {
      newErrors.phoneNumber.error = "Phone Number must consist of only Numbers";
    } else {
      newErrors.phoneNumber.error = "";
      newErrors.phoneNumber.validated = true;
    }

    setErrors(newErrors);
  };

  // Address Lines Validators
  const validateAddressLine1 = () => {
    let newErrors = Object.assign({}, errors);
    newErrors.addressLine1.validated = false;

    if (addressLine1 == "") {
      newErrors.addressLine1.error = "Hey you left me empty!";
    } else {
      newErrors.addressLine1.error = "";
      newErrors.addressLine1.validated = true;
    }

    setErrors(newErrors);
  };

  // Address Lines Validators
  const validateAddressLine2 = () => {
    let newErrors = Object.assign({}, errors);
    newErrors.addressLine2.validated = false;

    if (addressLine2 == "") {
      newErrors.addressLine2.error = "Hey you left me empty!";
    } else {
      newErrors.addressLine2.error = "";
      newErrors.addressLine2.validated = true;
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
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={Keyboard.dismiss}
        >
          <View style={{ flex: 1 }}>
            {/* Name (only if guest) */}
            {!userLoggedIn && (
              <>
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
              </>
            )}
            {/* Governate */}
            <Dropdown
              title="Governate"
              items={["Alexandria", "Cairo"]}
              customStyle={{ marginTop: 20, marginBottom: 0 }}
              onChange={(value) => {
                setGovernate(value);
              }}
            />
            {/* Area */}
            <Dropdown
              title="Area"
              items={supported_locations}
              customStyle={{ marginTop: 20, marginBottom: 0 }}
              onChange={(value) => {
                setArea(value);
              }}
            />
            {/* Address Line 1 */}
            <CustomText style={styles.errorMessage}>
              {errors.addressLine1.error}
            </CustomText>
            <TextField
              onBlur={(e) => {
                validateAddressLine1();
              }}
              onChangeText={(addressLine1) => {
                setAddressLine1(addressLine1);
                validateAddressLine1();
              }}
              placeholder="Address Line 1"
              customStyles={{ marginVertical: 0 }}
            />
            {/* Address Line 2 */}
            <CustomText style={styles.errorMessage}>
              {errors.addressLine2.error}
            </CustomText>
            <TextField
              onBlur={(e) => {
                validateAddressLine2();
              }}
              onChangeText={(addressLine2) => {
                setAddressLine2(addressLine2);
                validateAddressLine2();
              }}
              placeholder="Address Line 2"
              customStyles={{ marginVertical: 0 }}
            />
            {/* Phone Number */}
            <CustomText style={styles.errorMessage}>
              {errors.phoneNumber.error}
            </CustomText>
            <View>
              <CustomText style={styles.countryCode}>+20</CustomText>
              <TextField
                onBlur={(e) => {
                  validatePhoneNumber();
                }}
                onChangeText={(phoneNumber) => {
                  setPhoneNumber(phoneNumber);
                  validatePhoneNumber();
                }}
                placeholder="Phone Number"
                customStyles={{ marginVertical: 0, paddingLeft: 50 }}
              />
            </View>
            {/* Login Button */}
            <Button
              customStyles={{ marginTop: 20 }}
              disabled={formDisabled}
              onPress={() => {
                const address = {
                  fullName,
                  governate,
                  area,
                  addressLine1,
                  addressLine2,
                  phoneNumber,
                };
                addAddress(address);
              }}
            >
              Continue to Payment
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
  countryCode: {
    position: "absolute",
    zIndex: 99,
    top: 19,
    left: 12,
  },
});

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addAddress: (address) => {
    dispatch(addAddress(address));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressInformation);
