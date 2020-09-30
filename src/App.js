import React, { useState } from "react";
import "./App.css";
import { Button, Row, Col, InputNumber, Select, Tabs } from "antd";
import dishses from "./data";

const { Option } = Select;
const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}


function onNext() {
  // console.log("aafsfs");
}

const App = () => {
  const [num, setNum] = useState(0)
  const [res, setRes] = useState('')
  const [meal, setMeal] = useState('')
  const [data, setDatafilter] = useState([]);
  const [dish, setDish] = useState([{}]);
  const [dishes, setDishes] = useState([{}]);
  const [infor, setInfo] = useState([])

  const handleChange = (value) => {
    setMeal(value)

    const dataFilter = dishses.filter(
      (item) => item.availableMeals.indexOf(value) !== -1
    );

    const restaurants = [];
    dataFilter.map((item, index) => {
      if (restaurants.indexOf(item.restaurant) === -1) {
        restaurants.push(item.restaurant);
      }
    });
    setDatafilter(restaurants);
    console.log(restaurants);
  };
  const onInputNumber = (value) => {
    // console.log(value)
    setNum(value)

   
  }

  const handleChangeDish = (value) => {
    setRes(value)
    const dishes = dishses.filter((item) => item.restaurant === value);

    const dish = [];
    dishes.map((item, index) => {
      if (dish.indexOf(item.name) === -1) {
        dish.push(item.name);
      }
    });
    setDish(dish);
    console.log(dish);

    // console.log('dishes', dishes)
  };
  const handleDish = (value) => {
    setDishes(value)
    const info = dishses.find((item) => item.name.indexOf(value) !== -1);
    setInfo(info)
    // console.log(infor);

    // console.log('dishes', dishes)
  };



  const addNewDish = () => {};
  const onSubmit = () => {};

  const meals = [
    {
      meal: "breakfast",
    },
    {
      meal: "lunch",
    },
    {
      meal: "dinner",
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          <>
            <h3>Please select a meal</h3>
            {/* {(() => console.log(data))()} */}
            <Select
              defaultValue={meals[0].meal}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              {meals &&
                meals.map((item, index) => {
                  return <Option value={item.meal}>{item.meal}</Option>;
                })}
            </Select>

            <h3>Please enter number of people</h3>

            <InputNumber
              min={1}
              max={10}
              defaultValue={1}
              onChange={onInputNumber}
            />
          </>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <h3>Please select a restaurant</h3>
          <Select
            defaultValue={data[0]}
            style={{ width: 120 }}
            onChange={handleChangeDish}
          >
            {data &&
              data.map((item, index) => {
                return <Option value={item}>{item}</Option>;
              })}
          </Select>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <>
            <Row gutter={12} id="dish">
              <Col className="gutter-row" span={6}>
                <h3>Please select a dish</h3>
                <Select
                  defaultValue={dish[0]}
                  style={{ width: 120 }}
                  onChange={handleDish}
                >
                  {dish &&
                    dish.map((item, index) => {
                      return <Option value={item}>{item}</Option>;
                    })}
                </Select>
              </Col>
              <Col className="gutter-row" span={6}>
                <h3>Please enter no of servings</h3>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  // onChange={onServing}
                />
              </Col>
            </Row>
            {/* <Button className="btn-add" onClick = {addNewDish}>add new dish</Button>  */}
           
          </>
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          <p>Meal : {meal} </p>
          <p>No of people : {num} </p>
          <p>Restaurants : {res} </p>
          <p>Dishes : {dishes} </p>
        </TabPane>
      </Tabs>

      {/* <Button className="btn-next" onClick = { () => onNext() }>Next</Button> */}
    </>
  );
};

export default App;
