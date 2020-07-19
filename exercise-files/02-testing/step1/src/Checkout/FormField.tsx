import React from "react"

interface FormError {
  message: string
}

interface FormFieldProps
  extends React.HTMLProps<HTMLInputElement> {
  label: string
  inputRef?: React.Ref<HTMLInputElement>
  errors?: FormError
  normalize?: (value: string) => string
}

export const FormField = ({
  label,
  name,
  inputRef,
  errors,
  normalize = (value) => value,
  ...inputProps
}: FormFieldProps) => {
  return (
    <div className="nes-field">
      <label id={`${name}-label`} htmlFor={name}>
        {label}:
      </label>
      <input
        aria-labelledby={`${name}-label`}
        ref={inputRef}
        name={name}
        {...inputProps}
        className={`nes-input ${errors && "is-error"}`}
        onChange={(e) =>
          (e.target.value = normalize(e.target.value))
        }
      />
      {errors && (
        <p className="note nes-text is-error">
          Error: {errors.message}
        </p>
      )}
    </div>
  )
}
