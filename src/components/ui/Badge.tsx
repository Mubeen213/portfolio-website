interface BadgeProps {
  text: string
  variant?: 'default' | 'outline' | 'success'
}

const Badge = ({ text, variant = 'default' }: BadgeProps) => {
  const variants = {
    default: 'bg-blue-100 text-blue-800',
    outline: 'border border-gray-300 text-gray-700',
    success: 'bg-green-100 text-green-800',
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${variants[variant]}`}>
      {text}
    </span>
  )
}

export default Badge
