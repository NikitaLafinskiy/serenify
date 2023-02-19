declare module "web-audio-api" {
  export class AudioContext {
    constructor();
    createMediaElementSource(
      audio: HTMLMediaElement
    ): MediaElementAudioSourceNode;
    destination: AudioDestinationNode;
  }

  export class MediaElementAudioSourceNode {
    constructor(
      context: AudioContext,
      options?: MediaElementAudioSourceOptions
    );
    connect(destination: AudioNode, output?: number, input?: number): void;
    mediaElement: HTMLMediaElement;
  }

  interface MediaElementAudioSourceOptions {
    mediaElement: HTMLMediaElement;
  }

  export interface AudioDestinationNode extends AudioNode {
    maxChannelCount: number;
  }
}
