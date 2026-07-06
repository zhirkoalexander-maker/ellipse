import './style.css'

export function bootstrapApp(root: HTMLElement): void {
  root.innerHTML = '<div data-role="game-shell"></div>'
}

const appRoot = document.querySelector<HTMLDivElement>('#app')

if (appRoot) {
  bootstrapApp(appRoot)
}
