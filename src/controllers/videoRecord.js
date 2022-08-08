import { Dimensions } from "react-native";
import { VESDK, Configuration, TintMode, SerializationExportType } from 'react-native-videoeditorsdk';

const { width, height } = Dimensions.get('screen');

let configuration: Configuration = {
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
var serialization = null;

const VideoRecordingUtils = {
    touchToFocus(event) {
        const { pageX, pageY } = event.nativeEvent;
        const screenWidth = width;
        const screenHeight = height;
        const isPortrait = screenHeight > screenWidth;

        let x = pageX / screenWidth;
        let y = pageY / screenHeight;
        // Coordinate transform for portrait. See autoFocusPointOfInterest in docs for more info
        if (isPortrait) {
            x = pageY / screenHeight;
            y = -(pageX / screenWidth) + 1;
        }

        this.setState({
            autoFocusPoint: {
                normalized: { x, y },
                drawRectPosition: { x: pageX, y: pageY },
            },
        });
    },
    startRecording() {
        this.setState({
            uri: ''
        })
        if (this.camera) {
            this.camera.recordAsync({
                mirrorVideo: false,
                maxDuration: 30
            })
                .then((data) => {
                    this.setState({
                        uri: data.uri
                    })
                    VESDK.openEditor(data.uri, configuration, serialization).then((result) => {
                        console.log("result", JSON.stringify(result));
                        if (result != null)
                            serialization = result.serialization;
                        this.props.navigation.navigate('PreviewVideo', { video: result.video });
                    });
                })
                .catch(err => console.error(err));

            this.setState({
                isRecording: true,
                showSwitch: false
            });
        }
    },
    stopRecording() {
        this.setState({
            uri: ''
        })
        if (this.camera) {
            this.camera.stopRecording()
            this.setState({
                isRecording: false,
                showSwitch: true
            });
        }
    },
    switchType() {
        let newType;
        const { back, front } = RNCamera.Constants.Type;

        if (this.state.camera.type === back) {
            newType = front;
        } else if (this.state.camera.type === front) {
            newType = back;
        }

        this.setState({
            camera: {
                type: newType
            },
        });
    },
    drawFocusRingPosition(that) {
        return ({
            top: that.state.autoFocusPoint.drawRectPosition.y - 32,
            left: that.state.autoFocusPoint.drawRectPosition.x - 32,
        })
    }
}

export default VideoRecordingUtils;