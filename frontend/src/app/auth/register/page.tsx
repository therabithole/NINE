import RegisterForm from './components/auth/RegisterForm'
import AuthSidePanel from './components/auth/AuthSidePanel'

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-[#050505] text-white">
      <div className="flex items-center justify-center p-8">
        <RegisterForm />
      </div>

      <AuthSidePanel />
    </main>
  )
}
