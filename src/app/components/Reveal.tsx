import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Reveal = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: delay ? delay : 0.2,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
