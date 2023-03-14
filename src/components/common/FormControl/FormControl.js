import './form.css'

const Element = Element => ({ input, meta, ...props }) => {

    let hasError = meta.touched && meta.error

    return (
        <div>
            { hasError && <span>{meta.error}</span> }
        <div className={'form__control' + ' ' + (hasError ? 'error' : '')}>
            <Element {...input} {...props}  />
        </div>
        </div>
    )
}


export const Textarea = Element("textarea")


export const Input = Element("input")
