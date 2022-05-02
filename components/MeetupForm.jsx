import { useRef } from 'react';
import { Card } from './ui/Card';
import { CardBody } from './ui/CardBody';
import { FormInput } from './ui/FormInput';

export const MeetupForm = ({ onAddMeetup }) => {
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            title: titleInput.current.value,
            image: imageInput.current.value,
            address: addressInput.current.value,
            description: descriptionInput.current.value,
        };

        onAddMeetup(formData);
    };

    return (
        <Card>
            <CardBody>
                <form onSubmit={submitHandler}>
                    <FormInput
                        innerRef={titleInput}
                        id="title"
                        label="Title"
                        // note: ref should be innerRef for custom components
                        required
                    />

                    <FormInput
                        innerRef={imageInput}
                        id="image"
                        label="Image"
                        type="url"
                        required
                    />

                    <FormInput
                        innerRef={addressInput}
                        id="address"
                        label="Address"
                        required
                    />
                    <FormInput
                        innerRef={descriptionInput}
                        id="description"
                        label="Description"
                        type="textarea"
                        required
                    />
                    <button className="btn btn-primary">Add Meetup</button>
                </form>
            </CardBody>
        </Card>
    );
};
