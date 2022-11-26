import styled from 'styled-components/native';
import colors from '../../themes/colors.js';

export const ButtonContainer = styled.View`
display: flex;
width: 100%;
flex-direction: row;
flex-wrap: nowrap;
text-align: center;
align-items: center;
justify-content: space-between;
padding-inline: 30px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background_login};
    align-items: center;
    justify-content: center;
`;

export const LoginButton = styled.TouchableOpacity`
    background-color:${colors.primary};
    width:163px;
    height:45px;
    margin-top: 10px;
`;
export const SignUpButton = styled.TouchableOpacity`
    background-color:${colors.primary};
    width:163px;
    height:45px;
    margin-top: 10px;
`;

export const LoginText = styled.Text`
    color:${colors.title_login};
    text-align: center;
    margin-top: 10px;
`;
export const SignText = styled.Text`
    color:${colors.title_login};
    text-align: center;
    margin-top: 10px;
`;

export const Recover = styled.Text`
    color:${colors.title_login};
    border-bottom-width:1px;
    margin-top: 25px;
`;

export const InputLogin = styled.TextInput`

        border-bottom-width:1px;
        margin-bottom: 15px;
        margin-top:3px;
        padding-top:3px;
        padding:10px;
        width:350px;
        font-size:18px;
        color: ${colors.text_login};  
`;
export const InputPassword = styled.TextInput`

        border-bottom-width:1px;
        margin-bottom: 15px;
        margin-top:3px;
        padding-top:3px;
        padding:10px;
        width:350px;
        font-size:18px;
        color: ${colors.text_login};
`;
export const Title = styled.Text`
        color:${colors.primary};
        font-size: 17px;
        font-weight:700;
        text-align: left;
        margin-bottom:15px;
        position: absolute;
        top: 0;
        margin-top: -10px;
        padding:50px;
`;
