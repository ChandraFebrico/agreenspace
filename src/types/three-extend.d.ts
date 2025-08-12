declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader, LoadingManager, Object3D } from 'three';

  export class GLTF {
    scene: Object3D;
    scenes: Object3D[];
    animations: any[];
    cameras: any[];
    asset: any;
  }

  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
