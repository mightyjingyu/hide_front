import { useState, useCallback } from 'react'

const KEY_ONBOARDING = 'hide_onboarding_done'
const KEY_SETUP = 'hide_setup_done'

export function useOnboarding() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(
    () => localStorage.getItem(KEY_ONBOARDING) === 'true'
  )
  const [hasCompletedSetup, setHasCompletedSetup] = useState(
    () => localStorage.getItem(KEY_SETUP) === 'true'
  )

  const completeOnboarding = useCallback(() => {
    localStorage.setItem(KEY_ONBOARDING, 'true')
    setHasCompletedOnboarding(true)
  }, [])

  const completeSetup = useCallback(() => {
    localStorage.setItem(KEY_SETUP, 'true')
    setHasCompletedSetup(true)
  }, [])

  const reset = useCallback(() => {
    localStorage.removeItem(KEY_ONBOARDING)
    localStorage.removeItem(KEY_SETUP)
    setHasCompletedOnboarding(false)
    setHasCompletedSetup(false)
  }, [])

  return {
    hasCompletedOnboarding,
    hasCompletedSetup,
    completeOnboarding,
    completeSetup,
    reset,
  }
}
