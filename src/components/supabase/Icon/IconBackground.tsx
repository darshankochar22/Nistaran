'use client'

export const IconBackground: React.FC<React.PropsWithChildren> = (props) => (
  <div className="shrink-0 bg-nistaran-light border border-nistaran/15 w-8 h-8 flex items-center justify-center rounded-md">
    {props.children}
  </div>
)
