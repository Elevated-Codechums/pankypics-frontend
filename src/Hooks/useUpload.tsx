import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useUploadFile = () => {
	return useMutation(async (formData) => {
		const response = await axios.post("/upload", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	});
};

export default useUploadFile;
