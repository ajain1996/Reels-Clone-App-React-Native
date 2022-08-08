import React, { useContext, useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Image
} from "react-native";
import { Colors } from "../utils/Colors";


const SearchInput = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}>
            <TextInput
                style={{
                    backgroundColor: Colors.INPUTFILLCOLOR, height: 50,
                    color: "white", width: "100%", paddingLeft: 50,
                    borderRadius: 10,
                }}
                onChangeText={(text) => { }}
                placeholder="Search for news"
                placeholderTextColor={Colors.ICONCOLOR}
            />
            <Image
                source={require("../../assets/search.png")}
                style={{
                    width: 20, height: 20, position: 'absolute', marginLeft: 16,
                    tintColor: Colors.ICONCOLOR,
                }}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
    },
    searchResults: {
        position: "absolute",
        zIndex: 1,
        top: 50,
    },
    singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor: "black",
        elevation: 5,
    },
});