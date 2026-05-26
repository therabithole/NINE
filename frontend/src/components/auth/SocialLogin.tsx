import { FaGoogle, FaFacebookF } from 'react-icons/fa'

export default function SocialLogin() {
  return (
    <div className="space-y-4">
      <button className="w-full glass rounded-2xl p-4 flex items-center justify-center gap-3 hover:bg-white/10 transition">
        <FaGoogle />
        Continue with Google
      </button>

      <button className="w-full glass rounded-2xl p-4 flex items-center justify-center gap-3 hover:bg-white/10 transition">
        <FaFacebookF />
        Continue with Facebook
      </button>
    </div>
  )
}
