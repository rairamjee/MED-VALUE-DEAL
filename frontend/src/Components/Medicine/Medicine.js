import React, { useEffect, useState } from "react";
import { Card, CardImg, Container, CardBody, CardText, CardTitle, Button, CardSubtitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Medicine.css";

function Medicine() {
    const [medicines, setMedicines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/medicine/all'); // replace with your actual API
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMedicines(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching the medicines:", error);
                setError(error.message);
            }
        };

        fetchMedicines();
    }, []);

    if (error) {
        return <div>Error fetching the medicines: {error}</div>;
    }

    return (
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '5rem' }}>
            <Container style={{ display: 'flex', flexDirection: 'column', flexBasis: '45%' }}>
                {medicines.map((medicine, index) => (
                    <Card key={index} style={{ width: '30rem', display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: '1rem', boxShadow: '2px 2px 10px Grey' }} className="mt-3 mb-3" >
                        <CardImg variant="top" style={{ width: '3rem', height: '3rem' }} src={medicine.Medicine_image} alt={medicine.Medicine_name} />
                        <CardBody>
                            <CardTitle style={{ fontSize: '22px' }} className="mb-2">{medicine.Medicine_name}</CardTitle>
                            <CardSubtitle style={{ fontWeight: '400' }} className="mb-3 mt-3">{medicine.Company_name}</CardSubtitle>
                            <CardSubtitle style={{ fontSize: '18px' }} className="mb-3 mt-3">{medicine.Quantity}</CardSubtitle>
                            <CardBody style={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
                                <CardText style={{ fontSize: '21px' }}>
                                    Rs {medicine.Price}
                                </CardText>
                                <Button style={{ backgroundColor: '#008B8B' }}>
                                    <Link to="/Login" style={{ backgroundColor: '#008B8B', color: "white" }}>Add to Cart</Link>
                                </Button>
                            </CardBody>
                        </CardBody>
                    </Card>
                ))}
            </Container>
            <Card style={{ border: 'none', flexBasis: '40%' }} className="Prescription-Details">
                <CardTitle>Please add item(s) to proceed</CardTitle>
                <Button style={{ marginTop: '1rem', backgroundColor: '#008B8B', width: '50%' }}>View Cart {'>>'} </Button>
                <Card style={{ border: 'none', width: '22rem', boxShadow: '2px 2px 10px Grey', marginTop: '3rem' }}>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 0 0 1rem' }}>
                        <CardImg src="https://res.cloudinary.com/hwfihgbjm/image/upload/v1619815694/production/fx4xpyy4bdvdzrhve8ss.png" style={{ width: "40px", height: '40px', marginRight: '1rem' }} alt="Valid prescription" />
                        <CardTitle style={{ marginTop: '0.5rem' }}>What is a valid prescription?</CardTitle>
                    </Card>
                    <hr />
                    <CardText style={{ marginLeft: '0.5rem' }}>A valid prescription contains:</CardText>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://inmoment.com/wp-content/uploads/2020/09/Elective-Surgery-Specialists.svg" style={{ width: "40px", marginRight: '1rem' }} alt="Doctor details" />
                        <CardText style={{ marginTop: '0.5rem' }}>Doctor Details</CardText>
                    </Card>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://i.pinimg.com/564x/38/24/c0/3824c05b6583955d654f84fa352e899c.jpg" style={{ width: "40px", marginRight: '1rem' }} alt="Date of prescription" />
                        <CardText style={{ marginTop: '0.5rem' }}>Date Of Prescription</CardText>
                    </Card>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://nolongerbound.com/wp-content/uploads/2020/12/NLB-age-requirements-icon.png" style={{ width: "40px", marginRight: '1rem' }} alt="Patient details" />
                        <CardText style={{ marginTop: '0.5rem' }}>Patient Details</CardText>
                    </Card>
                    <Card style={{ border: 'none', display: 'flex', flexDirection: 'row', margin: '0.5rem 2rem 0 1rem' }}>
                        <CardImg src="https://img.freepik.com/premium-vector/jar-with-medicine-pills-pills-medical-kit-concepts-can-be-used-web-mobile-devices-vector_414360-2591.jpg?w=740" style={{ width: "40px", marginRight: '1rem' }} alt="Dosage details" />
                        <CardText style={{ marginTop: '0.5rem' }}>Dosage Details</CardText>
                    </Card>
                </Card>
            </Card>
        </Container>
    );
}

export default Medicine;
