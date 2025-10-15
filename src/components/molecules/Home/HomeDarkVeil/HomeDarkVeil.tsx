'use client';
import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';
import { FRAGMENT as fragment, VERTEX as vertex } from './data';

type Props = {
    hueShift?: number;
    noiseIntensity?: number;
    scanlineIntensity?: number;
    speed?: number;
    scanlineFrequency?: number;
    warpAmount?: number;
    resolutionScale?: number;
};

export default function HomeDarkVeil({
    hueShift = 0,
    noiseIntensity = 0,
    scanlineIntensity = 0,
    speed = 0.5,
    scanlineFrequency = 0,
    warpAmount = 0,
    resolutionScale = 1,
}: Props) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current as HTMLCanvasElement;
        const parent = canvas.parentElement as HTMLElement;

        const renderer = new Renderer({
            dpr: Math.min(window.devicePixelRatio, 2),
            canvas,
        });

        const gl = renderer.gl;
        const geometry = new Triangle(gl);

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Vec2() },
                uHueShift: { value: hueShift },
                uNoise: { value: noiseIntensity },
                uScan: { value: scanlineIntensity },
                uScanFreq: { value: scanlineFrequency },
                uWarp: { value: warpAmount },
            },
        });

        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
            const w = parent.clientWidth,
                h = parent.clientHeight;

            renderer.setSize(w * resolutionScale, h * resolutionScale);
            program.uniforms.uResolution.value.set(w, h);
        };

        window.addEventListener('resize', resize);
        resize();

        const start = performance.now();
        let frame = 0;

        const loop = () => {
            program.uniforms.uTime.value = ((performance.now() - start) / 1000) * speed;
            program.uniforms.uHueShift.value = hueShift;
            program.uniforms.uNoise.value = noiseIntensity;
            program.uniforms.uScan.value = scanlineIntensity;
            program.uniforms.uScanFreq.value = scanlineFrequency;
            program.uniforms.uWarp.value = warpAmount;
            renderer.render({ scene: mesh });
            frame = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', resize);
        };
    }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale]);

    return <canvas ref={ref} className='block w-full h-full' />;
}
