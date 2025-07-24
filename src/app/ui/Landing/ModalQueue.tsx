import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ModalQueue({
  setFlag,
}: {
  setFlag: (arg: boolean) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeIn" }}
      className="fixed top-0 bottom-0 left-0 right-0 w-1/1 flex items-center justify-center z-[1000] h-screen bg-[rgba(0,0,0,0.66)]">
      <p className="text-white text-[37px] w-[600px] text-center max-lg:w-[300px] max-lg:text-[25px]">
        Thank you, the app is currently being developed, but you are on the
        waiting list. We will inform you as soon as it is ready
      </p>
    </motion.div>,
    document.body
  );
}
