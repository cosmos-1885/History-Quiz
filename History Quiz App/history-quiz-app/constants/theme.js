import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#FCFAF5",
    secondary: '#97DDCA',
    accent: '#3498db',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    blue: "#3068B1",
    blue_green: "#97DDCA",
    background: "#FCFAF5"
}


export const SIZES = {
    base: 10,
    width,
    height
}