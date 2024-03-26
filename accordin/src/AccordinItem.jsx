function AccordinItem(props)
{
    const {title,context,openIndex,update,index}=props
    return(
        <div className="accordin-item">
            <h1>
               <button onClick={()=>{update(index)}}> {title}  <span>{openIndex?'-':'+'}</span></button> 
            </h1>
            {
                openIndex && <p>{context}</p>
            }

        </div>
    )

}

export default AccordinItem