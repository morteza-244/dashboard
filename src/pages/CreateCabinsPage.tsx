import { CreateCabinForm } from "@/components/cabins";

const CreateCabinsPage = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-xl font-bold text-center">
        اطلاعات اقامتگاه خود را وارد کنید
      </h2>
      <CreateCabinForm />
    </div>
  );
};

export default CreateCabinsPage;
