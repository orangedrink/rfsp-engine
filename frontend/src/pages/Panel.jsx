import {Link, useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
function Panel() {
    const {id} = useParams() || 0;
    const navigate = useNavigate()
    const [panel, setPanel] = useState({});
    async function getData(e){
      const response = await axios.get('http://localhost:5000/api/panels/'+e.target.id)
      setPanel(nextPanel => response.data.panel)
      navigate('/panel/'+e.target.id)
      console.log(e.target.id)
    }
    useEffect(()=>{
        async function getData(){
            const response = await axios.get('http://localhost:5000/api/panels/'+id)
            setPanel(nextPanel => response.data.panel)
            console.log(panel)
        }
        getData();
    },[])
    const choicesList = panel.choices && panel.choices.map((choice, i) => 
      <p key={i}><a href='#' onClick={getData} id={choice.panel}>{choice.text}</a></p>
    )
  return (
    <div>{
      panel.setting ?
      <img class='setting' src={'/'+panel.setting} />
      :
      <></>
    }
      
        <p>
          {panel.text}
        </p>
        {choicesList}
    </div>
  )
}
export default Panel