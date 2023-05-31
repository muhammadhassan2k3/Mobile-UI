import { Modal, TouchableOpacity, Text, Button, View, StatusBar } from 'react-native'
import React, { useState } from 'react'
import styles from '../Congratulations/styles'

const CongratulationsScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="red" />
            <Button title='Show Model' onPress={() => setModalVisible(!modalVisible)} />
            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.container}>
                    <View style={styles.ModalStyle}>
                        <Text style={styles.textStyle}>Congratulations!</Text>
                        <Text style={styles.innerTextStyle}>
                            Consequat velit qui adipisicing sunt do {'\n'}reprehenderit ad 
                            laborum tempor{'\n'} ullamco exercitation. Ullamco tempor{'\n'}
                            adipisicing et voluptate duis sit esse{'\n'} aliqua esse ex dolore
                            esse. Consequat {'\n'} velit qui adipisicing sunt.
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)} >
                            <Text style={styles.buttonStyle}>Click Me</Text>
                        </TouchableOpacity>
                        <Text style={styles.lastButton}>Secondary Action</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default CongratulationsScreen
