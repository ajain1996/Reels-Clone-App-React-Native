import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../utils/Colors";

export const BuildCustomTextComponent = ({ text, fs = 14, fw = "normal", textAlign, color, mt }) => {
    return (
        <Text style={{
            fontSize: fs, fontWeight: fw, textAlign: textAlign,
            color: color, marginTop: mt
        }}>
            {text}
        </Text>
    );
}

export const BuildCustomButtonComponent = ({
    text, fs = 16, fw, textAlign, bgColor, textColor, width, height, onPress, br = 0,
    padding, ph, pv,
}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={{
            width: width, height: height, backgroundColor: bgColor, padding: padding,
            justifyContent: 'center', alignItems: 'center', borderRadius: br,
            paddingHorizontal: ph, paddingVertical: pv,
        }}>
            <BuildCustomTextComponent
                textAlign={textAlign} fs={fs}
                text={text} color={textColor}
                fw={fw}
            />
        </TouchableOpacity>
    );
}

export const BuildImageComponent = ({ image, width, height, br, color }) => {
    return (
        <Image
            source={image}
            style={{ width: width, height: height, borderRadius: br, tintColor: color }}
        />
    );
}

export const BuildAvatarComponent = ({ image, width, height, br, bgColor, iconColor }) => {
    return (
        <View style={{
            width: width, height: height, borderRadius: br, flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor,
        }}>
            <Image
                source={image}
                style={{
                    width: width - 30, height: height - 30,
                    tintColor: iconColor,
                }}
            />
        </View>
    );
}

export const AvatarTextCardComponent = ({
    image, width, height, bgColor, text, textColor, fs, fw, iconColor, br,
}) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <BuildAvatarComponent
                image={image}
                width={width} height={height} bgColor={bgColor}
                br={br} iconColor={iconColor}
            />
            <BuildCustomTextComponent
                text={text} fs={fs} color={textColor} fw={fw} mt={8}
            />
        </View>
    );
}

export const ThreeTextComponent = ({ text1, text2, text3, fs, fw }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <BuildCustomTextComponent
                text={text1} fs={fs} color={Colors.ORANGE} fw={fw}
            />
            <BuildCustomTextComponent
                text={text2} fs={fs} color={Colors.BLUE} fw={fw}
            />
            <View style={{ width: 8 }} />
            <BuildCustomTextComponent
                text={text3} fs={fs} color={Colors.BLUE} fw={fw}
            />
        </View>
    );
}
