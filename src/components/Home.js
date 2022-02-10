import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        text="Order Online for Touchless Delivery"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
        backgroundImg="model-3.jpg"
        
      />
      <Section
        title="Model Y"
        text="Order Online for Touchless Delivery"
        leftButton="CUSTOM ORDER"
        rightButton="CUSTOM ORDER"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model S"
        text="Order Online for Touchless Delivery"
        leftButton="CUSTOM ORDER"
        rightButton="CUSTOM ORDER"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model X"
        text="Order Online for Touchless Delivery"
        leftButton="CUSTOM ORDER"
        rightButton="CUSTOM ORDER"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Solar Panels"
        text="Lowest Cost Solar Panels in America"
        leftButton="ORDER NOW"
        rightButton="LEARN MORE"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar Roof"
        text="Produce Clean Energy From Your Roof"
        leftButton="ORDER NOW"
        rightButton="LEARN MORE"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftButton="ORDER NOW"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
