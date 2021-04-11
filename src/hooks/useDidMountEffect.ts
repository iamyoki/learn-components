import { useEffect, useRef } from 'react'

export default function useDidMountEffect(
  callback: React.EffectCallback,
  dependences: React.DependencyList | undefined
) {
  const isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
    } else {
      callback()
    }
  }, dependences)
}
