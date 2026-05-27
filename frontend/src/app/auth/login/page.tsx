import LoginForm from '@/components/auth/LoginForm'
import AuthSidePanel from '@/components/auth/AuthSidePanel'

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-[#050505] text-white">
      <div className="flex items-center justify-center p-8">
        <LoginForm />
      </div>

      <AuthSidePanel />
    </main>
  )
}
