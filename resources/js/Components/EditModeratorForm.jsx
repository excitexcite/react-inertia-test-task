import {
    Button,
    Form,
    FormLayout,
    Text,
    TextField,
    InlineError,
    HorizontalStack,
} from "@shopify/polaris";
import React from "react";
import { useForm } from "@inertiajs/react";

export default function EditModeratorForm({ moderator }) {
    const {
        data,
        setData,
        patch,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        email: moderator.email,
        password: "",
    });

    function edit(e) {
        console.log(data);
        e.preventDefault();
        patch(`/settings/${moderator.id}`);
    }

    function deleteModerator(e) {
        console.log(data);
        e.preventDefault();
        destroy(`/settings/${moderator.id}`);
    }

    return (
        <Form onSubmit={edit}>
            <FormLayout>
                <Text as="h4" variant="headingSm">
                    Edit moderator
                </Text>
                <TextField
                    type="email"
                    value={data.email}
                    onChange={(value) => setData("email", value)}
                    label="Account email"
                    autoComplete="email"
                    requiredIndicator
                />
                {errors.email && (
                    <InlineError message={errors.email}></InlineError>
                )}
                <TextField
                    type="password"
                    label="New password"
                    autoComplete="false"
                    value={data.password}
                    onChange={(value) => setData("password", value)}
                    requiredIndicator
                />
                {errors.password && (
                    <InlineError message={errors.password}></InlineError>
                )}
                <HorizontalStack gap="4">
                    <Button primary submit disabled={processing}>
                        Edit moderator
                    </Button>
                    <Button
                        destructive
                        submit
                        onClick={deleteModerator}
                        disabled={processing}
                    >
                        Delete moderator
                    </Button>
                </HorizontalStack>
            </FormLayout>
        </Form>
    );
}
