import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import SearchInput from '../components/SearchInput';
import { Colors } from '../utils/Colors';
import CustomTopSlider from '../components/CustomTopSlider';
import { BuildCustomButtonComponent, BuildCustomTextComponent } from '../components/Components';
import { FlatList } from 'react-native-gesture-handler';

export default function ExploreScreen() {

    return (
        <ScrollView contentContainerStyle={{
            backgroundColor: Colors.WHITE,
            paddingHorizontal: 16,
        }}>
            <View style={{ alignItems: 'center' }}>
                <SearchInput />
                <CustomTopSlider />
            </View>
            <View style={{ height: 8 }} />

            <BuildCustomTextComponent
                text="Popular Creators" fs={20} color={Colors.BLUE}
                fw="bold"
            />

            <ScrollView horizontal={true} contentContainerStyle={{ marginTop: 8 }}
                showsHorizontalScrollIndicator={false}
            >
                {[
                    "https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg",
                    "https://cdn.pixabay.com/photo/2016/01/19/17/19/young-woman-1149643_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/11/22/10/47/girl-1848947_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/11/17/31/girl-1250679_960_720.jpg",
                ].map((image) => {
                    return (
                        <View style={{ marginRight: 20, flexDirection: 'column', alignItems: 'center' }}>
                            <Image source={{
                                uri: image,
                            }} style={{ width: 78, height: 78, borderRadius: 100 }} />
                            <View style={{ marginTop: 4 }} />
                            <BuildCustomTextComponent
                                text={"Lorem Ipsum"} fs={12}
                                color={Colors.BLUE}
                                fw={"bold"}
                            />
                            <View style={{ marginTop: 4 }} />
                            <BuildCustomButtonComponent
                                height={18} br={30} fs={10}
                                text="follow" width={60}
                                textColor={Colors.WHITE}
                                bgColor={Colors.ORANGE}
                                onPress={() => { }}
                            />
                        </View>
                    );
                })}
            </ScrollView>
            <View style={{ marginTop: 18 }} />

            <BuildCustomTextComponent
                text="Trending Hashtags" fs={20} color={Colors.BLUE}
                fw="bold"
            />
            {/* <ScrollView horizontal={true> */}
            <HashTapComponent />
            <View style={{ marginTop: 28 }} />

            <BuildUwoKiyaariComponent
                title="UWOkiyaari" subTitle="Challenge" views="16m"
                image="https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_960_720.jpg"
            />
            <BuildUwoKariVideosComponent
                data={[
                    "https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg",
                    "https://cdn.pixabay.com/photo/2016/01/19/17/19/young-woman-1149643_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/11/22/10/47/girl-1848947_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/11/17/31/girl-1250679_960_720.jpg",
                ]}
            />
            <View style={{ marginTop: 28 }} />

            <BuildUwoKiyaariComponent
                title="Nach Baliye" subTitle="Contest" views="19.3m"
                image="https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_960_720.jpg"
            />
            <BuildUwoKariVideosComponent
                data={[
                    "https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg",
                    "https://cdn.pixabay.com/photo/2016/01/19/17/19/young-woman-1149643_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/11/22/10/47/girl-1848947_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/11/17/31/girl-1250679_960_720.jpg",
                ]}
            />

            <View style={{ marginTop: 28 }} />

            <BuildUwoKiyaariComponent
                title="#laughterchallenge" subTitle="Trending Hashtag" views="12.5m"
                image="https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_960_720.jpg"
            />
            <BuildUwoKariVideosComponent
                data={[
                    "https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg",
                    "https://cdn.pixabay.com/photo/2016/01/19/17/19/young-woman-1149643_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/11/22/10/47/girl-1848947_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2016/03/11/17/31/girl-1250679_960_720.jpg",
                ]}
            />

            <View style={{ marginTop: 108 }} />

        </ScrollView >
    )
}

const HashTapComponent = () => {
    return (
        <ScrollView style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
                {[
                    "uwokiyaari", "#uwo",
                    "#uwohappyday",
                    "#worldlaughterday",
                ].map((item) => {
                    return (
                        <View style={{ marginRight: 8, marginTop: 8 }}>
                            <BuildCustomButtonComponent
                                text={item} fs={13} textColor={Colors.BLACK90}
                                bgColor={Colors.BLACK40} onPress={() => { }}
                                br={30} ph={14} pv={8}
                            />
                        </View>
                    );
                })}
            </View>

            <View style={{ flexDirection: 'row' }}>
                {[
                    "#uwokiyaari", "#uwolaughterchallenge",
                    "#uwochallenge", "#worldlaughterday",
                ].map((item) => {
                    return (
                        <View style={{ marginRight: 8, marginTop: 8 }}>
                            <BuildCustomButtonComponent
                                text={item} fs={13} textColor={Colors.BLACK90}
                                bgColor={Colors.BLACK40} onPress={() => { }}
                                br={30} ph={14} pv={8}
                            />
                        </View>
                    );
                })}
            </View>

            <View style={{ flexDirection: 'row' }}>
                {[
                    "#uwoday",
                    "#worldlaughterday",
                    "#uwokiyaari",
                ].map((item) => {
                    return (
                        <View style={{ marginRight: 8, marginTop: 8 }}>
                            <BuildCustomButtonComponent
                                text={item} fs={13} textColor={Colors.BLACK90}
                                bgColor={Colors.BLACK40} onPress={() => { }}
                                br={30} ph={14} pv={8}
                            />
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}


const BuildUwoKiyaariComponent = ({ title, subTitle, image, views }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image
                    source={{
                        uri: image,
                    }}
                    style={{
                        width: 38, height: 38,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: 'red'
                    }}
                />
                <View style={{ width: 8 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <BuildCustomTextComponent
                        text={title} fs={20} color={Colors.BLUE} fw="bold" mt={-6}
                    />
                    <BuildCustomTextComponent
                        text={subTitle} fs={9} color={Colors.ORANGE} mt={-2}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <BuildCustomTextComponent
                    text={views} fs={16} color={Colors.BLUE} fw="bold"
                />
                <Image
                    source={require("../../assets/forward-arrow.png")}
                    style={{ width: 20, height: 20, tintColor: Colors.ORANGE }}
                />
            </View>
        </View>
    );
}

const BuildUwoKariVideosComponent = ({ data }) => {
    return (
        <ScrollView horizontal={true} contentContainerStyle={{ marginTop: 8 }}
            showsHorizontalScrollIndicator={false}
        >
            {data.map((image, index) => {
                return (
                    <View style={{ marginRight: 10, flexDirection: 'column', alignItems: 'center' }}
                        key={index}
                    >
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 115, height: 175, borderRadius: 8,
                                position: 'relative',
                            }}
                        />
                        <View style={{
                            width: 36, height: 36, backgroundColor: "white",
                            position: 'absolute', borderRadius: 100,
                            bottom: 10, right: 10
                        }} />
                    </View>
                );
            })}
        </ScrollView>
    );
}
