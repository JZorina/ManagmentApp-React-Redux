import React,{Component} from 'react';
import {Card,CardSection,Input,Button,Spinner} from './common';
import {Picker,Text,View} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
class EmployeeCreate extends Component{

    render(){
      //  const {name,phone}=this.props;

        return(
            <Card>
                <CardSection>
                    <Input
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={text=>this.props.employeeUpdate({prop:'name', value:text})}
                    />
                </CardSection>
               
                <CardSection>
                <Input
                    label="Phone"
                    placeholder="0521234567"
                    value={this.props.phone}
                    onChangeText={text=>this.props.employeeUpdate({prop:'phone', value:text})}
                    />
                </CardSection>

                <CardSection style={{padding:13}}>
                    <Text style={styles.pickerTextStyle}>Shift:</Text>
                    <View style={{flex:2, paddingLeft:85}}>
                        <Picker
                        style={{flex:1}}

                        selectedValue={this.props.shift}
                        onValueChange={day=>this.props.employeeUpdate({prop:'shift', value:day})}
                        >
                            <Picker.Item label="Monday" value="Monday"/>
                            <Picker.Item label="Tuesday" value="Tuesday"/>
                            <Picker.Item label="Wednesday" value="Wednesday"/>
                            <Picker.Item label="Thursday" value="Thursday"/>
                            <Picker.Item label="Friday" value="Friday"/>
                            <Picker.Item label="Saturday" value="Saturday"/>
                            <Picker.Item label="Sunday" value="Sunday"/>
                        </Picker>
                    </View>
                </CardSection>


                <CardSection>
                <Button>
                    Create
                </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles={
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:20
    }
}

const mapStateToProps=(state)=>{
    return {
        name:state.EmployeeForm.name,
        phone:state.EmployeeForm.phone,
        shift:state.EmployeeForm.shift
        // loading:state.auth.loading
    };
};
 export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate);
//export default EmployeeCreate;