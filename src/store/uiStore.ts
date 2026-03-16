import { Store } from '@tanstack/store'

interface UiState {
  isAuthModalOpen: boolean
}

export const uiStore = new Store<UiState>({
  isAuthModalOpen: false,
})

export const setAuthModalOpen = (isOpen: boolean) => {
  uiStore.setState((state) => ({
    ...state,
    isAuthModalOpen: isOpen,
  }))
}
