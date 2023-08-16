export default function HeroInfo(){
    return (
        <div className="w-screen flex justify-center">
            <div className="flex justify-center items-center rounded-full w-4/5 h-32 bg-red-100">
                <div className="flex items-center">
                    <div className="bg-green-50 w-20 h-20 rounded-full"></div>
                    <div className="mr-32 ml-2.5">
                        <p className="textColorSecondary poppins">2 anos de Trabalho</p>
                        <p className="textColorPrimary poppins">Experiência</p>
                    </div>
                </div>
                <div className="w-px h-20 bg-black"></div>
                <div className="flex items-center">
                    <div className="bg-green-50 w-20 h-20 rounded-full ml-16"></div>
                    <div className="mr-32 ml-2.5">
                        <p className="textColorSecondary poppins">+50 projetos</p>
                        <p className="textColorPrimary poppins">Completos</p>
                    </div>
                </div>
                <div className="w-px h-20 bg-black"></div>
                <div className="flex items-center">
                    <div className="bg-green-50 w-20 h-20 rounded-full ml-16"></div>
                    <div className=" ml-2.5">
                        <p className="textColorSecondary poppins">Online Seg-Sex</p>
                        <p className="textColorPrimary poppins">Suporte</p>
                    </div>
                </div>
            </div>
        </div>
    )
}