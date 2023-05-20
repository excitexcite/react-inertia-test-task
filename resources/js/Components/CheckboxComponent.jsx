import { Checkbox } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function CheckboxComponent({ label }) {
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback(
        (newChecked) => setChecked(newChecked),
        []
    );

    return <Checkbox label={label} checked={checked} onChange={handleChange} />;
}
