import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function PresetsIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 20 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
        />
      </defs>
      <LightMode>
      
      <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fillOpacity={0.5}
          strokeWidth={2}
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
       className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
      />
      </LightMode>
      <DarkMode fill={`url(#${id}-gradient-dark)`}>
        <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
          strokeWidth={2}
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
      />
      </DarkMode>
    </>
  )
}
