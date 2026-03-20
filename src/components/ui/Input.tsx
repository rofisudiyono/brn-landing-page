import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none',
          'placeholder:text-gray-400 focus:ring-2 focus:ring-[#F5C800] focus:border-[#F5C800]',
          'transition-all duration-150',
          className,
        )}
        {...props}
      />
    </div>
  )
})

Input.displayName = 'Input'

export { Input }
