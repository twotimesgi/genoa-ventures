import { NAV_ITEMS } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

interface MobileNavProps {
    onClose: () => void
}

export const MobileNav = ({onClose} : MobileNavProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow = "unset"};
  }, []);

  const backdropVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuVariants = {
    hidden: {
      x: "-100%", // Start off-screen to the left
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0, // Move into view
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };    


  return (
    <motion.div
      className="fixed inset-0 w-full h-[100vh] backdrop-blur-[20px] z-40 laptop:hidden overflow-hidden"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="w-[40%] min-w-[200px] bg-white h-full relative top-0 left-0 pt-20"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <ul>
            {NAV_ITEMS.map((item: NavItem) => 
            <li key={item.href} className="py-4 px-8 border-b border-b-neutral-200 last:border-b-0">
                <Link className="h-full w-full leading-6 relative" href={item.href}>
                {item.isActive && <span className="h-2 w-2 bg-primary rounded-full absolute -left-3 top-1/2 -translate-y-1/2"/>}
                {item.text}
                </Link>
            </li>
            )}
        </ul>
      </motion.div>
    </motion.div>
  );
};
