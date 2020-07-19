import React from "react"
import { submitCheckout, CheckoutPayload } from "../utils/api"
import { useCart } from "../CartContext/CartContext"
import { FormField } from "./FormField"
import { useForm } from "react-hook-form"
import * as yup from "yup"

interface CheckoutFormProps {
  submit?: (data: CheckoutPayload) => Promise<{ orderId: string | undefined, success?: boolean }>
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
  expDate: yup.date().required(),
  cvv: yup
    .string()
    .required()
    .matches(/^\d\d\d$/, "CVV should contain three numbers"),
})

export const CheckoutForm = ({
  submit = submitCheckout,
}: CheckoutFormProps) => {
  const { clearCart, products } = useCart()
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
    validationSchema,
  })

  const onSubmit = handleSubmit(async (data) => {
    const { orderId } = await submit({
      products 
    })
    clearCart()
    window.location.assign(`/order/?orderId=${orderId}`)
  })

  return (
    <form onSubmit={onSubmit}>
      <FormField
        placeholder="John Smith"
        type="text"
        name="name"
        label="Cardholder's Name"
        ref={register}
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
        ref={register}
        errors={errors.cardNumber}
      />
      <FormField
        type="month"
        name="expDate"
        label="Expiration Date"
        ref={register}
        errors={errors.expDate}
      />
      <FormField
        placeholder="000"
        type="number"
        name="cvv"
        label="CVV"
        ref={register}
        errors={errors.cvv}
        normalize={(value) => {
          return value.substr(0, 3)
        }}
      />
      <button className="nes-btn is-primary">Place order</button>
    </form>
  )
}
