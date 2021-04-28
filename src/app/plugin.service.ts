import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core';


@Injectable()
export class PluginService extends IonicNativePlugin {
  static pluginName = 'videorecorder';
  static plugin = 'cordova-plugin-videorecording';
  static pluginRef = 'VideoRecorder';
  static repo = 'https://github.com/Curve-Tomorrow/VideoRecorderPlugin.git';
  static platforms = ['iOS']

  questionData = {
    'allowVerify': false,
    'allowVerifyText': "<p>this is allow verify text</p>",
    'binahResult': null,
    'camera': "allow_changing",
    'choices': [],
    'defaultValue': null,
    'description': "<p><!--(figmeta)eyJmaWxlS2V5IjoiU2ptUG1hQ09mNU0yVE",
    'footer': "",
    'hasInstructions': true,
    'hasRecordingInstructions': undefined,
    'id': 562,
    'infoText': "<p>This is small info text</p>",
    'isAnswerValid': true,
    'mandatory': true,
    'maxVideoTime': 100,
    'maximum': null,
    'maximumLabel': null,
    'maximumLength': null,
    'minimum': null,
    'minimumLabel': null,
    'minimumLength': null,
    'noVitals': false,
    'overlay': "square",
    'orientation': "portrait",
    'placeholder': null,
    'recordingInstructions': "<p>this is recording&nbsp;</p>",
    'restrictVideoLength': true,
    'routingLogic': [],
    'save': true,
    'shortName': undefined,
    'step': null,
    'subtitle': "We are interested in understanding how your baby is moving. Therefore, we would like you to record a video of your baby. ",
    'title': "How is your baby moving?",
    'type': "VideoQuestion",
    'userAnswer': null,
    'userSelections': [],
    'vitalsData': null,
  }

  startRecording(): Promise<any> {
    console.log('recording called')
    const x = cordova(this, 'startRecording', {}, [{ 'cameraData': this.questionData }])
    console.log('Recevied data from ios', x['video']);
    return x;
  }
}