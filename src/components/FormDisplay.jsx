import React, { useEffect } from "react";
import { useFormStore } from "../global/globalState";
import { useNavigate } from "react-router-dom";

const FormDataDisplay = () => {
  const formData = useFormStore((state) => state.formData);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(formData).length === 0) {
      navigate("/");
    }
  }, [formData]);

  return (
    <div className="fade-in min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Form Data</h1>
        {Object.keys(formData).length > 0 && (
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Name:</span> {formData.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {formData.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {formData.phone}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {formData.age}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {formData.address}
            </p>
            <p>
              <span className="font-semibold">City:</span> {formData.city}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDataDisplay;
