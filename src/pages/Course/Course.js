import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';


const Course = () => {
    
    const course = useLoaderData();
    const { title, image_url, details } = course;
    return (
            <Card>
                <Card.Header as="h5" className='d-flex justify-content-between align-items-center'><span>Download Course Details as PDF.</span> 
                <Link to='/pdf'><FaDownload></FaDownload></Link>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details
                        }
                    </Card.Text>
                    <Link to='/checkout'> <Button variant="primary">Get Premium Access</Button></Link>
                </Card.Body>
            </Card>
    );
};

export default Course;