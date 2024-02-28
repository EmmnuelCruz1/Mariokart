/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\banana_peel_mario_kart.glb --transform --shadows 
Files: .\banana_peel_mario_kart.glb [186.36KB] > C:\Users\mouli\dev\r3f-vite-starter\public\models\items\banana_peel_mario_kart-transformed.glb [20.2KB] (89%)
Author: Anthony Yanez (https://sketchfab.com/Yanez-Designs)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/banana-peel-mario-kart-c7fd163741614859ba02f302ce0bce32
Title: Banana Peel (Mario Kart)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { BallCollider, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';
import { useStore } from '../../store';

export function Banana({onCollide, id, position, setNetworkBananas, networkBananas}) {
  const { nodes, materials } = useGLTF('./models/items/banana_peel_mario_kart-transformed.glb');
  const rigidBody = useRef();
  const ref = useRef();
  const [scale, setScale] = React.useState(0.002);


  const {actions} = useStore();

   return (
    <>
            <RigidBody
      ref={rigidBody}
      type='fixed'
      position={[position.x, position.y, position.z]}
      sensor
      onIntersectionEnter={({other}) => {
        if(other.rigidBodyObject.name === "player"){
          actions.setShouldSlowDown(true);
          setNetworkBananas(networkBananas.filter((banana) => banana.id !== id));
        }
      }}
      colliders={false}
      name='banana'
      >
      <BallCollider args={[0.5]} />

      </RigidBody>

    <group position={[position.x, position.y, position.z]} ref={ref} scale={scale} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['Banana_Peel_02_-_Default_0'].geometry} material={materials['02_-_Default']} position={[39.973, -25.006, -0.017]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['Banana_Peel_07_-_Default_0'].geometry} material={materials['07_-_Default']} position={[39.973, -25.006, -0.017]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['Banana_Peel_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[39.973, -25.006, -0.017]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
    </>
  )
}

useGLTF.preload('./models/items/banana_peel_mario_kart-transformed.glb')