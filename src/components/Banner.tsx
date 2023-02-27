import banner from "../assets/banner.jpg"


export default function Carosel() { 
    const bg = {
        backgroundImage:`url('${banner}')`,
        backgroundSize : 'cover'
    }
    return (
        <div style={bg} className='h-96 mt-5 w-full'>
        </div>
    )
}
