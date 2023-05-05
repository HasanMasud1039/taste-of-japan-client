/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import { FaCookieBite, FaSuitcase, FaThumbsUp } from "react-icons/fa";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(id);
  const loadedServiceData = useLoaderData();

  console.log(loadedServiceData.recipes);
  return (

    <Container>
      <div style={{textAlign:'center',  margin: '10px'}}><h1>Recipes of <span style={{color:'red'}}>{loadedServiceData.name}</span></h1></div>
      {
        loadedServiceData.recipes.map(recipe =>
          <div>
            <Card style={{ display: 'flex' , border:'2px', backgroundColor:'lightblue', width:'80%', padding:'10px', margin:'20px auto ', borderRadius:'10px'}}>
              <Card.Img style={{ display: 'flex', width: '18rem', height: '20rem',borderRadius:'10px' }} variant="top" src={recipe.recipe_photo_url} />
              <Card.Body style={{ margin: '0px 20px' }}>
                <Card.Title><h1>{recipe.recipe_name}</h1></Card.Title>
                <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', marginLeft:'20px'}}>
                  <div>
                    <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>
                      
                      <span style={{fontSize:'20px', color:'darkblue', marginBottom:'10px'}}>Ingredients: </span>
                      {
                        recipe.ingredients.map(ingredient => <li>{ingredient}</li>)
                      }
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>
                      
                      <span style={{fontSize:'20px', color:'darkblue'}}>Cooking Methods: </span>
                      {
                        recipe.cooking_method.map(method => <li style={{ listStyle: 'none' }}>{method}</li>)
                      }
                    </Card.Text>
                  </div>
                </div>


                <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>

                  {recipe.rating}
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        )
      }


    </Container>
  );
};

export default ServiceDetails;
