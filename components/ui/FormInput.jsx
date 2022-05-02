// define static counter to be used
// in the component as a unique id
let uid = 0;

export const FormInput = ({ label, type, innerRef, ...props }) => {
    // generate unique id for each input
    const id = `form-input-${uid++}`;

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>

            {type === 'textarea' ? (
                <textarea
                    id={id}
                    className="form-control"
                    rows={props.rows ?? 5}
                    ref={innerRef}
                    {...props}
                />
            ) : (
                <input
                    id={id}
                    type={type ?? 'text'}
                    className="form-control"
                    ref={innerRef}
                    {...props}
                />
            )}
        </div>
    );
};
