import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp() {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);

    const handleOnPress = () => {
        const user = {
            name,
            email,
            password,
            newsletterAllowed: checkBox,
        }
        AsyncStorage.setItem('userData', JSON.stringify(user))
        let validEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (name && email && password && email.match(validEmail)) {
            navigation.navigate('LogIn');
        }
    }

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <AntDesign name="close" color={"#BDBDBD"} size={16} onPress={() => alert('Back')} />
            <Text style={styles.headerText}>Sign Up</Text>
            <Text
                onPress={() => navigation.navigate('LogIn')}
                style={styles.loginStyles}>Login</Text>
        </View>
    )

    const renderName = () => (
        <TextInput
            style={styles.inputStyles}
            placeholder="Name"
            value={name}
            onChangeText={(txt) => setName(txt)}
            autoCorrect={false}
            autoCapitalize={false}
        />
    )

    const renderEmail = () => (
        <TextInput
            placeholder="Email"
            style={styles.inputStyles}
            value={email}
            onChangeText={(txt) => setEmail(txt)}
            autoCorrect={false}
            autoCapitalize={false}
        />
    )

    const renderPassword = () => (
        <View style={styles.passwordContainer}>
            <TextInput
                placeholder="Password"
                style={styles.passwordFieldStyles}
                value={password}
                onChangeText={(txt) => setPassword(txt)}
                autoCorrect={false}
                autoCapitalize={false}
                secureTextEntry={hidePassword}
            />

            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Text style={styles.passwordButtonText}>{hidePassword ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
        </View>
    )

    const renderCheckBox = () => (
        <CheckBox
            checked={checkBox}
            title='I would like to recive your news letter and other promotional information'
            textStyle={styles.checkTextStyle}
            containerStyle={styles.checkBoxStyle}
            onPress={() => setCheckBox(!checkBox)}
            activeOpacity={0.8}
        />
    )

    const renderSignup = () => (
        <Button
            title={'Sign Up'}
            containerStyle={{ marginTop: 30 }}
            buttonStyle={styles.buttonStyle}
            onPress={handleOnPress}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderName()}
            {renderEmail()}
            {renderPassword()}
            {renderCheckBox()}
            {renderSignup()}
        </SafeAreaView>
    )
}

export default SignUp;
