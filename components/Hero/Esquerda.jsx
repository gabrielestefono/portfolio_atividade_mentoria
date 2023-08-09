export default function HeroEsquerda(){
    return (
        <div className="flex justify-center flex-col flex-1">
            <div className="mt-40">
                <h2 className="textColorPrimary poppins font-bold text-2xl">Olá, eu sou</h2>
            </div>
            <div className="mt-24">
                <h1 className="poppins textColorSecondary font-semibold text-xl">Desenvolvedor Full Stack</h1>
                <p className="poppins textColorSecondary mt-4 text-sm font-medium w-11/12">Full stack developers possess a wide range of skills and can work on both the client-side (front-end) and server-side (back-end) of web applications. This versatility makes them valuable assets in a development team.</p>
            </div>
            <div>
                <button className="mt-6 elementColorPrimary text-sm text-white font-semibold rounded-4 w-40	h-12">Ver meus projetos</button>
            </div>
        </div>
    )
}