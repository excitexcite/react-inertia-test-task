import { Page, Layout, LegacyCard } from "@shopify/polaris";
import React from "react";

export default function LayoutExample({ children }) {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <LegacyCard title="Online store dashboard" sectioned>
                        <p>
                            View a summary of your online store’s performance.
                        </p>
                    </LegacyCard>

                    <main>{children}</main>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
