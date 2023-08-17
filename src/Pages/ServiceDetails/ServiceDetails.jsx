/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { FaCookieBite, FaDownload, FaFileDownload, FaHeart, FaSuitcase, FaThumbsUp } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../Hooks/useTitle";
import './ServiceDetails.css'

const ServiceDetails = () => {
  const { id } = useParams();
  useTitle('Details');
  const loadedServiceData = useLoaderData();
  console.log(loadedServiceData[0].recipes);

  const [accepted, setAccepted] = useState(true);
  const handleAccepted = (id, name) => {
    setAccepted(id);
    toast(`You add ${name} as Favourite`);
    // console.log(id, name);
  }

  const [isActive, setIsActive] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const handleButton = () => {
    setShowAll(false);
    setIsActive(event => !event);
  }

  return (
    <div className="bg-black">
      {/* <h1 className="text-white">Service Details</h1> */}
      <div style={{ textAlign: 'center', margin: '10px' }}><h1 className="text-white border-2 border-white rounded-circle shadow p-2 mx-auto">Recipes of <span style={{ fontWeight: 'bold', color: 'red' }}>{loadedServiceData[0].name}</span></h1></div>

      <Container className="recipe-card">

        {
          loadedServiceData[0].recipes.slice(0, showAll ? 4 : 6).map(recipe =>
          ((recipe.recipe_name) ?

            <div >
              <Card style={{ border: '2px', height: '98%', backgroundColor: 'antiqueWhite', padding: '10px', margin: '10px', borderRadius: '10px' }}>
                <div>
                  <div >
                    <div >
                      <Card.Img style={{ width: '100%', height: '20rem', borderRadius: '10px' }} variant="top" src={recipe.recipe_photo_url} />

                    </div>
                    <div className="d-flex" >
                      <Button className="bg-transparent border-0" onClick={() => handleAccepted(recipe.recipe_id, recipe.recipe_name)} disabled={accepted[0] == 'null'} >
                        <FaHeart type="checkbox" style={{ color: 'red', width: '40px', height: '40px', margin: '10px 10px 0px 10px' }}></FaHeart>
                      </Button>


                      <Rating style={{ maxWidth: "160px", height: '50px', margin: '10px 0px 0px 0px' }} value={recipe.rating} readOnly />

                      <Card.Text style={{ fontSize: "20px", color: 'gray', margin: '20px 10px 0px 20px', fontWeight: 'bold' }}>
                        {recipe.rating}

                      </Card.Text>
                      <div className="border border-1 p-1 rounded bg-gradient shadow d-flex justify-content-end my-4 text-secondary ms-4 fw-semibold">
                        Download as PDF <FaDownload className="ms-2 h-75 text-danger"></FaDownload>
                      </div>
                    </div>

                  </div>

                  <div>
                    <Card.Body>
                      <Card.Title><h1>{recipe.recipe_name}</h1></Card.Title>
                      <div>
                        <div>
                          <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>

                            <span style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', fontSize: '20px', color: 'darkblue', marginBottom: '10px' }}>Ingredients: </span>
                            <div className="list-group-item border-0 rounded shadow p-2 my-2" style={{ columnCount: '2' }}>
                              <div className="p-2">
                                {
                                  recipe.ingredients.map(ingredient => <li>{ingredient}</li>)
                                }
                              </div>
                            </div>

                          </Card.Text>
                        </div>
                        <div>
                          <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>

                            <span style={{ fontSize: '20px', color: 'darkblue' }}>Cooking Methods: </span>
                            <div className="border-0 shadow p-4 rounded">
                              {
                                recipe.cooking_method.map(method => <li style={{ listStyle: 'none' }}>{method}</li>)
                              }
                            </div>
                          </Card.Text>
                        </div>
                      </div>




                    </Card.Body>
                  </div>
                </div>
              </Card>

            </div>
            : <></>
          )


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
      <div className="d-flex my-4">
        <Button onClick={handleButton} className={isActive ? 'd-none' : 'fw-bold fs-4 text-white py-2 my-4 mx-auto w-25 text-center rounded-5 bg-danger bg-gradient'}>See More</Button>
      </div>
    </div>

  );
};

export default ServiceDetails;
