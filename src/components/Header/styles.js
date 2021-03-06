import styled from 'styled-components/native'

/*
    import { StatusBar } from 'react-native';
    const statusBarHeight = StatusBar.currentHeight;
    padding-top: ${statusBarHeight + 'px'};
*/

export const Menu = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

Menu.Icon = styled.TouchableOpacity`
    justify-content: center;
`;

Menu.Text = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    padding-left: 8px;
`;

export const LogoutIcon = styled.TouchableOpacity`
    height: 35px;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 7px;
`;

export const LogoutText = styled.Text`
    color: #0068ff;
    font-size: 17px;
    font-weight: bold;
`;

export const HeaderArea = styled.View`
    height: 70px;
    padding: 15px;
    background-color: #0068ff; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderText = styled.Text`
    font-size: 20px;
`;

HeaderText.Name = styled.Text`
   font-weight: bold;
   font-size: 20px;
`