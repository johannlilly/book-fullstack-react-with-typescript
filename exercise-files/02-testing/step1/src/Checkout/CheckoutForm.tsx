import React from "react"
import { FormField } from "./FormField"
import { useForm } from "react-hook-form"
import * as yup from "yup"

interface CheckoutFormProps {
  submit?: () => Promise<void>
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  cardNumber: yup
    .string()
    .required()
    .matches(
      /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
      "Card should have xxxx xxxx xxxx xxxx format"
    ),
  expDate: yup.date().nullable().default(null).required(),
  cvv: yup
    .string()
    .required()
    .matches(/^\d\d\d$/, "CVV should contain three numbers"),
})

export const CheckoutForm = ({
  submit = async () => {},
}: CheckoutFormProps) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
    validationSchema,
  })

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormField
        placeholder="John Smith"
        type="text"
        name="name"
        label="Cardholders Name"
        inputRef={register}
        errors={errors.name}
      />
      <FormField
        placeholder="0000 0000 0000 0000"
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        name="cardNumber"
        label="Card Number"
        normalize={(value) => {
          return (
            value
              .replace(/\s/g, "")
              .match(/.{1,4}/g)
              ?.join(" ")
              .substr(0, 19) || ""
          )
        }}
        inputRef={register}
        errors={errors.cardNumber}
      />
      <FormField
        type="month"
        name="expDate"
        label="Expiration Date"
        inputRef={register}
        errors={errors.expDate}
      />
      <FormField
        placeholder="000"
        type="number"
        name="cvv"
        label="CVV"
        inputRef={register}
        errors={errors.cvv}
        normalize={(value) => {
          return value.substr(0, 3)
        }}
      />
      <button className="nes-btn is-primary">Place order</button>
    </form>
  )
}
