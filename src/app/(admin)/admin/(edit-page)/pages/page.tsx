"use client";

import axiosClient from "@/libs/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";

const CreatePage = () => {
  interface CustomField {
    type: "text" | "number" | "textarea";
    label: string;
    value: string | number;
  }

  interface Slice {
    name: string;
    heading: string;
    description: string;
    images: string[];
    customFields: CustomField[]; // Custom schema fields for each slice
  }

  interface FormData {
    slug: string;
    title: string;
    slices: Slice[];
  }

  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      slices: [
        {
          name: "",
          heading: "",
          description: "",
          images: [""],
          customFields: [],
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "slices" });

  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      await axiosClient.post("/pages", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pages"] });
      router.push("/admin/pages");
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Create Page</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 shadow rounded-lg"
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            {...register("title")}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter page title"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Slug
          </label>
          <input
            {...register("slug")}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter URL slug (e.g., landing-page)"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Slices
          </label>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-gray-300 p-4 rounded-md shadow-sm bg-gray-50 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Slice Name
                </label>
                <input
                  {...register(`slices.${index}.name`)}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter slice name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Heading
                </label>
                <input
                  {...register(`slices.${index}.heading`)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter slice heading"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  {...register(`slices.${index}.description`)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter slice description"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Images (Comma-separated URLs)
                </label>
                <input
                  {...register(`slices.${index}.images`)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter image URLs (comma-separated)"
                />
              </div>
              {/* Repeatable Custom Schema Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Custom Fields
                </label>
                <div className="space-y-2">
                  {fields[index]?.customFields?.map(
                    (customField, customIndex) => (
                      <div
                        key={`${index}-${customIndex}`}
                        className="p-4 border border-gray-200 bg-gray-100 rounded-md space-y-2"
                      >
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Field Label
                          </label>
                          <input
                            {...register(
                              `slices.${index}.customFields.${customIndex}.label`
                            )}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter field label"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Field Type
                          </label>
                          <select
                            {...register(
                              `slices.${index}.customFields.${customIndex}.type`
                            )}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="textarea">Textarea</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Default Value
                          </label>
                          <input
                            {...register(
                              `slices.${index}.customFields.${customIndex}.value`
                            )}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter default value"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            remove(
                              `slices.${index}.customFields.${customIndex}`
                            )
                          }
                          className="text-sm text-red-500 hover:underline"
                        >
                          Remove Custom Field
                        </button>
                      </div>
                    )
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      append({
                        name: `slices.${index}.customFields`,
                        label: "",
                        type: "text",
                        value: "",
                      })
                    }
                    className="text-sm text-indigo-500 hover:underline"
                  >
                    Add Custom Field
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove Slice
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              append({
                name: "",
                heading: "",
                description: "",
                images: [""],
                customFields: [],
              })
            }
            className="text-sm text-indigo-500 hover:underline"
          >
            Add Slice
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Create Page
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
