import moviedata from "./dataset.js";
import Movie from "./Movie.jsx";
function Movies()
{
    return(
        <div>
            <div id="maintitle">
                <h1>Indian Movies</h1>
            </div>

            <div className="movies">
            {
                moviedata.map((n)=>
                (
                    <Movie url={n.url} title={n.title} ratings={n.rating} >
                        
                        <p>{n.title}</p>
                    
                    </Movie>
                ))
            }
            
            </div>

            
        </div>
          
    )

}
export default Movies;