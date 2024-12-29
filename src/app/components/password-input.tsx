'use client'

import * as React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onPasswordChange?: (password: string) => void;
}

export function PasswordInput({ onPasswordChange, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value
    if (onPasswordChange) {
      onPasswordChange(newPassword)
    }
  }

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        onChange={handlePasswordChange}
        className="pr-10"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={togglePasswordVisibility}
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4 text-gray-500" aria-hidden="true" />
        ) : (
          <Eye className="h-4 w-4 text-gray-500" aria-hidden="true" />
        )}
      </Button>
    </div>
  )
}

