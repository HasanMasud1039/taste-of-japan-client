/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { FaCookieBite, FaHeart, FaSuitcase, FaThumbsUp } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(id);
  const loadedServiceData = useLoaderData();

  const [accepted, setAccepted] = useState(true);
  const handleAccepted = (id, name) => {
    setAccepted(id);
    toast(`You add ${name} as Favourite`);
    console.log(id, name);
  }

  return (

    <Container>
      <div style={{ textAlign: 'center', margin: '10px' }}><h1>Recipes of <span style={{ color: 'red' }}>{loadedServiceData.name}</span></h1></div>
      {
        loadedServiceData.recipes.map(recipe =>

          <div className="d-flex">
            <Card className="d-flex" style={{ border: '2px', backgroundColor: 'antiqueWhite', width: '80%', padding: '10px', margin: '20px auto ', borderRadius: '10px' }}>
              <div className="d-flex">
                <div >
                  <Card.Img style={{ display: 'flex', width: '18rem', height: '20rem', borderRadius: '10px' }} variant="top" src={recipe.recipe_photo_url} />

                  <div className="d-flex" >
                    <Button className="bg-transparent border-0" onClick={() => handleAccepted(recipe.recipe_id, recipe.recipe_name)} disabled={accepted[0] == 'null'} >
                      <FaHeart type="checkbox" style={{ color: 'red', width: '40px', height: '40px', margin: '10px 10px 0px 20px' }}></FaHeart>
                    </Button>


                    <Rating style={{ maxWidth: "160px", height: '40px', margin: '10px 10px 0px 20px' }} value={recipe.rating} readOnly />

                    <Card.Text style={{ fontSize: "20px", margin: '10px 10px 0px 20px', color: 'black' }}>
                      {recipe.rating}
                    </Card.Text>
                  </div>

                </div>

                <div>
                  <Card.Body style={{ margin: '0px 20px' }}>
                    <Card.Title><h1>{recipe.recipe_name}</h1></Card.Title>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', marginLeft: '20px' }}>
                      <div>
                        <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>

                          <span style={{ fontSize: '20px', color: 'darkblue', marginBottom: '10px' }}>Ingredients: </span>
                          {
                            recipe.ingredients.map(ingredient => <li>{ingredient}</li>)
                          }
                        </Card.Text>
                      </div>
                      <div>
                        <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>

                          <span style={{ fontSize: '20px', color: 'darkblue' }}>Cooking Methods: </span>
                          {
                            recipe.cooking_method.map(method => <li style={{ listStyle: 'none' }}>{method}</li>)
                          }
                        </Card.Text>
                      </div>
                    </div>




                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        )
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

    </Container>
  );
};

export default ServiceDetails;
