import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";

const ShimmerBorderCard = ({ title, description, photo }) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-indigo-950 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-indigo-700">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-indigo-950 p-0 transition-colors duration-500 group-hover:bg-indigo-800">
        {photo && (
          <img
            src={photo}
            alt="Card Photo"
            className="w-full h-48 object-cover rounded-t-[7px]"
          />
        )}

        <div className="p-8 w-full flex flex-col items-center">
          <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50 text-center">
            {title || "Default Title"}
          </h4>

          <p className="relative z-10 text-slate-400 break-words text-center max-h-24 overflow-y-auto">
            {description || "Default description goes here. Provide a description as a prop to override this text."}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default ShimmerBorderCard;
