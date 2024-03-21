import Child1 from "./Child1.jsx";

function Parent1()
{
    let names=["Prathamesh","Jayteerth","Siddhant"]
    let ages=[24,23,23];

    return(
        <div>
            <h1>Ex2</h1>
            {
                names.map((n,index)=>
                (
                    <Child1 name={n} age={ages[index]} />
                )
                )
            }
        </div>
    )
}
export default Parent1