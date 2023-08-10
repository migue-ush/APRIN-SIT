import {Typography} from "@material-tailwind/react";

const Home = () => {
return (
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32" >
        <div className="absolute top-0 h-full w-full bg-[url('./img/img-first-ultima-4.jpg')] bg-cover bg-center "  />
        <div className=" container flex-col bg-opacity-50 absolute">
            <h1 className=" grid grid-cols-1 xl:text-[138px] lg:text-[110px] text-[40px] sm:text-[65px] md:text-[80px] font-extrabold 
                xl:pb-[50px] lg:mt-[150px] sm:mt-[250px] "> 
                <span class="bg-clip-text text-transparent opacity-100 bg-gradient-to-r from-emerald-500 to-fuchsia-400">
                    DESARROLLO WEB
                </span>
            </h1>
            
            <Typography 
                variant="lead" 
                color="white" 
                className="opacity-60 grid sm:mt-[350px] lg:mt-[200px] font-bold lg:text-2xl md:text-xl tracking-widest ">
                El impulso que buscas para potenciar tu negocio <br/>
                a nivel tecnologico y generar clientes nuevo y fieles.        
            </Typography>
        </div>
    </div>
)
}

export default Home
