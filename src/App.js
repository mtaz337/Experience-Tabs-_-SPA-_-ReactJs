import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(()=>{
    fetchData();
  },[]);

 
if(loading){
  return <h1>Loading...</h1>
}

const {company,dates,duties,title,id,order} = jobs[value];

  return(
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
      <div className='btn-container'>
        {
          jobs.map((job, index)=>{
            
           return  <button key={job.id} onClick={()=> {setValue(index)}} className={`job-btn ${index === value && 'active-btn'}`}>
              {job.company}
            </button>
          })
        }
      </div>
      <article className='job-info'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty)=>{
          return <div className='job-desc'>
            <FaAngleDoubleRight/>
            <p>{duty}</p>
          </div>
        })}
      </article>
      </div>
    </section>
    )
}

export default App
