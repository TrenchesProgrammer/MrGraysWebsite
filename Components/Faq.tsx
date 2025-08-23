import React from "react";
import FaqItem from "./FaqItem";
import {Flex} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import data from '../app/faq.json'
type FaqProps ={
  bodoniModa: string;
}

const Faq = ({bodoniModa}: FaqProps) => {
  const mobile = useMediaQuery("(max-width: 868px)");
  return (
    <div style={{ padding: "20px",  margin:'auto', borderRadius: "10px"}}>
      <Flex justify={'space-around'} direction={mobile ? "column" : "row"} >
        <h1 className={bodoniModa} style={{ textAlign: "left" }}>
          Frequently Asked Questions
        </h1>
        <div style={{width: mobile ? '100%' : 'unset', maxWidth: mobile ? '100%' : '500px'}}>
          {data.map((item, index) => (
            <FaqItem key={index} answer = {item.answer} question = {item.question}  />
          ))}
        </div>
      </Flex>
    </div>
  );
};

export default Faq;
