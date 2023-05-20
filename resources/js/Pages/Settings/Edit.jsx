import {
    VerticalStack,
    HorizontalGrid,
    Box,
    Text,
    AlphaCard,
    Frame,
} from "@shopify/polaris";
import SettingsLayout from "@/Layouts/SettingsLayout";
import EditModeratorForm from "@/Components/EditModeratorForm";

const Edit = ({ moderator }) => {
    return (
        <Frame>
            <VerticalStack gap={{ xs: "8", sm: "4" }}>
                <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 4, sm: 0 }}
                        paddingInlineEnd={{ xs: 4, sm: 0 }}
                    >
                        <VerticalStack gap="4">
                            <Text as="h3" variant="headingMd">
                                Moderators
                            </Text>
                        </VerticalStack>
                    </Box>
                    <AlphaCard roundedAbove="sm">
                        <EditModeratorForm moderator={moderator} />
                    </AlphaCard>
                </HorizontalGrid>
            </VerticalStack>
        </Frame>
    );
};

Edit.layout = (page) => <SettingsLayout children={page} title="Settings" />;

export default Edit;
