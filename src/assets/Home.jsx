import { useEffect, useState } from "react";
import Cart from "./Cart";
import './home.css'
const Home = () => {
    const [allCourses,setAllcourses] = useState([])             //hook to set and store data
    const [selectedCourses,setSelectedCourses] = useState([])
    const [remaining,setRemaining] = useState(0)
    const [totalCredit,setTotalCredit] = useState(0)
    useEffect(()=>{                     //fetch json data
        fetch('../../public/coursesData.json')
        .then(res => res.json())
        .then(data => setAllcourses(data))
    },[])

//    console.log(allCourses)

 const handleCourseSelector = (course) =>{
    const isExist = selectedCourses.find((item => item.id == course.id));

    let count = course.credit;

    if(isExist){
        return alert("Course already selected");
    }

    else{
        selectedCourses.forEach((item) => {
            count = count + item.credit;
        });
    const remainingTotal = 20 - count;

    if(count > 20){
        return alert("Credit Limit: You can't take more credit");
    }

    else{
        setTotalCredit(count);
        setRemaining(remainingTotal);
        setSelectedCourses([...selectedCourses,course]);
    }
    }
   // console.log(count);
 }


    return (
        //jsx content here
    <main>
       <h2 className="text-4xl text-bold400 mt-12 mb-12">Course Registration</h2>
            <div className="container">
            
        <div className="home-container">

        {
            allCourses.map(course =>(
                <div key={allCourses.id} className="cart pt-4"> 
                <div className="cart-img">
                <img className="photo" src= {course.image} alt="" />
                </div>
            <h2>Couse Name: {course.course_name}</h2>
            <p>Course Details:<small>{course.course_details}</small></p>
            <div className="info">
            <p>Credit hours: {course.credit}</p>
            <p>$ Price: {course.price}</p>
            </div>
            <button onClick={()=>handleCourseSelector(course)} className="btn btn-primary">Select</button>
            </div>
            ))
        }

    </div>

    <div className="side-cart"> 
    <Cart key={selectedCourses.course_id} selectedCourses={selectedCourses} totalCredit ={totalCredit} remaining={remaining} ></Cart>
  
    </div>

</div>
    </main>
    );
};


export default Home;