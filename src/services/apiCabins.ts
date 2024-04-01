import { TNewCabin } from "@/types";
import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  try {
    const response = await supabase.from("cabins").select("*");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCabin = async (newCabin: TNewCabin) => {
  const imageName = `${Math.random()}-${newCabin.image?.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    throw new Error("Cabin could not be created");
  }

  // Upload cabin image
  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image!);

  // Delete the cabin if there was an error when uploading image
  if (uploadError) {
    await supabase
      .from("cabins")
      .delete()
      .eq(
        "id",
        data.map((cabin) => cabin.id)
      );
    console.log(uploadError.message);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
};

export const getCabin = async (id: number) => {
  const { data, error } = await supabase
    .from("cabins")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Cabin not found");
  }
  return data;
};

export const deleteCabin = async (id: number) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return data;
};
