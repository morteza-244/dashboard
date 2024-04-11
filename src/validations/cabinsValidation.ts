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
  image: z.custom<File[]>(),
});

export const settingsSchema = z.object({
  minBookingLength: z.number({
    required_error: "این فیلد ضروری میباشد",
    invalid_type_error: "مقدار وارد شده نامعتبر میباشد",
  }),
  maxBookingLength: z.number({
    required_error: "این فیلد ضروری میباشد",
    invalid_type_error: "مقدار وارد شده نامعتبر میباشد",
  }),
  maxGuestsPerBooking: z.number({
    required_error: "این فیلد ضروری میباشد",
    invalid_type_error: "مقدار وارد شده نامعتبر میباشد",
  }),
  breakfastPrice: z.number({
    required_error: "این فیلد ضروری میباشد",
    invalid_type_error: "مقدار وارد شده نامعتبر میباشد",
  }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "ایمیل وارد شده نامعتبر میباشد" }),
  password: z.string().min(6, { message: "رمز عبور حداقل 6 رقم باشد" }),
});

export type TCabinFormData = z.infer<typeof cabinSchema>;
export type TSettingsFormData = z.infer<typeof settingsSchema>;
export type TLoginFormData = z.infer<typeof loginSchema>;
