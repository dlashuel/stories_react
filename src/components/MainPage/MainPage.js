import React, { Component } from '../../../node_modules/react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card_list from '../cardList/Card_List.js';
import Navi from '../nav/Navi.js';
import Footer from '../footer/Footer.js';
import Header from '../header/Header.js'
import { stories_data }  from "../../stories_list.js";


function MainPage() {
  return (
      <React.Fragment>  
          <Navi />
          <Header />
          <Card_list data={ stories_data } />
          <Footer />
      </React.Fragment>
  );
}
export default MainPage;
