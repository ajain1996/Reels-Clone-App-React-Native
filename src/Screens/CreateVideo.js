import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Button,
    PixelRatio as PR,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import { VESDK, Configuration, TintMode, CanvasAction, SerializationExportType } from 'react-native-videoeditorsdk';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import VideoRecordingUtils from '../controllers/videoRecord';

const { width, height } = Dimensions.get('screen');

// const filterList = [
//     {
//         name: "Sunny",
//         value: RNCamera.Constants.WhiteBalance.sunny,
//         color: '#f2f27a'
//     },
//     {
//         name: "Fluorescent",
//         value: RNCamera.Constants.WhiteBalance.fluorescent,
//         color: '#15f4ee'
//     },
//     {
//         name: "Incandescent",
//         value: RNCamera.Constants.WhiteBalance.incandescent,
//         color: '#f8edd4'
//     },
//     {
//         name: "Shadow",
//         value: RNCamera.Constants.WhiteBalance.shadow,
//         color: '#bfafb2'
//     }
// ]
export default class CreateVideo extends Component {
    constructor(props) {
        super(props);

        this.camera = null;

        this.state = {
            camera: {
                type: RNCamera.Constants.Type.back,
            },
            isRecording: false,
            uri: '',
            showSwitch: true,
            flash: 'off',
            autoFocus: 'on',
            autoFocusPoint: {
                normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
                drawRectPosition: {
                    x: width * 0.5 - 32,
                    y: height * 0.5 - 32,
                },
            },
            depth: 0,
            whiteBalance: RNCamera.Constants.WhiteBalance.auto,
            configuration: {
                sticker: {
                    // Enable personal stickers
                    personalStickers: true,

                    // Configure stickers
                    categories: [
                        // Create sticker category with stickers
                        {
                            identifier: 'example_sticker_category_logos',
                            name: 'Logos',
                            thumbnailURI: require('../../assets/VideoEditingImages/React-Logo.png'),
                            items: [
                                {
                                    identifier: 'example_sticker_logos_react',
                                    name: 'React',
                                    stickerURI: require('../../assets/VideoEditingImages/React-Logo.png'),
                                },
                                {
                                    identifier: 'example_sticker_logos_imgly',
                                    name: 'img.ly',
                                    stickerURI: require('../../assets/VideoEditingImages/imgly-Logo.png'),
                                    tintMode: TintMode.SOLID,
                                },
                            ],
                        },
                        // Reorder and use existing sticker categories
                        { identifier: 'imgly_sticker_category_animated' },
                        { identifier: 'imgly_sticker_category_emoticons' },
                        // Modify existing sticker category
                        {
                            identifier: 'imgly_sticker_category_shapes',
                            items: [
                                { identifier: 'imgly_sticker_shapes_badge_01' },
                                { identifier: 'imgly_sticker_shapes_arrow_02' },
                                { identifier: 'imgly_sticker_shapes_spray_03' },
                            ],
                        },
                    ],
                },
                export: {
                    serialization: {
                        enabled: true,
                        exportType: SerializationExportType.OBJECT
                    }
                },
                audio: {
                    categories: [],
                    // canvasActions: [
                    //     CanvasAction.DELETE |
                    //     CanvasAction.PLAY_PAUSE
                    // ]
                }
            }
        };
    }

    componentDidMount() {
        // VESDK.unlockWithLicense(require('./vesdk_license'));
    }

    render() {

        let recordButton;
        if (!this.state.isRecording) {
            recordButton = <Fontisto
                name="record"
                onPress={VideoRecordingUtils.startRecording.bind(this)}
                color="#800000"
                size={PR.getPixelSizeForLayoutSize(24)}
                style={styles.captureButton}
            />
        } else {
            recordButton = <Ionicons
                name="stop-circle-outline"
                onPress={VideoRecordingUtils.stopRecording.bind(this)}
                color="#800000"
                size={PR.getPixelSizeForLayoutSize(26)}
                style={[styles.captureButton, { bottom: height / 18, }]}
            />
        }

        let typeButton;
        typeButton = <Ionicons
            name="camera-reverse-sharp"
            onPress={VideoRecordingUtils.switchType.bind(this)}
            color="#808080"
            size={PR.getPixelSizeForLayoutSize(10)}
            style={styles.flipButton}
        />

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    captureAudio={true}
                    type={this.state.camera.type}
                    useNativeZoom={true} //not working
                    flashMode={this.state.flash}
                    autoFocus={this.state.autoFocus}
                    autoFocusPointOfInterest={this.state.autoFocusPoint.normalized}
                    focusDepth={this.state.depth}
                    defaultVideoQuality={RNCamera.Constants.VideoQuality['288p']}
                    whiteBalance={this.state.whiteBalance}
                >
                    <View style={StyleSheet.absoluteFill}>
                        <View style={[styles.autoFocusBox, VideoRecordingUtils.drawFocusRingPosition(this)]} />
                        <TouchableWithoutFeedback onPress={VideoRecordingUtils.touchToFocus.bind(this)}>
                            <View style={{ flex: 1 }} />
                        </TouchableWithoutFeedback>
                    </View>
                    {recordButton}
                    {this.state.showSwitch ? typeButton : null}
                </RNCamera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview: {
        position: 'absolute',
        alignItems: 'center',
        width: "100%",
        height: "100%"
    },
    captureButton: {
        position: 'absolute',
        bottom: height / 30,
        padding: 0
    },
    flipButton: {
        position: 'absolute',
        right: width / 12,
        bottom: height / 20
    },
    autoFocusBox: {
        position: 'absolute',
        height: 64,
        width: 64,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'white',
        opacity: 0.4,
    },
    filtersStyle: {
        width: 39,
        height: 39,
        borderRadius: 5,
        opacity: 1,
        marginHorizontal: PR.getPixelSizeForLayoutSize(8),
        marginBottom: PR.getPixelSizeForLayoutSize(2.7)
    }
});