import React, { Component } from 'react';
import Video from 'react-native-video';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    BackHandler,
    Alert
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { VESDK, VideoEditorModal, Configuration } from 'react-native-videoeditorsdk';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class PreviewVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video: this.props.route.params.video
        }
    }

    backAction = () => {
        var that = this;
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => that.props.navigation.goBack() }
        ]);
        return true;
    };

    componentDidMount() {
        // this.backHandler = BackHandler.addEventListener(
        //     "hardwareBackPress",
        //     this.backAction
        // );
        // VESDK.unlockWithLicense(require('./vesdk_license'));
    }

    componentWillUnmount() {
        // this.backHandler.remove();
    }
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                {
                    this.state.video ?
                        <View>
                            <Video source={{ uri: this.state.video }}
                                style={{
                                    flex: 1,
                                    position: 'absolute',
                                    top: 0,
                                    bottom: -100,
                                    left: 0,
                                    right: 0,
                                    height: height,
                                    width: width,
                                    backgroundColor: 'black',
                                }}
                                rate={1.0}
                                volume={1.0}
                                muted={false}
                                resizeMode={"cover"}
                                onEnd={() => { console.log('Done!') }}
                                repeat={true} />
                            <Feather
                                onPress={() => this.props.navigation.goBack()}
                                name='check-circle'
                                size={30}
                                color='white'
                                style={{
                                    alignSelf: 'flex-end',
                                    margin: 20
                                }}
                            />
                            {/* <VideoEditorModal visible={true} video={{ uri: this.state.video }} /> */}
                        </View>
                        :
                        <Text>No video found</Text>
                }
            </View>
        );
    }
}