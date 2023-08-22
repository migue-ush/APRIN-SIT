import {Typography} from "@material-tailwind/react";

const Home = () => {
    return (
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 " >
        <div className="absolute top-0 h-full w-full bg-[url('./img/img-first-ultima-4.jpg')] bg-cover bg-center "  />
        {/* <div className=" container pt-60 pl-5 flex-col bg-opacity-50 absolute"> */}
        <div className=" container pt-[50%] sm:pt-[40%] md:pt-[30%] lg:pt-[23%] xl:pt-[15%] pl-5 flex-col bg-opacity-50 absolute">
            {/* <h1 className=" grid grid-cols-1 xl:text-[120px] lg:text-[100Spx] text-[40px] sm:text-[55px] text-center  md:text-[78px] font-extrabold xl:pb-[50px] lg:mt-[150px] sm:mt-[100px] "> */} 
            <h1 className=" grid grid-cols-1 xl:text-[120px] lg:text-[100Spx] text-[40px] sm:text-[55px] text-center  md:text-[78px] font-extrabold   ">
                <span className=" bg-clip-text text-transparent opacity-100 bg-gradient-to-r from-emerald-500 to-fuchsia-400">
                    DESARROLLO WEB
                </span>
            </h1>
            
            <Typography 
                variant="lead" 
                color="white" 
                /* className="opacity-60 grid mt-[350px] lg:mt-[200px] sm:text-lg pl-5 font-bold lg:text-2xl md:text-xl tracking-widest "> */
                className="opacity-60 sm:text-lg pl-5 font-bold lg:text-2xl md:text-xl tracking-widest pt-[50%] sm:pt-[40%] md:pt-[30%] lg:pt-[23%] xl:pt-[15%]">
                El impulso que buscas para potenciar tu negocio <br/>
                a nivel tecnologico y generar clientes nuevo y fieles.        
            </Typography>
        </div>
    </div>
)
}

export default Home
