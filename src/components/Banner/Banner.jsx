
import './_Banner.scss';



function Banner({image, title}){

    let h1 = "";
    if(title) {
        h1 = <h1 className="Banner_text"> {title}</h1>
    }

    return (
        <div className="Banner">
            <img className="Banner_img" src={image} alt="Bannière"/>
       
            {h1}
        </div>
    )
}

export default Banner;