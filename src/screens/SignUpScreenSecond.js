import React from 'react';
import {Text, View, StyleSheet, TextInput, Alert, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import { Formik} from 'formik';
import * as Yup from 'yup';



export default class SignUpFirstScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.containerWrapper}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image style={styles.logo} source={require('../../assets/Logo.png')}/>
                        <Text style={styles.logo_text}>BOOKING</Text>
                        <Text style={styles.title}>Sign up</Text>
                        <Formik
                            initialValues={{ firstName: '', secondName: '', userName: '' }}
                            validationSchema={Yup.object({
                                firstName: Yup.string()
                                    .required('Required first name'),
                                secondName: Yup.string()
                                    .required('Required second name'),
                                userName: Yup.string()
                                    .required('Required user name'),
                            })}
                            onSubmit={(values, formikActions) => {
                                setTimeout(() => {
                                    Alert.alert(JSON.stringify(values));
                                    formikActions.setSubmitting(false);
                                }, 500);
                            }}>
                            {props => (
                                <View>
                                    <Text style={styles.label}>First name</Text>
                                    <TextInput
                                        onChangeText={props.handleChange('firstName')}
                                        onBlur={props.handleBlur('firstName')}
                                        value={props.values.email}
                                        placeholder="Joe"
                                        style={styles.input}
                                        autoFocus
                                        onSubmitEditing={() => {
                                            this.secondName.focus()
                                        }}
                                    />
                                    {props.touched.firstName && props.errors.firstName ? (
                                        <Text style={styles.error}>{props.errors.firstName}</Text>
                                    ) : null}
                                    <Text style={styles.label}>Second name</Text>
                                    <TextInput
                                        onChangeText={props.handleChange('secondName')}
                                        onBlur={props.handleBlur('secondName')}
                                        value={props.values.password}
                                        placeholder="Doe"
                                        style={styles.input}
                                        secureTextEntry
                                        ref={el => this.secondName = el}
                                        onSubmitEditing={() => {
                                            this.userName.focus()
                                        }}
                                    />
                                    {props.touched.secondName && props.errors.secondName ? (
                                        <Text style={styles.error}>{props.errors.secondName}</Text>
                                    ) : null}
                                    <Text style={styles.label}>Username</Text>
                                    <TextInput
                                        onChangeText={props.handleChange('userName')}
                                        onBlur={props.handleBlur('userName')}
                                        value={props.values.userName}
                                        placeholder="JoeDoe"
                                        style={styles.input}
                                        secureTextEntry
                                        ref={el => this.userName = el}
                                    />
                                    {props.touched.userName && props.errors.userName ? (
                                        <Text style={styles.error}>{props.errors.userName}</Text>
                                    ) : null}
                                    <Button
                                        onPress={props.handleSubmit}
                                        color="#009688"
                                        mode="contained"
                                        loading={props.isSubmitting}
                                        disabled={props.isSubmitting}
                                        style={styles.button}>
                                        <Text style={{lineHeight: 30}}>Next</Text>
                                    </Button>
                                </View>
                            )}
                        </Formik>
                        <Text style={styles.question}>Already have an account?</Text>
                        <Text style={styles.question}>Sign in</Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        paddingTop: 50,
        paddingBottom:10,
    },
    logo:{
        height: 100,
        width: 100,
    },
    logo_text:{
        color: '#575757',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
        fontFamily: 'montserratMed',
    },
    title: {
        margin: 24,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'montserratBold',
        color:'#181818'
    },
    error: {
        marginTop:5,
        fontSize: 10,
        color: '#FE6A6A',
        fontFamily: 'montserratBold',
    },
    input: {
        height: 40,
        paddingHorizontal: 3,
        width: 280,
        borderColor: '#fff',
        borderBottomColor: '#009688',
        borderWidth: 2,
        backgroundColor: '#fff',
        fontFamily: 'montserratBold',

    },
    label:{
        fontSize: 13,
        fontWeight: 'normal',
        marginTop: 15,
        color:'#181818',
        fontFamily: 'montserratBold',

    },
    button:{
        borderRadius: 5,
        marginBottom: 30,
        marginTop: 20,
        fontFamily: 'montserratBold',
    },
    question:{
        color: '#009688',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'montserratMed',
        lineHeight: 16,
    }
});
