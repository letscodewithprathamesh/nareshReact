
function Movie(props)
{
    let {url,title,ratings}=props;

    function print()
    {
        alert("Rating of "+title+" is "+ratings)
        
    }



    return(
        <div className="movie">
            {
                ratings>6 && (
                    <div><img src={url} alt="movies" />
                    <h1>{title}</h1>
                   {/*  <p>{props.children}</p> */}  {/*props.children send the data inside <Component_tag> as children to props object.children is keyword */}
                 <button onClick={print}>Show ratings</button>
                 </div>
                 )
            }
        </div>
    )
}
export default Movie