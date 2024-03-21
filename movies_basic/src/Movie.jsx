
function Movie(props)
{
    let {url,title}=props;
    return(
        <div className="movie">
            
           <img src={url} alt="movies" />
           <h1>{title}</h1>
        </div>
    )
}
export default Movie