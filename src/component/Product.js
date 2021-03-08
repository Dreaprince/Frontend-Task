import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 900px;
    background: #fff;
    display: flex;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
`;

const Navigation = styled.div`
   width: 100%;
  max-width: 270px;
   margin-right: 25px;
   background: #f6f6f6;
   height: 900px;
`;

const Centerr = styled.div`
    width: 100%;
  max-width: 700px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: 880px;
    margin-right: 20px;
`;

const PImage = styled.div`
    background: #dfdfdf;
    width: 100%;
    max-width: 700px;
    height: 330px;
    /* margin-bottom: 10px; */
`;

const PMain = styled.div`
      width: 100%;
    max-width: 700px;
     height: 100px;
     margin-top: 35px;
     background: #dfdfdf;
     margin-bottom: 20px;
`;

const MidContain = styled.div`
    width: 100%;
    max-width: 700px;
   height: 120px;
   display: flex;
   flex-direction: row;
   margin-bottom: 20px;
   background: #fff;
`;

const Descip = styled.div`
   background: #dfdfdf;
   max-width: 340px;
   width: 100%;
   margin-right: 20px;
`;

const Attrib = styled.div`
  background: #dfdfdf;
   max-width: 340px;
   width: 100%;
`;

const TabCon = styled.div`
  width: 100%;
    max-width: 700px;
    background: #dfdfdf;
     height: 350px;
`;

const RCon = styled.div`
  background: #fff;
   width:100%;
   max-width: 370px;
   height: 880px;
   display: flex;
   flex-direction: column;
`;

const User = styled.div`
   background: #dfdfdf;
   height: 450px;
   margin-bottom: 30px
`;

const Mapp = styled.div`
   background: #dfdfdf;
   height: 430px;
`;


const Product = () => {
    const [productList, SetProductList] = useState(null);

    useEffect( () => {
    
       fetch('https://api-test.innoloft/product')
            .then(response => response.json())
            .then(data => SetProductList(data.list));
    }, [] );

    const [productId, SetProductId] = useState(null);

    useEffect( () => {
    const requestOptions = {
       method: 'PUT',
       headers: {'Content-type': 'application/json'},
       body: JSON.stringify({title: 'Added Member'})
   };
   fetch('https://api-test.innoloft/tri', requestOptions)
        .then(response => response.json())
        .then(data => SetProductId(data.id));
}, [] );
 
 

    return (
        <>
          <Container>
              <Navigation>Navigation</Navigation>
              <Centerr>
                  <PImage >Product Image</PImage>
                  <PMain >Prodct mainn info</PMain>
                  <MidContain>
                      <Descip >Description tab</Descip>
                      <Attrib>Attribution tab</Attrib>
                  </MidContain>
                  <TabCon>Tab contennt</TabCon>
              </Centerr>
              <RCon>
                  <User>User info</User>
                  <Mapp>Map</Mapp>
              </RCon>
          </Container>  
        </>
    )
}

export default Product;
