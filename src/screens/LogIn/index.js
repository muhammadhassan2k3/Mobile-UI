import React, { useState, useEffect } from "react";

import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogIn = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidPassword, setInvalidPassword] = useState(false);


    const getItemFromStorage = async () => {
        return await AsyncStorage.getItem("userData");
    };

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const loginFunc = async () => {
        let checData = JSON.parse(await getItemFromStorage());
        console.log("email = ", checData.email, checData.password);
        const emailData = String(checData?.email) === String(email);
        const passData = String(checData?.password) === String(password);
        if (emailData && passData && email !== "" && password !== "") {
            navigation.navigate("MyTabs");
        } else {
            setInvalidPassword(true);
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Log In</Text>

            <TextInput
                placeholder="Email"
                style={styles.inputStyles}
                keyboardType={"email-address"}
                value={email}
                onChangeText={(txt) => setEmail(txt)}
                autoCorrect={false}
                autoCapitalize={false}
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    placeholder="Password"
                    style={styles.passwordFieldStyles}
                    autoCorrect={false}
                    autoCapitalize={false}
                    secureTextEntry={hidePassword}
                    value={password}
                    onChangeText={(txt) => setPassword(txt)}
                />

                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Text style={styles.passwordButtonText}>
                        {hidePassword ? "Show" : "Hide"}
                    </Text>
                </TouchableOpacity>
            </View>
            {
                invalidPassword && (
                    <View style={{ borderColor: 'red', backgroundColor: '#F8D7DB', marginHorizontal: 15, borderRadius: 8, marginTop: 20 }}>
                        <Text style={{ fontSize: 20, color: 'red', marginVertical: 15, marginHorizontal: 15, }}>Invalid Email or Password</Text>
                    </View>
                )
            }

            <Button
                title={"Log In"}
                containerStyle={{ marginTop: 167 }}
                buttonStyle={styles.buttonStyle}
                onPress={loginFunc}
            />
            <Text onPress={() => alert("Forgot pressed")} style={styles.forgotStyles}>
                Forgot your password?
            </Text>
        </SafeAreaView>
    );
};

export default LogIn;