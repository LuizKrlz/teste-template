import { useAtom, useAtomValue } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const authAtom = atomWithStorage<({ user: { name: string }}) | null | undefined>('auth', null)

export const useAuthAtom = () => useAtom(authAtom)

export const useAuthAtomValue = () => useAtomValue(authAtom)
