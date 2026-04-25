export default function SignUp(){
    return(

    <>
        <div className="columns-2 text-centre">            
            <section className=" flex justify-center-safe place-content-center">

                <div className="text-centre">
                  <h2>myTask</h2>
                </div>

                <img src="https://i.pinimg.com/1200x/34/6d/17/346d179a34cdecc36fa2e8e0c0ada36b.jpg" alt="" className="w-full"/>             
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga quaerat voluptatem corrupti error nisi assumenda aperiam excepturi, vitae totam deleniti ratione porro tempore quas incidunt cumque voluptates optio ex.
                </p>
            </section>

            <section className=" flex justify-center-safe place-content-center">
                <div>
                    <p>Schedule with myTask!</p>
                    <div>
                        <form action="POST">
                            <input type="text" placeholder="Fullname eg. John Doe"/>
                            <input type="email" placeholder="Email eg. jdoe@mytask.com"/>

                            <input type="submit" name="submit" id="submit" />
                        </form>
                    </div>

                </div>
            </section>
        </div>
    </>
    )
}