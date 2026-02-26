declare module "three/examples/jsm/loaders/OBJLoader" {
  export class OBJLoader {
    load(
      url: string,
      onLoad: (object: any) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: Error) => void
    ): void;
  }
}

declare module "three/examples/jsm/loaders/MTLLoader" {
  export class MTLLoader {
    load(
      url: string,
      onLoad: (materials: any) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: Error) => void
    ): void;
    setMaterialOptions?(options: any): this;
    preload?(): void;
  }
}
