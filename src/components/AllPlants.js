import React from "react";
import { Card } from "react-bootstrap";

let allPlants = [
  {
    name: "Bell Pepper Plant",
    water_after: "3 days",
    img: "https://i.stack.imgur.com/67yzR.jpg"
  },
  {
    name: "Bird's Nest Fern",
    water_after: "3 days",
    img:
      "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/BIRDS-NEST-FERN-800-MAINIMAGE-FGT_1024x1024.gif?v=1552306568"
  },
  {
    name: "Croton",
    water_after: "7 days",
    img: "https://s1.r29static.com/bin/shop/e2b/x/1964870/image.jpg"
  },
  {
    name: "Dracaena",
    water_after: "14 days",
    img:
      "http://cdn.shopify.com/s/files/1/0059/8835/2052/products/dracaena_123_plastic_pot_grande.jpg?v=1549691165"
  },
  {
    name: "Fiddle Leaf Fig",
    water_after: "7 days",
    img:
      "https://www.westelm.com/weimgs/ab/images/wcm/products/201940/0331/faux-fiddle-leaf-fig-plant-c.jpg"
  },
  {
    name: "Jade",
    water_after: "14 days",
    img: "https://images.crateandbarrel.com/is/image/Crate/PottedJadePlantSHF16"
  },
  {
    name: "Money Tree",
    water_after: "14 days",
    img:
      "http://cdn.shopify.com/s/files/1/0059/8835/2052/products/Money_Tree_450_grande.jpg?v=1549683543"
  },
  {
    name: "Snake Plant",
    water_after: "14 days",
    img:
      "https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2012/03/mother-in-laws-snake-plant-400x600.jpg"
  },
  {
    name: "Spider Plant",
    water_after: "7 days",
    img:
      "https://bloomscape.com/wp-content/uploads/2019/05/bloomscape-product-spider-plant-charcoal-2.jpg"
  },
  {
    name: "Strawberry Plant",
    water_after: "3 days",
    img: "https://ae01.alicdn.com/kf/HTB10ykAXx2rK1RkSnhJq6ykdpXam.jpg_q50.jpg"
  },
  {
    name: "Wavy Fern",
    water_after: "2 days",
    img:
      "https://www.plantingman.com/wp-content/uploads/2018/10/Asplenium-nidus-Crispy-Wave-Indoor-Plants.jpg"
  }
];

export default function AllPlants() {
  return (
    <>
      <h3 className="all-plants-header">All Plants</h3>
      <div className="card-container">
        {allPlants.map(plant => (
          <Card
            className="individual-card"
            key={plant.name}
            style={{ width: "10rem" }}
          >
            <Card.Img className="card-img-top" variant="top" src={plant.img} />
            <Card.Body>
              <Card.Title className="plant-name">{plant.name}</Card.Title>
              <Card.Text className="plant-text">
                Water every {plant.water_after}.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
