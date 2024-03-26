import Accordin from "./Accordin.jsx"
import React from "react"
function App()
{
  const items=[
    {
      title:"Title1",
      context:"Chhatrapati Shivaji Maharaj was a Maratha warrior and founding ruler of the Maratha empire in western India. In India and even in other countries, he is still considered the greatest warrior of his time. An innovative military tactician and a skilful administrator, he is considered a valorous warrior. The great qualities he possessed as a leader and king helped him build the Maratha Empire into a powerful and massive power."
    },
    {
      title:"Title2",
      context:"For the people whose lives were ruined by the Mughal Empire, the birth of Chhatrapati Shivaji Maharaj was a good omen. During the hardships of the Mughal rule, he came as a ray of hope for the people. Maharaj was born on 18th February 1630 according to the Julian calendar and on Falgun Krishna Tritiya (Falgun Krishna Tritiya) according to the Hindu calendar at Shivneri Fort, in Junnar city, near Pune district, to Shahaji Bhosale and Jijabai Bhosale. We have provided some information about Shivaji Maharaj's birthdate at the end of this article"
    },
    {
      title:"Title3",
      context:"Shivaji Maharaj was regarded as a brave warrior who employed novel military strategies and was a skilled administrator. When he was a child, he used to read the glorious stories of Mahabharata and Ramayana. He not only internalised the solid and robust traits of the ideal Hindu's character but also adhered to their teachings from these two epics. He never learnt to submit to authority figures."
    },

  ]
  return(
    <div>
      <Accordin items={items} />
    </div>
  )
}

export default App