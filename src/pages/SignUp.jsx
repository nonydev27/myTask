import Footer from '../components/Footer.jsx'

export default function SignUp() {
  return (
    <div className="flex min-h-screen">

      {/* Left panel */}
      <section className="hidden lg:flex flex-col justify-between w-1/2 bg-[#3E2C23] px-14 py-12">
        <h2 className="text-[#F5E9D8] text-2xl">myTask</h2>

          <div>
          <h3>your day, organized</h3>
        </div>

        <span>
          <h2>plan it</h2>
          <h2>do it</h2>
          <h2>crush it</h2>
        </span>

        <span>
          <p>a task manager built around the way you actually think: fast, flexible and visual.</p>
        </span>


      <div className='flex'>
        <span className='bg-[#E76F2E] w-1 p-2 rounded-full'></span>
        
        <span className='bg-[#E76F2E] w-1 p-2 rounded-full'></span>
      </div>

        <img src="" alt="" className="w-full rounded-xl" />
        <p className="text-[#b09a87] text-sm">Lorem ipsum...</p>

      
      </section>

      {/* Right panel */}
      <section className="flex flex-1 flex-col justify-center items-center bg-[#F5E9D8] px-8">
        <p className="text-[#3E2C23] text-2xl font-bold">Join myTask!</p>
        <h3>Get started, it only takes a minute!</h3>

        {/* <div className='w-[120px] rounded p-[2px] bg-[#E76F2E]'></div> */}
        <form className="flex flex-col gap-4 w-full max-w-sm mt-6">

          <label htmlFor="name" className='text-[#3E2C23] font-bold capitalize'>Full name</label>
          <input type="text" placeholder="John Doe" className="rounded" />

          <label htmlFor="email" className='text-[#3E2C23] font-bold capitalize'>email address</label>
          <input type="email" placeholder="jdoe@mytask.com" className="rounded" />

          <label htmlFor="password" className='text-[#3E2C23] font-bold capitalize'>password</label>
          <input type="password" className="rounded" placeholder='*********'/>
          <button className='flex gap-2 items-center justify-center bg-[#E76F2E] text-white py-3 rounded-md font-bold'>
            Create my account
            <img src="../assets/right-arrow.png" alt="" className='w-5 text-white brightness-5 invert'/>
          </button>

        <div className='flex items-center gap-4 mt-4'>
        
          <span className='w-[120px] rounded p-[1px] bg-[#E76F2E]'></span>
            <p>or sign up with</p>
            <span className='w-[120px] rounded p-[1px] bg-[#E76F2E]'></span>
        </div>

        <div className='flex gap-4 items-center justify-center'>
        <button className='flex gap-2 items-center justify-center signup-opt'>
            <img src="../assets/google.png" alt="Google" className='w-5'/> <span className='google-opt '> Google</span>
        </button>
     
        
        <button className='flex gap-2 items-center justify-center signup-opt'>
         <img src="../assets/apple.png" alt="Apple" className='w-5'/> <span className='apple-opt'>Apple</span>
        </button>
        </div>

        <div className='flex items-center justify-center'>
          <h3>Already have an account? <span className='text-[#E76F2E] font-bold'>Sign in</span></h3>
        </div>
        </form>
      </section>

    </div>
  )
}