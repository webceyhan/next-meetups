export const FormInput = ({ label, type, innerRef, ...props }) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">
                {label}
            </label>

            {type === 'textarea' ? (
                <textarea
                    className="form-control"
                    rows={props.rows ?? 5}
                    ref={innerRef}
                    {...props}
                />
            ) : (
                <input
                    type={type ?? 'text'}
                    className="form-control"
                    ref={innerRef}
                    {...props}
                />
            )}
        </div>
    );
};
