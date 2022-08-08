/* Libraries */
import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Dimensions, ActivityIndicator, StatusBar, Platform, Alert, ToastAndroid } from 'react-native';
import NetInfo from '@react-native-community/netinfo'
import Video from 'react-native-video';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import { Portal, Modal } from 'react-native-paper';
import Swiper from 'react-native-swiper'

// ICONS IMPORT
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

// THEME IMPORT
import * as theme from '../../Constants/theme';

// HELPER IMPORT
import Helper from '../../Constants/helper';
import { Colors } from '../../utils/Colors';
import { fetchVideoFromAPI } from '../../utils/API';
import { windowHeight, windowWidth } from '../../utils/utils';
import { ScrollView } from 'react-native-gesture-handler';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function Home({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [isPaused, setIsPaused] = useState(false);
    const [isPlayPauseModalVisible, setIsPausedModal] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const animateValue = new Animated.Value(0);

    const rotate = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const translateX = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [WIDTH, -WIDTH],
    });

    useEffect(() => {
        setLoading(true);
        fetchVideoFromAPI("fbid", (response, code) => {
            setLoading(false);
            if (code === "200") {
                setVideos(response);
            }
        });
    }, []);


    return (
        loading
            ? <View style={{
                width: windowWidth, height: windowHeight,
                justifyContent: 'center', alignItems: 'center',
            }}>
                <ActivityIndicator />
            </View>
            : <>
                <StatusBar barStyle="light-content" />
                {/* <SwiperFlatList
                    showsVerticalScrollIndicator={false}
                    data={videos}
                    vertical={true}
                    renderItem={({ item, index }) => {
                        return (
                            <BuildVideoFeedComponent
                                item={item} isPaused={isPaused}
                                translateX={translateX} key={item.id}
                                rotate={rotate} navigation={navigation}
                                setIsPaused={setIsPaused} index={index}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                isPlayPauseModalVisible={isPlayPauseModalVisible}
                                setIsPausedModal={setIsPausedModal}
                            />
                        );
                    }}
                    onChangeIndex={({ index }) => {
                        setCurrentIndex(index)
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    snapToInterval={HEIGHT}
                    decelerationRate="fast"
                /> */}
                <Swiper style={styles.wrapper} showsButtons={false} horizontal={false}
                    onIndexChanged={(index) => {
                        // console.log("\n\n \n\n aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                        // console.log("\n\n \n\n aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                        // console.log(index);
                        setCurrentIndex(index)
                    }}
                    showsPagination={false}
                >
                    {
                        videos?.map((item, index) => {
                            return (
                                <BuildVideoFeedComponent
                                    item={item} isPaused={isPaused}
                                    translateX={translateX} key={item.id}
                                    rotate={rotate}
                                    navigation={navigation}
                                    setIsPaused={setIsPaused} index={index}
                                    currentIndex={currentIndex}
                                    setCurrentIndex={setCurrentIndex}
                                    isPlayPauseModalVisible={isPlayPauseModalVisible}
                                    setIsPausedModal={setIsPausedModal}
                                />
                            );
                        })
                    }
                </Swiper>
            </>
    );
}


const BuildVideoFeedComponent = ({
    item, isPaused, translateX, rotate, navigation, setIsPaused, index, currentIndex, isPlayPauseModalVisible, setIsPausedModal
}) => {

    const videoRef = useRef(null);

    const [showIcon, setShowIcon] = useState(false);
    const [isInternet, setIsInternet] = useState(false);

    useEffect(() => {
        if (!!videoRef.current) {
            videoRef.current.seek(0);
        }
        checkConnectivity();
    }, [currentIndex, isInternet]);

    useEffect(() => {
        setInterval(() => {
            setShowIcon(false);
        }, 4000);
    }, []);

    const onBuffer = (e) => {
        console.log("Bufferring....");
    }

    const onError = (e) => {
        console.log("Error raised", e);
    }

    const checkConnectivity = () => {
        // For Android devices
        NetInfo.addEventListener(state => {
            if (state) {
                setIsInternet(true);
            } else {
                setIsInternet(false);
                ToastAndroid.show('Your did not select any Image!', ToastAndroid.SHORT);
            }
        });
    };

    return (
        !isInternet
            ? <View style={{
                width: windowWidth, height: windowHeight,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Text>No Internet Connection</Text>
            </View>
            : <>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        width: WIDTH, height: HEIGHT, position: 'relative',
                    }}
                    onPress={() => {
                        setIsPaused(!isPaused);
                        setShowIcon(true);
                        setIsPausedModal(!isPlayPauseModalVisible);
                        checkConnectivity();
                    }}
                >
                    <Video
                        source={{ uri: item.video }}
                        poster={item.thum}
                        posterResizeMode="cover"
                        style={{ ...styles.videoPlayer }}
                        resizeMode={'cover'}
                        repeat={true}
                        ref={videoRef}
                        rate={1}
                        onBuffer={onBuffer}
                        onError={onError}
                        repeat
                        paused={currentIndex !== index ? true : isPaused}
                        selectedVideoTrack={{
                            type: "resolution",
                            value: 360
                        }}
                    />
                    {/* CAMERA ICON TO CREATE VIDEO */}
                    <TouchableOpacity
                        onPress={() => {
                            setIsPaused(true);
                            navigation.navigate('CreateVideoScreen');
                        }}
                        style={{
                            flexDirection: 'row-reverse',
                            padding: 12,
                        }}>
                        <Feather name="camera" size={20} color="white" />
                    </TouchableOpacity>
                    {/* VIDEO DESCRIPTION */}
                    <View style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: EStyleSheet.value('80rem'),
                        padding: EStyleSheet.value('18rem'),
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            justifyContent: 'flex-end',
                            overflow: 'hidden', flex: 3,
                        }}>
                            <Text style={{
                                color: 'white', fontSize: EStyleSheet.value('18rem'),
                                fontWeight: '700',
                            }}>
                                {item.username}
                            </Text>
                            <Text style={{
                                color: 'white', fontSize: EStyleSheet.value('14rem'),
                                fontWeight: '500', width: EStyleSheet.value('250rem'),
                            }} numberOfLines={1}>
                                {item.description}
                            </Text>
                            <Animated.Text numberOfLines={1} style={{
                                color: 'white',
                                fontSize: EStyleSheet.value('14rem'),
                                fontWeight: '500',
                                transform: [{ translateX }],
                            }}>
                                {'♫ '}
                                {item.song}
                            </Animated.Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <View style={{ alignItems: 'center' }}>
                                {/* AVATAR AND FOLLOW */}
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={{ uri: item.profile_pic }}
                                        style={{
                                            height: EStyleSheet.value('50rem'),
                                            aspectRatio: 1,
                                            borderRadius: 100,
                                            resizeMode: 'cover',
                                            borderWidth: 1, borderColor: Colors.WHITE,
                                        }}
                                    />
                                    <TouchableOpacity
                                        style={{
                                            height: EStyleSheet.value('20rem'),
                                            aspectRatio: 1,
                                            borderRadius: EStyleSheet.value('10rem'),
                                            backgroundColor: Colors.BLUE,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'absolute',
                                            bottom: EStyleSheet.value('-10rem'),
                                        }}>
                                        <MaterialIcons
                                            name={'add'} color={'white'}
                                            size={EStyleSheet.value('20rem')}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {/* LIKES */}
                                <View style={{
                                    alignItems: 'center',
                                    marginTop: EStyleSheet.value('20rem')
                                }}>
                                    <Ionicons
                                        name={'heart'} color={'white'}
                                        size={EStyleSheet.value('30rem')}
                                    />
                                    <Text style={{
                                        color: 'white',
                                        fontSize: EStyleSheet.value('14rem')
                                    }}>
                                        {item.like_count}
                                    </Text>
                                </View>
                                {/* COMMENTS */}
                                <View style={{
                                    alignItems: 'center',
                                    marginTop: EStyleSheet.value('20rem')
                                }}>
                                    <Ionicons
                                        name={'ios-chatbubble-ellipses'}
                                        color={'white'}
                                        size={EStyleSheet.value('30rem')}
                                    />
                                    <Text style={{
                                        color: 'white',
                                        fontSize: EStyleSheet.value('14rem')
                                    }}>
                                        {item.video_comment_count}
                                    </Text>
                                </View>
                                {/* SHARES */}
                                <View style={{
                                    alignItems: 'center',
                                    marginTop: EStyleSheet.value('20rem')
                                }}>
                                    <MaterialCommunityIcons
                                        name={'share'} color={'white'}
                                        size={EStyleSheet.value('30rem')}
                                    />
                                    <Text style={{
                                        color: 'white',
                                        fontSize: EStyleSheet.value('14rem')
                                    }}>
                                        {item.share_count}
                                    </Text>
                                </View>
                                {/* CASSETTE */}
                                <View style={{
                                    alignItems: 'center',
                                    marginTop: EStyleSheet.value('20rem')
                                }}>
                                    <Animated.View
                                        style={{
                                            height: EStyleSheet.value('40rem'),
                                            aspectRatio: 1,
                                            borderRadius: EStyleSheet.value('20rem'),
                                            backgroundColor: 'black',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            transform: [{ rotate }],
                                        }}>
                                        <Image
                                            source={{ uri: item.profile_pic }}
                                            style={{
                                                height: EStyleSheet.value('25rem'),
                                                aspectRatio: 1,
                                                borderRadius: EStyleSheet.value('13rem'),
                                                resizeMode: 'cover',
                                            }}
                                        />
                                    </Animated.View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ position: 'absolute', top: windowWidth / 1.2, left: windowWidth / 2.5 }}>
                    {showIcon
                        ? <Ionicons name={isPaused ? 'play-circle' : 'pause-circle'} color={'grey'} size={EStyleSheet.value('100rem')} />
                        : <></>}
                </View>

            </>
    );
}


// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             videos: [],
//         };
//     }

//     static navigationOptions = {
//         headerShown: false,
//     };

//     // LIFECYCLE METHODS
//     componentDidMount = () => {

//     };
//     // END LIFECYCLE METHODS

//     // UTILITY FUNCTIONS
//     Video = (props) => {
//         const { PlayPauseModal } = this;
//         const [isPaused, setIsPaused] = useState(false);
//         const [isPlayPauseModalVisible, setIsPausedModal] = useState(false);
//         const animateValue = new Animated.Value(0);
//         const rotate = animateValue.interpolate({
//             inputRange: [0, 1],
//             outputRange: ['0deg', '360deg'],
//         });
//         const translateX = animateValue.interpolate({
//             inputRange: [0, 1],
//             outputRange: [WIDTH, -WIDTH],
//         });
//         useEffect(() => {
//             Animated.loop(
//                 Animated.timing(animateValue, {
//                     toValue: 1,
//                     duration: 6000,
//                     easing: Easing.linear,
//                     useNativeDriver: true,
//                 }),
//             ).start();
//         });


//     // END UTILITY FUNCTIONS

//     // FUNCTIONAL COMPONENTS
//     PlayPauseModal = (props) => {
//         return (
//             <Portal>
//                 <Modal visible={isPlayPauseModalVisible}>
//                     <View style={{ alignSelf: 'center' }}>
//                         <Ionicons name={isPaused ? 'play-circle' : 'pause-circle'} color={'grey'} size={EStyleSheet.value('100rem')} />
//                     </View>
//                 </Modal>
//             </Portal>
//         );
//     };

//     BottomBar = (props) => {
//         return (
//             <LinearGradient
//                 start={{ x: 0, y: 1 }}
//                 end={{ x: 0, y: 0 }}
//                 colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.5)', 'transparent']}
//                 style={{
//                     position: 'absolute',
//                     bottom: 0, width: '100%',
//                     height: EStyleSheet.value('150rem')
//                 }}>
//                 <SafeAreaView style={{ flex: 1 }}>
//                     <View style={{
//                         flex: 1,
//                         flexDirection: 'row',
//                         alignItems: 'flex-end',
//                         paddingBottom: EStyleSheet.value('15rem')
//                     }}>
//                         <TouchableOpacity style={{ ...styles.tabHeader }}>
//                             <Octicons
//                                 name={'home'} color={'white'}
//                                 size={EStyleSheet.value('22rem')}
//                             />
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{ ...styles.tabHeader }}>
//                             <Feather
//                                 name={'search'} color={'white'}
//                                 size={EStyleSheet.value('22rem')}
//                             />
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{ ...styles.tabHeader }}>
//                             <View style={{
//                                 ...styles.addButton, left: 18,
//                                 backgroundColor: Colors.BLUE,
//                             }} />
//                             <View style={{
//                                 ...styles.addButton, right: 18,
//                                 backgroundColor: Colors.ORANGE,
//                             }} />
//                             <View style={{ ...styles.addButton }}>
//                                 <MaterialIcons
//                                     name={'add'} color={'black'}
//                                     size={EStyleSheet.value('22rem')}
//                                 />
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{ ...styles.tabHeader }}>
//                             <Ionicons
//                                 name={'chatbox-ellipses-outline'}
//                                 color={'white'}
//                                 size={EStyleSheet.value('22rem')}
//                             />
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{ ...styles.tabHeader }}>
//                             <Feather
//                                 name={'user'} color={'white'}
//                                 size={EStyleSheet.value('22rem')}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </SafeAreaView>
//             </LinearGradient>
//         );
//     };
//     // END FUNCTIONAL COMPONENTS

//     // RENDERING FUNCTIONS
//     render() {
//         const { BottomBar, Video } = this;
//         return (
//             <>
//                 <FlatList
//                     showsVerticalScrollIndicator={false}
//                     data={this.state.videos}
//                     renderItem={({ item }) => <Video {...this.props} item={item} />}
//                     keyExtractor={(item) => item.id.toString()}
//                     snapToInterval={HEIGHT}
//                     decelerationRate="fast"
//                 />
//                 <BottomBar {...this.props} />
//             </>
//         );
//     }
//     // END RENDERING FUNCTIONS
// }

const styles = EStyleSheet.create({
    videoPlayer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
    },
    tabHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        height: '25rem',
        width: '35rem',
        backgroundColor: 'white',
        borderRadius: '5rem',
        position: 'absolute',
        bottom: '0rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
