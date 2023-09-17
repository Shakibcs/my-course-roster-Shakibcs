/* eslint-disable react/prop-types */
import './cart.css'
const Cart = ({selectedCourses,totalCredit, remaining}) => {
            console.log(selectedCourses);
    return (
        <div className="course-cart">
        
            <h4>Credit hours remaining {remaining}</h4>
            <hr />

            <h4>Course Name</h4>
            {
       selectedCourses.map((course) =>(
       <li key={course.course_id}>{course.course_name}</li>
       ))
       }

            <hr />
          
            <h4>Total Credit {totalCredit}</h4>
           

        </div>
    );
};

export default Cart;