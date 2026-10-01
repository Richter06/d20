import { useEffect, useRef, useState } from 'react'

import { useGLTF, Environment } from '@react-three/drei'

import * as THREE from 'three'

import gsap from 'gsap'

const D20_TARGETS = {
  1: [0.6777, 0.3680, -0.3038, -0.5595],
  2: [0.7660, 0.0823, 0.4255, 0.4747],
  3: [0.0995, 0.7645, -0.2751, 0.5745],
  4: [0.3082, -0.0819, 0.7939, 0.5177],
  5: [-0.0795, 0.7668, -0.2599, -0.5815],
  6: [-0.3188, 0.0090, 0.9082, -0.2709],
  7: [0.0990, 0.9421, -0.3187, -0.0335],
  8: [0.7322, -0.2398, -0.5149, 0.3759],
  9: [-0.2984, 0.1142, 0.2445, 0.9155],
  10: [0.9091, 0.2669, -0.1061, 0.3019],
  11: [-0.3031, -0.1011, -0.2842, 0.9040],
  12: [0.8853, -0.3374, 0.0821, 0.3093],
  13: [-0.4230, -0.4767, 0.1680, 0.7521],
  14: [-0.0084, 0.3210, 0.9467, -0.0248],
  15: [0.2224, 0.9214, -0.0254, -0.3176],
  16: [-0.5809, 0.2597, 0.7673, 0.0795],
  17: [-0.4091, 0.8550, 0.0412, 0.3159],
  18: [0.5937, 0.2289, 0.7704, -0.0392],
  19: [-0.4743, 0.4257, -0.0817, 0.7663],
  20: [0.6360, -0.0333, -0.0403, 0.7699],
}

function quaternionFromArray(...values) {
  return new THREE.Quaternion(
    values[0],
    values[1],
    values[2],
    values[3],
  ).normalize()
}

function randomAxis() {
  const axis = new THREE.Vector3(
    THREE.MathUtils.randFloat(-1, 1),
    THREE.MathUtils.randFloat(-1, 1),
    THREE.MathUtils.randFloat(-1, 1),
  )

  if (axis.lengthSq() < 0.1) {
    axis.set(0.7, 0.9, 0.45)
  }

  return axis.normalize()
}

function D20Model({ result, rollToken, onRollStart, onRollComplete }) {
  const groupRef = useRef(null)
  const { scene } = useGLTF('/models/d20.glb')

  const [hovered, setHovered] = useState(false)

  const animationRef = useRef(null)
  const resultRef = useRef(result)

  useEffect(() => {
    resultRef.current = result
  }, [result])

  useEffect(() => {
    if (!groupRef.current || !result || !rollToken) return

    const group = groupRef.current
    const targetQuaternion = quaternionFromArray(...D20_TARGETS[result])

    animationRef.current?.kill()

    const axis = randomAxis()

    const turns = THREE.MathUtils.randFloat(2.8, 4.2)

    const extraRotation = THREE.MathUtils.randFloat(
      Math.PI * 0.55,
      Math.PI * 1.25,
    )

    const totalAngle =
      turns * Math.PI * 2 + extraRotation

    const state = {
      angle: totalAngle,
    }

    const spinQuaternion = new THREE.Quaternion()

    group.quaternion.copy(targetQuaternion)
    group.scale.setScalar(1)

    onRollStart?.()

    const updateRotation = () => {
      spinQuaternion.setFromAxisAngle(
        axis,
        state.angle,
      )

      group.quaternion
        .copy(targetQuaternion)
        .multiply(spinQuaternion)
        .normalize()
    }

    updateRotation()

    const timeline = gsap.timeline({
      onComplete: () => {
        group.quaternion.copy(targetQuaternion)
        group.scale.setScalar(1)

        animationRef.current = null

        onRollComplete?.(resultRef.current)
      },
    })

    animationRef.current = timeline

    timeline
      .to(state, {
        angle: 0.16,
        duration: 2.15,
        ease: 'power4.out',
        onUpdate: updateRotation,
      })
      .to(state, {
        angle: 0,
        duration: 0.28,
        ease: 'back.out(2.5)',
        onUpdate: updateRotation,
      })

    return () => {
      timeline.kill()
    }
  }, [rollToken])

  useEffect(() => {
    if (!groupRef.current) return

    const group = groupRef.current

    gsap.to(group.scale, {
      x: hovered ? 1.055 : 1,
      y: hovered ? 1.055 : 1,
      z: hovered ? 1.055 : 1,
      duration: 0.35,
      ease: 'power3.out',
      overwrite: true,
    })
  }, [hovered])

  useEffect(() => {
    return () => {
      animationRef.current?.kill()
    }
  }, [])

  const handlePointerOver = (event) => {
    event.stopPropagation()

    setHovered(true)

    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    setHovered(false)

    document.body.style.cursor = ''
  }

  const handleClick = (event) => {
    event.stopPropagation()

    if (animationRef.current) return

    onRollStart?.()
  }

  return (
    <>
      <Environment
        preset="studio"
        environmentIntensity={0.72}
      />

      <group
        ref={groupRef}
        scale={1}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive
          object={scene}
          scale={1}
          dispose={null}
        />
      </group>
    </>
  )
}

export default function D20Scene({
  result,
  rollToken,
  onRollStart,
  onRollComplete,
}) {
  return (
    <D20Model
      result={result}
      rollToken={rollToken}
      onRollStart={onRollStart}
      onRollComplete={onRollComplete}
    />
  )
}

export { D20_TARGETS }

useGLTF.preload('/models/d20.glb')