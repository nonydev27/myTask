// export default function SignUp(){
//     return(

//     <>
//         <div className="columns-2 text-centre">            
//             <section className=" flex justify-center-safe place-content-center">

//                 <div className="text-centre">
//                   <h2>myTask</h2>
//                 </div>

//                 <img src="" alt="" className="w-full"/>             
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga quaerat voluptatem corrupti error nisi assumenda aperiam excepturi, vitae totam deleniti ratione porro tempore quas incidunt cumque voluptates optio ex.
//                 </p>
//             </section>

//             <div className="w-40 bg-pink-400"></div>

//             <section className=" flex justify-center-safe place-content-center">
//                 <div>
//                     <p>Schedule with myTask!</p>
//                     <div>
//                         <form action="POST">
//                             <input type="text" placeholder="Fullname eg. John Doe"/>
//                             <input type="email" placeholder="Email eg. jdoe@mytask.com"/>
                            

//                             <input type="submit" name="submit" id="submit" />
//                         </form>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     </>
//     )
// }

export default function SignUp() {
  return (
    <div className="flex min-h-screen">

      {/* Left panel */}
      <section className="hidden lg:flex flex-col justify-between w-1/2 bg-[#3E2C23] px-14 py-12">
        <h2 className="text-[#F5E9D8] text-2xl">myTask</h2>
        <img src="https://i.pinimg.com/1200x/34/6d/17/346d179a34cdecc36fa2e8e0c0ada36b.jpg" alt="" className="w-full rounded-xl" />
        <p className="text-[#b09a87] text-sm">Lorem ipsum...</p>
      </section>

      {/* Right panel */}
      <section className="flex flex-1 flex-col justify-center items-center bg-[#F5E9D8] px-8">
        <p className="text-[#3E2C23] text-2xl font-bold">Schedule with myTask!</p>
        <form className="flex flex-col gap-4 w-full max-w-sm mt-6">
          <input type="text" placeholder="Fullname eg. John Doe" className="..." />
          <input type="email" placeholder="Email eg. jdoe@mytask.com" className="..." />
          <input type="submit" value="Create account" className="bg-[#E76F2E] text-white ..." />
        </form>
      </section>

    </div>
  )
}