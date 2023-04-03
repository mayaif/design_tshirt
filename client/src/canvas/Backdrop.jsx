import React, {useRef} from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import state from '../store'



const Backdrop = () => {
  const snap = useSnapshot(state)
  const shadows = useRef()
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal //smooth out the edges of the shadow over time
      frames={60} //the frames will going to render in 60 frames
      alphaTest={0.85} //transparency of the shadows
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      color={snap.color}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
        
      />
        <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />

    </AccumulativeShadows>
  )
}

export default Backdrop