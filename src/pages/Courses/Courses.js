import { useLoaderData } from 'react-router-dom';
import CourseCartSummary from '../shared/CourseCartSummary/CourseCartSummary';

const Courses = () => {
const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(course => <CourseCartSummary
                key={course.id}
                course={course}
                ></CourseCartSummary>)
            }
        </div>
    );
};

export default Courses;