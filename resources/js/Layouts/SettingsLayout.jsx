import { Page } from "@shopify/polaris";

export default function BaseLayout({ title, children }) {
    return (
        <Page title={title} divider>
            {children}
        </Page>
    );
}
