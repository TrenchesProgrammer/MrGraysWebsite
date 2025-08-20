import React from "react";
import FaqItem from "./FaqItem";
import {Flex} from "@mantine/core";
type FaqProps ={
  bodoniModa: string;
}
const Faq = ({bodoniModa}: FaqProps) => {
  return (
    <div style={{backgroundColor: "#1a1a1a", padding: "20px", width: "80%", margin:'auto', borderRadius: "10px"}}>
      <Flex>
        <h1 className={bodoniModa} style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </h1>
        <div style={{width:'100%'}}>
          <FaqItem />
          <FaqItem />
          <FaqItem />
          <FaqItem />
        </div>
      </Flex>
    </div>
  );
};

export default Faq;
