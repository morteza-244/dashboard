import { z } from "zod";

export const cabinSchema = z.object({
  name: z
    .string({ required_error: "نام اقامتگاه ضروری میباشد" })
    .min(3, { message: "حداقل 3 کاراکتر وارد کنید" }),
  maxCapacity: z
    .number({
      invalid_type_error: "ظرفیت اقامتگاه ضروری می باشد",
    })
    .min(1, { message: "حداقل ظرفیت اقامتگاه 1 نفر می باشد" })
    .max(1000, { message: "حداکثر ظرفیت اقامتگاه 1000 نفر می باشد" }),
  regularPrice: z
    .number({
      invalid_type_error: "مبلغ اجاره ضروری می باشد",
    })
    .min(100_000, { message: "حداقل مبلغ اجاره 100,000 تومان می باشد" })
    .max(100_000_000, {
      message: "حداکثر مبلغ اجاره 100,000,000 تومان می باشد",
    }),
  discount: z
    .number()
    .min(100_000, { message: "حداقل مبلغ تخفیف 100,000 تومان میباشد" })
    .max(100_000_000, {
      message: "حداکثر مبلغ تخفیف 100,000,000 تومان میباشد",
    }),
  description: z.string().min(3, { message: "حداقل 3 کاراکتر وارد کنید" }),
  image: z.custom<File[] | string>(),
});

export type TCabinFormData = z.infer<typeof cabinSchema>;
