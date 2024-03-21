import moviedata from "./dataset.js";
import { moviedata1 } from "./dataset.js";
import { moviedata2 } from "./dataset.js";
import { moviedata3 } from "./dataset.js";
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
                    <Movie url={n.url} title={n.title} />
                ))
            }
            
            </div>

            <div id="maintitle">
                <h1>HollyWood Movies</h1>
            </div>

            <div className="movies">
            {
                moviedata1.map((n)=>
                (
                    <Movie url={n.url} title={n.title} />
                ))
            }
            
            </div>

            <div id="maintitle">
                <h1>Korean Movies</h1>
            </div>

            <div className="movies">
            {
                moviedata2.map((n)=>
                (
                    <Movie url={n.url} title={n.title} />
                ))
            }
            
            </div>

            <div id="maintitle">
                <h1>Latest Movies</h1>
            </div>
            <div className="movies">
            {
                moviedata3.map((n)=>
                (
                    <Movie url={n.url} title={n.title} />
                ))
            }
            
            </div>
        </div>
          
    )

}
export default Movies;