import { PulsingBorder } from '@paper-design/shaders-react';

export default function Background() {
    return (
        <PulsingBorder 
            colors={["#4c4794", "#774a7d", "#12694a", "#0aff78", "#4733cc"]}
            colorBack="#0c182c"
            roundness={0}
            thickness={1}
            softness={1}
            aspectRatio="auto"
            intensity={0.1}
            bloom={0.2}
            spots={4}
            spotSize={0.25}
            pulse={0}
            smoke={0.32}
            smokeSize={0.5}
            speed={0.16}
            scale={1.1}
            marginLeft={0}
            marginRight={0}
            marginTop={0}
            marginBottom={0}
            style={{ 
                width: '100%', 
                height: '120vh',
                position: 'absolute',
                top: 0, 
                left: 0,
                zIndex: 0,
            }}
        />
    );
}
