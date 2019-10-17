import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Card,CardSection,Input,Button} from './common';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';
class LoginForm extends Component{
    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroungColor:'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }
    onEmailChange(text){  
        console.log("on Email changed before");
  
        this.props.emailChanged(text);
        console.log("on Email changed after");
    }
    onPasswordChange(text){  
        console.log("on password changed before");
  
        this.props.passwordChanged(text);
        console.log("on password changed after");
    }
    onButtonPress(){
        const {email,password}=this.props;
        this.props.loginUser({email,password});
    }
    render(){
        console.log("LoginForm");
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    <Button
                    onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>

            </Card>
        )
    }
}

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}
const mapStateToProps=(state)=>{
    return {
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error
    };
};

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);