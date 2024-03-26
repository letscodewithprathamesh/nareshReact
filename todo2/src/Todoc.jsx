function Todoc(props)
{
    return(
        <div>
            <h1>Im Child</h1>
            <li key={props.index}>{props.value}</li>    

        </div>
    )
}

export default Todoc