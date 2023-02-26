import Bann from "../banner/Banner";
import NewsCard from "./NewsCards";

function News(){

    return(
        <>
        <div className='banner'>
            <Bann/>
         </div>
        <NewsCard/>
        
        </>
    )
}

export default News;