import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCartSummary = ({ course }) => {
    const {_id, title, image_url, details } = course;
    console.log(course)
    return (
        <Card className='mb-4'>
            <Card.Header as="h5">Download Course Details as PDF.</Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details?.slice(0, 250) + '...'} <Link to={`/course/${_id}`}>Read More Course Details</Link></>
                            : <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CourseCartSummary;