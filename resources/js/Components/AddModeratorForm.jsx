import {
    Button,
    Form,
    FormLayout,
    Text,
    TextField,
    InlineError,
} from "@shopify/polaris";
import React from "react";
import { useForm } from "@inertiajs/react";

export default function AddModeratorForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/settings", {
            onSuccess: () => {
                reset();
            },
        });
    }

    return (
        <Form onSubmit={submit}>
            <FormLayout>
                <Text as="h4" variant="headingSm">
                    Register moderator
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
                    label="Password"
                    autoComplete="false"
                    value={data.password}
                    onChange={(value) => setData("password", value)}
                    requiredIndicator
                />
                {errors.password && (
                    <InlineError message={errors.password}></InlineError>
                )}
                <Button primary submit disabled={processing}>
                    Register moderator
                </Button>
            </FormLayout>
        </Form>
    );
}
