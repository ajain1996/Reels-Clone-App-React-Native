import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Colors } from '../utils/Colors';
import Carousel, { Pagination } from "react-native-snap-carousel";
import { windowWidth } from "../utils/utils";

export default function CustomTopSlider() {

    const images = [
        {
            "image": "https://cdn.pixabay.com/photo/2018/07/12/21/32/subscribe-3534409_960_720.jpg",
        },
        {
            "image": "https://your-photography.com/files/2015/10/006.jpg",
        },
        {
            "image": "https://telegra.ph/file/c96f197537da8cd588585.jpg",
        },
        {
            "image": "https://i.pinimg.com/originals/2e/1a/84/2e1a84003a533f527b2b201e5ea6ca53.jpg",
        },
        {
            "image": "https://your-photography.com/files/2015/10/006.jpg",
        },
        {
            "image": "https://telegra.ph/file/c96f197537da8cd588585.jpg",
        },
    ]


    const [index, setIndex] = useState(0);


    const CustomPagination = () => {
        return (
            <Pagination
                dotsLength={images.length}
                activeDotIndex={index}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: -80 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: -2,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.6}
                inactiveDotScale={1}
                onSnapToItem={(index) => setIndex(index)}
            />
        );
    }

    return (
        <>
            <Carousel layout={"default"} data={images}
                layoutCardOffset={`18`}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity key={index} activeOpacity={0.5} style={{
                            marginHorizontal: 16, marginBottom: 24
                        }}>
                            <Image source={{ uri: item.image }} style={{
                                height: 188, borderRadius: 16
                            }} />
                        </TouchableOpacity>
                    );
                }}
                indicatorStyle={"black"}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                activeSlideAlignment={"start"}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />
            <CustomPagination />
        </>
    )
}
