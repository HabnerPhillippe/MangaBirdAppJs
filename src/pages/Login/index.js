import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Container, Title, InputLogin, InputPassword, Recover, LoginButton, SignUpButton, LoginText, SignText, ButtonContainer} from "./styles";
import colors from "../../themes/colors";

export default function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
      });

    const navigation = useNavigation();
  
    function screenFavorites() {
    navigation.navigate("Favorites");
  }

    return (


        <Container>
            <Title>Login to save your favorite manga 
                in the cloud.</Title>

            <InputLogin
            value={user.email}
            onChangeText={setUser}
            placeholder={'Email'}
            placeholderTextColor={colors.text_login}
            />

            <InputPassword value={user.password}
            onChangeText={setUser}
            placeholder={'Password'}
            placeholderTextColor={colors.text_login}
            />

            <ButtonContainer>

                    <LoginButton 
                    onPress={screenFavorites} 
                    underlayColor="white">
                        
                        
                            <LoginText>Log In</LoginText>
                        

                    </LoginButton> 

                
                    <SignUpButton 
                    underlayColor="white">

                        
                            <SignText>Sign up</SignText>

                    </SignUpButton>
                
            </ButtonContainer>
        
            <TouchableOpacity 
            //onPress={screenForgotPassword}
            underlayColor="white">
                <Recover>Forgot Password</Recover>
            </TouchableOpacity>
            
            <StatusBar style="auto" />
        </Container>
   
   )
    
};

