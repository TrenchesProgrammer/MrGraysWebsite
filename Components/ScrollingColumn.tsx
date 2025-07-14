import {Box, Flex} from '@mantine/core'
import Image from 'next/image'

interface ScrollingColumnProps {
  images: string[];
  direction?: "up" | "down";
  speed?: number;
}

const ScrollingColumn = ({ images, direction = "up", speed = 20 }: ScrollingColumnProps) => {
  const animationName = direction === "up" ? "scrollUp" : "scrollDown";
  const animationDuration = `${speed}s`;

  return (
    <Flex
      direction="column"
      flex={1}
      gap="9px"
      style={{
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Box
        style={{
          animation: `${animationName} ${animationDuration} linear infinite`,
          display: "flex",
          flexDirection: "column",
          gap: "9px",
        }}
      >
        {/* Render images twice for seamless loop */}
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            className="hero-gallery-container"
            h="34vh"
            style={{
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              alt={`mr gray tattoo sample ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              src={src}
            />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
export default ScrollingColumn;