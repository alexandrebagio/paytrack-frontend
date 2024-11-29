export type SnackbarType = {
  key: string
  text: React.ReactNode
  variant: 'success' | 'error' | 'warning' | 'info'
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  className?: string
  duration?: number
}

export type TSnackbarProps = Omit<SnackbarType, 'key'> & {
  handleClose: () => void
  open: boolean
}