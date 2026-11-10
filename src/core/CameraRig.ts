import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * 相机（提示词 1-1 / 6-5 / 8-5）：
 * 全局唯一实例，切换场景 / 车型 / 时间 / 天气时绝不重置 target 与球坐标，保证观看连续。
 */
export class CameraRig {
  readonly controls: OrbitControls;

  constructor(camera: THREE.PerspectiveCamera, dom: HTMLElement) {
    const controls = new OrbitControls(camera, dom);
    controls.target.set(0, 1.7, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.065;
    controls.enablePan = false;
    controls.rotateSpeed = 0.72;
    controls.zoomSpeed = 0.85;
    controls.minDistance = 13;
    controls.maxDistance = 56;
    controls.minPolarAngle = 0.16;
    controls.maxPolarAngle = Math.PI / 2 - 0.055;
    controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };
    controls.update();
    this.controls = controls;
  }

  update(): void {
    this.controls.update();
  }
}
