import "../app/globals.css";
import { useDisclosure } from "@mantine/hooks";
import { Flex } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const FaqItem = () => {
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="faq-item">
      <Flex justify={"space-between"}>
        <h3 className="faq-question">What is Mr. Gray's?</h3>
        <IconPlus
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          onClick={handleToggleOpen}
        />
      </Flex>
      {open && (
        <p className="faq-answer">
          Mr. Gray's is a unique online platform that offers a wide range of
          services and products tailored to your needs.
        </p>
      )}
    </div>
  );
};

export default FaqItem;
