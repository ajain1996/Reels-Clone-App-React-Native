import React from 'react';
import { View, Text, ScrollView, Image, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Button, Card } from 'react-native-paper';
import { AvatarTextCardComponent, BuildAvatarComponent, BuildCustomButtonComponent, BuildCustomTextComponent, BuildImageComponent, ThreeTextComponent } from '../components/Components';
import { Colors } from '../utils/Colors';
import { windowWidth } from '../utils/utils';

export default function UwoServices() {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: Colors.BACKGROUND }}>
            <View style={{ marginTop: 30 }} />
            <ThreeTextComponent
                text1={"U"} text2={"WO"} text3={"Services"} fs={40} fw="600"
            />
            <View style={{ marginTop: 10 }} />

            <BuildCustomButtonComponent
                text={"Ad/Offers Scroller"} fs={20} br={12}
                textColor={Colors.WHITE} fw={"500"}
                width={windowWidth - 24} height={120}
                bgColor={Colors.BLUE} onPress={() => { }}
            />

            <Card style={{
                width: '98%', marginTop: 12, marginHorizontal: 8, elevation: 4,
                backgroundColor: 'white'
            }}>
                <View horizontal={true}
                    style={{
                        paddingHorizontal: 16, paddingVertical: 12,
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}
                >
                    <AvatarTextCardComponent
                        image={require("../../assets/mobile.png")}
                        width={62} height={62}
                        bgColor={Colors.BLUE}
                        iconColor={Colors.WHITE}
                        br={100} fw={"500"}
                        text={"Recharge"} fs={13}
                        textColor={Colors.BLUE}
                    />

                    <AvatarTextCardComponent
                        image={require("../../assets/flight.png")}
                        width={62} height={62}
                        bgColor={Colors.BLUE}
                        iconColor={Colors.WHITE}
                        br={100} fw={"500"}
                        text={"Travel"} fs={13}
                        textColor={Colors.BLUE}
                    />

                    <AvatarTextCardComponent
                        image={require("../../assets/shopping.png")}
                        width={62} height={62}
                        bgColor={Colors.BLUE}
                        iconColor={Colors.WHITE}
                        br={100} fw={"500"}
                        text={"Shopping"} fs={13}
                        textColor={Colors.BLUE}
                    />

                    <AvatarTextCardComponent
                        image={require("../../assets/stores.png")}
                        width={62} height={62}
                        bgColor={Colors.BLUE}
                        iconColor={Colors.WHITE}
                        br={100} fw={"500"}
                        text={"Stores"} fs={13}
                        textColor={Colors.BLUE}
                    />

                    <AvatarTextCardComponent
                        image={require("../../assets/deals.png")}
                        width={62} height={62}
                        bgColor={Colors.BLUE}
                        iconColor={Colors.WHITE}
                        br={100} fw={"500"}
                        text={"Deals"} fs={13}
                        textColor={Colors.BLUE}
                    />
                </View>
            </Card>
            <View style={{ marginTop: 10 }} />

            <Card style={{ width: '95%', padding: 10, borderRadius: 12, backgroundColor: 'white' }}>
                <Build3TitleComponent
                    text1={"U"} text2={"WO"} text3={"Games"} fs={30}
                />
                <View style={{ height: 10 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <BuildUwoGameComponent
                        image={require("../../assets/arcade.jpg")}
                        text="Arcade"
                    />

                    <BuildUwoGameComponent
                        image={require("../../assets/action-games.jpg")}
                        text="Action"
                    />
                </View>
                <View style={{ height: 10 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <BuildUwoGameComponent
                        image={require("../../assets/puzzle-games.jpg")}
                        text="Puzzle"
                    />

                    <BuildUwoGameComponent
                        image={require("../../assets/sports-games.jpg")}
                        text="Sports"
                    />
                </View>
            </Card>
            <View style={{ height: 10 }} />

            <BuildCustomButtonComponent
                text={"Ad Banner"} fs={20} br={12}
                textColor={Colors.WHITE} fw={"500"}
                width={windowWidth - 24} height={120}
                bgColor={Colors.BLUE} onPress={() => { }}
            />
            <View style={{ height: 16 }} />

            <Card style={{ width: '94%', padding: 10, borderRadius: 12, backgroundColor: 'white' }}>
                <Build3TitleComponent
                    text1={""} text2={"Mobile"} text3={"Recharge"} fs={26} fw={"600"}
                />
                <View style={{ height: 16 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airtel.png")}
                        text="Airtel" viewHeight={72}
                        width={50} height={50}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/jio.png")}
                        text="Jio" viewHeight={72}
                        width={47} height={47}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/vi.png")}
                        text="VI" viewHeight={72}
                        width={40} height={40}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/bsnl.jpg")}
                        text="BSNL" viewHeight={72}
                        width={50} height={50}
                    />
                </View>
            </Card>
            <View style={{ height: 16 }} />

            <Card style={{ width: '94%', padding: 10, borderRadius: 12, backgroundColor: 'white' }}>
                <Build3TitleComponent
                    text1={"Featured"} text2={""} text3={""} fs={26} fw={"600"}
                />
                <View style={{ height: 16 }} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <BuildFeaturedComponent
                        image={require("../../assets/rechargeoffer.png")}
                        text={`10% Off \n on Recharge`}
                        width={46} height={46}
                    />

                    <BuildFeaturedComponent
                        image={require("../../assets/restaurantoffer.png")}
                        text={`60% Off \n on Restaurants`}
                        width={46} height={46}
                    />

                    <BuildFeaturedComponent
                        image={require("../../assets/traveloffer.png")}
                        text={`20% Off \n on Travel`}
                        width={46} height={46}
                    />

                    <BuildFeaturedComponent
                        image={require("../../assets/rechargeoffer.png")}
                        text={`10% Off \n on Recharge`}
                        width={46} height={46}
                    />

                    <BuildFeaturedComponent
                        image={require("../../assets/restaurantoffer.png")}
                        text={`60% Off \n on Restaurants`}
                        width={46} height={46}
                    />

                    <BuildFeaturedComponent
                        image={require("../../assets/traveloffer.png")}
                        text={`20% Off \n on Travel`}
                        width={46} height={46}
                    />
                </ScrollView>
            </Card>

            <View style={{ marginTop: 16 }} />

            <Card style={{ width: '94%', padding: 10, borderRadius: 12, backgroundColor: 'white' }}>
                <BuildCustomTextComponent
                    text={"Travel"} fs={26} fw={"600"} color={Colors.BLUE}
                />
                <View style={{ height: 16 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airplane.png")}
                        text="Flights" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/trains.png")}
                        text="Trains" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/bus.png")}
                        text="Bus" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/metro.png")}
                        text="Metro" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />
                </View>
                <View style={{ height: 16 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/hotels.png")}
                        text="Hotels" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/lounge.png")}
                        text="Lounge" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/local.png")}
                        text="Local" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/cabs.png")}
                        text="Cabs" imageColor={Colors.ORANGE}
                        width={38} height={38} viewHeight={66}
                    />
                </View>
            </Card>
            <View style={{ height: 16 }} />

            <BuildCustomButtonComponent
                text={"Ad Banner"} fs={20} br={12}
                textColor={Colors.WHITE} fw={"500"}
                width={windowWidth - 24} height={120}
                bgColor={Colors.BLUE} onPress={() => { }}
            />
            <View style={{ height: 16 }} />

            <Card style={{ width: '94%', padding: 10, borderRadius: 12, backgroundColor: 'white' }}>
                <Build3TitleComponent
                    text1={"Mini App Store"} text2={""} text3={""} fs={26} fw={"600"}
                />
                <View style={{ height: 16 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airtel.png")}
                        text="Airtel" viewHeight={72}
                        width={50} height={50}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/jio.png")}
                        text="Jio" viewHeight={72}
                        width={47} height={47}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/vi.png")}
                        text="VI" viewHeight={72}
                        width={40} height={40}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/bsnl.jpg")}
                        text="BSNL" viewHeight={72}
                        width={50} height={50}
                    />
                </View>
                <View style={{ height: 22 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airtel.png")}
                        text="Airtel" viewHeight={72}
                        width={50} height={50}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/jio.png")}
                        text="Jio" viewHeight={72}
                        width={47} height={47}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/vi.png")}
                        text="VI" viewHeight={72}
                        width={40} height={40}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/bsnl.jpg")}
                        text="BSNL" viewHeight={72}
                        width={50} height={50}
                    />
                </View>
                <View style={{ height: 22 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airtel.png")}
                        text="Airtel" viewHeight={72}
                        width={50} height={50}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/jio.png")}
                        text="Jio" viewHeight={72}
                        width={47} height={47}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/vi.png")}
                        text="VI" viewHeight={72}
                        width={40} height={40}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/bsnl.jpg")}
                        text="BSNL" viewHeight={72}
                        width={50} height={50}
                    />
                </View>
            </Card>
            <View style={{ height: 16 }} />

            <Card style={{ width: '94%', padding: 10, borderRadius: 12, backgroundColor: 'white', }}>
                <BuildCustomTextComponent
                    text={"Deals for you"} fs={26} fw={"600"} color={Colors.BLUE}
                />
                <View style={{ height: 16 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airplane.png")}
                        text="Airtel" viewHeight={72}
                        width={50} height={50}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/metro.png")}
                        text="Jio" viewHeight={72}
                        width={47} height={47}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/local.png")}
                        text="VI" viewHeight={72}
                        width={40} height={40}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/trains.png")}
                        text="BSNL" viewHeight={72}
                        width={50} height={50}
                    />
                </View>
                <View style={{ height: 22 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airtel.png")}
                        text="Airtel" viewHeight={72}
                        width={50} height={50}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/jio.png")}
                        text="Jio" viewHeight={72}
                        width={47} height={47}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/vi.png")}
                        text="VI" viewHeight={72}
                        width={40} height={40}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/bsnl.jpg")}
                        text="BSNL" viewHeight={72}
                        width={50} height={50}
                    />
                </View>
                <View style={{ height: 22 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BuildMobileReacharge
                        image={require("../../assets/airtel.png")}
                        text="Airtel" viewHeight={72}
                        width={50} height={50}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/jio.png")}
                        text="Jio" viewHeight={72}
                        width={47} height={47}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/vi.png")}
                        text="VI" viewHeight={72}
                        width={40} height={40}
                    />

                    <BuildMobileReacharge
                        image={require("../../assets/bsnl.jpg")}
                        text="BSNL" viewHeight={72}
                        width={50} height={50}
                    />
                </View>

            </Card>

            <View style={{ height: 100 }} />
        </ScrollView>
    )
}


const BuildUwoGameComponent = ({ image, text }) => {
    return (
        <View style={{
            width: '48.8%', backgroundColor: Colors.BLUE,
            justifyContent: 'center', alignItems: 'center',
            borderRadius: 15, paddingBottom: 8,
            borderWidth: 1, borderColor: Colors.BLUE,
        }}>
            <Image
                source={image}
                style={{
                    width: "100%", height: 100,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                }}
            />
            <View style={{ marginTop: 8 }} />
            <BuildCustomTextComponent
                text={text} fs={16} color={Colors.WHITE} fw="500"
            />
        </View>
    );
}

const BuildMobileReacharge = ({ image, text, width, height, imageColor, viewHeight }) => {
    return (
        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', height: viewHeight }}>
            <Image
                source={image}
                style={{ width: width, height: height, tintColor: imageColor }}
            />
            <BuildCustomTextComponent
                text={text} fs={14} color={Colors.BLUE} fw={"700"}
            />
        </TouchableOpacity>
    );
}

const BuildFeaturedComponent = ({ image, text, width, height }) => {
    return (
        <TouchableOpacity style={{
            justifyContent: 'center', alignItems: 'center', height: 120,
            backgroundColor: Colors.BACKGROUND, paddingHorizontal: 8, paddingTop: 16,
            marginRight: 10, paddingBottom: 10, width: 95, borderRadius: 10
        }}>
            <Image
                source={image}
                style={{ width: width, height: height, tintColor: Colors.BLUE }}
            />
            <View style={{ height: 20 }} />
            <BuildCustomTextComponent
                text={text} fs={10.5} color={Colors.ORANGE} fw={"500"} mt={-6}
                textAlign='center'
            />
        </TouchableOpacity>
    );
}

const Build3TitleComponent = ({ text1, text2, text3, fs, fw }) => {
    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            paddingHorizontal: 10,
        }}>
            <ThreeTextComponent
                text1={text1} text2={text2} text3={text3} fs={fs} fw={fw}
            />
            <BuildImageComponent
                image={require("../../assets/forward-arrow.png")}
                width={20} height={20} br={0} color={Colors.BLUE}
            />
        </View>
    );
}
